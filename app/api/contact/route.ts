import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data: ContactFormData = await req.json();

    // Validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email via Resend
    try {
      await resend.emails.send({
        from: process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev',
        to: process.env.CONTACT_EMAIL_TO || 'kuba.pospieszny@gmail.com',
        subject: `Nowa wiadomość z kobecloud.pl od ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366F1;">📨 Nowa wiadomość z formularza kontaktowego</h2>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Imię:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              ${data.company ? `<p><strong>Firma:</strong> ${data.company}</p>` : ''}
            </div>

            <div style="background: #ffffff; padding: 20px; border-left: 4px solid #6366F1; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Wiadomość:</h3>
              <p style="white-space: pre-wrap; color: #555;">${data.message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #888;">
              <p>Wiadomość wysłana przez formularz kontaktowy na <a href="https://kobecloud.pl">kobecloud.pl</a></p>
              <p>Data: ${new Date().toLocaleString('pl-PL')}</p>
            </div>
          </div>
        `,
      });

      return NextResponse.json(
        { success: true, message: 'Message sent successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
