"use client";
import { useActionState } from "react";
import { motion } from "framer-motion";
import { handleSubmit } from "./actions";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(handleSubmit, {
    success: false,
  });

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

  return (
    <motion.div
      className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-md flex flex-col items-center w-full p-6 md:max-w-7xl mx-auto gap-4 mt-60 text-center md:px-0 mb-40"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
        Impara il padel con me e migliora il tuo gioco velocemente.
      </h2>
      <p className="text-white text-center max-w-xl px-2 md:px-0">
        Scrivimi e ti aiuterò a progettare un piano di allenamento
        personalizzato per te.
      </p>
      <form
        action={formAction}
        className="bg-white rounded-md flex flex-col items-center gap-4 w-full max-w-lg p-4 shadow-md"
      >
        <div className="flex flex-col gap-6 w-full md:flex-row">
          <input
            type="email"
            name="email"
            className="flex-grow w-full px-4 py-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#097FD9]"
            placeholder="Inserisci il tuo indirizzo email."
            required
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-[#090707] text-white px-6 py-3 rounded-md w-full md:w-auto hover:bg-gray-800 transition-colors"
          >
            {isPending ? "Invio in corso..." : "Invia"}
          </button>
        </div>
        {state.success && (
          <p className="text-green-600 mt-2">
            Messaggio inviato con successo ✅
          </p>
        )}

        {!state.success && state.error && (
          <p className="text-red-600 mt-2">{state.error}</p>
        )}
      </form>
    </motion.div>
  );
}
