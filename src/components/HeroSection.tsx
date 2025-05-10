import React from 'react';
import {type MotionStyle, motion} from 'framer-motion';

interface Props {
    style?: MotionStyle;
}

const HeroSection: React.FC<Props> = ({style}) => (
    <motion.div
        style={style}
        className="relative flex-col flex-wrap px-4"
    >
        <h1 className="px-10 text-header text-3xl font-semibold mb-4 ">
            About Me!
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 h-full">
            <div className="flex flex-col md:flex-row w-full gap-4 mt-4">
                <div className="flex-1">
                    <img
                        src="hazal.png"
                        alt="Hazal Yaşar Designer (mirrored)"
                        className="w-full h-auto object-cover rounded-lg transform"
                    />
                </div>
                {/* Buradaki div’in içini aşağıdaki gibi değiştir */}
                <div className="flex-1 space-y-4">
                    <h1 className="text-2xl text-header font-bold">Hello,</h1>
                    <p className="text-body">
                        I’m Hazal, a graduate of Industrial Product Design. I’m currently focused on UI/UX design and Front-End development.
                    </p>
                    <h2 className="text-xl text-header font-semibold">My Motivation</h2>
                    <p className="text-body">
                        In the boundless digital world of creativity, I thrive on continuous learning, problem-solving, and coming up with innovative ideas.
                    </p>

                    <h2 className="text-xl text-header font-semibold">My Goals</h2>
                    <p className="text-body">
                        As a Front-End Developer, I aim to prove myself by creating web projects that are accessible, seamless, and visually compelling.
                    </p>

                    <h2 className="text-xl text-header font-semibold">My Hobbies</h2>
                    <ul className="list-disc list-inside text-body">
                        <li>Knitting</li>
                        <li>Playing video games</li>
                        <li>Reading books</li>
                    </ul>

                    <p className="text-body">
                        Feel free to scroll down to check out my work!
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
);

export default HeroSection;
