export const deck = {
  moduloId: "progressoes",
  etapas: [
    // Etapa 0 – Introdução
    {
      etapaIndex: 0,
      flashcards: [
        {
          pergunta: "O que é uma Progressão Aritmética (PA)?",
          resposta: "É uma sequência numérica em que a diferença entre um termo e seu antecessor é constante (razão r)."
        },
        {
          pergunta: "O que é uma Progressão Geométrica (PG)?",
          resposta: "É uma sequência em que o quociente entre um termo e seu antecessor é constante (razão q)."
        }
      ]
    },
    // Etapa 1 – Teoria: Sequências Numéricas
    {
      etapaIndex: 1,
      flashcards: [
        {
          pergunta: "O que é uma sequência numérica?",
          resposta: "Uma lista ordenada de números (reais) que obedece a uma lei de formação. Cada número é um termo, indicado por um índice n."
        },
        {
          pergunta: "Como se chama o termo de posição n em uma sequência e qual a sua função?",
          resposta: "aₙ (ou bₙ) representa o termo geral, que pode ser calculado por uma fórmula em função de n."
        }
      ]
    },
    // Etapa 2 – Teoria: PA – Definição, Razão e Termo Geral
    {
      etapaIndex: 2,
      flashcards: [
        {
          pergunta: "Qual é a fórmula do termo geral de uma PA?",
          resposta: "aₙ = a₁ + (n – 1) · r, onde a₁ é o primeiro termo e r é a razão."
        },
        {
          pergunta: "Como se calcula a razão r de uma PA?",
          resposta: "r = aₙ – aₙ₋₁ (diferença entre um termo e o seu antecessor)."
        }
      ]
    },
    // Etapa 3 – Teoria: Propriedades da PA
    {
      etapaIndex: 3,
      flashcards: [
        {
          pergunta: "Em uma PA, qual é a relação entre três termos consecutivos a, b e c?",
          resposta: "b é a média aritmética de a e c: b = (a + c)/2."
        },
        {
          pergunta: "Em uma PA finita, o que podemos afirmar sobre dois termos equidistantes dos extremos?",
          resposta: "A soma de dois termos equidistantes dos extremos é igual à soma dos extremos (a₁ + aₙ)."
        }
      ]
    },
    // Etapa 4 – Teoria: Soma dos Termos de uma PA Finita
    {
      etapaIndex: 4,
      flashcards: [
        {
          pergunta: "Qual é a fórmula da soma dos n primeiros termos de uma PA?",
          resposta: "Sₙ = (a₁ + aₙ) · n / 2."
        },
        {
          pergunta: "Se uma PA tem um número ímpar de termos, como podemos calcular a soma usando o termo central?",
          resposta: "Sₙ = n · a_central, onde a_central é o termo do meio."
        }
      ]
    },
    // Etapa 5 – Teoria: PG – Definição, Razão e Termo Geral
    {
      etapaIndex: 5,
      flashcards: [
        {
          pergunta: "Qual é a fórmula do termo geral de uma PG?",
          resposta: "bₙ = b₁ · q^(n – 1), onde b₁ é o primeiro termo e q é a razão."
        },
        {
          pergunta: "Como se calcula a razão q de uma PG?",
          resposta: "q = bₙ / bₙ₋₁ (divisão entre um termo e seu antecessor)."
        }
      ]
    },
    // Etapa 6 – Teoria: Propriedades da PG
    {
      etapaIndex: 6,
      flashcards: [
        {
          pergunta: "Em uma PG, qual é a relação entre três termos consecutivos a, b e c?",
          resposta: "b² = a · c (b é a média geométrica de a e c)."
        },
        {
          pergunta: "Em uma PG finita, como se relacionam dois termos equidistantes dos extremos?",
          resposta: "O produto de dois termos equidistantes dos extremos é igual ao produto dos extremos (b₁ · bₙ)."
        }
      ]
    },
    // Etapa 7 – Teoria: Soma dos Termos de uma PG Finita e Infinita
    {
      etapaIndex: 7,
      flashcards: [
        {
          pergunta: "Qual é a fórmula da soma dos n primeiros termos de uma PG finita (q ≠ 1)?",
          resposta: "Sₙ = b₁ · (qⁿ – 1) / (q – 1)."
        },
        {
          pergunta: "Qual é a fórmula da soma de uma PG infinita convergente e em que condição ela é válida?",
          resposta: "S∞ = b₁ / (1 – q), válida quando |q| < 1."
        }
      ]
    },
    // Etapa 8 – Teoria: Interpolação de Meios Aritméticos e Geométricos
    {
      etapaIndex: 8,
      flashcards: [
        {
          pergunta: "O que significa interpolar k meios aritméticos entre dois números a₁ e aₙ?",
          resposta: "Inserir k termos entre eles de modo que todos formem uma PA. O número total de termos será n = k + 2."
        },
        {
          pergunta: "Como se calcula a razão r ao interpolar k meios aritméticos entre a₁ e aₙ?",
          resposta: "r = (aₙ – a₁) / (n – 1), onde n = k + 2."
        }
      ]
    },
    // Etapa 9 – Exemplo 1: PA simples – identificando razão e termo geral
    {
      etapaIndex: 9,
      flashcards: [
        {
          pergunta: "Em uma PA, o 5º termo é 17 e o 10º termo é 37. Qual é a razão dessa PA?",
          resposta: "r = 4 (pois a₁₀ – a₅ = 5r → 20 = 5r → r = 4)."
        },
        {
          pergunta: "Com os dados do card anterior, qual é o primeiro termo da PA?",
          resposta: "a₁ = 1 (pois a₅ = a₁ + 4·4 = 17 ⇒ a₁ = 1)."
        }
      ]
    },
    // Etapa 10 – Exemplo 2: Soma de PA – aplicação em produção
    {
      etapaIndex: 10,
      flashcards: [
        {
          pergunta: "Uma fábrica produz 100 peças no 1º mês e aumenta 15 peças por mês. Qual é a produção no 12º mês?",
          resposta: "265 peças (a₁₂ = 100 + 11·15 = 265)."
        },
        {
          pergunta: "Qual é a produção total nos 12 primeiros meses dessa fábrica?",
          resposta: "2190 peças (S₁₂ = (100 + 265)·12/2 = 2190)."
        }
      ]
    },
    // Etapa 11 – Exemplo 3: PG com aplicação em juros compostos
    {
      etapaIndex: 11,
      flashcards: [
        {
          pergunta: "Um capital de R$ 1000 é aplicado a 5% ao mês em juros compostos. Qual o montante após 6 meses?",
          resposta: "R$ 1340,10 (1000 × 1,05⁶ ≈ 1340,10)."
        },
        {
          pergunta: "Qual o total de juros ganhos nessa aplicação?",
          resposta: "R$ 340,10 (1340,10 – 1000)."
        }
      ]
    },
    // Etapa 12 – Exemplo 4: PG infinita – dízima periódica
    {
      etapaIndex: 12,
      flashcards: [
        {
          pergunta: "Qual é a soma da PG infinita 0,3 + 0,03 + 0,003 + ...?",
          resposta: "1/3 (S∞ = 0,3 / (1 – 0,1) = 0,3/0,9 = 1/3)."
        },
        {
          pergunta: "Qual é a razão da PG que representa a dízima 0,333...?",
          resposta: "q = 0,1 (os termos são 0,3; 0,03; 0,003; ...)."
        }
      ]
    },
    // Etapa 13 – Exemplo 5: Interpolação de meios aritméticos
    {
      etapaIndex: 13,
      flashcards: [
        {
          pergunta: "Quais são os 4 meios aritméticos interpolados entre 5 e 25?",
          resposta: "9, 13, 17, 21 (PA: 5, 9, 13, 17, 21, 25; r = 4)."
        },
        {
          pergunta: "Qual é a razão da PA que resulta da interpolação de 4 meios entre 5 e 25?",
          resposta: "r = 4 (pois (25 – 5)/(6 – 1) = 20/5 = 4)."
        }
      ]
    },
    // Etapa 14 – Exemplo 6: Identificação de PA com razão negativa
    {
      etapaIndex: 14,
      flashcards: [
        {
          pergunta: "A sequência (20, 17, 14, 11, ...) é uma PA? Se sim, qual é a sua razão?",
          resposta: "Sim, é uma PA decrescente com r = –3 (pois 17 – 20 = –3, etc.)."
        },
        {
          pergunta: "Como verificar se uma sequência é uma PA?",
          resposta: "Calcula-se a diferença entre termos consecutivos; se for constante, é uma PA."
        }
      ]
    },
    // Etapa 15 – Exemplo 7: Soma de PA com número ímpar de termos
    {
      etapaIndex: 15,
      flashcards: [
        {
          pergunta: "Qual é a soma dos 7 primeiros termos da PA (2, 5, 8, 11, 14, 17, 20)?",
          resposta: "77 (S₇ = 7 · 11 = 77, pois o termo central é 11)."
        },
        {
          pergunta: "Qual é o termo central da PA (2, 5, 8, 11, 14, 17, 20)?",
          resposta: "11 (é o 4º termo)."
        }
      ]
    },
    // Etapa 16 – Exemplo 8: Soma de PG finita com razão negativa
    {
      etapaIndex: 16,
      flashcards: [
        {
          pergunta: "Qual é a soma dos 5 primeiros termos da PG (2, –4, 8, –16, 32)?",
          resposta: "22 (S₅ = 2·((–2)⁵ – 1)/(–2 – 1) = 22)."
        },
        {
          pergunta: "Qual é a razão da PG (2, –4, 8, –16, 32)?",
          resposta: "q = –2 (pois –4/2 = –2, 8/(–4) = –2, etc.)."
        }
      ]
    },
    // Etapa 17 – Exemplo 9: Produto dos termos de uma PG
    {
      etapaIndex: 17,
      flashcards: [
        {
          pergunta: "Qual é o produto dos 4 primeiros termos da PG (2, 4, 8, 16)?",
          resposta: "1024 (P₄ = √(2·16)⁴ = 32² = 1024)."
        },
        {
          pergunta: "Qual é a fórmula do produto dos n primeiros termos de uma PG?",
          resposta: "Pₙ = ± √(b₁ · bₙ)ⁿ, com sinal determinado pela quantidade de termos negativos."
        }
      ]
    },
    // Etapa 18 – Exemplo 10: Problema contextualizado (quitandeira)
    {
      etapaIndex: 18,
      flashcards: [
        {
          pergunta: "Uma quitandeira vendeu 300, 500 e 700 salgados em maio, junho e julho. Mantendo o padrão, quantos centos ela venderá de maio a dezembro?",
          resposta: "80 centos (PA: 3,5,7,...,17; S₈ = (3+17)·8/2 = 80)."
        },
        {
          pergunta: "Qual é a razão da PA correspondente às vendas mensais (em centos) nesse exemplo?",
          resposta: "r = 2 (pois 5 – 3 = 2, 7 – 5 = 2, ...)."
        }
      ]
    },
    // Etapa 19 – Etapa de Aprendizagem 1: Identificando razão de PA
    {
      etapaIndex: 19,
      flashcards: [
        {
          pergunta: "Dada a PA (10, 14, 18, 22, ...), qual é o seu 20º termo?",
          resposta: "86 (a₂₀ = 10 + 19·4 = 10 + 76 = 86)."
        },
        {
          pergunta: "Qual é a razão da PA (10, 14, 18, 22, ...)?",
          resposta: "4 (14 – 10 = 4)."
        }
      ]
    },
    // Etapa 20 – Etapa de Aprendizagem 2: Soma de PA
    {
      etapaIndex: 20,
      flashcards: [
        {
          pergunta: "Calcule a soma dos 15 primeiros termos da PA (5, 9, 13, 17, ...).",
          resposta: "495 (a₁₅ = 5 + 14·4 = 61; S₁₅ = (5+61)·15/2 = 495)."
        },
        {
          pergunta: "Qual é a razão da PA (5, 9, 13, 17, ...)?",
          resposta: "4 (9 – 5 = 4)."
        }
      ]
    },
    // Etapa 21 – Etapa de Aprendizagem 3: Termo geral da PG
    {
      etapaIndex: 21,
      flashcards: [
        {
          pergunta: "Em uma PG, o 1º termo é 3 e a razão é 2. Qual é o 10º termo?",
          resposta: "1536 (b₁₀ = 3·2⁹ = 3·512 = 1536)."
        },
        {
          pergunta: "Qual é a fórmula do termo geral de uma PG?",
          resposta: "bₙ = b₁ · q^(n – 1)."
        }
      ]
    },
    // Etapa 22 – Etapa de Aprendizagem 4: Soma de PG finita
    {
      etapaIndex: 22,
      flashcards: [
        {
          pergunta: "Calcule a soma dos 6 primeiros termos da PG (2, 4, 8, 16, 32, 64).",
          resposta: "126 (S₆ = 2·(2⁶ – 1)/(2 – 1) = 2·(64 – 1) = 126)."
        },
        {
          pergunta: "Qual é a fórmula da soma dos n primeiros termos de uma PG finita (q ≠ 1)?",
          resposta: "Sₙ = b₁·(qⁿ – 1)/(q – 1)."
        }
      ]
    },
    // Etapa 23 – Etapa de Aprendizagem 5: PG infinita
    {
      etapaIndex: 23,
      flashcards: [
        {
          pergunta: "Calcule a soma da PG infinita (1, 1/2, 1/4, 1/8, ...).",
          resposta: "2 (S∞ = 1/(1 – 1/2) = 2)."
        },
        {
          pergunta: "Qual é a condição para que uma PG infinita tenha soma finita?",
          resposta: "|q| < 1 (razão em módulo menor que 1)."
        }
      ]
    },
    // Etapa 24 – Questão estilo CESGRANRIO 1
    {
      etapaIndex: 24,
      flashcards: [
        {
          pergunta: "Em uma PA, a soma do 3º com o 7º termo é 30, e a soma do 5º com o 9º é 50. Qual é a razão?",
          resposta: "5 (Sistema: 2a₁+8r=30 e 2a₁+12r=50 → 4r=20 → r=5)."
        },
        {
          pergunta: "Nesse mesmo problema, qual é a relação entre as equações que permite encontrar r?",
          resposta: "Subtraindo as duas equações obtemos 4r = 20."
        }
      ]
    },
    // Etapa 25 – Questão estilo CESGRANRIO 2
    {
      etapaIndex: 25,
      flashcards: [
        {
          pergunta: "Uma sequência é definida por a₁ = 2 e aₙ = aₙ₋₁ + 3 para n ≥ 2. Qual é a soma dos 20 primeiros termos?",
          resposta: "610 (PA de razão 3: a₂₀ = 2 + 19·3 = 59; S₂₀ = (2+59)·20/2 = 610)."
        },
        {
          pergunta: "Qual é a razão da PA definida por aₙ = aₙ₋₁ + 3?",
          resposta: "3."
        }
      ]
    },
    // Etapa 26 – Questão estilo CESGRANRIO 3
    {
      etapaIndex: 26,
      flashcards: [
        {
          pergunta: "Uma cultura de bactérias dobra a cada hora. Se começa com 100 bactérias, quantas haverá após 5 horas?",
          resposta: "3200 (100 × 2⁵ = 100 × 32 = 3200)."
        },
        {
          pergunta: "Qual é a razão da PG que modela o crescimento dessa cultura?",
          resposta: "q = 2 (dobra a cada hora)."
        }
      ]
    },
    // Etapa 27 – Questão estilo CESGRANRIO 4
    {
      etapaIndex: 27,
      flashcards: [
        {
          pergunta: "Em uma PG, o 2º termo é 6 e o 5º termo é 48. Qual é a razão?",
          resposta: "2 (b₅/b₂ = q³ = 48/6 = 8 → q = 2)."
        },
        {
          pergunta: "Qual é a relação entre b₅ e b₂ em uma PG?",
          resposta: "b₅ = b₂ · q³."
        }
      ]
    },
    // Etapa 28 – Etapa de Aprendizagem 6: Identificação de PA com razão negativa
    {
      etapaIndex: 28,
      flashcards: [
        {
          pergunta: "A sequência (20, 17, 14, 11, ...) é uma PA? Se sim, qual é a sua razão?",
          resposta: "Sim, r = –3."
        },
        {
          pergunta: "Como se verifica se uma sequência é PA?",
          resposta: "Calcula-se a diferença entre termos consecutivos; se for constante, é PA."
        }
      ]
    },
    // Etapa 29 – Etapa de Aprendizagem 7: Soma de PA com número ímpar de termos
    {
      etapaIndex: 29,
      flashcards: [
        {
          pergunta: "Qual é a soma dos 7 primeiros termos da PA (2, 5, 8, 11, 14, 17, 20)?",
          resposta: "77 (S₇ = 7 · 11 = 77)."
        },
        {
          pergunta: "Qual é o termo central dessa PA?",
          resposta: "11."
        }
      ]
    },
    // Etapa 30 – Etapa de Aprendizagem 8: Soma de PG finita com razão negativa
    {
      etapaIndex: 30,
      flashcards: [
        {
          pergunta: "Calcule a soma dos 5 primeiros termos da PG (2, –4, 8, –16, 32).",
          resposta: "22 (S₅ = 2·((–2)⁵–1)/(–2–1) = 22)."
        },
        {
          pergunta: "Qual é a razão dessa PG?",
          resposta: "q = –2."
        }
      ]
    }
  ]
};
