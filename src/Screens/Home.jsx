import React from "react";
import Dashlogo from "../components/Dashlogo";
import Blogs from "../sections/Blogs";
import LatestProjects from "../sections/LatestProjects";

const Home = () => {
  return (
    <main>
      <section className="text-[16px] md:text-[18px] font-poppins mt-[71px] text-center md:mx-[230px]">
        Indian architect and developer with a penchant for cloud-native
        architecture and development. Created business-to-consumer and
        business-to-business
        <span className="text-[#1363DF] font-semibold"> mobility systems</span>
      </section>
      <section className="md:mt-[80px]">
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
