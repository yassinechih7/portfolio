import "../styles/globals.css";
import "../styles/normalize.css";
import Hero from "./components/Hero/Hero";
import About from "./components/AboutMe/About";
import MainSkillset from "./components/MainSkillset/MainSkillset";
import SomeProjects from "./components/SomeProjects/SomeProjects";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import SepLine from "./components/SepLine/SepLine";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

 {/* <NavBar />
      <Hero />
      <SepLine width="90" />
      <About />
      <SepLine width="90" />
      <MainSkillset />
      <SepLine width="90" />
      <SomeProjects />
      <SepLine width="90" />
      <Skills />
      <ContactMe />
      <Footer />  */}