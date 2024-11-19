"use server";

const getAccessToken = async (authorizationCode: string) => {
  try {
    const response = await fetch("https://unsplash.com/oauth/token", {
      method: "POST",
      body: JSON.stringify({
        client_id: process.env.UNSPLASH_CLIENT_ID,
        client_secret: process.env.UNSPLASH_CLIENT_SECRET,
        redirect_uri: process.env.UNSPLASH_REDIRECT_URI,
        code: authorizationCode,
        grant_type: "authorization_code",
      }),
    });

    const { access_token } = await response.json();
    // Store the tokens securely (e.g., in the database or session)
    return access_token;
  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    throw error;
  }
};

export default getAccessToken;
