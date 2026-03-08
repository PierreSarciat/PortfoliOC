import './App.scss';
import { Outlet } from "react-router-dom";
import ScrollToTop from '@components/ScrollToTop/scrollToTop.jsx';
import Hero from '@sections/hero/hero.jsx';
import SkillsContent from '@sections/skillsContent/skillsContent.jsx';
import AboutMe from '@sections/aboutMe/aboutMe.jsx';
import ProjectsSection from '@sections/projectSection/projectsSection.jsx';



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




