import React from "react";

const Conclusao = () => {
  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
        Conclusão e Perspectivas
      </h2>

      <div className="mb-10">
        <div className="text-2xl font-bold text-center mb-6 text-gray-800">
          2024 foi um ano excepcional para nossa pousada!
        </div>

        <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h3 className="text-xl font-bold mb-4 text-center text-blue-800">
            Nossas Principais Conquistas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border-l-4 border-green-500 shadow">
              <div className="font-bold text-lg text-gray-800">
                Faturamento Total
              </div>
              <div className="text-2xl font-bold text-green-600">
                R$ 1.524.979
              </div>
              <div className="text-sm mt-1 text-gray-600">
                O melhor da história da pousada
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-green-500 shadow">
              <div className="font-bold text-lg text-gray-800">
                Setembro Recorde
              </div>
              <div className="text-2xl font-bold text-green-600">
                R$ 273.948
              </div>
              <div className="text-sm mt-1 text-gray-600">
                Melhor mês já registrado
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-green-500 shadow">
              <div className="font-bold text-lg text-gray-800">
                Alta Temporada
              </div>
              <div className="text-2xl font-bold text-green-600">
                Excelente Desempenho
              </div>
              <div className="text-sm mt-1 text-gray-600">
                Grande movimento em todos os meses
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-green-500 shadow">
              <div className="font-bold text-lg text-gray-800">
                Início de 2025
              </div>
              <div className="text-2xl font-bold text-green-600">
                +24% em Fevereiro
              </div>
              <div className="text-sm mt-1 text-gray-600">
                Crescimento significativo
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-6 text-center text-green-800">
          Incremento nos Últimos Dois Anos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 bg-green-50 rounded-lg border-2 border-green-200 shadow">
            <h4 className="text-xl font-bold mb-4 text-green-800">
              Facilidades de Pagamento
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg">Parcelamento em 3x no cartão de crédito</li>
              <li className="text-lg">Link para compra online</li>
            </ul>
          </div>

          <div className="p-5 bg-green-50 rounded-lg border-2 border-green-200 shadow">
            <h4 className="text-xl font-bold mb-4 text-green-800">
              Vendas Internacionais
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg">We Travel</li>
              <li className="text-lg">IBAN e Código SWIFT</li>
            </ul>
          </div>

          <div className="p-5 bg-green-50 rounded-lg border-2 border-green-200 shadow">
            <h4 className="text-xl font-bold mb-4 text-green-800">
              Vendas Online
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg">OMNIBEES</li>
              <li className="text-lg">Booking.com</li>
            </ul>
          </div>

          <div className="p-5 bg-green-50 rounded-lg border-2 border-green-200 shadow">
            <h4 className="text-xl font-bold mb-4 text-green-800">
              Novos Acordos
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg">Birdwatching</li>
              <li className="text-lg">Primatas</li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-green-100 rounded-lg border-2 border-green-300">
          <h4 className="text-xl font-bold mb-4 text-center text-green-800">
            Operadoras Internacionais e Parcerias
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-bold text-lg mb-2 text-green-700">Birdwatching & Primatas</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Neblina Forest</li>
                <li>Cariama</li>
                <li>Wild Brazil</li>
                <li>Jamaca das Araras</li>
                <li>Sai do Sofá</li>
                <li>Pantanal Explorer*</li>
                <li>Ueso*</li>
                <li>Birding Brazil*</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-2 text-green-700">Novos Grupos para Primatas</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gondwana</li>
                <li>Ideias Tur</li>
                <li>Blumar</li>
                <li>Del Bianco</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Perspectivas para 2025
        </h3>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 p-5 bg-blue-100 rounded-lg border-2 border-blue-300 shadow-md">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h4 className="text-xl font-bold ml-3 text-blue-800">
                Crescimento Contínuo
              </h4>
            </div>
            <p className="text-lg">
              Mantendo a tendência positiva iniciada em Fevereiro, podemos
              superar o faturamento de 2024
            </p>
          </div>

          <div className="flex-1 p-5 bg-blue-100 rounded-lg border-2 border-blue-300 shadow-md">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h4 className="text-xl font-bold ml-3 text-blue-800">
                Investimentos
              </h4>
            </div>
            <p className="text-lg">
              Os bons resultados nos permitem investir em melhorias na pousada
              para atrair ainda mais hóspedes
            </p>
          </div>
        </div>
      </div>

      <div className="text-center p-6 bg-green-100 rounded-lg border-2 border-green-300">
        <h3 className="text-2xl font-bold mb-3 text-green-800">
          Mensagem Final
        </h3>
        <p className="text-xl">
          Estamos no caminho certo! Nosso trabalho está dando resultados
          excepcionais e temos todas as condições para fazer de 2025 um ano
          ainda melhor para nossa pousada.
        </p>
      </div>
    </div>
  );
};

