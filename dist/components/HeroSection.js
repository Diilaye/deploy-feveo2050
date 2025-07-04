import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Play, Users, Calendar, Target, Heart, Lightbulb, X } from 'lucide-react';
const HeroSection = () => {
    const [showVideo, setShowVideo] = useState(false);
    const metrics = [
        { icon: Users, value: '27 650', label: 'GIE attendu', color: 'text-accent-500' },
        { icon: Users, value: '691 250', label: 'Femmes', color: 'text-success-500' },
        { icon: Users, value: '331 800', label: 'Jeunes garçons et filles', color: 'text-accent-500' },
        { icon: Users, value: '82 950', label: 'Personnes ressources adultes', color: 'text-success-500' },
        { icon: Calendar, value: '1 826', label: 'Nombre de jours à investir', color: 'text-accent-500' },
    ];
    const visionMission = [
        {
            icon: Target,
            title: 'Notre Vision',
            description: 'Créer un écosystème d\'investissement organique qui autonomise 365 000 femmes entrepreneures africaines d\'ici 2050.',
            color: 'bg-primary-500'
        },
        {
            icon: Heart,
            title: 'Notre Mission',
            description: 'Faciliter l\'accès au financement et aux marchés pour les GIE féminins à travers une plateforme d\'investissement innovante.',
            color: 'bg-success-500'
        },
        {
            icon: Lightbulb,
            title: 'Nos Projets',
            description: 'Développer 4 piliers stratégiques : FEVEO CASH, Grande Distribution, Production Locale et Transformation.',
            color: 'bg-accent-500'
        }
    ];
    return (_jsxs("section", { id: "accueil", className: "relative min-h-screen", children: [_jsx("div", { className: "absolute inset-0 background-slideshow-enhanced" }), _jsx("div", { className: "absolute inset-0 bg-primary-900/30" }), _jsxs("div", { className: "relative z-10 container-max section-padding py-20", children: [_jsxs("div", { className: "max-w-4xl mx-auto text-center text-neutral-50 mb-20", children: [_jsxs("div", { className: "animate-slide-up", children: [_jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6", children: ["L'avenir de l'investissement en \u00E9conomie", _jsx("span", { className: "block text-accent-400", children: "organique \u00E0 partir du S\u00E9n\u00E9gal" })] }), _jsxs("p", { className: "text-xl md:text-2xl text-neutral-100 mb-8 max-w-3xl mx-auto leading-relaxed", children: ["Rejoignez notre plateforme d'investissements  ", _jsx("span", { className: "font-semibold text-accent-400", children: "\"Femmes vision \u00E9conomie organique 2050\"" })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-16", children: [_jsx("button", { className: "btn-accent text-lg px-8 py-4 hover:scale-105 transform transition-all duration-200", children: "D\u00E9couvrir la plateforme" }), _jsx("button", { onClick: () => setShowVideo(true), className: "btn-secondary bg-neutral-50/10 border-neutral-50/20 text-neutral-50 hover:bg-neutral-50/20 text-lg px-8 py-4 hover:scale-105 transform transition-all duration-200", children: "Voir pr\u00E9sentation vid\u00E9o" })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-8 max-w-4xl mx-auto animate-fade-in", children: metrics.map((metric, index) => (_jsxs("div", { className: "text-center animate-float", style: { animationDelay: `${index * 0.2}s` }, children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-neutral-50/10 backdrop-blur-sm rounded-full mb-4", children: _jsx(metric.icon, { className: `w-8 h-8 ${metric.color}` }) }), _jsx("div", { className: "text-3xl md:text-4xl font-bold mb-2", children: metric.value }), _jsx("div", { className: "text-neutral-200 font-medium", children: metric.label })] }, index))) })] }), _jsxs("div", { className: "max-w-6xl mx-auto mb-20", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-neutral-50 mb-4", children: "Pr\u00E9sentation FEVEO 2050" }), _jsx("p", { className: "text-xl text-neutral-200 max-w-2xl mx-auto", children: "Une plateforme r\u00E9volutionnaire pour l'autonomisation \u00E9conomique des femmes en Afrique" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: visionMission.map((item, index) => (_jsx("div", { className: "group", children: _jsxs("div", { className: "bg-neutral-50/10 backdrop-blur-sm rounded-xl p-6 border border-neutral-50/20 hover:bg-neutral-50/15 transition-all duration-300 h-full", children: [_jsx("div", { className: `w-14 h-14 ${item.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`, children: _jsx(item.icon, { className: "w-7 h-7 text-neutral-50" }) }), _jsx("h3", { className: "text-xl font-bold text-neutral-50 mb-4", children: item.title }), _jsx("p", { className: "text-neutral-200 leading-relaxed", children: item.description })] }) }, index))) })] }), _jsx("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce", children: _jsx("div", { className: "w-6 h-10 border-2 border-neutral-50/30 rounded-full flex justify-center", children: _jsx("div", { className: "w-1 h-3 bg-neutral-50/50 rounded-full mt-2 animate-pulse" }) }) })] }), showVideo && (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/80 backdrop-blur-sm", children: _jsxs("div", { className: "relative w-full max-w-4xl mx-4", children: [_jsx("button", { onClick: () => setShowVideo(false), className: "absolute -top-12 right-0 text-neutral-50 hover:text-neutral-300 transition-colors duration-200", children: _jsx(X, { className: "w-8 h-8" }) }), _jsx("div", { className: "bg-neutral-50 rounded-xl overflow-hidden shadow-2xl", children: _jsx("div", { className: "aspect-video bg-neutral-900 flex items-center justify-center", children: _jsxs("div", { className: "text-center text-neutral-50", children: [_jsx(Play, { className: "w-16 h-16 mx-auto mb-4 opacity-50" }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: "Vid\u00E9o Tutoriel FEVEO 2050" }), _jsx("p", { className: "text-neutral-300 max-w-md mx-auto", children: "D\u00E9couvrez notre plateforme d'investissement en \u00E9conomie organique, le parcours d'adh\u00E9sion et la souscription aux parts sociales." }), _jsx("button", { onClick: () => setShowVideo(false), className: "mt-6 btn-accent", children: "Fermer la vid\u00E9o" })] }) }) })] }) }))] }));
};
export default HeroSection;
//# sourceMappingURL=HeroSection.js.map