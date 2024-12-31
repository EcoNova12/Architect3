"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import Line from "@/components/Line";
import Tabs from "@/components/Tabs";
import Hero from "@/components/section/Hero";
import Motto from "@/components/section/Motto";
import Services from "@/components/section/Services";
import Pelatihan from "@/components/section/Pelatihan";
import Testimoni from "@/components/section/Testimoni";
import WhatsAppForm from "@/components/WhatsAppForm";
import About from "@/components/section/About";
import DataDesain from "@/data/DataDesain"

export default function HomeScreen() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi (dalam milidetik)
      offset: 50, // Offset dari viewport sebelum animasi dimulai
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Motto perusahaan */}
      <Motto />

      {/* line */}
      <Line />

      {/* ...........services........... */}
      <Services />

      {/* Pelatihan yang akan di lakukan......... */}
      <div id="pelatihan">
        <Pelatihan />
      </div>

      {/* Card Product */}
      <div
        id="product"
        className="bg-slate-900"
      >
        <Tabs data={DataDesain} />
      </div>

      {/* line */}
      <Line />
      {/* About */}
      <div className="bg-slate-900 p-5" id="about">
        <About />
      </div>
      {/* Testimoni */}
      <div id="testimoni">
        <Testimoni />
      </div>
      {/* User mengirimkan pesan lansung Whatsapp */}
      <div
        id="konsultasi"
        className="container bg-white mx-auto p-5 lg:max-w-lg"
      >
        <WhatsAppForm />
      </div>

      {/* <Header /> */}
      <Footer />
    </>
  );
}
