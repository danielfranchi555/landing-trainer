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
      "¿È necessaria esperienza precedente per iniziare a giocare a padel?",
    answer:
      "No, non è necessario. Le lezioni sono pensate sia per chi non ha mai giocato che per chi ha già esperienza. Adattiamo l'allenamento al tuo livello in modo che tu possa imparare e divertirti fin dal primo giorno.",
  },
  {
    value: "item-2",
    question: "¿Offri lezioni per bambini o principianti?",
    answer:
      "Sì, certo. Ci sono lezioni specificamente pensate per bambini, adolescenti e adulti principianti. L'approccio è divertente, didattico e progressivo, affinché ogni allievo possa imparare al proprio ritmo e con fiducia.",
  },
  {
    value: "item-3",
    question: "¿Offri allenamenti per giocatori competitivi?",
    answer:
      "Sì. Se già partecipi a tornei o vuoi iniziare a competere, ci sono allenamenti tecnici, tattici e fisici mirati a migliorare le prestazioni in campo. Si lavora anche su situazioni reali di partita e analisi del gioco.",
  },
  {
    value: "item-4",
    question: "¿Come posso prenotare una lezione?",
    answer:
      "Puoi prenotare la tua lezione tramite WhatsApp, compilando il modulo di contatto su questa pagina o scrivendomi su Instagram. Coordiniamo il giorno, l'orario e il tipo di lezione in base alle tue preferenze!",
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
        Domande Frequenti
      </motion.h3>
      <motion.span
        className="text-[#909090]"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Sono qui per aiutarti!
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
