import { NextResponse } from "next/server";

const addPhotoToCollection = async (collectionId: string) => {
  try {
    const res = await fetch(`/api/collections/${collectionId}/add`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      }),
      body: JSON.stringify({}),
    });
    //const data = await res?.json();
    if (!res.ok) {
      return NextResponse.json({ status: res.status });
    }
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

export default addPhotoToCollection;
