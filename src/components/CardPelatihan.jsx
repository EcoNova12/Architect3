export default function CardPelatihan({ data }) {
  return (
    <div className=" grid grid-cols-1 gap-6 lg:grid-cols-4">
      {data.map((item, index) => (
        <div
          data-aos="zoom-in"
          key={index}
          className="overflow-hidden bg-white rounded shadow"
        >
          <div className="p-8">
            <div className="flex items-center">
              <img
                className="flex-shrink-0 w-16 h-auto"
                src={item.image}
                alt={item.title}
              />
              <div className="ml-5 mr-auto">
                <p className="text-lg font-bold text-black">{item.title}</p>
                <p className="mt-px text-xs text-gray-600">{item.subtitle}</p>
              </div>
              <svg
                className="hidden w-5 h-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 mt-7">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
