export const deck = {
  moduloId: "progressoes",
  etapas: [
    {
      etapaIndex: 0,
      flashcards: [
        {
          pergunta: "O que é uma Progressão Aritmética (PA)?",
          resposta: "Sequência onde cada termo (a partir do segundo) é obtido somando uma constante (razão)."
        },
        {
          pergunta: "O que é uma Progressão Geométrica (PG)?",
          resposta: "Sequência onde cada termo (a partir do segundo) é obtido multiplicando por uma constante (razão)."
        }
      ]
    },
    {
      etapaIndex: 1,
      flashcards: [
        {
          pergunta: "O que é uma sequência numérica?",
          resposta: "Lista ordenada de números que obedece a uma lei de formação."
        },
        {
          pergunta: "Como se chama o termo de posição n em uma sequência?",
          resposta: "aₙ."
        }
      ]
    },
    {
      etapaIndex: 2,
      flashcards: [
        {
          pergunta: "Qual é a fórmula do termo geral de uma PA?",
          resposta: "aₙ = a₁ + (n-1)·r"
        },
        {
          pergunta: "Como se calcula a razão de uma PA?",
          resposta: "r = aₙ - aₙ₋₁ (diferença entre termos consecutivos)."
        }
      ]
    },
    {
      etapaIndex: 3,
      flashcards: [
        {
          pergunta: "Em uma PA, qual é a relação entre três termos consecutivos a, b, c?",
          resposta: "b = (a + c)/2 (média aritmética)."
        },
        {
          pergunta: "Em uma PA finita, como se relacionam termos equidistantes dos extremos?",
          resposta: "A soma de dois termos equidistantes é igual à soma dos extremos."
        }
      ]
    },
    {
      etapaIndex: 4,
      flashcards: [
        {
          pergunta: "Qual é a fórmula da soma dos n primeiros termos de uma PA?",
          resposta: "Sₙ = (a₁ + aₙ)·n/2"
        },
        {
          pergunta: "Se o número de termos de uma PA é ímpar, como calcular a soma usando o termo central?",
          resposta: "Sₙ = n · a_central."
        }
      ]
    },
    {
      etapaIndex: 5,
      flashcards: [
        {
          pergunta: "Qual é a fórmula do termo geral de uma PG?",
          resposta: "bₙ = b₁ · q^(n-1)"
        },
        {
          pergunta: "Como se calcula a razão de uma PG?",
          resposta: "q = bₙ / bₙ₋₁ (divisão entre termos consecutivos)."
        }
      ]
    },
    {
      etapaIndex: 6,
      flashcards: [
        {
          pergunta: "Em uma PG, qual é a relação entre três termos consecutivos a, b, c?",
          resposta: "b² = a·c (média geométrica)."
        },
        {
          pergunta: "Em uma PG finita, como se relacionam termos equidistantes dos extremos?",
          resposta: "O produto de dois termos equidistantes é igual ao produto dos extremos."
        }
      ]
    },
    {
      etapaIndex: 7,
      flashcards: [
        {
          pergunta: "Qual é a fórmula da soma dos n primeiros termos de uma PG (q ≠ 1)?",
          resposta: "Sₙ = b₁ · (qⁿ - 1) / (q - 1)"
        },
        {
          pergunta: "Qual é a fórmula da soma de uma PG infinita convergente?",
          resposta: "S∞ = b₁ / (1 - q), para |q| < 1."
        }
      ]
    },
    {
      etapaIndex: 8,
      flashcards: [
        {
          pergunta: "O que significa interpolar meios aritméticos entre dois números?",
          resposta: "Inserir termos entre eles de modo que todos formem uma PA."
        },
        {
          pergunta: "Como se calcula a razão ao interpolar k meios aritméticos entre a₁ e aₙ?",
          resposta: "r = (aₙ - a₁) / (n - 1), onde n = k + 2."
        }
      ]
    },
    {
      etapaIndex: 9,
      flashcards: [
        {
          pergunta: "No Exemplo 1, qual é a razão da PA em que a₅=17 e a₁₀=37?",
          resposta: "r = 4."
        },
        {
          pergunta: "No Exemplo 1, qual é o primeiro termo?",
          resposta: "a₁ = 1."
        }
      ]
    },
    {
      etapaIndex: 10,
      flashcards: [
        {
          pergunta: "No Exemplo 2, qual a produção no 12º mês?",
          resposta: "265 peças."
        },
        {
          pergunta: "No Exemplo 2, qual a produção total em 12 meses?",
          resposta: "2190 peças."
        }
      ]
    },
    {
      etapaIndex: 11,
      flashcards: [
        {
          pergunta: "No Exemplo 3, qual o montante após 6 meses com capital 1000 e taxa 5%?",
          resposta: "R$ 1340,10."
        },
        {
          pergunta: "No Exemplo 3, qual o total de juros ganhos?",
          resposta: "R$ 340,10."
        }
      ]
    },
    {
      etapaIndex: 12,
      flashcards: [
        {
          pergunta: "No Exemplo 4, qual a soma da série 0,333...?",
          resposta: "1/3."
        },
        {
          pergunta: "Qual é a razão da PG (0,3; 0,03; 0,003; ...)?",
          resposta: "q = 0,1."
        }
      ]
    },
    {
      etapaIndex: 13,
      flashcards: [
        {
          pergunta: "No Exemplo 5, quais são os 4 meios interpolados entre 5 e 25?",
          resposta: "9, 13, 17, 21."
        },
        {
          pergunta: "Qual é a razão da PA resultante?",
          resposta: "r = 4."
        }
      ]
    },
    {
      etapaIndex: 14,
      flashcards: [
        {
          pergunta: "No Exemplo 6, a sequência (20,17,14,11) é uma PA?",
          resposta: "Sim."
        },
        {
          pergunta: "Qual é a razão da PA?",
          resposta: "r = -3."
        }
      ]
    },
    {
      etapaIndex: 15,
      flashcards: [
        {
          pergunta: "No Exemplo 7, qual é a soma dos 7 primeiros termos da PA (2,5,8,11,14,17,20)?",
          resposta: "77."
        },
        {
          pergunta: "Qual é o termo central dessa PA?",
          resposta: "11."
        }
      ]
    },
    {
      etapaIndex: 16,
      flashcards: [
        {
          pergunta: "No Exemplo 8, qual é a soma dos 5 primeiros termos da PG (2,-4,8,-16,32)?",
          resposta: "22."
        },
        {
          pergunta: "Qual é a razão dessa PG?",
          resposta: "q = -2."
        }
      ]
    },
    {
      etapaIndex: 17,
      flashcards: [
        {
          pergunta: "No Exemplo 9, qual é o produto dos 4 primeiros termos da PG (2,4,8,16)?",
          resposta: "1024."
        },
        {
          pergunta: "Qual é a fórmula do produto dos n termos de uma PG?",
          resposta: "Pₙ = ± √(b₁·bₙ)ⁿ."
        }
      ]
    },
    {
      etapaIndex: 18,
      flashcards: [
        {
          pergunta: "No Exemplo 10, quantos centos foram vendidos de maio a dezembro?",
          resposta: "80 centos."
        },
        {
          pergunta: "Qual é a razão da PA de vendas?",
          resposta: "r = 2 (em centos)."
        }
      ]
    },
    {
      etapaIndex: 19,
      flashcards: [
        {
          pergunta: "Qual é o valor do 20º termo da PA (10,14,18,22,...)?",
          resposta: "86."
        },
        {
          pergunta: "Qual é a razão dessa PA?",
          resposta: "4."
        }
      ]
    },
    {
      etapaIndex: 20,
      flashcards: [
        {
          pergunta: "Qual é a soma dos 15 primeiros termos da PA (5,9,13,17,...)?",
          resposta: "495."
        },
        {
          pergunta: "Qual é a razão dessa PA?",
          resposta: "4."
        }
      ]
    },
    {
      etapaIndex: 21,
      flashcards: [
        {
          pergunta: "Qual é o 10º termo da PG com b₁=3 e q=2?",
          resposta: "1536."
        },
        {
          pergunta: "Qual é a fórmula do termo geral da PG?",
          resposta: "bₙ = b₁·q^(n-1)."
        }
      ]
    },
    {
      etapaIndex: 22,
      flashcards: [
        {
          pergunta: "Qual é a soma dos 6 primeiros termos da PG (2,4,8,16,32,64)?",
          resposta: "126."
        },
        {
          pergunta: "Qual é a fórmula da soma de PG finita?",
          resposta: "Sₙ = b₁(qⁿ-1)/(q-1)."
        }
      ]
    },
    {
      etapaIndex: 23,
      flashcards: [
        {
          pergunta: "Qual é a soma da PG infinita (1,1/2,1/4,1/8,...)?",
          resposta: "2."
        },
        {
          pergunta: "Qual é a condição para uma PG infinita convergir?",
          resposta: "|q| < 1."
        }
      ]
    },
    {
      etapaIndex: 24,
      flashcards: [
        {
          pergunta: "Qual é a razão da PA em que a₃+a₇=30 e a₅+a₉=50?",
          resposta: "5."
        },
        {
          pergunta: "Como se resolve esse sistema?",
          resposta: "Subtrair as equações: 4r = 20."
        }
      ]
    },
    {
      etapaIndex: 25,
      flashcards: [
        {
          pergunta: "Qual é a soma dos 20 primeiros termos da sequência a₁=2, aₙ=aₙ₋₁+3?",
          resposta: "610."
        },
        {
          pergunta: "Qual é o 20º termo?",
          resposta: "59."
        }
      ]
    },
    {
      etapaIndex: 26,
      flashcards: [
        {
          pergunta: "Após 5 horas, quantas bactérias haverá se a população dobra a cada hora e começa com 100?",
          resposta: "3200."
        },
        {
          pergunta: "Qual é a razão da PG?",
          resposta: "q = 2."
        }
      ]
    },
    {
      etapaIndex: 27,
      flashcards: [
        {
          pergunta: "Em uma PG, b₂=6 e b₅=48. Qual é a razão?",
          resposta: "2."
        },
        {
          pergunta: "Qual é a relação entre b₅ e b₂?",
          resposta: "b₅/b₂ = q³."
        }
      ]
    },
    {
      etapaIndex: 28,
      flashcards: [
        {
          pergunta: "A sequência (20,17,14,11) é uma PA? Qual a razão?",
          resposta: "Sim, r = -3."
        },
        {
          pergunta: "Como verificar se é PA?",
          resposta: "Calcular a diferença entre termos consecutivos; se constante, é PA."
        }
      ]
    },
    {
      etapaIndex: 29,
      flashcards: [
        {
          pergunta: "Qual é a soma dos 7 primeiros termos da PA (2,5,8,11,14,17,20)?",
          resposta: "77."
        },
        {
          pergunta: "Qual é o termo central?",
          resposta: "11."
        }
      ]
    },
    {
      etapaIndex: 30,
      flashcards: [
        {
          pergunta: "Qual é a soma dos 5 primeiros termos da PG (2,-4,8,-16,32)?",
          resposta: "22."
        },
        {
          pergunta: "Qual é a razão?",
          resposta: "q = -2."
        }
      ]
    }
  ]
};
