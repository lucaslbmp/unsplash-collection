"use server";

import unsplashApi from "../lib/unsplash";

const downloadPhoto = async (downloadLocation: string) => {
  try {
    const res = await unsplashApi.photos.trackDownload({
      downloadLocation,
    });
    if (res.type === "error") {
      throw new Error(res.status + ": " + res?.errors);
    }
    return res.response;
  } catch (err) {
    throw err;
  }
};

export default downloadPhoto;
