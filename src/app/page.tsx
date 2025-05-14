import { About } from "./components/About/About";
import CarouselItems from "./components/carouselItems/CarouselItems";
import { Questions } from "./components/Questions/Questions";
import { CallToAction } from "./components/CallToAction/CallToAction";
import dynamic from "next/dynamic";
import Hero from "./components/Hero/Hero";

const Testimonial = dynamic(
  () => import("./components/Testimonials/Testimonial")
);
const Contact = dynamic(() => import("./components/Contact/Contact"));
const Footer = dynamic(() => import("./components/Footer/Footer"));
const WhatsappButton = dynamic(
  () => import("./components/WhatsappButton/WhatsappButton")
);

export default function Home() {
  return (
    <main className="bg-[#090707] grid gap-0 overflow-hidden ">
      <Hero />
      <CarouselItems />
      <About />
      <Questions />
      <CallToAction />
      <div className="bg-[url(/Testimonial-bg.svg)] bg-no-repeat py-10  mt-40 ">
        <Testimonial />
      </div>
      <Contact />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
