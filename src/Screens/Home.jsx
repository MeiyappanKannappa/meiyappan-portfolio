import React from "react";
import Dashlogo from "../components/Dashlogo";
import RecentBlogs from "../sections/RecentBlogs";
import LatestProjects from "../sections/LatestProjects";

const Home = () => {
  return (
    <main className="mb-10">
      <section className="text-[14px] lg:md:text-[18px] font-poppins mt-[45px] text-center md:mt-[71px]">
        I'm an Indian Software Architect, specializing in building cutting-edge
        microservices using cloud-native technologies. I'm always on the lookout
        for the latest tech trends and love diving into new technologies. With a
        strong background in vehicle and{" "}
        <span className="text-[#1363DF] font-semibold">
          {" "}
          mobility solutions
        </span>
        , l've honed my skills in architecting innovative solutions in this
        space. As a mobile app developer and Java enthusiast, I bring a
        versatile skill set to the table. I'm proud to hold{" "}
        <span className="text-[#1363DF] font-semibold">two patents</span> in the
        connected vehicle and autonomous vehicle
      </section>
      <section className="md:mt-[80px]">
        <Dashlogo />
      </section>
      <section className="mt-[80px]">
        <RecentBlogs title={"Recent Blogs"} />
      </section>
      <section className="mt-[50px] md:mt-[50px]">
        <LatestProjects title={"Latest Projects"} />
      </section>
    </main>
  );
};

export default Home;
