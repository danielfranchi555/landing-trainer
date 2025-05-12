"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const CallToAction = () => {
  return (
    <motion.div
      className="mt-50 bg-[#0D0D0D] text-white w-full md:max-w-7xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between p-6 rounded-md"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className="font-bold text-base md:text-3xl">
        Reserva tu clase personalizada ahora y lleva tu juego de pádel al
        siguiente nivel.
      </p>
      <div className="flex items-center justify-center">
        <Button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500">
          Reservar Ahora
        </Button>
      </div>
    </motion.div>
  );
};
