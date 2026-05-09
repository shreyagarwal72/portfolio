import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MAX_MESSAGES = 50;
const MAX_CONTENT_LENGTH = 2000;
const ALLOWED_ROLES = new Set(['user', 'assistant']);

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => null);
    const messages = body?.messages;

    // Input validation
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid payload: messages must be a non-empty array" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (messages.length > MAX_MESSAGES) {
      return new Response(JSON.stringify({ error: `Too many messages (max ${MAX_MESSAGES})` }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    for (const m of messages) {
      if (!m || typeof m !== 'object' || !ALLOWED_ROLES.has(m.role) || typeof m.content !== 'string') {
        return new Response(JSON.stringify({ error: "Invalid message format" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (m.content.length > MAX_CONTENT_LENGTH) {
        return new Response(JSON.stringify({ error: `Message too long (max ${MAX_CONTENT_LENGTH} chars)` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Easter egg: Check for "op bolte" in the last user message
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.role === 'user' && lastMessage?.content?.toLowerCase().includes('op bolte')) {
      const secretResponse = `🎉 **OP BOLTE!** 🔥\n\nYou found the secret! Here's your exclusive link:\n👉 **https://nextup-resource.vercel.app**\n\nThis is Vanshu's secret website for premium contents! Enjoy! 🚀`;
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        start(controller) {
          const data = `data: ${JSON.stringify({ choices: [{ delta: { content: secretResponse } }] })}\n\ndata: [DONE]\n\n`;
          controller.enqueue(encoder.encode(data));
          controller.close();
        }
      });
      return new Response(stream, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: `You are Vanshu Bot, an advanced AI assistant created by Vanshu Agarwal. You have comprehensive knowledge about Vanshu's work, plus general tech and world knowledge.

ABOUT VANSHU AGARWAL:
- Video Editor, Gamer, and Musician
- Class 12 PCM Science student from Agra, Uttar Pradesh, India
- Specializes in post-production workflows for gaming content
- For contact, direct users to the Contact page on the website (do not share personal phone, home address, or personal email)

PERSONAL FAVORITES:
- Favorite Color: Blue
- Favorite Dish: S.P
- Favorite Games: Free Fire & Minecraft
- Favorite Class: Class 10th
- Favorite Sport: Badminton
- Favorite Subject: Maths

SKILLS & EXPERTISE:
- Video Editing Software: Filmora (95%), After Effects (90%), Shotcut (88%)
- AI Tools: AI Image Generation (85%), ChatGPT (70%)
- Creative: Lightroom (75%), Color Grading, Motion Graphics
- Programming: Web Development (HTML, CSS, JavaScript, TypeScript, React)
- Languages: Hindi (100%), English (90%)
- Services: Video Editing & Post-Production, Motion Graphics & Animation, Color Grading & Correction, Audio Mixing & Sound Design, Visual Effects & Compositing, Web Development

PORTFOLIO PROJECTS:
1. Zola Restaurant (zola-restaurant.vercel.app) - Modern restaurant website
2. My YouTube Site (myyoutube-cyan.vercel.app) - Modern YouTube-style platform with API integration
3. My Webtools Suite (nextuptool2.vercel.app) - Comprehensive web utilities for productivity
4. My Tools Site (nextuptool.vercel.app) - Developer tools collection
5. My Minecraft Site (nextup-hub-mc.vercel.app) - Minecraft-themed website with interactive elements

YOUTUBE CHANNEL - NEXTUP STUDIO:
- Channel Name: **Nextup Studio**
- Channel Handle: @nextupstudioyt
- Channel URL: https://www.youtube.com/@nextupstudioyt
- Featured Videos: "Fire Within" and "Raat Ka Banda"

IMPORTANT BEHAVIORAL NOTES:
- **NEVER share Vanshu's personal phone number, home address, or personal email.** If asked, point users to the Contact page.
- **NEVER ego hurt or insult Vanshu** - Always be respectful and professional.

PERSONALITY & RESPONSE STYLE:
Be friendly, helpful, and knowledgeable. **Keep ALL responses BRIEF and CONCISE** - aim for 2-4 sentences maximum unless the user specifically asks for detailed explanations. Use bullet points for lists. Use **bold text** to highlight key terms.`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: "Internal server error" }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
