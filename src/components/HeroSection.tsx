import React from 'react';
import {type MotionStyle, motion} from 'framer-motion';

interface Props {
    style?: MotionStyle;
}

const HeroSection: React.FC<Props> = ({style}) => (
    <motion.div
        style={style}
        className="min-h-screen flex flex-col px-4"
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
                    <h1 className="text-2xl text-header font-bold">Merhaba,</h1>
                    <p className="text-body">
                        Ben Hazal, Endüstri Ürünleri Tasarımı mezunuyum. Şu anda UI/UX tasarımı ve Front-End
                        geliştirmeye odaklanıyorum.
                    </p>
                    <h2 className="text-xl text-header font-semibold">Motivasyonum</h2>
                    <p className="text-body">
                        Yaratıcılığın sınır tanımadığı dijital dünyada; sürekli öğrenmek, problem çözmek ve yenilikçi
                        fikirler üretmek beni heyecanlandırıyor.
                    </p>

                    <h2 className="text-xl text-header font-semibold">Hedeflerim</h2>
                    <p className="text-body">
                        Front-End Developer olarak erişilebilir, akıcı ve görsel açıdan etkileyici web projeleri
                        üreterek kendimi kanıtlamak.
                    </p>

                    <h2 className="text-xl text-header font-semibold">Hobilerim</h2>
                    <ul className="list-disc list-inside text-body">
                        <li>Örgü örmek</li>
                        <li>Bilgisayar oyunları oynamak</li>
                        <li>Kitap okumak</li>
                    </ul>

                    <p className="text-body">
                        Çalışmalarıma göz atmak istersen aşağıya kaydırabilirsin!
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
);

export default HeroSection;
