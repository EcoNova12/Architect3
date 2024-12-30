export function sendToWhatsApp(phoneNumber, message) {
  if (!phoneNumber || !message.trim()) {
    console.error("Nomor telepon atau pesan tidak valid.");
    alert("Nomor telepon atau pesan tidak boleh kosong.");
    return;
  }

  try {
    const encodedMessage = encodeURIComponent(message); // Encode pesan untuk URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank"); // Buka link WhatsApp di tab baru
  } catch (error) {
    console.error("Terjadi kesalahan saat membuka WhatsApp:", error);
    alert("Terjadi kesalahan. Silakan coba lagi.");
  }
}
