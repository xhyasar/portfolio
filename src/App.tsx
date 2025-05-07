import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.tsx';
import HomePage from './pages/HomePage';

const App: React.FC = () => (
    <Routes >
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
        </Route>
    </Routes>
);

export default App;
