// Tabs.jsx
"use client";

import React, { useState } from "react";

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0]?.id || "");

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Tab Menu */}
      <div className="flex flex-wrap justify-center">
        {data.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "text-yellow-600 border-b-2 border-yellow-600"
                : "text-gray-500 hover:text-yellow-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 shadow transition-all duration-300">
        {data.find((tab) => tab.id === activeTab)?.image && (
          <img
            src={data.find((tab) => tab.id === activeTab)?.image}
            alt={activeTab}
            className="mb-4 w-full h-auto object-cover"
          />
        )}
        <p className="text-gray-700">
          {data.find((tab) => tab.id === activeTab)?.content ||
            "Konten tidak tersedia."}
        </p>
      </div>
    </div>
  );
};

export default Tabs;
