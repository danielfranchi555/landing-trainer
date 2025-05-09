import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Questions } from "./components/Questions/Questions";
import { Testimonial } from "./components/Testimonials/Testimonial";

export default function Home() {
  return (
    <main className="bg-[#1A1A1A] grid gap-20 ">
      <Hero />
      <About />
      {/* <Questions /> */}
      <Testimonial />
    </main>
  );
}
