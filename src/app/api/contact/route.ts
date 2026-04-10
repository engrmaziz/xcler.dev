import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseClient } from "@/lib/supabase";
import { generateClientEmailHTML, generateTeamEmailHTML } from "@/lib/email-templates";

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

    const supabase = getSupabaseClient();
    let inquiryId: string | null = null;

    if (supabase) {
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
      } else {
        inquiryId = data?.id ?? null;
      }
    } else {
      console.warn("Supabase not configured; skipping inquiry insert.");
    }

    const receivedAt = new Date().toISOString();

    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

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
    } else {
      console.warn("Resend API key missing; skipping email notifications.");
    }

    return NextResponse.json({ success: true, id: inquiryId ?? "saved" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
