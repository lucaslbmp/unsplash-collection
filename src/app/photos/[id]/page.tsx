import getPhoto from "@/app/_actions/get-photo";
import Button from "@/app/_components/button";
import Header from "@/app/_components/header";
import Image from "next/image";
import DownloadButton from "../../_components/download-button";

type CollectionsPageParams = {
  params: { id: string };
};

const PhotoDetailsPage = async ({ params }: CollectionsPageParams) => {
  const { id } = params;
  const photo = await getPhoto(id);
  const { user } = photo;
  const collections = photo.related_collections.results;

  return (
    <main className="flex flex-col min-h-dvh">
      <Header />
      <div className="flex-grow grid grid-cols-12 mx-[75px] my-[46px] gap-x-12 gap-y-12">
        {/* parent da imagem com atributo "fill" precisa ser relative */}
        <div className="relative min-h-[727px] col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6">
          <Image
            src={photo.urls.raw}
            alt={photo.alt_description ?? ""}
            fill
            objectFit="cover"
          />
        </div>

        <section className="items-left flex flex-col gap-6 text-sm col-span-12 lg:col-span-8 lg:col-start-3 xl:col-span-6">
          {/* User info */}
          <article className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="relative">
                <Image
                  src={user.profile_image.small}
                  alt={"Profile picture"}
                  height={42}
                  width={42}
                  className="rounded-full"
                />
              </div>
              <div className="font-bold">
                {user.first_name} {user.last_name}
              </div>
            </div>
            {photo?.promoted_at && (
              <p>Published on {new Date(photo.promoted_at).toDateString()}</p>
            )}
          </article>

          {/* Buttons */}
          <form className="flex gap-4 ">
            <Button className="flex flex-row gap-2 items-center font-bold">
              <Image src={"/Plus.svg"} alt="plus" height={16} width={16} />
              Add to collection
            </Button>
            <DownloadButton
              download_location={photo.links.download}
              name={photo.id}
            />
          </form>

          {/* Collections section */}
          <div>
            <h3 className="text-xl font-bold mb-2">Collections</h3>
            <section className="flex flex-col gap-4">
              {collections.map((c) => (
                <article
                  key={c.id}
                  className="flex gap-3 p-2 rounded-lg items-center hover:bg-bgHighlight hover:cursor-pointer hover:after:content-['-_Remove'] hover:after:mr-6 hover:after:font-semibold"
                >
                  <div className="w-[60px] h-[60px] relative">
                    <Image
                      src={c.cover_photo?.urls.raw ?? ""}
                      alt={c.cover_photo?.alt_description ?? ""}
                      fill
                    />
                  </div>
                  <div className="my-auto flex-1">
                    <h4 className="font-bold">{c.title}</h4>
                    <span>{c.total_photos} photos</span>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PhotoDetailsPage;
