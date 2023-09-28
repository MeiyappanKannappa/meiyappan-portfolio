import React from "react";
import LatestProjectData from "../data/LatestProjectData";

const LatestProjects = () => {
  return (
    <div className="mt-[50px] md:flex md:justify-between">
      <h1 className="text-[24px] md:text-[22px] font-bold text-[#505050]">
        Latest Projects
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
