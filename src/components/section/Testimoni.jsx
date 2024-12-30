import Testimonial from "@/data/Testimonial"
import Carousel from "../Carousel";

export default function Testimoni(){
    return (
      <div
        className="container mx-auto px-6"
        style={{
          backgroundImage: "url(./image/Bg2.png)",
        }}
      >
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:p-8 rounded-xl bg-slate-900 bg-opacity-20 shadow-lg">
            <Carousel testimonials={Testimonial} />
          </div>
        </section>
      </div>
    );
}