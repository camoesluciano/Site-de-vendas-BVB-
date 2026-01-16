
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-[#03264C]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-[#021A33]/60 rounded-3xl p-8 md:p-16 shadow-2xl border-t-8 border-[#C89E4B] relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-[#C89E4B]/10 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="w-48 h-48 flex-shrink-0 bg-[#0A3D6E] p-4 rounded-3xl border border-white/5">
               <img 
                 src="https://img.icons8.com/color/240/checked-user-male--v1.png" 
                 alt="Garantia" 
                 className="w-full h-full object-contain filter drop-shadow-xl"
               />
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sua Segurança é Nossa Prioridade</h2>
              <div className="space-y-4 text-lg text-white/90 leading-relaxed">
                <p>
                  Você tem <strong>30 dias</strong> para implementar o método completamente.
                </p>
                <div className="p-4 bg-[#03264C]/50 rounded-lg border-l-4 border-[#C89E4B]">
                  <p className="text-white">
                    Se não obtiver resultados, oferecemos uma <strong>mentoria gratuita de 1 mês</strong>, com um acompanhamento especializado para ajustar sua rota.
                  </p>
                </div>
                <p>
                  Caso ainda assim não haja resultados palpáveis ou você não esteja satisfeito, <strong>devolvemos 100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;