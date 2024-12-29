export default function Card( ){
    return (
      <div className="overflow-hidden bg-white rounded shadow-sm shadow-yellow-600">
        <div className="p-3 lg:p-5 ">
          <div className="relative">
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg"
                alt=""
              />
            </a>
          </div>
          <span className="block mt-6 text-xs lg:text-base font-semibold tracking-widest text-gray-500 uppercase">
            {" "}
            March 21, 2020{" "}
          </span>
          <p className="mt-5 text-xl lg:text-2xl font-semibold">
            <a href="#" title="" className="text-black hover:text-yellow-600 ease-in-out duration-200">
              {" "}
              How to build coffee inside your home in 5 minutes.{" "}
            </a>
          </p>
          <p className="mt-4 text-xs lg:text-base text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
    );
}