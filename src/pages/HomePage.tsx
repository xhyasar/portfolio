import SkillSetPage from "./SkillSetPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import LandingPage from "./LandingPage.tsx";
import React from "react";
import PageBreak from "../components/PageBreak.tsx";
import HeroPage from "./HeroPage.tsx";

const HomePage: React.FC = () => (
    <>
        <LandingPage/>
        <PageBreak/>
        <HeroPage/>
        <PageBreak/>
        <SkillSetPage/>
        <PageBreak/>
        <ProjectsPage/>
        <PageBreak/>
        <ContactPage/>
    </>
);

export default HomePage;