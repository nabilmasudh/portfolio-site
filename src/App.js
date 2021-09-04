import React from 'react'
import NavSection from './components/Nav'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import SkillsSection from './components/SkillsSection';
import TeameSection from './components/TeameSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
 
 function App() {
   return (
     <div>
       <NavSection/>
       <HomeSection/>
       <AboutSection/>
       <ServiceSection/>
       <SkillsSection/>
       <TeameSection/>
       <ContactSection/>
       <Footer/>
     </div>
   )
 }
 
 export default App
 