import React from "react";
import LatestProjects from "../sections/LatestProjects";
import Blogs from "../sections/Blogs";

const Work = () => {
  return (
    <main>
      <section className="mt-[45px] text-[14px] lg:md:text-[18px] font-poppins md:mt-[71px] text-center ">
        Welcome to my professional portfolio, where I invite you to explore a
        meticulously curated collection of my impactful work across various
        domains, including web development, design, and software engineerin
        Immerse yourself in my world of creativity and innovation as you browse
        through the work page. Additionally, gain valuable insights and stay
        up-to-date with the latest trends, best practices, and innovative
        perspectives by delving into the thought-provoking articles in the Blog
        section. Join me on this journey of excellence and discover the
        limitless possibilities of technology
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
