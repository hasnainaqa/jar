import React from "react";
import Button from "../../../components/ui/Button";
import { StepProps } from "../types";

const FifthStep = ({}: StepProps) => {
  return (
    <div className="">
      <h1 className="font-urbanist typo-heading1 font-bold mb-8 max-w-[667px] w-full">
        Add the locations you cover to help us connect you with HOA’s
      </h1>
      <div className="w-full shadow-dark p-4 rounded-xl max-w-[648px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629265.841639736!2d39.7831443!3d24.1307375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2ssa!4v1690196107614"
          height="145"
          className="mt-6 border-none rounded-2xl w-full"
        />
        <p className="mt-4 typo-body font-normal font-jakarta">Muheel Facilities Managment</p>
        <h3 className="mt-2 typo-body font-semibold mb-4 font-jakarta">Saudia Arabia</h3>

        <Button variant="inline" className="mb-6 font-jakarta">
          Use my Current Location
        </Button>

        <h2 className="typo-label font-semibold mb-4 font-jakarta">Add Manually</h2>
        <div className="flex gap-4 font-jakarta">
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
