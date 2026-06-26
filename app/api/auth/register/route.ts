import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { hashPassword, generateToken } from "@/lib/auth";
import { sendEmail } from "@/lib/email";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    const password_hash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
        role
      }
    });

    const token = generateToken(user.id, user.email);

    await sendEmail({
      to: email,
      subject: "Welcome to HoopersElite Academy",
      html: `<h1>Welcome, ${name}!</h1><p>Your account has been created successfully.</p>`
    });

    return NextResponse.json(
      { message: "User registered successfully", token, user: { id: user.id, name, email, role } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
