"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Header1 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-[#1F1F1F] px-6 py-6 md:px-0">
        <div className="hidden text-white md:flex items-center mx-auto max-w-7xl justify-between">
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold">MartinChaig</p>
          </div>
          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-4">
              <li className="hover:border-b-2 border-transparent hover:border-blue-500 pb-1 transition-all duration-200 hover:text-blue-500">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:border-b-2 border-transparent hover:border-blue-500 pb-1 transition-all duration-200 hover:text-blue-500">
                <Link href="/about">Chi sono</Link>
              </li>
            </ul>
            <Button className="bg-blue-500 cursor-pointer hover:bg-blue-400">
              Contattami
            </Button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex items-center justify-between md:hidden">
          <p className="text-white text-2xl">MartinChaig</p>
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={40} color="white" className="w-10 h-10" />
            ) : (
              <Menu size={30} color="white" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white px-6 grid gap-2 py-4 md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            Chi sono
          </Link>
          <Button className="bg-blue-500" onClick={() => setOpen(false)}>
            Contattami
          </Button>
        </div>
      )}
    </>
  );
};
