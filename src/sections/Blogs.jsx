import React from "react";
import BlogpostData from "../data/BlogpostData";

const Blogs = ({ title }) => {
  return (
    <div className="xl:flex lg:justify-between">
      <h1 className="text-[26px] font-bold text-[#505050] lg:text-[22px] mb-[10px]">
        {title}
      </h1>
      <div className="flex">
        <div className="flex-1 w-full">
          {BlogpostData.reverse()
            .filter((item) => item.id % 2 !== 0)
            .map(({ id, link, imageurl, text }) => (
              <div key={id} className="mb-5 md:mb-7 relative">
                <a href={link} target="_blank">
                  <img
                    src={imageurl}
                    width={"450px"}
                    className="object-fill border-2 border-[#505050]"
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
        {/* <div className="flex-1 w-full">
          {BlogpostData.filter((item) => item.id % 2 !== 0)
            .reverse()
            .map(({ id, link, imageurl, text }) => (
              <div key={id} className="mb-5 md:mb-7 ">
                <a href={link} target="_blank">
                  <img
                    src={imageurl}
                    width={"450px"}
                    className="object-fill border-2 border-[#505050] "
                  />
                </a>
              </div>
            ))}
        </div> */}
        {/* <div className="flex-1 w-full ml-4">
          {BlogpostData.filter((item) => item.id % 2 === 0)
            .reverse()
            .map(({ id, link, imageurl, text }) => (
              <div
                key={id}
                className="mb-5 md:mb-7 hover:bg-[#1363DF] hover:opacity-50"
              >
                <a href={link} target="_blank">
                  <img
                    src={imageurl}
                    width={"450px"}
                    className="object-fill border-2 border-[#505050] hover:bg-[#1363DF] hover:opacity-50"
                  />
                </a>
              </div>
            ))}
        </div> */}
        <div className="flex-1 w-full ml-4">
          {BlogpostData.filter((item) => item.id % 2 === 0).map(
            ({ id, link, imageurl, text }) => (
              <div key={id} className="mb-5 md:mb-7 relative">
                <a href={link} target="_blank">
                  <img
                    src={imageurl}
                    width={"450px"}
                    className="object-fill border-2 border-[#505050]"
                  />
                  <div className="absolute top-0 left-0 text-center md:p-4 w-full h-full bg-[#1363DF] opacity-0 hover:opacity-90  flex justify-center items-center transition-opacity">
                    <p className="font-poppins text-[14px] md:text-[20px] text-white ">
                      {text}
                    </p>
                  </div>
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
