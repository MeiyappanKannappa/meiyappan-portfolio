import React from "react";
import LatestProjects from "../sections/LatestProjects";
import Blogs from "../sections/Blogs";

const Work = () => {
  return (
    <main>
      <section className="mt-[30px] text-[14px] md:text-[18px] font-poppins md:mt-[71px] text-center lg:mx-[100px] xl:mx-[210px]">
        Discover my world of creativity and innovation on the work page, where
        you'll find a curated collection of impactful work spanning web
        development, design, software engineering, and more. Explore my insights
        and ideas in the Blog section, where I share the latest trends, best
        practices, and innovative perspectives
      </section>
      <section className="mt-[30px] md:mt-[50px] lg:mt-[100px]">
        <LatestProjects title={"Projects"} />
      </section>
      <section className="mt-[50px]">
        <Blogs title={"Blogs"} />
      </section>
    </main>
  );
};

export default Work;
