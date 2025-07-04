import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
const Header = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState('fr');
    const navigation = [
        { name: 'Accueil', href: '#accueil', action: () => onNavigate('home') },
        { name: 'Programme', href: '#programme' },
        { name: 'Adhérer', href: '#adherer', action: () => onNavigate('adhesion') },
        { name: 'Investir', href: '#investir', action: () => onNavigate('investir') },
        { name: 'Wallet GIE', href: '#wallet', action: () => onNavigate('dashboard') },
        { name: 'Galerie', href: '#galerie' },
    ];
    const handleNavClick = (item) => {
        if (item.action) {
            item.action();
        }
        setIsMenuOpen(false);
    };
    return (_jsx("header", { className: "fixed top-0 left-0 right-0 z-50 bg-neutral-50/95 backdrop-blur-sm border-b border-neutral-200", children: _jsxs("div", { className: "container-max section-padding", children: [_jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsxs("div", { className: "flex items-center space-x-2 cursor-pointer", onClick: () => onNavigate('home'), children: [_jsx("div", { className: "w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center", children: _jsx("span", { className: "text-neutral-50 font-bold text-lg", children: "F" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-xl font-bold text-neutral-900", children: "FEVEO" }), _jsx("p", { className: "text-xs text-accent-500 font-medium", children: "2050" })] })] }), _jsx("nav", { className: "hidden lg:flex items-center space-x-8", children: navigation.map((item) => (_jsx("button", { onClick: () => handleNavClick(item), className: "text-neutral-600 hover:text-accent-500 font-medium transition-colors duration-200", children: item.name }, item.name))) }), _jsxs("div", { className: "hidden lg:flex items-center space-x-4", children: [_jsxs("button", { onClick: () => setLanguage(language === 'fr' ? 'wo' : 'fr'), className: "flex items-center space-x-1 text-neutral-600 hover:text-accent-500 transition-colors duration-200", children: [_jsx(Globe, { className: "w-4 h-4" }), _jsx("span", { className: "text-sm font-medium", children: language === 'fr' ? 'FR' : 'WO' })] }), _jsx("button", { className: "btn-accent", children: "Commencer" })] }), _jsx("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "lg:hidden p-2 text-neutral-600 hover:text-accent-500 transition-colors duration-200", children: isMenuOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) })] }), isMenuOpen && (_jsx("div", { className: "lg:hidden py-4 border-t border-neutral-200 animate-fade-in", children: _jsxs("nav", { className: "flex flex-col space-y-3", children: [navigation.map((item) => (_jsx("button", { onClick: () => handleNavClick(item), className: "text-neutral-600 hover:text-accent-500 font-medium py-2 transition-colors duration-200 text-left", children: item.name }, item.name))), _jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-neutral-200", children: [_jsxs("button", { onClick: () => setLanguage(language === 'fr' ? 'wo' : 'fr'), className: "flex items-center space-x-1 text-neutral-600 hover:text-accent-500 transition-colors duration-200", children: [_jsx(Globe, { className: "w-4 h-4" }), _jsx("span", { className: "text-sm font-medium", children: language === 'fr' ? 'FR' : 'WO' })] }), _jsx("button", { className: "btn-accent", children: "Commencer" })] })] }) }))] }) }));
};
export default Header;
//# sourceMappingURL=Header.js.map