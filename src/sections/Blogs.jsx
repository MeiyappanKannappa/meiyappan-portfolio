import React from "react";
import BlogpostData from "../data/BlogpostData";

const Blogs = ({ title }) => {
  return (
    <div className="lg:flex lg:justify-between">
      <h1 className="text-[26px] font-bold text-[#505050] lg:text-[22px] mb-[10px]">
        {title}
      </h1>
      <div className="flex">
        <div className="flex-1 w-full">
          {BlogpostData.filter((item) => item.id % 2 !== 0)
            .slice(0, 2) // Only take the first 4 items
            .map(({ id, link, imageurl }) => (
              <div key={id} className="mb-5 md:mb-7">
                <img src={imageurl} width={"450px"} />
              </div>
            ))}
        </div>
        <div className="flex-1 w-full ml-4">
          {BlogpostData.filter((item) => item.id % 2 === 0)
            .slice(0, 2) // Only take the first 4 items
            .map(({ id, link, imageurl }) => (
              <div key={id} className="mb-5 md:mb-7">
                <img src={imageurl} width={"450px"} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
