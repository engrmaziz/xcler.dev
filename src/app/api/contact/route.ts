import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import { generateClientEmailHTML, generateTeamEmailHTML } from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      website,
      whatsapp,
      service,
      budget,
      timeline,
      message,
      source,
    } = body ?? {};

    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("inquiries")
      .insert([
        {
          name,
          email,
          company,
          website,
          whatsapp,
          service,
          budget,
          timeline,
          message,
          source,
          status: "new",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
    }

    const receivedAt = new Date().toISOString();

    await resend.emails.send({
      from: "XCLER Website <noreply@xcler.dev>",
      to: ["hello@xcler.dev"],
      subject: `🚀 New Project Brief — ${name} (${service})`,
      html: generateTeamEmailHTML({
        name,
        email,
        company,
        website,
        whatsapp,
        service,
        budget,
        timeline,
        message,
        source,
        receivedAt,
      }),
    });

    const firstName = String(name).split(" ")[0];

    await resend.emails.send({
      from: "Musharraf at XCLER <hello@xcler.dev>",
      replyTo: "hello@xcler.dev",
      to: [email],
      subject: `Got your brief, ${firstName}! ✓ — XCLER`,
      html: generateClientEmailHTML({
        firstName,
        service,
        budget,
        timeline,
      }),
    });

    return NextResponse.json({ success: true, id: data?.id || "saved" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
