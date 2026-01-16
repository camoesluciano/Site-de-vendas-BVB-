
import React from 'react';
import { EVOLUTION_LEVELS } from '../constants';

const EvolutionChart: React.FC = () => {
  return (
    <section className="py-24 bg-[#03264C] text-white overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="bg-[#0A3D6E] text-[#C89E4B] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block shadow-sm border border-white/10">Jornada Patrimonial</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">A Escada da Evolução</h2>
          <p className="text-white/80 max-w-3xl mx-auto text-xl leading-relaxed">
            A evolução financeira não é linear, ela acontece em níveis. Entenda exatamente onde você está hoje e qual o próximo degrau para a sua liberdade.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-end">
          {/* Staircase Graphic */}
          <div className="w-full lg:w-3/5 h-[500px] flex items-end gap-3 md:gap-5 px-4 bg-[#021A33]/40 rounded-3xl p-6 border border-white/5 shadow-inner">
            {EVOLUTION_LEVELS.map((level, index) => (
              <div 
                key={index} 
                className="flex-1 flex flex-col justify-end group relative"
                style={{ height: level.height }}
              >
                {/* Level Label */}
                <div className="absolute top-[-50px] left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-2 whitespace-nowrap text-sm font-black text-[#03264C] bg-[#C89E4B] px-2 py-1 rounded shadow-lg z-20">
                  {level.range}
                </div>
                
                <div className={`${level.color} w-full rounded-t-2xl transition-all group-hover:brightness-125 group-hover:scale-x-105 group-hover:shadow-[0_0_40px_rgba(200,158,75,0.2)] border-x border-t border-white/10 flex flex-col items-center justify-center p-3 cursor-pointer`}>
                   <div className="rotate-[-90deg] md:rotate-0 text-[10px] md:text-sm font-black uppercase text-white tracking-tighter text-center drop-shadow-md">
                     {level.name}
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Details List */}
          <div className="w-full lg:w-2/5 space-y-4">
            {EVOLUTION_LEVELS.map((level, index) => (
              <div key={index} className="p-6 bg-[#0A3D6E]/30 rounded-2xl border border-white/5 hover:border-[#C89E4B]/50 shadow-sm hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#021A33] text-[#C89E4B] font-black rounded-xl group-hover:bg-[#C89E4B] group-hover:text-[#03264C] transition-colors border border-white/10">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-black text-white text-xl mb-1 uppercase tracking-tight">
                      {level.name}
                    </h4>
                    <p className="text-xs font-bold text-[#C89E4B] mb-3 tracking-widest uppercase">{level.range}</p>
                    <p className="text-white/70 text-base leading-snug">{level.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionChart;