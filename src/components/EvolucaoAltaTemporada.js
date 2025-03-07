import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const AnaliseHistorica = () => {
  // Dados da evolução da alta temporada
  const dadosAltaTemporada = [
    { ano: "2016", valor: 171248, fill: "#63b3ed" },
    { ano: "2017", valor: 201317, fill: "#63b3ed" },
    { ano: "2018", valor: 221657, fill: "#63b3ed" },
    { ano: "2019", valor: 312071, fill: "#2b6cb0" },
    { ano: "2020", valor: 0, fill: "#cbd5e0" },
    { ano: "2021", valor: 373261, fill: "#4299e1" },
    { ano: "2022", valor: 538269, fill: "#3182ce" },
    { ano: "2023", valor: 585169, fill: "#2b6cb0" },
    { ano: "2024", valor: 815777, fill: "#1e40af" }
  ]

  const formatarValor = valor => {
    return `R$ ${Math.floor(valor / 1000)}K`
  }

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Evolução da Alta Temporada desde 2016
      </h2>

      <div className="mb-12">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={dadosAltaTemporada}
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="ano"
              tick={{ fontSize: 16, fontWeight: "bold" }}
              axisLine={{ stroke: "#e2e8f0", strokeWidth: 2 }}
            />
            <YAxis
              tickFormatter={formatarValor}
              tick={{ fontSize: 14 }}
              axisLine={{ stroke: "#e2e8f0", strokeWidth: 2 }}
            />
            <Tooltip
              formatter={value => [
                `R$ ${value.toLocaleString()}`,
                "Faturamento"
              ]}
              labelStyle={{ fontWeight: "bold", fontSize: 16 }}
            />
            <Bar dataKey="valor" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-4 text-center text-lg">
          <span className="font-bold text-blue-800">Observação:</span> Em 2020,
          tivemos impacto total da pandemia na alta temporada
        </div>
      </div>

      <div className="text-center p-6 bg-green-100 rounded-lg">
        <h3 className="text-2xl font-bold mb-3 text-green-800">Conclusão</h3>
        <p className="text-xl">
          Nossa pousada se consolidou como referência em Birdwatching no Brasil,
          com crescimento contínuo desde 2016 e superação rápida de desafios
          como a pandemia. Devemos continuar investindo neste diferencial que
          nos coloca em posição privilegiada no mercado.
        </p>
      </div>
    </div>
  )
}

export default AnaliseHistorica
