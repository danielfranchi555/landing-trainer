"use client";
import React from "react";
import imageAbout from "../../../../public/nino-2.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // controla el retraso entre hijos
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }, // sin delay aquí
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }, // sin delay aquí
  },
};

export const About = () => {
  return (
    <motion.div
      className="mt-20 mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 md:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Imagen animada */}
      <motion.div variants={itemVariants}>
        <Image src={imageAbout} alt="image-about" width={500} height={400} />
      </motion.div>

      {/* Texto y estadísticas animadas */}
      <motion.div
        className="flex flex-col justify-center gap-5"
        variants={containerVariants} // aquí también aplicamos staggerChildren para sus hijos
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl text-white md:text-7xl">Chi è Nino?</h2>
          <p className="text-[#909090] text-2xl mt-4">
            Come allenatore di padel appassionato, credo nell aiutare i
            giocatori a raggiungere i loro obiettivi migliorando la loro tecnica
            e il loro gioco attraverso un coaching personalizzato e un supporto
            continuo
          </p>
        </motion.div>

        <motion.div
          className="grid gap-2 md:grid-cols-2 mt-6"
          variants={containerVariants} // staggerChildren para las estadísticas
        >
          <motion.div
            className="bg-[#1F1F1F] flex flex-col gap-1 items-center justify-center p-4 rounded-md shadow-xl"
            variants={statVariants}
          >
            <span className="text-[#235BFF] font-bold text-3xl md:text-5xl">
              100 +
            </span>
            <p className="text-[#909090]">Clienti soddisfatti</p>
          </motion.div>
          <motion.div
            className="bg-[#1F1F1F] flex flex-col gap-1 items-center justify-center p-4 rounded-md shadow-xl"
            variants={statVariants}
          >
            <span className="text-[#235BFF] font-bold text-3xl md:text-5xl">
              10
            </span>
            <p className="text-[#909090]">Anni di esperienza</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
