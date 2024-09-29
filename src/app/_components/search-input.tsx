import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = (props: SearchInputProps) => {
  return (
    <div>
      <input
        {...props}
        className={twMerge(
          "font-semibold border-border border-2 px-4 py-5 rounded-md w-full",
          props.className
        )}
      />
      <input type="submit" className="hidden" />
    </div>
  );
};

export default SearchInput;
