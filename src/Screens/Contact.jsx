import React from "react";

const Contact = () => {
  return (
    <main>
      <section className="mt-[50px]">
        <div class="flex ">
          <div class="w-[23%]">
            <h1 class="text-[24px] mt-[10px] font-bold text-[#505050]">
              Contact Me
            </h1>
          </div>
          <div class="w-3/5 text-left">
            <input
              type="text"
              name="Name"
              id="name"
              placeholder="Name"
              className="w-full mb-[30px] text-[22px] placeholder-[#505050] text-[#505050] border-b-2 border-[#9E9E9E] outline-none h-[50px]"
            />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="E-Mail"
              className="w-full text-[22px] mb-[30px] placeholder-[#505050] text-[#505050] border-b-2 border-[#9E9E9E] outline-none h-[50px]"
            />
            <input
              type="text"
              name="Message"
              id="message"
              placeholder="Message"
              className="w-full text-[22px] mb-[30px] placeholder-[#505050] text-[#505050] border-b-2 border-[#9E9E9E] outline-none h-[50px]"
            />
            <button className="flex underline outline-none text-[26px] text-[#505050] ml-auto">
              Send
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
