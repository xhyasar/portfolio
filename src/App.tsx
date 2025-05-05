import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

const App: React.FC = () => (
    <Routes>
        <Route path="/portfolio" element={<Layout />}>
            <Route index element={<HomePage />} />
        </Route>
    </Routes>
);

export default App;
