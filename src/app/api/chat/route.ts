import { NextRequest, NextResponse } from "next/server";

function getDemoReply(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("who are you") || lower.includes("your name")) {
    return "I am Ocyopus — an intelligent AI assistant built to help with learning, coding, writing, reasoning, and problem-solving. I can support users in Hindi and English.";
  }

  if ((lower.includes("भारत") && lower.includes("ai")) || lower.includes("ai क्यों")) {
    return "भारत में AI इसलिए जरूरी है क्योंकि यह शिक्षा, स्वास्थ्य, कृषि, सरकारी सेवाओं और भारतीय भाषाओं में लोगों की मदद कर सकता है। AI से काम तेज, सस्ता और ज्यादा personalized हो सकता है।";
  }

  if (lower.includes("hallucination") || lower.includes("हैलुसिनेशन")) {
    return "AI hallucination तब होता है जब AI आत्मविश्वास के साथ गलत, अधूरी या बिना evidence वाली जानकारी दे देता है। Reliable AI को ऐसे answers से बचना चाहिए और uncertainty होने पर साफ बताना चाहिए।";
  }

  if (lower.includes("lora")) {
    return "LoRA का मतलब Low-Rank Adaptation होता है। यह AI models को कम GPU memory और कम cost में fine-tune करने की technique है।";
  }

  if (lower.includes("python")) {
    return "Python AI, data science और web development के लिए बहुत popular programming language है। मैं Python code समझाने और लिखने में help कर सकता हूँ।";
  }

  if (lower.includes("what is artificial intelligence") || lower.includes("artificial intelligence")) {
    return "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and problem-solve. It powers everything from voice assistants to recommendation systems.";
  }

  // Default fallback
  return "I am Ocyopus, an intelligent AI assistant built to help with learning, coding, writing, reasoning, and problem-solving. Real AI backend will be connected soon.";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.message || typeof body.message !== "string" || !body.message.trim()) {
      return NextResponse.json(
        { error: "Message is required and must be a non-empty string." },
        { status: 400 }
      );
    }

    const reply = getDemoReply(body.message.trim());
    return NextResponse.json({ reply }, { status: 200 });
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
