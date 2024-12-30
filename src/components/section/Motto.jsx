import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "700"],
});

export default function Motto() {
  return (
    <div
      className="hero my-10"
      style={{
        backgroundImage: "url(./image/Bg2.png)",
      }}
    >
      <section className="container mx-auto p-5  pt-10 bg-amber-400 2xl:py-24 sm:pt-16 md:pt-0">
        <div className="px-4 mx-auto rounded-md bg-amber-400 max-w-7xl sm:px-6 lg:px-8">
          <div className="2xl:pl-24">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
              <div className="relative">
                <img
                  className="animate-float md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20 drop-shadow-2xl"
                  src="./image/konstruksi.png"
                  alt=""
                />
              </div>

              <div
                data-aos="fade-left"
                className="text-center md:py-16 xl:py-24 md:text-left"
              >
                <blockquote>
                  <p className="text-2xl font-semibold leading-relaxed text-gray-900">
                    "Merancang Karya dengan Inovasi, Membangun Masa Depan dengan
                    Kualitas, dan Mewujudkan Impian dengan Keunggulan"
                  </p>
                </blockquote>

                <p className="mt-12 text-base text-gray-900 lg:mt-20">
                  Cari tahu lebih banyak tentang kami..!
                </p>
                <a
                  href=""
                  title=""
                  className="inline-flex items-center justify-center px-8 py-4 my-5 text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Load More{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
