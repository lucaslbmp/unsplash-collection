"use client";

//import listCollections from "../_actions/list-collections";
//import listPhotos from "../_actions/list-photos";
import { redirect } from "next/navigation";
import SearchInput from "./search-input";

interface SearchFormProps {
  defaultValue?: string | number | readonly string[] | undefined;
  className?: string;
}

const SearchForm = ({ className, defaultValue }: SearchFormProps) => {
  return (
    <form
      action={async (formData) => {
        const _searchArray = (formData.get("search") as string)?.split(" ");
        const search = _searchArray.length ? _searchArray : _searchArray[0];
        redirect(`/photos?search=${search}`);
      }}
    >
      <SearchInput
        name="search"
        placeholder={"Enter your keywords..."}
        className={(className ?? "") + " mx-auto w-[90%]"}
        defaultValue={defaultValue}
      />
    </form>
  );
};

export default SearchForm;
