import React from "react";
import WorkExperienceData from "../data/WorkExperienceData";

const WorkExperience = () => {
  return (
    <main>
      {WorkExperienceData.reverse().map((items) => (
        <div key={items.id} className="mb-[20px] md:mb-[30px]">
          <div className="text-[16px] md:text-[22px]">
            {items.JobTitle} •{" "}
            <span className="font-poppins text-[14px] md:text-[18px]">
              {items.Company}
            </span>
          </div>
          <p className="text-[12px] md:text-[14px] font-poppins italic">
            {items.FromDate} - {items.ToDate}
          </p>
        </div>
      ))}
    </main>
  );
};

export default WorkExperience;
