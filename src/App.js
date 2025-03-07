import React, { useState, useEffect, useCallback } from 'react';
import GraficoFaturamento from './components/GraficoFaturamento';
import ComparacaoFaturamento from './components/ComparacaoFaturamento';
import AltaTemporada from './components/AltaTemporada';
import HospvsDayuse from './components/HospvsDayuse';
import AltaBirdwatching from './components/Alta&Birdwatching';
import ConclusaoPerspectivas from './components/ConclusaoPerspectivas';
import ResultadosPousada from './components/ResultadosPousada';
import Investimentos from './components/Investimentos';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // 1. Introduction & Context (We start with a broader picture)
    { component: <GraficoFaturamento />, title: "Panorama Financeiro 2024" },
    { component: <ComparacaoFaturamento />, title: "Evolução do Faturamento" },
    
    // 2. Analysis of Key Drivers (Diving into what made the success)
    { component: <AltaTemporada />, title: "Alta Temporada: Nossa Força" },
    
    // Birdwatching as a full slide for better visibility
    { component: <AltaBirdwatching displayMode="fullScreen" />, title: "O Potencial do Birdwatching" },
    
    // Hospedagem vs Day Use also as a full slide for better chart visibility
    { component: <HospvsDayuse displayMode="fullScreen" />, title: "Hospedagem vs Day Use" },
    
    // 3. Results & Achievements (Now we celebrate the results)
    { component: <ResultadosPousada />, title: "Resultados Alcançados" },
    
    // 4. Investment & Future - Split into two slides for better detail visibility
    { component: <Investimentos section="strategic" />, title: "Investimentos Estratégicos" },
    { component: <Investimentos section="operational" showTable={true} />, title: "Melhorias Operacionais" },
    
    // 5. Conclusion & Future Vision
    { component: <ConclusaoPerspectivas />, title: "Conclusão e Perspectivas" }
  ];

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }, [slides.length]);
  
  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        if (currentSlide < slides.length - 1) {
          goToNextSlide();
        }
      } else if (event.key === 'ArrowLeft') {
        if (currentSlide > 0) {
          goToPrevSlide();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, slides.length, goToNextSlide, goToPrevSlide]); // Added missing dependencies

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <header className="mb-6 relative">
          <div className="absolute top-0 left-0">
            <img 
              src={`${process.env.PUBLIC_URL}/Logo Jd Amazonia.png`}
              alt="Logo Jardim Amazônia" 
              className="h-24 w-auto"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-2">Pousada Jardim Amazônia</h1>
            <h2 className="text-2xl text-blue-700">Relatório de Desempenho Financeiro</h2>
          </div>
        </header>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-7xl">
            {slides[currentSlide].component}
          </div>
          
          <div className="flex justify-between w-full max-w-7xl mt-6">
            <button 
              onClick={goToPrevSlide}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              disabled={currentSlide === 0}
            >
              Anterior
            </button>
            
            <div className="text-center">
              <span className="text-lg font-bold">
                {currentSlide + 1} / {slides.length}
              </span>
              <p className="text-gray-600">{slides[currentSlide].title}</p>
            </div>
            
            <button 
              onClick={goToNextSlide}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              disabled={currentSlide === slides.length - 1}
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
