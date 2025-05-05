// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Left from "./Left.tsx";
import Right from "./Right.tsx";

const Layout: React.FC = () => (
    <div className="relative min-h-screen overflow-hidden bg-main">
        <Left />
        <Right />
        {/* Ana içerik alanı */}
        <main className="relative z-20 mx-auto max-w-3xl px-4">
            {/* Burada nested route’lar render edilecek */}
            <Outlet />
        </main>
    </div>
);

export default Layout;
