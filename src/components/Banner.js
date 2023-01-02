import React from "react";

//import image banner
import Image from "../assets/house-banner.png";

//import components
import Search from "./Search";

const Banner = () => {
  return (
    <section className="banner h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[47.5px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="max-w-[520px] text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span
              className="text-violet-700
            "
            >Alugue</span> sua casa dos sonhos com a gente
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            voluptatem iusto veritatis molestias velit dolor ea necessitatibus.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="Casa de dois andares com duas garagens " />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
