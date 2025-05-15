import MotionText from "./motions/MotionsText/MotionText";

export default function HeroStatic() {
  return (
    // Contenedor principal con altura mínima 100vh para ocupar toda la pantalla
    <div className="relative pt-10 md:pt-0 isolate min-h-screen bg-[url('/bg-upto.jpg')] bg-right bg-no-repeat bg-cover">
      {/* SVG fondo que ocupa todo el espacio */}
      <div
        className="absolute inset-0 z-[10]"
        style={{
          backgroundImage: "url('/bg-svg.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover", // importante para cubrir todo el contenedor
          width: "100%",
          height: "100%",
        }}
      />

      {/* Overlay negro para contraste */}
      <div className="absolute inset-0 bg-black/80 w-full h-full z-0" />

      {/* Contenedor del texto con z-index superior */}
      <div className="relative pt-10 md:pt-20 isolate z-10 bg-right bg-no-repeat bg-cover">
        <section className="pt-20 relative grid w-full mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <MotionText />
        </section>
      </div>

      {/* Difuminado (fade out) al final del div */}
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
