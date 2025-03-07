import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts"

const AltaBirdwatching = ({ displayMode = "normal" }) => {
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

  // Dados específicos de junho (Global Big Day)
  const dadosJunho = [
    { ano: "2016", valor: 17393, fill: "#9ae6b4" },
    { ano: "2017", valor: 28645, fill: "#9ae6b4" },
    { ano: "2018", valor: 32498, fill: "#9ae6b4" },
    { ano: "2019", valor: 42113, fill: "#38a169" },
    { ano: "2020", valor: 0, fill: "#cbd5e0" },
    { ano: "2021", valor: 61256, fill: "#68d391" },
    { ano: "2022", valor: 98143, fill: "#48bb78" },
    { ano: "2023", valor: 121387, fill: "#38a169" },
    { ano: "2024", valor: 167272, fill: "#2f855a" }
  ]

  // Dados da recuperação pós-pandemia (Novembro)
  const dadosNovembro = [
    { ano: "2016", valor: 26026 },
    { ano: "2017", valor: 37948 },
    { ano: "2018", valor: 62819 },
    { ano: "2019", valor: 51799 },
    { ano: "2020", valor: 87270 },
    { ano: "2021", valor: 59374 },
    { ano: "2022", valor: 109942 },
    { ano: "2023", valor: 115678 },
    { ano: "2024", valor: 79214 }
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

      <div className="mb-12 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-6 text-green-800">
          Impacto do Global Big Day e Birdwatching
        </h3>

        <div className="mb-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={dadosJunho}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="ano" />
              <YAxis tickFormatter={formatarValor} />
              <Tooltip
                formatter={value => [
                  `R$ ${value.toLocaleString()}`,
                  "Faturamento Junho"
                ]}
              />
              <Bar dataKey="valor" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-4 text-center">
            <div className="text-lg font-bold text-green-700">
              Crescimento em Junho 2019: +227% vs 2018
            </div>
            <div className="text-md text-green-600">
              Impacto direto do Global Big Day de Birdwatching
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg border border-green-300">
          <h4 className="text-xl font-bold mb-3 text-center text-green-800">
            Destaque Birdwatching
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-3 h-3 mt-1.5 rounded-full bg-green-500 mr-2 flex-shrink-0"></div>
              <span>
                O Brasil é hoje um dos lugares mais procurados para Birdwatching
                no mundo
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-3 h-3 mt-1.5 rounded-full bg-green-500 mr-2 flex-shrink-0"></div>
              <span>
                Nossa pousada tem{" "}
                <span className="font-bold">590 espécies catalogadas</span> e
                está no <span className="font-bold">TOP 3 do Brasil</span> em
                diversidade
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-3 h-3 mt-1.5 rounded-full bg-green-500 mr-2 flex-shrink-0"></div>
              <span>
                Reconhecimento pela Cornell University coloca nossa pousada como
                referência
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-3 h-3 mt-1.5 rounded-full bg-green-500 mr-2 flex-shrink-0"></div>
              <span>
                Junho de 2024 alcançou o recorde histórico de R$ 167.272
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-6 text-blue-800">
          Recuperação Pós-Pandemia
        </h3>

        <div className="mb-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={dadosNovembro}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ano" />
              <YAxis tickFormatter={formatarValor} />
              <Tooltip
                formatter={value => [
                  `R$ ${value.toLocaleString()}`,
                  "Faturamento Novembro"
                ]}
              />
              <Line
                type="monotone"
                dataKey="valor"
                stroke="#3182ce"
                strokeWidth={2}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-4 text-center">
            <div className="text-lg font-bold text-blue-700">
              Novembro 2020: +68% vs Novembro 2019
            </div>
            <div className="text-md text-blue-600">
              Recuperação rápida após o período mais crítico da pandemia
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg border border-blue-300">
          <h4 className="text-xl font-bold mb-3 text-center text-blue-800">
            Superação da Pandemia
          </h4>
          <p className="text-lg">
            A pandemia afetou nossa operação de março a outubro de 2020, mas a
            recuperação foi impressionante já em novembro, quando superamos
            significativamente os números do ano anterior. Isso demonstra a
            resiliência do nosso negócio e o interesse crescente pelo turismo de
            natureza e birdwatching.
          </p>
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

export default AltaBirdwatching
