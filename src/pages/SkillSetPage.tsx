import React from 'react';
import SkillSet, {sampleTechData} from "../components/SkillSet.tsx";

const SkillSetPage: React.FC = () => {
    return (
        <SkillSet data = {sampleTechData} />
    );
};

export default SkillSetPage;