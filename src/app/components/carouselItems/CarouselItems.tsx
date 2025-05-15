"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { GiTennisRacket, GiTennisCourt } from "react-icons/gi";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRunning } from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "Lezioni per Principianti",
    description: "Impara le basi del padel da zero con tecnica e divertimento.",
    icon: <GiTennisRacket size={50} />,
  },
  {
    id: 2,
    title: "Allenamento Avanzato",
    description:
      "Perfeziona la tua tattica, velocità e posizionamento in campo.",
    icon: <GiTennisRacket size={50} />,
  },
  {
    id: 3,
    title: "Lezioni per Bambini",
    description: "Formazione ludica e sicura per i più piccoli.",
    icon: <GiTennisCourt size={50} />,
  },
  {
    id: 4,
    title: "Lezioni di Coppia",
    description: "Coordinazione e strategia per giocare in squadra.",
    icon: <HiOutlineUsers size={50} />,
  },
  {
    id: 5,
    title: "Preparazione Fisica",
    description: "Migliora la tua forma fisica adattata al padel.",
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
    <div className="w-full overflow-hidden rounded-xl py-20 md:px-6">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-0 mb-10">
        <h3 className="text-white text-2xl md:text-4xl font-bold">
          Servizi di Allenamento di Padel
        </h3>
      </div>
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
      w-[90vw]      
      sm:w-60       
      md:w-64       
      lg:w-72       
    "
          >
            <div className="mb-4 text-[#097FD9] group-hover:text-white font-bold text-4xl flex w-full">
              {icon}
            </div>
            <h3 className="text-white font-bold text-2xl md:text-xl min-h-[3.5rem] leading-normal">
              {title}
            </h3>
            <p className="text-white text-sm mt-2">{description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
