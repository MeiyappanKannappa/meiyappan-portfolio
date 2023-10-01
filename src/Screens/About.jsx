import React from "react";
import AboutImg from "../data/AboutImg";
import WorkExperience from "../sections/WorkExperience";

const About = () => {
  return (
    <main className="mb-[70px]">
      <section className="mt-[30px] text-[14px] md:text-[18px] font-poppins md:mt-[71px] text-center lg:mx-[100px] xl:mx-[210px]">
        A technological dreamer and enthusiast that derives great satisfaction
        from crafting sophisticated software structures, and I am dedicated to
        being a driving force in the professional arena in the mobility space.
      </section>
      <section className="md:mt-[70px] ">
        <div className="hidden md:flex justify-center gap-[30px] object-cover">
          {AboutImg.map((item) => (
            <img
              key={item.id}
              src={item.imageurl}
              className={`${item.id === 3 ? "w-[320px]" : "w-[220px]"}`}
            />
          ))}
        </div>
        <div className="mt-[30px]  ss:mt-[30px] md:hidden">
          <div class="flex  justify-between">
            <img
              src="/assets/images/about-2.png"
              class="h-[166px] ss:h-[210px] sm:h-[270px] object-contain"
            />
            <img
              src="/assets/images/about-1.png"
              class="h-[166px] ss:h-[210px] sm:h-[270px] object-contain"
            />
          </div>

          <div className="flex mt-3">
            <img
              src="/assets/images/about-3.png"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-[50px] lg:mt-[70px] ">
        <div className="lg:flex lg:justify-center">
          <h1 className="mb-[10px] text-[18px] md:text-[22px] xl:text-[24px] font-bold text-[#505050] lg:mr-[130px] xl:mr-[230px]">
            About
          </h1>
          <div className="text-[14px] md:text-[16px] xl:text-[20px] font-poppins xl:mx-[20px] ">
            I have worked in software architecture for over a decade and have
            extensive experience with application modernisation for the Digital
            Journey. My whole professional life has been spent developing
            software platforms and products for the{" "}
            <span className="text-[#1363DF] font-semibold">
              Automotive and Mobility Sector
            </span>
            , with the overarching goal of maximising company profits by
            technological means.
            <br />
            <br />
            Starting off as a Java/J2EE developer, I've now honed my skills in
            Node.js, React.js, Android, React Native, and GoLang. Creating{" "}
            <span className="text-[#1363DF] font-semibold">
              B2C and B2B
            </span>{" "}
            mobility systems in the cloud is where my heart is, and it's where
            I've had the most success as a developer.
            <br />
            <br />
            My Medium profile, msmechatronics.medium.com, is where I share{" "}
            <span className="text-[#1363DF] font-semibold">
              articles on technological issues
            </span>{" "}
            in addition to my day job. Feel free to ask me any questions you
            have on System Architecture, Java, Spring Boot, Spark, Android, iOS,
            React.js, React Native, Azure, or GCP; I'm happy to share what I've
            learned.
            <br />
            <br />
            You can email me at msmechatronics@gmail.com if you'd want to get in
            touch. On a more personal level, I have an{" "}
            <span className="text-[#1363DF] font-semibold">inner poet</span> and
            love nothing more than to curl up with a good book and a{" "}
            <span className="text-[#1363DF] font-semibold">
              steaming mug of masala chai while it's raining outside.
            </span>
          </div>
        </div>
      </section>
      <section className="mt-10 flex xl:justify-center xl:-ml-[255px] 2xl:mr-[150px]">
        <div className="lg:flex">
          <h1 class="hidden lg:block text-[24px] font-bold text-[#505050] lg:w-[190px] xl:w-[320px] 2xl:w-[315px]">
            Work <br />
            Experience
          </h1>
          <h1 class="lg:hidden mb-[10px] md:text-[22px] text-[18px] lg:text-[24px] font-bold text-[#505050] lg:w-[320px] ">
            Work Experience
          </h1>
          <div className="xl:mr-[80px] 2xl:mr-[90px]">
            <WorkExperience />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
