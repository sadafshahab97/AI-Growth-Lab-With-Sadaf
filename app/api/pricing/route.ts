import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { planName, price, name, email, phone, userMessage } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Pinterest Red Premium Template with Popup Data
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Premium Lead Captured</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f7f7f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f7f7f7; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" max-width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 4px 25px rgba(0, 0, 0, 0.06); border: 1px solid #e1e1e1;">
                
                <tr>
                  <td style="background-color: #E60023; padding: 35px 40px;">
                    <span style="background-color: rgba(255, 255, 255, 0.2); color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 6px 12px; border-radius: 20px; display: inline-block; margin-bottom: 12px; letter-spacing: 1px;">
                      🔥 Hot Lead Captured
                    </span>
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; line-height: 1.2;">
                      New Order Inquiry for ${planName}!
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 40px;">
                    <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.5; color: #333333; font-weight: 500;">
                      Sadaf, a potential client has filled out the pricing form. Here are their complete details:
                    </p>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #ededed; width: 35%; font-size: 13px; font-weight: 700; color: #767676; text-transform: uppercase;">Selected Plan</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #ededed; font-size: 16px; font-weight: 700; color: #E60023;">${planName} (${price})</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #ededed; font-size: 13px; font-weight: 700; color: #767676; text-transform: uppercase;">Client Name</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #ededed; font-size: 16px; font-weight: 600; color: #111111;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #ededed; font-size: 13px; font-weight: 700; color: #767676; text-transform: uppercase;">Email Address</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #ededed; font-size: 15px; font-weight: 600; color: #111111;"><a href="mailto:${email}" style="color: #111111;">${email}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #ededed; font-size: 13px; font-weight: 700; color: #767676; text-transform: uppercase;">Phone / WhatsApp</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #ededed; font-size: 15px; font-weight: 600; color: #111111;">${phone}</td>
                      </tr>
                    </table>

                    <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: 700; color: #767676; text-transform: uppercase;">Client Requirements</p>
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 20px; font-size: 15px; line-height: 1.6; color: #111111; border-left: 4px solid #E60023; font-style: italic;">
                      "${userMessage || "No additional message provided."}"
                    </div>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top: 35px;">
                      <tr>
                        <td align="center">
                          <a href="mailto:${email}?subject=Regarding your inquiry for ${planName} - AI Growth Lab" style="background-color: #E60023; color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 700; padding: 14px 35px; border-radius: 28px; display: inline-block; box-shadow: 0 4px 12px rgba(230, 0, 35, 0.2);">
                            Reply via Email
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="background-color: #fafafa; padding: 24px; text-align: center; border-top: 1px solid #ededed;">
                    <p style="margin: 0; font-size: 12px; color: #767676;">
                      Automated Lead Tracking System • <strong>AI Growth Lab</strong>
                    </p>
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
      from: `"AI Growth Lab Tracker" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🎯 [${planName}] New Client Inquiry from ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { error: "Failed to send lead email" },
      { status: 500 },
    );
  }
}
