"use client";

import {
  CldUploadWidget,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState<string>("");
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

              {imageUrl && (
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={imageUrl}
                    alt="Imagen del producto"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          <input type="hidden" name="imageUrl" value={imageUrl} />
        </>
      )}
    </CldUploadWidget>
  );
}
