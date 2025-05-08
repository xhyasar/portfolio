// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Left from "./components/Left.tsx";
import Right from "./components/Right.tsx";

const Layout: React.FC = () => (
    <div className="relative min-h-screen overflow-hidden bg-main">
        <div className="max-[1650px]:hidden">
            <Left />
        </div>
        <div className="max-[1650px]:hidden">
            <Right />
        </div>

        <main className="relative z-20 mx-auto max-w-5xl px-4">

            <Outlet />
        </main>
    </div>
);

export default Layout;
