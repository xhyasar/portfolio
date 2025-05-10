// src/components/HeroPage.tsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroPage: React.FC = () => {
    return (
        <section className="min-h-screen flex justify-center items-center px-4">
            {/* wrapper: tam genişlik + max width, ortalanmış */}
            <div className="w-full max-w-5xl flex flex-col items-center space-y-8">

                {/* buraya da aynı max width’i verip text-center yapıyoruz */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full text-center"
                >
                    <h1 className="text-7xl font-bold mb-4 text-[#0B365E]">Hazal Yaşar</h1>
                    <div className="text-4xl font-medium flex items-center justify-center space-x-2">
                        <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-[#A78BFA]"
                        >
                            Designer
                        </motion.span>
                        <span className="text-opacity-50 text-[#6B7280]">&amp;</span>
                        <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-[#60A5FA]"
                        >
                            Developer
                        </motion.span>
                    </div>
                    {/* resimler */}
                    <div className="flex w-full gap-4 mt-4">
                        <div className="flex-1">
                            <img
                                src="hero/hero-designer.png"
                                alt="Hazal Yaşar Designer (mirrored)"
                                className="w-full h-auto object-cover rounded-lg transform -scale-x-100"
                            />
                        </div>
                        <div className="flex-1">
                            <img
                                src="hero/hero-developer.png"
                                alt="Hazal Yaşar Developer"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroPage;
