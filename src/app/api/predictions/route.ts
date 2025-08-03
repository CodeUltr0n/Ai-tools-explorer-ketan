import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const prompt = body.prompt?.toString().trim();

  if (!prompt) {
    return NextResponse.json({ detail: 'Prompt is required.' }, { status: 400 });
  }
  if (!process.env.STABILITY_API_KEY) {
    console.error('STABILITY_API_KEY is not set in environment.');
    return NextResponse.json({ detail: 'API key missing from environment.' }, { status: 500 });
  }

  try {
    const formData = new FormData();
    formData.append('prompt', prompt);
    formData.append('model', 'stable-diffusion-xl-v1');
    formData.append('output_format', 'png');

    const response = await fetch('https://api.stability.ai/v2beta/stable-image/generate/core', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
        Accept: 'application/json',
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Stability API error response:', errorText);
      return NextResponse.json({ detail: 'Image generation failed. Check server logs.' }, { status: 500 });
    }

    const result = await response.json();

    // result.image = base64 PNG
    return NextResponse.json({ image: result.image }, { status: 201 });
  } catch (err) {
    console.error('Stability API error:', err);
    return NextResponse.json({ detail: 'Unexpected error.' }, { status: 500 });
  }
}