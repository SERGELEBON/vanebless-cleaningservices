import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields (name, phone, message)." },
        { status: 400 }
      );
    }

    const record = await db.contactMessage.create({
      data: {
        name: String(name).slice(0, 120),
        email: email ? String(email).slice(0, 200) : null,
        phone: String(phone).slice(0, 40),
        subject: subject ? String(subject).slice(0, 200) : null,
        message: String(message).slice(0, 4000),
      },
    });

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error("[api/contact] error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
