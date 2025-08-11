import Image from "next/image";
import React from "react";
import { StepProps } from "../types";
import { Plus2Icon } from "../../../components/assets/icons";

const SecondStep = ({}: StepProps) => {
  return (
    <div className="max-w-[648px] w-full">
      <h1 className="font-urbanist typo-heading1 font-bold mb-8">
        Please upload a valid government-issued document{" "}
      </h1>
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center justify-between gap-4 bg-(--light-grey) rounded-2xl p-4 overflow-hidden w-[48%]">
          <div className="flex items-center gap-4">
            <Image
              src={"/assets/icons/FileGrey.svg"}
              width={24}
              height={24}
              alt="file"
            />
            <p className="text-(--black) typo-body font-jakarta">
              Upload Document
            </p>
          </div>
          <Plus2Icon />
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
