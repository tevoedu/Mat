// ARQUIVO: modulos/razoes-proporcoes.js
export const modulo = {
  id: "razoes-proporcoes",
  nome: "Aritmética: Porcentagem, Razão e Proporção",
  disciplina: "Matemática",
  ordem: 5,
  nivel: "Intermediário",

  introducao: {
    titulo: "Introdução",
    descricao: `
      <p>Porcentagem, razão, proporção e regra de três são as ferramentas mais cobradas em provas do Banco do Brasil. Elas aparecem em problemas de juros, descontos, divisão de lucros, misturas, escalas e até em questões de estatística. Dominar esses conceitos é essencial para resolver qualquer problema financeiro com segurança.</p>
      <p>Neste módulo você vai aprender a calcular porcentagens, aumentos e descontos, porcentagem de porcentagem, razão, proporção, divisões proporcionais e a famosa regra de três (direta e inversa), além de trabalhar com frações e seus complementos. O foco é treinar até acertar naturalmente.</p>
      <p>A CESGRANRIO costuma cobrar esses temas de forma contextualizada, com valores em reais e prazos. Fique atento à conversão de unidades e à leitura correta do enunciado — as pegadinhas mais comuns envolvem confundir regra de três direta com inversa e esquecer que aumentos e descontos sucessivos não se somam.</p>
    `,
    imagem: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 180" width="400" height="180">
      <rect width="400" height="180" fill="#f8fafc" rx="12"/>
      <text x="200" y="28" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">Porcentagem × Razão × Proporção</text>
      <circle cx="90" cy="110" r="45" fill="#e0e7ff" stroke="#6366f1" stroke-width="3"/>
      <path d="M 90 65 A 45 45 0 0 1 128 133 L 90 110 Z" fill="#6366f1"/>
      <text x="90" y="108" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="bold">30%</text>
      <text x="90" y="168" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">Parte ÷ Todo</text>
      <text x="220" y="90" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#0f172a" font-weight="bold">a : b</text>
      <text x="220" y="115" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">Razão</text>
      <text x="330" y="90" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#0f172a" font-weight="bold">a/b = c/d</text>
      <text x="330" y="115" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">Proporção</text>
      <rect x="290" y="135" width="18" height="18" fill="#10b981" rx="4"/>
      <rect x="313" y="135" width="18" height="18" fill="#10b981" rx="4"/>
      <rect x="336" y="135" width="18" height="18" fill="#10b981" rx="4"/>
      <rect x="359" y="135" width="18" height="18" fill="#f59e0b" rx="4"/>
    </svg>`
  },

  teoria: [
    {
      titulo: "1. Porcentagem e suas operações",
      conteudo: `
        <p>Porcentagem é uma razão cujo denominador é 100. Assim, <strong>25% = 25/100 = 0,25</strong>. A fórmula básica é:</p>
        <p><strong>P = (parte ÷ todo) × 100</strong></p>
        <p>Para <strong>aumentos e descontos</strong>, use fator multiplicativo:</p>
        <ul>
          <li>Aumento de i%: multiplicar por <strong>(1 + i/100)</strong>.</li>
          <li>Desconto de i%: multiplicar por <strong>(1 − i/100)</strong>.</li>
          <li>Aumentos/descontos sucessivos: <strong>multiplicar os fatores</strong> (nunca somar as taxas).</li>
          <li>Porcentagem de porcentagem: multiplicar as frações (ex.: 30% de 40% = 0,30 × 0,40 = 0,12 = 12%).</li>
        </ul>
      `
    },
    {
      titulo: "2. Razão, proporção e regra de três",
      conteudo: `
        <p><strong>Razão</strong> é o quociente entre duas grandezas: a : b = a/b. <strong>Proporção</strong> é a igualdade entre duas razões: a/b = c/d.</p>
        <p>Na <strong>divisão proporcional</strong>, dividimos um valor em partes proporcionais a números dados: somam-se os números, acha-se o valor de cada "parte" e multiplica-se.</p>
        <p><strong>Regra de três simples:</strong></p>
        <ul>
          <li><strong>Direta:</strong> as grandezas crescem juntas. Multiplica-se em cruz: a/b = c/x → x = b·c/a.</li>
          <li><strong>Inversa:</strong> uma cresce e a outra decresce. Multiplica-se na horizontal: x = a·b/c.</li>
        </ul>
        <p>Erro comum: <strong>usar regra de três direta em situação inversa</strong> (ex.: mais máquinas → menos tempo).</p>
      `
    }
  ],

  exemplos: [
    {
      titulo: "Exemplo 1 – Aumento e desconto sucessivos",
      enunciado: "Um produto de R$ 80,00 sofreu um aumento de 25% e, em seguida, um desconto de 10%. Qual o preço final?",
      resolucao: `
        <p><strong>Dados:</strong> valor inicial = 80; aumento = 25%; desconto = 10%.</p>
        <p><strong>Fatores:</strong> aumento → 1 + 0,25 = 1,25; desconto → 1 − 0,10 = 0,90.</p>
        <p><strong>Cálculo:</strong> 80 × 1,25 = 100. Depois, 100 × 0,90 = 90.</p>
        <p><strong>Resposta:</strong> R$ 90,00.</p>
      `,
      observacao: "Nunca some 25% − 10% = 15%. Os fatores são multiplicativos: 1,25 × 0,90 = 1,125, ou seja, aumento efetivo de 12,5%."
    },
    {
      titulo: "Exemplo 2 – Regra de três inversa",
      enunciado: "Seis operários constroem um muro em 12 dias. Em quantos dias oito operários construiriam o mesmo muro?",
      resolucao: `
        <p><strong>Dados:</strong> 6 operários → 12 dias; 8 operários → x dias.</p>
        <p><strong>Raciocínio:</strong> mais operários → menos dias (grandezas inversas).</p>
        <p><strong>Fórmula inversa:</strong> 6 × 12 = 8 × x → x = 72 ÷ 8 = 9.</p>
        <p><strong>Resposta:</strong> 9 dias.</p>
      `,
      observacao: "Se você fez 6/8 = 12/x, caiu na pegadinha: isso é regra direta e daria 16 dias, o dobro do tempo com mais gente — absurdo."
    }
  ],

  etapasAprendizagem: [
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 1 – Porcentagem básica",
      conteudo: "Aplique a fórmula P = (parte/todo) × 100.",
      pergunta: "Qual é o valor de 45% de 200?",
      alternativas: ["80", "85", "90", "95", "100"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Converta a taxa: 45% = 0,45.</li>
          <li>Multiplique: 0,45 × 200 = 90.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> usou 40% (0,40 × 200 = 80).</li>
          <li><strong>B:</strong> usou 42,5% (0,425 × 200 = 85).</li>
          <li><strong>D:</strong> usou 47,5% (0,475 × 200 = 95).</li>
          <li><strong>E:</strong> usou 50% (0,50 × 200 = 100).</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é esquecer de <strong>converter o percentual em decimal</strong>.</p>
        <p><strong>Resolução:</strong> 45% = 45/100 = 0,45. Logo, 0,45 × 200 = <strong>90</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 2 – Aumento percentual",
      conteudo: "Multiplique pelo fator (1 + i).",
      pergunta: "Um produto de R$ 800,00 sofreu aumento de 25%. Qual o novo preço?",
      alternativas: ["R$ 900,00", "R$ 950,00", "R$ 1.000,00", "R$ 1.050,00", "R$ 1.100,00"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Fator de aumento: 1 + 0,25 = 1,25.</li>
          <li>800 × 1,25 = R$ 1.000,00.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> aumento de 12,5%.</li>
          <li><strong>B:</strong> aumento de 18,75%.</li>
          <li><strong>D:</strong> aumento de 31,25%.</li>
          <li><strong>E:</strong> aumento de 37,5%.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p><strong>Resolução:</strong> 25% de 800 = 0,25 × 800 = 200. Novo preço = 800 + 200 = <strong>R$ 1.000,00</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 3 – Desconto percentual",
      conteudo: "Multiplique pelo fator (1 − i).",
      pergunta: "Um produto de R$ 240,00 está com 30% de desconto. Qual o preço final?",
      alternativas: ["R$ 158,00", "R$ 162,00", "R$ 168,00", "R$ 172,00", "R$ 178,00"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Fator de desconto: 1 − 0,30 = 0,70.</li>
          <li>240 × 0,70 = R$ 168,00.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> desconto de ~34,2%.</li>
          <li><strong>B:</strong> desconto de 32,5%.</li>
          <li><strong>D:</strong> desconto de ~28,3%.</li>
          <li><strong>E:</strong> desconto de ~25,8%.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p><strong>Resolução:</strong> 30% de 240 = 72. Preço final = 240 − 72 = <strong>R$ 168,00</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 4 – Razão",
      conteudo: "Divida pelo total das partes.",
      pergunta: "Dividindo 63 em partes proporcionais a 2 e 5, qual é a maior parte?",
      alternativas: ["18", "27", "36", "45", "54"],
      correta: 3,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Soma das partes: 2 + 5 = 7.</li>
          <li>Valor de cada parte: 63 ÷ 7 = 9.</li>
          <li>Maior parte: 5 × 9 = 45.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> usou 2 × 9 (menor parte).</li>
          <li><strong>B:</strong> usou 3 × 9.</li>
          <li><strong>C:</strong> usou 4 × 9.</li>
          <li><strong>E:</strong> usou 6 × 9.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Para dividir em razão 2:5, somam-se as partes: 7; cada parte vale 63/7 = 9. Maior parte = 5 × 9 = <strong>45</strong>.</p>
        <p><strong>Alternativa correta:</strong> D.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 5 – Regra de três direta",
      conteudo: "Grandezas diretamente proporcionais.",
      pergunta: "Se 3 cadernos custam R$ 21,00, quanto custam 7 cadernos?",
      alternativas: ["R$ 42,00", "R$ 45,00", "R$ 49,00", "R$ 52,00", "R$ 56,00"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Preço unitário: 21 ÷ 3 = 7 R$/caderno.</li>
          <li>7 cadernos: 7 × 7 = R$ 49,00.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> 6 cadernos × 7.</li>
          <li><strong>B:</strong> erro de cálculo.</li>
          <li><strong>D:</strong> usou 7,43 × 7.</li>
          <li><strong>E:</strong> 8 cadernos × 7.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p><strong>Resolução:</strong> 3/7 = 21/x → x = (7 × 21)/3 = <strong>R$ 49,00</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 6 – Porcentagem de porcentagem",
      conteudo: "Multiplique as duas taxas.",
      pergunta: "Quanto é 30% de 50% de 600?",
      alternativas: ["60", "75", "90", "105", "120"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>50% de 600 = 0,50 × 600 = 300.</li>
          <li>30% de 300 = 0,30 × 300 = 90.</li>
          <li>Ou direto: 0,30 × 0,50 × 600 = 0,15 × 600 = 90.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> usou 10% (0,10 × 600).</li>
          <li><strong>B:</strong> usou 12,5%.</li>
          <li><strong>D:</strong> usou 17,5%.</li>
          <li><strong>E:</strong> usou 20%.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Em "porcentagem de porcentagem", <strong>multiplique</strong> as taxas: 0,30 × 0,50 = 0,15 = 15%. Então, 15% de 600 = <strong>90</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 7 – Restante e complemento",
      conteudo: "Trabalhe com o complemento da fração.",
      pergunta: "Uma pessoa gastou 2/7 do seu salário e ainda sobraram R$ 250,00. Qual era o salário?",
      alternativas: ["R$ 300,00", "R$ 320,00", "R$ 350,00", "R$ 400,00", "R$ 450,00"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Se gastou 2/7, sobrou 5/7.</li>
          <li>5/7 do salário = 250 → salário = 250 × 7/5 = 350.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> usou 250 × 6/5.</li>
          <li><strong>B:</strong> arredondou errado.</li>
          <li><strong>D:</strong> multiplicou 250 × 8/5.</li>
          <li><strong>E:</strong> multiplicou 250 × 9/5.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Sobra = 1 − 2/7 = 5/7. Se 5/7 = 250, então 1/7 = 50 e total = 7 × 50 = <strong>R$ 350,00</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 8 – Problema inverso",
      conteudo: "Desfaça o fator multiplicativo.",
      pergunta: "Após um aumento de 40%, o preço de um produto passou a ser R$ 280,00. Qual era o preço original?",
      alternativas: ["R$ 150,00", "R$ 180,00", "R$ 200,00", "R$ 220,00", "R$ 240,00"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Fator de aumento: 1,40.</li>
          <li>1,40 × x = 280 → x = 280 / 1,40 = 200.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> subtraiu 130 do valor final.</li>
          <li><strong>B:</strong> subtraiu 100.</li>
          <li><strong>D:</strong> subtraiu 60.</li>
          <li><strong>E:</strong> subtraiu 40.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Não basta subtrair 40% do valor final. É preciso <strong>dividir pelo fator</strong>: 280 / 1,40 = <strong>R$ 200,00</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 9 – Divisão proporcional",
      conteudo: "Some as partes e distribua.",
      pergunta: "Dividindo R$ 1.500,00 em partes proporcionais a 1, 2 e 3, qual é o valor da maior parte?",
      alternativas: ["R$ 500,00", "R$ 600,00", "R$ 700,00", "R$ 750,00", "R$ 800,00"],
      correta: 3,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Total de partes: 1 + 2 + 3 = 6.</li>
          <li>Cada parte: 1.500 ÷ 6 = 250.</li>
          <li>Maior parte: 3 × 250 = R$ 750,00.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> usou 2 × 250.</li>
          <li><strong>B:</strong> usou 2,4 × 250.</li>
          <li><strong>C:</strong> usou 2,8 × 250.</li>
          <li><strong>E:</strong> usou 3,2 × 250.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Soma = 6; cada = 250. Maior = 3 × 250 = <strong>R$ 750,00</strong>.</p>
        <p><strong>Alternativa correta:</strong> D.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 10 – Regra de três inversa",
      conteudo: "Mais recurso → menos tempo.",
      pergunta: "Se 8 operários constroem uma casa em 15 dias, em quantos dias 12 operários construiriam a mesma casa?",
      alternativas: ["8", "9", "10", "11", "12"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Grandezas inversas: mais operários → menos dias.</li>
          <li>8 × 15 = 12 × x → 120 = 12x → x = 10.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> aplicou regra direta (8/12 = x/15).</li>
          <li><strong>B:</strong> arredondou errado.</li>
          <li><strong>D:</strong> somou 3 dias.</li>
          <li><strong>E:</strong> usou 12 × 15 / 15.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p><strong>Resolução:</strong> regra de três <strong>inversa</strong>: 8 · 15 = 12 · x → x = 120/12 = <strong>10 dias</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 11 – Escala (grandezas proporcionais)",
      conteudo: "Converta unidades ao final.",
      pergunta: "Um mapa tem escala 1:50.000. Se a distância entre duas cidades no mapa é 4 cm, qual a distância real em km?",
      alternativas: ["1 km", "1,5 km", "2 km", "2,5 km", "3 km"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>4 cm × 50.000 = 200.000 cm.</li>
          <li>200.000 cm ÷ 100.000 = 2 km.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> dividiu por 200.000.</li>
          <li><strong>B:</strong> usou 3,75 cm.</li>
          <li><strong>D:</strong> usou 5 cm.</li>
          <li><strong>E:</strong> usou 6 cm.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p><strong>Resolução:</strong> 1 cm no mapa = 50.000 cm reais = 0,5 km. 4 cm × 0,5 km = <strong>2 km</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 12 – Aumentos e descontos sucessivos",
      conteudo: "Multiplique os fatores, nunca some.",
      pergunta: "Um produto de R$ 500,00 recebeu aumento de 20% e depois desconto de 20%. Qual o preço final?",
      alternativas: ["R$ 460,00", "R$ 470,00", "R$ 480,00", "R$ 490,00", "R$ 500,00"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Fator combinado: 1,20 × 0,80 = 0,96.</li>
          <li>500 × 0,96 = R$ 480,00.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> usou 0,92 (queda de 8%).</li>
          <li><strong>B:</strong> usou 0,94 (queda de 6%).</li>
          <li><strong>D:</strong> usou 0,98 (queda de 2%).</li>
          <li><strong>E:</strong> pensou que se cancelam — erro clássico.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Aumentos e descontos <strong>não se cancelam</strong>: 1,20 × 0,80 = 0,96 → queda efetiva de 4%. Preço final = 500 × 0,96 = <strong>R$ 480,00</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 13 – Fração + porcentagem",
      conteudo: "Combine os conceitos em duas etapas.",
      pergunta: "Em uma escola de 500 alunos, 2/5 são meninas. Dessas meninas, 40% usam óculos. Quantas meninas usam óculos?",
      alternativas: ["50", "60", "70", "80", "90"],
      correta: 3,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Meninas: 2/5 × 500 = 200.</li>
          <li>Usam óculos: 40% de 200 = 0,40 × 200 = 80.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> usou 25% de 200.</li>
          <li><strong>B:</strong> usou 30% de 200.</li>
          <li><strong>C:</strong> usou 35% de 200.</li>
          <li><strong>E:</strong> usou 45% de 200.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Primeiro: 2/5 × 500 = 200 meninas. Depois: 40% × 200 = <strong>80 meninas</strong>.</p>
        <p><strong>Alternativa correta:</strong> D.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 14 – Problema inverso complexo",
      conteudo: "Divida pelo fator combinado.",
      pergunta: "Um produto sofreu aumento de 30% e, em seguida, desconto de 10%, passando a custar R$ 351,00. Qual era o preço original?",
      alternativas: ["R$ 250,00", "R$ 280,00", "R$ 300,00", "R$ 320,00", "R$ 350,00"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Fator combinado: 1,30 × 0,90 = 1,17.</li>
          <li>1,17 × x = 351 → x = 351 / 1,17 = 300.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> subtraiu 101 do valor final.</li>
          <li><strong>B:</strong> subtraiu 71.</li>
          <li><strong>D:</strong> dividiu por 1,10.</li>
          <li><strong>E:</strong> somou o valor dos percentuais.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p><strong>Resolução:</strong> fator total = 1,30 × 0,90 = 1,17. Preço inicial = 351 / 1,17 = <strong>R$ 300,00</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 15 – Divisão proporcional com frações",
      conteudo: "Multiplique as frações pelo MMC.",
      pergunta: "Dividindo R$ 2.600,00 em partes proporcionais a 1/2, 1/3 e 1/4, qual é o valor da maior parte?",
      alternativas: ["R$ 800,00", "R$ 1.000,00", "R$ 1.100,00", "R$ 1.200,00", "R$ 1.300,00"],
      correta: 3,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>MMC(2,3,4) = 12. Multiplicando: 6, 4, 3.</li>
          <li>Soma: 6 + 4 + 3 = 13.</li>
          <li>Cada parte: 2.600 ÷ 13 = 200.</li>
          <li>Maior parte: 6 × 200 = R$ 1.200,00.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> usou 4 × 200.</li>
          <li><strong>B:</strong> usou 5 × 200.</li>
          <li><strong>C:</strong> usou 5,5 × 200.</li>
          <li><strong>E:</strong> usou 6,5 × 200.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Multiplique as frações por 12: 6:4:3. Soma = 13. Cada parte = 200. Maior = 6 × 200 = <strong>R$ 1.200,00</strong>.</p>
        <p><strong>Alternativa correta:</strong> D.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 16 – Regra de três composta",
      conteudo: "Envolve três grandezas ao mesmo tempo.",
      pergunta: "Se 4 máquinas produzem 200 peças em 5 dias, quantas peças 6 máquinas produzirão em 10 dias?",
      alternativas: ["400", "500", "600", "700", "800"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Produtividade por máquina/dia: 200 / (4 × 5) = 10 peças.</li>
          <li>6 máquinas × 10 dias × 10 peças = 600 peças.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> dobrou as peças apenas.</li>
          <li><strong>B:</strong> usou fator 2,5.</li>
          <li><strong>D:</strong> usou fator 3,5.</li>
          <li><strong>E:</strong> multiplicou 200 × 4.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Calcule a produtividade unitária: 200/(4×5) = 10 peças por máquina/dia. Então: 6 × 10 × 10 = <strong>600 peças</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 17 – Encadeamento de aumentos e descontos",
      conteudo: "Multiplique todos os fatores.",
      pergunta: "Um produto de R$ 400,00 sofreu aumento de 50% e depois desconto de 50%. Qual o preço final?",
      alternativas: ["R$ 200,00", "R$ 250,00", "R$ 300,00", "R$ 350,00", "R$ 400,00"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Fatores: 1,50 × 0,50 = 0,75.</li>
          <li>400 × 0,75 = R$ 300,00.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> 400 × 0,50 = 200 (só o desconto).</li>
          <li><strong>B:</strong> usou 0,625.</li>
          <li><strong>D:</strong> usou 0,875.</li>
          <li><strong>E:</strong> pensou que se cancelam — erro clássico.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Aumento de 50% <strong>não cancela</strong> desconto de 50%: 1,50 × 0,50 = 0,75 → perda de 25%. Preço final = 400 × 0,75 = <strong>R$ 300,00</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício 18 – Problema misto (fração + porcentagem)",
      conteudo: "Resolva em cadeia com o complemento.",
      pergunta: "Um trabalhador gasta 40% do salário com aluguel. Do restante, gasta 1/3 com alimentação. Se ainda sobra R$ 1.200,00, qual é o salário?",
      alternativas: ["R$ 2.000,00", "R$ 2.500,00", "R$ 3.000,00", "R$ 3.500,00", "R$ 4.000,00"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Após aluguel: sobra 60% = 0,60.</li>
          <li>Gasta 1/3 de 60%, sobrando 2/3 de 60% = 0,40 (40% do salário).</li>
          <li>40% do salário = 1.200 → salário = 1.200 / 0,40 = 3.000.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> multiplicou 1200 por 5/3.</li>
          <li><strong>B:</strong> usou 48% em vez de 40%.</li>
          <li><strong>D:</strong> usou ~34% em vez de 40%.</li>
          <li><strong>E:</strong> usou 30% em vez de 40%.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Após aluguel sobra 60%. Após 1/3 da alimentação, sobra 2/3 × 60% = <strong>40%</strong> do salário. Logo, 0,40 × S = 1.200 → S = <strong>R$ 3.000,00</strong>.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    }
  ],

  questoes: [
    {
      dificuldade: "Fácil",
      pergunta: "Qual é o valor de 30% de 150?",
      alternativas: ["40", "42", "45", "48", "50"],
      correta: 2,
      explicacaoAcerto: "<p>0,30 × 150 = <strong>45</strong>.</p>",
      explicacaoErro: "<p>Converta 30% em 0,30 e multiplique por 150: 45.</p>"
    },
    {
      dificuldade: "Fácil",
      pergunta: "Um salário de R$ 1.200,00 recebeu aumento de 8%. Qual o novo valor?",
      alternativas: ["R$ 1.260,00", "R$ 1.280,00", "R$ 1.296,00", "R$ 1.310,00", "R$ 1.320,00"],
      correta: 2,
      explicacaoAcerto: "<p>1.200 × 1,08 = <strong>R$ 1.296,00</strong>.</p>",
      explicacaoErro: "<p>8% de 1.200 = 96. 1.200 + 96 = 1.296.</p>"
    },
    {
      dificuldade: "Fácil",
      pergunta: "Um produto de R$ 800,00 com 15% de desconto passa a custar:",
      alternativas: ["R$ 640,00", "R$ 660,00", "R$ 680,00", "R$ 700,00", "R$ 720,00"],
      correta: 2,
      explicacaoAcerto: "<p>800 × 0,85 = <strong>R$ 680,00</strong>.</p>",
      explicacaoErro: "<p>15% de 800 = 120. 800 − 120 = 680.</p>"
    },
    {
      dificuldade: "Fácil",
      pergunta: "Dividindo 88 em partes proporcionais a 4 e 7, qual é a maior parte?",
      alternativas: ["40", "48", "56", "64", "72"],
      correta: 2,
      explicacaoAcerto: "<p>Partes: 4 + 7 = 11; cada = 8; maior = 7 × 8 = <strong>56</strong>.</p>",
      explicacaoErro: "<p>Some as partes (11), divida 88/11 = 8 e multiplique por 7: 56.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Se 4 kg de arroz custam R$ 52,00, quanto custam 9 kg?",
      alternativas: ["R$ 108,00", "R$ 112,00", "R$ 117,00", "R$ 121,00", "R$ 125,00"],
      correta: 2,
      explicacaoAcerto: "<p>Unitário = 52/4 = 13. 9 × 13 = <strong>R$ 117,00</strong>.</p>",
      explicacaoErro: "<p>Regra de três direta: 4/9 = 52/x → x = (9 × 52)/4 = 117.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "5 máquinas fazem um lote em 12 dias. Em quantos dias 6 máquinas fazem o mesmo lote?",
      alternativas: ["8", "9", "10", "11", "12"],
      correta: 2,
      explicacaoAcerto: "<p>Inversa: 5 × 12 = 6 × x → x = 60/6 = <strong>10 dias</strong>.</p>",
      explicacaoErro: "<p>Mais máquinas → menos dias: 5·12 = 6·x → x = 10.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Quanto é 50% de 40% de 800?",
      alternativas: ["120", "140", "160", "180", "200"],
      correta: 2,
      explicacaoAcerto: "<p>0,50 × 0,40 × 800 = 0,20 × 800 = <strong>160</strong>.</p>",
      explicacaoErro: "<p>Multiplique as taxas: 0,50 × 0,40 = 0,20. Depois, 20% de 800 = 160.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Após desconto de 35%, um produto passou a custar R$ 325,00. Qual era o preço original?",
      alternativas: ["R$ 450,00", "R$ 475,00", "R$ 500,00", "R$ 525,00", "R$ 550,00"],
      correta: 2,
      explicacaoAcerto: "<p>x × 0,65 = 325 → x = 325 / 0,65 = <strong>R$ 500,00</strong>.</p>",
      explicacaoErro: "<p>Original = 325/0,65 = 500. Não basta somar 35% ao valor final.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Dividindo R$ 3.600,00 em partes proporcionais a 2, 3 e 4, qual o valor da maior parte?",
      alternativas: ["R$ 800,00", "R$ 1.200,00", "R$ 1.400,00", "R$ 1.600,00", "R$ 1.800,00"],
      correta: 3,
      explicacaoAcerto: "<p>Soma = 9; cada = 400. Maior = 4 × 400 = <strong>R$ 1.600,00</strong>.</p>",
      explicacaoErro: "<p>2 + 3 + 4 = 9; cada parte = 400; maior = 4 × 400 = 1.600.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Um produto de R$ 700,00 recebeu aumento de 20% e depois desconto de 10%. Qual o preço final?",
      alternativas: ["R$ 740,00", "R$ 750,00", "R$ 756,00", "R$ 760,00", "R$ 770,00"],
      correta: 2,
      explicacaoAcerto: "<p>700 × 1,20 × 0,90 = 700 × 1,08 = <strong>R$ 756,00</strong>.</p>",
      explicacaoErro: "<p>Fatores combinados: 1,20 × 0,90 = 1,08. 700 × 1,08 = 756.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Uma pessoa gastou 3/8 do salário e sobraram R$ 250,00. Qual era o salário?",
      alternativas: ["R$ 320,00", "R$ 360,00", "R$ 400,00", "R$ 440,00", "R$ 480,00"],
      correta: 2,
      explicacaoAcerto: "<p>Sobra = 5/8 = 250 → 1/8 = 50 → total = <strong>R$ 400,00</strong>.</p>",
      explicacaoErro: "<p>Sobra = 1 − 3/8 = 5/8. 5/8 = 250, logo 1/8 = 50 e total = 400.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Se 2/3 de uma quantia é R$ 240,00, qual é a quantia total?",
      alternativas: ["R$ 300,00", "R$ 330,00", "R$ 360,00", "R$ 390,00", "R$ 420,00"],
      correta: 2,
      explicacaoAcerto: "<p>2/3 = 240 → 1/3 = 120 → total = <strong>R$ 360,00</strong>.</p>",
      explicacaoErro: "<p>Total = 240 × 3/2 = 360.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Um produto de R$ 600,00 recebeu acréscimo de 25% e depois desconto de 20%. O preço final, em reais, é:",
      alternativas: ["R$ 550,00", "R$ 570,00", "R$ 600,00", "R$ 630,00", "R$ 660,00"],
      correta: 2,
      explicacaoAcerto: "<p>600 × 1,25 × 0,80 = 600 × 1,00 = <strong>R$ 600,00</strong>.</p>",
      explicacaoErro: "<p>1,25 × 0,80 = 1,00 → o preço não muda. 600 × 1,00 = 600.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Quanto é 15% de 30% de 2.000?",
      alternativas: ["60", "75", "90", "105", "120"],
      correta: 2,
      explicacaoAcerto: "<p>0,15 × 0,30 × 2.000 = 0,045 × 2.000 = <strong>90</strong>.</p>",
      explicacaoErro: "<p>0,15 × 0,30 = 0,045 = 4,5%. 4,5% de 2.000 = 90.</p>"
    },
    {
      dificuldade: "Difícil",
      pergunta: "Um mapa tem escala 1:25.000. Uma distância de 8 cm no mapa corresponde, na realidade, a:",
      alternativas: ["1,5 km", "2 km", "2,5 km", "3 km", "4 km"],
      correta: 1,
      explicacaoAcerto: "<p>8 × 25.000 = 200.000 cm = <strong>2 km</strong>.</p>",
      explicacaoErro: "<p>1 cm = 0,25 km; 8 cm × 0,25 = 2 km.</p>"
    }
  ],

  avaliacaoFinal: {
    quantidade: 30,
    questoes: [
      // ── FÁCEIS (8) ──
      {
        dificuldade: "Fácil",
        pergunta: "Qual é o valor de 25% de 480?",
        alternativas: ["100", "110", "120", "130", "140"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>0,25 × 480 = <strong>120</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 20,8%.</li>
            <li><strong>B:</strong> usou 22,9%.</li>
            <li><strong>D:</strong> usou 27,1%.</li>
            <li><strong>E:</strong> usou 29,2%.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>25% = 1/4. Então, 480 ÷ 4 = <strong>120</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Fácil",
        pergunta: "Um produto de R$ 400,00 recebeu aumento de 15%. Qual o novo preço?",
        alternativas: ["R$ 440,00", "R$ 450,00", "R$ 460,00", "R$ 470,00", "R$ 480,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>400 × 1,15 = <strong>R$ 460,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> aumento de 10%.</li>
            <li><strong>B:</strong> aumento de 12,5%.</li>
            <li><strong>D:</strong> aumento de 17,5%.</li>
            <li><strong>E:</strong> aumento de 20%.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>15% de 400 = 60. Novo preço = 400 + 60 = <strong>R$ 460,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Fácil",
        pergunta: "Uma TV de R$ 600,00 com 25% de desconto passa a custar:",
        alternativas: ["R$ 400,00", "R$ 425,00", "R$ 450,00", "R$ 475,00", "R$ 500,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>600 × 0,75 = <strong>R$ 450,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> desconto de ~33,3%.</li>
            <li><strong>B:</strong> desconto de ~29,2%.</li>
            <li><strong>D:</strong> desconto de ~20,8%.</li>
            <li><strong>E:</strong> desconto de ~16,7%.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>25% de 600 = 150. Preço final = 600 − 150 = <strong>R$ 450,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Fácil",
        pergunta: "Dividindo 70 em partes proporcionais a 3 e 4, qual é a maior parte?",
        alternativas: ["20", "30", "40", "50", "60"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>3 + 4 = 7; cada = 10. Maior = 4 × 10 = <strong>40</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 2 × 10.</li>
            <li><strong>B:</strong> usou 3 × 10.</li>
            <li><strong>D:</strong> usou 5 × 10.</li>
            <li><strong>E:</strong> usou 6 × 10.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Partes: 3 + 4 = 7; cada = 70/7 = 10. Maior = 4 × 10 = <strong>40</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Fácil",
        pergunta: "Se 8 kg de café custam R$ 56,00, quanto custam 5 kg?",
        alternativas: ["R$ 30,00", "R$ 32,00", "R$ 35,00", "R$ 40,00", "R$ 42,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>Unitário = 56/8 = 7. Então, 5 × 7 = <strong>R$ 35,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 6 × 5.</li>
            <li><strong>B:</strong> usou 6,4 × 5.</li>
            <li><strong>D:</strong> usou 8 × 5.</li>
            <li><strong>E:</strong> usou 8,4 × 5.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Regra de três direta: 8/5 = 56/x → x = (5 × 56)/8 = <strong>R$ 35,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Fácil",
        pergunta: "Se 5/8 dos alunos são meninas, qual fração representa os meninos?",
        alternativas: ["5/8", "3/8", "2/5", "3/5", "5/3"],
        correta: 1,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>Complemento: 1 − 5/8 = <strong>3/8</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> repetiu o valor das meninas.</li>
            <li><strong>C:</strong> razão entre meninos e meninas.</li>
            <li><strong>D:</strong> inverteu a razão (3/5).</li>
            <li><strong>E:</strong> inverteu o numerador e denominador.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Fração complementar: 8/8 − 5/8 = <strong>3/8</strong>.</p>
          <p><strong>Alternativa correta:</strong> B.</p>
        `
      },
      {
        dificuldade: "Fácil",
        pergunta: "Quanto é 20% de 30% de 500?",
        alternativas: ["15", "20", "30", "45", "60"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>0,20 × 0,30 × 500 = 0,06 × 500 = <strong>30</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 3%.</li>
            <li><strong>B:</strong> usou 4%.</li>
            <li><strong>D:</strong> usou 9%.</li>
            <li><strong>E:</strong> usou 12%.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Multiplique as taxas: 0,20 × 0,30 = 0,06 = 6%. 6% de 500 = <strong>30</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Fácil",
        pergunta: "12 máquinas fazem um serviço em 10 dias. Em quantos dias 15 máquinas fariam o mesmo serviço?",
        alternativas: ["6", "7", "8", "9", "10"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>Inversa: 12 × 10 = 15 × x → x = 120/15 = <strong>8 dias</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 12 × 10 / 20.</li>
            <li><strong>B:</strong> erro de cálculo.</li>
            <li><strong>D:</strong> somou 1 dia.</li>
            <li><strong>E:</strong> repetiu o valor original.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Mais máquinas → menos dias (inversa): 12 × 10 = 15 × x → x = <strong>8 dias</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },

      // ── MÉDIAS (14) ──
      {
        dificuldade: "Média",
        pergunta: "Qual é o valor de 35% de 800?",
        alternativas: ["240", "260", "280", "300", "320"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>0,35 × 800 = <strong>280</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 30%.</li>
            <li><strong>B:</strong> usou 32,5%.</li>
            <li><strong>D:</strong> usou 37,5%.</li>
            <li><strong>E:</strong> usou 40%.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>0,35 × 800 = <strong>280</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Um produto de R$ 250,00 recebeu aumento de 20%. Qual o novo preço?",
        alternativas: ["R$ 275,00", "R$ 290,00", "R$ 300,00", "R$ 310,00", "R$ 320,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>250 × 1,20 = <strong>R$ 300,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> aumento de 10%.</li>
            <li><strong>B:</strong> aumento de 16%.</li>
            <li><strong>D:</strong> aumento de 24%.</li>
            <li><strong>E:</strong> aumento de 28%.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>20% de 250 = 50. Novo preço = 250 + 50 = <strong>R$ 300,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Um produto de R$ 900,00 com 30% de desconto passa a custar:",
        alternativas: ["R$ 600,00", "R$ 620,00", "R$ 630,00", "R$ 640,00", "R$ 660,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>900 × 0,70 = <strong>R$ 630,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> desconto de ~33,3%.</li>
            <li><strong>B:</strong> desconto de ~31,1%.</li>
            <li><strong>D:</strong> desconto de ~28,9%.</li>
            <li><strong>E:</strong> desconto de ~26,7%.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>30% de 900 = 270. Preço final = 900 − 270 = <strong>R$ 630,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Após um desconto de 20%, um produto passou a custar R$ 320,00. Qual era o preço original?",
        alternativas: ["R$ 360,00", "R$ 380,00", "R$ 400,00", "R$ 420,00", "R$ 450,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>x × 0,80 = 320 → x = 320/0,80 = <strong>R$ 400,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> somou 40 ao final.</li>
            <li><strong>B:</strong> somou 60.</li>
            <li><strong>D:</strong> somou 100.</li>
            <li><strong>E:</strong> somou 130.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Não basta somar 20% a 320. Divida pelo fator: 320 / 0,80 = <strong>R$ 400,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Dividindo R$ 300,00 em partes proporcionais a 2, 5 e 8, qual o valor da maior parte?",
        alternativas: ["R$ 100,00", "R$ 120,00", "R$ 140,00", "R$ 160,00", "R$ 180,00"],
        correta: 3,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>Soma = 2 + 5 + 8 = 15. Cada parte = 300/15 = 20. Maior = 8 × 20 = <strong>R$ 160,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 5 × 20.</li>
            <li><strong>B:</strong> usou 6 × 20.</li>
            <li><strong>C:</strong> usou 7 × 20.</li>
            <li><strong>E:</strong> usou 9 × 20.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Soma das partes = 15; cada = 20; maior = 8 × 20 = <strong>R$ 160,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> D.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Se 5 kg de um produto custam R$ 35,00, quanto custam 8 kg?",
        alternativas: ["R$ 48,00", "R$ 52,00", "R$ 56,00", "R$ 60,00", "R$ 64,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>Unitário = 35/5 = 7. 8 × 7 = <strong>R$ 56,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 6 × 8.</li>
            <li><strong>B:</strong> usou 6,5 × 8.</li>
            <li><strong>D:</strong> usou 7,5 × 8.</li>
            <li><strong>E:</strong> usou 8 × 8.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Regra de três direta: 5/8 = 35/x → x = (8 × 35)/5 = <strong>R$ 56,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Se 6 pedreiros constroem um muro em 20 dias, em quantos dias 8 pedreiros fariam o mesmo muro?",
        alternativas: ["12", "14", "15", "16", "18"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>Inversa: 6 × 20 = 8 × x → x = 120/8 = <strong>15 dias</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> aplicou 20 × 0,6.</li>
            <li><strong>B:</strong> arredondou.</li>
            <li><strong>D:</strong> somou 4.</li>
            <li><strong>E:</strong> subtraiu 2.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Mais pedreiros → menos dias. 6 × 20 = 8 × x → x = <strong>15 dias</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Quanto é 40% de 25% de 1.200?",
        alternativas: ["90", "100", "110", "120", "130"],
        correta: 3,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>0,40 × 0,25 × 1.200 = 0,10 × 1.200 = <strong>120</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 7,5%.</li>
            <li><strong>B:</strong> usou 8,33%.</li>
            <li><strong>C:</strong> usou 9,17%.</li>
            <li><strong>E:</strong> usou 10,83%.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Multiplique as taxas: 0,40 × 0,25 = 0,10 = 10%. 10% de 1.200 = <strong>120</strong>.</p>
          <p><strong>Alternativa correta:</strong> D.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Um produto de R$ 750,00 recebeu aumento de 20% e depois desconto de 20%. Qual o preço final?",
        alternativas: ["R$ 700,00", "R$ 710,00", "R$ 720,00", "R$ 730,00", "R$ 750,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>750 × 1,20 × 0,80 = 750 × 0,96 = <strong>R$ 720,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 0,933.</li>
            <li><strong>B:</strong> usou 0,947.</li>
            <li><strong>D:</strong> usou 0,973.</li>
            <li><strong>E:</strong> pensou que se cancelam — erro clássico.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>1,20 × 0,80 = 0,96 → perda de 4%. Preço final = 750 × 0,96 = <strong>R$ 720,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Se 2/3 de uma quantia é R$ 480,00, qual é a quantia total?",
        alternativas: ["R$ 600,00", "R$ 640,00", "R$ 720,00", "R$ 800,00", "R$ 960,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>2/3 = 480 → 1/3 = 240 → total = 3 × 240 = <strong>R$ 720,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 480 × 1,25.</li>
            <li><strong>B:</strong> usou 480 × 4/3.</li>
            <li><strong>D:</strong> usou 480 × 5/3.</li>
            <li><strong>E:</strong> usou 480 × 2.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Total = 480 × 3/2 = <strong>R$ 720,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Se 3/4 dos funcionários são homens e há 120 mulheres, qual é o total de funcionários?",
        alternativas: ["360", "400", "440", "480", "520"],
        correta: 3,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>Mulheres = 1/4 do total = 120 → total = 4 × 120 = <strong>480</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 3 × 120.</li>
            <li><strong>B:</strong> multiplicou 120 por 10/3.</li>
            <li><strong>C:</strong> somou 440 sem justificativa.</li>
            <li><strong>E:</strong> somou 520.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Se 3/4 são homens, 1/4 são mulheres = 120. Total = 4 × 120 = <strong>480</strong>.</p>
          <p><strong>Alternativa correta:</strong> D.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Qual é o valor de 15% de R$ 3.200,00?",
        alternativas: ["R$ 420,00", "R$ 450,00", "R$ 480,00", "R$ 510,00", "R$ 540,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>0,15 × 3.200 = <strong>R$ 480,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 13,1%.</li>
            <li><strong>B:</strong> usou 14,1%.</li>
            <li><strong>D:</strong> usou 15,9%.</li>
            <li><strong>E:</strong> usou 16,9%.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>10% de 3.200 = 320; 5% = 160. Soma: <strong>R$ 480,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "Um mapa tem escala 1:100.000. Uma distância de 5 cm no mapa corresponde a:",
        alternativas: ["3 km", "4 km", "5 km", "6 km", "7 km"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>5 × 100.000 = 500.000 cm = <strong>5 km</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 3 cm.</li>
            <li><strong>B:</strong> usou 4 cm.</li>
            <li><strong>D:</strong> usou 6 cm.</li>
            <li><strong>E:</strong> usou 7 cm.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>1 cm = 1 km. 5 cm = <strong>5 km</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Média",
        pergunta: "O preço de um produto subiu 30% passando a R$ 260,00. Em seguida, caiu 10%. Qual o preço final?",
        alternativas: ["R$ 220,00", "R$ 228,00", "R$ 234,00", "R$ 240,00", "R$ 250,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>260 × 0,90 = <strong>R$ 234,00</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> subtraiu 40.</li>
            <li><strong>B:</strong> subtraiu 32.</li>
            <li><strong>D:</strong> subtraiu 20.</li>
            <li><strong>E:</strong> subtraiu 10.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>10% de 260 = 26. Preço final = 260 − 26 = <strong>R$ 234,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },

      // ── DIFÍCEIS (8) ──
      {
        dificuldade: "Difícil",
        pergunta: "Em uma escola de 500 alunos, 3/5 foram aprovados. Desses aprovados, 40% são meninas. Quantas meninas foram aprovadas?",
        alternativas: ["90", "100", "120", "140", "150"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <ol>
            <li>Aprovados: 3/5 × 500 = 300.</li>
            <li>Meninas aprovadas: 40% de 300 = 120.</li>
          </ol>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 30% de 300.</li>
            <li><strong>B:</strong> usou 33,3% de 300.</li>
            <li><strong>D:</strong> usou 46,7% de 300.</li>
            <li><strong>E:</strong> usou 50% de 300.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Aprovados: 3/5 × 500 = 300. Meninas: 40% × 300 = <strong>120</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Difícil",
        pergunta: "Um produto sofreu aumento de 50% e depois desconto de 40%, passando a custar R$ 270,00. Qual era o preço original?",
        alternativas: ["R$ 250,00", "R$ 280,00", "R$ 300,00", "R$ 320,00", "R$ 350,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <ol>
            <li>Fator combinado: 1,50 × 0,60 = 0,90.</li>
            <li>0,90 × x = 270 → x = 270 / 0,90 = 300.</li>
          </ol>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> subtraiu 20 do valor final.</li>
            <li><strong>B:</strong> somou 10.</li>
            <li><strong>D:</strong> somou 50.</li>
            <li><strong>E:</strong> somou 80.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p><strong>Resolução:</strong> 1,50 × 0,60 = 0,90. Inicial = 270 / 0,90 = <strong>R$ 300,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Difícil",
        pergunta: "Dividindo R$ 3.900,00 em partes proporcionais a 1/2, 1/3 e 1/4, qual é o valor da maior parte?",
        alternativas: ["R$ 1.500,00", "R$ 1.600,00", "R$ 1.700,00", "R$ 1.800,00", "R$ 1.900,00"],
        correta: 3,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <ol>
            <li>MMC(2,3,4) = 12. Multiplicando: 6, 4, 3.</li>
            <li>Soma: 6 + 4 + 3 = 13. Cada parte = 3.900/13 = 300.</li>
            <li>Maior parte: 6 × 300 = R$ 1.800,00.</li>
          </ol>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 5 × 300.</li>
            <li><strong>B:</strong> usou 16/3 × 300.</li>
            <li><strong>C:</strong> usou 5,67 × 300.</li>
            <li><strong>E:</strong> usou 6,33 × 300.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Multiplique por 12: 6:4:3; soma = 13; cada = 300. Maior = 6 × 300 = <strong>R$ 1.800,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> D.</p>
        `
      },
      {
        dificuldade: "Difícil",
        pergunta: "Três aumentos sucessivos de 20%, 25% e 10% equivalem a um único aumento de:",
        alternativas: ["55%", "60%", "65%", "70%", "75%"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>1,20 × 1,25 × 1,10 = 1,65 → aumento total de <strong>65%</strong>.</p>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> somou 20 + 25 + 10 = 55.</li>
            <li><strong>B:</strong> somou 20 + 25 + 15.</li>
            <li><strong>D:</strong> somou 20 + 25 + 25.</li>
            <li><strong>E:</strong> somou 25 + 25 + 25.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Aumentos sucessivos se <strong>multiplicam</strong>: 1,20 × 1,25 × 1,10 = 1,65 = <strong>65%</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Difícil",
        pergunta: "Se 5 máquinas produzem 300 peças em 6 dias, quantas peças 8 máquinas produzirão em 5 dias?",
        alternativas: ["320", "360", "400", "440", "480"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <ol>
            <li>Produtividade unitária: 300 / (5 × 6) = 10 peças.</li>
            <li>8 × 5 × 10 = 400 peças.</li>
          </ol>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou 8 × 5 × 8.</li>
            <li><strong>B:</strong> usou 8 × 5 × 9.</li>
            <li><strong>D:</strong> usou 8 × 5 × 11.</li>
            <li><strong>E:</strong> usou 8 × 5 × 12.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Produtividade por máquina/dia: 300/30 = 10. Total: 8 × 5 × 10 = <strong>400 peças</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Difícil",
        pergunta: "Um funcionário gastou 1/4 do salário com aluguel e 1/3 do restante com alimentação. Se ainda sobraram R$ 900,00, qual era o salário?",
        alternativas: ["R$ 1.500,00", "R$ 1.600,00", "R$ 1.800,00", "R$ 2.000,00", "R$ 2.400,00"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <ol>
            <li>Após aluguel: sobra 3/4.</li>
            <li>Gasta 1/3 do restante → sobra 2/3 × 3/4 = 1/2.</li>
            <li>1/2 do salário = 900 → salário = <strong>R$ 1.800,00</strong>.</li>
          </ol>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> multiplicou 900 × 5/3.</li>
            <li><strong>B:</strong> multiplicou 900 × 16/9.</li>
            <li><strong>D:</strong> multiplicou 900 × 20/9.</li>
            <li><strong>E:</strong> multiplicou 900 × 8/3.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Sobra = 2/3 × 3/4 = 1/2. Se 1/2 = 900, salário = <strong>R$ 1.800,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Difícil",
        pergunta: "Em uma turma, a razão entre meninos e meninas é 5:7. Se há 12 meninas a mais que meninos, quantos alunos há no total?",
        alternativas: ["60", "66", "72", "78", "84"],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <ol>
            <li>Razão: 5x e 7x.</li>
            <li>7x − 5x = 2x = 12 → x = 6.</li>
            <li>Total = 12x = 12 × 6 = 72.</li>
          </ol>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> usou x = 5.</li>
            <li><strong>B:</strong> usou x = 5,5.</li>
            <li><strong>D:</strong> usou x = 6,5.</li>
            <li><strong>E:</strong> usou x = 7.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Meninos: 5x; meninas: 7x. 7x − 5x = 12 → x = 6. Total = 12x = <strong>72</strong>.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Difícil",
        pergunta: "Um produto sofreu desconto de 25% sobre o preço de venda, mas o vendedor ainda lucrou 20% sobre o custo. Se o custo é R$ 250,00, qual era o preço de venda antes do desconto?",
        alternativas: ["R$ 320,00", "R$ 350,00", "R$ 380,00", "R$ 400,00", "R$ 420,00"],
        correta: 3,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <ol>
            <li>Preço com desconto (o que foi pago) = 250 × 1,20 = 300.</li>
            <li>Preço original × 0,75 = 300 → original = 300 / 0,75 = 400.</li>
          </ol>
          <p><strong>Por que as outras estão erradas:</strong></p>
          <ul>
            <li><strong>A:</strong> somou 70 ao preço com desconto.</li>
            <li><strong>B:</strong> somou 50.</li>
            <li><strong>C:</strong> somou 80.</li>
            <li><strong>E:</strong> somou 120.</li>
          </ul>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Preço pago = 250 × 1,20 = 300. Original = 300 / 0,75 = <strong>R$ 400,00</strong>.</p>
          <p><strong>Alternativa correta:</strong> D.</p>
        `
      }
    ],
    percentualAprovacao: 80
  },

  criterioConclusao: {
    minimoAcertos: 80,
    tempoEstimado: "3h00"
  }
};
