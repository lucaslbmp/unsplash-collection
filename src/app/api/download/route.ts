import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const name = searchParams.get("name");

  if (!url) {
    return NextResponse.json(
      { error: "url query parameter is required" },
      { status: 400 }
    );
  }

  const imageResponse = await fetch(url, {
    headers: new Headers({
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    }),
  });

  const headers = new Headers(imageResponse.headers);
  headers.set(
    "Content-Disposition",
    `attachment; filename="${name ?? "image"}.jpg"`
  );

  return new Response(imageResponse.body, {
    headers,
  });
}
