import unsplashApi from "../lib/unsplash";

const getPhotos = async (query: string | string[]) => {
  try {
    const res = await unsplashApi.search?.getPhotos({
      query: query instanceof Array ? query.join(", ") : query,
    });
    if (!res.response?.results) {
      throw new Error(res.status + ": " + res?.errors);
    }
    return res.response.results;
  } catch (err) {
    throw err;
  }
};

export default getPhotos;
