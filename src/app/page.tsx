import { About } from "./components/About/About";
import Footer from "./components/Footer/Footer";
import CarouselItems from "./components/carouselItems/CarouselItems";
import { Hero } from "./components/Hero/Hero";
import { Questions } from "./components/Questions/Questions";
import { Testimonial } from "./components/Testimonials/Testimonial";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import Contact from "./components/Contact/Contact";
import { CallToAction } from "./components/CallToAction/CallToAction";

export default function Home() {
  return (
    <main className="bg-[#090707] grid gap-0 ">
      <Hero />
      <CarouselItems />
      <About />
      <Questions />
      <CallToAction />
      <Testimonial />
      <Contact />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
