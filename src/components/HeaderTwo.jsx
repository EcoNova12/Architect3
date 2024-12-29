import BtnDrop from "./BtnDrop";

export default function HeaderTwo() {
  return (
    <div className="w-full absolute">
      <header className="container mx-auto p-1">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-12 rounded-full"
                  src="./favicon.ico"
                  alt="Icon"
                />
              </a>
            </div>
            {/* Button dropdown */}
            <BtnDrop />

            <div className="hidden  ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10 md:flex md:items-center md:justify-center md:space-x-10">
              <ul
                className="flex gap-x-5 text-white
              "
              >
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base font-semibold hover:text-yellow-600 transition-all duration-200 "
                  >
                    {" "}
                    Features{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="#"
                    title=""
                    className="text-base font-semibold hover:text-yellow-600 transition-all duration-200 "
                  >
                    {" "}
                    Solutions{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base font-semibold hover:text-yellow-600 transition-all duration-200 "
                  >
                    {" "}
                    Resources{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="text-base font-semibold hover:text-yellow-600 transition-all duration-200 "
                  >
                    {" "}
                    Pricing{" "}
                  </a>
                </li>
              </ul>

              <div className="w-px h-5 bg-black/20" />
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white border-2 border-white hover:bg-yellow-600 hover:text-white transition-all duration-200 focus:bg-yellow-600 focus:text-slate-900"
                role="button"
              >
                {" "}
                Contact Me{" "}
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
