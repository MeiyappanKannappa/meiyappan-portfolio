import React from "react";
import AboutImg from "../data/AboutImg";
import WorkExperience from "../sections/WorkExperience";

const About = () => {
  return (
    <main className="mb-[50px]">
      <section className="text-[18px] font-poppins mt-[71px] text-center">
        A technological dreamer and enthusiast that derives great satisfaction
        from <br />
        crafting sophisticated software structures, and I am dedicated to being
        a <br />
        driving force in the professional arena in the mobility space.
      </section>
      <section className="mt-[70px] ">
        <div className="flex justify-center gap-[30px] object-cover">
          {AboutImg.map((item) => (
            <img
              key={item.id}
              src={item.imageurl}
              className={`${item.id === 3 ? "w-[320px]" : "w-[220px]"}`}
            />
          ))}
        </div>
      </section>

      <section className="mt-[70px] ">
        <div className="flex lg:justify-center">
          <h1 className="text-[24px] font-bold text-[#505050] md:w-[280px]">
            About
          </h1>
          <div className="text-[20px] font-poppins">
            I have worked in software architecture for over a decade and have
            extensive <br />
            experience with application modernisation for the Digital Journey.
            My whole
            <br /> professional life has been spent developing software
            platforms and products <br />
            for the{" "}
            <span className="text-[#1363DF] font-semibold">
              Automotive and Mobility Sector
            </span>
            , with the overarching goal of
            <br /> maximising company profits by technological means. <br />
            <br />
            Starting off as a Java/J2EE developer, I've now honed my skills in
            Node.js, <br />
            React.js, Android, React Native, and GoLang. Creating{" "}
            <span className="text-[#1363DF] font-semibold">
              B2C and B2B
            </span>{" "}
            mobility <br />
            systems in the cloud is where my heart is, and it's where I've had
            the most
            <br /> success as a developer. <br />
            <br />
            My Medium profile, msmechatronics.medium.com, is where I share{" "}
            <span className="text-[#1363DF] font-semibold">
              articles <br />
              on technological issues
            </span>{" "}
            in addition to my day job. Feel free to ask me any <br />
            questions you have on System Architecture, Java, Spring Boot, Spark,
            <br />
            Android, iOS, React.js, React Native, Azure, or GCP; I'm happy to
            share what <br />
            I've learned.
            <br />
            <br /> You can email me at msmechatronics@gmail.com if you'd want to
            get in <br />
            touch. On a more personal level, I have an{" "}
            <span className="text-[#1363DF] font-semibold">inner poet</span> and
            love nothing more <br />
            than to curl up with a good book and a{" "}
            <span className="text-[#1363DF] font-semibold">
              steaming mug of masala chai while <br />
              it's raining outside.
            </span>
          </div>
        </div>
      </section>
      <section className="mt-10 flex lg:justify-center lg:-ml-[280px]">
        <div className="flex">
          <h1 class="text-[24px] font-bold text-[#505050] md:w-[280px] ">
            Work <br />
            Experience
          </h1>
          <div>
            <WorkExperience />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
