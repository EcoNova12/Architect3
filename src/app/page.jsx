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
import DataDesain from "@/data/DataDesain";
import DataGambar from "@/data/DataGambar";

export default function HomeScreen() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi (dalam milidetik)
      offset: 100, // Offset dari viewport sebelum animasi dimulai
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
      <div id="product" className="bg-slate-900 p-2">
        {/* desain...... */}
        <section className="container rounded-md mx-auto my-5 lg:my-10 lg:px-6 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
              data-aos="fade-left"
              className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8"
            >
              <div className="absolute inset-0">
                <img
                  className="object-cover object-top w-full h-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/4/girl-thinking.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="relative">
                <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                  <h3 className="text-4xl font-bold text-white">
                    Desain Rancangan Bangunan
                  </h3>
                  <p className="mt-5 text-white ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero, quisquam deleniti reiciendis voluptates tenetur magni
                    maxime doloremque voluptatem quo
                  </p>
                </div>
              </div>
            </div>
            {/* ....Tabs ......... */}
            <Tabs data={DataDesain} />
          </div>
        </section>
        {/* drawing......... */}
        <section className="container rounded-md mx-auto my-5 lg:my-10 lg:px-6 bg-white">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
            {/* ....Tabs ......... */}
            <Tabs data={DataGambar} />

            <div
              data-aos="fade-right"
              className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8"
            >
              <div className="absolute inset-0">
                <img
                  className="object-cover object-top w-full h-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/4/girl-thinking.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="relative">
                <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                  <h3 className="text-4xl font-bold text-white">
                    Desain Rancangan Bangunan
                  </h3>
                  <p className="mt-5 text-white ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero, quisquam deleniti reiciendis voluptates tenetur magni
                    maxime doloremque voluptatem quo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* line */}
      <Line />
      {/* About */}
      <div id="about">
        <About />
      </div>
      {/* Testimoni */}
      <div id="testimoni">
        <Testimoni />
      </div>
      {/* User mengirimkan pesan lansung Whatsapp */}
      <div id="konsultasi" className="container bg-white mx-auto p-5 lg:max-w-lg">
        <WhatsAppForm />
      </div>

      {/* <Header /> */}
      <Footer />
    </>
  );
}
