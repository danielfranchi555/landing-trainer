import { Button } from "@/components/ui/button";
import React from "react";

export const CallToAction = () => {
  return (
    <div className="mt-40  bg-[#0D0D0D] text-white w-full md:max-w-7xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between p-6 rounded-md">
      <p className="font-bold text-1xl md:text-3xl">
        Reserva tu clase personalizada ahora y lleva tu juego de pádel al
        siguiente nivel.
      </p>
      <div className="flex items-center justify-center">
        <Button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500">
          Reservar Ahora
        </Button>
      </div>
    </div>
  );
};
