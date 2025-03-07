import React from 'react';

const ComparacaoFaturamento = () => {
  const valor2024 = 101188;
  const valor2025 = 125547;
  const crescimento = 24.07;
  
  const barMaxWidth = 300;
  const width2024 = barMaxWidth * 0.8; // 80% do tamanho para 2024
  const width2025 = barMaxWidth; // 100% do tamanho para 2025

  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Crescimento em Fevereiro
      </h2>
      
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col w-full max-w-lg">
          <div className="mb-2 flex justify-between">
            <span className="text-2xl font-bold">Fevereiro 2024</span>
            <span className="text-2xl font-bold text-blue-600">
              R$ {valor2024.toLocaleString()}
            </span>
          </div>
          <div 
            className="bg-blue-500 h-16 rounded-lg" 
            style={{ width: `${width2024}px` }}
          />
          
          <div className="mt-8 mb-2 flex justify-between">
            <span className="text-2xl font-bold">Fevereiro 2025</span>
            <span className="text-2xl font-bold text-blue-800">
              R$ {valor2025.toLocaleString()}
            </span>
          </div>
          <div 
            className="bg-blue-700 h-16 rounded-lg" 
            style={{ width: `${width2025}px` }}
          />
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold mb-2">Crescimento</div>
          <div className="text-5xl font-bold text-green-600">+{crescimento}%</div>
          <div className="mt-4 text-xl text-center max-w-md">
            Um excelente início para 2025, mostrando que estamos no caminho certo!
          </div>
        </div>
      </div>
      
      <div className="mt-10 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-4 text-center text-blue-800">
          O que isto significa?
        </h3>
        <ul className="text-lg space-y-2">
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>Início de ano com crescimento expressivo</span>
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>Mais recursos para investimentos na pousada</span>
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>Perspectiva de um ano ainda melhor que 2024</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComparacaoFaturamento; 