// ARQUIVO: modulos/logica-proposicional.js
export const modulo = {
  id: "logica-proposicional",
  nome: "Lógica Proposicional",
  disciplina: "Matemática",
  ordem: 3,
  nivel: "Intermediário",

  introducao: {
    titulo: "Introdução",
    descricao: `
      <p>A <strong>Lógica Proposicional</strong> é presença certa nas provas da CESGRANRIO para o Banco do Brasil. Em concursos recentes, questões de raciocínio lógico aparecem em praticamente todas as edições — cobrando proposições, conectivos, equivalências, negações e quantificadores.</p>
      <p>Neste módulo você vai aprender a identificar proposições, dominar os conectivos (∧, ∨, →, ↔), montar tabelas-verdade, aplicar as Leis de De Morgan, negar condicionais, usar a contrapositiva e manipular quantificadores como <em>todo</em>, <em>algum</em> e <em>nenhum</em>.</p>
      <p>A banca costuma cobrar em formato de situação-problema (contexto bancário: clientes, contas, empréstimos, operadores de caixa). Reconhecer o padrão lógico por trás do texto é o segredo para ganhar tempo na prova.</p>
    `,
    imagem: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160" width="100%" style="max-width:400px;">
      <rect x="0" y="0" width="400" height="160" fill="#f8fafc" rx="10"/>
      <text x="200" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Conectivos Lógicos</text>
      <rect x="20" y="45" width="80" height="40" rx="8" fill="#6366f1"/>
      <text x="60" y="70" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">∧</text>
      <text x="60" y="105" text-anchor="middle" fill="#0f172a" font-size="11">e</text>
      <rect x="110" y="45" width="80" height="40" rx="8" fill="#6366f1"/>
      <text x="150" y="70" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">∨</text>
      <text x="150" y="105" text-anchor="middle" fill="#0f172a" font-size="11">ou</text>
      <rect x="200" y="45" width="80" height="40" rx="8" fill="#10b981"/>
      <text x="240" y="70" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">→</text>
      <text x="240" y="105" text-anchor="middle" fill="#0f172a" font-size="11">se... então</text>
      <rect x="290" y="45" width="90" height="40" rx="8" fill="#10b981"/>
      <text x="335" y="70" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">↔</text>
      <text x="335" y="105" text-anchor="middle" fill="#0f172a" font-size="11">se e somente se</text>
      <text x="200" y="140" text-anchor="middle" fill="#4f46e5" font-size="11" font-style="italic">Negação: ¬p  ·  De Morgan: ¬(p∧q) ≡ ¬p∨¬q</text>
    </svg>`
  },

  teoria: [
    {
      titulo: "1. Proposições e Conectivos",
      conteudo: `
        <p><strong>Proposição</strong> é uma sentença declarativa que pode ser classificada como <strong>Verdadeira (V)</strong> ou <strong>Falsa (F)</strong>. Não são proposições: perguntas, ordens, exclamações e sentenças com variáveis livres (ex.: "x + 3 = 7").</p>
        <p>Quando combinamos proposições simples (p, q, r…) com <strong>conectivos</strong>, formamos proposições compostas:</p>
        <ul>
          <li><strong>Conjunção</strong> p ∧ q ("p e q") — só é V quando <em>ambos</em> são V.</li>
          <li><strong>Disjunção</strong> p ∨ q ("p ou q") — só é F quando <em>ambos</em> são F.</li>
          <li><strong>Condicional</strong> p → q ("se p então q") — só é F quando p é V e q é F.</li>
          <li><strong>Bicondicional</strong> p ↔ q ("p se e somente se q") — é V quando p e q têm <em>o mesmo</em> valor lógico.</li>
          <li><strong>Negação</strong> ¬p — inverte o valor lógico.</li>
        </ul>
        <p><strong>Pegadinha clássica:</strong> o condicional p → q só é falso em um único caso (V → F). Memorize isso!</p>
      `,
      imagem: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 200" width="100%" style="max-width:420px;">
        <rect x="0" y="0" width="420" height="200" fill="#f8fafc" rx="10"/>
        <text x="210" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">Tabela-verdade do condicional p → q</text>
        <rect x="70" y="40" width="80" height="30" fill="#6366f1"/>
        <rect x="150" y="40" width="80" height="30" fill="#6366f1"/>
        <rect x="230" y="40" width="120" height="30" fill="#4f46e5"/>
        <text x="110" y="60" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">p</text>
        <text x="190" y="60" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">q</text>
        <text x="290" y="60" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">p → q</text>
        <rect x="70" y="70" width="80" height="28" fill="#fff" stroke="#cbd5e1"/>
        <rect x="150" y="70" width="80" height="28" fill="#fff" stroke="#cbd5e1"/>
        <rect x="230" y="70" width="120" height="28" fill="#dcfce7" stroke="#cbd5e1"/>
        <text x="110" y="89" text-anchor="middle" fill="#0f172a" font-size="13">V</text>
        <text x="190" y="89" text-anchor="middle" fill="#0f172a" font-size="13">V</text>
        <text x="290" y="89" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold">V</text>
        <rect x="70" y="98" width="80" height="28" fill="#fff" stroke="#cbd5e1"/>
        <rect x="150" y="98" width="80" height="28" fill="#fff" stroke="#cbd5e1"/>
        <rect x="230" y="98" width="120" height="28" fill="#dcfce7" stroke="#cbd5e1"/>
        <text x="110" y="117" text-anchor="middle" fill="#0f172a" font-size="13">V</text>
        <text x="190" y="117" text-anchor="middle" fill="#0f172a" font-size="13">F</text>
        <text x="290" y="117" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold">F</text>
        <rect x="70" y="126" width="80" height="28" fill="#fff" stroke="#cbd5e1"/>
        <rect x="150" y="126" width="80" height="28" fill="#fff" stroke="#cbd5e1"/>
        <rect x="230" y="126" width="120" height="28" fill="#dcfce7" stroke="#cbd5e1"/>
        <text x="110" y="145" text-anchor="middle" fill="#0f172a" font-size="13">F</text>
        <text x="190" y="145" text-anchor="middle" fill="#0f172a" font-size="13">V</text>
        <text x="290" y="145" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold">V</text>
        <rect x="70" y="154" width="80" height="28" fill="#fff" stroke="#cbd5e1"/>
        <rect x="150" y="154" width="80" height="28" fill="#fff" stroke="#cbd5e1"/>
        <rect x="230" y="154" width="120" height="28" fill="#dcfce7" stroke="#cbd5e1"/>
        <text x="110" y="173" text-anchor="middle" fill="#0f172a" font-size="13">F</text>
        <text x="190" y="173" text-anchor="middle" fill="#0f172a" font-size="13">F</text>
        <text x="290" y="173" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold">V</text>
      </svg>`
    },
    {
      titulo: "2. Equivalências, Negações e Quantificadores",
      conteudo: `
        <p><strong>Leis de De Morgan</strong> (essenciais em prova):</p>
        <ul>
          <li>¬(p ∧ q) ≡ ¬p ∨ ¬q</li>
          <li>¬(p ∨ q) ≡ ¬p ∧ ¬q</li>
        </ul>
        <p><strong>Negação do condicional:</strong> ¬(p → q) ≡ <strong>p ∧ ¬q</strong>. (Não confunda com a contrapositiva!)</p>
        <p><strong>Equivalências do condicional:</strong></p>
        <ul>
          <li>p → q ≡ ¬p ∨ q (eliminação do condicional)</li>
          <li>p → q ≡ ¬q → ¬p (contrapositiva)</li>
        </ul>
        <p><strong>Quantificadores:</strong></p>
        <ul>
          <li>Negação de "todo A é B" → "algum A <strong>não</strong> é B"</li>
          <li>Negação de "algum A é B" → "nenhum A é B"</li>
          <li>Negação de "nenhum A é B" → "algum A é B"</li>
        </ul>
        <p>Erro comum: achar que a negação de "todo" é "nenhum". Errado! A negação de "todo A é B" é "existe pelo menos um A que não é B".</p>
      `
    }
  ],

  exemplos: [
    {
      titulo: "Exemplo 1 – Negação de proposição composta",
      enunciado: "Qual é a negação da proposição: 'O candidato estudou e foi aprovado'?",
      resolucao: `
        <p><strong>Dados:</strong> p = "estudou"; q = "foi aprovado". Proposição original: p ∧ q.</p>
        <p><strong>Fórmula:</strong> De Morgan → ¬(p ∧ q) ≡ ¬p ∨ ¬q.</p>
        <p><strong>Cálculo:</strong> ¬p = "não estudou"; ¬q = "não foi aprovado".</p>
        <p><strong>Resposta:</strong> "O candidato NÃO estudou OU NÃO foi aprovado".</p>
      `,
      observacao: "Pegadinha: o 'e' vira 'ou' na negação. A CESGRANRIO adora trocar os conectivos."
    },
    {
      titulo: "Exemplo 2 – Negação de condicional",
      enunciado: "Qual é a negação de: 'Se o cliente tem renda alta, então o empréstimo é aprovado'?",
      resolucao: `
        <p><strong>Dados:</strong> p = "cliente tem renda alta"; q = "empréstimo é aprovado".</p>
        <p><strong>Fórmula:</strong> ¬(p → q) ≡ p ∧ ¬q.</p>
        <p><strong>Cálculo:</strong> mantém p ("tem renda alta") e nega q ("empréstimo NÃO é aprovado"), usando o conectivo "E".</p>
        <p><strong>Resposta:</strong> "O cliente tem renda alta E o empréstimo NÃO é aprovado."</p>
      `,
      observacao: "Nunca negue o antecedente! A negação de p → q NÃO é ¬p → ¬q."
    }
  ],

  etapasAprendizagem: [
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 1 – Identificando proposições",
      conteudo: "Aplique a definição de proposição.",
      pergunta: "Qual das sentenças abaixo É uma proposição lógica?",
      alternativas: [
        "Qual é o seu nome?",
        "O Banco do Brasil foi fundado em 1808.",
        "Estude muito para a prova!",
        "x + 5 = 12",
        "Que dia maravilhoso!"
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Proposição é sentença <em>declarativa</em> que pode ser V ou F.</li>
          <li>"O Banco do Brasil foi fundado em 1808" é declarativa e tem valor lógico definido (V).</li>
          <li>Portanto é proposição.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> pergunta — não é proposição.</li>
          <li><strong>C:</strong> imperativo (ordem) — não é proposição.</li>
          <li><strong>D:</strong> possui variável livre (x) — o valor depende de x.</li>
          <li><strong>E:</strong> exclamação — não é proposição.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Lembre-se: proposição precisa ser <strong>declarativa</strong> (afirmativa ou negativa) e ter valor V ou F bem definido. Perguntas, ordens, exclamações e sentenças com variáveis livres NÃO são proposições.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>A: pergunta → fora.</li>
          <li>B: afirmação histórica verificável → proposição. ✔</li>
          <li>C: ordem → fora.</li>
          <li>D: variável x → fora.</li>
          <li>E: exclamação → fora.</li>
        </ol>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 1 – Conjunção",
      pergunta: "Considere p = 'O céu é azul' (V) e q = '2 + 2 = 5' (F). Qual o valor lógico de p ∧ q?",
      alternativas: ["Verdadeiro", "Falso", "Indeterminado", "Depende do contexto", "Não é proposição"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>p = V, q = F.</li>
          <li>Conjunção p ∧ q só é V quando ambos são V.</li>
          <li>Como q = F, o resultado é <strong>F</strong>.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> só seria V se ambos fossem V.</li>
          <li><strong>C/D:</strong> não existe indeterminação — os valores são fixos.</li>
          <li><strong>E:</strong> p ∧ q é proposição composta válida.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Você provavelmente confundiu com a disjunção (∨), que é V se pelo menos um for V. Na conjunção (∧), basta UM F para o resultado ser F.</p>
        <p><strong>Resolução correta:</strong> p = V, q = F → p ∧ q = <strong>F</strong>.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 2 – Condicional",
      conteudo: "Aplique a tabela do condicional.",
      pergunta: "Se p = F e q = F, qual o valor de p → q?",
      alternativas: ["Falso", "Verdadeiro", "Indeterminado", "Igual a p", "Igual a q"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Condicional p → q só é F quando p = V e q = F.</li>
          <li>Como p = F, o condicional é automaticamente <strong>V</strong>.</li>
        </ol>
        <p>Isso é o famoso "falso implica qualquer coisa".</p>
        <p><strong>Por que as outras estão erradas:</strong> B é a correta; as demais não se aplicam.</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Erro comum: achar que F → F é falso. NÃO é! O condicional só é falso em V → F.</p>
        <p><strong>Resolução correta:</strong> p = F, q = F → p → q = <strong>V</strong>.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 2 – Tautologia",
      pergunta: "Qual das proposições abaixo é uma TAUTOLOGIA (sempre verdadeira, independente de p)?",
      alternativas: ["p ∧ ¬p", "p ∨ ¬p", "p → ¬p", "p ↔ ¬p", "¬p → p"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Tautologia = sempre V.</li>
          <li>p ∨ ¬p: se p = V, então V ∨ F = V; se p = F, então F ∨ V = V.</li>
          <li>Em ambos os casos, resultado V. Logo é tautologia.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> p ∧ ¬p é sempre FALSA (contradição).</li>
          <li><strong>C:</strong> p → ¬p só é V quando p = F.</li>
          <li><strong>D:</strong> p ↔ ¬p é sempre FALSA (p e ¬p nunca têm mesmo valor).</li>
          <li><strong>E:</strong> ¬p → p só é V quando p = V.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Tautologia é aquela que <em>nunca</em> é falsa. p ∨ ¬p é o princípio do terceiro excluído: ou p é V, ou ¬p é V — sempre um dos dois.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>Teste p = V: F ∨ V = V (só p ∨ ¬p).</li>
          <li>Teste p = F: V ∨ V = V (só p ∨ ¬p).</li>
        </ol>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 3 – De Morgan",
      conteudo: "Aplique a Lei de De Morgan.",
      pergunta: "A negação de ¬(p ∨ q) é equivalente a:",
      alternativas: ["¬p ∨ ¬q", "¬p ∧ ¬q", "p ∧ q", "p ∨ q", "p → q"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>De Morgan: ¬(p ∨ q) ≡ ¬p ∧ ¬q.</li>
          <li>A negação "quebra" a disjunção e troca para conjunção, negando cada parte.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> seria o resultado de ¬(p ∧ q), não de ¬(p ∨ q).</li>
          <li><strong>C:</strong> é a própria p ∧ q (sem negações).</li>
          <li><strong>D:</strong> é a proposição original.</li>
          <li><strong>E:</strong> condicional não aparece em De Morgan.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Você provavelmente trocou os conectivos. Memorize: <strong>negação de OU vira E; negação de E vira OU</strong>, negando cada parte.</p>
        <p><strong>Resolução correta:</strong> ¬(p ∨ q) ≡ ¬p ∧ ¬q.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 3 – Negação do condicional",
      pergunta: "A negação da proposição 'Se o cliente paga em dia, então ele tem crédito aprovado' é:",
      alternativas: [
        "Se o cliente não paga em dia, então ele não tem crédito aprovado.",
        "O cliente paga em dia e não tem crédito aprovado.",
        "O cliente não paga em dia e tem crédito aprovado.",
        "Se o cliente tem crédito aprovado, então ele paga em dia.",
        "O cliente paga em dia ou tem crédito aprovado."
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>p = "paga em dia"; q = "tem crédito aprovado".</li>
          <li>Proposição original: p → q.</li>
          <li>Negação: ¬(p → q) ≡ p ∧ ¬q.</li>
          <li>p ∧ ¬q = "paga em dia E NÃO tem crédito aprovado".</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> nega o antecedente — não é negação, é outra proposição.</li>
          <li><strong>C:</strong> inverteu a negação (negou p em vez de negar q).</li>
          <li><strong>D:</strong> é a recíproca, não a negação.</li>
          <li><strong>E:</strong> virou disjunção sem lógica.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Erro clássico: negar o antecedente. A negação do condicional p → q é <strong>p ∧ ¬q</strong> — mantém p e nega q, unindo com "E".</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>p = paga em dia; q = tem crédito aprovado.</li>
          <li>¬(p → q) ≡ p ∧ ¬q.</li>
          <li>= "paga em dia E não tem crédito aprovado".</li>
        </ol>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 4 – Contrapositiva",
      conteudo: "Aplique a equivalência da contrapositiva.",
      pergunta: "A contrapositiva de 'Se é bancário, então estuda lógica' é:",
      alternativas: [
        "Se estuda lógica, então é bancário.",
        "Se não é bancário, então não estuda lógica.",
        "Se não estuda lógica, então não é bancário.",
        "Se é bancário, então não estuda lógica.",
        "Se não é bancário, então estuda lógica."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>p = "é bancário"; q = "estuda lógica".</li>
          <li>Original: p → q.</li>
          <li>Contrapositiva: ¬q → ¬p.</li>
          <li>= "Se NÃO estuda lógica, então NÃO é bancário".</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> é a recíproca (q → p), não equivalente.</li>
          <li><strong>B:</strong> é a inversa (¬p → ¬q), não equivalente.</li>
          <li><strong>D:</strong> nega só o consequente.</li>
          <li><strong>E:</strong> mistura inversa com afirmação.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Contrapositiva = inverte a ordem E nega ambos: p → q ≡ ¬q → ¬p. Não confunda com a recíproca (q → p) nem com a inversa (¬p → ¬q).</p>
        <p><strong>Resolução correta:</strong> ¬q → ¬p = "Se não estuda lógica, então não é bancário".</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 4 – Quantificadores",
      pergunta: "A negação de 'Todo candidato do concurso foi aprovado' é:",
      alternativas: [
        "Nenhum candidato do concurso foi aprovado.",
        "Todo candidato do concurso não foi aprovado.",
        "Algum candidato do concurso não foi aprovado.",
        "Algum candidato do concurso foi aprovado.",
        "Nenhum candidato do concurso não foi aprovado."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Estrutura: "Todo A é B".</li>
          <li>Negação: "Algum A NÃO é B".</li>
          <li>A = "candidato do concurso"; B = "aprovado".</li>
          <li>Negação: "Algum candidato do concurso NÃO foi aprovado".</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> "nenhum" é forte demais — bastaria um contraexemplo para negar.</li>
          <li><strong>B:</strong> "todo não" também é forte demais.</li>
          <li><strong>D:</strong> repete o original.</li>
          <li><strong>E:</strong> dupla negação confusa — equivale a "algum foi aprovado".</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Erro clássico: negar "todo" como "nenhum". Errado! A negação correta de "todo A é B" é "existe pelo menos um A que NÃO é B".</p>
        <p><strong>Resolução correta:</strong> Algum candidato do concurso NÃO foi aprovado.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 5 – Equivalência lógica",
      conteudo: "Reescreva o condicional usando ∨.",
      pergunta: "A proposição p → q é logicamente equivalente a:",
      alternativas: ["p ∨ q", "¬p ∨ q", "¬p ∧ q", "p ∧ ¬q", "q → p"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Equivalência fundamental: p → q ≡ ¬p ∨ q.</li>
          <li>Verificação: se p = V e q = F → original F; ¬p ∨ q = F ∨ F = F. Confere.</li>
          <li>Se p = F → original V; ¬p ∨ q = V ∨ (qualquer) = V. Confere.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> p ∨ q seria V em mais casos — não equivalente.</li>
          <li><strong>C:</strong> ¬p ∧ q só é V quando p = F e q = V.</li>
          <li><strong>D:</strong> p ∧ ¬q é a negação de p → q.</li>
          <li><strong>E:</strong> q → p é a recíproca.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Memorize a equivalência: <strong>p → q ≡ ¬p ∨ q</strong>. É uma das mais cobradas em prova.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Questão 5 – Formalização em contexto bancário",
      pergunta: "Considere a frase: 'Se o cliente tem renda alta e score elevado, então o empréstimo é aprovado'. Sendo p = renda alta, q = score elevado, r = empréstimo aprovado, qual a formalização e sua negação, respectivamente?",
      alternativas: [
        "(p ∨ q) → r  e  (¬p ∧ ¬q) ∧ r",
        "(p ∧ q) → r  e  (p ∧ q) ∧ ¬r",
        "(p ∧ q) → r  e  (¬p ∨ ¬q) → ¬r",
        "(p ∧ q) → r  e  p ∨ ¬q ∨ ¬r",
        "(p → q) → r  e  (p ∧ q) ∧ ¬r"
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Antecedente: "renda alta E score elevado" → p ∧ q.</li>
          <li>Consequente: "empréstimo aprovado" → r.</li>
          <li>Formalização: (p ∧ q) → r.</li>
          <li>Negação: ¬[(p ∧ q) → r] ≡ (p ∧ q) ∧ ¬r.</li>
          <li>= "renda alta E score elevado E empréstimo NÃO aprovado".</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> trocou E por OU no antecedente.</li>
          <li><strong>C:</strong> negou antecedente e consequente — vira outra proposição.</li>
          <li><strong>D:</strong> negação mal aplicada com conectivos trocados.</li>
          <li><strong>E:</strong> formalização do antecedente errada.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Passos corretos:</p>
        <ol>
          <li>Antecedente: p ∧ q ("E").</li>
          <li>Condicional: (p ∧ q) → r.</li>
          <li>Negação do condicional: mantém o antecedente, nega o consequente e usa "E": (p ∧ q) ∧ ¬r.</li>
        </ol>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    }
  ],

  questoes: [
    {
      dificuldade: "Fácil",
      pergunta: "Qual das alternativas abaixo NÃO é uma proposição lógica?",
      alternativas: [
        "O Banco do Brasil é uma sociedade de economia mista.",
        "2 + 2 = 5.",
        "Feche a porta, por favor.",
        "Brasília é a capital do Brasil.",
        "10 é maior que 3."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>"Feche a porta" é uma ordem (imperativo) — não pode ser classificada como V ou F. Logo, não é proposição.</p>
        <p><strong>Por que as outras são proposições:</strong> A, B, D, E são sentenças declarativas com valor lógico definido (V, F, V, V).</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Lembre: proposição = sentença declarativa com valor V ou F. Ordens, perguntas e exclamações ficam de fora.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      dificuldade: "Fácil",
      pergunta: "Sabendo que p = V e q = F, qual o valor de ¬p ∨ q?",
      alternativas: ["V", "F", "Indeterminado", "Igual a p", "Igual a q"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>¬p = F (pois p = V).</li>
          <li>F ∨ F = F.</li>
        </ol>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Negação de V é F. Então ¬p ∨ q = F ∨ F = F.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Fácil",
      pergunta: "Se p = F e q = V, o valor de p ↔ q é:",
      alternativas: ["V", "F", "Depende", "Indeterminado", "Igual a p"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Bicondicional é V quando p e q têm <strong>mesmo</strong> valor. Como p = F e q = V (diferentes), p ↔ q = F.</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Bicondicional exige valores iguais para ser V. p = F e q = V → resultado F.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Fácil",
      pergunta: "A negação de p → q é:",
      alternativas: ["¬p → ¬q", "¬q → ¬p", "p ∧ ¬q", "¬p ∨ q", "p ∨ ¬q"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>¬(p → q) ≡ p ∧ ¬q. A negação do condicional mantém o antecedente, nega o consequente e usa "E".</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Você confundiu com a contrapositiva (¬q → ¬p), que é uma <em>equivalência</em>, não a negação. A negação é p ∧ ¬q.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      dificuldade: "Fácil",
      pergunta: "Quantas linhas tem a tabela-verdade de uma proposição composta com 3 proposições simples distintas?",
      alternativas: ["3", "6", "8", "9", "16"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Fórmula: 2ⁿ, onde n = número de proposições simples. Com n = 3 → 2³ = 8 linhas.</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Lembre: cada proposição simples dobra o número de linhas. 2·2·2 = 8.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "A negação de ¬(p ∧ q) é equivalente a:",
      alternativas: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p ∨ q", "p ∧ q", "p → q"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q. A negação quebra a conjunção e troca por disjunção.</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Ao negar conjunção, o conectivo vira disjunção: ¬(p ∧ q) ≡ ¬p ∨ ¬q.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "A negação de 'O gerente assinou o contrato e liberou o crédito' é:",
      alternativas: [
        "O gerente não assinou o contrato e não liberou o crédito.",
        "O gerente não assinou o contrato ou não liberou o crédito.",
        "O gerente assinou o contrato ou liberou o crédito.",
        "Se o gerente não assinou, então não liberou o crédito.",
        "O gerente assinou o contrato e não liberou o crédito."
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>p = "assinou"; q = "liberou". Original: p ∧ q.</li>
          <li>¬(p ∧ q) ≡ ¬p ∨ ¬q.</li>
          <li>= "NÃO assinou OU NÃO liberou".</li>
        </ol>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Erro comum: manter o "e" na negação. Ao negar conjunção, o "e" vira "ou".</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "A negação de 'Algum candidato foi aprovado' é:",
      alternativas: [
        "Algum candidato não foi aprovado.",
        "Todo candidato foi aprovado.",
        "Nenhum candidato foi aprovado.",
        "Todo candidato não foi aprovado.",
        "Algum candidato foi reprovado duas vezes."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Negação de "algum A é B" → "nenhum A é B".</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Para negar "existe pelo menos um", dizemos "não existe nenhum": "Nenhum candidato foi aprovado".</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "A contrapositiva de 'Se chove, então a rua fica molhada' é:",
      alternativas: [
        "Se a rua fica molhada, então chove.",
        "Se não chove, então a rua não fica molhada.",
        "Se a rua não fica molhada, então não chove.",
        "Se chove, então a rua não fica molhada.",
        "Se a rua não fica molhada, então chove."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Contrapositiva: p → q ≡ ¬q → ¬p. = "Se a rua NÃO fica molhada, então NÃO chove".</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Contrapositiva inverte a ordem e nega ambos: ¬q → ¬p.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "Considere p = 'O sistema está online' e q = 'O caixa funciona'. A proposição 'O sistema não está online ou o caixa funciona' é equivalente a:",
      alternativas: ["p → q", "q → p", "p ∧ q", "p ↔ q", "¬(p → q)"],
      correta: 0,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>¬p ∨ q ≡ p → q. É a equivalência fundamental do condicional.</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Memorize: ¬p ∨ q ≡ p → q (eliminação do condicional).</p>
        <p><strong>Alternativa correta:</strong> A.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "A proposição (p ∧ q) → p é:",
      alternativas: ["Contradição", "Contingente", "Tautologia", "Equivalente a ¬p", "Equivalente a p ↔ q"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Se p ∧ q é V, então p = V (obrigatoriamente). Logo, o consequente é sempre V quando o antecedente é V. É uma tautologia.</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Se (p ∧ q) é V, então p obrigatoriamente é V. O condicional nunca será V → F. Tautologia.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "A negação de 'Se o cliente é especial, então ele tem atendimento prioritário' é:",
      alternativas: [
        "Se o cliente não é especial, então ele não tem atendimento prioritário.",
        "Se o cliente tem atendimento prioritário, então ele é especial.",
        "O cliente é especial e não tem atendimento prioritário.",
        "O cliente não é especial ou tem atendimento prioritário.",
        "O cliente é especial ou não tem atendimento prioritário."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>¬(p → q) ≡ p ∧ ¬q. "Cliente é especial E não tem atendimento prioritário".</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>A negação do condicional mantém o antecedente, nega o consequente e usa "E".</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "A proposição 'Todo gerente tem meta' tem como negação:",
      alternativas: [
        "Nenhum gerente tem meta.",
        "Todo gerente não tem meta.",
        "Algum gerente não tem meta.",
        "Algum gerente tem meta.",
        "Nenhum gerente não tem meta."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Negação de "todo A é B" → "algum A NÃO é B".</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Basta UM gerente sem meta para negar "todo". Por isso: "Algum gerente não tem meta".</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "Se p ↔ q é Falso, então:",
      alternativas: [
        "p e q são ambos V.",
        "p e q são ambos F.",
        "p e q têm valores diferentes.",
        "p = V e q = F, obrigatoriamente.",
        "p = F e q = V, obrigatoriamente."
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Bicondicional é F quando p e q têm valores <em>diferentes</em> (V,F ou F,V).</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>p ↔ q é V quando iguais e F quando diferentes. Não há como determinar qual é V e qual é F — só que diferem.</p>
        <p><strong>Alternativa correta:</strong> C.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "A negação de 'Nenhum funcionário faltou' é:",
      alternativas: [
        "Todo funcionário faltou.",
        "Algum funcionário faltou.",
        "Algum funcionário não faltou.",
        "Nenhum funcionário não faltou.",
        "Todo funcionário não faltou."
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Negação de "nenhum A é B" → "algum A é B".</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Para negar "nenhum faltou", basta UM ter faltado: "Algum funcionário faltou".</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Difícil",
      pergunta: "Considere as proposições: p = 'O banco lucrou', q = 'Os clientes ficaram satisfeitos'. A proposição (p ∨ q) ∧ (¬p ∧ ¬q) é:",
      alternativas: ["Tautologia", "Contradição", "Contingente", "Equivalente a p → q", "Equivalente a p ↔ q"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>¬p ∧ ¬q ≡ ¬(p ∨ q) (De Morgan).</li>
          <li>Substituindo: (p ∨ q) ∧ ¬(p ∨ q).</li>
          <li>Uma proposição e sua negação em conjunção = sempre FALSA.</li>
          <li>Logo, contradição.</li>
        </ol>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Note que (¬p ∧ ¬q) é justamente a negação de (p ∨ q). Uma proposição E sua negação = contradição.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Difícil",
      pergunta: "Sejam p, q, r proposições. A proposição (p → q) ∧ (q → r) implica logicamente:",
      alternativas: [
        "r → p",
        "p → r",
        "q → p",
        "¬r → p",
        "p ∧ r"
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Silogismo hipotético: se p implica q e q implica r, então p implica r. Formalmente: (p → q) ∧ (q → r) ⇒ (p → r).</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Trata-se do silogismo hipotético: (p → q) ∧ (q → r) ⇒ p → r. É uma das inferências clássicas cobradas em prova.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Difícil",
      pergunta: "A negação de 'Se todo gerente tem meta e nenhum estagiário tem meta, então a empresa bate a meta' é:",
      alternativas: [
        "Se algum gerente não tem meta ou algum estagiário tem meta, então a empresa não bate a meta.",
        "Todo gerente tem meta e nenhum estagiário tem meta, e a empresa não bate a meta.",
        "Algum gerente não tem meta e algum estagiário tem meta, e a empresa bate a meta.",
        "Nenhum gerente tem meta ou todo estagiário tem meta, e a empresa não bate a meta.",
        "Se a empresa não bate a meta, então algum gerente não tem meta."
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Estrutura: A → B, com A = "todo gerente tem meta e nenhum estagiário tem meta"; B = "empresa bate a meta".</li>
          <li>Negação: A ∧ ¬B.</li>
          <li>Mantém A intacto e nega B: "Todo gerente tem meta E nenhum estagiário tem meta E a empresa NÃO bate a meta".</li>
        </ol>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Negação de A → B é A ∧ ¬B (mantém A, nega B). Não mexa no antecedente!</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Difícil",
      pergunta: "Sabendo que a proposição 'Se Ana é analista, então Bruno é bancário' é FALSA, podemos concluir que:",
      alternativas: [
        "Ana não é analista e Bruno não é bancário.",
        "Ana é analista e Bruno não é bancário.",
        "Ana não é analista e Bruno é bancário.",
        "Ana é analista e Bruno é bancário.",
        "Ana não é analista ou Bruno é bancário."
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Condicional só é Falso em V → F. Logo, antecedente V (Ana é analista) e consequente F (Bruno NÃO é bancário).</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O único caso em que p → q é F: p = V e q = F. Então Ana é analista E Bruno não é bancário.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Fácil",
      pergunta: "Sabendo que 'Se o cliente paga em dia, então o score aumenta' é verdadeira e que 'o cliente paga em dia' é verdadeira, pode-se concluir que:",
      alternativas: [
        "O score não aumenta.",
        "O score aumenta.",
        "O cliente não paga em dia.",
        "Nada se pode concluir.",
        "O cliente paga em dia e o score não aumenta."
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo (Modus Ponens):</strong></p>
        <ol>
          <li>Temos p → q (V) e p (V).</li>
          <li>Regra Modus Ponens: p ∧ (p → q) ⇒ q.</li>
          <li>Logo, q = "o score aumenta" é V.</li>
        </ol>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Aplicando Modus Ponens: se p é V e p → q é V, então q é V. Resposta: "O score aumenta".</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Fácil",
      pergunta: "A proposição ¬¬p é logicamente equivalente a:",
      alternativas: ["¬p", "p", "p ∨ ¬p", "p ∧ ¬p", "p → ¬p"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p>Dupla negação: ¬¬p ≡ p. Negar duas vezes retorna ao valor original.</p>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>A dupla negação se cancela: ¬¬p ≡ p. Teste: se p = V, ¬p = F, ¬¬p = V.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "Sabendo que 'Se o candidato estuda, então é aprovado' é verdadeira e que 'o candidato NÃO foi aprovado', conclui-se que:",
      alternativas: [
        "O candidato estudou.",
        "O candidato não estudou.",
        "O candidato foi aprovado.",
        "Nada se pode concluir.",
        "O candidato estuda e não é aprovado."
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo (Modus Tollens):</strong></p>
        <ol>
          <li>Temos p → q (V) e ¬q (V).</li>
          <li>Regra Modus Tollens: (p → q) ∧ ¬q ⇒ ¬p.</li>
          <li>Logo, ¬p = "o candidato NÃO estudou".</li>
        </ol>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Modus Tollens: se p → q é V e q é F, então p é F. O candidato não estudou.</p>
        <p><strong>Alternativa correta:</strong> B.</p>
      `
    },
    {
      dificuldade: "Média",
      pergunta: "A negação da proposição p ↔ q é equivalente a:",
      alternativas: [
        "p ↔ q",
        "p ∨ q",
        "p ∧ q",
        "(p ∧ ¬q) ∨ (¬p ∧ q)",
        "¬p ∧ ¬q"
      ],
      correta: 3,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>p ↔ q é V quando p e q têm <em>valores iguais</em>.</li>
          <li>A negação é V quando p e q têm <em>valores diferentes</em>.</li>
          <li>Valores diferentes = (p ∧ ¬q) ∨ (¬p ∧ q).</li>
        </ol>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>A negação do bicondicional diz que p e q NÃO têm o mesmo valor, ou seja, (p ∧ ¬q) ∨ (¬p ∧ q).</p>
        <p><strong>Alternativa correta:</strong> D.</p>
      `
    },
    {
      dificuldade: "Difícil",
      pergunta: "Sabendo que a proposição 'O gerente aprova o crédito ou o cliente desiste' é verdadeira e que 'o gerente NÃO aprova o crédito' é verdadeira, pode-se concluir que:",
      alternativas: [
        "O cliente desiste.",
        "O cliente não desiste.",
        "O gerente aprova e o cliente desiste.",
        "Nada se pode concluir.",
        "O cliente desiste ou o gerente aprova."
      ],
      correta: 0,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo (Silogismo Disjuntivo):</strong></p>
        <ol>
          <li>Temos p ∨ q (V) e ¬p (V).</li>
          <li>Regra do Silogismo Disjuntivo: (p ∨ q) ∧ ¬p ⇒ q.</li>
          <li>Como p é F, para a disjunção ser V, q deve ser V.</li>
          <li>Logo, q = "o cliente desiste" é V.</li>
        </ol>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>Se "p ou q" é V e p é F, então q DEVE ser V. Isso é o silogismo disjuntivo.</p>
        <p><strong>Alternativa correta:</strong> A.</p>
      `
    }
  ],

  avaliacaoFinal: {
    quantidade: 20,
    questoes: [
      {
        dificuldade: "Fácil",
        pergunta: "Qual das sentenças abaixo é uma proposição lógica?",
        alternativas: [
          "Qual o seu saldo?",
          "Faça o depósito agora.",
          "O Banco do Brasil é uma instituição financeira.",
          "Que dia lindo!",
          "x + 5 = 12"
        ],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p>"O Banco do Brasil é uma instituição financeira" é declarativa e tem valor V. As demais são pergunta, ordem, exclamação e sentença com variável.</p>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Proposição = sentença declarativa com valor V ou F. Perguntas, ordens, exclamações e variáveis livres não valem.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      },
      {
        dificuldade: "Fácil",
        pergunta: "Sendo p = V e q = V, o valor de p ∧ q é:",
        alternativas: ["F", "V", "Indeterminado", "Depende", "Nenhuma"],
        correta: 1,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>Conjunção com ambos V = V.</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>p = V e q = V → p ∧ q = V.</p><p><strong>Alternativa correta:</strong> B.</p>`
      },
      {
        dificuldade: "Fácil",
        pergunta: "Se p = V e q = F, então p → q é:",
        alternativas: ["V", "F", "Indeterminado", "Igual a p", "Igual a q"],
        correta: 1,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>Condicional V → F é o único caso Falso.</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>V → F = F. Memorize!</p><p><strong>Alternativa correta:</strong> B.</p>`
      },
      {
        dificuldade: "Fácil",
        pergunta: "Se p = F e q = F, o valor de p ↔ q é:",
        alternativas: ["F", "V", "Indeterminado", "Igual a p", "Igual a q"],
        correta: 1,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>Bicondicional é V quando p e q têm mesmo valor (F e F são iguais).</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>p ↔ q = V quando p e q são iguais. F ↔ F = V.</p><p><strong>Alternativa correta:</strong> B.</p>`
      },
      {
        dificuldade: "Fácil",
        pergunta: "A negação de 'Todo aluno foi aprovado' é:",
        alternativas: [
          "Nenhum aluno foi aprovado.",
          "Todo aluno não foi aprovado.",
          "Algum aluno não foi aprovado.",
          "Algum aluno foi aprovado.",
          "Todos foram reprovados."
        ],
        correta: 2,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>Negação de "todo A é B" → "algum A não é B".</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>Basta UM aluno não aprovado para negar o "todo".</p><p><strong>Alternativa correta:</strong> C.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "A negação de ¬(p ∨ q) é equivalente a:",
        alternativas: ["¬p ∨ ¬q", "¬p ∧ ¬q", "p ∨ q", "p ∧ q", "p → q"],
        correta: 1,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>De Morgan: ¬(p ∨ q) ≡ ¬p ∧ ¬q.</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>Ao negar disjunção, o "ou" vira "e".</p><p><strong>Alternativa correta:</strong> B.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "A negação de 'O cliente pagou em dia e o gerente liberou o crédito' é:",
        alternativas: [
          "O cliente não pagou em dia e o gerente não liberou o crédito.",
          "O cliente não pagou em dia ou o gerente não liberou o crédito.",
          "O cliente pagou em dia ou o gerente liberou o crédito.",
          "Se o cliente pagou em dia, então o gerente liberou o crédito.",
          "O cliente pagou em dia e o gerente não liberou o crédito."
        ],
        correta: 1,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>¬(p ∧ q) ≡ ¬p ∨ ¬q: "não pagou OU não liberou".</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>A negação de "E" é "OU" com as partes negadas.</p><p><strong>Alternativa correta:</strong> B.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "A negação de 'Se o candidato estudou, então foi aprovado' é:",
        alternativas: [
          "Se o candidato não estudou, então não foi aprovado.",
          "Se o candidato foi aprovado, então estudou.",
          "O candidato estudou e não foi aprovado.",
          "O candidato não estudou ou foi aprovado.",
          "O candidato não estudou e não foi aprovado."
        ],
        correta: 2,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>¬(p → q) ≡ p ∧ ¬q: "estudou E não foi aprovado".</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>Negação do condicional: mantém antecedente, nega consequente, usa "E".</p><p><strong>Alternativa correta:</strong> C.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "A contrapositiva de 'Se é carioca, então é brasileiro' é:",
        alternativas: [
          "Se é brasileiro, então é carioca.",
          "Se não é carioca, então não é brasileiro.",
          "Se não é brasileiro, então não é carioca.",
          "Se é carioca, então não é brasileiro.",
          "Se não é brasileiro, então é carioca."
        ],
        correta: 2,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>Contrapositiva: ¬q → ¬p. "Se não é brasileiro, então não é carioca".</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>Inverte a ordem e nega ambos: ¬q → ¬p.</p><p><strong>Alternativa correta:</strong> C.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "A negação de 'Algum funcionário recebeu bônus' é:",
        alternativas: [
          "Algum funcionário não recebeu bônus.",
          "Todo funcionário recebeu bônus.",
          "Nenhum funcionário recebeu bônus.",
          "Todo funcionário não recebeu bônus.",
          "Algum gerente recebeu bônus."
        ],
        correta: 2,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>Negação de "algum A é B" → "nenhum A é B".</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>Para negar "existe pelo menos um", dizemos "não existe nenhum".</p><p><strong>Alternativa correta:</strong> C.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "A proposição p → q é equivalente a:",
        alternativas: ["p ∧ ¬q", "¬p ∨ q", "¬p ∧ q", "q → p", "p ∨ q"],
        correta: 1,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>Eliminação do condicional: p → q ≡ ¬p ∨ q.</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>Memorize: p → q ≡ ¬p ∨ q.</p><p><strong>Alternativa correta:</strong> B.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "Qual das proposições abaixo é uma tautologia?",
        alternativas: ["p ∧ ¬p", "p → ¬p", "p ∨ ¬p", "p ↔ ¬p", "¬p → p"],
        correta: 2,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>p ∨ ¬p é sempre V (princípio do terceiro excluído).</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>p ∨ ¬p é sempre V: ou p é V, ou ¬p é V.</p><p><strong>Alternativa correta:</strong> C.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "Se p ↔ q é Verdadeiro, então:",
        alternativas: [
          "p = V e q = F.",
          "p e q têm valores iguais.",
          "p = V sempre.",
          "p = F sempre.",
          "p = q = F apenas."
        ],
        correta: 1,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>Bicondicional V ⟺ p e q têm o mesmo valor lógico.</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>p ↔ q = V quando ambos V ou ambos F.</p><p><strong>Alternativa correta:</strong> B.</p>`
      },
      {
        dificuldade: "Média",
        pergunta: "A proposição 'Não é verdade que o cliente é especial ou tem conta premium' equivale a:",
        alternativas: [
          "O cliente é especial ou tem conta premium.",
          "O cliente é especial e tem conta premium.",
          "O cliente não é especial e não tem conta premium.",
          "O cliente não é especial ou não tem conta premium.",
          "Se o cliente é especial, então tem conta premium."
        ],
        correta: 2,
        explicacaoAcerto: `<p><strong>✅ Correto!</strong></p><p>De Morgan: ¬(p ∨ q) ≡ ¬p ∧ ¬q.</p>`,
        explicacaoErro: `<p><strong>❌ Não foi dessa vez.</strong></p><p>A negação de "ou" gera "e" com as partes negadas.</p><p><strong>Alternativa correta:</strong> C.</p>`
      },
      {
        dificuldade: "Difícil",
        pergunta: "Considere p = 'A meta foi batida', q = 'Os bônus foram pagos'. A proposição (p ∧ q) ∨ (¬p ∧ q) é equivalente a:",
        alternativas: ["p", "q", "¬p", "p ∧ ¬q", "p ↔ q"],
        correta: 1,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p><strong>Passo a passo:</strong></p>
          <ol>
            <li>(p ∧ q) ∨ (¬p ∧ q) — coloque q em evidência: q ∧ (p ∨ ¬p).</li>
            <li>p ∨ ¬p = V (tautologia).</li>
            <li>q ∧ V = q.</li>
          </ol>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Coloque q em evidência: q ∧ (p ∨ ¬p) = q ∧ V = q.</p>
          <p><strong>Alternativa correta:</strong> B.</p>
        `
      },
      {
        dificuldade: "Difícil",
        pergunta: "Se a proposição (p → q) é Falsa e a proposição (q → r) é Verdadeira, pode-se concluir sobre p e q que:",
        alternativas: [
          "p = F e q = F.",
          "p = V e q = F.",
          "p = V e q = V.",
          "p = F e q = V.",
          "Não é possível determinar p e q."
        ],
        correta: 1,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p><strong>Passo a passo:</strong></p>
          <ol>
            <li>p → q só é Falso em V → F.</li>
            <li>Logo, p = V e q = F.</li>
            <li>(Observação: com q = F, q → r é automaticamente V, o que é coerente com o enunciado, mas não determina r.)</li>
          </ol>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>O único caso em que p → q é F: p = V e q = F. O valor de r fica livre.</p>
          <p><strong>Alternativa correta:</strong> B.</p>
        `
      },
      {
        dificuldade: "Difícil",
        pergunta: "A negação de 'Se o candidato tem experiência e passou no teste, então será contratado' é:",
        alternativas: [
          "Se o candidato não tem experiência ou não passou no teste, então não será contratado.",
          "O candidato tem experiência, passou no teste e não será contratado.",
          "O candidato não tem experiência ou não passou no teste, e será contratado.",
          "O candidato tem experiência ou passou no teste, e não será contratado.",
          "Se o candidato não for contratado, então não tem experiência."
        ],
        correta: 1,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p><strong>Passo a passo:</strong></p>
          <ol>
            <li>Estrutura: (A ∧ B) → C, com A = "tem experiência", B = "passou no teste", C = "será contratado".</li>
            <li>Negação: (A ∧ B) ∧ ¬C.</li>
            <li>= "Tem experiência, passou no teste e NÃO será contratado".</li>
          </ol>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Negação do condicional mantém o antecedente intacto e nega o consequente.</p>
          <p><strong>Alternativa correta:</strong> B.</p>
        `
      },
      {
        dificuldade: "Difícil",
        pergunta: "Considere: 'Se todo gerente é pontual, então algum funcionário é promovido'. A negação lógica dessa proposição é:",
        alternativas: [
          "Se algum gerente não é pontual, então nenhum funcionário é promovido.",
          "Todo gerente é pontual e nenhum funcionário é promovido.",
          "Algum gerente não é pontual e algum funcionário é promovido.",
          "Todo gerente é pontual ou nenhum funcionário é promovido.",
          "Nenhum gerente é pontual e algum funcionário é promovido."
        ],
        correta: 1,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p><strong>Passo a passo:</strong></p>
          <ol>
            <li>Estrutura: A → B, com A = "todo gerente é pontual", B = "algum funcionário é promovido".</li>
            <li>Negação do condicional: A ∧ ¬B.</li>
            <li>A = "todo gerente é pontual" (mantém).</li>
            <li>¬B = "nenhum funcionário é promovido" (negação de "algum").</li>
            <li>Resultado: "Todo gerente é pontual E nenhum funcionário é promovido".</li>
          </ol>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Mantém o antecedente (todo gerente pontual) e nega o consequente: negação de "algum" é "nenhum".</p>
          <p><strong>Alternativa correta:</strong> B.</p>
        `
      },
      {
        dificuldade: "Difícil",
        pergunta: "Em um banco, sabe-se que: 'Se o cliente tem bom histórico, então o gerente aprova o crédito'. 'Se o gerente aprova o crédito, então o cliente compra o produto'. Sabendo que o cliente NÃO comprou o produto, pode-se concluir:",
        alternativas: [
          "O cliente tem bom histórico e o gerente aprovou o crédito.",
          "O cliente tem bom histórico, mas o gerente não aprovou o crédito.",
          "O cliente não tem bom histórico e o gerente não aprovou o crédito.",
          "O cliente não tem bom histórico ou o gerente não aprovou o crédito.",
          "Nada se pode concluir."
        ],
        correta: 2,
        explicacaoAcerto: `
          <p><strong>✅ Correto!</strong></p>
          <p><strong>Passo a passo:</strong></p>
          <ol>
            <li>p = bom histórico, q = aprovação, r = comprou produto.</li>
            <li>(p → q) ∧ (q → r) ⇒ p → r (silogismo hipotético).</li>
            <li>Sabemos ¬r. Pela contrapositiva de p → r: ¬r → ¬p.</li>
            <li>Logo, ¬p: "não tem bom histórico".</li>
            <li>Também por contrapositiva de q → r: ¬r → ¬q. Então ¬q: "não aprovou".</li>
            <li>Conclusão: ¬p ∧ ¬q.</li>
          </ol>
        `,
        explicacaoErro: `
          <p><strong>❌ Não foi dessa vez.</strong></p>
          <p>Aplique a contrapositiva duas vezes: ¬r → ¬q e ¬q → ¬p. Portanto, ¬r → ¬p. Como ¬r é dado, conclui-se ¬p e ¬q.</p>
          <p><strong>Alternativa correta:</strong> C.</p>
        `
      }
    ],
    percentualAprovacao: 80
  },

  criterioConclusao: {
    minimoAcertos: 80,
    tempoEstimado: "2h30"
  }
};
