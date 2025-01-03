export default function Services() {
  return (
    <div
      id="services"
      className="container mx-auto px-6 hero"
      style={{
        backgroundImage: "url(./image/Bg2.png)",
      }}
    >
      <section className="py-10 bg-slate-100 bg-opacity-45 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl text-center mb-10 lg:mb-20
            "
          >
            Apa Yang Bisa kami bantu ?
          </h2>

          <div className="grid grid-cols 1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3">
            <div>
              <div
                data-aos="zoom-in"
                className="relative flex items-center justify-center mx-auto"
              >
                <svg
                  className="text-blue-100"
                  width={72}
                  height={75}
                  viewBox="0 0 72 75"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                </svg>
                <svg
                  className="absolute text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Konsultasi
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Anda bisa menanyakan semua kebutuhan anda tentang apa yang akan
                anda bangun, Rumah yang nyaman ataupun Gedung yang megah.
              </p>
            </div>
            <div>
              <div
                data-aos="zoom-in"
                className="relative flex items-center justify-center mx-auto"
              >
                <svg
                  className="text-orange-100"
                  width={62}
                  height={64}
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                </svg>
                <svg
                  className="absolute text-orange-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Desain</h3>
              <p className="mt-4 text-base text-gray-600">
                Kami akan membantu anda merancang Rumah impian anda, tidak hanya
                itu kami juga bisa memabantu anda merancang bangunan lain yang
                anda butuhkan
              </p>
            </div>
            <div>
              <div
                data-aos="zoom-in"
                className="relative flex items-center justify-center mx-auto"
              >
                <svg
                  className="text-green-100"
                  width={66}
                  height={68}
                  viewBox="0 0 66 68"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <svg
                  className="absolute text-green-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Gambar</h3>
              <p className="mt-4 text-base text-gray-600">
                Wujudkan desain bangunan impian Anda dengan layanan 3D presisi
                tinggi dan tim profesional.
              </p>
            </div>
          </div>
          {/* ................. */}
          <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-20">
            <div></div>
            <div>
              <div
                data-aos="zoom-in"
                className="relative flex items-center justify-center mx-auto"
              >
                <svg
                  className="text-purple-100"
                  width={66}
                  height={68}
                  viewBox="0 0 66 68"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <svg
                  className="absolute text-purple-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Audit Struktur
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Pastikan keamanan dan kekuatan bangunan Anda dengan layanan
                audit struktur kami. Didukung oleh tim ahli dan teknologi
                canggih, kami memberikan analisis mendalam untuk mendeteksi
                risiko dan memastikan kepatuhan standar.
              </p>
            </div>
            <div>
              <div
                data-aos="zoom-in"
                className="relative flex items-center justify-center mx-auto"
              >
                <svg
                  className="text-gray-100"
                  width={65}
                  height={70}
                  viewBox="0 0 65 70"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z" />
                </svg>
                <svg
                  className="absolute text-gray-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Review Design
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Kami membantu mengevaluasi desain Anda untuk memastikan
                fungsionalitas, estetika, dan efisiensi. Temukan solusi terbaik
                untuk meningkatkan kualitas desain Anda.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
