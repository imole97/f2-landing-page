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
//   phoneNumber?: string,
//   about?: string,          // what best describes you
//   description?: string,    // business idea / problem
//   readiness?: string       // Yes | No
// }
export async function POST(request: NextRequest) {
    try {
        const { fullName, email, phoneNumber, about, description, readiness } = await request.json();

        if (!fullName || typeof fullName !== "string") {
            return NextResponse.json({ error: "Full name is required." }, { status: 400 });
        }
        if (!email || typeof email !== "string") {
            return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
        }

        const audienceId = process.env.LAUNCHPAD_AUDIENCE_ID;
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

        // If already subscribed, we still update merge fields with latest application data
        let responseData;
        try {
            if (alreadySubscribed) {
                responseData = await mailchimp.lists.updateListMember(audienceId, emailHash, {
                    email_address: email,
                    status: "subscribed",
                    merge_fields: {
                        FULLNAME: fullName,
                        PHONE: phoneNumber ?? "",
                        ABOUT: about ?? "",
                        DETAILS: description ?? "",
                        READINESS: readiness ?? "",
                    },
                });
            } else {
                responseData = await mailchimp.lists.addListMember(audienceId, {
                    email_address: email,
                    status: "subscribed",
                    merge_fields: {
                        FULLNAME: fullName,
                        PHONE: phoneNumber ?? "",
                        ABOUT: about ?? "",
                        DETAILS: description ?? "",
                        READINESS: readiness ?? "",
                    },
                });
            }
        } catch (mcErr) {
            console.error("Mailchimp apply error:", mcErr);
            return NextResponse.json({ error: "Failed to submit application." }, { status: 500 });
        }

        return NextResponse.json({ success: true, data: responseData, alreadySubscribed });
    } catch (err) {
        console.error("Application API error:", err);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
