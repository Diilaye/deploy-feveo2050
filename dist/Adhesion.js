import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import AdhesionForm from './components/AdhesionForm';
const Adhesion = ({ onNavigate }) => {
    const [showFullForm, setShowFullForm] = useState(false);
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        region: '',
        secteur: ''
    });
    const [errors, setErrors] = useState({});
    const regions = [
        'Dakar', 'Thiès', 'Saint-Louis', 'Diourbel', 'Kaolack',
        'Tambacounda', 'Kolda', 'Ziguinchor', 'Fatick', 'Kaffrine',
        'Kédougou', 'Louga', 'Matam', 'Sédhiou'
    ];
    const secteurs = [
        'Agriculture', 'Élevage', 'Pêche', 'Artisanat', 'Commerce',
        'Transformation alimentaire', 'Textile', 'Services', 'Technologie'
    ];
    const validateForm = () => {
        const newErrors = {};
        if (!formData.nom.trim())
            newErrors.nom = 'Le nom est requis';
        if (!formData.email.trim())
            newErrors.email = 'L\'email est requis';
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Email invalide';
        if (!formData.telephone.trim())
            newErrors.telephone = 'Le téléphone est requis';
        if (!formData.region)
            newErrors.region = 'La région est requise';
        if (!formData.secteur)
            newErrors.secteur = 'Le secteur est requis';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Formulaire soumis:', formData);
            // Ici, vous ajouteriez la logique de soumission
        }
    };
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };
    if (showFullForm) {
        return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(Header, { onNavigate: onNavigate }), _jsx(AdhesionForm, { onBack: () => setShowFullForm(false) }), _jsx(Footer, {})] }));
    }
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(Header, { onNavigate: onNavigate }), _jsx("main", { className: "flex-grow", children: _jsx("section", { className: "py-16 background-slideshow", children: _jsx("div", { className: "container-max section-padding", children: _jsxs("div", { className: "max-w-4xl mx-auto bg-neutral-50/90 backdrop-blur-sm p-8 rounded-xl shadow-lg", children: [_jsx("div", { className: "flex items-center mb-6", children: _jsxs("button", { onClick: () => onNavigate('home'), className: "flex items-center text-neutral-600 hover:text-accent-500 transition-colors duration-200", children: [_jsx(ArrowLeft, { className: "w-5 h-5 mr-2" }), "Retour \u00E0 l'accueil"] }) }), _jsxs("div", { className: "text-center mb-12", children: [_jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-neutral-900 mb-6", children: ["Rejoignez la", _jsx("span", { className: "block text-accent-500", children: "FEVEO 2050" })] }), _jsx("p", { className: "text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed", children: "Devenez membre de notre plateforme d'investissement en \u00E9conomie organique et participez \u00E0 la transformation de l'agriculture au S\u00E9n\u00E9gal" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [_jsxs("div", { className: "card hover:scale-105 transition-all duration-300", children: [_jsx("h3", { className: "text-2xl font-bold text-neutral-900 mb-4", children: "Avantages pour les GIE" }), _jsxs("ul", { className: "space-y-3 text-neutral-700", children: [_jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "inline-block w-4 h-4 bg-accent-500 rounded-full mt-1.5 mr-3" }), _jsx("span", { children: "Acc\u00E8s \u00E0 des financements pour vos projets agricoles" })] }), _jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "inline-block w-4 h-4 bg-accent-500 rounded-full mt-1.5 mr-3" }), _jsx("span", { children: "Formation et accompagnement technique" })] }), _jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "inline-block w-4 h-4 bg-accent-500 rounded-full mt-1.5 mr-3" }), _jsx("span", { children: "Int\u00E9gration dans notre r\u00E9seau de distribution" })] }), _jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "inline-block w-4 h-4 bg-accent-500 rounded-full mt-1.5 mr-3" }), _jsx("span", { children: "Participation aux b\u00E9n\u00E9fices de la plateforme" })] })] })] }), _jsxs("div", { className: "card hover:scale-105 transition-all duration-300", children: [_jsx("h3", { className: "text-2xl font-bold text-neutral-900 mb-4", children: "Comment adh\u00E9rer" }), _jsxs("ul", { className: "space-y-3 text-neutral-700", children: [_jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "inline-block w-6 h-6 bg-primary-500 rounded-full text-white text-center font-bold mt-0.5 mr-3", children: "1" }), _jsx("span", { children: "Constituez votre GIE avec au minimum 5 membres" })] }), _jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "inline-block w-6 h-6 bg-primary-500 rounded-full text-white text-center font-bold mt-0.5 mr-3", children: "2" }), _jsx("span", { children: "Remplissez le formulaire d'adh\u00E9sion ci-dessous" })] }), _jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "inline-block w-6 h-6 bg-primary-500 rounded-full text-white text-center font-bold mt-0.5 mr-3", children: "3" }), _jsx("span", { children: "R\u00E9glez les frais d'adh\u00E9sion (20 000 FCFA)" })] }), _jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "inline-block w-6 h-6 bg-primary-500 rounded-full text-white text-center font-bold mt-0.5 mr-3", children: "4" }), _jsx("span", { children: "Recevez votre confirmation d'adh\u00E9sion" })] })] })] })] }), _jsx("div", { className: "max-w-2xl mx-auto", children: _jsxs("div", { className: "card", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h3", { className: "text-2xl font-bold text-neutral-900 mb-2", children: "Commencez votre adh\u00E9sion" }), _jsx("p", { className: "text-neutral-600", children: "Remplissez ce formulaire pour d\u00E9marrer le processus" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-neutral-700 mb-2", children: "Nom du GIE *" }), _jsx("input", { type: "text", value: formData.nom, onChange: (e) => handleInputChange('nom', e.target.value), className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200 ${errors.nom ? 'border-red-300' : 'border-neutral-300'}`, placeholder: "Nom de votre GIE" }), errors.nom && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.nom })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-neutral-700 mb-2", children: "Email *" }), _jsx("input", { type: "email", value: formData.email, onChange: (e) => handleInputChange('email', e.target.value), className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200 ${errors.email ? 'border-red-300' : 'border-neutral-300'}`, placeholder: "votre@email.com" }), errors.email && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-neutral-700 mb-2", children: "T\u00E9l\u00E9phone *" }), _jsx("input", { type: "tel", value: formData.telephone, onChange: (e) => handleInputChange('telephone', e.target.value), className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200 ${errors.telephone ? 'border-red-300' : 'border-neutral-300'}`, placeholder: "+221 XX XXX XX XX" }), errors.telephone && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.telephone })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-neutral-700 mb-2", children: "R\u00E9gion *" }), _jsxs("select", { value: formData.region, onChange: (e) => handleInputChange('region', e.target.value), className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200 ${errors.region ? 'border-red-300' : 'border-neutral-300'}`, children: [_jsx("option", { value: "", children: "S\u00E9lectionnez votre r\u00E9gion" }), regions.map((region) => (_jsx("option", { value: region, children: region }, region)))] }), errors.region && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.region })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-neutral-700 mb-2", children: "Secteur d'activit\u00E9 *" }), _jsxs("select", { value: formData.secteur, onChange: (e) => handleInputChange('secteur', e.target.value), className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200 ${errors.secteur ? 'border-red-300' : 'border-neutral-300'}`, children: [_jsx("option", { value: "", children: "S\u00E9lectionnez votre secteur" }), secteurs.map((secteur) => (_jsx("option", { value: secteur, children: secteur }, secteur)))] }), errors.secteur && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.secteur })] }), _jsxs("div", { className: "flex items-center space-x-3 p-4 bg-success-50 rounded-lg", children: [_jsx("div", { className: "w-5 h-5 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0", children: _jsx("span", { className: "text-white text-xs", children: "\u2713" }) }), _jsx("p", { className: "text-sm text-success-700", children: "En soumettant ce formulaire, vous acceptez nos conditions d'utilisation et notre politique de confidentialit\u00E9." })] }), _jsxs("div", { className: "flex space-x-4", children: [_jsx("button", { type: "submit", className: "flex-1 btn-secondary text-lg py-4 hover:scale-105 transform transition-all duration-200", children: "Pr\u00E9-inscription rapide" }), _jsx("button", { type: "button", onClick: () => setShowFullForm(true), className: "flex-1 btn-accent text-lg py-4 hover:scale-105 transform transition-all duration-200", children: "Formulaire complet d'adh\u00E9sion" })] })] })] }) }), _jsxs("div", { className: "mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100", children: [_jsx("h3", { className: "text-xl font-bold text-primary-900 mb-4", children: "Besoin d'aide pour votre adh\u00E9sion ?" }), _jsx("p", { className: "text-primary-700 mb-4", children: "Notre \u00E9quipe est disponible pour vous accompagner dans votre d\u00E9marche d'adh\u00E9sion. N'h\u00E9sitez pas \u00E0 nous contacter." }), _jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "font-medium text-primary-800 mr-2", children: "T\u00E9l\u00E9phone:" }), _jsx("span", { className: "text-primary-700", children: "+221 XX XXX XX XX" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "font-medium text-primary-800 mr-2", children: "Email:" }), _jsx("span", { className: "text-primary-700", children: "adhesion@feveo2050.sn" })] })] })] })] }) }) }) }), _jsx(Footer, {})] }));
};
export default Adhesion;
//# sourceMappingURL=Adhesion.js.map