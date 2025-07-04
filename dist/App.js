import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProgramSection from './components/ProgramSection';
import InvestmentSection from './components/InvestmentSection';
import AdhesionSection from './components/AdhesionSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import GIEDashboard from './components/GIEDashboard';
import Investir from './Investir';
import Adhesion from './Adhesion';
function App() {
    const [currentPage, setCurrentPage] = useState('home');
    if (currentPage === 'dashboard') {
        return _jsx(GIEDashboard, {});
    }
    if (currentPage === 'investir') {
        return _jsx(Investir, {});
    }
    if (currentPage === 'adhesion') {
        return _jsx(Adhesion, { onNavigate: setCurrentPage });
    }
    return (_jsxs("div", { className: "min-h-screen bg-neutral-50", children: [_jsx(Header, { onNavigate: setCurrentPage }), _jsxs("main", { children: [_jsx(HeroSection, {}), _jsx(ProgramSection, {}), _jsx(InvestmentSection, {}), _jsx(AdhesionSection, {}), _jsx(GallerySection, {})] }), _jsx(Footer, {})] }));
}
export default App;
//# sourceMappingURL=App.js.map