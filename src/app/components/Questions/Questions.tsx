import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Questions = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 grid gap-4 mt-10 text-center">
      <h3 className="font-bold text-5xl text-white">
        Commonly Asked Questions
      </h3>
      <span className="text-[#909090]">I am here to help!</span>
      <Accordion className="text-white w-full" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-bold break-words">
            ¿Necesito tener experiencia previa para empezar a jugar al pádel?
          </AccordionTrigger>
          <AccordionContent className="text-[#909090] text-base text-left">
            No, no es necesario. Las clases están pensadas tanto para quienes
            nunca jugaron como para quienes ya tienen experiencia...
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-bold break-words">
            ¿Ofrecés clases para niños o principiantes?
          </AccordionTrigger>
          <AccordionContent className="text-[#909090] text-base text-left">
            Sí, claro. Hay clases diseñadas específicamente para niños...
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl font-bold break-words">
            ¿Ofrecés entrenamiento para jugadores competitivos?
          </AccordionTrigger>
          <AccordionContent className="text-[#909090] text-base text-left">
            Sí. Si ya jugás en torneos o querés empezar a competir...
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl font-bold break-words">
            ¿Cómo reservo una clase?
          </AccordionTrigger>
          <AccordionContent className="text-[#909090] text-base text-left">
            Podés reservar tu clase por WhatsApp, completando el formulario...
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
