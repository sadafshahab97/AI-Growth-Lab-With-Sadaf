import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 1. Explicit interface for Proposal Payload
interface ProposalRequestBody {
  name: string;
  email: string;
  businessName?: string;
  requirement: string;
  pageSource: string;
}

export async function POST(request: Request) {
  try {
    // Applying strict type mapping on request body
    const body: ProposalRequestBody = await request.json();
    const { name, email, businessName, requirement, pageSource } = body;

    const smtpHost: string = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort: number = Number(process.env.SMTP_PORT) || 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    const emailHtml: string = `
      <!DOCTYPE html>
      <html>
      <body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: sans-serif;">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" style="max-width: 600px; background: #ffffff; border: 1px solid #eef0f2; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
                <tr>
                  <td style="padding: 40px; border-bottom: 1px solid #f1f3f5;">
                    <span style="padding: 6px 12px; background: #FFF0F2; color: #E60023; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 100px;">
                      Proposal Request
                    </span>
                    <h1 style="margin: 16px 0 0 0; font-size: 24px; color: #111111;">✨ New Proposal Requested</h1>
                    <p style="margin: 5px 0 0 0; font-size: 14px; color: #666666;">Submitted from: <strong>${pageSource}</strong></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 40px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                      <tr style="border-bottom: 1px solid #f1f3f5;">
                        <td width="35%" style="padding: 14px 0; font-size: 14px; color: #666666; font-weight:600;">Client Name:</td>
                        <td style="padding: 14px 0; font-size: 14px; color: #111111; font-weight:700;">${name}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #f1f3f5;">
                        <td style="padding: 14px 0; font-size: 14px; color: #666666; font-weight:600;">Email:</td>
                        <td style="padding: 14px 0; font-size: 14px; color: #111111; font-weight:700;"><a href="mailto:${email}" style="color: #E60023; text-decoration:none;">${email}</a></td>
                      </tr>
                      <tr style="border-bottom: 1px solid #f1f3f5;">
                        <td style="padding: 14px 0; font-size: 14px; color: #666666; font-weight:600;">Business Name:</td>
                        <td style="padding: 14px 0; font-size: 14px; color: #111111; font-weight:700;">${businessName || "Not Provided"}</td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding: 14px 0; font-size: 14px; color: #666666; font-weight:600;">Requirements:</td>
                        <td style="padding: 14px 0; font-size: 14px; color: #333333; line-height: 1.5; white-space: pre-line;">${requirement}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 24px; background: #fafafa; border-top: 1px solid #f1f3f5; font-size: 12px; color: #999999;">
                    AI Growth Lab Automation System
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Proposal Engine" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `✨ Free Proposal Match: ${name} (${businessName || "Brand"})`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    // Safe error message extraction for TypeScript strict compilation
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown routing error occurred";
    console.error("Nodemailer Error Pipeline:", error);

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
