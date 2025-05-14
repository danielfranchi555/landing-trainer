"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import imageHero from "../../../../public/image-optimazed.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // aumenta el espacio entre animaciones
      delayChildren: 0.3, // pequeño delay antes de iniciar
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" }, // duración más larga y easing suave
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.8 }, // retraso para que aparezca después del texto
  },
};

export function Hero() {
  return (
    <div className="relative pt-10 md:pt-0 isolate bg-[url(/bg-padel-5.jpg)] bg-right bg-no-repeat bg-cover">
      {/* SVG de fondo - bien atrás y al inicio */}
      <div className="absolute inset-0 bg-[url('/bg-svg.svg')] bg-no-repeat bg-cover bg-center z-[10]" />

      {/* Capa negra semi-transparente encima del fondo */}
      <div className="absolute inset-0 bg-black/84 w-full h-full z-0" />

      <section className="pt-20 relative grid mx-auto max-w-7xl space-y-8 px-6 md:px-0 md:grid-cols-2 md:space-y-16 z-10">
        {/* Contenedor principal animado con stagger */}
        <motion.div
          className="flex flex-col items-center justify-center md:items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="font-extrabold text-3xl text-center md:text-left md:text-7xl text-white tracking-wider"
            variants={itemVariants}
          >
            Lezioni di Padel con Istruttore Esperto{" "}
          </motion.h1>

          <motion.p
            className="text-white/90 mt-4 text-center text-1xl md:text-2xl md:text-left"
            variants={itemVariants}
          >
            Oltre 8 anni di esperienza nell insegnamento del padel. Lezioni
            personalizzate per tutti i livelli, lavoro in Italia per migliorare
            tecnica, strategia e rendimento in campo.
          </motion.p>

          <motion.div variants={itemVariants} className="z-10">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-400 mt-6 py-6 max-w-max text-2xl cursor-pointer z-10 ">
              Inizia subito
            </Button>
          </motion.div>
        </motion.div>

        {/* Imagen animada con animación independiente */}
        <motion.div
          className="relative w-full"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          layout="position"
        >
          <Image
            src={imageHero}
            alt="imageHero"
            width={1050}
            height={900}
            className="relative z-20"
            style={{
              maskImage: "linear-gradient(black 90%, transparent)",
            }}
            priority
          />
        </motion.div>
      </section>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-black/80 z-10" />
    </div>
  );
}
