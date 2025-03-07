import React, { useState } from 'react';

const Investimentos = ({ section = "all", showTable = false }) => {
  // State for collapsible table
  const [isTableExpanded, setIsTableExpanded] = useState(false);
  
  // Determine which content to display based on the section prop
  const showStrategic = section === "all" || section === "strategic";
  const showOperational = section === "all" || section === "operational";

  // Investment table data
  const investmentTableData = [
    { categoria: "Segurança", item: "Coletes salva vidas", valor: 1500 },
    { categoria: "Segurança", item: "Perneiras para trilhas", valor: 800 },
    { categoria: "Segurança", item: "Boias Salva Vidas", valor: 500 },
    { categoria: "Comunicação", item: "Radio amador - Longo alcance", valor: 5800 },
    { categoria: "Conforto", item: "Cadeirinhas barcos", valor: 2000 },
    { categoria: "Tecnologia", item: "Starlink", valor: 3000 },
    { categoria: "Ciência cidadã", item: "Câmeras trap", valor: 1100 },
    { categoria: "Tecnologia", item: "Computador pai", valor: 3000 },
    { categoria: "Comunicação", item: "Celular pousada", valor: 2000 },
    { categoria: "Segurança", item: "Portão do Jatobá", valor: 700 },
    { categoria: "Segurança", item: "Portão estrada (mão obra)", valor: 1100 },
    { categoria: "Segurança", item: "Portão estrada madeiras", valor: 700 },
    { categoria: "Mobiliário", item: "Cadeiras Acapulco", valor: 2200 },
    { categoria: "Mobiliário", item: "Espreguiçadeiras", valor: 2700 },
    { categoria: "Logística", item: "Frete móveis de Salvador", valor: 3000 },
    { categoria: "Mobiliário", item: "Cadeiras pretas restaurante", valor: 840 },
    { categoria: "Mobiliário", item: "Cadeiras verdes", valor: 1680 },
    { categoria: "Hospedagem", item: "Melhoria dos apartamentos", valor: 1500 },
    { categoria: "Conservação", item: "Manutenção e pinturas", valor: 2000 },
    { categoria: "Paisagismo", item: "Pedrisco", valor: 700 },
    { categoria: "Maquinário", item: "Laboratório", valor: 4700 },
    { categoria: "Ração", item: "Laboratório", valor: 8000 },
    { categoria: "Manutenção", item: "Manutenção passarela", valor: 4500 },
    { categoria: "Manutenção", item: "Manutenção trilhas", valor: 3750 },
    { categoria: "Manutenção", item: "Manutenção de UHs", valor: 2700 },
    { categoria: "Administração", item: "Cecília 12 meses 2023", valor: 48000 },
    { categoria: "Administração", item: "Cecília 12 meses 2024", valor: 48000 },
    { categoria: "Viagens", item: "Viagem para Itália", valor: 90000 },
    { categoria: "Viagens", item: "Viagem Cecília Japão", valor: 8000 }
  ];

  // Group data by category
  const groupedData = investmentTableData.reduce((acc, item) => {
    if (!acc[item.categoria]) {
      acc[item.categoria] = [];
    }
    acc[item.categoria].push(item);
    return acc;
  }, {});

  // Get categories and calculate totals
  const categories = Object.keys(groupedData);
  const categoryTotals = categories.map(cat => ({
    categoria: cat,
    total: groupedData[cat].reduce((sum, item) => sum + item.valor, 0)
  }));
  const grandTotal = investmentTableData.reduce((sum, item) => sum + item.valor, 0);

  // Toggle table expansion
  const toggleTableExpansion = () => {
    setIsTableExpanded(!isTableExpanded);
  };

  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-lg">
      {showStrategic && (
        <>
          <h2 className="text-4xl font-bold mb-8 text-center text-green-800">
            {section === "strategic" ? "Investimentos Estratégicos" : "Investimentos em Infraestrutura"}
          </h2>

          {/* Principais investimentos estratégicos */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">
              Investimentos de Longo Prazo
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 bg-blue-50 rounded-lg border-2 border-blue-200 shadow">
                <h4 className="text-xl font-bold mb-4 text-blue-800">
                  Energia Solar
                </h4>
                <div className="flex justify-between mb-2">
                  <span className="text-lg">Valor Total:</span>
                  <span className="text-lg font-bold">R$ 82.584,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg">Pago até o momento:</span>
                  <span className="text-lg font-bold text-green-600">R$ 74.615,00</span>
                </div>
                <div className="mt-3 text-gray-600">
                  Investimento em sustentabilidade e redução de custos operacionais a longo prazo
                </div>
              </div>

              <div className="p-5 bg-blue-50 rounded-lg border-2 border-blue-200 shadow">
                <h4 className="text-xl font-bold mb-4 text-blue-800">
                  Terreno da Turbina
                </h4>
                <div className="flex justify-between mb-2">
                  <span className="text-lg">Valor Total:</span>
                  <span className="text-lg font-bold">R$ 150.000,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg">Pago até o momento:</span>
                  <span className="text-lg font-bold text-green-600">R$ 42.500,00</span>
                </div>
                <div className="mt-3 text-gray-600">
                  Aquisição estratégica para expansão futura
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-blue-50 rounded-lg border-2 border-blue-200 shadow">
                <h4 className="text-xl font-bold mb-4 text-blue-800">
                  Veículo para a Pousada
                </h4>
                <div className="flex justify-between mb-2">
                  <span className="text-lg">Valor Total:</span>
                  <span className="text-lg font-bold">R$ 183.000,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg">Pago até o momento:</span>
                  <span className="text-lg font-bold text-green-600">R$ 183.000,00</span>
                </div>
                <div className="mt-3 text-gray-600">
                  Melhorias na logística e operações diárias
                </div>
              </div>

              <div className="p-5 bg-blue-50 rounded-lg border-2 border-blue-200 shadow">
                <h4 className="text-xl font-bold mb-4 text-blue-800">
                  Investimento Total
                </h4>
                <div className="flex justify-between mb-2">
                  <span className="text-lg">Valor Total Investido:</span>
                  <span className="text-xl font-bold text-green-600">R$ 300.115,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg">Valor a Pagar:</span>
                  <span className="text-lg font-bold text-orange-500">R$ 115.469,00</span>
                </div>
                <div className="mt-3 text-gray-600">
                  Investimentos estratégicos que garantem o futuro da pousada
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {showOperational && (
        <>
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
            {section === "operational" ? "Melhorias Operacionais" : "Investimentos em Melhorias"}
          </h2>

          {/* Melhorias na estrutura */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">
              Melhorias na Estrutura da Pousada
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow">
                <h4 className="text-lg font-bold mb-2 text-blue-800">Reforma da Cozinha</h4>
                <p className="font-bold text-green-600 text-xl mb-1">R$ 28.670,00</p>
                <p className="text-gray-600 text-sm">Modernização completa do espaço de preparação das refeições</p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow">
                <h4 className="text-lg font-bold mb-2 text-blue-800">Ar-Condicionado nos Quartos</h4>
                <p className="font-bold text-green-600 text-xl mb-1">R$ 20.142,00</p>
                <p className="text-gray-600 text-sm">Melhoria do conforto para os hóspedes</p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow">
                <h4 className="text-lg font-bold mb-2 text-blue-800">Estrutura para Birdwatching</h4>
                <p className="font-bold text-green-600 text-xl mb-1">R$ 18.560,00</p>
                <p className="text-gray-600 text-sm">Investimento em nosso segmento de maior crescimento</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow">
                <h4 className="text-lg font-bold mb-2 text-blue-800">Melhoria na Internet</h4>
                <p className="font-bold text-green-600 text-xl mb-1">R$ 12.350,00</p>
                <p className="text-gray-600 text-sm">Nova infraestrutura para conexão de qualidade em toda pousada</p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow">
                <h4 className="text-lg font-bold mb-2 text-blue-800">Equipamentos de Cozinha</h4>
                <p className="font-bold text-green-600 text-xl mb-1">R$ 15.780,00</p>
                <p className="text-gray-600 text-sm">Novos equipamentos para melhorar nosso serviço gastronômico</p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-green-500 shadow">
                <h4 className="text-lg font-bold mb-2 text-blue-800">Total Investido em Melhorias</h4>
                <p className="font-bold text-green-600 text-2xl mb-1">R$ 95.502,00</p>
                <p className="text-gray-600 text-sm">Investimentos para melhorar a experiência dos hóspedes</p>
              </div>
            </div>
          </div>

          {/* Detailed Investment Table - Collapsible */}
          {showTable && (
            <div className="mb-10">
              <button 
                onClick={toggleTableExpansion}
                className="w-full p-4 bg-green-50 rounded-lg border border-green-200 text-center mb-4 flex justify-between items-center hover:bg-green-100 transition-colors"
              >
                <span></span>
                <span className="text-xl font-bold text-green-800">
                  {isTableExpanded ? 'Ocultar Detalhamento de Investimentos' : 'Ver Detalhamento Completo de Investimentos'}
                </span>
                <span className="text-2xl text-green-800">
                  {isTableExpanded ? '▲' : '▼'}
                </span>
              </button>
              
              {isTableExpanded && (
                <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-lg border border-gray-200 animate-fadeIn">
                  <h3 className="text-xl font-bold mb-4 text-center text-green-800">
                    Detalhamento Completo de Investimentos
                  </h3>
                  <table className="w-full border-collapse mb-4">
                    <thead>
                      <tr className="bg-green-700 text-white">
                        <th className="p-3 border border-green-600 text-left">Categoria</th>
                        <th className="p-3 border border-green-600 text-left">Item</th>
                        <th className="p-3 border border-green-600 text-right">Valor (R$)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category, catIndex) => (
                        <React.Fragment key={category}>
                          {groupedData[category].map((item, itemIndex) => (
                            <tr key={`${category}-${itemIndex}`} className={catIndex % 2 === 0 ? 'bg-green-50' : ''}>
                              {itemIndex === 0 ? (
                                <td className="p-3 border border-green-300 font-semibold" rowSpan={groupedData[category].length}>
                                  {category}
                                </td>
                              ) : null}
                              <td className="p-3 border border-green-300">{item.item}</td>
                              <td className="p-3 border border-green-300 text-right">{item.valor.toLocaleString()}</td>
                            </tr>
                          ))}
                          <tr className={catIndex % 2 === 0 ? 'bg-green-100' : 'bg-green-100'}>
                            <td className="p-2 border border-green-300 font-bold" colSpan="2">Subtotal {category}</td>
                            <td className="p-2 border border-green-300 text-right font-bold">
                              {categoryTotals.find(c => c.categoria === category).total.toLocaleString()}
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}
                      <tr className="bg-green-700 text-white font-bold">
                        <td className="p-3 border border-green-600" colSpan="2">TOTAL GERAL</td>
                        <td className="p-3 border border-green-600 text-right">{grandTotal.toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 text-green-800">Investimentos Futuros Planejados:</h4>
                    <ul className="list-disc ml-6 space-y-2">
                      <li className="text-gray-800">Estação de Pesquisas - Em planejamento</li>
                      <li className="text-gray-800">Melhorias para recepção de grupos na baixa temporada</li>
                      <li className="text-gray-800">Expansão da infraestrutura para birdwatching</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {section === "all" && (
        <div className="p-6 bg-blue-50 rounded-lg mt-6 text-center">
          <h3 className="text-xl font-bold mb-4 text-blue-800">Investimento Total em 2024</h3>
          <p className="text-3xl font-bold text-green-600 mb-2">R$ 395.617,00</p>
          <p className="text-gray-700">Preparando nossa pousada para um futuro ainda melhor</p>
        </div>
      )}
    </div>
  );
};

export default Investimentos; 