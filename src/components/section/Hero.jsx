import WhatsAppButton from "../WhatsApp";

export default function Hero() {
  return (
    <>
      <div className="hero bg-[url('/image/Background.png')] bg-cover bg-center min-h-screen overflow-x-hidden">
        <section className="hero-content mx-auto pt-10 sm:pt-16 md:pt-10 lg:pt-16">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div data-aos="fade-right">
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Build Your <span>Dream ___</span>
                </h1>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-300 md:mt-8">
                  Benefit of the society where we operate. A successful website
                  obviously needs great design to be one of the top 10 IT
                  companies in the world.
                </p>
                <p className="mt-4 text-xl text-gray-600 md:mt-8">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0 h-1 bg-yellow-600" />
                    <span className="relative"> Have a question? </span>
                  </span>
                  <br className="block sm:hidden" />
                  Ask me on{" "}
                  <a
                    href="https://www.instagram.com/jasa_rancang_konstruksi?igsh=MWNoenh4Mm5zaGoydA%3D%3D&utm_source=qr"
                    title="Contact us on Instagram"
                    className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                  >
                    Instagram
                  </a>
                  <span> </span>
                  <span>or</span>
                  <span> </span>
                  <WhatsAppButton
                    phoneNumber="6282289722997"
                    message="Halo, saya ingin informasi lebih lanjut!"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
