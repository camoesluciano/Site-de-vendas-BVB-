
// Added React import to resolve the "Cannot find namespace 'React'" error when using React.ReactNode.
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PillarItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  metaphor: string;
}

export interface EvolutionLevel {
  name: string;
  range: string;
  description: string;
  height: string;
  color: string;
}
