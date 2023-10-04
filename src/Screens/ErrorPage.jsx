import React from "react";
import { Route } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main>
      <section className="mt-[50px] flex justify-center">
        <div class="">
          <h1 class="text-[26px] md:text-[24px] md:mt-[20px] lg:text-[38px] font-bold text-[#505050]">
            404 Not Found!
          </h1>
          <p className="text-[16px] md:text-[18px]">
            Back to{" "}
            <a href="/" className="text-[#1363DF]">
              Home
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
