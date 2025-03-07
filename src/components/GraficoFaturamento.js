import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GraficoFaturamento = () => {
  const data = [
    { mes: 'Jan', valor: 77043, fill: '#4299e1' },
    { mes: 'Fev', valor: 101188, fill: '#4299e1' },
    { mes: 'Mar', valor: 69001, fill: '#4299e1' },
    { mes: 'Abr', valor: 71314, fill: '#4299e1' },
    { mes: 'Mai', valor: 73078, fill: '#4299e1' },
    { mes: 'Jun', valor: 167272, fill: '#3182ce' },
    { mes: 'Jul', valor: 202292, fill: '#2c5282' },
    { mes: 'Ago', valor: 172265, fill: '#2b6cb0' },
    { mes: 'Set', valor: 273948, fill: '#1e40af' },
    { mes: 'Out', valor: 111747, fill: '#4299e1' },
    { mes: 'Nov', valor: 79214, fill: '#4299e1' },
    { mes: 'Dez', valor: 126617, fill: '#4299e1' }
  ];

  const formatLabel = (value) => {
    return `R$${Math.floor(value / 1000)}K`;
  };

  const totalAnual = data.reduce((sum, item) => sum + item.valor, 0);

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-3 text-center text-gray-800">Panorama Financeiro 2024</h2>
      <p className="text-center text-gray-600 mb-6">Uma jornada de crescimento e superação ao longo do ano</p>
      
      <div className="mb-6 p-4 bg-blue-50 rounded-lg text-center">
        <span className="text-lg font-semibold">Faturamento Total: </span>
        <span className="text-2xl font-bold text-green-600">R$ {totalAnual.toLocaleString()}</span>
      </div>
      
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="mes" 
            tick={{ fontSize: 14 }} 
            tickLine={false}
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <YAxis 
            tickFormatter={formatLabel}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#e2e8f0' }}
            width={70}
          />
          <Tooltip 
            formatter={(value) => [`R$ ${value.toLocaleString()}`, 'Faturamento']}
            labelFormatter={(label) => `Mês: ${label}`}
          />
          <Bar dataKey="valor" fill={(entry) => entry.fill} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      
      <div className="mt-6 text-center">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Destaque:</span> Setembro com R$ {data[8].valor.toLocaleString()} - nosso melhor mês na história!
        </p>
      </div>
    </div>
  );
};

export default GraficoFaturamento; 