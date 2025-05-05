import SkillSetPage from "./SkillSetPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import HeroPage from "./HeroPage.tsx";

const HomePage: React.FC = () => (
    <>
        <HeroPage />
        <SkillSetPage />
        <ProjectsPage />
        <ContactPage />
    </>
);

export default HomePage;