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
      className="mt-50 shadow-md shadow-accent-foreground bg-[#0D0D0D] text-white w-full md:max-w-7xl mx-auto flex  items-center flex-col gap-4 md:flex-row md:justify-between p-8 rounded-md"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className="font-bold text-base md:text-3xl ">
        Prenota ora la tua lezione personalizzata e porta il tuo gioco di padel
        al livello successivo.
      </p>
      <div className="flex items-start  h-full justify-end">
        <a
          href="https://wa.me/5493510000000?text=Buongiorno%2C%20vorrei%20prenotare%20una%20lezione%20di%20padel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r h-full text-[25px] cursor-pointer from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500">
            Prenota ora
          </Button>
        </a>
      </div>
    </motion.div>
  );
};
