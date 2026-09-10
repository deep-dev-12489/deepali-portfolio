import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const clientId = process.env.ZOHO_CLIENT_ID;
    const clientSecret = process.env.ZOHO_CLIENT_SECRET;
    const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
    const accountId = process.env.ZOHO_ACCOUNT_ID || '6794683000000002002';
    const fromEmail = process.env.ZOHO_FROM_EMAIL || 'deepalimotwani.com@zohomail.in';
    const toEmail = process.env.ZOHO_TO_EMAIL || 'deepalimotwani8@gmail.com';

    // 1. Refresh Access Token
    const tokenParams = new URLSearchParams({
      refresh_token: refreshToken!,
      client_id: clientId!,
      client_secret: clientSecret!,
      grant_type: 'refresh_token',
    });

    const tokenRes = await fetch('https://accounts.zoho.in/oauth/v2/token', {
      method: 'POST',
      body: tokenParams,
    });
    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      console.error('Zoho Token Refresh Failed:', tokenData);
      return NextResponse.json({ error: 'Failed to authenticate with email provider' }, { status: 500 });
    }

    // 2. Send Email via Zoho Mail API
    const mailRes = await fetch(`https://mail.zoho.in/api/accounts/${accountId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fromAddress: fromEmail,
        toAddress: toEmail,
        subject: `[Portfolio Inquiry] ${subject || 'New Contact Message'} from ${name}`,
        content: `
          <h3>New Contact Form Message from Portfolio</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      }),
    });

    const mailData = await mailRes.json();

    if (mailData?.status?.code === 200) {
      return NextResponse.json({ success: true, message: 'Email sent successfully!' });
    } else {
      console.error('Zoho Mail Send Failed:', mailData);
      return NextResponse.json({ error: 'Failed to send email via Zoho Mail API' }, { status: 500 });
    }
  } catch (err: any) {
    console.error('Contact API Error:', err);
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}
