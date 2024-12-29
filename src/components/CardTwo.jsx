export default function CardTwo() {
  const cardsData = [
    {
      id: 1,
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      date: "March 21, 2020",
      title: "How to build coffee inside your home in 5 minutes.",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      id: 2,
      image:
        "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg",
      date: "April 10, 2020",
      title: "10 Tips to create the perfect outdoor workspace.",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="overflow-hidden bg-white rounded shadow-sm shadow-yellow-600 hover:shadow-lg hover:shadow-yellow-700 transition-shadow duration-300 p-2"
        >
          {/* Gambar */}
          <div className="relative group">
            <a
              href="#"
              title={card.title}
              className="block aspect-w-4 aspect-h-3"
            >
              <img
                className="object-cover w-full h-full rounded transition-transform duration-300 group-hover:scale-105"
                src={card.image}
                alt={card.title}
              />
            </a>
          </div>

          {/* Tanggal */}
          <span className="block mt-6 text-xs lg:text-base font-semibold tracking-widest text-gray-500 uppercase">
            {card.date}
          </span>

          {/* Judul */}
          <p className="mt-5 text-xl lg:text-2xl font-semibold">
            <a
              href="#"
              title={card.title}
              className="text-black hover:text-yellow-600 transition-colors duration-200"
            >
              {card.title}
            </a>
          </p>

          {/* Deskripsi */}
          <p className="mt-4 text-xs lg:text-base text-gray-600">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
