// MotionText.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import imageHero from "../../../../../../public/image-hero.png";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0.7 },
  },
};

export default function MotionText() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 items-center md:items-center gap-8"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center md:items-start gap-4"
      >
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-wider text-center md:text-left">
          Lezioni di Padel con Istruttore Esperto
        </h1>
        <p className="text-white/90 mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left">
          Oltre 8 anni di esperienza nell insegnamento del padel in Italia.
          Lezioni personalizzate per tutti i livelli per migliorare tecnica,
          strategia e rendimento in campo.
        </p>
        <a href="#contact">
          <Button className="cursor-pointer max-w-max p-8 text-2xl bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500">
            Inizia Subito
          </Button>
        </a>
      </motion.div>

      <motion.div
        variants={imageVariants}
        className="relative z-20 w-full flex items-center justify-center"
      >
        <Image
          src={imageHero}
          alt="Martin Chaig insegnando padel"
          width={600}
          height={600}
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
