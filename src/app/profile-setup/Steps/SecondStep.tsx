import Image from "next/image";
import React, { useState } from "react";
import { StepProps } from "../types";
import { Plus2Icon } from "../../../components/assets/icons";
import FileUpload from "@/components/modals/FileUpload";

const SecondStep = ({}: StepProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="max-w-[648px] w-full">
      <h1 className="font-urbanist typo-heading1 font-bold mb-8">
        Please upload a valid government-issued document
      </h1>

        <FileUpload
            label=""
            accept=".pdf,.doc,.docx"
            required
            onFileSelect={(file) => setSelectedFile(file)}
            className=" cursor-pointer [appearance:none]"
          >
        <div className="relative flex items-center justify-between gap-4 bg-(--light-grey) rounded-2xl p-4 overflow-hidden w-[48%] cursor-pointer font-jakarta">
          <div className="flex items-center gap-4">
            <Image
              src={"/assets/icons/FileGrey.svg"}
              width={24}
              height={24}
              alt="file"
            />
            <p className="text-(--black) typo-body ">
              {selectedFile ? selectedFile.name : "Upload Document"}
            </p>
          </div>
          <Plus2Icon />

        </div>
          </FileUpload>
    </div>
  );
};

export default SecondStep;
