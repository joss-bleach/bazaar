"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { UploadResponse } from "imagekit/dist/libs/interfaces";

// Components
import { Uploader } from "./uploader";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ThumbnailPreview } from "./thumbnail-preview";

interface ImageUploadProps {
  files: UploadResponse[];
  setFiles: Dispatch<SetStateAction<UploadResponse[]>>;
}

export const ImageUpload = ({ files, setFiles }: ImageUploadProps) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  return (
    <div className="rounded p-6 flex flex-col items-center justify-center border-[1px] border-foreground-muted gap-2">
      <div className="flex flex-col gap-1 text-center">
        <h1 className="text-xl font-semibold">Photos</h1>
        <p className="text-muted-foreground">
          Show buyers what they can expect from your item
        </p>
      </div>
      <label
        aria-disabled={isUploading}
        role="button"
        className={cn(
          "file-upload-button w-52 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 cursor-pointer",
          {
            "cursor-not-allowed pointer-events-none opacity-50": isUploading,
          }
        )}
      >
        <Uploader
          onUploadStart={() => setIsUploading(true)}
          onSuccess={(file) => {
            setFiles((previousState) => [...previousState, file]);
            setIsUploading(false);
          }}
        />
        {isUploading ? (
          <span className="flex items-center gap-1">
            <Loader2 size={16} className="animate-spin" /> Uploading
          </span>
        ) : (
          "Upload from computer"
        )}
      </label>
      {files.length > 0 && (
        <div className="w-full p-6 bg-muted-foreground/10 rounded flex flex-row gap-1 mt-6">
          {files.map((file) => (
            <div key={file.fileId} className="size-20 rounded overflow-hidden">
              <ThumbnailPreview image={file} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
