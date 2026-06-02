import { NextResponse } from 'next/server';
import { z } from 'zod';

// ── Validation Schema ────────────────────────────────────────

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// ── POST Handler ─────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // In production, integrate with your email service:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - AWS SES
    // - Or forward to a webhook (Slack, Discord, etc.)
    //
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'portfolio@malaiyappan.dev',
    //   to: 'malaiyappan.official@gmail.com',
    //   subject: `[Portfolio] ${validated.subject}`,
    //   text: `From: ${validated.name} (${validated.email})\n\n${validated.message}`,
    // });

    console.log('Contact form submission:', validated);

    return NextResponse.json(
      { success: true, message: 'Message received. Thank you!' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: error.errors },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
