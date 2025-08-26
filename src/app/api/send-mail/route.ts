import { NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }
        const { data, error } = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>", // Needs verified domain/email in Resend
            to: "imoleadebanjo97@gmail.com", // Your destination email
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <div>
          <h2>New Message from Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(
            { success: "Message sent successfully", data },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { error: error },
            { status: 500 }
        );
    }
}