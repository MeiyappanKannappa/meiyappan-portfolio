import React from "react";
import Dashlogo from "../components/Dashlogo";
import Blogs from "../sections/Blogs";
import LatestProjects from "../sections/LatestProjects";

const Home = () => {
  return (
    <main>
      <section className="text-[15px] md:text-[18px] font-poppins mt-[71px] text-center">
        Indian architect and developer with a penchant for cloud-native
        <br />
        architecture and development. Created business-to-consumer
        <br /> and business-to-business{" "}
        <span className="text-[#1363DF] font-semibold">mobility systems</span>
      </section>
      <section className="mt-[80px]">
        <Dashlogo />
      </section>
      <section className="mt-[80px]">
        <Blogs />
      </section>
      <section>
        <LatestProjects />
      </section>
    </main>
  );
};

export default Home;
