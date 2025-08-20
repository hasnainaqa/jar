import React from "react";
import { StepProps } from "../types";
import { Currency } from "@/components/assets/icons";

const FourthStep = ({}: StepProps) => {
  return (
    <div className="max-w-[648px] w-full">
      <h1 className="font-urbanist typo-heading1 font-bold mb-8">
        Let us know your standard service rates. It will help HOA’s to offer you
        job
      </h1>
      <div className="flex flex-wrap gap-y-4 gap-x-6">
        <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[312px] w-full cursor-pointer typo-body leading-[100%] text-(--black)">
          <p className="text-(--grey-text) typo-small font-jakarta font-regular mb-1">
            How much do you charge for elevators?
          </p>

          <div className="flex items-center gap-2">
            <Currency />
            <span>500</span>
          </div>
        </div>

        <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[312px] w-full cursor-pointer typo-body leading-[100%] text-(--black)">
          <p className="text-(--grey-text) typo-small font-jakarta font-regular mb-1">
            How much do you charge forelevators?
          </p>
          <div className="flex items-center gap-2">
            <Currency />
            <span>500</span>
          </div>
        </div>
        <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[312px] w-full cursor-pointer typo-body leading-[100%] text-(--black)">
          <p className="text-(--grey-text) typo-small font-jakarta font-regular">
            How much do you charge for swimming pools?
          </p>
          <div className="flex items-center gap-2">
            <Currency />
            <span>200</span>
          </div>
        </div>
        <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[312px] w-full cursor-pointer typo-body leading-[100%] text-(--black)">
          <p className="text-(--grey-text) typo-small font-jakarta font-regular">
            How much do you charge for swimming pools?
          </p>
          <div className="flex items-center gap-2">
            <Currency />
            <span>500</span>
          </div>
        </div>
        <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[312px] w-full cursor-pointer typo-body leading-[100%] text-(--black)">
          <p className="text-(--grey-text) typo-small font-jakarta font-regular">
            How much do you charge for cleaning services?
          </p>
          <div className="flex items-center gap-2">
            <Currency />
            <span>1000</span>
          </div>
        </div>
        <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[312px] w-full cursor-pointer typo-body leading-[100%] text-(--black)">
          <p className="text-(--grey-text) typo-small font-jakarta font-regular">
            How much do you charge for cleaning services?
          </p>
          <div className="flex items-center gap-2">
            <Currency />
            <span>1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
