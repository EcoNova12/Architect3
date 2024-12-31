// Tabs.jsx
"use client";

import { sendToWhatsApp } from "../utils/sendToWhatsApp";

import React, { useState } from "react";

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0]?.id || "");

  const activeContent = data.find((tab) => tab.id === activeTab)?.content;

 const handleCardClick = (itemName) => {
   const message = `Halo, saya tertarik dengan ${itemName}. Bisa kita diskusikan lebih lanjut?`;
   sendToWhatsApp(message);
 };


  return (
    <div className="container lg:h-[900px] mx-auto p-5">
      {" "}
      <h2 className="mb-10 text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        Product Jasa Desain
      </h2>
      {/* Tab Menu */}
      <div className="flex flex-wrap justify-center">
        {data.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 lg:text-base py-2 font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "text-yellow-600 border-b-2 border-yellow-600"
                : "text-gray-50 hover:text-yellow-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="mt-4 p-4 shadow transition-all duration-300">
        {activeContent?.judul && (
          <h2 className="text-xl font-extrabold mb-4 text-yellow-600 text-center">
            {activeContent.judul}
          </h2>
        )}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {activeContent?.list?.map((item, index) => (
            <div
              key={index}
              className="p-4 cursor-pointer border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleCardClick(item.name)}
            >
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          )) || <p className="text-gray-700">Konten tidak tersedia.</p>}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
