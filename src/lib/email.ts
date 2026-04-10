import { Resend } from "resend";
import type { ContactInquiry } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: Omit<ContactInquiry, "id" | "status" | "createdAt">) {
  const { error } = await resend.emails.send({
    from: "XCLER Contact <hello@xcler.dev>",
    to: ["hello@xcler.dev"],
    subject: `New inquiry from ${data.name} — ${data.service}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.whatsapp ? `<p><strong>WhatsApp:</strong> ${data.whatsapp}</p>` : ""}
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : ""}
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Budget:</strong> ${data.budget}</p>
      <p><strong>Timeline:</strong> ${data.timeline}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      <p><strong>Source:</strong> ${data.source}</p>
    `,
  });

  if (error) {
    throw new Error(`Email send failed: ${error.message}`);
  }
}

export async function sendAutoReply(name: string, email: string) {
  await resend.emails.send({
    from: "Musharraf at XCLER <hello@xcler.dev>",
    to: [email],
    subject: "Got your message — XCLER",
    html: `
      <h2>Hi ${name},</h2>
      <p>Thanks for reaching out to XCLER. We've received your inquiry and will get back to you within 24 hours.</p>
      <p>In the meantime, feel free to check out our work at <a href="https://xcler.dev/work">xcler.dev/work</a>.</p>
      <br/>
      <p>Best,<br/>Musharraf Aziz<br/>Founder, XCLER</p>
    `,
  });
}
