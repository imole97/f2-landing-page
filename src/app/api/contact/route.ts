import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { createHash } from "node:crypto";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

// Expected JSON body
// {
//   fullName: string,
//   email: string,
//   message?: string
// }
export async function POST(request: NextRequest) {
    try {
        const { fullName, email, message } = await request.json();

        if (!fullName || typeof fullName !== "string") {
            return NextResponse.json({ error: "Full name is required." }, { status: 400 });
        }
        if (!email || typeof email !== "string") {
            return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
        }

        const audienceId = process.env.CONTACT_AUDIENCE_ID;
        if (!audienceId) {
            return NextResponse.json({ error: "Audience ID not configured." }, { status: 500 });
        }

        const emailHash = createHash("md5").update(email.toLowerCase()).digest("hex");

        let alreadySubscribed = false;
        try {
            const existing = await mailchimp.lists.getListMember(audienceId, emailHash);
            if (existing?.status === "subscribed") alreadySubscribed = true;
        } catch {
            // Not found; proceed to create
        }

        try {
            const merge_fields = {
                NAME: fullName,
                MESSAGE: message ?? "",
            } as Record<string, string>;

            const payload = alreadySubscribed
                ? await mailchimp.lists.updateListMember(audienceId, emailHash, {
                    email_address: email,
                    status: "subscribed",
                    merge_fields,
                })
                : await mailchimp.lists.addListMember(audienceId, {
                    email_address: email,
                    status: "subscribed",
                    merge_fields,
                });

            return NextResponse.json({ success: true, data: payload, alreadySubscribed });
        } catch (mcErr) {
            console.error("Mailchimp contact error:", mcErr);
            return NextResponse.json({ error: "Failed to submit contact." }, { status: 500 });
        }
    } catch (err) {
        console.error("Contact API error:", err);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}

