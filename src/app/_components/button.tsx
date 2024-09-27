"use client";

import { ButtonHTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={props.className + " px-5 py-3 bg-bgHighlight rounded-md"}
    >
      {props.children}
    </button>
  );
};

export default Button;
