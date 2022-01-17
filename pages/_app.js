import '../styles/globals.css'
import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/AboutMe/About'
import MainSkillset from './components/MainSkillset/MainSkillset'
import SomeProjects from './components/SomeProjects/SomeProjects'
import Skills from './components/Skills/Skills'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

function MyApp() {
  return (
    <div className="MyApp">
      <NavBar/>
      <Hero/>
      <About/>
      <MainSkillset/>
      <SomeProjects/>
      <Skills/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default MyApp
