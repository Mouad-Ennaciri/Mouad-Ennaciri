import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as ContactPayload;

    const trimmedName = name?.trim() ?? "";
    const trimmedEmail = email?.trim() ?? "";
    const trimmedMessage = message?.trim() ?? "";

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;
    const contactToEmail = process.env.CONTACT_TO_EMAIL ?? gmailUser;

    if (!gmailUser || !gmailPassword || !contactToEmail) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: contactToEmail,
      replyTo: trimmedEmail,
      subject: `Portfolio inquiry from ${trimmedName}`,
      text: [
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        "",
        "Message:",
        trimmedMessage,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New portfolio contact request</h2>
          <p><strong>Name:</strong> ${trimmedName}</p>
          <p><strong>Email:</strong> ${trimmedEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${trimmedMessage.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send message right now." },
      { status: 500 },
    );
  }
}
