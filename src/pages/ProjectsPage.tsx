import React from 'react';
import ProjectsSection from "../components/ProjectSection.tsx";
import { sampleProjects } from "../components/ProjectSection.tsx";

const ProjectsPage: React.FC = () => (
    <ProjectsSection projects = {sampleProjects} />
);

export default ProjectsPage;
