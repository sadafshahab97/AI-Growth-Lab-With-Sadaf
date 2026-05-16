import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { first_name, last_name, email, website, message } = data;

    // SMTP Configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Pinterest-style Red Premium HTML Template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Proposal Request</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f7f7f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; -webkit-font-smoothing: antialiased;">
        
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f7f7f7; padding: 40px 20px;">
          <tr>
            <td align="center">
              
              <table role="presentation" width="100%" max-width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); border: 1px border #e1e1e1;">
                
                <tr>
                  <td style="background-color: #E60023; padding: 35px 40px; text-align: left;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td>
                          <span style="background-color: rgba(255, 255, 255, 0.2); color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; tracking-spacing: 2px; padding: 6px 12px; border-radius: 20px; display: inline-block; margin-bottom: 12px; letter-spacing: 1px;">
                            New Lead Captured
                          </span>
                          <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 800; line-height: 1.2;">
                            New Proposal Request!
                          </h1>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 40px;">
                    <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.5; color: #333333; font-weight: 500;">
                      Hey Sadaf, you have received a new business inquiry through the AI Growth Lab contact form. Here are the details:
                    </p>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 30px; border-collapse: separate; border-spacing: 0;">
                      
                      <tr>
                        <td style="padding: 14px 0; border-bottom: 1px solid #ededed; width: 30%; font-size: 14px; font-weight: 700; color: #767676; text-transform: uppercase; letter-spacing: 0.5px;">Client Name</td>
                        <td style="padding: 14px 0; border-bottom: 1px solid #ededed; font-size: 16px; font-weight: 600; color: #111111;">${first_name} ${last_name}</td>
                      </tr>
                      
                      <tr>
                        <td style="padding: 14px 0; border-bottom: 1px solid #ededed; font-size: 14px; font-weight: 700; color: #767676; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                        <td style="padding: 14px 0; border-bottom: 1px solid #ededed; font-size: 16px; font-weight: 600; color: #E60023;">
                          <a href="mailto:${email}" style="color: #E60023; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      
                      <tr>
                        <td style="padding: 14px 0; border-bottom: 1px solid #ededed; font-size: 14px; font-weight: 700; color: #767676; text-transform: uppercase; letter-spacing: 0.5px;">Website</td>
                        <td style="padding: 14px 0; border-bottom: 1px solid #ededed; font-size: 16px; font-weight: 600; color: #111111;">
                          ${website ? `<a href="${website}" target="_blank" style="color: #111111; text-decoration: underline;">${website}</a>` : '<span style="color: #b5b5b5; font-style: italic; font-weight: 400;">Not Provided</span>'}
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: 700; color: #767676; text-transform: uppercase; letter-spacing: 0.5px;">
                      Client Message
                    </p>
                    <div style="background-color: #f0f0f0; padding: 24px; border-radius: 20px; font-size: 15px; line-height: 1.6; color: #111111; font-weight: 500; border-left: 4px solid #E60023;">
                      ${message.replace(/\n/g, "<br>")}
                    </div>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top: 35px;">
                      <tr>
                        <td align="center">
                          <a href="mailto:${email}?subject=Regarding your proposal request - AI Growth Lab" style="background-color: #E60023; color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 700; padding: 14px 32px; border-radius: 28px; display: inline-block; box-shadow: 0 4px 12px rgba(230, 0, 35, 0.25); transition: background-color 0.2s;">
                            Reply to Client Directly
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <tr>
                  <td style="background-color: #fafafa; padding: 24px 40px; text-align: center; border-top: 1px solid #ededed;">
                    <p style="margin: 0; font-size: 13px; color: #767676; font-weight: 500;">
                      Automated notification from <strong style="color: #111111;">AI Growth Lab</strong>
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

    // Email content mapping
    const mailOptions = {
      from: `"AI Growth Lab" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🚀 New Website Proposal Request from ${first_name}!`,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
