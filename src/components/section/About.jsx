export default function About(){
    return (
      <section className="container rounded-md mx-auto p-5 bg-amber-400 2xl:py-24 sm:pt-16 md:pt-0">
        <div className="px-4 mx-auto rounded-md bg-amber-400 max-w-7xl sm:px-6 lg:px-8">
          <div className="2xl:pl-24">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
              <div className="relative">
                <img
                  className="animate-float md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20 drop-shadow-2xl"
                  src="./image/desain-bangunan.png"
                  alt=""
                />
              </div>

              <div
                data-aos="fade-left"
                className="text-center md:py-16 xl:py-24 md:text-left"
              >
                <h1 className="text-2xl font-bold leading-relaxed text-gray-900">
                  {" "}
                 Hello Everyone..!
                </h1>
                <blockquote>
                  <p className="text-xl font-medium  text-white">
                    "Butuh desain konstruksi berkualitas? Kami hadir dengan
                    harga terjangkau mulai dari Rp4.000! Wujudkan proyek impian
                    Anda bersama kami. Hubungi sekarang dan dapatkan desain
                    terbaik untuk segala kebutuhan konstruksi Anda!"
                  </p>
                </blockquote>

                <p className="mt-12 text-base text-gray-900 lg:mt-20">
                 Tunggu apa lagi konsultasikan sekarang juga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}