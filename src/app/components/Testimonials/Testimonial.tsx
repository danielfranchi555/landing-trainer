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
// import elipse from "../../../../public/elipse.svg";x

export const Testimonial = () => {
  return (
    <div className="w-full bg-[url(/elipse.svg)] bg-center py-60">
      <div className=" mx-auto max-w-6xl">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              {/* flex justify-between gap-4 h-full  w-full  border md:grid bg-red-500 */}
              <div className=" flex flex-col  md:flex-row md:w-full md:h-full md:gap-10 ">
                <div className="w-full md:w-[700px] flex items-center justify-center  ">
                  <div className=" relative flex flex-col gap-4  p-10 bg-[#1F1F1F]">
                    <p className="text-1xl md:text-3xl text-white">
                      I ve never felt stronger! John pushed me to my limits
                      while providing the support I needed to succeed. Highly
                      recommended!
                    </p>
                    <p className="text-[#909090] text-1 xl">Daniele Debbians</p>
                    <Image
                      className="absolute top-[-30px] "
                      src={svg}
                      alt="svg"
                      width={50}
                      height={100}
                    />
                  </div>
                </div>
                <div className="">
                  <Image
                    src={testimonialOne}
                    alt="test-1"
                    width={500}
                    height={100}
                    className="w-full md:w-[500px]"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className=" flex flex-col  md:flex-row md:w-full md:h-full md:gap-10 ">
                <div className="w-full md:w-[700px] flex items-center justify-center  ">
                  <div className=" relative flex flex-col gap-4  p-10 bg-[#1F1F1F]">
                    <p className="text-1xl md:text-3xl text-white">
                      I ve never felt stronger! John pushed me to my limits
                      while providing the support I needed to succeed. Highly
                      recommended!
                    </p>
                    <p className="text-[#909090] text-1 xl">Daniele Debbians</p>
                    <Image
                      className="absolute top-[-30px] "
                      src={svg}
                      alt="svg"
                      width={50}
                      height={100}
                    />
                  </div>
                </div>
                <div className="">
                  <Image
                    src={testimonialOne}
                    alt="test-1"
                    width={500}
                    height={100}
                    className="w-full md:w-[500px]"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className=" flex flex-col  md:flex-row md:w-full md:h-full md:gap-10 ">
                <div className="w-full md:w-[700px] flex items-center justify-center  ">
                  <div className=" relative flex flex-col gap-4  p-10 bg-[#1F1F1F]">
                    <p className="text-1xl md:text-3xl text-white">
                      I ve never felt stronger! John pushed me to my limits
                      while providing the support I needed to succeed. Highly
                      recommended!
                    </p>
                    <p className="text-[#909090] text-1 xl">Daniele Debbians</p>
                    <Image
                      className="absolute top-[-30px] "
                      src={svg}
                      alt="svg"
                      width={50}
                      height={100}
                    />
                  </div>
                </div>
                <div className="">
                  <Image
                    src={testimonialOne}
                    alt="test-1"
                    width={500}
                    height={100}
                    className="w-full md:w-[500px]"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
