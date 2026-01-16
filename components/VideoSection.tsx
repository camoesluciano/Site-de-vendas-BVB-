
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-900 rounded-2xl shadow-2xl overflow-hidden aspect-video relative flex items-center justify-center border-4 border-yellow-600/20">
            {/* Placeholder for Video */}
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform shadow-lg">
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Assista ao Vídeo de Apresentação</h3>
              <p className="text-emerald-300">Entenda o método VVV e como ele transformará seu futuro.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <a href="#cta" className="inline-block px-10 py-5 bg-yellow-600 hover:bg-yellow-500 text-white rounded-xl font-black text-xl transition-all transform hover:scale-105 shadow-2xl uppercase tracking-wider">
               Quero me aposentar em até 25 anos
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
