"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { GiTennisRacket, GiTennisCourt } from "react-icons/gi";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRunning } from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "Clases para Principiantes",
    description:
      "Aprendé las bases del pádel desde cero con técnica y diversión.",
    icon: <GiTennisRacket size={50} />,
  },
  {
    id: 2,
    title: "Entrenamiento Avanzado",
    description:
      "Perfeccioná tu táctica, velocidad y posicionamiento en pista.",
    icon: <GiTennisRacket size={50} />,
  },
  {
    id: 3,
    title: "Clases para Niños",
    description: "Formación lúdica y segura para los más pequeños.",
    icon: <GiTennisCourt size={50} />,
  },
  {
    id: 4,
    title: "Clases en Pareja",
    description: "Coordinación y estrategia para jugar en equipo.",
    icon: <HiOutlineUsers size={50} />,
  },
  {
    id: 5,
    title: "Preparación Física",
    description: "Mejorá tu estado físico adaptado al pádel.",
    icon: <FaRunning size={50} />,
  },
];

// Duplicamos las cards para crear efecto infinito
const duplicatedCards = [...cards, ...cards];

export default function CarouselItems() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    controls.start({
      x: -totalWidth,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="w-full overflow-hidden rounded-xl py-20 ">
      <motion.div
        ref={containerRef}
        animate={controls}
        className="flex cursor-grab select-none gap-5 px-5 md:px-10"
      >
        {duplicatedCards.map(({ title, description, icon }, index) => (
          <div
            key={index}
            className="
      group
      flex-shrink-0 
      bg-[#0D0D0D] 
      p-7
      rounded-lg 
      shadow-md 
      hover:bg-[#097FD9] 
      transition-colors 
      duration-300
      flex 
      flex-col 
      text-left
      w-[90vw]      /* móvil: casi todo el ancho */
      sm:w-60       /* sm: 15rem = 240px aprox */
      md:w-64       /* md: 16rem = 256px */
      lg:w-72       /* lg: 18rem = 288px */
    "
          >
            <div className="mb-4 text-[#097FD9] group-hover:text-white font-bold text-4xl flex w-full">
              {icon}
            </div>
            <h3 className="text-white font-bold text-lg md:text-xl min-h-[3.5rem] leading-normal">
              {title}
            </h3>
            <p className="text-white text-sm mt-2">{description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