const ConclusaoEstrategica = () => {
  return (
    <div className="w-full p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8 text-center text-green-800">
        Nossa Pousada: Sucesso e Futuro
      </h2>

      <Conclusao />

      {/* Nova seção com tabela de operadores */}
      <div className="mb-8 mt-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">
          Desempenho Financeiro por Operadores
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-green-700 text-white text-left">
                <th className="p-3 border border-green-600">Cliente</th>
                <th className="p-3 border border-green-600 text-center">2022</th>
                <th className="p-3 border border-green-600 text-center">2023</th>
                <th className="p-3 border border-green-600 text-center">2024</th>
                <th className="p-3 border border-green-600 text-center">2025</th>
                <th className="p-3 border border-green-600 text-center">2026</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-100">
                <td className="p-3 border border-green-300 font-bold">TOTAL</td>
                <td className="p-3 border border-green-300 text-center">223,750</td>
                <td className="p-3 border border-green-300 text-center">298,016</td>
                <td className="p-3 border border-green-300 text-center">539,079</td>
                <td className="p-3 border border-green-300 text-center">544,448</td>
                <td className="p-3 border border-green-300 text-center italic">82,000</td>
              </tr>
              <tr>
                <td className="p-3 border border-green-300">Field Guides</td>
                <td className="p-3 border border-green-300 text-center">70,000</td>
                <td className="p-3 border border-green-300 text-center">73,720</td>
                <td className="p-3 border border-green-300 text-center">81,000</td>
                <td className="p-3 border border-green-300 text-center">42,000</td>
                <td className="p-3 border border-green-300 text-center italic">82,000</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-3 border border-green-300">Route Expeditions</td>
                <td className="p-3 border border-green-300 text-center">107,050</td>
                <td className="p-3 border border-green-300 text-center">111,206</td>
                <td className="p-3 border border-green-300 text-center">79,760</td>
                <td className="p-3 border border-green-300 text-center italic">150,000</td>
                <td className="p-3 border border-green-300 text-center">-</td>
              </tr>
              <tr>
                <td className="p-3 border border-green-300">PANTANAL EXPLORER</td>
                <td className="p-3 border border-green-300 text-center">-</td>
                <td className="p-3 border border-green-300 text-center">-</td>
                <td className="p-3 border border-green-300 text-center">10,086</td>
                <td className="p-3 border border-green-300 text-center">34,031</td>
                <td className="p-3 border border-green-300 text-center italic">90,000</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-3 border border-green-300">CARIAMA ECOTUR</td>
                <td className="p-3 border border-green-300 text-center">-</td>
                <td className="p-3 border border-green-300 text-center">-</td>
                <td className="p-3 border border-green-300 text-center">50,408</td>
                <td className="p-3 border border-green-300 text-center">32,608</td>
                <td className="p-3 border border-green-300 text-center">-</td>
              </tr>
              <tr>
                <td className="p-3 border border-green-300">NEBLINA FOREST - XAVIER MUNHOZ</td>
                <td className="p-3 border border-green-300 text-center">-</td>
                <td className="p-3 border border-green-300 text-center">-</td>
                <td className="p-3 border border-green-300 text-center">68,960</td>
                <td className="p-3 border border-green-300 text-center italic">80,000</td>
                <td className="p-3 border border-green-300 text-center">-</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-3 border border-green-300">ADRIAN RUPP</td>
                <td className="p-3 border border-green-300 text-center">-</td>
                <td className="p-3 border border-green-300 text-center">34,000</td>
                <td className="p-3 border border-green-300 text-center">36,000</td>
                <td className="p-3 border border-green-300 text-center">39,200</td>
                <td className="p-3 border border-green-300 text-center">39,200</td>
              </tr>
              <tr>
                <td className="p-3 border border-green-300">AGENCIAS E PARTICULAR DIRETO eco</td>
                <td className="p-3 border border-green-300 text-center">-</td>
                <td className="p-3 border border-green-300 text-center">-</td>
                <td className="p-3 border border-green-300 text-center">52,670</td>
                <td className="p-3 border border-green-300 text-center">53,315</td>
                <td className="p-3 border border-green-300 text-center">31,940</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-3 border border-green-300">EVENTOS</td>
                <td className="p-3 border border-green-300 text-center">-</td>
                <td className="p-3 border border-green-300 text-center">12,700</td>
                <td className="p-3 border border-green-300 text-center">14,334</td>
                <td className="p-3 border border-green-300 text-center">132,405</td>
                <td className="p-3 border border-green-300 text-center">78,700</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 mt-4">
          <h4 className="text-lg font-bold text-blue-800 mb-2">Destaques de Parcerias:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Crescimento Expressivo:</span> Aumento de mais de 140% no faturamento com operadores entre 2022 e 2024</li>
            <li><span className="font-medium">Diversificação:</span> De apenas 2 operadores em 2022 para 8 em 2024</li>
            <li><span className="font-medium">Novo Potencial:</span> EVENTOS se tornaram uma fonte significativa de receita em 2025</li>
            <li><span className="font-medium">Estabilidade:</span> Projeções sólidas para 2025 e início de planejamento para 2026</li>
          </ul>
        </div>
      </div>

      <div className="text-center p-6 bg-green-100 rounded-lg">
        <h3 className="text-3xl font-bold mb-4 text-green-800">
          Mensagem Final
        </h3>
        <p className="text-xl">
          Nossa pousada tem um diferencial único no mercado: ser um dos melhores
          destinos de Birdwatching do Brasil. Esse posicionamento, somado à
          nossa capacidade de adaptação e à excelência em serviços, nos garante
          um futuro próspero. O início de 2025 já mostra que estamos no caminho
          certo.
        </p>
      </div>
    </div>
  );
};

export default ConclusaoEstrategica;
