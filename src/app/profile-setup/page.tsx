"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../../components/ui/Button";
import FirstStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";
import FourthStep from "./Steps/FourthStep";
import FifthStep from "./Steps/FifthStep";
import SixthStep from "./Steps/SixthStep";
import SevenStep from "./Steps/SevenStep";

const steps = [
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
  FifthStep,
  SixthStep,
  SevenStep,
];

const initialStepData = {
  first: {},
  second: {},
  third: {},
  fourth: {},
  fifth: {},
  sixth: {},
  seven: {},
};

const page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepData, setStepData] = useState(initialStepData);

  const StepComponent = steps[currentStep];

  const stepProps = {
    data: stepData,
    setData: (key: string, value: any) =>
      setStepData((prev) => ({
        ...prev,
        [key as keyof typeof initialStepData]: value,
      })),
  };

  return (
    <>
      <div className="py-2.5 bg-(--white) w-full flex flex-col justify-between mt-10 h-screen">
        <div className="w-full flex justify-center px-10">
          <div className="w-full max-w-[1300px] flex flex-col justify-between mb-10">
            <StepComponent {...stepProps} />
          </div>
        </div>
        <div>
          <div className="relative w-full h-2 bg-(--light-grey) mb-8">
            <div
              className="absolute h-2 bg-(--primary) rounded-r-full transition-all duration-300"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
          <div className="w-full flex justify-center px-10">
            <div className="w-full flex max-w-[1300px] justify-between items-center">
              <Button
                variant="secondary"
                className="flex items-center gap-3"
                onClick={() => setCurrentStep((s) => Math.max(s - 1, 0))}
                disabled={currentStep === 0}
              >
                <Image
                  src={"/assets/icons/ArrowGrey.svg"}
                  width={8}
                  height={15}
                  alt="arrow"
                />{" "}
                Previous
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  setCurrentStep((s) => Math.min(s + 1, steps.length - 1))
                }
                disabled={currentStep === steps.length - 1}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
