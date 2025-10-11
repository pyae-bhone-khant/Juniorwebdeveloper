"use client";
import { useState } from "react";
import { Link } from "react-router";

const Language = [
  { id: 1, img: "javascript.svg", title: "HTML" , ptah : '/javascript' },
  { id: 2, img: "javascript.svg", title: "CSS" , ptah : '/javascript' },
  { id: 3, img: "javascript.svg", title: "Javascript" , ptah : '/javascript' },
  { id: 4, img: "javascript.svg", title: "React"  , ptah : '/javascript' },
  { id: 5, img: "javascript.svg", title: "Next.js" , ptah : '/javascript' },
  { id: 6, img: "javascript.svg", title: "Node.js" , ptah : '/javascript' },
];

export default function LanguageCard() {
  const [page, setPage] = useState(0);
  const perPage = 3;

  const start = page + 1 * perPage - perPage;
  const end = start + perPage;
  const current = Language.slice(start, end);

  const hasPrev = page > 0;
  const hasNext = end < Language.length;

  return (
    <div className="w-full min-h-screen bg-gray-200">
      {/* Header Section */}
      <div>
        <div className="flex justify-center gap-2 pt-6 md:pt-20">
          <h1 className="text-black text-sm md:text-2xl lg:text-4xl font-bold hover:underline decoration-blue-600 decoration-4">
            We collaborate with
          </h1>
          <h2 className="text-blue-900 text-sm md:text-2xl lg:text-4xl font-bold hover:underline decoration-2 decoration-blue-700">
            20 YouTube Channels and 10 Books
          </h2>
        </div>
        <div className="flex justify-center mt-10 pt-6 md:pt-2 mb-4">
          <h1 className="text-blue-800 text-sm md:text-2xl lg:text-4xl font-bold">
            Learn everything you need to know
          </h1>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col items-center w-[95%] md:w-[80%] border border-blue-950 bg-gray-300 rounded-2xl p-6 md:p-10 relative">

          {/* Card Slider */}
          <div className="relative w-full flex justify-center items-center">

            {/* Prev Button */}
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={!hasPrev}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 
              bg-blue-700 text-white rounded-full shadow-lg
              hover:bg-blue-800 hover:scale-110 
              p-4 md:p-6 text-2xl md:text-4xl z-10 transition-all duration-300
              ${!hasPrev ? "opacity-40 cursor-not-allowed" : ""}`}
            >
              ◀
            </button>

            {/* Card Grid */}
            <div className="flex  justify-center gap-6 px-12">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {current.map((lang) => (
                <Link to={lang.ptah}
                  key={lang.id}
                  className="p-4 mx-5 bg-gray-100 rounded-xl w-60 h-80 text-center shadow cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  <img
                    src={lang.img}
                    alt={lang.title}
                    className="mt-5 w-40 h-40 mx-auto mb-4"
                  />
                  <h2 className="text-2xl mt-10 text-blue-900 font-semibold underline decoration-2 decoration-blue-700 underline-offset-4">
                    {lang.title}
                  </h2>
                </Link>
              ))}
                 </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => setPage((p) => (hasNext ? p + 1 : p))}
              disabled={!hasNext}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 
              bg-blue-700 text-white rounded-full shadow-lg
              hover:bg-blue-800 hover:scale-110 
              p-4 md:p-6 text-2xl md:text-4xl z-10 transition-all duration-300
              ${!hasNext ? "opacity-40 cursor-not-allowed" : ""}`}
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
