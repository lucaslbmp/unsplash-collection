import unsplashApi from "../lib/unsplash";

const listCollections = async (page?: number, perPage?: number) => {
  try {
    const data = await unsplashApi.collections.list({
      page: page ?? 1,
      perPage: perPage ?? 10,
    });
    if (!data.response?.results) {
      throw new Error(data.status + ": " + data?.errors);
    }
    return data.response.results.map((c) => ({
      id: c.id,
      cover: c.cover_photo,
      title: c.title,
      quantity: c.total_photos,
    }));
  } catch (err) {
    throw err;
  }
};

export default listCollections;
