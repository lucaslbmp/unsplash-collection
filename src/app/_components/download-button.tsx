"use client";

import Button from "@/app/_components/button";
import Image from "next/image";
import Link from "next/link";
import downloadPhoto from "../_actions/download-photos";

const DownloadButton = ({
  download_location,
  name,
}: {
  download_location: string;
  name: string;
}) => {
  const handleClick = async () => {
    await downloadPhoto(download_location);
  };
  return (
    <Link href={`/api/download?url=${download_location}&name=${name}`} download>
      <Button
        className={" flex flex-row gap-2 items-center font-bold"}
        onClick={handleClick}
      >
        <Image src={"/down-arrow.svg"} alt="download" height={16} width={16} />
        Download
      </Button>
    </Link>
  );
};

export default DownloadButton;
