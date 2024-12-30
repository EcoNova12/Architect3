"use client"

import React, { useState } from "react";
import { sendToWhatsApp } from "../utils/sendToWhatsApp"; // Import fungsi sendToWhatsApp

export default function WhatsAppForm() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "6282289722997"; // Nomor WhatsApp langsung di-set di sini

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !message.trim()) {
      alert("Username dan pesan tidak boleh kosong!");
      return;
    }

    // Format pesan
    const formattedMessage = `Halo! Saya ${username}.\n\nPesan saya adalah:\n${message}\n\nTerima kasih!`;
    sendToWhatsApp(phoneNumber, formattedMessage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold lg:font-bold text-gray-900">Tulis Pesan Anda</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Anda tertarik dengan jasa kami, anda bisa mengirim kan pesan anda pada form di bawah ini
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-yellow-600">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    placeholder="Ahmad Syauqi"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="message"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Pesan Anda
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">
                Tuliskan pesan Anda untuk dikirim ke WhatsApp.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full rounded-md bg-green-500 px-4 py-2 text-white font-semibold hover:bg-green-600 transition-all"
          >
            Kirim ke WhatsApp
          </button>
        </div>
      </div>
    </form>
  );
}
