import React from "react"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

const AltaTemporada = () => {
  const dadosAltaTemporada = [
    { name: "Setembro", value: 273948 },
    { name: "Julho", value: 202292 },
    { name: "Agosto", value: 172265 },
    { name: "Junho", value: 167272 }
  ]

  const totalAltaTemporada = dadosAltaTemporada.reduce(
    (acc, item) => acc + item.value,
    0
  )
  const totalAnual = 1524979
  const percentualAltaTemporada = (
    (totalAltaTemporada / totalAnual) *
    100
  ).toFixed(1)

  const COLORS = ["#1e40af", "#3b82f6", "#60a5fa", "#93c5fd"]

  const dadosPorcentagem = dadosAltaTemporada.map(item => ({
    ...item,
    percentual: ((item.value / totalAltaTemporada) * 100).toFixed(1)
  }))

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Alta Temporada 2024
      </h2>

      <div className="mb-8 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
        <div className="text-center">
          <div className="text-lg font-bold mb-2">
            Total Alta Temporada (Jun-Set)
          </div>
          <div className="text-3xl font-bold text-blue-800">
            R$ {totalAltaTemporada.toLocaleString()}
          </div>
          <div className="mt-2 text-lg text-blue-600">
            {percentualAltaTemporada}% do faturamento anual
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dadosPorcentagem}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {dadosPorcentagem.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={value => `R$ ${value.toLocaleString()}`}
                labelStyle={{ fontWeight: "bold" }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h3 className="text-xl font-bold mb-4 text-center">
            Distribuição por Mês
          </h3>
          <div className="space-y-4">
            {dadosPorcentagem.map((item, index) => (
              <div
                key={index}
                className="p-2 rounded-lg border-2"
                style={{ borderColor: COLORS[index] }}
              >
                <div className="flex justify-between">
                  <span className="text-lg font-bold">{item.name}</span>
                  <span className="text-lg font-bold">
                    R$ {item.value.toLocaleString()}
                  </span>
                </div>
                <div className="mt-1 flex items-center">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      backgroundColor: COLORS[index],
                      width: `${item.percentual}%`
                    }}
                  ></div>
                  <span className="ml-2 font-bold">{item.percentual}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-50 rounded-lg border-2 border-green-200">
        <h3 className="text-xl font-bold mb-2 text-center text-green-800">
          Observações Importantes
        </h3>
        <ul className="text-lg space-y-1">
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>
              Setembro foi nosso melhor mês em toda a história da pousada
            </span>
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>
              A alta temporada representa mais da metade do faturamento anual
            </span>
          </li>
          <li className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>
              Junho teve crescimento impressionante comparado a anos anteriores
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AltaTemporada