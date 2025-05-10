import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

export interface LightboxProps {
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


            <div className="flex space-x-1 mb-4 w-full max-w-[90vw]">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className="flex-1 h-1 bg-[#686868] bg-opacity-30 rounded overflow-hidden"
                    >
                        {idx < currentIndex && <div className="h-full bg-white"/>}
                        {idx === currentIndex && (
                            <div
                                className="h-full bg-white story-progress"
                                style={{animationDuration: '10s'}}
                            />
                        )}
                    </div>
                ))}
                <button
                    onClick={onClose}
                    className="h-1 z-51 text-white text-4xl focus:outline-none"
                >
                    ×
                </button>
            </div>

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

export default Lightbox;
