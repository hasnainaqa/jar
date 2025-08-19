import React from "react";
import { StepProps } from "../types";

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
            How much do you charge forelevators?
          </p>
          500
        </div>
        <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[312px] w-full cursor-pointer typo-body leading-[100%] text-(--black)">
          <p className="text-(--grey-text) typo-small font-jakarta font-regular mb-1">
            How much do you charge forelevators?
          </p>
          500
        </div>
        <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[312px] w-full cursor-pointer typo-body leading-[100%] text-(--black)">
          <p className="text-(--grey-text) typo-small font-jakarta font-regular">
            How much do you charge for swimming pools?
          </p>
          200
        </div>
        <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[312px] w-full cursor-pointer typo-body leading-[100%] text-(--black)">
          <p className="text-(--grey-text) typo-small font-jakarta font-regular">
            How much do you charge for swimming pools?
          </p>
          200
        </div>
        <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[312px] w-full cursor-pointer typo-body leading-[100%] text-(--black)">
          <p className="text-(--grey-text) typo-small font-jakarta font-regular">
            How much do you charge for cleaning services?
          </p>
          1000
        </div>
        <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[312px] w-full cursor-pointer typo-body leading-[100%] text-(--black)">
          <p className="text-(--grey-text) typo-small font-jakarta font-regular">
            How much do you charge for cleaning services?
          </p>
          1000
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
