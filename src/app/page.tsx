import { About } from "./components/About/About";
import Footer from "./components/Footer/Footer";
import CarouselItems from "./components/carouselItems/CarouselItems";
import { Hero } from "./components/Hero/Hero";
import { Questions } from "./components/Questions/Questions";
import { Testimonial } from "./components/Testimonials/Testimonial";

export default function Home() {
  return (
    <main className="bg-[#1A1A1A] grid gap-0 ">
      <Hero />
      <CarouselItems />
      <About />
      <Questions />
      <Testimonial />
      <Footer />
    </main>
  );
}
