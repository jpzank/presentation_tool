import React from 'react';

function ResultadosPousada() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">NOSSAS CONQUISTAS</h2>
        
        <div className="mb-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Faturamento Total em 2024</h3>
          <p className="text-5xl font-bold text-green-600 mb-2">R$ 1.524.979,00</p>
          <p className="text-lg text-gray-700 italic">O resultado de uma estratégia bem executada</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">MELHORES MESES DE 2024</h3>
            <div className="mb-4">
              <p className="text-lg font-semibold">1. SETEMBRO</p>
              <p className="text-2xl font-bold text-green-600">R$ 273.948,00</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">2. JULHO</p>
              <p className="text-2xl font-bold text-green-600">R$ 202.292,00</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">3. AGOSTO</p>
              <p className="text-2xl font-bold text-green-600">R$ 172.265,00</p>
            </div>
            <p className="text-md italic text-gray-700 mt-4">Nossa alta temporada foi excepcional!</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">CRESCIMENTO EM FEVEREIRO 2025</h3>
            <div className="mb-3">
              <p className="text-lg font-semibold">FEVEREIRO 2024</p>
              <p className="text-xl font-bold text-blue-600">R$ 101.188,00</p>
            </div>
            <div className="mb-3">
              <p className="text-lg font-semibold">FEVEREIRO 2025</p>
              <p className="text-xl font-bold text-green-600">R$ 125.547,00</p>
            </div>
            <div className="mb-3">
              <p className="text-lg font-semibold">CRESCIMENTO</p>
              <p className="text-xl font-bold text-green-600">+24%</p>
            </div>
            <p className="text-md italic text-gray-700 mt-4">Começamos 2025 com ótimos resultados!</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">O QUE NOS TROUXE ATÉ AQUI</h3>
            <ul className="list-disc pl-5 space-y-3 text-left">
              <li><span className="font-semibold">ESTRATÉGIA DE ALTA TEMPORADA</span> bem executada</li>
              <li><span className="font-semibold">EXPANSÃO DO BIRDWATCHING</span> como segmento estratégico</li>
              <li><span className="font-semibold">EQUILÍBRIO ENTRE HOSPEDAGEM E DAY USE</span> maximizando receitas</li>
              <li><span className="font-semibold">INVESTIMENTOS ESTRATÉGICOS</span> pavimentando o futuro</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultadosPousada; 