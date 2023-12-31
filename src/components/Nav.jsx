import React, { useState } from "react";
import Logos from "./Logos";
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const tabs = [
    {
      id: 1,
      name: "About",
      link: "/about",
    },
    {
      id: 2,
      name: "Work",
      link: "/work",
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <header className=" flex justify-between w-full h-20 md:items-center">
      <div className="hidden md:flex space-x-2 items-center ">
        {Logos.map(({ id, link, image }) => (
          <a key={id} href={link} target="_blank">
            <img
              src={image}
              width={"32px"}
              height={"32px"}
              alt={`Logo ${id}`}
            />
          </a>
        ))}
      </div>
      <div className="flex items-center ">
        <a href="/" className="mt-[-16px] md:ml-[50px]">
          <img
            src="/assets/images/logo.png"
            width={"66px"}
            height={"97px"}
            alt="Site_Logo"
          />
        </a>
      </div>

      <ul className="hidden md:flex items-center md:space-x-5">
        {tabs.map(({ id, link, name }) => (
          <li
            key={id}
            className="md:text-[24px] text-[28px] hover:text-[#1363DF] hover:font-normal"
          >
            <a href={link}>{name}</a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-[#000000] md:hidden h-0"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-[#000000]">
          {tabs.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
