import MotionText from "./motions/MotionsText/MotionText";

export default function HeroStatic() {
  return (
    <div className="relative pt-10 md:pt-0 isolate bg-[url(/bg-padel-uptomized-.jpg)] bg-right bg-no-repeat bg-cover">
      {/* <div className="absolute inset-0 bg-[url('/bg-svg.svg')] bg-no-repeat bg-cover bg-center z-[10]" /> */}
      <div className="absolute inset-0 bg-black/84 w-full h-full z-0" />
      <div className="relative pt-10 md:pt-20 isolate  bg-right bg-no-repeat bg-cover bg-[url('/bg-svg.svg')] ">
        <section className="pt-20 relative grid w-full mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <MotionText />
        </section>
        {/* <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-white/80 z-20" /> */}
      </div>
    </div>
  );
}
