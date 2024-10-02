"use client";

import Button from "@/app/_components/button";
import Image from "next/image";
import SearchInput from "@/app/_components/search-input";
import { useState } from "react";
import searchCollections from "@/app/_actions/search-collections";
import { Collections } from "unsplash-js/dist/methods/search/types/response";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import addPhotoToCollection from "@/app/_actions/add-photo-to-collection";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type AddButtonProps = React.ComponentProps<typeof Button> & {
  currentcollections: string[];
};

const AddToCollectionButton = (props: AddButtonProps) => {
  const { currentcollections: currentCollections } = props;
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [collections, setCollections] = useState<Collections | null>();

  return (
    <>
      <Button
        {...props}
        type="button"
        className={
          props.className + " flex flex-row gap-2 items-center font-bold"
        }
        onClick={onOpen}
      >
        <Image src={"/Plus.svg"} alt="plus" height={16} width={16} />
        Add to collection
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="w-[85%] max-w-[600px]"
      >
        <ModalContent>
          <ModalHeader>Add to collections</ModalHeader>
          <ModalBody>
            <form
              action={async (formData) => {
                const searchInput = formData.get("search") as string;
                if (searchInput) {
                  const _searchArray = searchInput?.split(" ");
                  const search = _searchArray.length
                    ? _searchArray
                    : _searchArray[0];
                  const _collections = await searchCollections(search, 1, 6);
                  setCollections(_collections);
                } else {
                  setCollections(null);
                }
              }}
            >
              <SearchInput name="search" className="py-3 mb-3" />

              {collections?.results ? (
                <section className="text-sm">
                  <p>{collections.total} matches</p>
                  {collections?.results
                    ?.filter((coll) => !currentCollections.includes(coll.id))
                    .map((c) => (
                      <article
                        key={c.id}
                        className="flex gap-3 p-4 rounded-lg items-center hover:bg-bgHighlight hover:cursor-pointer hover:after:content-['+_Add_to_collection'] hover:after:mr-6 hover:after:font-semibold"
                      >
                        <div className="w-[60px] h-[60px] relative">
                          <Image
                            src={c.cover_photo?.urls.raw ?? ""}
                            alt={c.cover_photo?.alt_description ?? ""}
                            fill
                          />
                        </div>
                        <div className="flex flex-col my-auto flex-1">
                          <h4 className="font-bold">{c.title}</h4>
                          <span>{c.total_photos} photos</span>
                        </div>
                      </article>
                    ))}
                </section>
              ) : collections === undefined ? (
                <div>No keywords entered</div>
              ) : (
                <p>0 matches</p>
              )}
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddToCollectionButton;
