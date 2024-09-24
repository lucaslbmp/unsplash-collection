"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type HeaderButtonProps = {
  children?: ReactNode;
  href: string;
  isActive: boolean;
};

const paths = {
  Home: "/",
  Collections: "/collections",
};

const HeaderButton = ({ children, href, isActive }: HeaderButtonProps) => {
  return (
    <Link
      href={href}
      className={`${isActive ? "bg-bgHighlight" : ""} px-5 py-2 rounded-sm`}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <header className="flex justify-between py-4 px-6 w-full">
      <div>
        <Image src="/Logo.svg" alt="logo" width={118} height={24} />
      </div>
      <div className="flex gap-2">
        {Object.entries(paths).map(([page, path]) => (
          <HeaderButton key={page} href={path} isActive={isActive(path)}>
            {page}
          </HeaderButton>
        ))}
      </div>
    </header>
  );
};

export default Header;
