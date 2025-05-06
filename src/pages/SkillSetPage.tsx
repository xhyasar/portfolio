import React from 'react';
import SkillSet, {sampleTechData} from "../components/SkillSet.tsx";

const SkillSetPage: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <SkillSet data = {sampleTechData} />
        </div>
    );
};

export default SkillSetPage;