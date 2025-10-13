import header from '/header.avif'
import LanguageCard from '../components/LanguageCard';
import Learning from '../components/Learning';
import Faq from '../components/Faq';
import ContactSection from '../components/Cta';
export default function Home() {
  return ( 
     <div> 
    <div  className='flex flex-col lg:flex-row md:flex-row items-center justify-center  md:justify-between w-full h-full md:h-120 mb-0  bg-blue-950' >
   <div className='text-white flex flex-col px-8 md:px-20 mt-15  md:mt-18 ' >
    <h1 className=' text-2xl md:text-4xl font-bold' >Become a full stack Developer</h1>
    <p className='mt-8  text-xl md:text-xl' >Learn web development step-by-step with our free YouTube course and complete guidebook. Perfect for beginners who want to start coding confidently.</p>
    <div className='mt-10 flex  gap-4' >
      <button className='border border-blue-900 px-2 py-2 hover:opacity-80 rounded bg-white text-blue-900 font-bold  text-xl'>🎥 Watch Course</button>
      <button className='border border-white px-2 hover:opacity-80 py-2  rounded text-white font-bold text-xl'>📘 Read the Book</button>
    </div>
   </div> 
    <div>
      <img src={header} className= ' mt-7 md:mt-0 md:w-250 lg:w-300 lg:h-120 h-full' alt="" />
    </div>
    </div> 
    <LanguageCard />
    <Learning />
    <Faq />
    <ContactSection />
    
     </div>
  );
}
