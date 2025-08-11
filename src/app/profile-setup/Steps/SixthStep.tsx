"use client";

import React, { useRef, useState } from "react";
import Button from "../../../components/ui/Button";
import { StepProps } from "../types";
import { PlusIcon } from "../../../components/assets/icons";

const SixthStep = ({}: StepProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    fileInputRef.current!.value = "";
  };

  return (
    <div className="max-w-[648px] w-full">
      <h1 className="font-urbanist typo-heading1 font-bold mb-8">
        Add a short bio and profile picture HOA’s can get to know you better.
      </h1>
      <div
        onClick={() => {
          if (!imagePreview) fileInputRef.current?.click();
        }}
        aria-label="upload-picture"
        className="group relative w-full h-[168px] rounded-[10px] bg-(--light-grey) flex items-center justify-center mb-6 cursor-pointer overflow-hidden"
      >
        {imagePreview ? (
          <>
            <img
              src={imagePreview}
              alt="Uploaded"
              className="w-full h-full object-cover object-center"
            />
            <Button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition cursor-pointer !h-10 !px-3"
              onMouseDown={(e) => e.stopPropagation()}
            >
              Delete
            </Button>
          </>
        ) : (
          <PlusIcon />
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
      <div className="border-2 border-(--light-grey) rounded-[10px] p-4">
        <textarea
          className="focus:outline-none border-0 w-full min-h-[200px] resize-none text-(--primary-black) typo-label"
          placeholder="Bio"
        />
      </div>
    </div>
  );
};

export default SixthStep;
