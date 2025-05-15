export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-5">
      <div className="container mx-auto px-4 text-center grid gap-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Martín Chaig - Profesor de Pádel
        </p>
        <p className="text-sm">
          Developed by{" "}
          <a
            className="text-blue-400 hover:text-blue-500 transition-colors"
            href="https://www.linkedin.com/in/danielfranchijs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            danielfranchi
          </a>
        </p>
      </div>
    </footer>
  );
}
