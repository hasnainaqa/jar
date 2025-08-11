"use client";
import {
  CalenderBlank,
  File,
  MapPin,
  // MapsImg,
  Plus,
  PlusIcon,
} from "@/components/assets/icons/index";
import InputField from "@/components/ui/InputField";
import { useForm } from "react-hook-form";
import { tagIcons } from "@/components/modals/tagIcons";

import React from "react";
import Button from "@/components/ui/Button";

// Simulated job database (replace with real data fetching)
const job = {
  title: "Comprehensive Building Maintenance",
  description:
    "We are looking for a reliable, experienced, and professional service provider who can efficiently manage and execute comprehensive maintenance work for our building, ensuring all systems and facilities are kept in excellent working condition.",
  services: ["Ac Service", "Cleaning", "Electrical"],
  breakdown: [
    "Cleaning Area: 1200 Sqm",
    "Ac Units: 60",
    "Pools: 20",
    "Elevators: 20",
  ],
  tags: ["Ac Service", "Cleaning", "Electrical"],
  duration: "1 Year",
  location: "6391 Elgin St. Celina, Delaware 10299",
};

export default function JobDetails({ params }) {
  const { control } = useForm();
  // }
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Saudi+Arabia&zoom=6&size=400x400&key=YOUR_API_KEY`;

  return (
    <div className="flex justify-center px-10 pt-8 gap-6 font-jakarta">
      <div className="w-full max-w-[1300px] flex flex-col-reverse lg:flex-row gap-6 ">
        <div className="lg:w-[75%] mx-auto bg-white rounded-2xl shadow-dark p-6 space-y-6 ">
          <div>
            <h2 className="typo-heading3 font-semibold text-(--primary)">
              {job.title}
            </h2>
            <p className="typo-body text-(--primary-black) mt-4">
              {job.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold typo-heading3 text-(--primary-black) mb-4">
              Services Needed
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {job?.services?.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-(--light-grey) p-2.5 rounded-lg typo-small font-medium text-[#15120F]">
                  {tagIcons[service]} {service}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold typo-heading3 text-(--primary-black) mb-4">
              Services Breakdown
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {job.breakdown.map((item) => (
                <div
                  key={item}
                  className="bg-(--light-grey) p-2.5 rounded-lg typo-small font-medium text-[#15120F]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold typo-heading3 text-(--primary-black) mb-4">
              Work Duration & Location
            </h3>
            <div className="flex flex-wrap gap-1.5">
              <div className="flex items-center gap-1.5 bg-(--light-grey) p-2.5 rounded-lg typo-small font-medium text-[#15120F]">
                <CalenderBlank />
                {job.duration}
              </div>
              <div className="flex items-center gap-1.5 bg-(--light-grey) p-2.5 rounded-lg typo-small font-medium text-[#15120F]">
                <MapPin />
                {job.location}
              </div>
            </div>
          </div>
          <hr className="border-(--light-grey) border-[1px] w-[100%] " />

          <div>
            <h3 className="font-semibold typo-heading3 text-(--primary-black) mb-4">
              Add Total Prices
            </h3>
            <InputField
              name="accountNumber"
              control={control}
              type="number"
              className="w-full"
              id="amount"
              placeholder="Amount"
              inputClassName="h-[60px] pt-7.5 lg:w-[424px]"
              placeholderAnimate={true}
            />
          </div>
          <hr className="border-(--light-grey) border-[1px] w-[100%] " />
          {/* Cover Letter */}
          <div>
            <div className="relative w-full">
              <textarea
                id="coverLetter"
                rows={12}
                placeholder={`Dear Abdullah Sudais,

We would like to offer our complete building maintenance services, including AC servicing, electrical work, and cleaning. Our team is experienced, reliable, and committed to delivering high-quality work on time.

We’d be happy to discuss your needs in more detail and provide a tailored quote.
Looking forward to working with you.

Best regards,
Ali Sadad
+966 50 6978 398
alisadad@mail.com`}
                className=" w-full px-4 pb-3.5 pt-7.5 font-normal typo-body text-(--primary-black) rounded-[10px] border-2 border-(--light-grey) "
              />

              <label
                htmlFor="coverLetter"
                className="absolute left-4 top-3 text-(--grey-text) typo-small font-normal">
                Cover Letter
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-semibold typo-heading3 text-(--primary-black) mb-6">
              Add Relevant Document If Any
            </h3>
            <div className="bg-(--light-grey) rounded-xl p-3 flex items-center justify-between gap-2 h-[60px] lg:w-[424px]">
              <div className="flex gap-4">
                <File />
                Upload Document
              </div>
              <button>
                <Plus />
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="!h-[40px] !w-[124px] !p-[10px] text-[12px] !rounded-lg !font-medium">
              Bid
            </Button>
          </div>
        </div>
        <div className="lg:w-[25%] ">
          <div className="w-full bg-(--white) p-6 rounded-2xl shadow-dark sticky top-28 ">
            <div className="flex items-center gap-4 pb-6">
              <div className="w-[60px] h-[60px] rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/40.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold typo-heading3 text-(--primary) ">
                Ali Sadad
              </p>
            </div>
            <div className="">
              <h3 className="font-semibold typo-heading3 text-(--primary-black)">
                Location
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629265.841639736!2d39.7831443!3d24.1307375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2ssa!4v1690196107614"
                height="145"
                className="mt-6 border-none rounded-2xl w-full"
              />

              <p className="font-normal typo-body text-(--primary-black) mt-4">
                Muheel Facilities Managment
              </p>
              <p className="font-semibold typo-body text-(--primary-black) mt-2">
                Saudia Arabia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
