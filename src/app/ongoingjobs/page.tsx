"use client";

import React, { FC, useState } from "react";
import {
  Airconditioner,
  Cable,
  Cleaning,
  Clock,
  CalenderBlank,
  MapPin,
} from "@/components/assets/icons";
import { tagIcons } from "@/components/modals/tagIcons";
interface JobCardProps {
  title: string; // Job title
  description: string; // Job details
  tags: string[]; // Small badges like "AC Service", "Cleaning"
  date?: string; // Optional date
  time?: string; // Optional time
  location: string; // Job location
  tickets: number; // Number of tickets for this job
  status: "Active" | "On Hold"; // Job status
}

const JobCard: FC<JobCardProps> = ({
  title,
  description,
  tags,
  date,
  time,
  location,
  tickets,
  status,
}) => {


  return (
    <div className="bg-[#FFFFFF] shadow-dark rounded-2xl p-6 mb-6 font-jakarta">

      <div className="flex justify-between items-start">
        <h3 className="typo-heading3 font-semibold">{title}</h3>
        {tickets>0 && <div className="flex items-center gap-2 text-(--danger) typo-body font-normal">

          <span className="h-3 w-3 bg-(--danger) rounded-full"></span>
          {tickets} Tickets
        </div>}
      </div>


      <p className="typo-body font-medium text-gray-600 my-4">{description}</p>

      <div className="flex justify-between items-center">
      <div className="flex flex-wrap gap-2 ">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-[6px] p-[10px] bg-(--light-grey) text-[#15120F] typo-small rounded-lg">
            {tagIcons[tag] || <p></p> } {tag}
          </span>
        ))}

        {date && (
          <span className="flex items-center gap-[6px] p-[10px] bg-(--light-grey) text-[#15120F] typo-small rounded-lg">
            <CalenderBlank size={16} /> {date}
          </span>
        )}

        {time && (
          <span className="flex items-center gap-[6px] p-[10px] bg-(--light-grey) text-[#15120F] typo-small rounded-lg">
            <Clock size={16} /> {time}
          </span>
        )}

        <span className="flex items-center gap-[6px] p-[10px] bg-(--light-grey) text-[#15120F] typo-small rounded-lg">
          <MapPin size={16} /> {location}
        </span>
      </div>

      {/* ---------- Status Badge ---------- */}
      <div className="flex">
        <span
          className={`p-[10px] typo-small font-medium rounded-lg text-(--white) ${
            status === "Active"
              ? "bg-[#00A400]"
              : "bg-(--orange)"
          }`}>
          Status: {status}
        </span>
      </div>
      </div>
    </div>
  );
};

export default function OngoingJobsPage() {
  const [activeTab, setActiveTab] = useState("All Ongoing Jobs");

  const jobs: JobCardProps[] = [
    {
      title: "Ac Service",
      description:
        "We’re looking for a reliable AC technician to provide thorough cleaning and maintenance for our air conditioning unit(s). The service should include filter cleaning, coil inspection, gas level check, and a full system diagnostic to ensure optimal performance and energy efficiency. Timely and professional service is expected.",
      tags: ["Ac Service", "1000"], 
      date: "08/06/2025",
      time: "3:00 Pm",
      location: "6391 Elgin St. Celina, Delaware 10299",
      tickets: 4,
      status: "Active",
    },
    {
      title: "Comprehensive Building Maintenance",
      description:
        "We are looking for a reliable, experienced, and professional service provider who can efficiently manage and execute comprehensive maintenance work for our building, ensuring all systems and facilities are kept in excellent working condition.",
      tags: ["Ac Service", "Cleaning", "Electrical"],
      location: "6371 Elgin St. Celina, Delaware 10299",
      tickets: 2,
      status: "Active",
    },
    {
      title: "Complete Building Maintenance Solutions",
      description:
        "We’re looking for a service provider to manage all aspects of our building’s maintenance, including AC servicing, electrical system upkeep, and thorough cleaning. The goal is to ensure a safe, clean, and well-functioning environment for all occupants.",
      tags: ["Ac Service", "Cleaning", "Electrical"],
      location: "6391 Elgin St. Celina, Delaware 10299",
      tickets: 0,
      status: "On Hold",
    },
  ];

  return (
    <div className="p-[60px] pt-8 max-w-[1400px] mx-auto ">
      <div className="flex gap-8 border-b border-gray-200 mb-5">
      {["All Ongoing Jobs", "Ongoing Service Contracts", "Private Jobs"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-[13px]  typo-label ${
              tab === activeTab
                ? "border-b-2 border-(--orange) text-(--primary-black) font-semibold"
                : "text-(--grey-text) font-normal cursor-pointer "
            }`}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab=== "All Ongoing Jobs" && jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
}
