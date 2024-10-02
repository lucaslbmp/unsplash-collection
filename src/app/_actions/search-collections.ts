import unsplashApi from "../lib/unsplash";

const searchCollections = async (
  query: string | string[],
  page?: number,
  perPage?: number
) => {
  try {
    const data = await unsplashApi.search.getCollections({
      query: query instanceof Array ? query.join(", ") : query,
      page,
      perPage,
    });
    if (!data.response?.results) {
      throw new Error(data.status + ": " + data?.errors);
    }
    return data.response;
  } catch (err) {
    throw err;
  }
};

export default searchCollections;
