export default function About(){
    return (
      <section className="container mx-auto p-5 bg-amber-400 2xl:py-24 sm:pt-16 md:pt-0">
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
                <h1 className="text-2xl font-bold leading-relaxed text-gray-900">
                  {" "}
                  About US
                </h1>
                <blockquote>
                  <p className="text-xl font-medium  text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat, iure et nostrum architecto vitae accusamus excepturi tempore? Cum provident laboriosam natus inventore enim dicta fuga deserunt iure, aperiam itaque!
                  </p>
                </blockquote>

                <p className="mt-12 text-base text-gray-900 lg:mt-20">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}