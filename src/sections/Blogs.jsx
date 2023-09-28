import React from "react";
import Blogpost from "../data/Blogpost";

const Blogs = () => {
  return (
    <div className="md:flex md:justify-between">
      <h1 className="text-[26px] font-bold text-[#505050] md:text-[22px] mb-[10px]">
        Recent Blogs
      </h1>
      <div className="flex">
        <div className="flex-1 w-full ">
          {Blogpost.filter((item) => item.id % 2 !== 0).map(
            ({ id, link, imageurl }) => (
              <div key={id} className="mb-5 md:mb-7">
                <img src={imageurl} width={"450px"} />
              </div>
            )
          )}
        </div>
        <div className="flex-1 w-full ml-4 ">
          {Blogpost.filter((item) => item.id % 2 == 0).map(
            ({ id, link, imageurl }) => (
              <div key={id} className="mb-5 md:mb-7">
                <img src={imageurl} width={"450px"} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
