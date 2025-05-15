import MotionText from "./motions/MotionsText/MotionText";

export default function HeroStatic() {
  return (
    <div className=" relative bg-[url('/bg-upto.jpg')] bg-cover bg-right bg-no-repeat pt-40 md:pt-29  px-6 md:px-6 lg::px-0">
      {/* Capa de opacidad negra */}
      <div
        className="absolute inset-0 z-[20]"
        style={{
          backgroundImage: "url('/bg-svg.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="absolute inset-0 bg-black/80 w-full h-full z-[10]" />

      {/* Contenido encima de la opacidad */}
      <div className="relative z-20  md:mx-auto md:px-0 md:max-w-7xl">
        <MotionText />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 z-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))",
        }}
      />
    </div>
  );
}
