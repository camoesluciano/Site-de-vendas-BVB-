import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A3D6E]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="relative">
                <div className="absolute -inset-4 bg-[#C89E4B]/20 blur-2xl rounded-3xl -z-10"></div>
                <img 
                src="https://picsum.photos/seed/expert/600/800" 
                alt="Especialista BVB Finanças" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border-b-8 border-[#C89E4B] w-full"
                />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-[#C89E4B] font-bold uppercase tracking-widest text-sm mb-4 block">O Especialista por trás do método</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Especialista BVB Finanças</h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                Com mais de 15 anos de experiência no mercado financeiro e gestão patrimonial, decidi consolidar princípios milenares de riqueza com as ferramentas modernas de investimento através da BVB Finanças.
              </p>
              <p>
                Minha missão é democratizar o acesso à segurança financeira, provando que qualquer pessoa, independentemente da sua renda atual, pode trilhar o caminho até se tornar um Grande Mestre do seu próprio destino.
              </p>
              <p>
                Este não é um curso sobre "ficar rico rápido", mas sim sobre construir uma estrutura inabalável que suporte seus sonhos por décadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;