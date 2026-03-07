import './App.scss';
import { Outlet } from "react-router-dom";
import Header from '@components/header/header.jsx';
import Footer from '@components/footer/footer.jsx';
import ScrollToTop from '@components/ScrollToTop/scrollToTop.jsx';
import Hero from '@sections/hero/hero.jsx';
import SkillsContent from '@sections/skillsContent/skillsContent.jsx';
import AboutMe from '@sections/aboutMe/aboutMe.jsx';
import ProjectsSection from '@projectsSection/projectsSection.jsx';



function App() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <SkillsContent />
      <AboutMe />
      <ProjectsSection />


    </>
  );
}

export default App;




