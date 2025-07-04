import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
const Footer = () => {
    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];
    const quickLinks = [
        { name: 'À propos', href: '#' },
        { name: 'Programme', href: '#programme' },
        { name: 'Adhérer', href: '#adherer' },
        { name: 'Investir', href: '#investir' },
        { name: 'Support', href: '#' },
        { name: 'FAQ', href: '#' },
    ];
    const legalLinks = [
        { name: 'Conditions d\'utilisation', href: '#' },
        { name: 'Politique de confidentialité', href: '#' },
        { name: 'Mentions légales', href: '#' },
    ];
    return (_jsx("footer", { className: "bg-neutral-900 text-neutral-50", children: _jsxs("div", { className: "container-max section-padding py-16", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [_jsxs("div", { className: "lg:col-span-1", children: [_jsxs("div", { className: "flex items-center space-x-2 mb-6", children: [_jsx("div", { className: "w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center", children: _jsx("span", { className: "text-neutral-50 font-bold text-xl", children: "F" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold", children: "FEVEO" }), _jsx("p", { className: "text-accent-400 font-medium", children: "2050" })] })] }), _jsx("p", { className: "text-neutral-300 mb-6 leading-relaxed", children: "L'avenir de l'investissement organique en Afrique. Autonomisons ensemble 365 000 femmes entrepreneures." }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((social, index) => (_jsx("a", { href: social.href, className: "w-10 h-10 bg-neutral-800 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-colors duration-200", "aria-label": social.label, children: _jsx(social.icon, { className: "w-5 h-5" }) }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold mb-6", children: "Liens rapides" }), _jsx("ul", { className: "space-y-3", children: quickLinks.map((link, index) => (_jsx("li", { children: _jsx("a", { href: link.href, className: "text-neutral-300 hover:text-accent-400 transition-colors duration-200", children: link.name }) }, index))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold mb-6", children: "Contact" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(MapPin, { className: "w-5 h-5 text-accent-400 flex-shrink-0" }), _jsx("span", { className: "text-neutral-300", children: "Dakar, S\u00E9n\u00E9gal" })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Phone, { className: "w-5 h-5 text-accent-400 flex-shrink-0" }), _jsx("span", { className: "text-neutral-300", children: "+221 XX XXX XX XX" })] }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Mail, { className: "w-5 h-5 text-accent-400 flex-shrink-0" }), _jsx("span", { className: "text-neutral-300", children: "contact@feveo2050.com" })] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold mb-6", children: "Newsletter" }), _jsx("p", { className: "text-neutral-300 mb-4", children: "Restez inform\u00E9 de nos derni\u00E8res actualit\u00E9s et opportunit\u00E9s." }), _jsxs("div", { className: "flex flex-col space-y-3", children: [_jsx("input", { type: "email", placeholder: "Votre email", className: "px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200" }), _jsx("button", { className: "btn-accent", children: "S'abonner" })] })] })] }), _jsx("div", { className: "border-t border-neutral-800 mt-12 pt-8", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [_jsx("p", { className: "text-neutral-400 text-sm", children: "\u00A9 2024 FEVEO 2050. Tous droits r\u00E9serv\u00E9s." }), _jsx("div", { className: "flex flex-wrap gap-6", children: legalLinks.map((link, index) => (_jsx("a", { href: link.href, className: "text-neutral-400 hover:text-accent-400 text-sm transition-colors duration-200", children: link.name }, index))) })] }) })] }) }));
};
export default Footer;
//# sourceMappingURL=Footer.js.map