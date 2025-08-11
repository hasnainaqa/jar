"use client";

import React from "react";
import { StepProps } from "../types";
import {
  AirConditionIcon,
  CableIcon,
  CleaningIcon,
  PainterIcon,
  PestControl,
  PlumberIcon,
} from "../../../components/assets/icons";

const ThirdStep = ({}: StepProps) => {
  return (
    <div className="max-w-[648px] w-full">
      <h1 className="font-urbanist typo-heading1 font-bold mb-8">
        We’d love to know—what services do you provide?
      </h1>
      <div className="flex flex-wrap gap-6">
        <div className="bg-(--white) rounded-xl p-4 overflow-hidden shadow-dark w-[160px] flex flex-col items-center cursor-pointer">
          <AirConditionIcon className="mb-4" />
          <p className="text-(--black) typo-body font-jakarta font-semibold">
            AC Services{" "}
          </p>
        </div>
        <div className="bg-(--white) rounded-xl p-4 overflow-hidden shadow-dark w-[160px] flex flex-col items-center cursor-pointer">
          <CleaningIcon className="mb-4" />
          <p className="text-(--black) typo-body font-jakarta font-semibold">
            Cleaning Services
          </p>
        </div>
        <div className="bg-(--white) rounded-xl p-4 overflow-hidden shadow-dark w-[160px] flex flex-col items-center cursor-pointer">
          <CableIcon className="mb-4" />
          <p className="text-(--black) typo-body font-jakarta font-semibold">
            Electrician
          </p>
        </div>
        <div className="bg-(--white) rounded-xl p-4 overflow-hidden shadow-dark w-[160px] flex flex-col items-center cursor-pointer">
          <PlumberIcon className="mb-4" />
          <p className="text-(--black) typo-body font-jakarta font-semibold">
            Plumber
          </p>
        </div>
        <div className="bg-(--white) rounded-xl p-4 overflow-hidden shadow-dark w-[160px] flex flex-col items-center cursor-pointer">
          <PainterIcon className="mb-4" />
          <p className="text-(--black) typo-body font-jakarta font-semibold">
            Painter
          </p>
        </div>
        <div className="bg-(--white) rounded-xl p-4 overflow-hidden shadow-dark w-[160px] flex flex-col items-center cursor-pointer">
          <PestControl className="mb-4" />
          <p className="text-(--black) typo-body font-jakarta font-semibold">
            Pest Control
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
