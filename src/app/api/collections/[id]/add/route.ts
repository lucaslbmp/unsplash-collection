import checkAuth from "@/app/_utils/unsplash-auth/check";
import { NextResponse } from "next/server";

type ParamsType = { id: string };

export async function POST(
  request: Request,
  { params }: { params: ParamsType }
) {
  const { id } = params;
  const { photo_id } = await request.json();

  if (!id) {
    return NextResponse.json({ error: "invalid id" }, { status: 400 });
  }

  await checkAuth();

  const accessToken = sessionStorage.getItem("access_token");

  if (!accessToken) return;

  const response = await fetch(
    `https://api.unsplash.com/collections/${id}/add`,
    {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
      body: new URLSearchParams({
        photo_id: photo_id,
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Error adding photo to collection." + response.text() },
      { status: response.status }
    );
  }

  return NextResponse.json(await response.json());
}
