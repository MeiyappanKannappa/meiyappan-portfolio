import React from "react";
import LatestProjectData from "../data/LatestProjectData";

const LatestProjects = ({ title }) => {
  return (
    <div className=" xl:flex lg:justify-between">
      <h1 className="text-[24px] lg:text-[22px] font-bold text-[#505050]">
        {title}
      </h1>
      <div className="mt-[10px] md:flex">
        <div className="flex justify-center md:flex-1 md:w-full ">
          {LatestProjectData.filter((item) => item.id % 2 === 0).map(
            ({ id, link, imageurl, text, date }) => (
              <div key={id} className="mb-[10px] md:mb-7">
                <p className="text-[18px] mt-2 mb-2 lg:mt-0">
                  {text} •{" "}
                  <span className="italic font-poppins text-[16px]">
                    {date}
                  </span>
                </p>
                <a href={link} target="_blank">
                  <img
                    src={imageurl}
                    width={"450px"}
                    className="hidden md:flex lg:w-[510px] xl:w-[450px]"
                  />
                </a>
                <img src={imageurl} className="w-full md:hidden" />
              </div>
            )
          )}
        </div>
        <div className="flex justify-center md:flex-1 md:w-full md:ml-4 ">
          {LatestProjectData.filter((item) => item.id % 2 !== 0).map(
            ({ id, link, imageurl, text, date }) => (
              <div key={id} className="mb-[10px] md:mb-7">
                <p className="text-[18px] mt-2 mb-2 lg:mt-0">
                  {text} •{" "}
                  <span className="italic font-poppins text-[16px]">
                    {date}
                  </span>
                </p>
                <a href={link} target="_blank">
                  <img
                    src={imageurl}
                    width={"450px"}
                    className="hidden md:flex lg:w-[510px] xl:w-[450px]"
                  />
                </a>
                <img src={imageurl} className="w-full md:hidden " />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
