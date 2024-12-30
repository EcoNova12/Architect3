import logo from "../app/favicon.ico";
import Image from "next/image";
import icons from "@/data/DataIcon";

export default function Footer() {
  return (
    <>
      <footer className="container mx-auto px-6 footer bg-neutral text-neutral-content p-10">
        <aside className="lg:ml-20 lg:mr-10">
          <Image
            src={logo}
            alt="Logo-Icon-JRK.id"
            width={10}
            height={10}
            className="w-auto h-12 rounded-full"
          />
          <h1 className="font-bold lg:text-xl font-serif">JRK.id</h1>
          <p className="font-semibold">Komitmen, Profesional, Integritas</p>
        </aside>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col">
            {icons.map((icon) => (
              <div
                key={icon.id}
                className="flex flex-col items-center justify-center p-4 hover:shadow-lg"
              >
                <img
                  src={icon.source}
                  alt={`${icon.name} icon`}
                  className="lg:w-10 lg:h-10 mb-2"
                />
              </div>
            ))}
          </div>
        </nav>
      </footer>
      <footer className="container mx-auto footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            JRK.id
          </p>
        </aside>
      </footer>
    </>
  );
}
