import MainNav from './components/MainNav'
import SecondaryNav from './components/SecondaryNav'
import Home from "./Pages//Home"
import About from './Pages/About'
import Javascript from './Pages/Javascript'
import PHP from './Pages/PHP'
import Missing from './Pages/Missing'
import { Routes, Route } from 'react-router-dom' 
import LanguageCard from './components/LanguageCard'
import Footer from './components/Footer'

 export default function App() {
  return (
    <div className="min-h-screen bg-slate-50" >
      <MainNav />
      <SecondaryNav />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/language' element= {<LanguageCard />} />
        <Route path='/about' element= {<About />} />
        <Route path='/javascript' element= {<Javascript />} />
        <Route path='/php' element= {<PHP />} />
        <Route path='*' element= {<Missing />} />
      </Routes>
      <Footer />
    </div>
  )
 }