import React from "react";
import Blogpost from "../data/Blogpost";

const Blogs = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-[22px] font-bold text-[#505050]">Recent Posts</h1>
      <div className="flex">
        <div className="flex-1 w-full ">
          {Blogpost.filter((item) => item.id % 2 !== 0).map(
            ({ id, link, imageurl }) => (
              <div key={id} className="mb-7">
                <img src={imageurl} width={"450px"} />
              </div>
            )
          )}
        </div>
        <div className="flex-1 w-full ml-4 ">
          {Blogpost.filter((item) => item.id % 2 == 0).map(
            ({ id, link, imageurl }) => (
              <div key={id} className="mb-7">
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
