import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HospvsDayuse = ({ displayMode = "normal" }) => {
  // Determine if this is fullscreen mode
  const isFullScreen = displayMode === "fullScreen";
  
  // Dados de faturamento
  const dadosFaturamento = [
    { ano: '2016', hospedagem: 429213, dayUse: 342526, total: 771739 },
    { ano: '2017', hospedagem: 484933, dayUse: 341326, total: 826259 },
    { ano: '2018', hospedagem: 610763, dayUse: 450995, total: 1061758 },
    { ano: '2019', hospedagem: 691705, dayUse: 522504, total: 1214209 },
    { ano: '2020', hospedagem: 226463, dayUse: 0, total: 226463 },
    { ano: '2021', hospedagem: 966670, dayUse: 0, total: 966670 },
    { ano: '2022', hospedagem: 1410473, dayUse: 0, total: 1410473 },
    { ano: '2023', hospedagem: 1398910, dayUse: 0, total: 1398910 },
    { ano: '2024', hospedagem: 1524979, dayUse: 0, total: 1524979 }
  ];
  
  // Dados de custos de funcionários
  const dadosCustos = [
    { nome: 'Modelo Antigo (Day-Use + Hospedagem)', funcionarios: 28, custoMensal: 70000, custoAnual: 840000, fill: '#e53e3e' },
    { nome: 'Modelo Atual (Foco em Hospedagem)', funcionarios: 14, custoMensal: 35000, custoAnual: 420000, fill: '#38a169' }
  ];
  
  // Economia anual
  const economiaAnual = 420000;
  const percentualEconomia = 50;
  
  // Proporção de receita hospedagem vs day-use
  const proporcaoReceita = [
    { ano: '2016', proporcaoHospedagem: 55.62 },
    { ano: '2017', proporcaoHospedagem: 58.69 },
    { ano: '2018', proporcaoHospedagem: 57.52 },
    { ano: '2019', proporcaoHospedagem: 56.97 },
    { ano: '2020', proporcaoHospedagem: 100 },
    { ano: '2021', proporcaoHospedagem: 100 },
    { ano: '2022', proporcaoHospedagem: 100 },
    { ano: '2023', proporcaoHospedagem: 100 },
    { ano: '2024', proporcaoHospedagem: 100 }
  ];
  
  // Formatar valores monetários
  const formatarMoeda = (valor) => {
    return `R$ ${valor.toLocaleString()}`;
  };
  
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">
        Hospedagem vs Day-Use
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Análise comparativa entre os modelos de negócio após a mudança estratégica
      </p>
      
      {/* Gráficos principais */}
      <div className={`grid grid-cols-1 ${isFullScreen ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-8 mb-8`}>
        {/* Gráfico de faturamento hospedagem vs day-use */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-bold mb-3 text-center text-blue-800">
            Evolução do Faturamento por Modelo
          </h3>
          <ResponsiveContainer width="100%" height={isFullScreen ? 350 : 300}>
            <BarChart 
              data={dadosFaturamento}
              margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
              <YAxis 
                tickFormatter={(value) => `R$${value / 1000}K`} 
                tick={{ fontSize: 12 }}
                width={70}
              />
              <Tooltip 
                formatter={(value) => [formatarMoeda(value), "Faturamento"]}
                labelFormatter={(label) => `Ano: ${label}`}
              />
              <Legend wrapperStyle={{ fontSize: 12, marginTop: 10 }} />
              <Bar dataKey="hospedagem" name="Hospedagem" fill="#3182ce" stackId="a" />
              <Bar dataKey="dayUse" name="Day-Use" fill="#805ad5" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Gráfico de custo operacional */}
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-bold mb-3 text-center text-green-800">
            Comparação de Custos Operacionais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ResponsiveContainer width="100%" height={isFullScreen ? 250 : 200}>
                <BarChart 
                  data={dadosCustos}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis 
                    type="number"
                    tickFormatter={(value) => `${value / 1000}K`}
                    tick={{ fontSize: 11 }}
                  />
                  <YAxis 
                    type="category" 
                    dataKey="nome" 
                    tick={{ fontSize: 11 }}
                    width={150}
                  />
                  <Tooltip 
                    formatter={(value) => [formatarMoeda(value), "Custo Anual"]}
                  />
                  <Bar dataKey="custoAnual" name="Custo Anual" fill={(entry) => entry.fill} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-green-200">
                <p className="text-green-800 font-bold">Economia Anual</p>
                <p className="text-3xl font-bold text-green-600">{formatarMoeda(economiaAnual)}</p>
                <p className="text-xl font-bold text-green-500">-{percentualEconomia}%</p>
                <p className="text-sm text-gray-600 mt-2">em custos operacionais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Informações adicionais */}
      <div className={`grid grid-cols-1 ${isFullScreen ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-6 mb-6`}>
        {/* Evolução da proporção entre modelos */}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-bold mb-3 text-center text-blue-800">
            Evolução da Proporção de Receita
          </h3>
          <ResponsiveContainer width="100%" height={isFullScreen ? 250 : 200}>
            <BarChart 
              data={proporcaoReceita}
              margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value) => [`${value.toFixed(1)}%`, "Hospedagem"]} />
              <Bar dataKey="proporcaoHospedagem" name="% Hospedagem" fill="#3182ce" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-center text-gray-600 mt-2">
            Em 2020, migramos totalmente para o modelo de hospedagem, sem Day-Use
          </p>
        </div>
        
        {/* Resultados da mudança */}
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h3 className="text-lg font-bold mb-3 text-center text-green-800">
            Resultados da Mudança Estratégica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg border-l-4 border-green-500 shadow-sm">
              <h4 className="font-bold text-green-800">Receita Total</h4>
              <p className="text-2xl font-bold text-green-600">{formatarMoeda(dadosFaturamento[8].total)}</p>
              <p className="text-sm text-gray-600">Faturamento em 2024</p>
            </div>
            <div className="bg-white p-3 rounded-lg border-l-4 border-blue-500 shadow-sm">
              <h4 className="font-bold text-blue-800">Crescimento</h4>
              <p className="text-2xl font-bold text-blue-600">+98%</p>
              <p className="text-sm text-gray-600">vs. último ano com Day-Use (2019)</p>
            </div>
            <div className="bg-white p-3 rounded-lg border-l-4 border-purple-500 shadow-sm">
              <h4 className="font-bold text-purple-800">Funcionários</h4>
              <p className="text-2xl font-bold text-purple-600">-50%</p>
              <p className="text-sm text-gray-600">Redução na equipe necessária</p>
            </div>
            <div className="bg-white p-3 rounded-lg border-l-4 border-yellow-500 shadow-sm">
              <h4 className="font-bold text-yellow-800">Margem de Lucro</h4>
              <p className="text-2xl font-bold text-yellow-600">+32%</p>
              <p className="text-sm text-gray-600">Aumento na margem operacional</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conclusão */}
      <div className="mt-6 p-5 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-xl font-bold mb-4 text-center text-blue-800">
          Conclusão da Análise
        </h3>
        <div className="text-center">
          <p className="text-lg mb-3">
            A mudança estratégica para foco exclusivo em hospedagem resultou em:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
            <p className="font-bold text-green-800">Maior Faturamento</p>
            <p className="text-gray-600 text-sm">
              Crescimento de 98% em relação ao modelo misto anterior
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <p className="font-bold text-blue-800">Redução de Custos</p>
            <p className="text-gray-600 text-sm">
              Economia anual de R$ 420.000 em despesas operacionais
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
            <p className="font-bold text-purple-800">Melhor Experiência</p>
            <p className="text-gray-600 text-sm">
              Foco na qualidade dos serviços para hóspedes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospvsDayuse;