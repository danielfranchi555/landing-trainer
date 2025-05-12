"use client";
import React, { useEffect, useState, useRef } from "react";
import imageAbout from "../../../../public/nino-2.jpg";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function AnimatedNumber({
  target,
  suffix = "",
  startAnimation,
}: {
  target: number;
  suffix?: string;
  startAnimation: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 1500; // ms
    const increment = target / (duration / 30);

    const handle = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(handle);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(handle);
  }, [target, startAnimation]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export const About = () => {
  // Refs para los números
  const ref100 = useRef(null);
  const ref10 = useRef(null);

  // Detectar si están en viewport
  const inView100 = useInView(ref100, { once: true, amount: 0.5 });
  const inView10 = useInView(ref10, { once: true, amount: 0.5 });

  return (
    <motion.div
      className="mt-20 mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 md:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Imagen animada */}
      <motion.div variants={fadeUpVariants}>
        <Image src={imageAbout} alt="image-about" width={500} height={400} />
      </motion.div>

      {/* Texto y estadísticas animadas */}
      <motion.div
        className="flex flex-col justify-center gap-5"
        variants={containerVariants}
      >
        <motion.div variants={fadeUpVariants}>
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
          variants={containerVariants}
        >
          <motion.div
            className="bg-[#1F1F1F] flex flex-col gap-1 items-center justify-center p-4 rounded-md shadow-xl"
            variants={statVariants}
            ref={ref100}
          >
            <span className="text-[#235BFF] font-bold text-3xl md:text-5xl">
              <AnimatedNumber
                target={50}
                suffix=" +"
                startAnimation={inView100}
              />
            </span>
            <p className="text-[#909090]">Clienti soddisfatti</p>
          </motion.div>
          <motion.div
            className="bg-[#1F1F1F] flex flex-col gap-1 items-center justify-center p-4 rounded-md shadow-xl"
            variants={statVariants}
            ref={ref10}
          >
            <span className="text-[#235BFF] font-bold text-3xl md:text-5xl">
              <AnimatedNumber target={10} startAnimation={inView10} />
            </span>
            <p className="text-[#909090]">Anni di esperienza</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
