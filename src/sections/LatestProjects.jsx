import React from "react";
import LatestProjectData from "../data/LatestProjectData";

const LatestProjects = ({ title }) => {
  return (
    <div className="lg:flex lg:justify-between">
      <h1 className="text-[24px] lg:text-[22px] font-bold text-[#505050]">
        {title}
      </h1>
      <div className="mt-[10px] md:flex">
        <div
          className="flex justify-center 
        md:flex-1 md:w-full "
        >
          {LatestProjectData.filter((item) => item.id % 2 !== 0).map(
            ({ id, link, imageurl }) => (
              <div key={id} className="mb-[10px] md:mb-7">
                <img
                  src={imageurl}
                  width={"450px"}
                  className="hidden md:flex"
                />
                <img src={imageurl} className="w-full md:hidden" />
              </div>
            )
          )}
        </div>
        <div className="flex justify-center md:flex-1 md:w-full md:ml-4 ">
          {LatestProjectData.filter((item) => item.id % 2 == 0).map(
            ({ id, link, imageurl }) => (
              <div key={id} className="mb-[10px] md:mb-7">
                <img
                  src={imageurl}
                  width={"450px"}
                  className="hidden md:flex"
                />
                <img src={imageurl} className="w-full md:hidden" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
