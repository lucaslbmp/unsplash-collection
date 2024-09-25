import getPhotos from "../_actions/get-photos";
import Header from "../_components/header";
import Image from "next/image";
import SearchForm from "../_components/search-form";

type SearchParamsType = { search: string | undefined };

type CollectionsPageParams = {
  //params: {slug: string};
  searchParams: SearchParamsType;
};

const PhotosPage = async ({ searchParams }: CollectionsPageParams) => {
  const { search } = searchParams;
  const photos = await getPhotos(search ?? "");
  return (
    <main className="">
      <Header />
      <div className="bg-gradient-primary h-[84px] relative">
        <SearchForm
          defaultValue={search?.split(",").join(" ")}
          className="absolute top-[50px] left-0 right-0 mx-auto w-[90%] max-w-[533px]"
        />
      </div>
      <section className="p-[72px] grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {photos.map((photo) => (
          <article key={photo.id}>
            <Image
              src={photo.urls.raw}
              alt={photo.alt_description ?? ""}
              height={photo.height}
              width={photo.width}
            />
          </article>
        ))}
      </section>
    </main>
  );
};

export default PhotosPage;
