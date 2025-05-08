import React from 'react';
import { motion } from 'framer-motion';

const HeroPage: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-7xl font-bold mb-4 text-[#0B365E]">Hazal Yaşar</h1>
                <div className="text-4xl font-medium flex items-center justify-center">
                    <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#A78BFA]"
                    >
                        Designer
                    </motion.span>

                    <span className="mx-2 text-opacity-50 text-[#6B7280]">&</span>

                    <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#60A5FA]"
                    >
                        Developer
                    </motion.span>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroPage;
