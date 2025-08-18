import React, { FC } from "react";
import { JobCardProps } from "./type";
import { Clock, CalenderBlank, MapPin } from "@/components/assets/icons";
import { tagIcons } from "@/components/modals/tagIcons";
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
    <div className="bg-[#FFFFFF] shadow-dark rounded-2xl p-6 mb-6 font-jakarta leading-[100%]">
      <div className="flex justify-between items-start">
        <h3 className="typo-heading3 font-semibold text-(--primary-black) ">
          {title}
        </h3>
        {tickets > 0 && (
          <div className="flex items-center gap-2 text-(--danger) typo-body font-normal">
            <span className="h-3 w-3 bg-(--danger) rounded-full font-normal typo-body"></span>
            {tickets} Tickets
          </div>
        )}
      </div>

      {description && (
        <p className="typo-body font-medium text-(--primary-black) my-4">
          {description}
        </p>
      )}

      <div className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2 ">
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-[6px] p-[10px] bg-(--light-grey) text-[#15120F] typo-small rounded-lg font-medium">
                {tagIcons[tag]} {tag}
              </span>
            ))}

          {date && (
            <span className="flex items-center gap-[6px] p-[10px] bg-(--light-grey) text-[#15120F] typo-small rounded-lg font-medium">
              <CalenderBlank size={16} /> {date}
            </span>
          )}

          {time && (
            <span className="flex items-center gap-[6px] p-[10px] bg-(--light-grey) text-[#15120F] typo-small rounded-lg">
              <Clock size={16} /> {time}
            </span>
          )}

          <span                 className="flex items-center gap-[6px] p-[10px] bg-(--light-grey) text-[#15120F] typo-small rounded-lg font-medium">

            <MapPin size={16} /> {location}
          </span>
        </div>

        <div className="flex">
          <span
            className={`p-[10px] typo-small font-medium rounded-lg text-(--white) ${
              status === "Active" ? "bg-[#00A400]" : "bg-(--orange)"
            }`}>
            Status: {status}
          </span>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
