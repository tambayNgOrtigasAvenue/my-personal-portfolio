import { NextRequest, NextResponse } from "next/server";
import rateLimit from "@/utils/rate-limiter";

// Add named export for POST method
export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Create the transport message object
    const transportMessage = {
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL_RECEIVER,
      subject: `Portfolio: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Here you would send the email using your email service
    // Example with nodemailer:
    // await transporter.sendMail(transportMessage);

    // Or with your email API:
    // const response = await fetch('your-email-api-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify(transportMessage),
    // });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
