import React from "react";
import LatestProjects from "../sections/LatestProjects";
import Blogs from "../sections/Blogs";

const Work = () => {
  return (
    <main>
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
