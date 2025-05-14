import MotionText from "./motions/MotionsText/MotionText";

export default function HeroStatic() {
  return (
    <div className="relative pt-10 md:pt-0 isolate bg-[url(/bg-padel-uptomized-.jpg)] bg-right bg-no-repeat bg-cover">
      <div className="relative pt-10 md:pt-20 isolate  bg-right bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-[url('/bg-svg.svg')] bg-no-repeat bg-cover bg-center z-[10]" />
        <div className="absolute inset-0 bg-black/84 w-full h-full z-0" />
        <section className="pt-20 relative grid mx-auto max-w-7xl px-6 md:px-0 z-10">
          <MotionText />
        </section>
      </div>
    </div>
  );
}
