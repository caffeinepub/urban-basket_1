import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_NUMBER } from "../data/products";

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div
      className="fixed bottom-6 left-4 sm:left-6 z-40"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip on desktop */}
      <div
        className={`absolute bottom-full left-0 mb-2 pointer-events-none transition-all duration-200 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        <div className="bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
          Chat on WhatsApp
          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800" />
        </div>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200
          h-12 w-12 sm:w-auto sm:px-4 justify-center"
        aria-label="Chat on WhatsApp"
        data-ocid="whatsapp.button"
      >
        <MessageCircle className="w-5 h-5 flex-shrink-0" />
        <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      </button>
    </div>
  );
}
