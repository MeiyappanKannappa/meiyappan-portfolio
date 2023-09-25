import React from "react";
import LatestProjects from "../sections/LatestProjects";
import Blogs from "../sections/Blogs";

const Work = () => {
  return (
    <main>
      <section className="mt-[100px]">
        <LatestProjects />
      </section>
      <section className="mt-[50px]">
        <Blogs />
      </section>
    </main>
  );
};

export default Work;
