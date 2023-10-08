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
        <div className="hidden  md:flex lg:flex justify-center items-center md:gap-[80px] lg:gap-[100px]">
          <img
            src="/assets/images/ford.png"
            className="md:h-[60px] lg:h-[80px] lg:w-[220px] object-contain"
          />
          <img
            src="/assets/images/benz.png"
            className="md:h-[60px] lg:h-[85px] lg:w-[90px] object-contain"
          />
          <img
            src="/assets/images/cognizant.png"
            className="md:h-[50px] lg:h-[91px] lg:w-[350px] object-contain"
          />
        </div>
        {/* {Mobile} */}
        <div className="mx-[10px] mt-[50px] sm:mx-[80px]  md:hidden  items-center ">
          <div className="flex gap-10 justify-between">
            <img
              src="/assets/images/ford.png"
              className="h-[60px] w-[170px] ml-5 object-contain"
            />
            <img
              src="/assets/images/benz.png"
              className="h-[60px] w-[60px]  mr-8 object-contain "
            />
          </div>
          <div className="flex mt-6">
            <img
              src="/assets/images/cognizant.png"
              className="h-[70px] w-full  object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashlogo;
