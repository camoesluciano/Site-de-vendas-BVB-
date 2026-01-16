
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#C89E4B] transition-colors group"
      >
        <span className="text-xl font-bold text-white group-hover:text-[#C89E4B]">{question}</span>
        <svg 
          className={`w-6 h-6 transform transition-transform text-[#C89E4B]/50 ${isOpen ? 'rotate-180 text-[#C89E4B]' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-white/70 text-lg leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-[#03264C]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
          <p className="text-[#C89E4B] font-medium">Tudo o que você precisa saber antes de dar o próximo passo.</p>
        </div>
        
        <div className="bg-[#021A33]/40 rounded-3xl p-8 shadow-xl border border-white/5 backdrop-blur-sm">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;