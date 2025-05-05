import React from 'react';
import { type MotionStyle, motion } from 'framer-motion';
import image from '../assets/side-image.png';

interface Props { style?: MotionStyle }

const Right: React.FC<Props> = ({ style }) => (
    <motion.div
        style={style}
        className="fixed top-0 right-0 w-[320px] h-screen hidden lg:block z-10"
    >
        <img
            src={image}
            alt="Sağ yan görsel"
            className="w-full h-full object-cover"
        />
    </motion.div>
);

export default Right;
