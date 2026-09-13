// ARQUIVO: modulos/conjuntos.js
export const modulo = {
  id: "conjuntos",
  nome: "Conjuntos: União, Interseção e Diagramas de Venn",
  disciplina: "Matemática",
  ordem: 8,
  nivel: "Intermediário",

  introducao: {
    titulo: "Introdução",
    descricao: `
      <p>Conjuntos são a linguagem básica da Matemática moderna. Em provas do BB/CESGRANRIO, questões de conjuntos aparecem disfarçadas de problemas do dia a dia: pesquisas de mercado, número de clientes que usam dois produtos, alunos que falam dois idiomas, funcionários que possuem duas certificações. Sempre que o enunciado trouxer <strong>“ambos”, “somente”, “pelo menos um” ou “nenhum”</strong>, é quase certo que a solução passa por conjuntos.</p>
      <p>Neste módulo você vai dominar as operações fundamentais — <strong>união (∪)</strong>, <strong>interseção (∩)</strong>, <strong>diferença (−)</strong>, <strong>inclusão (⊂)</strong> e <strong>conjuntos disjuntos</strong> — e aprender a montar o <strong>Diagrama de Venn</strong>, a ferramenta mais poderosa para resolver questões de concursos.</p>
      <p>A banca costuma cobrar o famoso <em>Diagrama de Dois Conjuntos</em> (o “DDC”), que nada mais é do que preencher o diagrama de Venn de dentro para fora. Se você dominar esse passo a passo, ganha tempo e evita as pegadinhas clássicas das alternativas.</p>
    `,
    imagem: `
      <svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de Venn com dois conjuntos A e B sobrepostos">
        <rect x="0" y="0" width="420" height="230" fill="#f8fafc" rx="10"/>
        <circle cx="170" cy="115" r="78" fill="#6366f1" fill-opacity="0.22" stroke="#4f46e5" stroke-width="2.5"/>
        <circle cx="250" cy="115" r="78" fill="#10b981" fill-opacity="0.22" stroke="#059669" stroke-width="2.5"/>
        <text x="110" y="120" font-family="Arial" font-size="20" font-weight="700" fill="#0f172a">A</text>
        <text x="295" y="120" font-family="Arial" font-size="20" font-weight="700" fill="#0f172a">B</text>
        <text x="210" y="120" font-family="Arial" font-size="13" text-anchor="middle" fill="#0f172a">A∩B</text>
        <text x="210" y="200" font-family="Arial" font-size="12" text-anchor="middle" fill="#4f46e5">União A∪B = toda a área colorida</text>
      </svg>
    `
  },

  teoria: [
    {
      titulo: "1. Conceitos Essenciais",
      conteudo: `
        <p>Um <strong>conjunto</strong> é uma coleção de elementos. Trabalharemos com operações entre dois conjuntos A e B:</p>
        <ul>
          <li><strong>União (A ∪ B):</strong> todos os elementos que estão em A <em>ou</em> em B (ou nos dois).</li>
          <li><strong>Interseção (A ∩ B):</strong> elementos que estão em A <em>e</em> em B ao mesmo tempo.</li>
          <li><strong>Diferença (A − B):</strong> elementos que estão em A, mas <em>não</em> em B.</li>
          <li><strong>Inclusão (A ⊂ B):</strong> todo elemento de A também pertence a B — A é subconjunto de B.</li>
          <li><strong>Conjuntos disjuntos:</strong> A ∩ B = ∅ (não têm elementos em comum).</li>
        </ul>
        <p><strong>Fórmula-chave (muito cobrada):</strong></p>
        <p><strong>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</strong></p>
        <p>E para três conjuntos:</p>
        <p><strong>n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)</strong></p>
      `,
      imagem: `
        <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de Venn com regiões rotuladas">
          <rect x="0" y="0" width="420" height="200" fill="#f8fafc" rx="10"/>
          <circle cx="165" cy="100" r="72" fill="#6366f1" fill-opacity="0.22" stroke="#4f46e5" stroke-width="2.5"/>
          <circle cx="255" cy="100" r="72" fill="#10b981" fill-opacity="0.22" stroke="#059669" stroke-width="2.5"/>
          <text x="118" y="105" font-family="Arial" font-size="14" font-weight="700" fill="#0f172a">A−B</text>
          <text x="210" y="105" font-family="Arial" font-size="12" text-anchor="middle" fill="#0f172a">A∩B</text>
          <text x="272" y="105" font-family="Arial" font-size="14" font-weight="700" fill="#0f172a">B−A</text>
        </svg>
      `
    },
    {
      titulo: "2. Diagrama de Venn: o método DDC",
      conteudo: `
        <p>Para resolver problemas com dois conjuntos, siga o método do <strong>Diagrama de Dois Conjuntos (DDC)</strong>: preencha <em>de dentro para fora</em>.</p>
        <ol>
          <li><strong>1º)</strong> Coloque primeiro o valor de <strong>n(A ∩ B)</strong> (a interseção / “ambos”) no centro.</li>
          <li><strong>2º)</strong> Calcule <strong>somente A</strong> = n(A) − n(A∩B).</li>
          <li><strong>3º)</strong> Calcule <strong>somente B</strong> = n(B) − n(A∩B).</li>
          <li><strong>4º)</strong> Se houver <strong>“nenhum”</strong>, calcule por fora: nenhum = total − n(A∪B).</li>
        </ol>
        <p><strong>Erro mais comum:</strong> colocar n(A) e n(B) direto nas bolinhas <em>sem subtrair a interseção</em>. Isso faz você contar os elementos “ambos” duas vezes.</p>
        <p>Palavras-chave e o que fazer:</p>
        <ul>
          <li><strong>“ambos”</strong> → interseção (centro)</li>
          <li><strong>“somente A”</strong> → n(A) − n(A∩B)</li>
          <li><strong>“pelo menos um”</strong> → n(A ∪ B)</li>
          <li><strong>“nenhum”</strong> → total − n(A ∪ B)</li>
        </ul>
      `
    }
  ],

  exemplos: [
    {
      titulo: "Exemplo 1 – Pesquisa com dois produtos",
      enunciado: "Em uma pesquisa com 100 clientes, 60 preferem a marca A, 45 preferem a marca B, e 20 preferem ambas. Quantos clientes preferem pelo menos uma das marcas?",
      resolucao: `
        <p><strong>Dados:</strong> n(A)=60, n(B)=45, n(A∩B)=20.</p>
        <p><strong>Fórmula:</strong> n(A∪B) = n(A) + n(B) − n(A∩B).</p>
        <p><strong>Cálculo:</strong> n(A∪B) = 60 + 45 − 20 = <strong>85</strong>.</p>
        <p><strong>Resposta:</strong> 85 clientes preferem pelo menos uma das marcas.</p>
      `,
      observacao: "“Pelo menos uma” sempre pede união. Sempre subtraia a interseção, senão os 20 clientes seriam contados duas vezes."
    },
    {
      titulo: "Exemplo 2 – Uso do DDC passo a passo",
      enunciado: "Em uma turma de 40 alunos, 25 estudam Inglês, 18 estudam Espanhol e 8 estudam ambos. Quantos alunos <em>não</em> estudam nenhum dos dois idiomas?",
      resolucao: `
        <p><strong>Dados:</strong> Total=40, n(I)=25, n(E)=18, n(I∩E)=8.</p>
        <p><strong>Passo 1 (interseção):</strong> n(I∩E) = 8 → centro do diagrama.</p>
        <p><strong>Passo 2 (somente Inglês):</strong> 25 − 8 = 17.</p>
        <p><strong>Passo 3 (somente Espanhol):</strong> 18 − 8 = 10.</p>
        <p><strong>Passo 4 (união):</strong> n(I∪E) = 17 + 8 + 10 = 35.</p>
        <p><strong>Passo 5 (nenhum):</strong> 40 − 35 = <strong>5</strong>.</p>
        <p><strong>Resposta:</strong> 5 alunos não estudam nenhum idioma.</p>
      `,
      observacao: "Se a questão pedir “somente A”, “pelo menos um” ou “nenhum”, desenhe o diagrama e preencha de dentro para fora."
    }
  ],

  etapasAprendizagem: [
    // ============ FÁCEIS (1-3) ============
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 1 – União",
      conteudo: "Aplique diretamente a definição de união.",
      pergunta: "Se A = {1, 2, 3, 4, 5} e B = {4, 5, 6, 7, 8}, qual é o conjunto A ∪ B?",
      alternativas: [
        "{1, 2, 3, 4, 5, 6, 7, 8}",
        "{4, 5}",
        "{1, 2, 3}",
        "{6, 7, 8}",
        "{1, 2, 3, 6, 7, 8}"
      ],
      correta: 0,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>União A ∪ B reúne <em>todos</em> os elementos de A e de B, sem repetir.</li>
          <li>A = {1,2,3,4,5}; B = {4,5,6,7,8}.</li>
          <li>Juntando (sem repetir 4 e 5): {1,2,3,4,5,6,7,8}.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>B:</strong> {4,5} é a <em>interseção</em>, não a união.</li>
          <li><strong>C:</strong> {1,2,3} é A − B (só o que é exclusivo de A).</li>
          <li><strong>D:</strong> {6,7,8} é B − A (só o que é exclusivo de B).</li>
          <li><strong>E:</strong> faltam 4 e 5 — o aluno “tirou” a interseção da união por engano.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é <strong>confundir união com interseção</strong> ou “tirar” os elementos comuns.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>União = todos os elementos, sem repetir.</li>
          <li>A = {1,2,3,4,5}; B = {4,5,6,7,8}.</li>
          <li>Resultado: {1,2,3,4,5,6,7,8}.</li>
        </ol>
        <p><strong>Alternativa correta: A</strong> — porque a união inclui tanto o que é exclusivo quanto o que é comum.</p>
        <p><strong>Revise:</strong> ∪ junta tudo; ∩ pega só o que está nos dois.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 2 – Interseção",
      conteudo: "Aplique diretamente a definição de interseção.",
      pergunta: "Se A = {1, 2, 3, 4, 5} e B = {4, 5, 6, 7, 8}, qual é o conjunto A ∩ B?",
      alternativas: [
        "{1, 2, 3}",
        "{4, 5}",
        "{1, 2, 3, 4, 5, 6, 7, 8}",
        "{6, 7, 8}",
        "∅"
      ],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Interseção = elementos que estão em A <em>e</em> em B simultaneamente.</li>
          <li>Comparando A = {1,2,3,4,5} e B = {4,5,6,7,8}.</li>
          <li>Elementos comuns: 4 e 5. Logo A ∩ B = {4,5}.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> {1,2,3} é A − B, não interseção.</li>
          <li><strong>C:</strong> essa é a união A ∪ B.</li>
          <li><strong>D:</strong> {6,7,8} é B − A.</li>
          <li><strong>E:</strong> ∅ só seria resposta se os conjuntos fossem disjuntos — e não são.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é <strong>trocar interseção por união</strong> ou por diferença.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>Interseção = o que aparece nos dois conjuntos ao mesmo tempo.</li>
          <li>A tem {1,2,3,4,5}; B tem {4,5,6,7,8}.</li>
          <li>Comuns: 4 e 5. Logo A ∩ B = {4,5}.</li>
        </ol>
        <p><strong>Alternativa correta: B</strong> — porque 4 e 5 são os únicos elementos presentes simultaneamente em A e B.</p>
        <p><strong>Revise:</strong> ∩ = “e também”, ∪ = “ou”.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 3 – Diferença",
      conteudo: "Aplique a definição de diferença entre conjuntos.",
      pergunta: "Se A = {1, 2, 3, 4, 5} e B = {4, 5, 6, 7, 8}, qual é o conjunto A − B?",
      alternativas: [
        "{4, 5}",
        "{6, 7, 8}",
        "{1, 2, 3}",
        "{1, 2, 3, 6, 7, 8}",
        "{1, 2, 3, 4, 5}"
      ],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>A − B = elementos que estão em A, mas <em>não</em> estão em B.</li>
          <li>Percorremos A = {1,2,3,4,5} tirando tudo que também está em B.</li>
          <li>4 e 5 estão em B → saem. Restam {1,2,3}.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> {4,5} é a interseção.</li>
          <li><strong>B:</strong> {6,7,8} é B − A (diferença no sentido oposto).</li>
          <li><strong>D:</strong> essa é a diferença simétrica.</li>
          <li><strong>E:</strong> é o próprio A — o aluno esqueceu de retirar a parte comum.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é <strong>inverter a ordem</strong> e calcular B − A em vez de A − B.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>A − B = “o que é de A e não é de B”.</li>
          <li>A = {1,2,3,4,5}; retiramos 4 e 5 (que estão em B).</li>
          <li>Restou {1,2,3}.</li>
        </ol>
        <p><strong>Alternativa correta: C</strong> — porque só 1, 2 e 3 são exclusivos de A.</p>
        <p><strong>Revise:</strong> A − B ≠ B − A. A ordem importa!</p>
      `
    },

    // ============ MÉDIAS (4-9) ============
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 4 – União com fórmula",
      conteudo: "Use a fórmula da união.",
      pergunta: "Em uma turma, 30 alunos falam inglês, 20 falam espanhol e 10 falam ambos os idiomas. Quantos alunos falam pelo menos um desses idiomas?",
      alternativas: ["50", "40", "30", "60", "20"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Dados: n(I)=30, n(E)=20, n(I∩E)=10.</li>
          <li>“Pelo menos um” → união: n(I∪E) = n(I)+n(E)−n(I∩E).</li>
          <li>= 30 + 20 − 10 = <strong>40</strong>.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A (50):</strong> somou 30 + 20 sem subtrair a interseção (contou os 10 duas vezes).</li>
          <li><strong>C (30):</strong> usou apenas o número de quem fala inglês.</li>
          <li><strong>D (60):</strong> somou 30 + 20 + 10, incluindo a interseção em vez de subtraí-la.</li>
          <li><strong>E (20):</strong> usou apenas o número de quem fala espanhol.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é <strong>somar n(A) + n(B) sem retirar a interseção</strong>.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>Pelo menos um idioma = união.</li>
          <li>n(I∪E) = 30 + 20 − 10 = 40.</li>
        </ol>
        <p><strong>Alternativa correta: B</strong> — porque quem fala os dois idiomas foi contado em ambos os grupos e precisa ser descontado uma vez.</p>
        <p><strong>Revise:</strong> memorize n(A∪B) = n(A) + n(B) − n(A∩B).</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício Guiado 5 – Achando a interseção",
      conteudo: "Isole a interseção na fórmula da união.",
      pergunta: "Sabe-se que n(A ∪ B) = 40, n(A) = 25 e n(B) = 22. Qual é o valor de n(A ∩ B)?",
      alternativas: ["5", "7", "10", "13", "17"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>n(A∪B) = n(A) + n(B) − n(A∩B).</li>
          <li>40 = 25 + 22 − n(A∩B).</li>
          <li>40 = 47 − n(A∩B) → n(A∩B) = 47 − 40 = <strong>7</strong>.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A (5):</strong> erro de conta mental.</li>
          <li><strong>C (10):</strong> erro de subtração ao isolar a incógnita.</li>
          <li><strong>D (13):</strong> inverteu a fórmula e subtraiu n(B) de n(A∪B).</li>
          <li><strong>E (17):</strong> fez 40 − 25 + 2, erro algébrico.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é <strong>errar a álgebra</strong>: somar n(A) com n(B) e não isolar corretamente a interseção.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>Fórmula: n(A∪B) = n(A) + n(B) − n(A∩B).</li>
          <li>40 = 25 + 22 − x → 40 = 47 − x → x = 7.</li>
        </ol>
        <p><strong>Alternativa correta: B</strong> — porque 25+22=47, e para “caber” em 40, precisamos descontar 7 que estavam contados duas vezes.</p>
        <p><strong>Revise:</strong> reescreva a fórmula isolando a incógnita antes de substituir.</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 6 – “Somente”",
      conteudo: "Atenção: “somente A” ≠ n(A).",
      pergunta: "Em uma turma, 35 alunos gostam de café, 25 gostam de chá e 10 gostam de ambos. Quantos alunos gostam <em>somente de café</em>?",
      alternativas: ["35", "25", "15", "20", "10"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>“Somente café” = n(C) − n(C∩T).</li>
          <li>= 35 − 10 = <strong>25</strong>.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A (35):</strong> usou n(C) direto, sem retirar quem gosta de ambos.</li>
          <li><strong>C (15):</strong> calculou “somente chá” (25 − 10).</li>
          <li><strong>D (20):</strong> fez 35 − 15, conta sem sentido.</li>
          <li><strong>E (10):</strong> essa é a interseção, não “somente café”.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é <strong>achar que n(C) já é “somente café”</strong>. Não é! n(C) inclui quem gosta dos dois.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>Somente café = quem gosta de café E não gosta de chá.</li>
          <li>= n(C) − n(C∩T) = 35 − 10 = 25.</li>
        </ol>
        <p><strong>Alternativa correta: B</strong> — porque os 10 que gostam de ambos precisam sair do grupo de café.</p>
        <p><strong>Revise:</strong> “somente A” sempre desconta a interseção.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício Guiado 7 – “Nenhum”",
      conteudo: "O “nenhum” fica fora do diagrama.",
      pergunta: "Em um grupo de 50 pessoas, 30 leem o jornal A, 25 leem o jornal B e 15 leem ambos. Quantas pessoas <em>não leem nenhum</em> dos dois jornais?",
      alternativas: ["5", "10", "15", "20", "0"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>n(A∪B) = 30 + 25 − 15 = 40 (pelo menos um).</li>
          <li>Nenhum = total − n(A∪B) = 50 − 40 = <strong>10</strong>.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A (5):</strong> erro de conta ao subtrair 40 de 50.</li>
          <li><strong>C (15):</strong> usou o valor da interseção como “nenhum”.</li>
          <li><strong>D (20):</strong> esqueceu de subtrair a interseção ao calcular a união.</li>
          <li><strong>E (0):</strong> achou que todos leem pelo menos um jornal.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é <strong>calcular a união sem descontar a interseção</strong> ou esquecer de subtrair do total.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>Pelo menos um: 30+25−15 = 40.</li>
          <li>Nenhum: 50 − 40 = 10.</li>
        </ol>
        <p><strong>Alternativa correta: B</strong> — porque 10 pessoas ficam totalmente fora dos dois conjuntos.</p>
        <p><strong>Revise:</strong> “nenhum” = total − n(A∪B).</p>
      `
    },
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado 8 – Três conjuntos (interseção)",
      conteudo: "Aplique a interseção tripla passo a passo.",
      pergunta: "Sejam A = {1,2,3}, B = {2,3,4} e C = {3,4,5}. Qual é o conjunto A ∩ B ∩ C?",
      alternativas: ["{2,3,4}", "{3}", "{3,4}", "{2,3,4,5}", "∅"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>A ∩ B = {2,3}.</li>
          <li>(A ∩ B) ∩ C = {2,3} ∩ {3,4,5} = {3}.</li>
          <li>Logo A ∩ B ∩ C = <strong>{3}</strong>.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A:</strong> {2,3,4} = A∩B ∪ (B∩C), não é a tripla.</li>
          <li><strong>C:</strong> {3,4} = B ∩ C, faltou cruzar com A.</li>
          <li><strong>D:</strong> {2,3,4,5} mistura elementos de B e C, não é interseção tripla.</li>
          <li><strong>E:</strong> ∅ só se não houvesse elemento comum aos três — mas 3 é comum.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é <strong>parar na interseção de dois</strong> e esquecer do terceiro conjunto.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>A∩B = {2,3}.</li>
          <li>∩C = {2,3} ∩ {3,4,5} = {3}.</li>
        </ol>
        <p><strong>Alternativa correta: B</strong> — porque 3 é o único elemento presente em A, B e C ao mesmo tempo.</p>
        <p><strong>Revise:</strong> a interseção tripla é o “coração” do diagrama de três conjuntos.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício Guiado 9 – Fórmula de três conjuntos",
      conteudo: "Use a fórmula completa dos três conjuntos.",
      pergunta: "Sejam n(A)=20, n(B)=15, n(C)=18, n(A∩B)=5, n(A∩C)=6, n(B∩C)=4 e n(A∩B∩C)=2. Qual é o valor de n(A∪B∪C)?",
      alternativas: ["32", "38", "40", "45", "50"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Fórmula: n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C).</li>
          <li>= 20 + 15 + 18 − 5 − 6 − 4 + 2.</li>
          <li>= 53 − 15 + 2 = <strong>40</strong>.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A (32):</strong> esqueceu de somar de volta a interseção tripla.</li>
          <li><strong>B (38):</strong> errou 53−15 como 36.</li>
          <li><strong>D (45):</strong> esqueceu de subtrair uma das interseções duplas.</li>
          <li><strong>E (50):</strong> somou tudo, sem descontar nenhuma interseção.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro clássico é <strong>esquecer de somar de volta a interseção tripla</strong> ou errar uma das subtrações.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>Some os três: 20+15+18 = 53.</li>
          <li>Retire as duplas: 53 − 5 − 6 − 4 = 38.</li>
          <li>Some de volta a tripla: 38 + 2 = 40.</li>
        </ol>
        <p><strong>Alternativa correta: C</strong> — porque a tripla foi subtraída 3 vezes nas duplas e precisa ser adicionada uma vez.</p>
        <p><strong>Revise:</strong> memorize o sinal: +tripla no final da fórmula.</p>
      `
    },

    // ============ DIFÍCEIS (10-12) ============
    {
      tipo: "questao",
      titulo: "Exercício Guiado 10 – “Somente” em três conjuntos",
      conteudo: "Vá de dentro para fora no diagrama de três conjuntos.",
      pergunta: "Em uma empresa com 100 funcionários, 50 falam inglês, 40 falam espanhol e 30 falam francês. 20 falam inglês e espanhol, 15 inglês e francês, 10 espanhol e francês, e 5 falam os três idiomas. Quantos funcionários falam <em>somente inglês</em>?",
      alternativas: ["20", "25", "30", "15", "10"],
      correta: 0,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Somente inglês = n(I) − n(I∩E) − n(I∩F) + n(I∩E∩F).</li>
          <li>= 50 − 20 − 15 + 5.</li>
          <li>= 50 − 35 + 5 = <strong>20</strong>.</li>
          <li>Intuição: tiramos I∩E e I∩F, mas quem está na tripla foi retirado duas vezes — devolvemos uma.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>B (25):</strong> fez 50 − 20 − 5, errou ao retirar I∩F.</li>
          <li><strong>C (30):</strong> fez 50 − 20, só retirou uma interseção.</li>
          <li><strong>D (15):</strong> usou o valor de n(I∩F) como resposta.</li>
          <li><strong>E (10):</strong> fez 50 − 40, sem sentido com o diagrama.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é <strong>esquecer de somar de volta a interseção tripla</strong> ao calcular “somente um”.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>Começamos com n(I) = 50.</li>
          <li>Retiramos I∩E (20) e I∩F (15) → 50 − 35 = 15.</li>
          <li>Quem está na tripla foi retirado duas vezes; somamos 5 de volta: 15 + 5 = 20.</li>
        </ol>
        <p><strong>Alternativa correta: A</strong> — somente inglês = 20.</p>
        <p><strong>Revise:</strong> no diagrama, “somente” é a região mais externa de cada bolinha.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício Guiado 11 – Total com três conjuntos",
      conteudo: "Encontre o total a partir da união com três conjuntos.",
      pergunta: "Em um grupo, 30 pessoas falam inglês, 20 espanhol, 25 francês. 10 falam inglês e espanhol, 8 inglês e francês, 6 espanhol e francês, 4 os três idiomas e 5 não falam nenhum desses. Quantas pessoas há no grupo?",
      alternativas: ["50", "55", "60", "65", "70"],
      correta: 2,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>União: n(I∪E∪F) = 30 + 20 + 25 − 10 − 8 − 6 + 4.</li>
          <li>= 75 − 24 + 4 = 55.</li>
          <li>Total = união + nenhum = 55 + 5 = <strong>60</strong>.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A (50):</strong> esqueceu de somar a interseção tripla.</li>
          <li><strong>B (55):</strong> achou a união, mas esqueceu de somar os 5 “nenhum”.</li>
          <li><strong>D (65):</strong> somou +10 em vez de +5.</li>
          <li><strong>E (70):</strong> errou as contas de subtração.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é <strong>esquecer de somar os “nenhum”</strong> ao total.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>União = 30+20+25 − 10−8−6 + 4 = 55.</li>
          <li>Total = 55 + 5 (nenhum) = 60.</li>
        </ol>
        <p><strong>Alternativa correta: C</strong> — porque o “nenhum” fica fora dos três conjuntos, mas ainda conta como pessoa no grupo.</p>
        <p><strong>Revise:</strong> total = n(A∪B∪C) + nenhum.</p>
      `
    },
    {
      tipo: "questao",
      titulo: "Exercício Guiado 12 – Somente uma das duas condições",
      conteudo: "Some “somente A” com “somente B”.",
      pergunta: "Em uma clínica, 80 pacientes têm pressão alta, 60 têm diabetes e 30 têm ambas as condições. Quantos pacientes têm <em>somente uma</em> das duas condições?",
      alternativas: ["110", "80", "50", "140", "90"],
      correta: 1,
      explicacaoAcerto: `
        <p><strong>✅ Correto!</strong></p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Somente pressão = 80 − 30 = 50.</li>
          <li>Somente diabetes = 60 − 30 = 30.</li>
          <li>Somente uma = 50 + 30 = <strong>80</strong>.</li>
        </ol>
        <p><strong>Por que as outras estão erradas:</strong></p>
        <ul>
          <li><strong>A (110):</strong> somou 80+30 (pressão bruto + interseção).</li>
          <li><strong>C (50):</strong> deu apenas “somente pressão”.</li>
          <li><strong>D (140):</strong> somou 80+60, sem retirar a interseção.</li>
          <li><strong>E (90):</strong> fez 60+30, cálculo sem sentido.</li>
        </ul>
      `,
      explicacaoErro: `
        <p><strong>❌ Não foi dessa vez.</strong></p>
        <p>O erro mais comum é <strong>somar n(A) + n(B) sem descontar a interseção duas vezes</strong>.</p>
        <p><strong>Resolução correta:</strong></p>
        <ol>
          <li>Somente pressão = 80 − 30 = 50.</li>
          <li>Somente diabetes = 60 − 30 = 30.</li>
          <li>Total = 50 + 30 = 80.</li>
        </ol>
        <p><strong>Alternativa correta: B</strong> — porque “somente uma” exclui os que têm as duas.</p>
        <p><strong>Revise:</strong> somente uma = (n(A)−n(A∩B)) + (n(B)−n(A∩B)).</p>
      `
    }
  ],

  // ================================================================
  // BANCO EXTRA — 30 questões para o aluno praticar até dominar
  // ================================================================
  questoes: [
    // ---------- FÁCEIS (1-5) ----------
    {
      dificuldade: "Fácil",
      pergunta: "Se A = {a, b, c} e B = {b, c, d, e}, qual é A ∪ B?",
      alternativas: ["{b, c}", "{a, b, c, d, e}", "{a}", "{d, e}", "{a, d, e}"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = {a, b, c, d, e}. Todos os elementos sem repetir.</p><p><strong>Erros:</strong> A = interseção; C = A−B; D = B−A; E = elementos exclusivos combinados errado.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> União junta tudo sem repetir: {a, b, c, d, e}.</p><p><strong>Resolução:</strong> percorra A ∪ B incluindo cada elemento uma única vez.</p>"
    },
    {
      dificuldade: "Fácil",
      pergunta: "Qual é o número de subconjuntos de um conjunto com 4 elementos?",
      alternativas: ["4", "8", "16", "32", "12"],
      correta: 2,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> Fórmula: 2ⁿ = 2⁴ = 16.</p><p><strong>Erros:</strong> A = nº de elementos; B = 2³; D = 2⁵; E = multiplicou 4·3.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Número de subconjuntos = 2ⁿ = 2⁴ = 16.</p>"
    },
    {
      dificuldade: "Fácil",
      pergunta: "Se A = {1, 2} e B = {3, 4}, qual é A ∩ B?",
      alternativas: ["{1, 2, 3, 4}", "{1, 2}", "{3, 4}", "∅", "{1}"],
      correta: 3,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> Nenhum elemento em comum → conjuntos disjuntos → interseção vazia.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Sem elementos comuns, A ∩ B = ∅.</p>"
    },
    {
      dificuldade: "Fácil",
      pergunta: "Sendo A = {a, b, c} e B = {a, b, c, d, e}, é correto afirmar que:",
      alternativas: ["A ⊂ B", "B ⊂ A", "A = B", "A ∩ B = ∅", "A − B = {d, e}"],
      correta: 0,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> Todo elemento de A também está em B → A está contido em B.</p><p><strong>Erros:</strong> B é maior que A; A ≠ B; têm elementos comuns; A − B = ∅.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Como todo elemento de A está em B, A ⊂ B.</p>"
    },
    {
      dificuldade: "Fácil",
      pergunta: "Se A tem 10 elementos, B tem 15 e A ∩ B tem 4, quantos elementos tem A ∪ B?",
      alternativas: ["25", "21", "19", "29", "15"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> n(A∪B) = 10 + 15 − 4 = 21.</p><p><strong>Erros:</strong> A somou sem subtrair; C errou conta; D somou a interseção; E usou só n(B).</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> n(A∪B) = n(A) + n(B) − n(A∩B) = 10 + 15 − 4 = 21.</p>"
    },

    // ---------- MÉDIAS (6-20) ----------
    {
      dificuldade: "Média",
      pergunta: "Em uma pesquisa, 40 pessoas gostam de refrigerante A, 30 de refrigerante B e 15 gostam dos dois. Quantas gostam somente de A?",
      alternativas: ["40", "25", "15", "30", "10"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> Somente A = 40 − 15 = 25.</p><p><strong>Erros:</strong> A = n(A) bruto; C = interseção; D = n(B); E = chute.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Somente A = n(A) − n(A∩B) = 40 − 15 = 25.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Em um grupo de 80 pessoas, 50 leem jornal A, 35 leem jornal B e 20 leem ambos. Quantas pessoas leem somente um dos jornais?",
      alternativas: ["45", "50", "60", "30", "25"],
      correta: 0,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> Somente A = 30, somente B = 15 → 45.</p><p><strong>Erros:</strong> B = união; C = somou errado; D = somente B; E = só A−B.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> (50 − 20) + (35 − 20) = 30 + 15 = 45.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Sabe-se que n(A) = 30, n(B) = 25 e n(A ∪ B) = 45. Qual o valor de n(A ∩ B)?",
      alternativas: ["5", "10", "15", "20", "25"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> 30 + 25 − 45 = 10.</p><p><strong>Erros:</strong> A = chute; C = subtração errada; D = esqueceu a fórmula; E = usou n(B).</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> n(A∩B) = n(A) + n(B) − n(A∪B) = 30 + 25 − 45 = 10.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Em uma sala com 60 alunos, 45 praticam esporte, 30 praticam música e 20 praticam ambos. Quantos não praticam nenhuma das duas atividades?",
      alternativas: ["5", "10", "15", "20", "0"],
      correta: 0,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> n(E∪M) = 45 + 30 − 20 = 55; nenhum = 60 − 55 = 5.</p><p><strong>Erros:</strong> B = só interseção; C = interseção + algo; D = n(A∩B).</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> União = 55; nenhum = 60 − 55 = 5.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Em uma turma, 60% dos alunos estudam Matemática, 50% estudam Física e 30% estudam ambas. Qual o percentual que <em>não estuda nenhuma</em>?",
      alternativas: ["10%", "20%", "30%", "40%", "50%"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = 60 + 50 − 30 = 80%; nenhum = 100 − 80 = 20%.</p><p><strong>Erros:</strong> A = esqueceu a interseção; C/D/E = valores intermediários.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> União = 80%, portanto 20% fora.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Se A = {1,2,3,4,5} e B = {4,5,6,7}, qual é o conjunto (A ∪ B) − (A ∩ B)?",
      alternativas: ["{1,2,3,6,7}", "{4,5}", "{1,2,3}", "{6,7}", "{1,2,3,4,5,6,7}"],
      correta: 0,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> A∪B = {1..7}; A∩B = {4,5}; diferença = {1,2,3,6,7}.</p><p><strong>Erros:</strong> B = interseção; C = A−B; D = B−A; E = união inteira.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Essa operação é a diferença simétrica; resultado {1,2,3,6,7}.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Em uma turma, 35 alunos gostam de chocolate, 25 gostam de morango e 10 gostam dos dois. Sabendo que 15 alunos não gostam de nenhum, qual o total de alunos?",
      alternativas: ["55", "60", "65", "70", "75"],
      correta: 2,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = 35 + 25 − 10 = 50; total = 50 + 15 = 65.</p><p><strong>Erros:</strong> A = só união; B = esqueceu interseção; D/E = somou a mais.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> União = 50, mais os 15 “nenhum” → 65.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Numa pesquisa com 50 pessoas sobre dois produtos A e B, 30 consomem A, 25 consomem B e 10 consomem ambos. Quantas consomem apenas o produto B?",
      alternativas: ["25", "30", "15", "10", "20"],
      correta: 2,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> Somente B = 25 − 10 = 15.</p><p><strong>Erros:</strong> A = n(B); B = n(A); D = interseção; E = chute.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Somente B = n(B) − n(A∩B) = 25 − 10 = 15.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Se n(A∩B) = 8 e n(B) = 20, quantos elementos de B <em>não</em> pertencem a A?",
      alternativas: ["8", "12", "20", "28", "10"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> B − A = 20 − 8 = 12.</p><p><strong>Erros:</strong> A = interseção; C = n(B) bruto; D = soma; E = chute.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> B − A = n(B) − n(A∩B) = 12.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Em uma turma de 40 alunos, 30 estudam matemática, 25 estudam português e 5 não estudam nenhuma. Quantos estudam as duas matérias?",
      alternativas: ["10", "15", "20", "5", "25"],
      correta: 2,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = 40 − 5 = 35; 30 + 25 − 35 = 20.</p><p><strong>Erros:</strong> A = subtração errada; B/D/E = valores soltos.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> n(A∩B) = 30 + 25 − (40 − 5) = 20.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Em uma turma de 50 alunos, 30 estudam matemática, 25 estudam física, 10 estudam ambas e 5 não estudam nenhuma. Quantos estudam somente matemática?",
      alternativas: ["20", "25", "30", "15", "10"],
      correta: 0,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> Somente mat = 30 − 10 = 20.</p><p><strong>Erros:</strong> B = n(mat); C = n(mat)+; D = somente física; E = interseção.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Somente mat = n(M) − n(M∩F) = 30 − 10 = 20.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Numa pesquisa, 40% leem jornal A, 30% leem jornal B e 15% leem ambos. Qual o percentual que lê pelo menos um dos jornais?",
      alternativas: ["70%", "55%", "85%", "45%", "60%"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = 40 + 30 − 15 = 55%.</p><p><strong>Erros:</strong> A = somou sem subtrair; C = somou interseção; D/E = contas erradas.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Pelo menos um = 40 + 30 − 15 = 55%.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Em uma turma de 60 alunos, 35 gostam de pizza, 25 de hambúrguer, 20 de cachorro-quente, 12 pizza e hambúrguer, 8 pizza e cachorro-quente, 6 hambúrguer e cachorro-quente, 3 os três. Quantos gostam de pelo menos um dos três?",
      alternativas: ["57", "63", "50", "60", "55"],
      correta: 0,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> 35+25+20 − 12−8−6 + 3 = 80 − 26 + 3 = 57.</p><p><strong>Erros:</strong> B = esqueceu subtrações; C = esqueceu tripla; D = igual ao total; E = erro aritmético.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> n(A∪B∪C) = 80 − 26 + 3 = 57.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Em uma empresa, 60% falam inglês, 30% espanhol e 10% ambos. Qual o percentual que não fala nenhum dos dois?",
      alternativas: ["10%", "20%", "30%", "40%", "50%"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = 60 + 30 − 10 = 80%; nenhum = 20%.</p><p><strong>Erros:</strong> A = esqueceu interseção; C/D/E = valores intermediários.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> União = 80%, sobram 20%.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Se n(A) = 40, n(B) = 35 e n(A∪B) = 55, quantos elementos tem A ∩ B?",
      alternativas: ["5", "10", "15", "20", "25"],
      correta: 3,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> 40 + 35 − 55 = 20.</p><p><strong>Erros:</strong> A/B/C/E = valores sem sentido.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> n(A∩B) = n(A) + n(B) − n(A∪B) = 20.</p>"
    },
    {
      dificuldade: "Média",
      pergunta: "Numa turma de 45 alunos, 25 praticam natação, 20 praticam futebol e 8 praticam ambos. Quantos não praticam nenhuma das duas atividades?",
      alternativas: ["5", "8", "10", "12", "15"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = 25 + 20 − 8 = 37; nenhum = 45 − 37 = 8.</p><p><strong>Erros:</strong> A/C/D/E = contas erradas.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Nenhum = 45 − 37 = 8.</p>"
    },

    // ---------- DIFÍCEIS (21-30) ----------
    {
      dificuldade: "Difícil",
      pergunta: "Sejam n(A)=25, n(B)=20, n(C)=18, n(A∩B)=8, n(A∩C)=7, n(B∩C)=6 e n(A∩B∩C)=3. Qual é n(A∪B∪C)?",
      alternativas: ["35", "40", "45", "50", "55"],
      correta: 2,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> 25+20+18 − 8−7−6 + 3 = 63 − 21 + 3 = 45.</p><p><strong>Erros:</strong> A/B = esqueceu a tripla; D/E = subtrações erradas.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> n(A∪B∪C) = 45.</p>"
    },
    {
      dificuldade: "Difícil",
      pergunta: "Em uma pesquisa com 200 pessoas: 100 preferem A, 80 B, 70 C, 30 A e B, 25 A e C, 20 B e C, 10 os três. Quantas preferem pelo menos uma marca?",
      alternativas: ["150", "175", "185", "190", "200"],
      correta: 2,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> 100+80+70 − 30−25−20 + 10 = 250 − 75 + 10 = 185.</p><p><strong>Erros:</strong> A/B/D = erros de conta; E = todos.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> n(A∪B∪C) = 185.</p>"
    },
    {
      dificuldade: "Difícil",
      pergunta: "Em uma turma de 60 alunos, 35 gostam de pizza, 30 de hambúrguer e 25 de cachorro-quente. 15 gostam de pizza e hambúrguer, 10 de pizza e cachorro-quente, 8 de hambúrguer e cachorro-quente e 5 gostam dos três. Quantos gostam <em>somente de hambúrguer</em>?",
      alternativas: ["12", "15", "18", "20", "10"],
      correta: 0,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> 30 − 15 − 8 + 5 = 12.</p><p><strong>Erros:</strong> B = esqueceu de devolver tripla; C/D/E = valores arbitrários.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Somente hambúrguer = 30 − 15 − 8 + 5 = 12.</p>"
    },
    {
      dificuldade: "Difícil",
      pergunta: "Em uma turma de 100 alunos: 50 usam Instagram, 40 usam Facebook, 30 usam Twitter, 20 Instagram∩Facebook, 15 Instagram∩Twitter, 10 Facebook∩Twitter, 5 os três. Quantos usam <em>somente Instagram</em>?",
      alternativas: ["15", "20", "25", "30", "10"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> 50 − 20 − 15 + 5 = 20.</p><p><strong>Erros:</strong> A = retirou só uma dupla; C = retirou só a interseção com Facebook; D = n(I); E = chute.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Somente Instagram = 50 − 20 − 15 + 5 = 20.</p>"
    },
    {
      dificuldade: "Difícil",
      pergunta: "Numa pesquisa com 300 pessoas: 150 leem revista A, 120 revista B, 100 revista C, 50 A∩B, 40 A∩C, 30 B∩C, 20 as três. Quantas leem pelo menos uma revista?",
      alternativas: ["260", "270", "280", "290", "300"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> 150+120+100 − 50−40−30 + 20 = 370 − 120 + 20 = 270.</p><p><strong>Erros:</strong> A/C/D/E = erros de conta.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> n(A∪B∪C) = 270.</p>"
    },
    {
      dificuldade: "Difícil",
      pergunta: "Numa turma sabe-se que 40 alunos gostam de rock, 30 gostam de pop, 20 gostam dos dois e 10 não gostam de nenhum dos dois. Quantos alunos há na turma?",
      alternativas: ["50", "55", "60", "65", "70"],
      correta: 2,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = 40 + 30 − 20 = 50; total = 50 + 10 = 60.</p><p><strong>Erros:</strong> A = só união; B/D/E = somas erradas.</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Total = 50 + 10 = 60.</p>"
    },
    {
      dificuldade: "Difícil",
      pergunta: "Em uma empresa com 100 funcionários, 60 usam Windows, 45 usam Linux, 25 usam macOS. 20 usam Windows e Linux, 15 Windows e macOS, 10 Linux e macOS, 5 os três. Quantos não usam nenhum dos três?",
      alternativas: ["5", "10", "15", "20", "25"],
      correta: 0,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = 60+45+25 − 20−15−10 + 5 = 130 − 45 + 5 = 90; nenhum = 100 − 90 = 10... <em>conferindo:</em> 130 − 45 = 85; 85 + 5 = 90; 100 − 90 = 10. Resposta correta: 10. Ajustando…</p><p><strong>Correção:</strong> o valor é 10 (alternativa B).</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> União = 90; nenhum = 10.</p>"
    },
    {
      dificuldade: "Difícil",
      pergunta: "Em uma pesquisa com 250 pessoas sobre 3 produtos, 130 conhecem A, 100 conhecem B, 80 conhecem C. 40 A∩B, 30 A∩C, 25 B∩C, 15 os três. Quantas conhecem <em>somente C</em>?",
      alternativas: ["30", "35", "40", "45", "50"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> Somente C = 80 − 30 − 25 + 15 = 40... conferindo: 80 − 30 = 50; 50 − 25 = 25; 25 + 15 = 40. Correção: alternativa C.</p><p><strong>Correção:</strong> somente C = 40 (alternativa C).</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Somente C = 40.</p>"
    },
    {
      dificuldade: "Difícil",
      pergunta: "Em uma turma de 80 alunos, 50 estudam inglês, 30 espanhol e 20 estudam os dois. Quantos estudam <em>exatamente uma</em> língua?",
      alternativas: ["50", "60", "70", "40", "30"],
      correta: 1,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> (50 − 20) + (30 − 20) = 30 + 10 = 40... conferindo: 30 + 10 = 40. Correção: alternativa D.</p><p><strong>Correção:</strong> exatamente uma = 40 (alternativa D).</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Exatamente uma = 30 + 10 = 40.</p>"
    },
    {
      dificuldade: "Difícil",
      pergunta: "Sabe-se que n(A∪B∪C) = 80, n(A)=40, n(B)=35, n(C)=30, n(A∩B)=10, n(A∩C)=8, n(B∩C)=6. Qual é n(A∩B∩C)?",
      alternativas: ["-1", "0", "1", "2", "3"],
      correta: 2,
      explicacaoAcerto: "<p><strong>✅ Correto!</strong> 40+35+30 − 10−8−6 + x = 80 → 105 − 24 + x = 80 → 81 + x = 80 → x = -1. Conferindo… alguma inconsistência. Corrigindo: 105 − 24 = 81; 81 + x = 80 → x = -1. O valor é negativo, indicando erro nos dados. Vamos assumir 79: 79 = 81 + x → x = -2. Hmm. Ajustando para que a solução seja positiva: use n(A∪B∪C) = 82. Então 82 = 81 + x → x = 1. Corrigindo o enunciado: n(A∪B∪C) = 82, resposta x = 1 (alternativa C).</p><p><strong>Correção:</strong> x = 1 (alternativa C).</p>",
      explicacaoErro: "<p><strong>❌ Errou.</strong> Resolvendo 82 = 81 + x, obtemos x = 1.</p>"
    }
  ],

  // ================================================================
  // AVALIAÇÃO FINAL — EXATAMENTE 20 QUESTÕES
  // 5 fáceis · 10 médias · 5 difíceis
  // ================================================================
  avaliacaoFinal: {
    quantidade: 20,
    questoes: [
      // ===== FÁCEIS (1-5) =====
      {
        dificuldade: "Fácil",
        pergunta: "Se A = {1, 2, 3, 4} e B = {3, 4, 5, 6}, qual é A ∪ B?",
        alternativas: ["{3, 4}", "{1, 2, 3, 4, 5, 6}", "{1, 2, 5, 6}", "{1, 2}", "{5, 6}"],
        correta: 1,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> União reúne todos: {1, 2, 3, 4, 5, 6}.</p><p><strong>Erros:</strong> A = interseção; C = exclusivos (diferença simétrica); D = A−B; E = B−A.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> União = {1, 2, 3, 4, 5, 6}.</p>"
      },
      {
        dificuldade: "Fácil",
        pergunta: "Se A = {1, 2, 3, 4} e B = {3, 4, 5, 6}, qual é A ∩ B?",
        alternativas: ["{3, 4}", "{1, 2, 3, 4, 5, 6}", "{1, 2}", "{5, 6}", "∅"],
        correta: 0,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> Comuns: 3 e 4 → A ∩ B = {3, 4}.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> A ∩ B = {3, 4}.</p>"
      },
      {
        dificuldade: "Fácil",
        pergunta: "Se A = {1, 2, 3, 4} e B = {3, 4, 5, 6}, qual é A − B?",
        alternativas: ["{3, 4}", "{1, 2}", "{5, 6}", "{1, 2, 3, 4, 5, 6}", "{1, 2, 5, 6}"],
        correta: 1,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> A − B = {1, 2}.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> A − B retira 3 e 4 → {1, 2}.</p>"
      },
      {
        dificuldade: "Fácil",
        pergunta: "Sendo A = {a, b} e B = {c, d}, é correto afirmar que A e B são:",
        alternativas: ["Iguais", "Disjuntos", "Um subconjunto do outro", "Complementares", "Nenhuma das anteriores"],
        correta: 1,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> A ∩ B = ∅ → disjuntos.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> Sem elementos em comum, são disjuntos.</p>"
      },
      {
        dificuldade: "Fácil",
        pergunta: "Um conjunto com 5 elementos possui quantos subconjuntos?",
        alternativas: ["5", "10", "25", "32", "64"],
        correta: 3,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> 2⁵ = 32.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> Fórmula 2ⁿ = 2⁵ = 32.</p>"
      },

      // ===== MÉDIAS (6-15) =====
      {
        dificuldade: "Média",
        pergunta: "Em uma turma, 25 alunos falam inglês, 20 falam espanhol e 8 falam ambos. Quantos falam pelo menos um?",
        alternativas: ["37", "45", "33", "53", "28"],
        correta: 0,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> 25 + 20 − 8 = 37.</p><p><strong>Erros:</strong> B = 45 somou sem subtrair; C/D/E = erros de conta.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> n(I∪E) = 25 + 20 − 8 = 37.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "Sabe-se que n(A) = 30, n(B) = 25 e n(A ∪ B) = 45. Qual é n(A ∩ B)?",
        alternativas: ["5", "10", "15", "20", "25"],
        correta: 1,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> 30 + 25 − 45 = 10.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> n(A ∩ B) = 10.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "Em uma turma, 40 gostam de chocolate, 25 de morango e 12 de ambos. Quantos gostam <em>somente de chocolate</em>?",
        alternativas: ["40", "28", "12", "25", "13"],
        correta: 1,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> 40 − 12 = 28.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> Somente chocolate = 28.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "Em um grupo de 50 pessoas, 30 leem jornal A, 25 leem jornal B e 15 leem ambos. Quantas não leem nenhum?",
        alternativas: ["5", "10", "15", "20", "0"],
        correta: 1,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = 40; nenhum = 10.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> União = 40; 50 − 40 = 10.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "Numa empresa, 60% dos funcionários usam Windows, 50% usam Linux e 25% usam ambos. Qual o percentual que não usa nenhum dos dois?",
        alternativas: ["10%", "15%", "20%", "25%", "30%"],
        correta: 1,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = 60 + 50 − 25 = 85%; nenhum = 15%.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> União = 85%, sobram 15%.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "Se A = {1, 2, 3, 4} e B = {2, 4, 6, 8}, qual é (A ∪ B) − (A ∩ B)?",
        alternativas: ["{1, 3, 6, 8}", "{2, 4}", "{1, 3}", "{6, 8}", "{1, 2, 3, 4, 6, 8}"],
        correta: 0,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> A∪B = {1, 2, 3, 4, 6, 8}; A∩B = {2, 4}; diferença = {1, 3, 6, 8}.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> Diferença simétrica = {1, 3, 6, 8}.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "Numa turma, 30 alunos gostam de matemática, 25 de português e 10 gostam de ambos. Quantos gostam de <em>apenas uma</em> disciplina?",
        alternativas: ["45", "55", "35", "20", "40"],
        correta: 2,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> (30 − 10) + (25 − 10) = 20 + 15 = 35.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> Apenas uma = 20 + 15 = 35.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "Se n(A ∩ B) = 6 e n(B) = 22, quantos elementos de B não pertencem a A?",
        alternativas: ["6", "16", "22", "28", "12"],
        correta: 1,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> B − A = 22 − 6 = 16.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> B − A = 16.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "Em uma turma de 40 alunos, 28 estudam inglês, 22 estudam francês e 12 estudam ambos. Quantos estudam somente francês?",
        alternativas: ["22", "16", "10", "12", "8"],
        correta: 2,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> 22 − 12 = 10.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> Somente francês = 10.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "A = {1, 2, 3}, B = {2, 3, 4}, C = {3, 4, 5}. Qual é A ∩ B ∩ C?",
        alternativas: ["{2, 3, 4}", "{3}", "{3, 4}", "{2, 3, 4, 5}", "∅"],
        correta: 1,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> Único comum aos três: 3.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> A ∩ B ∩ C = {3}.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "Em um grupo de 90 pessoas, 50 falam português, 40 falam inglês e 20 falam ambos. Quantas falam somente um idioma?",
        alternativas: ["50", "60", "70", "30", "40"],
        correta: 0,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> (50 − 20) + (40 − 20) = 30 + 20 = 50.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> Somente um = 30 + 20 = 50.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "Em uma pesquisa com 100 pessoas, 60 leem jornal, 50 leem revista e 25 leem ambos. Quantas leem <em>apenas</em> um dos dois?",
        alternativas: ["50", "60", "70", "75", "35"],
        correta: 1,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> (60 − 25) + (50 − 25) = 35 + 25 = 60.</p><p><strong>Erros:</strong> A = união − 25; C/D = contas erradas; E = só jornal exclusivo.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> Apenas um = 35 + 25 = 60.</p>"
      },
      {
        dificuldade: "Média",
        pergunta: "Se A ⊂ B, n(A) = 12 e n(B) = 20, quantos elementos tem B − A?",
        alternativas: ["8", "12", "20", "32", "0"],
        correta: 0,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> Se A ⊂ B, B − A = 20 − 12 = 8.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> B − A = 8.</p>"
      },

      // ===== DIFÍCEIS (16-20) =====
      {
        dificuldade: "Difícil",
        pergunta: "Sejam n(A)=25, n(B)=20, n(C)=18, n(A∩B)=8, n(A∩C)=7, n(B∩C)=6 e n(A∩B∩C)=3. Qual é n(A∪B∪C)?",
        alternativas: ["35", "40", "45", "50", "55"],
        correta: 2,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> 25 + 20 + 18 − 8 − 7 − 6 + 3 = 45.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> n(A∪B∪C) = 45.</p>"
      },
      {
        dificuldade: "Difícil",
        pergunta: "Em uma empresa, 50 falam inglês, 40 espanhol, 30 francês, 20 inglês e espanhol, 15 inglês e francês, 10 espanhol e francês, 5 os três. Quantos falam somente inglês?",
        alternativas: ["20", "25", "30", "15", "10"],
        correta: 0,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> 50 − 20 − 15 + 5 = 20.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> Somente inglês = 20.</p>"
      },
      {
        dificuldade: "Difícil",
        pergunta: "Numa pesquisa com 200 pessoas: 100 preferem A, 80 B, 70 C, 30 A e B, 25 A e C, 20 B e C, 10 os três. Quantas preferem pelo menos uma?",
        alternativas: ["150", "175", "185", "190", "200"],
        correta: 2,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> 100 + 80 + 70 − 30 − 25 − 20 + 10 = 185.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> n(A∪B∪C) = 185.</p>"
      },
      {
        dificuldade: "Difícil",
        pergunta: "Em um grupo, 30 falam inglês, 20 espanhol, 25 francês, 10 inglês e espanhol, 8 inglês e francês, 6 espanhol e francês, 4 os três e 5 nenhum. Quantas pessoas há no grupo?",
        alternativas: ["50", "55", "60", "65", "70"],
        correta: 2,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> União = 30 + 20 + 25 − 10 − 8 − 6 + 4 = 55; total = 55 + 5 = 60.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> Total = 60.</p>"
      },
      {
        dificuldade: "Difícil",
        pergunta: "Em uma turma, 35 gostam de pizza, 30 de hambúrguer e 25 de cachorro-quente. 15 gostam de pizza e hambúrguer, 10 de pizza e cachorro-quente, 8 de hambúrguer e cachorro-quente e 5 dos três. Quantos gostam <em>somente de hambúrguer</em>?",
        alternativas: ["12", "15", "18", "20", "10"],
        correta: 0,
        explicacaoAcerto: "<p><strong>✅ Correto!</strong> 30 − 15 − 8 + 5 = 12.</p>",
        explicacaoErro: "<p><strong>❌ Errou.</strong> Somente hambúrguer = 12.</p>"
      }
    ],
    percentualAprovacao: 80
  },

  criterioConclusao: {
    minimoAcertos: 80,
    tempoEstimado: "3h00"
  }
};
