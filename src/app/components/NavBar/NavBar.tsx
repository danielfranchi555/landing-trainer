"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Chi sono" },
];

export const Header1 = () => {
  const [isOpen, setOpen] = useState(false);
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  // Inicializar navbar visible al montar
  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut", type: "tween" },
    });
  }, [controls]);

  // Detectar scroll para ocultar/mostrar navbar con animación suave
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scroll hacia abajo: ocultar navbar
        if (!hidden) {
          controls.start({
            y: -120,
            opacity: 0,
            transition: { duration: 0.7, ease: "easeInOut", type: "tween" },
          });
          setHidden(true);
        }
      } else {
        // Scroll hacia arriba: mostrar navbar
        if (hidden) {
          controls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 0.2, ease: "easeInOut", type: "tween" },
          });
          setHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, hidden]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-0"
        aria-label="Main navigation"
        initial={{ y: -120, opacity: 0 }}
        animate={controls}
      >
        {/* Desktop Navbar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          className="hidden md:flex items-center mx-auto max-w-7xl justify-between backdrop-blur-xl p-4 rounded-xl"
          animate={controls}
          role="navigation"
        >
          {/* Logo con animación hover */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <motion.span
              className="text-3xl font-extrabold text-white tracking-tight cursor-pointer"
              whileHover={{ scale: 1.05, color: "#3b82f6" }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              MartinChaig
            </motion.span>
          </Link>

          {/* Links con underline animado */}
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.li key={link.href} className="relative">
                <Link href={link.href} passHref>
                  <motion.span
                    className="relative px-2 py-1 text-lg text-white cursor-pointer"
                    whileHover={{ scale: 1.1, color: "#3b82f6" }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  >
                    {link.label}
                    <motion.span
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 rounded origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Botón CTA con animación hover */}
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <Button className="ml-8 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all duration-200">
              Contattami
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Navbar */}
        <motion.div
          className={`flex items-center justify-between md:hidden p-4 rounded-xl ${
            isOpen ? "" : "backdrop-blur-xl"
          }`}
          initial={{ y: -120, opacity: 0 }}
          animate={controls}
        >
          <Link
            href="/"
            className="text-2xl font-bold text-white tracking-tight"
            aria-label="Home"
          >
            MartinChaig
          </Link>
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="focus:outline-none"
          >
            {isOpen ? (
              <X size={36} color="white" />
            ) : (
              <Menu size={32} color="white" />
            )}
          </Button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#181A20]/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.ul
              className="flex flex-col gap-6 text-center"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-blue-400 hover:to-blue-500"
                  onClick={() => setOpen(false)}
                >
                  Contattami
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
