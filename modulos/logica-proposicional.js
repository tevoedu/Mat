// ARQUIVO: modulos/logica-proposicional.js
export const modulo = {
  id: "logica-proposicional",
  nome: "Argumentação Lógica",
  disciplina: "Matemática",
  ordem: 8,
  nivel: "Intermediário",

  introducao: {
    titulo: "Introdução",
    descricao: `
      <p>Argumentar é <strong>encadear ideias de forma que uma conclusão se sustente nas premissas anteriores</strong>. Em provas como a do BB/CESGRANRIO, essa habilidade aparece em questões de "lógica de argumentação" — silogismos, condicionais e negações.</p>
      <p>Você vai aprender a identificar <strong>premissas</strong> e <strong>conclusão</strong>, operar com quantificadores ("todo", "algum", "nenhum", "nem todos"), usar a <strong>contraposição</strong> e encadear condicionais ("se… então…").</p>
      <p>A banca costuma cobrar: (i) qual conclusão se segue <em>necessariamente</em>; (ii) qual é a contrapositiva ou negação de uma frase; (iii) qual raciocínio é <em>inválido</em> (falácia). Dominar esses padrões resolve a maioria das questões.</p>
    `,
    imagem: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 130" width="420" height="130">
      <rect x="10" y="20" width="120" height="40" rx="8" fill="#eef2ff" stroke="#6366f1"/>
      <text x="70" y="45" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#0f172a">Premissa 1</text>
      <rect x="10" y="75" width="120" height="40" rx="8" fill="#eef2ff" stroke="#6366f1"/>
      <text x="70" y="100" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#0f172a">Premissa 2</text>
      <line x1="140" y1="67" x2="200" y2="67" stroke="#10b981" stroke-width="2"/>
      <polygon points="200,67 190,62 190,72" fill="#10b981"/>
      <rect x="210" y="47" width="180" height="40" rx="8" fill="#ecfdf5" stroke="#10b981"/>
      <text x="300" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#0f172a">Conclusão válida</text>
    </svg>`
  },

  teoria: [
    {
      titulo: "1. Premissa, Conclusão e Silogismos",
      conteudo: `
        <p><strong>Premissa</strong> é a frase que serve de base. <strong>Conclusão</strong> é o que se deduz dela. Em um argumento válido, se as premissas são verdadeiras, a conclusão <em>obrigatoriamente</em> é verdadeira.</p>
        <p>Quantificadores essenciais:</p>
        <ul>
          <li><strong>Todo A é B</strong> → A está contido em B.</li>
          <li><strong>Nenhum A é B</strong> → A e B não se cruzam (equivale a Nenhum B é A).</li>
          <li><strong>Algum A é B</strong> → existe ao menos um elemento em comum (equivale a Algum B é A).</li>
          <li><strong>Nem todo A é B</strong> = <strong>Algum A não é B</strong>.</li>
        </ul>
        <p>Silogismo clássico: <em>Todo A é B; Todo B é C ⟹ Todo A é C</em>.</p>
      `
    },
    {
      titulo: "2. Contraposição e Condicionais",
      conteudo: `
        <p>A <strong>contrapositiva</strong> de "Se P, então Q" é <strong>"Se não Q, então não P"</strong> — é logicamente equivalente à original.</p>
        <p><strong>Encadeamento:</strong> Se P→Q e Q→R, então P→R.</p>
        <p><strong>Modus ponens:</strong> P→Q e P ⟹ Q.</p>
        <p><strong>Modus tollens:</strong> P→Q e ¬Q ⟹ ¬P.</p>
        <p>Erro comum: achar que "Se P, então Q" permite concluir "Se Q, então P" (isso é a <em>recíproca</em>, que é inválida).</p>
      `
    }
  ],

  exemplos: [
    {
      titulo: "Exemplo 1 – Silogismo com 'Todo'",
      enunciado: "Todo engenheiro é analítico. Todo analítico é metódico. O que se conclui sobre os engenheiros?",
      resolucao: `
        <p><strong>Dados:</strong> Todo E é A; Todo A é M.</p>
        <p><strong>Regra:</strong> encadeamento de universais.</p>
        <p><strong>Cálculo:</strong> E ⊆ A e A ⊆ M ⟹ E ⊆ M.</p>
        <p><strong>Resposta:</strong> Todo engenheiro é metódico.</p>
      `,
      observacao: "Encadeie 'Todo… Todo…' como dominós: o conjunto do meio desaparece."
    },
    {
      titulo: "Exemplo 2 – Contraposição",
      enunciado: "Sabendo que 'Se um número é múltiplo de 4, então é par', o que se conclui se um número NÃO é par?",
      resolucao: `
        <p><strong>Dados:</strong> M4 → P.</p>
        <p><strong>Contrapositiva:</strong> ¬P → ¬M4.</p>
        <p><strong>Cálculo:</strong> N não é par ⟹ N não é múltiplo de 4.</p>
        <p><strong>Resposta:</strong> N não é múltiplo de 4.</p>
      `,
      observacao: "Em prova, inverta e negue as duas partes do condicional — nunca apenas uma."
    }
  ],

  etapasAprendizagem: [
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 1 – Identificar a conclusão",
      conteudo: "Localize a frase que é deduzida das demais.",
      pergunta: "Considere: 'Todos os engenheiros são analíticos. Marina é engenheira. Logo, Marina é analítica.' Qual é a conclusão?",
      alternativas: [
        "Todos os engenheiros são analíticos.",
        "Marina é engenheira.",
        "Marina é analítica.",
        "Marina não é analítica.",
        "Alguns engenheiros não são analíticos."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Premissa 1: Todo E é A.</li>
          <li>Premissa 2: Marina ∈ E.</li>
          <li>Conclusão: Marina ∈ A → "Marina é analítica".</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> é premissa, não conclusão.</li>
          <li><strong>B:</strong> também é premissa.</li>
          <li><strong>D:</strong> contraria a dedução.</li>
          <li><strong>E:</strong> nega a premissa universal sem base.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>A conclusão é a frase <em>introduzida pelo "logo"</em>.</p>
        <p><strong>Resolução:</strong></p>
        <ol>
          <li>Marcar premissas: "Todos os engenheiros são analíticos" e "Marina é engenheira".</li>
          <li>Deduzir: Marina é analítica.</li>
        </ol>
        <p><strong>Alternativa correta:</strong> C — o "logo" anuncia a conclusão.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 2 – Aplicar 'Todo'",
      conteudo: "Use a relação de inclusão entre conjuntos.",
      pergunta: "Todo número par é divisível por 2. O número 8 é par. Podemos concluir que:",
      alternativas: [
        "8 é ímpar.",
        "8 é divisível por 2.",
        "Todo número divisível por 2 é par.",
        "8 não é divisível por 2.",
        "Nem todo número par é divisível por 2."
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Premissa: Par ⊆ divisível por 2.</li>
          <li>8 ∈ Par.</li>
          <li>Logo 8 ∈ divisível por 2.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> contradiz "8 é par".</li>
          <li><strong>C:</strong> é a <em>recíproca</em>; não se segue.</li>
          <li><strong>D:</strong> contradiz a dedução.</li>
          <li><strong>E:</strong> nega a premissa.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Aplicamos o universal: se todo par é divisível por 2 e 8 é par, então 8 é divisível por 2.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 3 – Contrapositiva",
      conteudo: "Inverta e negue as duas partes.",
      pergunta: "A contrapositiva de 'Se chove, então a rua fica molhada' é:",
      alternativas: [
        "Se a rua fica molhada, então chove.",
        "Se não chove, então a rua não fica molhada.",
        "Se a rua não fica molhada, então não chove.",
        "Chove e a rua não fica molhada.",
        "Se a rua fica molhada, então não chove."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>P = "chove"; Q = "rua fica molhada".</li>
          <li>Contrapositiva: ¬Q → ¬P.</li>
          <li>Fica: "Se a rua não fica molhada, então não chove."</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> é a recíproca (inválida).</li>
          <li><strong>B:</strong> é a inversa (inválida).</li>
          <li><strong>D:</strong> nega o antecedente sem negar o consequente.</li>
          <li><strong>E:</strong> não é forma lógica válida.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Contrapositiva exige <strong>inverter e negar</strong> os dois termos.</p>
        <p><strong>Alternativa correta:</strong> C — ¬Q → ¬P.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 4 – Silogismo clássico",
      conteudo: "Encadeie os universais.",
      pergunta: "Todo A é B. Todo B é C. Portanto:",
      alternativas: [
        "Todo C é A.",
        "Todo A é C.",
        "Nenhum A é C.",
        "Algum A não é C.",
        "Todo C é B."
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Encadeando: A ⊆ B e B ⊆ C ⟹ A ⊆ C, isto é, Todo A é C.</p>
        <p><strong>Distratores:</strong></p>
        <ul>
          <li><strong>A:</strong> inverte a implicação (recíproca).</li>
          <li><strong>C:</strong> contradiz a cadeia.</li>
          <li><strong>D:</strong> nenhuma premissa permite "algum A não é C".</li>
          <li><strong>E:</strong> C pode conter elementos fora de B.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Silogismo Barbara: Todo A é B; Todo B é C ⟹ Todo A é C.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 5 – Nenhum A é B",
      conteudo: "Universal negativo.",
      pergunta: "Nenhum mamífero é peixe. A baleia é um mamífero. Logo:",
      alternativas: [
        "A baleia é um peixe.",
        "Algum peixe é mamífero.",
        "A baleia não é um peixe.",
        "Nem toda baleia é mamífero.",
        "Todo peixe é mamífero."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Nenhum M é P. Baleia ∈ M ⟹ baleia ∉ P.</p>
        <p><strong>Distratores:</strong></p>
        <ul>
          <li><strong>A:</strong> contradiz a premissa.</li>
          <li><strong>B:</strong> "Nenhum M é P" equivale a "Nenhum P é M", não a "Algum".</li>
          <li><strong>D:</strong> nega a premissa "baleia é mamífero".</li>
          <li><strong>E:</strong> inverte indevidamente.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>"Nenhum M é P" + "x ∈ M" ⟹ "x ∉ P".</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 6 – Conversão de 'Algum'",
      conteudo: "Simetria do particular afirmativo.",
      pergunta: "Sabendo que 'Alguns estudantes são músicos', qual conclusão é válida?",
      alternativas: [
        "Todos os estudantes são músicos.",
        "Nenhum músico é estudante.",
        "Alguns músicos são estudantes.",
        "Todos os músicos são estudantes.",
        "Nenhum estudante é músico."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Algum A é B ⟺ Algum B é A (conversão simples válida para o particular afirmativo).</p>
        <p><strong>Distratores:</strong></p>
        <ul>
          <li><strong>A:</strong> generaliza o particular.</li>
          <li><strong>B e E:</strong> contrariam o "algum".</li>
          <li><strong>D:</strong> generaliza indevidamente.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>"Alguns A são B" ⟺ "Alguns B são A".</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 7 – Encadeamento de condicionais",
      conteudo: "Transitividade do condicional.",
      pergunta: "Se estudo, então passo. Se passo, então comemoro. Logo:",
      alternativas: [
        "Se comemoro, então estudo.",
        "Se não passo, então não estudo.",
        "Se estudo, então comemoro.",
        "Se comemoro, então passo.",
        "Passo e não comemoro."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>P→Q e Q→R ⟹ P→R: "Se estudo, então comemoro."</p>
        <p><strong>Distratores:</strong></p>
        <ul>
          <li><strong>A:</strong> recíproca da conclusão.</li>
          <li><strong>B:</strong> é a contrapositiva de P→Q, mas não é a conclusão do encadeamento.</li>
          <li><strong>D:</strong> recíproca de Q→R.</li>
          <li><strong>E:</strong> contraria o condicional.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Encadeie P→Q→R para obter P→R.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 8 – Negação de 'Todo'",
      conteudo: "'Nem todos' equivale a 'algum não'.",
      pergunta: "'Nem todos os alunos foram aprovados' é logicamente equivalente a:",
      alternativas: [
        "Nenhum aluno foi aprovado.",
        "Todos os alunos foram aprovados.",
        "Algum aluno não foi aprovado.",
        "Todo aluno não foi aprovado.",
        "Alguns alunos foram aprovados."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>¬(Todo A é B) ⟺ Algum A não é B.</p>
        <p><strong>Distratores:</strong></p>
        <ul>
          <li><strong>A:</strong> exagera (é mais forte).</li>
          <li><strong>B:</strong> é o oposto lógico.</li>
          <li><strong>D:</strong> "todo não" ≠ "nem todo".</li>
          <li><strong>E:</strong> não nega o universal.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Negar "Todo A é B" é afirmar "Algum A não é B".</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 9 – Completar conclusão",
      conteudo: "Combine universal e particular.",
      pergunta: "Premissas: (1) Todos os X são Y. (2) Alguns Z são X. Qual conclusão se segue necessariamente?",
      alternativas: [
        "Todos os Z são Y.",
        "Nenhum Z é Y.",
        "Alguns Z são Y.",
        "Todos os Y são X.",
        "Nenhum X é Z."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>Algum Z é X: existe elemento z em Z∩X.</li>
          <li>Todo X é Y: esse z também está em Y.</li>
          <li>Logo, algum Z é Y.</li>
        </ol>
        <p><strong>Distratores:</strong></p>
        <ul>
          <li><strong>A:</strong> generaliza o particular.</li>
          <li><strong>B:</strong> contraria (2).</li>
          <li><strong>D:</strong> recíproca indevida.</li>
          <li><strong>E:</strong> contraria (2).</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Use a interseção: um elemento em X∩Z também pertence a Y.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 10 – Modus tollens",
      conteudo: "Negação do consequente.",
      pergunta: "Se um número é divisível por 6, então é divisível por 3. O número N não é divisível por 3. Logo:",
      alternativas: [
        "N é divisível por 6.",
        "N não é divisível por 6.",
        "N é divisível por 2.",
        "Todo número divisível por 3 é divisível por 6.",
        "Nada se pode concluir."
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Modus tollens: P→Q, ¬Q ⟹ ¬P. Aqui: ¬(div. 3) ⟹ ¬(div. 6).</p>
        <p><strong>Distratores:</strong></p>
        <ul>
          <li><strong>A:</strong> afirma o consequente (falácia).</li>
          <li><strong>C:</strong> não é dedutível.</li>
          <li><strong>D:</strong> recíproca falsa.</li>
          <li><strong>E:</strong> ignora a contrapositiva.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Aplique a contrapositiva: ¬(div. 3) → ¬(div. 6).</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 11 – Silogismo com três premissas",
      conteudo: "Combine quantificadores universais.",
      pergunta: "Premissas: (1) Todo A é B. (2) Nenhum B é C. (3) Todo D é C. Conclui-se necessariamente:",
      alternativas: [
        "Algum D é B.",
        "Nenhum D é B.",
        "Todo D é A.",
        "Algum A é C.",
        "Todo A é C."
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>D ⊆ C (premissa 3).</li>
          <li>Nenhum B é C ⟹ B∩C = ∅ ⟹ nenhum C é B.</li>
          <li>Se D ⊆ C e C∩B = ∅, então D∩B = ∅ ⟹ <strong>Nenhum D é B</strong>.</li>
        </ol>
        <p><strong>Distratores:</strong></p>
        <ul>
          <li><strong>A:</strong> contradiz a dedução.</li>
          <li><strong>C:</strong> D não tem relação declarada com A.</li>
          <li><strong>D e E:</strong> A ⊆ B e B∩C = ∅ ⟹ nenhum A é C (não "algum" nem "todo").</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Silogismo em cadeia: D ⊆ C, C∩B = ∅ ⟹ D∩B = ∅.</p>
        <p><strong>Alternativa correta:</strong> B — Nenhum D é B.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 12 – Cadeia condicional com negação",
      conteudo: "Modus tollens em cadeia longa.",
      pergunta: "Se A então B. Se B então C. Se C então D. Sabemos que D é falso. É correto afirmar:",
      alternativas: [
        "A é verdadeiro.",
        "B é verdadeiro.",
        "C é verdadeiro.",
        "A é falso.",
        "Nada se conclui."
      ],
      correta: 3,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <ol>
          <li>¬D (dado).</li>
          <li>Contrapositiva de C→D: ¬D → ¬C ⟹ ¬C.</li>
          <li>Contrapositiva de B→C: ¬C → ¬B ⟹ ¬B.</li>
          <li>Contrapositiva de A→B: ¬B → ¬A ⟹ <strong>¬A</strong>.</li>
        </ol>
        <p><strong>Distratores:</strong></p>
        <ul>
          <li><strong>A, B, C:</strong> contradizem a cadeia contrapositiva.</li>
          <li><strong>E:</strong> ignora que podemos deduzir A falso pela contrapositiva em cadeia.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Aplique modus tollens em cada elo da cadeia, de trás para frente.</p>
        <p><strong>Alternativa correta:</strong> D — A é falso.</p>
      `
    }
  ],

  questoes: [
    {
      dificuldade: "Fácil",
      pergunta: "A negação de 'Todo aluno estudou' é:",
      alternativas: [
        "Nenhum aluno estudou.",
        "Algum aluno não estudou.",
        "Todo aluno não estudou.",
        "Alguns alunos estudaram.",
        "Nenhum aluno não estudou."
      ],
      correta: 1,
      explicacaoAcerto: `<p>Negar "Todo A é B" dá "Algum A não é B".</p>`,
      explicacaoErro: `<p>Não confunda com "Nenhum A é B", que é mais forte.</p>`
    },
    {
      dificuldade: "Fácil",
      pergunta: "A contrapositiva de 'Se P, então Q' é:",
      alternativas: [
        "Se Q, então P.",
        "Se não P, então não Q.",
        "Se não Q, então não P.",
        "P e não Q.",
        "Q ou não P."
      ],
      correta: 2,
      explicacaoAcerto: `<p>Regra: inverte e nega os dois termos.</p>`,
      explicacaoErro: `<p>"Se Q→P" é a recíproca (inválida); "¬P→¬Q" é a inversa (inválida).</p>`
    },
    {
      dificuldade: "Fácil",
      pergunta: "Se 'Alguns médicos são pesquisadores', então:",
      alternativas: [
        "Todos os médicos são pesquisadores.",
        "Alguns pesquisadores são médicos.",
        "Nenhum médico é pesquisador.",
        "Todo pesquisador é médico.",
        "Nenhum pesquisador é médico."
      ],
      correta: 1,
      explicacaoAcerto: `<p>Particular afirmativo converte: Algum A é B ⟺ Algum B é A.</p>`,
      explicacaoErro: `<p>Alternativas A e D generalizam; C e E contrariam.</p>`
    },
    {
      dificuldade: "Fácil",
      pergunta: "Se hoje é segunda, então há aula. Hoje há aula. Podemos concluir:",
      alternativas: [
        "Hoje é segunda.",
        "Nada se conclui sobre o dia.",
        "Hoje não é segunda.",
        "Se há aula, é segunda.",
        "Hoje é feriado."
      ],
      correta: 1,
      explicacaoAcerto: `<p>Afirmar o consequente não permite concluir o antecedente (falácia).</p>`,
      explicacaoErro: `<p>A é a afirmação do consequente; não é dedução válida.</p>`
    },
    {
      dificuldade: "Média",
      pergunta: "Todo A é B. Nenhum B é C. Portanto:",
      alternativas: [
        "Algum A é C.",
        "Nenhum A é C.",
        "Todo C é A.",
        "Todo A é C.",
        "Algum C não é A."
      ],
      correta: 1,
      explicacaoAcerto: `<p>A ⊆ B e B∩C = ∅ ⟹ A∩C = ∅.</p>`,
      explicacaoErro: `<p>A viola a disjunção; C e D invertem; E não é dedutível.</p>`
    },
    {
      dificuldade: "Média",
      pergunta: "Se chove, a rua molha. Se a rua molha, há acidentes. Podemos concluir:",
      alternativas: [
        "Se há acidentes, chove.",
        "Se chove, há acidentes.",
        "Se não chove, não há acidentes.",
        "Chove ou há acidentes.",
        "Se há acidentes, a rua molha."
      ],
      correta: 1,
      explicacaoAcerto: `<p>Transitividade: P→Q, Q→R ⟹ P→R.</p>`,
      explicacaoErro: `<p>A e E são recíprocas; C é inversa; D é disjunção sem base.</p>`
    },
    {
      dificuldade: "Média",
      pergunta: "Sabendo que 'Se um aluno estuda, então é aprovado', e que 'Pedro não foi aprovado', conclui-se:",
      alternativas: [
        "Pedro estudou.",
        "Pedro não estudou.",
        "Todo aprovado estuda.",
        "Nada se conclui.",
        "Pedro foi reprovado por falta."
      ],
      correta: 1,
      explicacaoAcerto: `<p>Modus tollens: ¬aprovado ⟹ ¬estudou.</p>`,
      explicacaoErro: `<p>A é afirmação do consequente; C é recíproca; D ignora a contrapositiva.</p>`
    },
    {
      dificuldade: "Média",
      pergunta: "'Nenhum A é B' é logicamente equivalente a:",
      alternativas: [
        "Todo A é B.",
        "Algum A é B.",
        "Nenhum B é A.",
        "Algum A não é B.",
        "Todo B é A."
      ],
      correta: 2,
      explicacaoAcerto: `<p>Universal negativo converte simetricamente.</p>`,
      explicacaoErro: `<p>A, B e D contrariam o sentido; E inverte indevidamente.</p>`
    },
    {
      dificuldade: "Difícil",
      pergunta: "Premissas: Todo A é B. Todo B é C. Algum D é A. Qual conclusão é NECESSARIAMENTE verdadeira?",
      alternativas: [
        "Todo D é C.",
        "Algum D é C.",
        "Nenhum D é C.",
        "Todo D é B.",
        "Algum C não é D."
      ],
      correta: 1,
      explicacaoAcerto: `<p>Algum D é A; A ⊆ B ⊆ C. O mesmo elemento está em C. Logo, algum D é C.</p>`,
      explicacaoErro: `<p>A generaliza o particular; C contradiz; D generaliza; E não se segue.</p>`
    },
    {
      dificuldade: "Difícil",
      pergunta: "Qual raciocínio é INVÁLIDO (falácia)?",
      alternativas: [
        "P→Q; P ⟹ Q.",
        "P→Q; ¬Q ⟹ ¬P.",
        "P→Q; Q ⟹ P.",
        "P→Q; Q→R ⟹ P→R.",
        "Todo A é B; x ∈ A ⟹ x ∈ B."
      ],
      correta: 2,
      explicacaoAcerto: `<p>Afirmar o consequente ("Q ⟹ P") é falácia clássica.</p>`,
      explicacaoErro: `<p>A é modus ponens; B é modus tollens; D é transitividade; E é silogismo — todos válidos.</p>`
    }
  ],

  avaliacaoFinal: {
    quantidade: 20,
    questoes: [
      {
        dificuldade: "Fácil",
        pergunta: "Em 'Todos os mamíferos respiram. O cão é mamífero. Logo, o cão respira.', a conclusão é:",
        alternativas: [
          "Todos os mamíferos respiram.",
          "O cão é mamífero.",
          "O cão respira.",
          "O cão não respira.",
          "Alguns mamíferos respiram."
        ],
        correta: 2,
        explicacaoAcerto: `<p>A frase após o "logo" é a conclusão.</p>`,
        explicacaoErro: `<p>A e B são premissas; D contradiz; E nem foi afirmada.</p>`
      },
      {
        dificuldade: "Fácil",
        pergunta: "Todo número inteiro é racional. O número 5 é inteiro. Logo:",
        alternativas: [
          "5 é irracional.",
          "5 é racional.",
          "Todo racional é inteiro.",
          "5 não é racional.",
          "Nada se conclui."
        ],
        correta: 1,
        explicacaoAcerto: `<p>Aplicação direta do universal.</p>`,
        explicacaoErro: `<p>C é recíproca; A e D contradizem; E ignora a dedução.</p>`
      },
      {
        dificuldade: "Fácil",
        pergunta: "A contrapositiva de 'Se é triângulo, então tem três lados' é:",
        alternativas: [
          "Se tem três lados, então é triângulo.",
          "Se não é triângulo, não tem três lados.",
          "Se não tem três lados, então não é triângulo.",
          "É triângulo e não tem três lados.",
          "Se tem três lados, então não é triângulo."
        ],
        correta: 2,
        explicacaoAcerto: `<p>¬Q → ¬P.</p>`,
        explicacaoErro: `<p>A é recíproca; B é inversa; D nega a relação; E mistura.</p>`
      },
      {
        dificuldade: "Fácil",
        pergunta: "A negação de 'Todos os candidatos foram aprovados' é:",
        alternativas: [
          "Nenhum candidato foi aprovado.",
          "Algum candidato não foi aprovado.",
          "Todos os candidatos não foram aprovados.",
          "Alguns candidatos foram aprovados.",
          "Nenhuma das anteriores."
        ],
        correta: 1,
        explicacaoAcerto: `<p>¬(Todo A é B) ⟺ Algum A não é B.</p>`,
        explicacaoErro: `<p>A é mais forte; C muda o sentido; D não nega.</p>`
      },
      {
        dificuldade: "Fácil",
        pergunta: "Nenhum réptil é mamífero. A cobra é réptil. Logo:",
        alternativas: [
          "A cobra é mamífero.",
          "A cobra não é mamífero.",
          "Algum mamífero é réptil.",
          "Todo mamífero é réptil.",
          "Nada se conclui."
        ],
        correta: 1,
        explicacaoAcerto: `<p>Universal negativo + pertencimento.</p>`,
        explicacaoErro: `<p>A e C contradizem; D inverte; E ignora a dedução.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "Todo A é B. Todo B é C. Todo C é D. Logo:",
        alternativas: [
          "Todo D é A.",
          "Todo A é D.",
          "Nenhum A é D.",
          "Algum A não é D.",
          "Todo C é A."
        ],
        correta: 1,
        explicacaoAcerto: `<p>Cadeia de universais: A ⊆ B ⊆ C ⊆ D.</p>`,
        explicacaoErro: `<p>A inverte; C e D contrariam; E também inverte.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "'Alguns carros são elétricos' equivale a:",
        alternativas: [
          "Todos os elétricos são carros.",
          "Nenhum elétrico é carro.",
          "Alguns elétricos são carros.",
          "Todo carro é elétrico.",
          "Nenhum carro é elétrico."
        ],
        correta: 2,
        explicacaoAcerto: `<p>Conversão do particular afirmativo.</p>`,
        explicacaoErro: `<p>A, B, D, E alteram a quantidade ou a direção.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "Se P, então Q. Se Q, então R. Se R, então S. Vale P. Logo:",
        alternativas: [
          "Vale S.",
          "Vale ¬S.",
          "Vale ¬Q.",
          "Nada se conclui.",
          "Vale S apenas se Q for falso."
        ],
        correta: 0,
        explicacaoAcerto: `<p>Encadeamento + modus ponens: P ⟹ Q ⟹ R ⟹ S.</p>`,
        explicacaoErro: `<p>B, C contradizem; D ignora; E inverte.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "Se o time vence, os torcedores festejam. Não houve festa. Logo:",
        alternativas: [
          "O time venceu.",
          "O time não venceu.",
          "Nada se conclui.",
          "Se não venceu, houve festa.",
          "Os torcedores estavam ausentes."
        ],
        correta: 1,
        explicacaoAcerto: `<p>Modus tollens: ¬festa ⟹ ¬venceu.</p>`,
        explicacaoErro: `<p>A afirma o consequente; C ignora; D inverte.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "Se estudo, sou aprovado. Fui aprovado. Podemos concluir:",
        alternativas: [
          "Estudei.",
          "Nada se conclui sobre eu ter estudado.",
          "Não estudei.",
          "Todo aprovado estuda.",
          "Só aprovados estudam."
        ],
        correta: 1,
        explicacaoAcerto: `<p>Afirmar o consequente não permite concluir o antecedente.</p>`,
        explicacaoErro: `<p>A é falácia; C contradiz; D e E generalizam.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "Todos os X são Y. Nenhum Y é Z. Logo:",
        alternativas: [
          "Algum X é Z.",
          "Nenhum X é Z.",
          "Todo Z é X.",
          "Todo X é Z.",
          "Algum Z é X."
        ],
        correta: 1,
        explicacaoAcerto: `<p>X ⊆ Y e Y∩Z = ∅ ⟹ X∩Z = ∅.</p>`,
        explicacaoErro: `<p>As demais violam a exclusão.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "'Nem todos os funcionários compareceram' é o mesmo que:",
        alternativas: [
          "Nenhum funcionário compareceu.",
          "Algum funcionário não compareceu.",
          "Todos os funcionários não compareceram.",
          "Todos os funcionários compareceram.",
          "Alguns funcionários compareceram."
        ],
        correta: 1,
        explicacaoAcerto: `<p>¬Todo = Algum não.</p>`,
        explicacaoErro: `<p>A, C, D e E não representam a negação correta.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "Se João estuda, então passa. Se João passa, então se forma. João NÃO se formou. Qual o passo imediato da dedução?",
        alternativas: [
          "João passou.",
          "João não passou.",
          "João estudou.",
          "Nada se conclui.",
          "Se passou, se formou."
        ],
        correta: 1,
        explicacaoAcerto: `<p>¬formou ⟹ ¬passou (primeiro passo da contrapositiva em cadeia).</p>`,
        explicacaoErro: `<p>A e C violam a contrapositiva; D ignora; E é condicional já dada.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "'Alguns A são B' e 'Nenhum B é C'. Conclui-se:",
        alternativas: [
          "Alguns A são C.",
          "Alguns A não são C.",
          "Nenhum A é C.",
          "Todo A é C.",
          "Nada se conclui."
        ],
        correta: 1,
        explicacaoAcerto: `<p>Se algum a ∈ A∩B e B∩C = ∅, então a ∉ C. Algum A não é C.</p>`,
        explicacaoErro: `<p>A contradiz; C é forte demais; D contradiz; E ignora.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "Premissas: 'Todo A é B' e 'Todo C é A'. Conclui-se:",
        alternativas: [
          "Todo A é C.",
          "Todo C é B.",
          "Nenhum C é B.",
          "Algum C não é B.",
          "Nada se conclui."
        ],
        correta: 1,
        explicacaoAcerto: `<p>C ⊆ A ⊆ B ⟹ C ⊆ B.</p>`,
        explicacaoErro: `<p>A inverte; C e D contrariam; E ignora.</p>`
      },
      {
        dificuldade: "Difícil",
        pergunta: "Se um número é múltiplo de 10, então é múltiplo de 5. Se é múltiplo de 5, então termina em 0 ou 5. O número 23 não termina em 0 nem em 5. Logo:",
        alternativas: [
          "23 é múltiplo de 10.",
          "23 não é múltiplo de 10.",
          "23 é múltiplo de 5.",
          "Nada se conclui.",
          "23 é par."
        ],
        correta: 1,
        explicacaoAcerto: `<p>¬(termina em 0/5) ⟹ ¬mult5 ⟹ ¬mult10 (contrapositiva em cadeia).</p>`,
        explicacaoErro: `<p>A e C contradizem; D ignora a cadeia; E não se deduz.</p>`
      },
      {
        dificuldade: "Difícil",
        pergunta: "Se A então B. Se B então C. Se C então D. Sabemos ¬D. Então:",
        alternativas: [
          "A é verdadeiro.",
          "A é falso.",
          "B é verdadeiro.",
          "C é verdadeiro.",
          "Nada se conclui."
        ],
        correta: 1,
        explicacaoAcerto: `<p>Contrapositiva em cadeia: ¬D ⟹ ¬C ⟹ ¬B ⟹ ¬A.</p>`,
        explicacaoErro: `<p>As demais negam a cadeia.</p>`
      },
      {
        dificuldade: "Difícil",
        pergunta: "Premissas: Todo A é B. Algum C é A. Nenhum B é D. Conclui-se NECESSARIAMENTE:",
        alternativas: [
          "Todo C é D.",
          "Algum C não é D.",
          "Nenhum C é A.",
          "Algum D é A.",
          "Nada se conclui."
        ],
        correta: 1,
        explicacaoAcerto: `<p>Existe c ∈ C∩A ⊆ B. Como B∩D = ∅, c ∉ D. Logo algum C não é D.</p>`,
        explicacaoErro: `<p>A contradiz; C contradiz; D contradiz; E ignora.</p>`
      },
      {
        dificuldade: "Difícil",
        pergunta: "Analise: 'Se todos os X são Y, e alguns Z são Y, então alguns Z são X.' O raciocínio é:",
        alternativas: [
          "Válido por silogismo.",
          "Inválido (falácia de afirmação do consequente em forma categórica).",
          "Válido por contraposição.",
          "Válido por modus ponens.",
          "Válido se Z for vazio."
        ],
        correta: 1,
        explicacaoAcerto: `<p>Z pode estar em Y sem tocar X. Não se deduz interseção.</p>`,
        explicacaoErro: `<p>A, C, D aplicam regras inexistentes; E contradiz a lógica.</p>`
      },
      {
        dificuldade: "Difícil",
        pergunta: "Se um candidato é aprovado, então estudou. Se estudou, então leu o edital. Se leu o edital, então conhece as regras. Sabe-se que Maria NÃO conhece as regras. Logo:",
        alternativas: [
          "Maria foi aprovada.",
          "Maria não foi aprovada.",
          "Maria estudou.",
          "Maria leu o edital.",
          "Nada se conclui."
        ],
        correta: 1,
        explicacaoAcerto: `<p>¬conhece ⟹ ¬leu ⟹ ¬estudou ⟹ ¬aprovada.</p>`,
        explicacaoErro: `<p>A, C, D contradizem; E ignora a cadeia contrapositiva.</p>`
      },
      {
        dificuldade: "Difícil",
        pergunta: "Premissas: Nenhum A é B. Todo C é A. Algum D é C. Conclui-se:",
        alternativas: [
          "Algum D é B.",
          "Algum D não é B.",
          "Nenhum D é A.",
          "Todo D é B.",
          "Nada se conclui."
        ],
        correta: 1,
        explicacaoAcerto: `<p>D∩C ≠ ∅, C ⊆ A e A∩B = ∅ ⟹ algum d ∈ D, d ∉ B.</p>`,
        explicacaoErro: `<p>A contradiz; C contradiz; D contradiz; E ignora.</p>`
      }
    ],
    percentualAprovacao: 80
  },

  criterioConclusao: {
    minimoAcertos: 80,
    tempoEstimado: "2h30"
  }
};
