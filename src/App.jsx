import './App.scss';
import { Outlet } from "react-router-dom";
import Hero from '@sections/hero/hero.jsx';
import SkillsContent from '@sections/skillsContent/skillsContent.jsx';
import AboutMe from '@sections/aboutMe/aboutMe.jsx';
import ProjectsSection from '@sections/projectSection/projectsSection.jsx';
import ContactLink from './sections/contactLink/contactLink';


function App() {
  return (
    <>
      <Hero />
      <SkillsContent />
      <AboutMe />
      <ProjectsSection />
      <ContactLink />


    </>
  );
}

export default App;




