export const deck = {
  moduloId: "mf-2",
  etapas: [
    {
      flashcards: [
        { pergunta: "O que caracteriza o regime de juros compostos?", resposta: "Os juros de cada período são incorporados ao capital e passam a render juros nos períodos seguintes (capitalização)." },
        { pergunta: "Qual a fórmula fundamental do montante em juros compostos?", resposta: "M = C × (1 + i)ⁿ, onde M = montante, C = capital, i = taxa, n = períodos." },
        { pergunta: "Qual a diferença entre crescimento linear e exponencial?", resposta: "Juros simples têm crescimento linear (sobre o capital inicial). Juros compostos têm crescimento exponencial (sobre o montante acumulado)." }
      ]
    },
    {
      flashcards: [
        { pergunta: "O que significa 'capitalização dos juros'?", resposta: "Significa que os juros ganhos em um período viram parte do capital para o período seguinte." },
        { pergunta: "Por que o juro do mês 2 é maior que o do mês 1 em juros compostos?", resposta: "Porque o juro incide sobre o montante acumulado (capital + juros anteriores), não sobre o capital inicial." },
        { pergunta: "Quais palavras-chave da CESGRANRIO indicam juros compostos?", resposta: "'Capitalização mensal/trimestral/anual', 'regime de juros compostos', 'montante de aplicação', 'reajustes sucessivos'." }
      ]
    },
    {
      flashcards: [
        { pergunta: "Como calcular os juros totais (J) em juros compostos?", resposta: "J = M − C ou J = C × [(1 + i)ⁿ − 1]." },
        { pergunta: "Como calcular o capital inicial (C) conhecendo o montante?", resposta: "C = M / (1 + i)ⁿ. Esta é a fórmula de desconto composto (valor presente)." },
        { pergunta: "Como calcular o prazo (n) usando logaritmos?", resposta: "n = log(M/C) / log(1 + i). A CESGRANRIO sempre fornece os valores de log." }
      ]
    },
    {
      flashcards: [
        { pergunta: "Qual a fórmula de equivalência de taxas compostas?", resposta: "(1 + i₁)^n₁ = (1 + i₂)^n₂." },
        { pergunta: "Qual a taxa anual equivalente a 5% ao mês (composto)?", resposta: "(1,05)¹² − 1 ≈ 79,59% a.a. Nunca use 5% × 12 = 60%!" },
        { pergunta: "Qual a diferença entre taxa proporcional e taxa equivalente?", resposta: "Proporcional: divisão simples (usada em juros simples). Equivalente: (1+i)^n (usada em juros compostos)." }
      ]
    },
    {
      flashcards: [
        { pergunta: "Qual o princípio fundamental dos fluxos de caixa?", resposta: "Trazer todos os valores para a mesma data de referência (presente ou futuro) antes de comparar ou somar." },
        { pergunta: "Como calcular o valor presente (VP) de uma parcela futura?", resposta: "VP = F / (1 + i)ⁿ. Divide-se o valor futuro pelo fator de acumulação." },
        { pergunta: "Em 'pagar metade do saldo', sobre qual valor incide o pagamento?", resposta: "Sobre o MONTANTE acumulado até aquela data, NÃO sobre o capital inicial." }
      ]
    },
    {
      flashcards: [
        { pergunta: "Como calcular reajustes sucessivos de preços?", resposta: "Multiplique os fatores: (1 ± i₁) × (1 ± i₂) × ... Nunca some os percentuais." },
        { pergunta: "Um produto sofre +20% e depois −20%. Qual o resultado?", resposta: "Preço × 1,20 × 0,80 = Preço × 0,96. Redução de 4% sobre o original, não volta ao mesmo preço!" },
        { pergunta: "O que é crédito rotativo e qual regime geralmente usa?", resposta: "É o atraso no cartão de crédito. Para períodos curtos (< 30 dias), geralmente usa JUROS SIMPLES." }
      ]
    },
    {
      flashcards: [
        { pergunta: "Na CESGRANRIO, quando a banca fornece potências prontas (ex: 1,02⁶ = 1,126), o que isso indica?", resposta: "Que você deve usar esse valor diretamente na fórmula M = C × (1+i)ⁿ sem calcular potências." },
        { pergunta: "Em questões de empréstimo com pagamentos em datas diferentes, qual a estratégia?", resposta: "Trazer todos os pagamentos ao presente (descontar) e igualar ao capital emprestado." },
        { pergunta: "Qual a pegadinha clássica em questões de 'multa fixa + juros compostos'?", resposta: "A multa deve ser somada APÓS calcular os juros compostos. Nunca some a multa à taxa de juros." }
      ]
    }
  ]
};
