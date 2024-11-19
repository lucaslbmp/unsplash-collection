export default function getUnsplashAuthUrl() {
  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY ?? "",
    redirect_uri: process.env.UNSPLASH_REDIRECT_URI ?? "",
    response_type: "code",
    scope: "public read_user write_user read_photos write_photos",
  });

  return `https://unsplash.com/oauth/authorize?${params.toString()}`;
}
