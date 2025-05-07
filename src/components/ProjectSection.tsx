import React, { useRef, useState } from 'react';
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

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onPrev, onNext }) => {
    // Render lightbox via portal to avoid parent CSS interference
    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black bg-opacity-75" onClick={onClose} />
            {/* Content */}
            <div className="relative z-10 flex items-center max-w-[90vw] max-h-[90vh]">
                <button onClick={onPrev} className="text-white text-4xl px-4 focus:outline-none">‹</button>
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                />
                <button onClick={onNext} className="text-white text-4xl px-4 focus:outline-none">›</button>

            </div>
            <button
                onClick={onClose}
                className="absolute top-0 right-2 text-white text-3xl focus:outline-none"
            >
                ×
            </button>
        </div>,
        document.body
    );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects = [] }) => {
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
        const { clientWidth, scrollLeft } = ref;
        ref.scrollTo({ left: scrollLeft + (direction === 'left' ? -clientWidth : clientWidth), behavior: 'smooth' });
    };

    if (projects.length === 0) {
        return <p className="text-center text-gray-500">No projects to display.</p>;
    }

    return (
        <section id="projects" className="space-y-16 px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Projelerim</h2>

            {projects.map((proj) => (
                <div
                    key={proj.id}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-gray-50 p-6 rounded-2xl shadow-md"
                >
                    {/* Details */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">{proj.title}</h3>
                        <p className="text-gray-700">{proj.description}</p>
                        {/* Link ikonları */}
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
                                        <img src={link.icon} alt={`${link.name}`} className="w-8 h-8" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Carousel */}
                    <div className="relative">
                        <button
                            onClick={() => scroll(proj.id, 'left')}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-lg z-10 focus:outline-none"
                        >
                            ‹
                        </button>
                        <div
                            ref={(el) => { scrollRefs.current[String(proj.id)] = el; }}
                            className="flex overflow-x-auto space-x-4 scroll-smooth"
                            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
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

// Example usage and basic test data
export const sampleProjects: Project[] = [
    {
        id: 1,
        title: 'Clear',
        description: 'Bu projede, Clear’ın “Hyaluron Nem Terapisi”  şampuan, saç kremi ve bakım spreyi ürünlerini şık ve işlevsel bir şekilde sergilemek için modüler bir raf tepsisi ve wobbler tasarımı geliştirdim.',
        images: ['projects/clear/clear01.png', 'projects/clear/clear02.png'],
    },
    {
        id: 2,
        title: 'Algida IceCream',
        description: 'Algida’nın ikonik kırmızı-beyaz paletini ve akıcı, kemer formundaki modüler yapıyı vurgulayarak entegre soğutma ünitesi, hijyenik cam koruma ve LED aydınlatmalı tabela ile stand tasarımını tamamladım.',
        images: ['projects/icecream/icecream01.jpg', 'projects/icecream/icecream02.jpg', 'projects/icecream/icecream03.jpg', 'projects/icecream/icecream04.jpg'],
    },
    {
        id: 3,
        title: 'Avon Anew Serisi',
        description: 'Avon markasına ait olan Anew Protinol içerikli serisi için, ürünlerin şıklığını ve zarafetini vurgulayan bir pleksiden malzeme kullanılan stand tasarımı geliştirdim. Stand, ürünlerin etkileyici bir şekilde sergilenmesini sağlarken, markanın lüks imajını da yansıtmaktadır.',
        images: ['projects/avon/anew01.png', 'projects/avon/anew02.png'],
    },
    {
        id: 4,
        title: 'Avon Power Stay',
        description: 'Mağazada şeffaf pleksiden oluşan modern bir stand kullandım; bu sayede ürünler zarafetini ön plana çıkarırken markanın sofistike ve kalıcı imajını da güçlendirdim.',
        images: ['projects/avon/avon01.png', 'projects/avon/avon02.png'],
    },
    {
        id: 5,
        title: 'Saka Fuar Standı',
        description: 'Saka’nın “doğallık ve ferahlık” vurgusunu pekiştiren, ahşap dokulu zemin ve çatıyla suyun saf imajını çağrıştıran LED aydınlatmalı bir fuar standı tasarladım; böylece ürünler tazelik hissiyle öne çıkarken markanın güvenilir ve sıcak duruşunu da güçlendirdim.',
        images: ['projects/saka/saka01.png', 'projects/saka/saka02.png', 'projects/saka/saka03.png', 'projects/saka/saka04.png'],
    },
    {
        id: 6,
        title: 'Shelvia Warehouse Management',
        description: 'Depo stok yönetimini basitleştirmek için tasarladığım bu panel, Gerçek zamanlı KPI kartları ile anlık envanter takibi, Etkileşimli filtreler ve ürün güncelleme formları ile hızlı işlem, Hem masaüstü hem de mobil uyumlu arayüzüyle her cihazda kullanılabilirliközelliklerini içeriyor.Projenin hâlihazırda wireframe’leri, yüksek-doğruluklu mockup’ları ve design-system bileşenleri tamamlıyorum; geliştirme aşamasına geçerek React + Tailwind tabanlı bir prototip oluşturmaya hazırlanıyorum.',
        images: ['projects/shelvia/LoginScreen.png', 'projects/shelvia/WarehouseList.png', 'projects/shelvia/WarehouseDetail.png', 'projects/shelvia/ProductList.png'],
        links: [
            { icon: 'icons/github.svg', name: 'GitHub', url: 'https://github.com/xhyasar/AspireLearning' },
            { icon: 'icons/figma.svg', name: 'Figma', url: 'https://www.figma.com/design/W3Hp5fvj5673IR97RD5vdc/Shelvia-Warehouse-Management?node-id=2-276&p=f&t=oC6wM2v8FwsOwCHW-0'},
        ]
    },
];

export default ProjectsSection;
