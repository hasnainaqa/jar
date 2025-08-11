import React from "react";
import Button from "../../../components/ui/Button";
import { StepProps } from "../types";

const FifthStep = ({}: StepProps) => {
  return (
    <div className="max-w-[648px] w-full">
      <h1 className="font-urbanist typo-heading1 font-bold mb-8">
        Add the locations you cover to help us connect you with HOA’s
      </h1>
      <div className="w-full shadow-dark p-4 rounded-xl">
        <p className="typo-body font-normal">Muheel Facilities Managment</p>
        <h3 className="typo-body font-semibold mb-4">Saudia Arabia</h3>

        <Button variant="inline" className="mb-6">
          Use my Current Location
        </Button>

        <h2 className="typo-label font-semibold mb-4">Add Manually</h2>
        <div className="flex gap-4">
          <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[300px] w-full cursor-pointer">
            <p className="text-(--grey-text) typo-small font-jakarta font-regular mb-1">
              Location
            </p>
            Muheel Facilities Managment
          </div>
          <div className="bg-(--white) border-2 border-(--light-grey) rounded-[10px] px-4 py-3 overflow-hidden max-w-[300px] w-full cursor-pointer">
            <p className="text-(--grey-text) typo-small font-jakarta font-regular mb-1">
              Landmark
            </p>
            Tea House
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthStep;
