
import React from 'react';
import { FAQItem, PillarItem, EvolutionLevel } from './types';

export const COLORS = {
  primary: '#03264C', // Deep Blue
  secondary: '#C89E4B', // Classic Gold
  text: '#FFFFFF', // White
};

export const PILLARS: PillarItem[] = [
  {
    title: "1. Planejamento Financeiro Integrado",
    metaphor: "Desenhando a Planta da Sua Vida",
    description: "Nesta primeira etapa, vamos definir as diretrizes da sua vida financeira. Pense nisso como desenhar a planta da sua casa dos sonhos. Cada detalhe é importante, desde a fundação até o telhado. Aqui, você visualizará a vida que deseja ter no futuro e planejará suas necessidades de investimento até a aposentadoria.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.491V6a2 2 0 012-2h2.28a2 2 0 001.414-.586l1.293-1.293a2 2 0 012.828 0l1.293 1.293a2 2 0 001.414.586H17a2 2 0 012 2v9.491a2 2 0 01-1.553 1.785L12 20l-3 0z" />
      </svg>
    )
  },
  {
    title: "2. Gerenciando Suas Finanças",
    metaphor: "Construindo a Estrutura",
    description: "Com a planta em mãos, é hora de começar a construção. Nesta fase, você gerenciará suas finanças de forma eficiente, traçando um plano anual para controlar tudo que entra e sai do seu caixa. Assim como na construção de uma casa, onde você compra materiais e supervisiona o progresso, aqui você direcionará seus recursos de maneira estratégica.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "3. Aportando no Mercado Financeiro",
    metaphor: "Decorando e Mobiliando Seu Futuro",
    description: "Com a estrutura da casa pronta, chega a parte mais emocionante. No contexto financeiro, isso significa desvendar o mercado financeiro e entender como ele pode trabalhar a seu favor. Vamos explorar a mentalidade necessária para ter sucesso e minimizar os riscos, além de conhecer os diversos tipos de ativos financeiros.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const EVOLUTION_LEVELS: EvolutionLevel[] = [
  {
    name: "Capivara",
    range: "Até 6x RPN",
    description: "Neste estágio inicial, seus investimentos são mais simples e focados em segurança e liquidez. É o momento de construir uma base sólida.",
    height: "20%",
    color: "bg-[#0A3D6E]"
  },
  {
    name: "Candidato a Mestre",
    range: "6 a 12x RPN",
    description: "Aqui, você começa a diversificar seus investimentos e introduzir novas classes de ativos. O conhecimento permite explorar mais riscos.",
    height: "40%",
    color: "bg-[#10528F]"
  },
  {
    name: "Mestre",
    range: "12 a 24x RPN",
    description: "Com uma carteira nacional completa, você já possui uma boa diversificação e está preparado para explorar novas fronteiras.",
    height: "60%",
    color: "bg-[#1868B0]"
  },
  {
    name: "Mestre Internacional",
    range: "24x RPN até Renda Plena",
    description: "Neste nível, você começa a montar uma carteira com ativos internacionais, buscando oportunidades globais para crescimento.",
    height: "80%",
    color: "bg-[#1E7ED1]"
  },
  {
    name: "Grande Mestre",
    range: "Independência Financeira",
    description: "Seu patrimônio gera renda suficiente para cobrir suas despesas. É o ápice da jornada financeira. Você é dono do seu tempo.",
    height: "100%",
    color: "bg-[#C89E4B]"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Preciso ter muito dinheiro para começar?",
    answer: "Não. O método foca justamente em como organizar suas finanças para que você possa começar a aportar com o que tem hoje, focando na consistência e no crescimento gradual."
  },
  {
    question: "O que é RPN?",
    answer: "RPN significa Renda Pessoal Necessária. É o valor mensal que você precisa para manter o padrão de vida que deseja hoje e no futuro."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Você tem 30 dias de garantia incondicional. Se implementar e não ver resultados, oferecemos 1 mês de mentoria gratuita. Se ainda assim não estiver satisfeito, devolvemos 100% do seu dinheiro."
  },
  {
    question: "Serve para quem tem renda variável?",
    answer: "Sim! O Planejamento Financeiro Integrado foi desenhado especificamente para lidar com as flutuações de caixa, trazendo segurança mesmo em meses de menor renda."
  }
];