import React from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import {motion} from 'framer-motion';

const HeroPage: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center space-y-8">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="text-center"
            >
                <h1 className="text-5xl font-bold mb-4">Hoş Geldiniz!</h1>
                <p className="text-xl text-gray-600">
                    Endüstriyel Tasarım ve Front-End Geliştirme tutkusuyla
                    yaratıcı çözümler üretiyorum.
                </p>
            </motion.div>
            <Player
                autoplay
                loop
                src="/animations/hero-animation.json"
                style={{height: '300px', width: '300px'}}
            />
        </section>
    );
};

export default HeroPage;