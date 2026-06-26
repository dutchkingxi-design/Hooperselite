import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, age, experience, message } = await req.json();

    if (!name || !email || !phone || !age) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send confirmation email to applicant
    await sendEmail({
      to: email,
      subject: "HoopersElite Academy - Application Received",
      html: `<h2>Thank you, ${name}!</h2><p>We've received your application and will review it shortly.</p>`
    });

    // Send admin notification
    await sendEmail({
      to: process.env.SYSTEM_EMAIL || "",
      subject: "New Admissions Application",
      html: `<h2>New Application</h2><p><strong>${name}</strong> (${email}) applied. Age: ${age}, Experience: ${experience}</p><p>Message: ${message}</p>`
    });

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admissions error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
