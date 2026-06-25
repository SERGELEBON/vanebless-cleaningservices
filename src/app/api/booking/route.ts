import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, date, message, type } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields (name, phone, service)." },
        { status: 400 }
      );
    }

    const record = await db.bookingRequest.create({
      data: {
        name: String(name).slice(0, 120),
        email: email ? String(email).slice(0, 200) : null,
        phone: String(phone).slice(0, 40),
        service: String(service).slice(0, 200),
        date: date ? String(date).slice(0, 40) : null,
        message: message ? String(message).slice(0, 4000) : null,
        type: type === "quote" ? "quote" : "booking",
      },
    });

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error("[api/booking] error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
