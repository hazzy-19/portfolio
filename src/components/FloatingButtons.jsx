import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 flex items-center justify-center hover:shadow-[0_0_15px_rgba(37,211,102,0.5)]"
      >
        <FaWhatsapp size={28} />
      </a>
      <a
        href="tel:+254700000000"
        aria-label="Call"
        className="bg-[#007AFF] hover:bg-[#0066d6] text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 flex items-center justify-center hover:shadow-[0_0_15px_rgba(0,122,255,0.5)]"
      >
        <FaPhoneAlt size={24} />
      </a>
    </div>
  );
}
