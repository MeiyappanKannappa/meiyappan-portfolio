import React from "react";
import WorkExperienceData from "../data/WorkExperienceData";

const WorkExperience = () => {
  return (
    <main>
      {WorkExperienceData.reverse().map((items) => (
        <div className="mb-[30px]">
          <div key={items.id} className="text-[22px]">
            {items.JobTitle} •{" "}
            <span className="font-poppins text-[18px]">{items.Company}</span>
          </div>
          <p className="text-[14px] font-poppins italic">
            {items.FromDate} - {items.ToDate}
          </p>
        </div>
      ))}
    </main>
  );
};

export default WorkExperience;
