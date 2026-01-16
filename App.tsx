import React from 'react';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import EvolutionChart from './components/EvolutionChart';
import Guarantee from './components/Guarantee';
import About from './components/About';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#03264C] text-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-[#03264C]/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-black text-white flex items-center gap-2">
            <span className="w-9 h-9 bg-[#C89E4B] rounded-lg flex items-center justify-center text-[#03264C] font-serif italic shadow-sm">B</span>
            <span className="tracking-tight">BVB<span className="text-[#C89E4B]"> Finanças</span></span>
          </div>
          <a href="#cta-main" className="hidden md:block px-6 py-2 bg-[#C89E4B] hover:bg-[#B78E3B] text-white rounded-full font-bold text-sm transition-all shadow-md">
            Garanta sua Vaga
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Pillars />
        <EvolutionChart />
        <About />
        <Guarantee />
        
        <div id="cta-main" className="py-24 bg-[#0A3D6E]/50 text-center border-y border-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">Sua jornada rumo à <br/><span className="text-[#C89E4B] italic">Independência Financeira</span> começa aqui.</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Assuma o controle total do seu patrimônio com uma estratégia desenhada para vencer no longo prazo.
            </p>
            <a href="#" className="inline-block px-12 py-6 bg-[#C89E4B] hover:bg-[#B78E3B] text-white rounded-2xl font-black text-2xl transition-all transform hover:scale-105 shadow-2xl uppercase tracking-tighter border-b-4 border-[#A67E2B]">
              Quero me aposentar em até 25 anos
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-[#C89E4B] font-bold opacity-80 uppercase text-xs tracking-widest">
               <span className="flex items-center gap-2 text-white">✓ Acesso Vitalício</span>
               <span className="flex items-center gap-2 text-white">✓ Suporte Premium</span>
               <span className="flex items-center gap-2 text-white">✓ Mentorias Mensais</span>
            </div>
          </div>
        </div>

        <FAQ />
      </main>

      <footer className="bg-[#021A33] text-white/60 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-black text-white mb-6">
            BVB<span className="text-[#C89E4B]"> Finanças</span>
          </div>
          <p className="mb-10 max-w-2xl mx-auto text-sm leading-relaxed text-white/50">
            Aviso Legal: Investimentos em ativos financeiros envolvem riscos. O desempenho passado não garante resultados futuros. As informações aqui contidas são para fins educacionais e não constituem recomendação direta de compra ou venda.
          </p>
          <div className="flex justify-center gap-8 mb-10 text-xs font-bold uppercase tracking-widest text-[#C89E4B]">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Central de Ajuda</a>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50 text-white">
             <p>&copy; {new Date().getFullYear()} BVB Finanças. Todos os direitos reservados.</p>
             <p>Feito com excelência para o seu futuro.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;