// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Left from "./Left.tsx";
import Right from "./Right.tsx";

const Layout: React.FC = () => (
    <div className="relative min-h-screen overflow-hidden bg-main">
        <div className="max-[1650px]:hidden">
            <Left />
        </div>
        <div className="max-[1650px]:hidden">
            <Right />
        </div>
        {/* Ana içerik alanı */}
        <main className="relative z-20 mx-auto max-w-5xl px-4">
            {/* Burada nested route’lar render edilecek */}
            <Outlet />
        </main>
    </div>
);

export default Layout;
