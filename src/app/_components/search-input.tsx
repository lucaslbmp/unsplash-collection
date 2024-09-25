import { InputHTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = (props: SearchInputProps) => {
  return (
    <div>
      <input
        {...props}
        className={
          props.className +
          " font-semibold border-border border-2 px-4 py-5 rounded-md w-full"
        }
      />
      <input type="submit" className="hidden" />
    </div>
  );
};

export default SearchInput;
