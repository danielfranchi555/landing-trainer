// components/WhatsappButton.tsx
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5493510000000?text=Buongiorno%2C%20vorrei%20prenotare%20una%20lezione%20di%20padel"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsappButton;
