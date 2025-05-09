import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Questions = () => {
  return (
    <div className="w-full md:w-[800px] mx-auto bg-red-500  grid gap-4 mt-10 text-center md:px-0">
      <h3 className="font-bold text-5xl text-white">
        Commonly Asked Questions
      </h3>
      <span className="text-[#909090]">I am here to help!</span>
      <Accordion className="text-white w-full" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-bold">
            ¿Necesito tener experiencia previa para empezar a jugar al pádel?
          </AccordionTrigger>
          <AccordionContent className="text-[#909090] text-base text-left">
            No, no es necesario. Las clases están pensadas tanto para quienes
            nunca jugaron como para quienes ya tienen experiencia. Adaptamos el
            entrenamiento a tu nivel para que puedas aprender y disfrutar desde
            el primer día.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-bold">
            ¿Ofrecés clases para niños o principiantes?
          </AccordionTrigger>
          <AccordionContent className="text-[#909090] text-base text-left">
            Sí, claro. Hay clases diseñadas específicamente para niños,
            adolescentes y adultos principiantes. El enfoque es divertido,
            didáctico y progresivo, para que cada alumno aprenda a su ritmo y
            con confianza.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl font-bold">
            ¿Ofrecés entrenamiento para jugadores competitivos?
          </AccordionTrigger>
          <AccordionContent className="text-[#909090] text-base text-left">
            Sí. Si ya jugás en torneos o querés empezar a competir, hay
            entrenamientos técnicos, tácticos y físicos orientados a mejorar el
            rendimiento en cancha. También se trabaja en situaciones reales de
            partido y análisis de juego.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl font-bold">
            ¿Cómo reservo una clase?
          </AccordionTrigger>
          <AccordionContent className="text-[#909090] text-base text-left">
            Podés reservar tu clase por WhatsApp, completando el formulario de
            contacto en esta página o escribiéndome por Instagram. ¡Coordinamos
            día, horario y tipo de clase según tus preferencias!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
