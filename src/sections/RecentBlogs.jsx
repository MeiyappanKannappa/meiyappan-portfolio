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
          {BlogpostData.reverse()
            .filter((item) => {
              const modifiedId = item.id - 1;
              return modifiedId % 2 !== 0;
            })
            .slice(0, 2) // Only take the first 2 items
            .map(({ id, link, imageurl, text }) => (
              <div key={id} className="mb-5 md:mb-7 relative">
                <a href={link} target="_blank">
                  <img
                    src={imageurl}
                    className="w-[450px] h-[150px] md:h-[250px] lg:h-[350px] border-2 border-[#505050] object-contain  "
                  />
                  <div className="absolute top-0 left-0 text-center md:p-4 w-full h-full bg-[#1363DF] opacity-0 hover:opacity-90  flex justify-center items-center transition-opacity">
                    <p className="font-poppins text-[14px] md:text-[20px] text-white ">
                      {text}
                    </p>
                  </div>
                </a>
              </div>
            ))}
        </div>
        {/* <div className="flex-1 w-full ml-4">
          {BlogpostData.reverse()
            .filter((item) => item.id % 2 === 0)
            .reverse()
            .slice(0, 2) // Only take the first 2 items
            .map(({ id, link, imageurl, text }) => (
              <div
                key={id}
                className="mb-5 md:mb-7 hover:bg-[#1363DF] hover:opacity-50"
              >
                <a href={link} target="_blank">
                  <img
                    src={imageurl}
                    width={"450px"}
                    className="h-[150px] md:h-[250px] lg:h-[350px] border-2 border-[#505050] object-contain hover:bg-[#1363DF] hover:opacity-50"
                  />
                </a>
              </div>
            ))}
        </div> */}
        <div className="flex-1 w-full ml-4">
          {BlogpostData.filter((item) => {
            const modifiedId = item.id - 1;
            return modifiedId % 2 === 0;
          })
            .slice(0, 2) // Only take the first 2 items
            .map(({ id, link, imageurl, text }) => (
              <div key={id} className="mb-5 md:mb-7 relative">
                <a href={link} target="_blank">
                  <img
                    src={imageurl}
                    className="w-[450px] h-[150px] md:h-[250px] lg:h-[350px] border-2 border-[#505050] object-contain"
                  />
                  <div className="absolute top-0 left-0 text-center md:p-4 w-full h-full bg-[#1363DF] opacity-0 hover:opacity-90  flex justify-center items-center transition-opacity">
                    <p className="font-poppins text-[14px] md:text-[20px] text-white ">
                      {text}
                    </p>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
