export function sendToWhatsApp(message) {
  // Nomor telepon tujuan, format internasional (tanpa tanda +)
  const phoneNumber = "6285384835313"; // Ganti dengan nomor WhatsApp tujuan Anda

  if (!message.trim()) {
    console.error("Pesan tidak valid.");
    alert("Pesan tidak boleh kosong.");
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
