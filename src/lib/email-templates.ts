const ACCENT = "#8A9900";
const DARK = "#0D0D0D";
const LIGHT_BG = "#F5F5F0";
const CARD_BG = "#FFFFFF";
const TEXT = "#1A1A1A";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatValue(value?: string) {
  return value ? escapeHtml(value) : "Not provided";
}

export function generateTeamEmailHTML(data: {
  name: string;
  email: string;
  company?: string;
  website?: string;
  whatsapp?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
  source?: string;
  receivedAt: string;
}) {
  const serviceLabel = escapeHtml(data.service);
  const message = escapeHtml(data.message).replace(/\n/g, "<br/>");

  return `
  <div style="background:${LIGHT_BG}; padding:24px; font-family:Arial, sans-serif;">
    <div style="max-width:600px; margin:0 auto; background:${CARD_BG}; border-radius:12px; overflow:hidden; color:${TEXT};">
      <div style="background:${DARK}; padding:24px; text-align:center;">
        <div style="font-size:22px; letter-spacing:0.2em; font-weight:700; color:#FFFFFF;">
          XCLER<span style="color:#E8FF00;">.dev</span>
        </div>
        <div style="margin-top:8px; font-size:12px; letter-spacing:0.3em; color:#EDEDED; text-transform:uppercase;">
          New Project Brief Received
        </div>
      </div>
      <div style="background:#E8FF00; padding:12px; text-align:center; font-weight:700; color:#0D0D0D; font-size:12px; letter-spacing:0.2em;">
        🚀 ${serviceLabel.toUpperCase()} REQUEST
      </div>
      <div style="padding:24px;">
        <h3 style="margin:0 0 12px; font-size:14px; text-transform:uppercase; letter-spacing:0.2em; color:${ACCENT};">Contact Info</h3>
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <tr><td style="padding:6px 0; color:#666;">Name</td><td style="padding:6px 0;">${escapeHtml(data.name)}</td></tr>
          <tr><td style="padding:6px 0; color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color:${ACCENT}; text-decoration:none;">${escapeHtml(data.email)}</a></td></tr>
          <tr><td style="padding:6px 0; color:#666;">Company</td><td style="padding:6px 0;">${formatValue(data.company)}</td></tr>
          <tr><td style="padding:6px 0; color:#666;">Website</td><td style="padding:6px 0;">${formatValue(data.website)}</td></tr>
          <tr><td style="padding:6px 0; color:#666;">WhatsApp</td><td style="padding:6px 0;">${formatValue(data.whatsapp)}</td></tr>
        </table>

        <div style="margin:24px 0; border-top:1px solid #EEE;"></div>

        <h3 style="margin:0 0 12px; font-size:14px; text-transform:uppercase; letter-spacing:0.2em; color:${ACCENT};">Project Details</h3>
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <tr><td style="padding:6px 0; color:#666;">Service</td><td style="padding:6px 0;">${serviceLabel}</td></tr>
          <tr><td style="padding:6px 0; color:#666;">Budget</td><td style="padding:6px 0;">${formatValue(data.budget)}</td></tr>
          <tr><td style="padding:6px 0; color:#666;">Timeline</td><td style="padding:6px 0;">${formatValue(data.timeline)}</td></tr>
          <tr><td style="padding:6px 0; color:#666;">Source</td><td style="padding:6px 0;">${formatValue(data.source)}</td></tr>
          <tr><td style="padding:6px 0; color:#666;">Received</td><td style="padding:6px 0;">${escapeHtml(data.receivedAt)}</td></tr>
        </table>

        <div style="margin:24px 0; border-top:1px solid #EEE;"></div>

        <h3 style="margin:0 0 12px; font-size:14px; text-transform:uppercase; letter-spacing:0.2em; color:${ACCENT};">Project Brief</h3>
        <div style="font-size:14px; line-height:1.6; color:${TEXT};">${message}</div>
      </div>
    </div>
  </div>
  `;
}

export function generateClientEmailHTML(data: {
  firstName: string;
  service: string;
  budget?: string;
  timeline?: string;
}) {
  return `
  <div style="background:${LIGHT_BG}; padding:24px; font-family:Arial, sans-serif;">
    <div style="max-width:600px; margin:0 auto; background:${CARD_BG}; border-radius:12px; overflow:hidden; color:${TEXT};">
      <div style="background:${DARK}; padding:24px; text-align:center;">
        <div style="font-size:22px; letter-spacing:0.2em; font-weight:700; color:#FFFFFF;">
          XCLER<span style="color:#E8FF00;">.dev</span>
        </div>
      </div>
      <div style="padding:24px;">
        <h2 style="margin:0 0 12px; font-size:22px; color:${TEXT};">Hi ${escapeHtml(
          data.firstName
        )},</h2>
        <p style="margin:0 0 16px; font-size:14px; line-height:1.6; color:#333;">
          Thanks for reaching out to XCLER. We&apos;ve received your project brief and
          will get back to you within 24 hours.
        </p>
        <div style="margin:16px 0; padding:16px; border:1px solid #EEE; border-radius:10px;">
          <div style="font-size:12px; text-transform:uppercase; letter-spacing:0.2em; color:${ACCENT}; margin-bottom:8px;">Your Request</div>
          <div style="font-size:14px; color:${TEXT};">Service: ${escapeHtml(
            data.service
          )}</div>
          <div style="font-size:14px; color:${TEXT};">Budget: ${formatValue(
            data.budget
          )}</div>
          <div style="font-size:14px; color:${TEXT};">Timeline: ${formatValue(
            data.timeline
          )}</div>
        </div>
        <p style="margin:0 0 16px; font-size:14px; line-height:1.6; color:#333;">
          In the meantime, you can browse our latest work here:
          <a href="https://xcler.dev/work" style="color:${ACCENT}; text-decoration:none;">xcler.dev/work</a>.
        </p>
        <p style="margin:0; font-size:14px; color:#333;">
          Best,<br/>Musharraf Aziz<br/>Founder, XCLER
        </p>
      </div>
    </div>
  </div>
  `;
}
