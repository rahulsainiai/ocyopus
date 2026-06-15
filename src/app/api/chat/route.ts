import { NextRequest, NextResponse } from "next/server";

const DEMO_REPLY =
  "I am Ocyopus, an intelligent AI assistant built to help with learning, coding, writing, reasoning, and problem-solving. Real AI backend will be connected soon.";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.message || typeof body.message !== "string" || !body.message.trim()) {
      return NextResponse.json(
        { error: "Message is required and must be a non-empty string." },
        { status: 400 }
      );
    }

    // Demo response — replace with real AI integration later
    return NextResponse.json({ reply: DEMO_REPLY }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body." },
      { status: 400 }
    );
  }
}

// Reject all non-POST methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed. Use POST." }, { status: 405 });
}
