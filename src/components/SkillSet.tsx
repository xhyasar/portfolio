import React from 'react';

export interface IconItem {
    name: string;
    src: string;
    alt?: string;
}

export interface TechSection {
    title: string;
    icons: IconItem[];
}

interface SkillSetProps {
    data: TechSection[];
}

const SkillSet: React.FC<SkillSetProps> = ({ data }) => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-x-12 gap-y-8 p-6">
            {data.map((section) => (
                <div
                    key={section.title}
                    className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center w-72"
                >
                    <h3 className="text-xl font-semibold mb-4 text-center">
                        {section.title}
                    </h3>
                    <div className="flex justify-center flex-wrap gap-x-8 gap-y-4">
                        {section.icons.map((icon) => (
                            <div
                                key={icon.name}
                                className="w-12 h-12 sm:w-16 sm:h-16"
                            >
                                <img
                                    src={icon.src}
                                    alt={icon.alt || icon.name}
                                    title={icon.name}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};


// Example JSON data:
export const sampleTechData: TechSection[] = [
    {
        title: 'Software Development',
        icons: [
            {name: 'React', src: 'src/assets/icons/react.svg'},
            {name: 'CSS', src: 'src/assets/icons/css-icon.svg'},
            {name: 'HTML', src: 'src/assets/icons/html-icon.svg'},
            {name: 'TypeScript', src: 'src/assets/icons/typescript.svg'},
            {name: 'Tailwind', src: 'src/assets/icons/tailwind.svg'},
        ],
    },
    {
        title: 'UI/UX Design',
        icons: [
            {name: 'Figma', src: 'src/assets/icons/figma.svg'},
            {name: 'Adobe XD', src: 'src/assets/icons/adobexd.svg'},
            {name: 'Adobe Photoshop', src: 'src/assets/icons/photoshop.svg'},
            {name: 'Adobe Illustrator', src: 'src/assets/icons/illustrator.svg'},
        ],
    },
    {
        title: '3D Design',
        icons: [
            {name: 'Blender', src: 'src/assets/icons/blender-icon.svg'},
            {name: '3Ds Max', src: 'src/assets/icons/3dmax.svg'},
            {name: 'Rhino', src: 'src/assets/icons/rhino.svg'},
            {name: 'Autocad', src: 'src/assets/icons/autocad-icon.svg'},
            {name: 'Keyshot', src: 'src/assets/icons/keyshot.svg'},
            {name: 'Vray', src: 'src/assets/icons/vray.svg'},
        ],
    },
    {
        title: 'Productivity Tools',
        icons: [
            {name: 'JetBrains WebStorm', src: 'src/assets/icons/webstorm.svg'},
            {name: 'Cursor', src: 'src/assets/icons/cursor.svg'},
            {name: 'Docker', src: 'src/assets/icons/docker.svg'},
            {name: 'Visual Studio Code', src: 'src/assets/icons/vscode.svg'},
            {name: 'Chat GPT', src: 'src/assets/icons/chatgpt.svg'},
            {name: 'GitHub', src: 'src/assets/icons/github.svg'},
        ],
    },
];

export default SkillSet;
