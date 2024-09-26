import getCollection from "@/app/_actions/get-collection";
import Header from "@/app/_components/header";
import Image from "next/image";

type CollectionsPageParams = {
  params: { id: string };
  //searchParams: SearchParamsType;
};

const CollectionPage = async ({ params }: CollectionsPageParams) => {
  const { id } = params;
  const collection = await getCollection(id);
  return (
    <main className="text-center">
      <Header />
      <div className="max-w-[357px] mx-auto my-11">
        <h2 className="text-5xl mx-auto w-fit font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 py-1">
          {collection.title}
        </h2>
        <span className="mb-4">{collection.total_photos} photos</span>
      </div>

      <section className="px-[72px] grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          collection.preview_photos?.map((photo: any) => (
            <article key={photo.id} className="relative h-[232px]">
              <Image
                src={photo.urls.raw}
                alt={photo.alt_description ?? ""}
                fill
                objectFit="cover"
              />
            </article>
          ))
        }
      </section>
    </main>
  );
};

export default CollectionPage;
