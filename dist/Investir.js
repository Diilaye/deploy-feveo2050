import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InvestmentSection from './components/InvestmentSection';
const Investir = () => {
    return (_jsx("main", { className: "min-h-screen bg-neutral-100", children: _jsxs("div", { className: "container-max mx-auto py-12", children: [_jsxs("div", { className: "flex flex-col items-center mb-8", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", alt: "Investir ensemble", className: "w-40 h-40 object-cover rounded-full shadow-lg mb-4 animate-fade-in", style: { animation: 'fadeIn 1.2s' } }), _jsx("h1", { className: "text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-accent-500 via-primary-500 to-success-500 bg-clip-text text-transparent animate-gradient-move", children: "Investir pour l\u2019avenir" }), _jsx("p", { className: "text-xl text-neutral-700 max-w-2xl text-center mb-6 animate-fade-in", style: { animationDelay: '0.5s', animationFillMode: 'both' }, children: "\u00AB\u00A0Chaque part investie aujourd\u2019hui construit l\u2019ind\u00E9pendance \u00E9conomique de demain. Rejoignez le mouvement et faites grandir l\u2019impact des femmes entrepreneures africaines\u00A0!\u00A0\u00BB" })] }), _jsx(InvestmentSection, {}), _jsx("style", { children: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: none; }
          }
          .animate-fade-in {
            animation: fadeIn 1.2s;
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradientMove 3s linear infinite alternate;
          }
        ` })] }) }));
};
export default Investir;
//# sourceMappingURL=Investir.js.map