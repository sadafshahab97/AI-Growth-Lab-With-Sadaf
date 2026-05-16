import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 1. Explicit payload data mapping structure
interface LeadRequestBody {
  tierTitle: string;
  tierPrice: string | number;
  businessName?: string;
  email: string;
  websiteUrl?: string;
  pinterestUrl?: string;
  phone?: string;
}

export async function POST(request: Request) {
  try {
    // Parsing request body with strict mapping validation
    const body: LeadRequestBody = await request.json();
    const {
      tierTitle,
      tierPrice,
      businessName,
      email,
      websiteUrl,
      pinterestUrl,
      phone,
    } = body;

    // 2. SMTP Transporter Configuration
    const smtpHost: string = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort: number = Number(process.env.SMTP_PORT) || 465;
    const isSecure: boolean = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 3. Premium Professional White & Pinterest Red HTML Template
    const emailHtml: string = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead Notification</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8f9fa; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #eef0f2; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
                
                <tr>
                  <td style="padding: 40px 40px 25px 40px; border-bottom: 1px solid #f1f3f5;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <span style="display: inline-block; padding: 6px 12px; background-color: #FFF0F2; color: #E60023; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 100px; margin-bottom: 16px;">
                            Pipeline Intelligence v4
                          </span>
                          <h1 style="margin: 0; font-size: 26px; font-weight: 800; color: #111111; letter-spacing: -0.02em; line-height: 1.2;">
                            New <span style="color: #E60023;">Pinterest Studio</span> Lead
                          </h1>
                          <p style="margin: 8px 0 0 0; font-size: 14px; color: #666666; line-height: 1.5;">
                            A client has executed a checkout configuration workflow.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 30px 40px; background-color: #fefefe;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fafafa; border: 1px solid #f1f3f5; border-radius: 16px; padding: 20px;">
                      <tr>
                        <td style="font-size: 13px; color: #666666; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; padding-bottom: 4px;">Selected Configuration</td>
                        <td align="right" style="font-size: 13px; color: #666666; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; padding-bottom: 4px;">Investment Value</td>
                      </tr>
                      <tr>
                        <td style="font-size: 18px; font-weight: 700; color: #111111;">${tierTitle}</td>
                        <td align="right" style="font-size: 20px; font-weight: 800; color: #E60023;">$${tierPrice}<span style="font-size: 12px; font-weight: 500; color: #666666;">/mo</span></td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px 40px 40px 40px;">
                    <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; color: #111111; text-transform: uppercase; letter-spacing: 0.05em;">
                      Client Specifications
                    </h3>
                    
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                      
                      <tr style="border-bottom: 1px solid #f1f3f5;">
                        <td width="35%" style="padding: 14px 0; font-size: 14px; font-weight: 600; color: #666666;">Brand / Business:</td>
                        <td style="padding: 14px 0; font-size: 14px; font-weight: 700; color: #111111;">${businessName || "Not Provided"}</td>
                      </tr>

                      <tr style="border-bottom: 1px solid #f1f3f5;">
                        <td style="padding: 14px 0; font-size: 14px; font-weight: 600; color: #666666;">Email Address:</td>
                        <td style="padding: 14px 0; font-size: 14px; font-weight: 700; color: #111111;">
                          <a href="mailto:${email}" style="color: #E60023; text-decoration: none; border-bottom: 1px dashed #E60023;">${email}</a>
                        </td>
                      </tr>

                      <tr style="border-bottom: 1px solid #f1f3f5;">
                        <td style="padding: 14px 0; font-size: 14px; font-weight: 600; color: #666666;">Pinterest Profile:</td>
                        <td style="padding: 14px 0; font-size: 14px; font-weight: 700; color: #111111;">
                          ${pinterestUrl ? `<a href="${pinterestUrl}" target="_blank" style="color: #E60023; text-decoration: none;">View Profile →</a>` : `<span style="color: #999999; font-weight: 400; font-style: italic;">Not Provided</span>`}
                        </td>
                      </tr>

                      <tr style="border-bottom: 1px solid #f1f3f5;">
                        <td style="padding: 14px 0; font-size: 14px; font-weight: 600; color: #666666;">Website / Store:</td>
                        <td style="padding: 14px 0; font-size: 14px; font-weight: 700; color: #111111;">
                          ${websiteUrl ? `<a href="${websiteUrl}" target="_blank" style="color: #111111; text-decoration: none; border-bottom: 1px solid #111111;">${websiteUrl.replace(/^(https?:\/\/)?(www\.)?/, "")}</a>` : `<span style="color: #999999; font-weight: 400; font-style: italic;">Not Provided</span>`}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 14px 0; font-size: 14px; font-weight: 600; color: #666666;">Contact/WhatsApp:</td>
                        <td style="padding: 14px 0; font-size: 14px; font-weight: 700; color: #111111;">${phone || "Not Provided"}</td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <tr>
                  <td align="center" style="padding: 30px 40px; background-color: #fafafa; border-top: 1px solid #f1f3f5;">
                    <p style="margin: 0; font-size: 12px; color: #999999; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; text-align: center;">
                      Automated Lead Delivery • Pinterest Studio V4 Elite
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

    // 4. Mail Options Setup
    const mailOptions = {
      from: `"Pinterest Studio Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `🚀 New Lead: ${businessName || "Anonymous"} - ${tierTitle}`,
      html: emailHtml,
    };

    // 5. Fire the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email dispatched successfully" },
      { status: 200 },
    );
  } catch (error: unknown) {
    // Type-safe error handling to eliminate 'any' type from catch scope
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Unknown structural error occurred";
    console.error("Nodemailer Error Pipeline:", error);

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
