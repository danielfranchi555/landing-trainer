"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import testimonialOne from "../../../../public/testimonials-1.png";
import svg from "../../../../public/svgTestomials.svg";

export const Testimonial = () => {
  return (
    <div className="w-full bg-[url(/elipse.svg)]  bg-no-repeat bg-cover bg-center  py-50 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <Carousel className="w-full relative  overflow-visible">
          {/* Flechas para desktop (a los lados) */}
          <CarouselPrevious className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10" />

          <CarouselContent className="py-10">
            <CarouselItem>
              <div className="flex  flex-col md:flex-row gap-8 items-center w-full">
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative bg-[#1F1F1F] p-6 md:p-10 w-full max-w-md rounded-md">
                    <p className="text-base md:text-2xl text-white">
                      I ve never felt stronger! John pushed me to my limits
                      while providing the support I needed to succeed. Highly
                      recommended!
                    </p>
                    <p className="text-[#909090] text-sm md:text-lg mt-4">
                      Daniele Debbians
                    </p>
                    <Image
                      className="absolute z-20 top-[-30px] left-4"
                      src={svg}
                      alt="svg"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image
                    src={testimonialOne}
                    alt="testimonial"
                    className="w-full max-w-sm md:max-w-md object-contain rounded-md"
                  />
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex flex-col md:flex-row gap-8 items-center w-full">
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative bg-[#1F1F1F] p-6 md:p-10 w-full max-w-md rounded-md">
                    <p className="text-base md:text-2xl text-white">
                      I ve never felt stronger! John pushed me to my limits
                      while providing the support I needed to succeed. Highly
                      recommended!
                    </p>
                    <p className="text-[#909090] text-sm md:text-lg mt-4">
                      Daniele Debbians
                    </p>
                    <Image
                      className="absolute top-[-30px] left-4"
                      src={svg}
                      alt="svg"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image
                    src={testimonialOne}
                    alt="testimonial"
                    className="w-full max-w-sm md:max-w-md object-contain rounded-md"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Flechas debajo en mobile */}
          <div className="flex justify-center items-center gap-4 mt-6 md:hidden">
            <CarouselPrevious className="static translate-x-0 translate-y-0 relative" />
            <CarouselNext className="static translate-x-0 translate-y-0 relative" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
