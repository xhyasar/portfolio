import React from 'react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
    return (
        <section className="px-4 py-8 relative flex flex-wrap">

            {/* wrapper: tam genişlik + max width, ortalanmış */}
            <div className="w-full max-w-5xl flex flex-col items-center space-y-8">

                {/* buraya da aynı max width’i verip text-center yapıyoruz */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full text-center"
                >
                    <h1 className="text-5xl font-bold m-4 text-[#34495e]">Hazal Yaşar</h1>
                    <div className="text-3xl mb-8 ml-5 font-medium flex items-center justify-center space-x-2">
                        <motion.span
                            className="text-[#663399]"
                        >
                            Designer
                        </motion.span>
                        <span className="text-opacity-50 text-[#7f8c8d]">&amp;</span>
                        <motion.span
                            className="text-[#4682B4]"
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

export default LandingPage;
