"use client";

import {
  CldUploadWidget,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import Image from "next/image";
import { getImagePath } from "@/src/utils";

export default function ImageUpload({ image }: { image?: string | undefined }) {
  const [imageUrl, setImageUrl] = useState<string>(image || "");
  const previewSrc = imageUrl
    ? imageUrl.startsWith("http")
      ? imageUrl
      : getImagePath(imageUrl)
    : "";
  const showDropPreview = Boolean(previewSrc && (!image || imageUrl !== image));
  return (
    <CldUploadWidget
      onSuccess={(result: CloudinaryUploadWidgetResults, { widget }) => {
        if (result.event === "success") {
          const info = result.info;
          if (info && typeof info !== "string" && info.secure_url) {
            setImageUrl(info.secure_url);
          }
          widget.close();
        }
      }}
      uploadPreset="rllydfk"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => (
        <>
          <div className="space-y-2" onClick={() => open()}>
            <label className="text-slate-800">Imagen:</label>
            <div className=" bg-slate-100 relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-slate-300 flex flex-col justify-center items-center gap-4">
              <TbPhotoPlus size={30} />
              <p className="text-sm font font-semibold">Agregar Imagen</p>

              {showDropPreview && (
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={previewSrc}
                    alt="Imagen del producto"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          {image && !imageUrl && (
            <div className="space-y-2">
              <label className="text-slate-800">Imagen actual:</label>
              <div className="relative w-64 h-64">
                <Image
                  fill
                  src={getImagePath(image)}
                  alt="Imagen actual del producto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </>
      )}
    </CldUploadWidget>
  );
}
