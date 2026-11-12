import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().trim().max(120),
  message: z.string().trim().min(10).max(2000),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please check your details and try again.",
        },
        { status: 400 }
      );
    }

    await db.contactMessage.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        message: parsed.data.message,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] failed to save message:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong on our side. Please try again.",
      },
      { status: 500 }
    );
  }
}
