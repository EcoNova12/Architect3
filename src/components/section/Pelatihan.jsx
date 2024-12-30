import pelatihanData from "@/data/Pelatihan";
import CardPelatihan from "../CardPelatihan";



export default function Pelatihan(){
    return (
      <div
        className="hero container mx-auto px-6"
        style={{
          backgroundImage: "url(./image/bg2.png)",
        }}
      >
        <section className="py-10 bg-slate-100 bg-opacity-45 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Pelatihan dan Sertifikasi
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                "Raih potensi terbaik Anda dengan pelatihan inovatif yang
                dirancang untuk mengubah keterampilan menjadi keunggulan."
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 p-5 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-1">
              {/* .....card... */}
              <CardPelatihan data={pelatihanData} />
            </div>
            <div className="mt-12 text-center">
              <a
                href="testimoni"
                title=""
                role="button"
                className="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline lg:text-xl "
              >
                {" "}
                Testimoni........{" "}
              </a>
            </div>
          </div>
        </section>
      </div>
    );
}
