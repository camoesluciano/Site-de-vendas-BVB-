
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#03264C] text-white border-b border-white/5">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#C89E4B] blur-[120px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-500 blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block px-4 py-1 mb-8 rounded-full bg-[#0A3D6E] border border-white/10 text-[#C89E4B] text-sm font-bold tracking-wider uppercase shadow-lg">
          Planos que atravessam gerações
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto text-white">
          Descubra como criar um <span className="text-[#C89E4B] underline decoration-[#C89E4B]/30">plano financeiro completo</span> através de princípios milenares.
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
          Veja quais são os 3 pilares fundamentais para uma estruturação financeira completa que lhe darão segurança e consistência para alcançar o que você quiser em sua vida.
        </p>

        {/* Integrated Video Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-[#021A33] rounded-2xl shadow-2xl overflow-hidden aspect-video relative flex items-center justify-center border-8 border-[#0A3D6E] ring-1 ring-[#C89E4B]/20 group cursor-pointer transition-transform hover:scale-[1.01]">
            <div className="absolute inset-0 bg-[#03264C]/40 group-hover:bg-[#03264C]/20 transition-colors z-0"></div>
            {/* Video Placeholder Content */}
            <div className="text-center p-8 relative z-10">
              <div className="w-24 h-24 bg-[#C89E4B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(200,158,75,0.6)]">
                <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-xl">Assista agora</h3>
              <p className="text-[#C89E4B] font-semibold italic drop-shadow-md">Entenda o método e mude sua história hoje.</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#cta-main" className="px-12 py-5 bg-[#C89E4B] hover:bg-[#B78E3B] text-white rounded-xl font-black text-xl transition-all transform hover:scale-105 shadow-2xl border-b-4 border-[#A67E2B] uppercase tracking-wide">
            Quero me aposentar em até 25 anos
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-white/60 font-bold uppercase text-xs tracking-widest">
           <svg className="w-5 h-5 text-[#C89E4B]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
           Garantia Incondicional de 30 Dias
        </div>
      </div>
    </section>
  );
};

export default Hero;