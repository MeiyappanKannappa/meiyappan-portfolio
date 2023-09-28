import React from "react";

const Contact = () => {
  return (
    <main>
      <section className="mt-[50px]">
        <div class="mt-[50px] md:flex ">
          <div class="md:w-[20%]">
            <h1 class="text-[26px] md:text-[24px] md:mt-[10px] font-bold text-[#505050]">
              Contact Me
            </h1>
          </div>
          <div class="md:w-3/5 text-left mt-[23px] md:mt-2 font-poppins">
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
