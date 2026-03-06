import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const title = url.searchParams.get("title") || "Vanshu Agarwal";
    const subtitle = url.searchParams.get("subtitle") || "Video Editor & Creative Mind";
    const page = url.searchParams.get("page") || "home";

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const prompt = `Create a professional Open Graph social media preview image (1200x630 pixels, 16:9 aspect ratio) for a creative portfolio website. 

Design specifications:
- Dark blue-black gradient background (similar to #0f1419)
- Modern, clean tech/creative aesthetic
- Title: "${title}" in large, bold white text
- Subtitle: "${subtitle}" in smaller blue accent text (#4F94FA)
- Add subtle blue glow effects and geometric shapes
- Include "VA" logo monogram in corner
- Page type: ${page}
- Professional video editor/content creator branding
- Minimalist but impactful design
- Ultra high resolution

The image should look professional and stand out when shared on social media platforms like Twitter, LinkedIn, and Facebook.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-pro-image-preview",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        modalities: ["image", "text"],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add credits." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(JSON.stringify({ error: "Failed to generate image" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    
    // Check for inline_data format (Gemini image generation)
    const parts = data.choices?.[0]?.message?.content;
    let imageData: string | null = null;
    let mimeType = "image/png";

    // Try inline_data parts format
    if (Array.isArray(parts)) {
      for (const part of parts) {
        if (part.inline_data?.data) {
          imageData = part.inline_data.data;
          mimeType = part.inline_data.mime_type || "image/png";
          break;
        }
      }
    }

    // Fallback: try images array format
    if (!imageData) {
      const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
      if (imageUrl?.startsWith("data:image")) {
        imageData = imageUrl.split(",")[1];
      }
    }

    if (!imageData) {
      console.error("No image in response:", JSON.stringify(data).substring(0, 500));
      return new Response(JSON.stringify({ error: "No image generated" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const imageBytes = Uint8Array.from(atob(imageData), (c) => c.charCodeAt(0));

    return new Response(imageBytes, {
      headers: {
        ...corsHeaders,
        "Content-Type": mimeType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
