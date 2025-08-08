import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { createHash } from "node:crypto";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request: NextRequest) {
    try {
        const { fullName, companyName, email } = await request.json();

        if (!email || typeof email !== "string") {
            return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
        }

        const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
        if (!audienceId) {
            return NextResponse.json({ error: "Audience ID not configured." }, { status: 500 });
        }

        const emailHash = createHash("md5").update(email.toLowerCase()).digest("hex");

        try {
            const existing = await mailchimp.lists.getListMember(audienceId, emailHash);
            if (existing?.status === "subscribed") {
                return NextResponse.json({ error: "Email already subscribed." }, { status: 400 });
            }
        } catch {
            // If not found, Mailchimp throws an error — safe to ignore here.
        }

        const data = await mailchimp.lists.addListMember(audienceId, {
            email_address: email,
            status: "pending",
            merge_fields: { FULLNAME: fullName ?? "" ,COMPANYNAME:companyName??""},
        });

        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.error("Mailchimp error:", err);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
