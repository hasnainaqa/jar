"use client";

import React, { FC, useState } from "react";
import {
  Clock,
  CalenderBlank,
  MapPin,
} from "@/components/assets/icons";
import { tagIcons } from "@/components/modals/tagIcons";
import { JobCardProps } from "@/components/modals/type";
import JobCard from "@/components/modals/JobCard";
export default function OngoingJobsPage() {
  const [activeTab, setActiveTab] = useState("All Ongoing Jobs");

  const allOngoingJobs: JobCardProps[] = [
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
  
const ongoingContracts: JobCardProps[] = [
  {
    title: "Scheduled AC Servicing",
    description:
      "Need a technician for scheduled AC servicing, including a performance check, thorough cleaning, and preventive maintenance to extend the system’s life and ensure efficient operation.",
    tags: ["Ac Service", "1000"], 
    date: "08/06/2025",
    time: "3:00 Pm",
    location: "6391 Elgin St. Celina, Delaware 10299",
    tickets: 1,
    status: "Active",
  },
  {
    title: "Property Maintenance Contract",
    description:
      "Looking for a contractor to maintain building facilities on an ongoing basis, covering HVAC services, electrical inspections, and general cleaning tasks for long-term upkeep.",
    tags: ["Ac Service", "Cleaning", "Electrical"],
    location: "6371 Elgin St. Celina, Delaware 10299",
    tickets: 1,
    status: "Active",
  },
  {
    title: "Multi-System Maintenance",
    description:
      "Require a reliable maintenance provider to oversee the upkeep of multiple building systems, ensuring all equipment remains functional and operational throughout the year.",
    tags: ["Ac Service", "Cleaning", "Electrical"],
    location: "6391 Elgin St. Celina, Delaware 10299",
    tickets: 0,
    status: "On Hold",
  },
];

const PrivateJobs: JobCardProps[] = [
  {
    title: "Private AC Repair",
    description:
      "Seeking a skilled AC repair technician for a private job to troubleshoot cooling issues, clean the unit, and restore optimal performance in a residential property.",
    tags: ["Ac Service", "1000"], 
    date: "08/06/2025",
    time: "3:00 Pm",
    location: "6391 Elgin St. Celina, Delaware 10299",
    tickets: 3,
    status: "Active",
  },
  {
    title: "Exclusive Property Care",
    description:
      "Looking for a trusted maintenance provider to take care of all facility-related issues for a private property, including electrical fixes, cleaning, and HVAC servicing.",
    tags: ["Ac Service", "Cleaning", "Electrical"],
    location: "6371 Elgin St. Celina, Delaware 10299",
    tickets: 5,
    status: "Active",
  },
  {
    title: "Personal Building Maintenance",
    description:
      "Need a dedicated service provider to manage ongoing building maintenance tasks, including AC checks, electrical safety inspections, and thorough cleaning on a private contract basis.",
    tags: ["Ac Service", "Cleaning", "Electrical"],
    location: "6391 Elgin St. Celina, Delaware 10299",
    tickets: 0,
    status: "On Hold",
  },
];

  return (
    <div className="p-[60px] pt-8 max-w-[1400px] mx-auto font-jakarta">
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

      {activeTab=== "All Ongoing Jobs" && allOngoingJobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
      {activeTab=== "Ongoing Service Contracts" && ongoingContracts.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
      {activeTab=== "Private Jobs" && PrivateJobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
}
