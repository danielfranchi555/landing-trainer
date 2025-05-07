import React from "react";
import imageAbout from "../../../../public/nino-2.jpg";
import Image from "next/image";
export const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 grid gap-10  md:grid-cols-2 md:px-0">
      <div>
        <Image src={imageAbout} alt="image-about" width={500} height={400} />
      </div>
      <div className=" flex flex-col justify-center gap-5 ">
        <div>
          <h2 className="text-4xl text-white md:text-7xl">Chi è Nino?</h2>
          <p className="text-[#909090] text-2xl">
            Come allenatore di padel appassionato, credo nell aiutare i
            giocatori a raggiungere i loro obiettivi migliorando la loro tecnica
            e il loro gioco attraverso un coaching personalizzato e un supporto
            continuo
          </p>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="bg-[#1F1F1F] flex flex-col gap-1 items-center justify-center p-4 rounded-md shadow-xl">
            <span className="text-[#235BFF] font-bold text-3xl md:text-5xl">
              100 +
            </span>
            <p className="text-[#909090]">Clienti soddisfatti</p>
          </div>
          <div className="bg-[#1F1F1F] flex flex-col gap-1 items-center justify-center p-4 rounded-md shadow-xl">
            <span className="text-[#235BFF] font-bold text-3xl md:text-5xl">
              10
            </span>
            <p className="text-[#909090]">Anni di esperienza</p>
          </div>
          {/* <div className="bg-[#1F1F1F] flex flex-col gap-1 items-center justify-center p-4 rounded-md shadow-xl">
            <span className="text-[#235BFF] font-bold text-3xl md:text-5xl">
              15
            </span>
            <p className="text-[#909090]">Years in Sport</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
