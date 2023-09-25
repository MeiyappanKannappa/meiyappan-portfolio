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
        <div className="hidden md:flex justify-center items-center gap-[80px]">
          <img
            src="src/assets/images/ford.png"
            height={"80px"}
            width={"160px"}
          />
          <img
            src="src/assets/images/benz.png"
            height={"85px"}
            width={"90px"}
          />
          <img
            src="src/assets/images/cognizant.png"
            height={"91px"}
            width={"290"}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashlogo;
