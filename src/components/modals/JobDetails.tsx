"use client";

import React from "react";
import Button from "@/components/ui/Button";
import {
  MapPin,
  CalenderBlank,
} from "@/components/assets/icons";
import { JobDetailModalProps } from "./type";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import { tagIcons } from "./tagIcons";


const JobDetails = ({ selectedJob, onClose, isOpen }: JobDetailModalProps) => {



  return (
    <>
      <div
  onClick={onClose}
  className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
    isOpen ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
/>

<div
  className={`fixed top-0 right-0 h-full w-full max-w-[650px] bg-(--white) shadow-xl z-50 
    transition-transform  duration-500 ease-in-out rounded-l-3xl overflow-y-auto pl-6 py-13 pr-10
    ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
>
        <div className="border p-6 rounded-xl border-(--light-grey)">
          <div className=" flex items-center justify-between">
            <h2 className="typo-heading3 font-semibold text-(--primary-black)">
              Client Information
            </h2>
          </div>

          <div className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/men/41.jpg"
                  className="w-15 h-15 rounded-full object-cover"
                  alt="Client"
                />
                <p className="font-semibold typo-heading3 text-(--primary) text-[15px]">
                  Abdullah Sudais
                </p>
              </div>
              <Link href={`/job/${selectedJob?.id}`}>
              <Button
                className=" !h-[35px] typo-small rounded-md !p-[10px] font-medium">
                Bid On this Job
              </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 space-y-6">
          <div>
            <h3 className="text-(--primary) font-semibold typo-heading3 pb-4">
              {selectedJob?.title}
            </h3>
            <p className="typo-body font-medium text-(--primary-black) leading-relaxed">
              {selectedJob?.desc}
            </p>
          </div>

          <div>
            <h4 className="font-semibold typo-heading3 mb-4">Services Needed</h4>
            <div className="flex flex-wrap gap-2">
              {selectedJob?.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-[#f3f3f3] p-2.5 rounded-lg typo-small flex items-center gap-[6px] text-[#15120F] font-medium">
                  {tagIcons[tag]} {tag}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold typo-heading3 mb-4">Services Breakdown</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Cleaning Area: 1200 Sqm",
                "Ac Units: 60",
                "Pools: 20",
                "Elevators: 20",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#f3f3f3] p-2.5 rounded-lg typo-small flex items-center gap-[6px] text-[#15120F] font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold typo-heading3 mb-4">
              Work Duration & Location
            </h4>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="bg-[#f3f3f3] px-3 py-[6px] rounded-lg typo-body text-gray-800 font-medium flex items-center gap-2">
                <CalenderBlank /> 1 Year
              </div>
              <div className="bg-[#f3f3f3] px-3 py-[6px] rounded-lg typo-body text-gray-800 font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {selectedJob?.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
