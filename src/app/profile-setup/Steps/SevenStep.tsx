import React, { useState } from "react";
import Image from "next/image";
import { StepProps } from "../types";
import InputField from "../../../components/ui/InputField";
import { useForm } from "react-hook-form";
import { Plus2Icon } from "../../../components/assets/icons";
import FileUpload from "@/components/modals/FileUpload";

const SevenStep = ({}: StepProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { control } = useForm();

  return (
    <div className="">
      <h1 className="font-urbanist typo-heading1 font-bold mb-8 max-w-[712px] w-full">
        Add your card details to ensure you get paid quickly and securely.
      </h1>
      <div className="w-full shadow-dark p-4 rounded-xl max-w-[536px]">
        <h3 className="typo-label font-bold mb-4 font-urbanist">
          Add Bank details
        </h3>
        <div className="flex gap-4 mb-4">
          <InputField
            name="firstName"
            control={control}
            type="text"
            className="w-full"
            placeholder="First Name"
            inputClassName="h-[60px]"
            placeholderAnimate={true}
          />
          <InputField
            name="lastName"
            control={control}
            type="text"
            className="w-full"
            placeholder="Last Name"
            inputClassName="h-[60px]"
            placeholderAnimate={true}
          />{" "}
        </div>
        <InputField
          name="accountNumber"
          control={control}
          type="number"
          className="w-full"
          placeholder="Bank Account Number"
          inputClassName="h-[60px]"
          placeholderAnimate={true}
        />

        <FileUpload
          label=""
          accept=".pdf,.doc,.docx"
          required
          onFileSelect={(file) => setSelectedFile(file)}
          className=" cursor-pointer [appearance:none]">
          <div
            onClick={() => {}}
            className="flex items-center justify-between gap-4 p-4 overflow-hidden mt-4 cursor-pointer">
            <div className="flex items-center gap-4">
              <Image
                src={"/assets/icons/FileGrey.svg"}
                width={24}
                height={24}
                alt="file"
              />
              <p className="text-(--black) typo-body font-jakarta">
                {selectedFile ? selectedFile.name : "Upload Document"}
              </p>
            </div>
            <Plus2Icon />
          </div>
        </FileUpload>
      </div>
    </div>
  );
};

export default SevenStep;
