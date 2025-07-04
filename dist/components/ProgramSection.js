import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Wallet, Store, Leaf, Settings, Play, Volume2, ChevronRight, Target, Users, TrendingUp, Award } from 'lucide-react';
const ProgramSection = () => {
    const [currentLanguage, setCurrentLanguage] = useState('fr');
    const [playingAudio, setPlayingAudio] = useState(null);
    const pillars = [
        {
            icon: Wallet,
            title: 'FEVEO CASH',
            description: 'Solution de financement innovante pour les GIE avec des taux préférentiels et un accompagnement personnalisé.',
            color: 'bg-primary-500',
            features: ['Micro-crédit accessible', 'Taux préférentiels', 'Accompagnement dédié']
        },
        {
            icon: Store,
            title: 'Grande Distribution',
            description: 'Réseau de distribution étendu pour commercialiser vos produits sur les marchés locaux et internationaux.',
            color: 'bg-success-500',
            features: ['Réseau étendu', 'Marchés locaux', 'Export international']
        },
        {
            icon: Leaf,
            title: 'Production Locale',
            description: 'Soutien à la production agricole durable avec des techniques modernes et respectueuses de l\'environnement.',
            color: 'bg-accent-500',
            features: ['Agriculture durable', 'Techniques modernes', 'Respect environnemental']
        },
        {
            icon: Settings,
            title: 'Transformation',
            description: 'Unités de transformation pour valoriser vos produits agricoles et créer de la valeur ajoutée.',
            color: 'bg-primary-500',
            features: ['Valeur ajoutée', 'Transformation locale', 'Innovation technologique']
        }
    ];
    const platformFeatures = [
        {
            icon: Target,
            title: 'Investissement Organique',
            description: 'Une approche d\'investissement naturelle et durable qui respecte les cycles économiques locaux et favorise la croissance endogène.',
            stats: '85% de rentabilité durable'
        },
        {
            icon: Users,
            title: 'Écosystème Collaboratif',
            description: 'Plateforme qui connecte investisseurs, entrepreneures et partenaires dans un réseau d\'entraide et de développement mutuel.',
            stats: '9 125 GIE connectés'
        },
        {
            icon: TrendingUp,
            title: 'Croissance Inclusive',
            description: 'Modèle économique qui garantit une redistribution équitable des bénéfices et une croissance partagée pour toutes les participantes.',
            stats: '6B FCFA redistribués'
        },
        {
            icon: Award,
            title: 'Impact Social',
            description: 'Mesure et maximise l\'impact social positif de chaque investissement sur les communautés locales et l\'autonomisation féminine.',
            stats: '365K femmes impactées'
        }
    ];
    const content = {
        fr: {
            platformTitle: "Plateforme d'Investissement Économie Organique",
            platformSubtitle: "Une révolution dans l'approche de l'investissement en Afrique",
            platformDescription: "FEVEO 2050 redéfinit l'investissement en Afrique avec une approche organique qui respecte les écosystèmes locaux, favorise l'autonomisation des femmes et génère un impact social durable. Notre plateforme connecte les investisseurs conscients avec des projets porteurs de sens.",
            programTitle: "Programme Projets FEVEO 2050",
            programSubtitle: "Quatre piliers stratégiques pour transformer l'économie africaine",
            programDescription: "Notre programme intégré combine financement, distribution, production et transformation pour créer un écosystème complet d'autonomisation économique. Chaque pilier est conçu pour renforcer les autres et maximiser l'impact collectif.",
            listenAudio: "Écouter en wolof",
            stopAudio: "Arrêter l'audio"
        },
        wo: {
            platformTitle: "Plateforme bu Investissement Économie Organique",
            platformSubtitle: "Benn révolution ci approche bi investissement ci Afrique",
            platformDescription: "FEVEO 2050 dafa wax ci investissement ci Afrique ak benn approche organique bu respecter écosystèmes yu locale, favoriser autonomisation yu jigéen yi ak génerer benn impact social bu durable.",
            programTitle: "Programme Projets FEVEO 2050",
            programSubtitle: "Ñeent piliers stratégiques ngir transformer économie bu Afrique",
            programDescription: "Sunuy programme bu intégré dafa combine financement, distribution, production ak transformation ngir sos benn écosystème bu complet bu autonomisation économique.",
            listenAudio: "Dégg ci wolof",
            stopAudio: "Taxawal audio bi"
        }
    };
    const handleAudioPlay = (audioId) => {
        if (playingAudio === audioId) {
            setPlayingAudio(null);
        }
        else {
            setPlayingAudio(audioId);
            // Ici vous ajouteriez la logique pour jouer l'audio réel
            setTimeout(() => setPlayingAudio(null), 30000); // Simulation de 30 secondes d'audio
        }
    };
    return (_jsx("section", { id: "programme", className: "py-20 bg-neutral-100", children: _jsxs("div", { className: "container-max section-padding", children: [_jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "bg-neutral-50 rounded-full p-1 shadow-sm border border-neutral-200", children: [_jsx("button", { onClick: () => setCurrentLanguage('fr'), className: `px-6 py-2 rounded-full font-medium transition-all duration-200 ${currentLanguage === 'fr'
                                    ? 'bg-accent-500 text-neutral-50 shadow-sm'
                                    : 'text-neutral-600 hover:text-accent-500'}`, children: "Fran\u00E7ais" }), _jsx("button", { onClick: () => setCurrentLanguage('wo'), className: `px-6 py-2 rounded-full font-medium transition-all duration-200 ${currentLanguage === 'wo'
                                    ? 'bg-accent-500 text-neutral-50 shadow-sm'
                                    : 'text-neutral-600 hover:text-accent-500'}`, children: "Wolof" })] }) }), _jsxs("div", { className: "mb-20", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-neutral-900 mb-6", children: content[currentLanguage].platformTitle }), _jsx("p", { className: "text-xl text-accent-600 font-medium mb-4", children: content[currentLanguage].platformSubtitle }), _jsx("div", { className: "flex items-center justify-center gap-4 mb-6", children: _jsx("button", { onClick: () => handleAudioPlay('platform'), className: `flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${playingAudio === 'platform'
                                            ? 'bg-success-500 text-neutral-50 border-success-500'
                                            : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-accent-300'}`, children: playingAudio === 'platform' ? (_jsxs(_Fragment, { children: [_jsx(Volume2, { className: "w-4 h-4 animate-pulse" }), content[currentLanguage].stopAudio] })) : (_jsxs(_Fragment, { children: [_jsx(Play, { className: "w-4 h-4" }), content[currentLanguage].listenAudio] })) }) }), _jsx("p", { className: "text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed", children: content[currentLanguage].platformDescription })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: platformFeatures.map((feature, index) => (_jsx("div", { className: "group", children: _jsxs("div", { className: "card h-full hover:scale-105 transition-all duration-300 border-l-4 border-l-accent-500", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("div", { className: `w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`, children: _jsx(feature.icon, { className: "w-6 h-6 text-neutral-50" }) }), _jsx("div", { className: "text-right", children: _jsx("div", { className: "text-sm font-bold text-success-600", children: feature.stats }) })] }), _jsx("h3", { className: "text-lg font-bold text-neutral-900 mb-3", children: feature.title }), _jsx("p", { className: "text-neutral-600 text-sm leading-relaxed", children: feature.description })] }) }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-neutral-900 mb-6", children: content[currentLanguage].programTitle }), _jsx("p", { className: "text-xl text-success-600 font-medium mb-4", children: content[currentLanguage].programSubtitle }), _jsx("div", { className: "flex items-center justify-center gap-4 mb-6", children: _jsx("button", { onClick: () => handleAudioPlay('program'), className: `flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${playingAudio === 'program'
                                            ? 'bg-success-500 text-neutral-50 border-success-500'
                                            : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-success-300'}`, children: playingAudio === 'program' ? (_jsxs(_Fragment, { children: [_jsx(Volume2, { className: "w-4 h-4 animate-pulse" }), content[currentLanguage].stopAudio] })) : (_jsxs(_Fragment, { children: [_jsx(Play, { className: "w-4 h-4" }), content[currentLanguage].listenAudio] })) }) }), _jsx("p", { className: "text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed", children: content[currentLanguage].programDescription })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: pillars.map((pillar, index) => (_jsx("div", { className: "group hover:scale-105 transition-all duration-300", children: _jsxs("div", { className: "card h-full relative overflow-hidden", children: [_jsx("div", { className: "absolute top-0 right-0 w-20 h-20 bg-accent-100 rounded-full -translate-y-10 translate-x-10 opacity-50" }), _jsx("div", { className: `w-16 h-16 ${pillar.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`, children: _jsx(pillar.icon, { className: "w-8 h-8 text-neutral-50" }) }), _jsx("div", { className: "absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-neutral-50 rounded-full flex items-center justify-center text-sm font-bold", children: index + 1 }), _jsx("h3", { className: "text-xl font-bold text-neutral-900 mb-4", children: pillar.title }), _jsx("p", { className: "text-neutral-600 mb-6 leading-relaxed", children: pillar.description }), _jsx("ul", { className: "space-y-2", children: pillar.features.map((feature, featureIndex) => (_jsxs("li", { className: "flex items-center text-sm text-neutral-500", children: [_jsx(ChevronRight, { className: "w-4 h-4 text-accent-500 mr-2 flex-shrink-0" }), feature] }, featureIndex))) })] }) }, index))) })] }), _jsxs("div", { className: "text-center bg-primary-500 rounded-2xl p-8 text-neutral-50", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Pr\u00EAt \u00E0 rejoindre la r\u00E9volution ?" }), _jsx("p", { className: "text-lg mb-6 opacity-90", children: "D\u00E9couvrez comment FEVEO 2050 peut transformer votre parcours entrepreneurial" }), _jsx("button", { className: "bg-accent-500 hover:bg-accent-600 text-neutral-50 font-semibold px-8 py-4 rounded-lg hover:scale-105 transform transition-all duration-200 shadow-lg", children: "Adh\u00E9rer \u00E0 la plateforme" })] })] }) }));
};
export default ProgramSection;
//# sourceMappingURL=ProgramSection.js.map