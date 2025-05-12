"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const contentVariants = {
  collapsed: { opacity: 0, height: 0, overflow: "hidden" },
  expanded: { opacity: 1, height: "auto", overflow: "hidden" },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const questions = [
  {
    value: "item-1",
    question:
      "¿Necesito tener experiencia previa para empezar a jugar al pádel?",
    answer:
      "No, no es necesario. Las clases están pensadas tanto para quienes nunca jugaron como para quienes ya tienen experiencia. Adaptamos el entrenamiento a tu nivel para que puedas aprender y disfrutar desde el primer día.",
  },
  {
    value: "item-2",
    question: "¿Ofrecés clases para niños o principiantes?",
    answer:
      "Sí, claro. Hay clases diseñadas específicamente para niños, adolescentes y adultos principiantes. El enfoque es divertido, didáctico y progresivo, para que cada alumno aprenda a su ritmo y con confianza.",
  },
  {
    value: "item-3",
    question: "¿Ofrecés entrenamiento para jugadores competitivos?",
    answer:
      "Sí. Si ya jugás en torneos o querés empezar a competir, hay entrenamientos técnicos, tácticos y físicos orientados a mejorar el rendimiento en cancha. También se trabaja en situaciones reales de partido y análisis de juego.",
  },
  {
    value: "item-4",
    question: "¿Cómo reservo una clase?",
    answer:
      "Podés reservar tu clase por WhatsApp, completando el formulario de contacto en esta página o escribiéndome por Instagram. ¡Coordinamos día, horario y tipo de clase según tus preferencias!",
  },
];

export const Questions = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (value: string) => {
    setOpenItem((current) => (current === value ? null : value));
  };

  return (
    <div className="w-full px-6 md:max-w-7xl mx-auto grid gap-4 mt-60 text-center md:px-0">
      <motion.h3
        className="font-bold text-3xl md:text-5xl text-white"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Commonly Asked Questions
      </motion.h3>
      <motion.span
        className="text-[#909090]"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        I am here to help!
      </motion.span>
      <Accordion type="single" collapsible>
        {questions.map(({ value, question, answer }) => {
          const isOpen = openItem === value;
          return (
            <motion.div
              key={value}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <AccordionItem value={value} className="text-white w-full">
                <AccordionTrigger
                  className="text-1xl md:text-2xl font-bold cursor-pointer"
                  onClick={() => toggleItem(value)}
                >
                  {question}
                </AccordionTrigger>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={contentVariants}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="px-4"
                    >
                      <AccordionContent>
                        <p className="text-[#909090] text-base text-left">
                          {answer}
                        </p>
                      </AccordionContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AccordionItem>
            </motion.div>
          );
        })}
      </Accordion>
    </div>
  );
};
