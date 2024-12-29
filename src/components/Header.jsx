import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="bg-slate-900 p-1">
        <div className="container mx-auto navbar">
          <div className="navbar-start">
            {/* button dropdown  hanya muncul pada tampilan mobile*/}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle md:hidden lg:hidden text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="text-white menu menu-sm dropdown-content bg-slate-900 rounded-box z-[1] mt-5 w-screen p-5 shadow"
              >
              
                <li>
                  <a
                    className="hover:text-yellow-500 font-semibold"
                    href="#"
                  >
                    {" "}
                    Konsultasi{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-yellow-500 font-semibold"
                    href="#"
                  >
                    {" "}
                    Pelatihan{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="hover:text-yellow-500 font-semibold"
                    href="#"
                  >
                    {" "}
                    Produk{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="hover:text-yellow-500 font-semibold"
                    href="#"
                  >
                    {" "}
                    Testimoni{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="hover:text-yellow-500 font-semibold"
                    href="#"
                  >
                    {" "}
                    Tentang kami{" "}
                  </a>
                </li>

              </ul>
            </div>
            {/* pastikan untuk mengganti logo */}
            <a className="btn btn-ghost text-xl text-yellow-500">LOGO</a>
          </div>

          {/* list menu navigation */}
          <div className="navbar-center hidden md:flex lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
              <li>
                {" "}
                <a
                  className=" hover:text-yellow-500 font-semibold"
                  href="#"
                >
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-yellow-500 font-semibold"
                  href="#"
                >
                  {" "}
                  Company{" "}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-yellow-500 font-semibold"
                  href="#"
                >
                  {" "}
                  Solutions{" "}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-yellow-500 font-semibold"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-yellow-500 font-semibold"
                  href="#"
                >
                  {" "}
                  News{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn hover:text-yellow-500 font-bold">Contact Me</a>
          </div>
        </div>
      </div>
    </>
  );
}
