import Image from "next/image";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { File } from "lucide-react";

interface ThumbnailPreview {
  image: UploadResponse;
}

export const ThumbnailPreview = ({ image }: ThumbnailPreview) => {
  if (image.fileType !== "image") {
    return (
      <p className="flex flex-row items-center gap-1">
        <File size={16} />
        <span>{image.name}</span>
      </p>
    );
  }
  return (
    <a target="_blank" href={image.url} aria-label="View full-sized image">
      <Image
        src={`${image.thumbnailUrl}?tr=w-100,h-100,fo-auto`}
        width={100}
        height={100}
        alt="Image uploaded"
      />
    </a>
  );
};
