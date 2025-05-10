import React from 'react';
import {type MotionStyle, motion} from 'framer-motion';


interface Props {
    style?: MotionStyle
}

const HeroSection: React.FC<Props> = ({style}) => (
    <motion.div
        style={style}
        className="min-h-screen flex flex-col px-4"
    >
        <div className="px-10">
            About Me!
        </div>
        <div className="flex flex-row items-center justify-center gap-6 h-full">
            <div className="flex w-full gap-4 mt-4">
                <div className="flex-1 ">
                    <img
                        src="hazal.png"
                        alt="Hazal Yaşar Designer (mirrored)"
                        className="w-full h-auto object-cover rounded-lg transform"
                    />
                </div>
                <div className="flex-1 ">Text</div>
            </div>

        </div>
    </motion.div>
);

export default HeroSection;
