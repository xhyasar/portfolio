import React, {useRef, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

export interface Project {
    id: string | number;
    title: string;
    description: string;
    images: string[];
    links?: ProjectLink[];
}

export interface ProjectLink {
    name: string;
    icon: string;
    url: string;
}

interface ProjectsSectionProps {
    /**
     * Array of project objects. Defaults to an empty array if not provided.
     */
    projects?: Project[];
}

interface LightboxProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
                                               images,
                                               currentIndex,
                                               onClose,
                                               onPrev,
                                               onNext,
                                           }) => {
    useEffect(() => {
        const timer = setTimeout(onNext, 10_000);
        return () => clearTimeout(timer);
    }, [currentIndex, onNext]);

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-75 p-4">
            {/* Kapatma tuşu */}
            <button
                onClick={onClose}
                className="absolute right-3 top-3 text-white text-4xl focus:outline-none"
            >
                ×
            </button>

            {/* ◀ GÖSTERGELER BURADA, FOTOĞRAFIN ÜSTÜNE GELMEZ */}
            <div className="flex space-x-1 mb-4 w-full max-w-[90vw]">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className="flex-1 h-1 bg-[#686868] bg-opacity-30 rounded overflow-hidden"
                    >
                        {/* Seen */}
                        {idx < currentIndex && <div className="h-full bg-white" />}
                        {/* Active */}
                        {idx === currentIndex && (
                            <div
                                className="h-full bg-white story-progress"
                                style={{ animationDuration: "10s" }}
                            />
                        )}
                        {/* Future: boş */}
                    </div>
                ))}
            </div>

            {/* FOTOĞRAF ve overlay katmanları */}
            <div className="relative w-[90vw] h-[90vh] flex items-center justify-center">
                <div
                    onClick={onPrev}
                    className="absolute left-0 top-0 w-1/2 h-full cursor-pointer z-10"
                />
                <div
                    onClick={onNext}
                    className="absolute right-0 top-0 w-1/2 h-full cursor-pointer z-10"
                />
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="max-w-full max-h-full object-contain z-0"
                />
            </div>
        </div>,
        document.body
    );
};



