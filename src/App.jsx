import MainNav from './components/MainNav'
import SecondaryNav from './components/SecondaryNav'
import Home from "./Pages//Home"
import About from './Pages/About'
import Javascript from './Pages/Javascript'
import PHP from './Pages/PHP'
import Missing from './Pages/Missing'
import { Routes, Route } from 'react-router-dom' 
import LanguageCard from './components/LanguageCard'
import Feedback from './components/Feedback'
import TeamMembers from './Pages/TeamMembers'
import Footer from './components/Footer'
import useWindowSize from './hooks/useWindowSize'
import { useState } from 'react'
import MobileNav from './components/MobileNav'

 export default function App() {

  const [ isClicked, setIsClicked] = useState(false)
  const { width } = useWindowSize();

  const handleToggle = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className="min-h-screen bg-slate-50" >
      <MainNav width = {width} isClicked= {isClicked}
      handleToggle = {handleToggle} />
      <SecondaryNav />
      <MobileNav width={width} isClicked={isClicked} handleToggle={handleToggle} />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/language' element= {<LanguageCard />} />
        <Route path='/about' element= {<About />} />
        <Route path='/javascript' element= {<Javascript />} />
        <Route path='/php' element= {<PHP />} />
        <Route path='/feedback' element = {<Feedback />} />
        <Route path='/team' element = {<TeamMembers />} />
        <Route path='*' element= {<Missing />} />
      </Routes>
      <Footer />
    </div>
  )
 }