import unsplashApi from "../lib/unsplash";

const getPhoto = async (photoId: string) => {
  try {
    const res = await unsplashApi.photos?.get({
      photoId,
    });
    if (res.type === "error") {
      throw new Error(res.status + ": " + res?.errors);
    }
    return res.response;
  } catch (err) {
    throw err;
  }
};

export default getPhoto;