const ProjectsSection: React.FC<ProjectsSectionProps> = ({projects = []}) => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [currentProjectImages, setCurrentProjectImages] = useState<string[]>([]);
    const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const openLightbox = (images: string[], index: number) => {
        setCurrentProjectImages(images);
        setLightboxIndex(index);
    };

    const closeLightbox = () => setLightboxIndex(null);
    const showPrev = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + currentProjectImages.length - 1) % currentProjectImages.length);
    };
    const showNext = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % currentProjectImages.length);
    };

    const scroll = (projectId: string | number, direction: 'left' | 'right') => {
        const ref = scrollRefs.current[String(projectId)];
        if (!ref) return;
        const {clientWidth, scrollLeft} = ref;
        ref.scrollTo({left: scrollLeft + (direction === 'left' ? -clientWidth : clientWidth), behavior: 'smooth'});
    };

    if (projects.length === 0) {
        return <p className="text-center text-gray-500">No projects to display.</p>;
    }

    return (
        <section id="projects" className="space-y-16 p-6">
            <h2 className="text-3xl font-bold text-center mb-8"></h2>

            {projects.map((proj) => (
                <div
                    key={proj.id}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-gray-50 p-6 rounded-2xl shadow-md"
                >
                    {/* Details */}
                    <div className="space-y-4">
                        <h3 className="text-header text-2xl font-semibold">{proj.title}</h3>
                        <p className="text-body">{proj.description}</p>

                        {proj.links && (
                            <div className="flex space-x-4 mt-4">
                                {proj.links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-blue-600 hover:underline"
                                    >
                                        <img src={link.icon} alt={`${link.name}`} className="w-8 h-8"/>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>


                    <div className="flex relative items-center justify-center h-64 overflow-hidden">
                        <button
                            onClick={() => scroll(proj.id, 'left')}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-lg z-10 focus:outline-none"
                        >
                            ‹
                        </button>
                        <div
                            ref={(el) => {
                                scrollRefs.current[String(proj.id)] = el;
                            }}
                            className="flex overflow-x-auto space-x-4 scroll-smooth"
                            style={{msOverflowStyle: 'none', scrollbarWidth: 'none'}}
                        >
                            {proj.images.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt={`${proj.title} ${idx + 1}`}
                                    className="w-64 h-40 object-fill flex-shrink-0 rounded-lg cursor-pointer"
                                    onClick={() => openLightbox(proj.images, idx)}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => scroll(proj.id, 'right')}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-lg z-10 focus:outline-none"
                        >
                            ›
                        </button>
                    </div>
                </div>
            ))}

            {lightboxIndex !== null && (
                <Lightbox
                    images={currentProjectImages}
                    currentIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={showPrev}
                    onNext={showNext}
                />
            )}
        </section>
    );
};


export const sampleProjects: Project[] = [
    {
        id: 1,
        title: 'Shelvia Warehouse Management',
        description: 'Designed to simplify warehouse stock management, this panel features real-time KPI cards for instant inventory tracking, interactive filters and product update forms for fast operations, and a responsive interface optimized for both desktop and mobile devices. The project already includes wireframes, high-fidelity mockups, and design system components; I am now preparing to move into the development phase by building a React + Tailwind-based prototype.',
        images: ['projects/shelvia/LoginScreen.png', 'projects/shelvia/WarehouseList.png', 'projects/shelvia/WarehouseDetail.png', 'projects/shelvia/ProductList.png'],
        links: [
            {icon: 'icons/github.svg', name: 'GitHub', url: 'https://github.com/xhyasar/AspireLearning'},
            {
                icon: 'icons/figma.svg',
                name: 'Figma',
                url: 'https://www.figma.com/design/W3Hp5fvj5673IR97RD5vdc/Shelvia-Warehouse-Management?node-id=2-276&p=f&t=oC6wM2v8FwsOwCHW-0'
            },
        ]
    },
    {
        id: 2,
        title: 'Clear',
        description: 'In this project, I designed a modular shelf tray and a wobbler to stylishly and functionally display Clear’s “Hyaluron Moisture Therapy” shampoo, conditioner, and care spray products.',
        images: ['projects/clear/clear01.png', 'projects/clear/clear02.png'],
    },
    {
        id: 3,
        title: 'Saka Exhibition Stand',
        description: 'I designed an LED-lit exhibition stand for Saka that reinforces its emphasis on “naturalness and freshness,” featuring a wooden-textured floor and roof to evoke the pure image of water. This setup highlights the products with a sense of freshness while strengthening the brand’s trustworthy and warm presence.',
        images: ['projects/saka/saka01.png', 'projects/saka/saka02.png', 'projects/saka/saka03.png', 'projects/saka/saka04.png'],
    },
    {
        id: 4,
        title: 'Avon Anew Series',
        description: 'For Avon’s Anew Protinol-infused line, I developed a stand design using plexiglass material to highlight the elegance and sophistication of the products. The stand not only ensures an impressive product display but also reflects the brand’s luxurious image.',
        images: ['projects/avon/anew01.png', 'projects/avon/anew02.png'],
    },
    {
        id: 5,
        title: 'Avon Power Stay',
        description: 'I used a modern stand made of transparent plexiglass in the store; this allowed the products to highlight their elegance while reinforcing the brand’s sophisticated and lasting image.',
        images: ['projects/avon/avon01.png', 'projects/avon/avon02.png'],
    },
    {
        id: 6,
        title: 'Algida IceCream',
        description: 'By emphasizing Algida’s iconic red-and-white palette and the flowing, belt-shaped modular structure, I completed the stand design with an integrated cooling unit, hygienic glass protection, and an LED-lit sign.',
        images: ['projects/icecream/icecream01.jpg', 'projects/icecream/icecream02.jpg', 'projects/icecream/icecream03.jpg', 'projects/icecream/icecream04.jpg'],
    },
];

export default ProjectsSection;
