// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Left from './components/Left';
import Right from './components/Right';

const Layout: React.FC = () => (
    <div className="relative min-h-screen overflow-hidden bg-main">
        {/* Sol/Sağ paneli: 1500px altındayken gizle */}
        <div className="max-[1500px]:hidden">
            <Left />
        </div>
        <div className="max-[1500px]:hidden">
            <Right />
        </div>

        {/* Ana içerik */}
        <main className="relative z-20 mx-auto w-full max-w-5xl px-4">
            <Outlet />
        </main>
    </div>
);

export default Layout;
