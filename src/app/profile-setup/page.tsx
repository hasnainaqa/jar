"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../../components/ui/Button";
import dynamic from "next/dynamic";
import { CaretLeft } from "@/components/assets/icons";
const steps = [
  dynamic(() => import("./Steps/FirstStep")),
  dynamic(() => import("./Steps/SecondStep")),
  dynamic(() => import("./Steps/ThirdStep")),
  dynamic(() => import("./Steps/FourthStep")),
  dynamic(() => import("./Steps/FifthStep")),
  dynamic(() => import("./Steps/SixthStep")),
  dynamic(() => import("./Steps/SevenStep")),
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
  const router = useRouter(); // ✅ FIX: create router
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
      <div className="py-2.5 bg-(--white) w-full flex flex-col justify-between mt-12.5 h-[calc(100vh-140px)]">
        <div className="w-full flex justify-center px-10">
          <div className="w-full max-w-[1300px] flex flex-col justify-between ">
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
                className="flex items-center gap-[5px] py-[19px] pl-2 pr-6 font-semibold font-anevir"
                onClick={() => {
                  if (currentStep === 0) {
                    router.push("/signup");
                  } else {
                    setCurrentStep((s) => Math.max(s - 1, 0));
                  }
                }}
                disabled={false}>
                <CaretLeft />
                Previous
              </Button>
              <div className="flex ">
                {currentStep >= 4 && (
                  <button
                    className="flex items-center gap-[5px] py-[19px] px-8 font-semibold font-anevir text-sm cursor-pointer text-(--grey-text)"
                    onClick={() => {
                      if (currentStep === steps.length - 1) {
                        router.push("/signin"); 
                      } else {
                        setCurrentStep((s) =>
                          Math.min(s + 1, steps.length - 1)
                        );
                      }
                    }}
                    disabled={currentStep === steps.length - 1 && false}>
                    Skip for now
                  </button>
                )}
                <Button
                  variant="primary"
                  className="flex items-center gap-[5px] py-[19px] px-8 font-semibold font-anevir"
                  onClick={() => {
                    if (currentStep === steps.length - 1) {
                      router.push("/signin"); 
                    } else {
                      setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
                    }
                  }}
                  disabled={currentStep === steps.length - 1 && false}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
