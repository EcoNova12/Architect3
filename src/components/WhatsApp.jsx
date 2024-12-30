import React from "react";

export default function WhatsAppButton({ phoneNumber, message }) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(
      message || "Halo, saya ingin bertanya tentang layanan Anda."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-green-500 text-white text-sm font-bold rounded hover:bg-green-600 transition-all"
    >
      Hubungi WhatsApp
    </button>
  );
}
