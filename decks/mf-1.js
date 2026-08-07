export const deck = {
  moduloId: "mf-1",
  etapas: [
    // Etapa 0 – Introdução
    {
      etapaIndex: 0,
      flashcards: [
        {
          pergunta: "O que são juros simples?",
          resposta: "É a remuneração paga pelo uso do capital alheio, calculada apenas sobre o valor inicial, sem incidência sobre juros acumulados."
        },
        {
          pergunta: "Quais são os elementos básicos de uma operação de juros simples?",
          resposta: "Capital (C), taxa (i), tempo (t), juros (J) e montante (M)."
        }
      ]
    },
    // Etapa 1 – Teoria 1: Conceitos Fundamentais
    {
      etapaIndex: 1,
      flashcards: [
        {
          pergunta: "Qual a fórmula fundamental dos juros simples?",
          resposta: "J = C · i · t, onde C é o capital, i a taxa (decimal) e t o tempo."
        },
        {
          pergunta: "Como se calcula o montante em juros simples?",
          resposta: "M = C + J ou M = C · (1 + i · t)."
        },
        {
          pergunta: "No regime de juros simples, os juros gerados a cada período são incorporados ao capital para render novos juros?",
          resposta: "Não, incidem apenas sobre o capital inicial."
        }
      ]
    },
    // Etapa 2 – Teoria 2: Fórmula e variações
    {
      etapaIndex: 2,
      flashcards: [
        {
          pergunta: "Como isolar o capital (C) na fórmula dos juros simples?",
          resposta: "C = J / (i · t)."
        },
        {
          pergunta: "Qual a condição necessária entre a taxa e o tempo na fórmula?",
          resposta: "Devem estar expressos na mesma unidade (ex.: ambos mensais ou ambos anuais)."
        },
        {
          pergunta: "Qual fórmula isola a taxa de juros (i)?",
          resposta: "i = J / (C · t)."
        },
        {
          pergunta: "Qual fórmula isola o tempo (t)?",
          resposta: "t = J / (C · i)."
        }
      ]
    },
    // Etapa 3 – Teoria 3: Cálculo do Montante
    {
      etapaIndex: 3,
      flashcards: [
        {
          pergunta: "Qual o comportamento do montante ao longo do tempo nos juros simples?",
          resposta: "Crescimento linear, representado por uma reta no gráfico."
        },
        {
          pergunta: "Aplicando R$ 1.000,00 a 2% ao mês durante 5 meses, qual o montante?",
          resposta: "M = 1000 · (1 + 0,02 · 5) = R$ 1.100,00."
        },
        {
          pergunta: "O que diferencia o gráfico dos juros simples do gráfico dos juros compostos?",
          resposta: "Juros simples é uma reta; juros compostos é uma curva exponencial."
        }
      ]
    },
    // Etapa 4 – Teoria 4: Conversão de taxas e prazos
    {
      etapaIndex: 4,
      flashcards: [
        {
          pergunta: "Como converter uma taxa anual para mensal em juros simples?",
          resposta: "Divide-se a taxa anual por 12. Ex.: 12% a.a. = 1% a.m."
        },
        {
          pergunta: "Quantos dias tem o ano comercial e o mês comercial?",
          resposta: "Ano comercial = 360 dias; mês comercial = 30 dias."
        },
        {
          pergunta: "Se a taxa é 2% ao mês, qual a taxa anual proporcional?",
          resposta: "2% × 12 = 24% ao ano."
        }
      ]
    },
    // Etapa 5 – Teoria 5: Prazos fracionários e taxas variáveis
    {
      etapaIndex: 5,
      flashcards: [
        {
          pergunta: "Como calcular os juros quando a taxa de juros varia ao longo do tempo?",
          resposta: "Somam-se os juros de cada período: J = C·i₁·t₁ + C·i₂·t₂ + ..."
        },
        {
          pergunta: "Se a taxa é 2% ao mês e o prazo é 45 dias, qual o tempo a usar na fórmula?",
          resposta: "45/30 = 1,5 meses (considerando mês comercial)."
        },
        {
          pergunta: "Em juros simples, taxas proporcionais são usadas para conversão?",
          resposta: "Sim, por exemplo, 12% a.a. = 1% a.m. (divisão proporcional)."
        }
      ]
    },
    // Etapa 6 – Exemplo 1 (cálculo de juros)
    {
      etapaIndex: 6,
      flashcards: [
        {
          pergunta: "Qual o valor dos juros obtidos ao aplicar R$ 2.500,00 a 1,2% ao mês por 8 meses?",
          resposta: "J = 2500 · 0,012 · 8 = R$ 240,00."
        },
        {
          pergunta: "Antes de multiplicar, como a taxa percentual deve ser representada?",
          resposta: "Em decimal (ex.: 1,2% = 0,012)."
        },
        {
          pergunta: "Qual o montante resultante do Exemplo 1?",
          resposta: "M = 2500 + 240 = R$ 2.740,00."
        }
      ]
    },
    // Etapa 7 – Exemplo 2 (montante com conversão)
    {
      etapaIndex: 7,
      flashcards: [
        {
          pergunta: "Qual o montante de R$ 1.800,00 aplicado a 18% ao ano durante 9 meses?",
          resposta: "Taxa mensal = 1,5% = 0,015; J = 1800·0,015·9 = 243; M = 1800+243 = R$ 2.043,00."
        },
        {
          pergunta: "Por que é necessário converter a taxa anual para mensal nesse caso?",
          resposta: "Porque o tempo está em meses e a taxa deve estar na mesma unidade."
        }
      ]
    },
    // Etapa 8 – Exemplo 3 (cálculo da taxa)
    {
      etapaIndex: 8,
      flashcards: [
        {
          pergunta: "Um capital de R$ 4.000,00 rendeu R$ 600,00 em 5 meses. Qual a taxa mensal?",
          resposta: "i = J/(C·t) = 600/(4000·5) = 0,03 = 3% ao mês."
        },
        {
          pergunta: "Qual fórmula isola a taxa de juros?",
          resposta: "i = J / (C · t)."
        }
      ]
    },
    // Etapa 9 – Exemplo 4 (taxa variável)
    {
      etapaIndex: 9,
      flashcards: [
        {
          pergunta: "R$ 3.000,00 aplicados a 2% a.m. por 2 meses e 2,5% a.m. por 3 meses: qual o montante final?",
          resposta: "J₁ = 3000·0,02·2=120; J₂=3000·0,025·3=225; J=345; M=3000+345= R$ 3.345,00."
        },
        {
          pergunta: "Como calcular juros simples com taxas diferentes em períodos distintos?",
          resposta: "Calcula-se os juros de cada período separadamente e soma-se."
        }
      ]
    },
    // Etapa 10 – Exercício Guiado 1 (cálculo de juros)
    {
      etapaIndex: 10,
      flashcards: [
        {
          pergunta: "Qual o juro de R$ 1.200,00 a 2% ao mês por 6 meses?",
          resposta: "J = 1200 · 0,02 · 6 = R$ 144,00."
        },
        {
          pergunta: "Qual o erro mais comum ao calcular juros simples?",
          resposta: "Esquecer de converter a taxa percentual para decimal (dividir por 100)."
        }
      ]
    },
    // Etapa 11 – Exercício Guiado 2 (montante)
    {
      etapaIndex: 11,
      flashcards: [
        {
          pergunta: "Qual o montante de R$ 800,00 a 1,5% ao mês por 10 meses?",
          resposta: "J = 800·0,015·10 = 120; M = 800+120 = R$ 920,00."
        },
        {
          pergunta: "Qual a fórmula do montante que usa apenas C, i e t?",
          resposta: "M = C · (1 + i · t)."
        }
      ]
    },
    // Etapa 12 – Exercício Guiado 3 (taxa)
    {
      etapaIndex: 12,
      flashcards: [
        {
          pergunta: "R$ 2.000,00 geraram R$ 300,00 em 5 meses. Qual a taxa mensal?",
          resposta: "i = 300/(2000·5) = 0,03 = 3% ao mês."
        },
        {
          pergunta: "Qual a fórmula para encontrar o tempo (t) em juros simples?",
          resposta: "t = J / (C · i)."
        }
      ]
    },
    // Etapa 13 – Questão CESGRANRIO (prazo longo)
    {
      etapaIndex: 13,
      flashcards: [
        {
          pergunta: "R$ 5.000,00 a 0,8% ao mês durante 2 anos e 3 meses: qual o montante?",
          resposta: "2a3m = 27 meses; J = 5000·0,008·27 = 1080; M = 6080."
        },
        {
          pergunta: "Quantos meses há em 2 anos e 3 meses?",
          resposta: "2·12 + 3 = 27 meses."
        }
      ]
    },
    // Etapa 14 – Questão CESGRANRIO (prazo fracionário)
    {
      etapaIndex: 14,
      flashcards: [
        {
          pergunta: "R$ 3.600,00 a 15% ao ano por 90 dias (ano comercial): qual o montante?",
          resposta: "90/360 = 0,25 anos; J = 3600·0,15·0,25=135; M=3735."
        },
        {
          pergunta: "Como converter 90 dias em anos no regime comercial?",
          resposta: "Dividir por 360: 90/360 = 0,25 ano."
        }
      ]
    },
    // Etapa 15 – Questão CESGRANRIO (taxa variável)
    {
      etapaIndex: 15,
      flashcards: [
        {
          pergunta: "R$ 2.000,00 a 1% a.m. por 4 meses e 1,5% a.m. por 2 meses: qual o montante?",
          resposta: "J₁=2000·0,01·4=80; J₂=2000·0,015·2=60; J=140; M=2140."
        },
        {
          pergunta: "Em problemas com taxas variáveis, como se obtém o juros total?",
          resposta: "Calcula-se os juros de cada período separadamente e soma-se."
        }
      ]
    },
    // Etapa 16 – Avaliação Final (questões representativas)
    {
      etapaIndex: 16,
      flashcards: [
        {
          pergunta: "Qual o montante de R$ 1.000,00 a 2% ao mês por 6 meses?",
          resposta: "J = 1000·0,02·6 = 120; M = 1120."
        },
        {
          pergunta: "Um capital de R$ 3.000,00 rende R$ 360,00 em 6 meses. Qual a taxa mensal?",
          resposta: "i = 360/(3000·6) = 0,02 = 2% a.m."
        },
        {
          pergunta: "R$ 4.000,00 a 0,8% a.m. por 10 meses: qual o montante?",
          resposta: "J = 4000·0,008·10 = 320; M = 4320."
        }
      ]
    }
  ]
};
