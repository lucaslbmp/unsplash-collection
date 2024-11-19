import getAccessToken from "@/app/_actions/get-access-token";
import getUnsplashAuthUrl from "./get-auth-url";

const checkAuth = async () => {
  let token = sessionStorage.getItem("access_token");
  if (token) return;

  try {
    const authCodeResp = await fetch(getUnsplashAuthUrl());
    const authCode = await authCodeResp.json();
    token = await getAccessToken(authCode);
    if (token) sessionStorage.setItem("access_token", token);
    else throw new Error("Authorization did not succeed!");
  } catch (error) {
    throw error;
  }
};

export default checkAuth;
