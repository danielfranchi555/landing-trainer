export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/privacy" className="hover:underline">
            Política de Privacidad
          </a>
          <a href="/terms" className="hover:underline">
            Términos y Condiciones
          </a>
          <a href="/contact" className="hover:underline">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
