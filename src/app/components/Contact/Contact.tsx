"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ email: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ email: "" });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-md flex flex-col items-center w-full p-6 md:max-w-7xl mx-auto  gap-4 mt-60 text-center md:px-0 mb-40">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
        Aprende pádel conmigo y mejora tu juego rápido
      </h2>
      <p className="text-white text-center max-w-xl px-2 md:px-0">
        Escríbeme y te ayudaré a diseñar un plan de entrenamiento adaptado a ti.
        .
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md flex flex-col md:flex-row items-center gap-4 w-full max-w-lg p-4 shadow-md"
      >
        <input
          type="email"
          name="email"
          className="flex-grow w-full px-4 py-3 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#097FD9]"
          placeholder="Enter your email address"
          onChange={handleChange}
          value={form.email}
          required
          aria-label="Email address"
        />
        <button
          type="submit"
          className="bg-[#090707] text-white px-6 py-3 rounded-md w-full md:w-auto hover:bg-gray-800 transition-colors"
        >
          Enviar
        </button>
      </form>
      {success && (
        <p role="alert" className="text-green-600 text-center mt-2 font-medium">
          Mensaje enviado correctamente
        </p>
      )}
    </div>
  );
}
