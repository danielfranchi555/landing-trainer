"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CircleUserRound } from "lucide-react";
import star from "../../../../public/star.svg";
import persons from "../../../../public/persons.svg";
import Image from "next/image";
import { motion } from "framer-motion";

// Array de testimonios
const testimonials = [
  {
    name: "Luca Bianchi",
    text: "Con Martin mi sono subito sentito a mio agio. Le lezioni sono intense ma divertenti, e sto vedendo miglioramenti ogni settimana",
  },
  {
    name: "Giulia Conti",
    text: "Non pensavo che il padel mi avrebbe preso così tanto! Martin ha un modo unico di insegnare, ti trasmette davvero la passione per il gioco",
  },
  {
    name: "Federico Romano",
    text: "Allenarsi con Martin è sempre un piacere. Ti corregge con pazienza e ti spiega ogni dettaglio, anche i più piccoli",
  },
  {
    name: "Elena Ferraro",
    text: "Un insegnante appassionato e sempre attento ai dettagli. Mi ha aiutato a prepararmi per il mio primo torneo!",
  },
];

// Variants para animaciones suaves y escaladas
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const textImageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const Testimonial = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto w-full gap-8 px-4 py-8">
      {/* Texto e imagen lateral con animación al entrar en viewport */}
      <motion.div
        className="text-white flex flex-col justify-between mb-8 md:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // amount controla cuánto debe estar visible para animar
        variants={textImageVariants}
      >
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-0">
          Cosa dicono di noi i nostri membri
        </p>
        <div className="flex flex-col gap-2 mt-6 md:mt-0">
          <Image
            src={persons}
            alt="testimonies"
            width={100}
            height={100}
            className="w-20 h-20 md:w-[100px] md:h-[100px]"
          />
          <p className="text-base md:text-lg">50+ Studenti soddisfatti</p>
        </div>
      </motion.div>

      {/* Carrusel con animación en cada tarjeta al entrar en viewport */}
      <div>
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="p-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover="hover"
                  variants={cardVariants}
                >
                  <Card className="bg-[#0D0D0D] border-none h-[300px] cursor-pointer shadow-lg">
                    <CardContent className="flex flex-col justify-between items-center p-6 gap-4 h-full">
                      <div className="flex justify-end w-full">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Image
                            key={starIndex}
                            src={star}
                            width={25}
                            height={25}
                            alt="icon-star"
                          />
                        ))}
                      </div>
                      <p className="text-white text-sm md:text-base text-center">
                        “{testimonial.text}”
                      </p>
                      <div className="flex w-full gap-4 items-center">
                        <div className="bg-[#1E1E1E] p-3 rounded-full">
                          <CircleUserRound color="white" size={32} />
                        </div>{" "}
                        <div className="flex flex-col gap-0">
                          <p className="text-white font-bold">
                            {testimonial.name}
                          </p>
                          <p className="text-[#757575]">Studente</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-x-2 mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
