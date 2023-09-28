import React from "react";

const Dashlogo = () => {
  const companylogo = [
    {
      id: 1,
      image: "/assets/images/ford.png",
    },
    {
      id: 2,
      image: "/assets/images/benz.png",
    },
    {
      id: 3,
      image: "/assets/images/cognizant.png",
    },
  ];

  return (
    <div>
      <div>
        <div className="hidden md:flex justify-center items-center gap-[100px]">
          <img src="/assets/images/ford.png" height={"80px"} width={"220px"} />
          <img src="/assets/images/benz.png" height={"85px"} width={"90px"} />
          <img
            src="/assets/images/cognizant.png"
            height={"91px"}
            width={"350"}
          />
        </div>
        <div className="mx-[60px] mt-[50px] md:hidden  items-center ">
          <div className="flex gap-10 justify-between">
            <img
              src="/assets/images/ford.png"
              className="h-[60px] w-[170px] ml-3"
            />
            <img
              src="/assets/images/benz.png"
              className="h-[60px] w-[60px]  mr-4 "
            />
          </div>
          <div className="flex mt-6">
            <img
              src="/assets/images/cognizant.png"
              className="h-[60px] w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashlogo;
