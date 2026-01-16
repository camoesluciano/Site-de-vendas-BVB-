
import React from 'react';
import { PILLARS } from '../constants';

const Pillars: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A3D6E]/30 border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#C89E4B] font-bold uppercase tracking-widest text-sm mb-4 block">O Método Infalível</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">A Estrutura do Seu Sucesso: PGA</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Imagine que você está prestes a construir a casa dos seus sonhos. Cada etapa desse processo é crucial para garantir um futuro próspero.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, index) => (
            <div key={index} className="bg-[#021A33]/50 p-8 rounded-3xl border border-white/5 hover:border-[#C89E4B]/50 transition-all hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C89E4B]/5 rounded-bl-full"></div>
              
              <div className="w-16 h-16 bg-[#03264C] rounded-2xl flex items-center justify-center text-[#C89E4B] mb-8 group-hover:bg-[#C89E4B] group-hover:text-[#03264C] transition-all shadow-lg border border-white/5">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-[#C89E4B] font-bold mb-6 italic border-l-2 border-[#C89E4B]/30 pl-3">"{pillar.metaphor}"</p>
              <p className="text-white/80 leading-relaxed text-lg">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;