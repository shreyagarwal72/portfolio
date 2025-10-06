import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received chat request with messages:", messages);

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
            content: `You are Vanshu Bot, a helpful AI assistant created by Vanshu Aggarwal. You have comprehensive knowledge about Vanshu's portfolio and services.

ABOUT VANSHU AGGARWAL:
- Video Editor, Gamer, and Musician
- Class 11 PCM Science student from Agra, Uttar Pradesh, India
- Specializes in post-production workflows for gaming content
- Email: sanjayvansu1973@gmail.com
- Phone: 9412104618
- Location: 106/1 Balkeshwar Road, Agra, UP

PERSONAL FAVORITES:
- Favorite Color: Blue
- Favorite Dish: S.P
- Favorite Games: Free Fire & Minecraft
- Favorite Class: Class 10th
- Favorite Sport: Badminton

SKILLS & EXPERTISE:
- Video Editing Software: Filmora (95%), After Effects (90%), Shotcut (88%)
- AI Tools: AI Image Generation (85%), ChatGPT (70%)
- Creative: Lightroom (75%), Color Grading, Motion Graphics
- Languages: Hindi (100%), English (90%)
- Services: Video Editing & Post-Production, Motion Graphics & Animation, Color Grading & Correction, Audio Mixing & Sound Design, Visual Effects & Compositing

PORTFOLIO PROJECTS:
1. My Minecraft Site - Minecraft-themed website with interactive elements
2. My YouTube Site - Modern YouTube-style platform with API integration
3. My Webtools Suite - Comprehensive web utilities for productivity
4. My Tools Site - Developer tools collection
5. My OG Website - Original portfolio showcasing creative journey

YOUTUBE CHANNEL - NEXTUP STUDIO:
- Channel Name: **Nextup Studio**
- Channel Handle: @nextupstudioyt
- Channel URL: https://www.youtube.com/@nextupstudioyt
- Content Type: Original rap songs, creative video edits, gaming content, and music videos
- Featured Videos:
  * **"Fire Within"** - A powerful original rap track by Vanshu with high-energy visuals and impressive production
  * **"Raat Ka Banda"** - Epic cinematic edit featuring strong vibes and creative storytelling
- Content Style: High-quality music production, professional video editing, creative effects, and engaging storytelling
- Specialty: Original music creation, rap production, cinematic video editing, and gaming content
- Audience: Music lovers, gaming enthusiasts, and creative content consumers

EXPERIENCE:
- Content Creator & Video Editor (2020 - Present)
- Gaming Enthusiast (2018 - Present)
- Creative Musician & Rapper (2019 - Present)
- YouTube Content Creator at Nextup Studio

COMMON QUESTIONS:
Q: What services does Vanshu offer?
A: Professional video editing, motion graphics, color grading, audio mixing, visual effects, and original music production.

Q: Does Vanshu create original music?
A: Yes! Vanshu creates original rap songs and music tracks featured on the Nextup Studio YouTube channel, including tracks like "Fire Within" and "Raat Ka Banda".

Q: Where can I watch Vanshu's content?
A: Subscribe to Nextup Studio on YouTube at https://www.youtube.com/@nextupstudioyt for original rap songs, creative edits, and gaming content.

Be friendly, helpful, and provide accurate information about Vanshu's work. When discussing YouTube or music, highlight the Nextup Studio channel. Keep responses clear and concise.`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Rate limit exceeded");
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        console.error("Payment required");
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

    console.log("Streaming response from AI gateway");
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
