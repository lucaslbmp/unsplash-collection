import listCollections from "@/app/_actions/list-collections";
import Image from "next/image";
//import { collectionsData } from "./collections-data";
import Header from "../_components/header";
import Link from "next/link";

const CollectionsPage = async () => {
  const collections = await listCollections();
  return (
    <main className="text-center flex flex-col">
      <Header />
      <div className="max-w-[357px] mx-auto my-11">
        <h2 className="text-5xl mx-auto w-fit font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          Collections
        </h2>
        <span className="mb-4">
          Explore the world through collections of beautiful photos free to use
          under the Unsplash License.
        </span>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-auto text-left justify-center gap-8 px-[70px] py-4">
        {collections?.map((collection) => (
          <Link
            href={`/collections/${collection.id}`}
            key={collection.id}
            className="hover:opacity-50 hover:cursor-pointer"
          >
            <div className="w-full h-[232px] relative">
              <Image
                src={collection?.cover?.urls.raw ?? ""}
                alt={"cover_photo"}
                fill
                className="object-cover"
              />
            </div>

            <h4 className="font-semibold">{collection.title}</h4>
            <span className="text-textSecondary">
              {collection.quantity} photos
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default CollectionsPage;
