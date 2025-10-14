
import { useState } from "react";
import { Link } from "react-router";

const Language = [
  { id: 1, img: "HTML.png", title: "HTML", path: "/html" , color:"from-orange-200 via-orange-400 to-orange-200" ,h2:"text-orange-500 " , button :"bg-orange-500 hover:bg-orange-600 hover:shadow-orange-400/50 text-white" },
  { id: 2, img: "css.svg", title: "CSS", path: "/css" , color:" from-blue-200 via-blue-400 to-blue-200", h2:"text-blue-500" },
  { id: 3, img: "js.svg", title: "JavaScript", path: "/javascript" , color:" from-yellow-200 via-yellow-400 to-yellow-200" , h2:"text-yellow-500" , hover:"bg-yellow-400 hover:bg-yellow-500 hover:shadow-yellow-300/50 text-gray-900" },
  { id: 4, img: "React5.png", title: "React", path: "/react" , color:" from-cyan-200 via-cyan-400 to-cyan-200", h2:"text-cyan-500" , button:"bg-cyan-500 hover:bg-cyan-600 hover:shadow-cyan-400/50 text-white" },
  { id: 5, img: "nextjs.svg", title: "Next.js", path: "/nextjs" , color:" from-gray-300 via-gray-600 to-gray-200", h2:"text-gray-800" , button:"bg-gray-800 hover:bg-gray-900 hover:shadow-gray-400/40 text-white" },
  { id: 6, img: "nodejs.svg", title: "Node.js", path: "/nodejs" , color:" from-green-200 via-green-400 to-green-200" , h2:"text-green-600"  , button:"bg-green-600 hover:bg-green-700 hover:shadow-green-400/50 text-white" },
  { id: 7, img: "laravel.svg", title: "Laravel", path: "/laravel" , color:" from-red-200 via-red-500 to-red-200" , h2:"text-red-600"  , button:"bg-red-600 hover:bg-red-700 hover:shadow-red-500/50 text-white" },
  { id: 8, img: "php.svg", title: "PHP", path: "/php" , color:" from-indigo-200 via-indigo-500 to-indigo-200", h2:"text-indigo-500" , button:"bg-indigo-500 hover:bg-indigo-600 hover:shadow-indigo-400/50 text-white" },
  { id: 9, img: "vue.svg", title: "Vue", path: "/vue" , color:" from-emerald-200 via-emerald-400 to-emerald-200", h2:"text-emerald-500", button:"bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-400/50 text-white"  },
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
         
        <div className="text-center pt-16">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Learn everything you need to know
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Build your roadmap — from HTML to full-stack mastery.
          </p>
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
              ◀️
            </button>

            <div className="flex justify-center gap-8 flex-wrap">
              {current.map((lang) => (
                <Link
                  to={lang.path}
                  key={lang.id}
                  className="group relative w-64 h-80 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Hover Gradient */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${lang.color}  opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300`}></div>
                 

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
                    <div className="bg-white p-4 rounded-full shadow-md mb-4">
                      <img
                        src={lang.img}
                        alt={lang.title}
                        className="w-24 h-24 object-contain"
                      />
                    </div>

                    <h2
                      className={`text-2xl font-bold ${lang.h2}`}
                    >
                      {lang.title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-2">
                      {lang.title === "JavaScript"
                        ? "Master the language of the web."
                        : `Learn ${lang.title} essentials.`}
                    </p>

                    <div className="mt-4">
                       <button
                        className={`px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                          lang.title === "HTML"
                            ? "bg-orange-500 hover:bg-orange-600 hover:shadow-orange-400/50 text-white"
                            : lang.title === "CSS"
                            ? "bg-blue-500 hover:bg-blue-600 hover:shadow-blue-400/50 text-white"
                            : lang.title === "JavaScript"
                            ? "bg-yellow-400 hover:bg-yellow-500 hover:shadow-yellow-300/50 text-gray-900"
                            : lang.title === "Laravel"
                            ? "bg-red-600 hover:bg-red-700 hover:shadow-red-500/50 text-white"
                            : lang.title === "React"
                            ? "bg-cyan-500 hover:bg-cyan-600 hover:shadow-cyan-400/50 text-white"
                            : lang.title === "Next.js"
                            ? "bg-gray-800 hover:bg-gray-900 hover:shadow-gray-400/40 text-white"
                            : lang.title === "Node.js"
                            ? "bg-green-600 hover:bg-green-700 hover:shadow-green-400/50 text-white"
                            : lang.title === "PHP"
                            ? "bg-indigo-500 hover:bg-indigo-600 hover:shadow-indigo-400/50 text-white"
                            : lang.title === "Vue"
                            ? "bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-400/50 text-white"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                      >
                        Start Learning
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
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
              ▶️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
