const Language = [
    {
        id: 1,
        img: "javascript.svg",
        title: "HTML",
    },
    {
        id: 2,
        img: "javascript.svg", 
        title: "CSS",
    },
     {
        id: 3,
        img: "javascript.svg", 
        title: "Javascript",
    },
     {
        id: 4,
        img: "javascript.svg", 
        title: "React",
    },
     {
        id: 5,
        img: "javascript.svg", 
        title: "Next.js",
    },
     {
        id: 6,
        img: "javascript.svg", 
        title: "Node.js",
    },
    
]


export default function LanguageCard() {
    return (
       <div className="w-full h-full mt-0 bg-gray-300" >
        <div className=" flex justify-center gap-2 pt-6  md:pt-20" >
           <h1 className="text-black text-xm  md:text-2xl lg:text-4xl font-bold hover:underline">We collaborate with</h1>
           <h2 className="text-blue-900 text-xm md:text-2xl lg:text-4xl font-bold hover:underline"> 20 Youtube channel and 10 Books </h2>
        </div>   
                     <div className="flex justify-center pt-6 md:pt-10  ">
               <h1 className="text-blue-800 text-xm  md:text-2xl lg:text-4xl font-bold ">Learn everything you need to know</h1>
                     </div> 
                     <div className="flex justify-center items-center p-10 px-10">

                   <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10 " >
                      {Language.map(lang => (
                          <div key={lang.id} className="p-4 mb-4 ml-4 bg-gray-100 rounded-xl w-60 cursor-pointer hover:scale-105
               transition-all duration-300 ease-in-out h-80 text-center shadow">
                                <img src={lang.img} alt={lang.title} className=" mt-5 w-40 h-40 mx-auto mb-4" />
                             <h2 className="text-2xl mt-10 text-blue-900 font-semibold">{lang.title}</h2>
                                     </div>
                                           ))}
  </div>
                     </div>
       </div>
    )
}