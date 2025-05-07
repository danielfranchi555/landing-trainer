import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import imageHero from "../../../../public/hero-nino-2.png";

export function Hero() {
  return (
    <div className=" relative md:pt-0  bg-[url(/bg-padel-5.jpg)] bg-left bg-no-repeat bg-cover bg">
      <div className=" absolute inset-0 bg-black/84 w-full h-full"></div>
      <section className="pt-20 relative grid mx-auto max-w-7xl space-y-8 px-6 md:px-0 md:grid-cols-2 md:space-y-16">
        <div className=" flex flex-col  items-center justify-center md:items-start">
          <h1 className="font-extrabold text-5xl md:text-8xl text-white tracking-wider">
            Transform Challenges into Triumphs!
          </h1>
          <p className="text-white/90 mt-4">
            As a passionate personal trainer, I believe in empowering
            individuals to achieve their fitness goals through personalized
            coaching and support.{" "}
          </p>
          <Button className="bg-[#235BFF] mt-6 py-6  max-w-max text-2xl cursor-pointer z-10 hover:bg-blue-500">
            Get started
          </Button>
        </div>
        {/* Imagen principal */}
        <div className="relative w-full">
          {/* SVG de fondo */}
          {/* Imagen principal encima */}
          <Image
            src={imageHero}
            alt="imageHero"
            width={1050}
            height={900}
            className="relative z-10"
            style={{
              maskImage: "linear-gradient(black 90%, transparent)",
            }}
          />
        </div>
      </section>
      <div className="absolute inset-0 bg-[url('/bg-svg.svg')] bg-no-repeat bg-cover bg-center z-0" />

      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-black/80" />
    </div>
  );
}
