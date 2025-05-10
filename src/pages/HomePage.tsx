import SkillSetPage from "./SkillSetPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import HeroPage from "./HeroPage.tsx";
import cat from "../assets/cat.svg";
import React from "react";

const HomePage: React.FC = () => (
    <>
        <HeroPage />
        <img
            src={cat}
            alt="kedi"
            className="w-80 h-auto mx-auto py-6"
        />
        <SkillSetPage />
        <img
            src={cat}
            alt="kedi"
            className="w-80 h-auto mx-auto py-6"
        />
        <ProjectsPage />
        <img
            src={cat}
            alt="kedi"
            className="w-80 h-auto mx-auto py-6"
        />
        <ContactPage />
    </>
);

export default HomePage;