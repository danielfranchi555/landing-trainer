"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import imageHero from "../../../../public/hero-nino-2.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative md:pt-0 bg-[url(/bg-padel-5.jpg)] bg-right bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-black/84 w-full h-full" />

      <section className="pt-20 relative grid mx-auto max-w-7xl space-y-8 px-6 md:px-0 md:grid-cols-2 md:space-y-16">
        {/* Texto principal animado */}
        <motion.div
          className="flex flex-col items-center justify-center md:items-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-extrabold text-5xl md:text-8xl text-white tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Impara il Padel con un Esperto.
          </motion.h1>

          <motion.p
            className="text-white/90 mt-4 text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Con molti anni nel mondo del padel, ho imparato come ottenere il
            meglio da ogni giocatore e massimizzare il suo potenziale in campo
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="z-10"
          >
            <Button className="bg-[#235BFF] mt-6 py-6 max-w-max text-2xl cursor-pointer z-10 hover:bg-blue-500">
              Inizia subito{" "}
            </Button>
          </motion.div>
        </motion.div>

        {/* Imagen animada */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          layout="position" // Asegura un layout fluido y sin saltos
        >
          <Image
            src={imageHero}
            alt="imageHero"
            width={1050}
            height={900}
            className="relative z-10"
            style={{
              maskImage: "linear-gradient(black 90%, transparent)",
            }}
            priority // Optimiza la carga de la imagen
          />
        </motion.div>
      </section>

      <div className="absolute inset-0 bg-[url('/bg-svg.svg')] bg-no-repeat bg-cover bg-center z-0" />
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-black/80" />
    </div>
  );
}
