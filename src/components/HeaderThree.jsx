"use client"

import { useState, useEffect } from "react";
import BtnDrop from "./BtnDrop";
import Image from "next/image";
import logo from "../app/favicon.ico"


export default function HeaderThree() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll ke bawah, sembunyikan header
        setIsVisible(false);
      } else {
        // Scroll ke atas, tampilkan header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="mx-auto p-1 rounded-md bg-black bg-opacity-35 shadow-md">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#home" title="logo" className="flex">
                <Image
                  className="w-auto h-12 rounded-full"
                  src={logo}
                  alt="Icon"
                  width={10}
                  height={10}
                />

                <div className="mx-3 text-white">
                  <h1 className="font-bold font-serif">JRK.id</h1>
                  <p className="text-xs font-semibold">Konsisten, Profesional, Integritas</p>
                </div>
              </a>
            </div>

            {/* Button dropdown */}
            <BtnDrop />

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10 md:flex md:items-center md:justify-center md:space-x-10">
              <ul tabIndex={0} className="flex gap-x-3 text-white">
                <li className="">
                  <a
                    href="#home"
                    className="flex gap-2 text-sm font-semibold text-white hover:text-yellow-600 focus:text-yellow-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EB8317"
                    >
                      <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                    </svg>
                    Home
                  </a>
                </li>

                <li>
                  <a href="#konsultasi" className="flex gap-1 text-sm font-semibold text-white hover:text-yellow-600 focus:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EB8317"
                    >
                      <path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z" />
                    </svg>{" "}
                    Konsultasi{" "}
                  </a>
                </li>
                <li>
                  <a href="#pelatihan" className="flex gap-1 text-sm font-semibold text-white hover:text-yellow-600 focus:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EB8317"
                    >
                      <path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM362-200Z" />
                    </svg>{" "}
                    Pelatihan{" "}
                  </a>
                </li>

                <li>
                  <a href="#product" className="flex gap-1 text-sm font-semibold text-white hover:text-yellow-600 focus:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EB8317"
                    >
                      <path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" />
                    </svg>{" "}
                    Produk{" "}
                  </a>
                </li>

                <li>
                  <a href="#testimoni" className="flex gap-1 text-sm font-semibold text-white hover:text-yellow-600 focus:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EB8317"
                    >
                      <path d="M360-120v-200q-62-5-121.5-14T120-360l20-80q83 23 168 31.5t172 8.5q86 0 171-8.5T820-440l20 80q-60 17-119.5 26T600-320v200H360Zm120-320q-34 0-57-23t-23-57q0-33 23-56.5t57-23.5q33 0 56.5 23.5T560-520q0 34-23.5 57T480-440ZM180-560q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T240-620q0 26-17.5 43T180-560Zm600 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T840-620q0 26-17.5 43T780-560ZM290-710q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T350-770q0 26-17.5 43T290-710Zm380 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T730-770q0 26-17.5 43T670-710Zm-190-50q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T540-820q0 26-17.5 43T480-760Z" />
                    </svg>{" "}
                    Testimoni{" "}
                  </a>
                </li>

                <li>
                  <a href="#about" className="flex gap-1 text-sm font-semibold text-white hover:text-yellow-600 focus:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EB8317"
                    >
                      <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
                    </svg>{" "}
                    Tentang kami{" "}
                  </a>
                </li>
              </ul>

              <div className="w-px h-5 bg-black/20" />
              <a
                href="#konsultasi"
                title=""
                className="rounded-md inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white bg-black border-2 border-black hover:bg-yellow-600 hover:text-white transition-all duration-200 focus:bg-yellow-600 focus:text-slate-900"
                role="button"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
