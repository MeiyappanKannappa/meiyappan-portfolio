import React, { useState, useEffect } from "react";
import BlogpostData from "../data/BlogpostData";

const Blog = ({ link, imageurl, text }) => {
  const [showText, setShowText] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    console.log("showText in useEffect:", showText);
  }, [showText]);

  const handleClick = () => {
    setClickCount((prevCount) => {
      if (prevCount === 0) {
        setShowText(true);
      }

      if (prevCount >= 1) {
        window.open(link, "_blank");
        setShowText(false);
        return 0;
      }

      return prevCount + 1;
    });
  };

  return (
    <div className="mb-5 md:mb-7 relative" onClick={handleClick}>
      <div>
        <img
          src={imageurl}
          width={"450px"}
          className="object-fill border-2 border-[#505050]"
        />
        {showText && (
          <div className="absolute top-0 left-0 text-center md:p-4 w-full h-full bg-[#1363DF] opacity-0 hover:opacity-90  flex justify-center items-center transition-opacity">
            <p className="font-poppins text-[14px] md:text-[20px] text-white ">
              {text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Blogs = ({ title }) => {
  return (
    <div className="xl:flex lg:justify-between">
      <h1 className="text-[24px] font-bold text-[#505050] lg:text-[22px] mb-[10px]">
        {title}
      </h1>
      <div className="flex">
        <div className="flex-1 w-full">
          {BlogpostData.reverse()
            .filter((item) => {
              const modifiedId = item.id - 1;
              return modifiedId % 2 !== 0;
            })
            .map((item) => (
              <Blog key={item.id} {...item} />
            ))}
        </div>

        <div className="flex-1 w-full ml-4">
          {BlogpostData.filter((item) => {
            const modifiedId = item.id - 1;
            return modifiedId % 2 === 0;
          }).map((item) => (
            <Blog key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
