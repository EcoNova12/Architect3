'use client'

import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Desain Gedung" },
    { id: "tab2", label: "Desain Jembatan" },
    { id: "tab3", label: "Desaiin Perkerasan Jalan" },
    { id: "tab4", label: "Desain Jetteg atau Dermaga" },
    { id: "tab5", label: "Desain Retainig Wall" },
    { id: "tab6", label: "Desain Galian dan Timbunan Tanah" },
    { id: "tab7", label: "Desain Box Culver, Drainase, Pedestrian Dll" },
  ];

  const tabContents = {
    tab1: "Kami menyediakan jasa desain gedung seperti ruko, Rumah Pribadi, Kantor Dll",
    tab2: "kami juga menyediakan desain jembatan untuk kebutuhan transportasi anda",
    tab3: "kami menyediakan jasa desain untuk uji kekerasan jalan",
    tab4: "kami menyediakan jasa untuk pembangunan dermaga untuk kelancaran transportasi air anda",
    tab5: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, et incidunt",
    tab6: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, et incidunt",
    tab7: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, et incidunt",
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Tab Menu */}
      <div className="flex flex-wrap justify-center">
        {tabs.map((tab) => (
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
        <p className="text-gray-700">{tabContents[activeTab]}</p>
      </div>
    </div>
  );
};

export default Tabs;
