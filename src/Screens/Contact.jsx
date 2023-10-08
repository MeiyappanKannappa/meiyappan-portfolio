import React from "react";

const Contact = () => {
  return (
    <main>
      {/* <section className="mt-[30px] text-[14px] md:text-[18px] font-poppins md:mt-[71px] text-center lg:mx-[100px] xl:mx-[210px]">
        I am readily available to connect with you in a professional capacity.
        Whether it pertains to a potential project, an inquiry, or any other
        matter of importance, please feel free to contact me. Your message will
        be the initial point of contact for what I hope to be a productive and
        meaningful interaction.
      </section> */}
      <section className="mt-[50px]">
        <div class="mt-[50px] xl:flex">
          <div class="xl:w-[20%]">
            <h1 class="text-[26px] md:text-[24px] md:mt-[10px] font-bold text-[#505050]">
              Contact Me
            </h1>
          </div>
          <form
            action="https://formsubmit.co/f12dc92ce6967f5ef07f03971da41474"
            method="POST"
          >
            <div class="xl:w-[90%] text-left mt-[23px] md:mt-2 font-poppins ">
              <input
                type="text"
                name="Name"
                id="name"
                placeholder="Name"
                className="w-full mb-[20px] md:mb-[30px] text-[18px] md:text-[22px] placeholder-[#505050] text-[#505050] border-b-2 border-[#9E9E9E] outline-none h-[40px] md:h-[50px]"
              />
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="E-Mail"
                className="w-full text-[18px] md:text-[22px] mb-[20px] md:mb-[30px] placeholder-[#505050] text-[#505050] border-b-2 border-[#9E9E9E] outline-none h-[40px] md:h-[50px]"
              />
              <input
                type="text"
                name="Message"
                id="message"
                placeholder="Message"
                className="w-full text-[18px] md:text-[22px] mb-[20px] md:mb-[30px] placeholder-[#505050] text-[#505050] border-b-2 border-[#9E9E9E] outline-none h-[40px] md:h-[50px]"
              />
              <button className="flex underline outline-none text-[22px] md:text-[22px] text-[#505050] ml-auto">
                Send
              </button>
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="/" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
