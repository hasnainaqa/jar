"use client";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import JobDetails from "@/components/modals/JobDetails";
import {
  AlignBottom,
  Cleaning,
  MagnifyingGlass,
  MapPin,
  Star,
} from "@/components/assets/icons";
import { Job } from "@/components/modals/type";
import { tagIcons } from "@/components/modals/tagIcons";

export default function Home() {
  const [search, setSearch] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs = [
    {
      title: "Ac Service",
      desc: "We're looking for a reliable AC technician to provide thorough cleaning and maintenance for our air conditioning unit(s). The service should include filter cleaning, coil inspection, gas level check, and a full system diagnostic to ensure optimal performance and energy efficiency. Timely and professional service is expected.",
      tags: ["Ac Service", "Cleaning", "Electrical"],
      location: "6391 Elgin St. Celina, Delaware 10299",
      posted: "2 hours ago",
      id: 1,
    },
    {
      title: "Comprehensive Building Maintenance",
      desc: "We are looking for a reliable, experienced, and professional service provider who can efficiently manage and execute comprehensive maintenance work for our building, ensuring all systems and facilities are kept in excellent working condition.",
      tags: ["Ac Service", "Cleaning", "Electrical"],
      location: "6391 Elgin St. Celina, Delaware 10229",
      posted: "2 hours ago",
      id: 2,
    },
    {
      title: "Complete Building Maintenance Solutions",
      desc: "We're looking for a service provider to manage all aspects of our building's maintenance, including AC servicing, electrical system upkeep, and thorough cleaning. The goal is to ensure a safe, clean, and well-functioning environment for all occupants.",
      tags: ["Ac Service", "Cleaning", "Electrical"],
      location: "6391 Elgin St. Celina, Delaware 10299",
      posted: "2 hours ago",
      id: 3,
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex justify-center px-10  pt-8 gap-6 font-jakarta">
      <div className="w-full max-w-[1300px] flex justify-between flex-col-reverse lg:flex-row">
        <div className="lg:w-[75%] mr-6 ">
          <div className="flex-1">
            {/*  Search Bar */}
            <div className="relative w-full p-4 flex items-center gap-2 mb-4 text-(--grey-text) bg-(--light-grey) h-[50px] rounded-xl">
              <MagnifyingGlass />
              <input
                type="text"
                placeholder="Search Jobs"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-(--light-grey) placeholder:typo-body pr-4 py-3 typo-body text-(--black) rounded-xl focus:outline-none"
              />
            </div>

            <h2 className="text-(--primary-black) text-lg sm:text-xl font-semibold mb-4">
              Find Jobs
            </h2>

            {/*  Job Cards */}
            <div className="space-y-6  mb-6">
              {filteredJobs.length === 0 ? (
                <p className="typo-body text-gray-500">No jobs found.</p>
              ) : (
                filteredJobs.map((job, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl shadow-dark bg-[#ffffff]">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-(--primary-black)">
                        {job.title}
                      </h3>
                      <span className="typo-small font-medium text-(--grey-text)">
                        Posted {job.posted}
                      </span>
                    </div>
                    <p className="typo-body font-medium text-(--primary-black) mt-4">
                      {job.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.tags.map((tag, i) => (
                        <div
                          key={i}
                          className="typo-small font-medium p-3 bg-(--light-grey) rounded-lg text-[#15120F] flex items-center gap-[6px]">
                          {tagIcons[tag]}
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center flex-wrap gap-1 mt-4">
                      <div className="flex items-center gap-[6px] typo-body text-(--grey-text)">
                        <MapPin />
                        {job.location}
                      </div>
                      <Button
                        onClick={() => {
                          setSelectedJob(job);
                          setIsPopupOpen(true);
                        }}
                        className="!h-[35px] !w-[52px] !p-[10px] text-[12px] !rounded-lg !font-medium">
                        Bid
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="flex lg:w-[25%] ">
          <div className="w-full ">
            <div className="sticky top-28 ">
              <div className="bg-(--white) p-6 rounded-2xl shadow-dark">
              <div className="flex items-center gap-3 pb-6">
                <div className="w-[60px] h-[60px] rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/41.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg text-(--primary) ">
                    Ali Sadad
                  </p>
                </div>
              </div>
              <hr className="border-(--light-grey) border-[1px] w-[100%] " />
              <div className="flex items-center text-(--primary) gap-2 font-semibold text-lg py-6">
                <AlignBottom />
                <h3>Statistics</h3>
              </div>
              <div className="flex gap-2 font-medium typo-small">
                <Star />
                <p>4.5</p>
              </div>
              <div className="mt-4 typo-body text-gray-600 flex gap-8">
                <div>
                  <h2 className="font-semibold text-lg text-(--primary) pb-2">
                    $200k+
                  </h2>
                  <p className="font-normal typo-small">Total Earnings</p>
                </div>
                <div>
                  <h2 className="font-semibold text-lg text-(--primary) pb-2">
                    150
                  </h2>
                  <p className="font-normal typo-small">Total Jobs</p>
                </div>
              </div>
            </div>

            <div className="bg-(--white) p-6 rounded-lg shadow-dark mt-6 ">
              <h4 className="font-semibold text-lg mb-2 text-(--primary-black)">
                Services Provided By You
              </h4>
              <div className="space-y-2">
                {Array(3)
                  .fill("Cleaning Services")
                  .map((service, i) => (
                    <div
                      key={i}
                      className="flex items-center p-4 border border-(--light-grey) rounded-lg typo-body text-(--primary-black) gap-4">
                      <Cleaning />
                      {service}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <JobDetails
        selectedJob={selectedJob}
        onClose={() => setIsPopupOpen(false)}
        isOpen={isPopupOpen}
      />
    </div>
  );
}
