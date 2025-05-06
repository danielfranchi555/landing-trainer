import React from "react";
import imageAbout from "../../../../public/nino-2.jpg";
import Image from "next/image";
export const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 grid gap-10  md:grid-cols-2 md:px-0">
      <div>
        <Image src={imageAbout} alt="image-about" width={500} height={400} />
      </div>
      <div className=" flex flex-col justify-center gap-5 ">
        <div>
          <h2 className="text-4xl text-white md:text-7xl">Who Is Nino?</h2>
          <p className="text-[#909090] text-2xl">
            As a passionate personal trainer, I believe in empowering
            individuals to achieve their fitness goals through personalized
            coaching and support.{" "}
          </p>
        </div>
        <div className="grid gap-2 md:grid-cols-3">
          <div className="bg-[#1F1F1F] flex flex-col gap-1 items-center justify-center p-4 rounded-md shadow-xl">
            <span className="text-red-500 font-bold text-3xl md:text-5xl">
              2000+
            </span>
            <p className="text-[#909090]">Satisfied Clients</p>
          </div>
          <div className="bg-[#1F1F1F] flex flex-col gap-1 items-center justify-center p-4 rounded-md shadow-xl">
            <span className="text-red-500 font-bold text-3xl md:text-5xl">
              10
            </span>
            <p className="text-[#909090]">Years of Experience</p>
          </div>
          <div className="bg-[#1F1F1F] flex flex-col gap-1 items-center justify-center p-4 rounded-md shadow-xl">
            <span className="text-red-500 font-bold text-3xl md:text-5xl">
              15
            </span>
            <p className="text-[#909090]">Years in Sport</p>
          </div>
        </div>
      </div>
    </div>
  );
};
