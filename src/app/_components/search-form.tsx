"use client";

const SearchForm = () => {
  return (
    <form
      action={async (formData) => {
        const search = formData.get("search");
        console.log(search);
      }}
      className="flex flex-col gap-5 items-center w-[40%]"
    >
      <h2 className="font-bold text-4xl">Search</h2>
      <span className="font-semibold text-textSecondary">
        Search high-resolution images from Unsplash
      </span>
      <input
        name="search"
        className="font-semibold border-border border-2 px-4 py-5 rounded-md w-full"
        placeholder={"Enter your keywords..."}
      />
    </form>
  );
};

export default SearchForm;
