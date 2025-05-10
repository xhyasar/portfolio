import React from 'react';
import { type MotionStyle, motion } from 'framer-motion';
import image from '../assets/side-image2.png';

interface Props { style?: MotionStyle }

const Left: React.FC<Props> = ({ style }) => (
    <motion.div
        style={style}
        className="fixed top-0 left-0 max-w-63 h-screen hidden lg:block z-10"
    >
        <img
            src={image}
            alt="Sol yan görsel"
            className="w-full h-full object-cover"
        />
    </motion.div>
);

export default Left;
