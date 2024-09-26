import unsplashApi from "../lib/unsplash";

const getCollection = async (collectionId: string) => {
  try {
    const res = await unsplashApi.collections?.get({ collectionId });
    console.log(res);
    if (res.type === "error") {
      throw new Error(res.status + ": " + res?.errors);
    }
    return res.response;
  } catch (err) {
    throw err;
  }
};

export default getCollection;
