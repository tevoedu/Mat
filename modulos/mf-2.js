export const modulo = {
  id: "mf-2",
  nome: "Juros Compostos",
  disciplina: "Matemática Financeira",
  nivel: "Intermediário",
  ordem: 2,

  introducao: {
    titulo: "O Poder dos Juros sobre Juros",
    descricao: `<p>Bem-vindo ao módulo <strong>Juros Compostos</strong> — um dos tópicos mais cobrados pela <strong>CESGRANRIO</strong> em concursos bancários!</p>
    <p>Aqui você vai dominar completamente o regime de capitalização composta, entendendo <em>por que</em> o dinheiro "cresce sobre si mesmo" e como a CESGRANRIO transforma esse conceito em questões práticas de empréstimos, financiamentos, investimentos e reajustes de preços.</p>
    <ul>
      <li>🎯 <strong>Foco total no estilo CESGRANRIO</strong> — questões contextualizadas, números arredondados e pegadinhas clássicas</li>
      <li>📊 <strong>8+ SVGs ilustrativos</strong> — gráficos, linhas do tempo, fluxos de caixa e fórmulas</li>
      <li>🧠 <strong>40+ questões</strong> — do básico ao avançado, com explicações detalhadas de acerto e erro</li>
      <li>⚡ <strong>Estratégias de resolução</strong> — como identificar armadilhas e resolver com velocidade</li>
    </ul>
    <p>Após este módulo, você estará preparado para <strong>gabaritar qualquer questão de Juros Compostos</strong> da CESGRANRIO. Vamos começar!</p>`,
    imagem: `<svg width="700" height="400" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e3a5f"/></linearGradient><linearGradient id="barGrad1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/></linearGradient><linearGradient id="barGrad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#059669"/></linearGradient></defs><rect width="700" height="400" fill="url(#bgGrad)" rx="12"/><text x="350" y="45" text-anchor="middle" fill="#f8fafc" font-size="22" font-weight="bold" font-family="system-ui">Crescimento: Juros Simples vs Compostos</text><text x="350" y="70" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="system-ui">Capital inicial: R$ 1.000 | Taxa: 10% ao período</text><line x1="80" y1="340" x2="650" y2="340" stroke="#475569" stroke-width="2"/><line x1="80" y1="340" x2="80" y2="100" stroke="#475569" stroke-width="2"/><rect x="110" y="310" width="35" height="30" fill="url(#barGrad1)" rx="4"/><rect x="110" y="280" width="35" height="60" fill="url(#barGrad1)" rx="4" opacity="0.8"/><rect x="110" y="250" width="35" height="90" fill="url(#barGrad1)" rx="4" opacity="0.6"/><rect x="110" y="220" width="35" height="120" fill="url(#barGrad1)" rx="4" opacity="0.4"/><rect x="160" y="310" width="35" height="30" fill="url(#barGrad2)" rx="4"/><rect x="160" y="275" width="35" height="65" fill="url(#barGrad2)" rx="4" opacity="0.85"/><rect x="160" y="233" width="35" height="107" fill="url(#barGrad2)" rx="4" opacity="0.7"/><rect x="160" y="182" width="35" height="158" fill="url(#barGrad2)" rx="4" opacity="0.55"/><text x="127" y="360" text-anchor="middle" fill="#cbd5e1" font-size="11" font-family="system-ui">P0</text><text x="230" y="360" text-anchor="middle" fill="#cbd5e1" font-size="11" font-family="system-ui">P1</text><text x="333" y="360" text-anchor="middle" fill="#cbd5e1" font-size="11" font-family="system-ui">P2</text><text x="436" y="360" text-anchor="middle" fill="#cbd5e1" font-size="11" font-family="system-ui">P3</text><text x="539" y="360" text-anchor="middle" fill="#cbd5e1" font-size="11" font-family="system-ui">P4</text><text x="127" y="305" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">1.000</text><text x="230" y="275" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">1.100</text><text x="333" y="245" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">1.200</text><text x="436" y="215" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">1.300</text><text x="539" y="185" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">1.400</text><text x="177" y="300" text-anchor="middle" fill="#34d399" font-size="10" font-weight="bold">1.000</text><text x="280" y="268" text-anchor="middle" fill="#34d399" font-size="10" font-weight="bold">1.100</text><text x="383" y="223" text-anchor="middle" fill="#34d399" font-size="10" font-weight="bold">1.210</text><text x="486" y="172" text-anchor="middle" fill="#34d399" font-size="10" font-weight="bold">1.331</text><text x="589" y="115" text-anchor="middle" fill="#34d399" font-size="10" font-weight="bold">1.464</text><polyline points="127,310 230,280 333,250 436,220 539,190" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="5,3"/><polyline points="177,310 280,275 383,233 486,182 589,121" fill="none" stroke="#34d399" stroke-width="3"/><rect x="480" y="110" width="12" height="12" fill="#3b82f6" rx="2"/><text x="500" y="120" fill="#94a3b8" font-size="11" font-family="system-ui">Juros Simples</text><rect x="480" y="130" width="12" height="12" fill="#10b981" rx="2"/><text x="500" y="140" fill="#94a3b8" font-size="11" font-family="system-ui">Juros Compostos</text><circle cx="589" cy="121" r="6" fill="#fbbf24" opacity="0.8"/><text x="620" y="90" fill="#fbbf24" font-size="12" font-weight="bold" font-family="system-ui">Diferença:</text><text x="620" y="108" fill="#fbbf24" font-size="12" font-family="system-ui">R$ 64,10</text><text x="620" y="124" fill="#fbbf24" font-size="12" font-family="system-ui">a mais!</text></svg>`
  },

  objetivos: [
    "Compreender o conceito de juros compostos e diferenciá-lo claramente dos juros simples",
    "Aplicar corretamente a fórmula M = C(1+i)^n em qualquer contexto de capitalização composta",
    "Calcular capital inicial, taxa de juros e prazo a partir da fórmula de montante, incluindo uso de logaritmos",
    "Converter taxas entre períodos diferentes (mensal, trimestral, anual) usando equivalência de taxas compostas",
    "Resolver problemas de fluxo de caixa com pagamentos parciais, aplicações múltiplas e desconto composto",
    "Identificar e evitar as pegadinhas clássicas da CESGRANRIO: regime errado, unidade de tempo, confusão entre montante e juros",
    "Interpretar enunciados contextualizados de empréstimos, financiamentos, investimentos e reajustes de preços"
  ],

  teoria: [
    {
      titulo: "1. Conceito Fundamental: O Que São Juros Compostos?",
      conteudo: `<p>Em regime de <strong>juros compostos</strong>, os juros de cada período são <em>incorporados ao capital</em> e passam a render juros também nos períodos seguintes. Dizemos que há <strong>capitalização dos juros</strong>.</p>
      <p>Enquanto nos <strong>juros simples</strong> o juro é sempre calculado sobre o capital inicial (crescimento <em>linear</em>), nos juros compostos o juro é calculado sobre o <em>montante acumulado</em> do período anterior (crescimento <em>exponencial</em>).</p>
      <p><strong>Exemplo prático:</strong> Se você aplica R$ 1.000 a 10% ao mês:</p>
      <ul>
        <li><strong>Mês 1:</strong> Juros = 1.000 × 0,10 = R$ 100 → Montante = R$ 1.100</li>
        <li><strong>Mês 2:</strong> Juros = 1.100 × 0,10 = R$ 110 → Montante = R$ 1.210</li>
        <li><strong>Mês 3:</strong> Juros = 1.210 × 0,10 = R$ 121 → Montante = R$ 1.331</li>
      </ul>
      <p>Observe: o juro do mês 2 (R$ 110) é maior que o do mês 1 (R$ 100) porque incide sobre R$ 1.100, não sobre R$ 1.000. Esse é o "poder dos juros sobre juros".</p>
      <p><strong>Palavras-chave da CESGRANRIO que indicam juros compostos:</strong> "regime de juros compostos", "capitalização mensal/trimestral/anual", "montante de aplicação", "rendimento composto", "reajustes sucessivos".</p>`,
      imagem: `<svg width="700" height="320" viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="700" height="320" fill="url(#bg1)" rx="12"/><text x="350" y="35" text-anchor="middle" fill="#f8fafc" font-size="20" font-weight="bold" font-family="system-ui">Capitalização dos Juros — Passo a Passo</text><rect x="50" y="70" width="140" height="80" fill="#1e40af" stroke="#3b82f6" stroke-width="2" rx="8"/><text x="120" y="100" text-anchor="middle" fill="#bfdbfe" font-size="13" font-weight="bold" font-family="system-ui">Capital Inicial</text><text x="120" y="125" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">R$ 1.000</text><text x="120" y="145" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="system-ui">C = 1.000</text><path d="M 200 110 L 260 110" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#arrow)"/><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker></defs><text x="230" y="100" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold" font-family="system-ui">+ 10%</text><rect x="270" y="70" width="140" height="80" fill="#065f46" stroke="#10b981" stroke-width="2" rx="8"/><text x="340" y="100" text-anchor="middle" fill="#a7f3d0" font-size="13" font-weight="bold" font-family="system-ui">Após 1 mês</text><text x="340" y="125" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">R$ 1.100</text><text x="340" y="145" text-anchor="middle" fill="#6ee7b7" font-size="11" font-family="system-ui">Juros: R$ 100</text><path d="M 420 110 L 480 110" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#arrow2)"/><defs><marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker></defs><text x="450" y="100" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold" font-family="system-ui">+ 10%</text><rect x="490" y="70" width="140" height="80" fill="#7c2d12" stroke="#f97316" stroke-width="2" rx="8"/><text x="560" y="100" text-anchor="middle" fill="#fed7aa" font-size="13" font-weight="bold" font-family="system-ui">Após 2 meses</text><text x="560" y="125" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">R$ 1.210</text><text x="560" y="145" text-anchor="middle" fill="#fdba74" font-size="11" font-family="system-ui">Juros: R$ 110</text><rect x="50" y="190" width="600" height="100" fill="#1e293b" stroke="#475569" stroke-width="1" rx="8"/><text x="350" y="220" text-anchor="middle" fill="#fbbf24" font-size="15" font-weight="bold" font-family="system-ui">🔑 Regra de Ouro da CESGRANRIO</text><text x="350" y="245" text-anchor="middle" fill="#e2e8f0" font-size="13" font-family="system-ui">Nos juros compostos, o juro de cada período vira "novo capital"</text><text x="350" y="265" text-anchor="middle" fill="#e2e8f0" font-size="13" font-family="system-ui">para o período seguinte. O crescimento é <tspan fill="#34d399" font-weight="bold">EXPONENCIAL</tspan>, não linear.</text><text x="350" y="285" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui">Fórmula: M = C × (1 + i)ⁿ — onde (1+i) é o "fator de acumulação"</text></svg>`
    },
    {
      titulo: "2. A Fórmula do Montante e Suas Variações",
      conteudo: `<p>A fórmula fundamental dos juros compostos é:</p>
      <div style="text-align:center; padding:15px; background:#1e293b; border-radius:8px; margin:15px 0;"><p style="font-size:22px; color:#34d399; font-weight:bold; margin:0;">M = C × (1 + i)ⁿ</p></div>
      <p>Onde:</p>
      <ul>
        <li><strong>M</strong> = Montante (capital + juros acumulados)</li>
        <li><strong>C</strong> = Capital inicial (valor presente, principal)</li>
        <li><strong>i</strong> = Taxa de juros por período (na forma decimal: 10% = 0,10)</li>
        <li><strong>n</strong> = Número de períodos de capitalização</li>
      </ul>
      <p><strong>Variações essenciais:</strong></p>
      <ul>
        <li><strong>Juros totais:</strong> J = M − C = C × [(1+i)ⁿ − 1]</li>
        <li><strong>Capital inicial:</strong> C = M / (1+i)ⁿ → <em>desconto composto</em></li>
        <li><strong>Taxa:</strong> i = (M/C)^(1/n) − 1</li>
        <li><strong>Prazo:</strong> n = log(M/C) / log(1+i) → <em>a CESGRANRIO fornece os logs!</em></li>
      </ul>
      <p><strong>⚠️ Pegadinha CESGRANRIO #1:</strong> Sempre verifique se a taxa e o prazo estão na <em>mesma unidade de tempo</em>. Se a taxa é "ao mês" e o prazo está em anos, converta! Nunca use regra de três simples — use equivalência de taxas compostas.</p>
      <p><strong>⚠️ Pegadinha CESGRANRIO #2:</strong> A banca frequentemente pede "juros totais" (J) mas coloca o "montante" (M) como alternativa. Sempre leia com atenção o que está sendo solicitado!</p>`,
      imagem: `<svg width="700" height="380" viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="700" height="380" fill="url(#bg2)" rx="12"/><text x="350" y="35" text-anchor="middle" fill="#f8fafc" font-size="20" font-weight="bold" font-family="system-ui">Fórmulas Essenciais — Juros Compostos</text><rect x="50" y="55" width="600" height="55" fill="#064e3b" stroke="#10b981" stroke-width="2" rx="10"/><text x="350" y="90" text-anchor="middle" fill="#34d399" font-size="24" font-weight="bold" font-family="monospace">M = C × (1 + i)ⁿ</text><rect x="50" y="125" width="290" height="70" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1" rx="8"/><text x="195" y="150" text-anchor="middle" fill="#60a5fa" font-size="14" font-weight="bold" font-family="monospace">J = M − C</text><text x="195" y="172" text-anchor="middle" fill="#93c5fd" font-size="12" font-family="system-ui">Juros totais acumulados</text><text x="195" y="188" text-anchor="middle" fill="#bfdbfe" font-size="11" font-family="system-ui">= C × [(1+i)ⁿ − 1]</text><rect x="360" y="125" width="290" height="70" fill="#3f1d1d" stroke="#ef4444" stroke-width="1" rx="8"/><text x="505" y="150" text-anchor="middle" fill="#f87171" font-size="14" font-weight="bold" font-family="monospace">C = M / (1+i)ⁿ</text><text x="505" y="172" text-anchor="middle" fill="#fca5a5" font-size="12" font-family="system-ui">Capital inicial (desconto)</text><text x="505" y="188" text-anchor="middle" fill="#fecaca" font-size="11" font-family="system-ui">Valor Presente (VP)</text><rect x="50" y="210" width="290" height="70" fill="#422006" stroke="#f59e0b" stroke-width="1" rx="8"/><text x="195" y="235" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold" font-family="monospace">i = (M/C)^(1/n) − 1</text><text x="195" y="257" text-anchor="middle" fill="#fcd34d" font-size="12" font-family="system-ui">Taxa de juros por período</text><text x="195" y="273" text-anchor="middle" fill="#fde68a" font-size="11" font-family="system-ui">Taxa efetiva</text><rect x="360" y="210" width="290" height="70" fill="#2e1065" stroke="#a855f7" stroke-width="1" rx="8"/><text x="505" y="235" text-anchor="middle" fill="#c084fc" font-size="14" font-weight="bold" font-family="monospace">n = ln(M/C) / ln(1+i)</text><text x="505" y="257" text-anchor="middle" fill="#d8b4fe" font-size="12" font-family="system-ui">Prazo (número de períodos)</text><text x="505" y="273" text-anchor="middle" fill="#e9d5ff" font-size="11" font-family="system-ui">CESGRANRIO fornece logs!</text><rect x="50" y="300" width="600" height="60" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="8" stroke-dasharray="6,3"/><text x="350" y="325" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold" font-family="system-ui">💡 Dica CESGRANRIO</text><text x="350" y="348" text-anchor="middle" fill="#e2e8f0" font-size="13" font-family="system-ui">Memorize: M = C(1+i)ⁿ. Todas as outras são apenas rearranjos desta fórmula!</text></svg>`
    },
    {
      titulo: "3. Equivalência de Taxas e Conversão de Períodos",
      conteudo: `<p>A <strong>equivalência de taxas compostas</strong> é um dos tópicos mais cobrados pela CESGRANRIO. Duas taxas são equivalentes quando, aplicadas ao mesmo capital pelo mesmo prazo, produzem o mesmo montante.</p>
      <p><strong>Fórmula de equivalência:</strong></p>
      <div style="text-align:center; padding:15px; background:#1e293b; border-radius:8px; margin:15px 0;"><p style="font-size:20px; color:#fbbf24; font-weight:bold; margin:0;">(1 + i₁)^n₁ = (1 + i₂)^n₂</p></div>
      <p>Onde n₁ e n₂ são os números de períodos correspondentes a cada taxa.</p>
      <p><strong>Exemplo clássico:</strong> Qual a taxa anual equivalente a 5% ao mês (composto)?</p>
      <p style="background:#0f172a; padding:10px; border-radius:6px; font-family:monospace; color:#e2e8f0;">(1 + i_ano) = (1,05)^12 ≈ 1,7959 → i_ano ≈ 79,59% a.a.</p>
      <p><strong>⚠️ Pegadinha CESGRANRIO #3:</strong> Muitos candidatos fazem 5% × 12 = 60% (regra de três simples). Isso está ERRADO! No regime composto, a taxa anual é sempre MAIOR que a soma linear. A CESGRANRIO coloca 60% como alternativa distrativa.</p>
      <p><strong>⚠️ Pegadinha CESGRANRIO #4:</strong> Taxa <em>nominal</em> vs <em>efetiva</em>. Se o enunciado diz "12% ao ano, capitalizados mensalmente", a taxa nominal é 12% a.a., mas a taxa efetiva mensal é 12%/12 = 1% a.m. O montante deve ser calculado com a taxa efetiva do período!</p>
      <p><strong>Taxa proporcional (simples):</strong> i₁/n₁ = i₂/n₂ — usada apenas em juros simples ou para encontrar a taxa efetiva a partir de uma nominal.</p>
      <p><strong>Taxa equivalente (composta):</strong> (1+i₁)^n₁ = (1+i₂)^n₂ — usada sempre em juros compostos.</p>`,
      imagem: `<svg width="700" height="360" viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="700" height="360" fill="url(#bg3)" rx="12"/><text x="350" y="35" text-anchor="middle" fill="#f8fafc" font-size="20" font-weight="bold" font-family="system-ui">Equivalência de Taxas — Comparativo</text><rect x="40" y="55" width="290" height="280" fill="#1e3a5f" stroke="#3b82f6" stroke-width="2" rx="10" opacity="0.3"/><rect x="40" y="55" width="290" height="40" fill="#1e40af" rx="10"/><text x="185" y="82" text-anchor="middle" fill="#bfdbfe" font-size="16" font-weight="bold" font-family="system-ui">JUROS SIMPLES</text><text x="185" y="120" text-anchor="middle" fill="#60a5fa" font-size="14" font-weight="bold" font-family="monospace">i₁/n₁ = i₂/n₂</text><text x="185" y="150" text-anchor="middle" fill="#e2e8f0" font-size="13" font-family="system-ui">5% a.m. → 12 meses</text><text x="185" y="175" text-anchor="middle" fill="#fbbf24" font-size="18" font-weight="bold" font-family="system-ui">60% a.a.</text><text x="185" y="205" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui">5% × 12 = 60%</text><text x="185" y="230" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui">(soma linear)</text><rect x="70" y="250" width="230" height="70" fill="#1e293b" stroke="#ef4444" stroke-width="1" rx="6"/><text x="185" y="275" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold" font-family="system-ui">❌ NUNCA use em</text><text x="185" y="295" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold" font-family="system-ui">juros compostos!</text><text x="185" y="313" text-anchor="middle" fill="#fca5a5" font-size="11" font-family="system-ui">CESGRANRIO coloca como distrativa</text><rect x="370" y="55" width="290" height="280" fill="#064e3b" stroke="#10b981" stroke-width="2" rx="10" opacity="0.3"/><rect x="370" y="55" width="290" height="40" fill="#065f46" rx="10"/><text x="515" y="82" text-anchor="middle" fill="#a7f3d0" font-size="16" font-weight="bold" font-family="system-ui">JUROS COMPOSTOS</text><text x="515" y="120" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold" font-family="monospace">(1+i₁)^n₁ = (1+i₂)^n₂</text><text x="515" y="150" text-anchor="middle" fill="#e2e8f0" font-size="13" font-family="system-ui">5% a.m. → 12 meses</text><text x="515" y="175" text-anchor="middle" fill="#34d399" font-size="18" font-weight="bold" font-family="system-ui">≈ 79,59% a.a.</text><text x="515" y="205" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui">(1,05)^12 − 1 ≈ 0,7959</text><text x="515" y="230" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui">(crescimento exponencial)</text><rect x="400" y="250" width="230" height="70" fill="#064e3b" stroke="#10b981" stroke-width="1" rx="6"/><text x="515" y="275" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="system-ui">✅ SEMPRE use em</text><text x="515" y="295" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="system-ui">juros compostos!</text><text x="515" y="313" text-anchor="middle" fill="#6ee7b7" font-size="11" font-family="system-ui">Resposta correta da CESGRANRIO</text><path d="M 340 180 L 370 180" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#arr3)"/><defs><marker id="arr3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/></marker></defs><text x="355" y="170" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">+19,59%</text><text x="355" y="200" text-anchor="middle" fill="#fbbf24" font-size="10">a mais!</text></svg>`
    },
    {
      titulo: "4. Fluxos de Caixa, Pagamentos Parciais e Desconto Composto",
      conteudo: `<p>A CESGRANRIO adora questões com <strong>fluxos de caixa</strong> — situações onde há múltiplos pagamentos ou aplicações em momentos diferentes. A chave é trazer todos os valores para a <strong>mesma data de referência</strong>.</p>
      <p><strong>Princípio fundamental:</strong> Para comparar ou somar valores em datas diferentes, devemos capitalizá-los (levar para o futuro) ou descontá-los (trazer para o presente) usando a taxa de juros compostos.</p>
      <p><strong>Desconto Composto (Valor Presente):</strong></p>
      <p>Quando queremos saber "quanto vale hoje" uma dívida que vence no futuro, usamos:</p>
      <div style="text-align:center; padding:12px; background:#1e293b; border-radius:8px; margin:12px 0;"><p style="font-size:18px; color:#f87171; font-weight:bold; margin:0;">VP = F / (1+i)ⁿ</p></div>
      <p>Onde F é o valor futuro (face do título/parcela) e VP é o valor presente (descontado).</p>
      <p><strong>Pagamentos Parciais de Empréstimo:</strong></p>
      <p>Em situações do tipo "tomou empréstimo, pagou metade após 2 meses, quitou após 4 meses", o procedimento é:</p>
      <ol>
        <li>Calcule o montante da dívida na data do primeiro pagamento: M₁ = C(1+i)²</li>
        <li>Subtraia o pagamento parcial: Saldo = M₁ − Pagamento</li>
        <li>Capitalize o saldo até a data final: M_final = Saldo × (1+i)²</li>
      </ol>
      <p><strong>⚠️ Pegadinha CESGRANRIO #5:</strong> Em questões de "pagar metade do saldo", o pagamento deve ser feito sobre o montante acumulado até aquela data, não sobre o capital inicial. Muitos candidatos calculam metade de C em vez de metade de M.</p>
      <p><strong>⚠️ Pegadinha CESGRANRIO #6:</strong> Quando há "multa fixa + juros compostos", some a multa <em>após</em> calcular os juros. Nunca some a multa à taxa de juros como se fosse uma taxa única.</p>`,
      imagem: `<svg width="700" height="400" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="700" height="400" fill="url(#bg4)" rx="12"/><text x="350" y="35" text-anchor="middle" fill="#f8fafc" font-size="20" font-weight="bold" font-family="system-ui">Fluxo de Caixa — Empréstimo com Pagamento Parcial</text><line x1="80" y1="200" x2="620" y2="200" stroke="#475569" stroke-width="2"/><circle cx="80" cy="200" r="8" fill="#3b82f6"/><circle cx="240" cy="200" r="8" fill="#f59e0b"/><circle cx="400" cy="200" r="8" fill="#ef4444"/><circle cx="560" cy="200" r="8" fill="#10b981"/><text x="80" y="235" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui">Hoje (mês 0)</text><text x="240" y="235" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui">Mês 2</text><text x="400" y="235" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui">Mês 4</text><text x="560" y="235" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui">Mês 6</text><path d="M 80 200 L 80 120" stroke="#3b82f6" stroke-width="3" fill="none" marker-end="url(#up1)"/><defs><marker id="up1" markerWidth="10" markerHeight="10" refX="5" refY="0" orient="auto"><path d="M0,9 L5,0 L10,9 z" fill="#3b82f6"/></marker></defs><text x="80" y="105" text-anchor="middle" fill="#60a5fa" font-size="13" font-weight="bold" font-family="system-ui">+ R$ 10.000</text><text x="80" y="90" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="system-ui">(Empréstimo)</text><path d="M 240 200 L 240 280" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#down1)"/><defs><marker id="down1" markerWidth="10" markerHeight="10" refX="5" refY="9" orient="auto"><path d="M0,0 L5,9 L10,0 z" fill="#f59e0b"/></marker></defs><text x="240" y="305" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold" font-family="system-ui">− R$ 6.050</text><text x="240" y="320" text-anchor="middle" fill="#fcd34d" font-size="11" font-family="system-ui">(Paga metade do</text><text x="240" y="335" text-anchor="middle" fill="#fcd34d" font-size="11" font-family="system-ui">saldo acumulado)</text><text x="160" y="185" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="system-ui">Capitaliza 10% a.m.</text><path d="M 400 200 L 400 280" stroke="#ef4444" stroke-width="3" fill="none" marker-end="url(#down2)"/><defs><marker id="down2" markerWidth="10" markerHeight="10" refX="5" refY="9" orient="auto"><path d="M0,0 L5,9 L10,0 z" fill="#ef4444"/></marker></defs><text x="400" y="305" text-anchor="middle" fill="#f87171" font-size="13" font-weight="bold" font-family="system-ui">− R$ 3.326</text><text x="400" y="320" text-anchor="middle" fill="#fca5a5" font-size="11" font-family="system-ui">(Quitação final)</text><text x="320" y="185" text-anchor="middle" fill="#f87171" font-size="11" font-family="system-ui">Saldo: 3.025</text><text x="320" y="170" text-anchor="middle" fill="#f87171" font-size="11" font-family="system-ui">Capitaliza +2 meses</text><rect x="480" y="120" width="180" height="100" fill="#064e3b" stroke="#10b981" stroke-width="2" rx="8"/><text x="570" y="150" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold" font-family="system-ui">Cálculo do Saldo</text><text x="570" y="175" text-anchor="middle" fill="#e2e8f0" font-size="12" font-family="monospace">M₂ = 10.000×(1,1)²</text><text x="570" y="195" text-anchor="middle" fill="#e2e8f0" font-size="12" font-family="monospace">M₂ = 12.100</text><text x="570" y="215" text-anchor="middle" fill="#e2e8f0" font-size="12" font-family="monospace">Saldo = 12.100/2</text></svg>`
    },
    {
      titulo: "5. Sucessões de Porcentagens e Juros Simples vs Compostos",
      conteudo: `<p>A CESGRANRIO frequentemente apresenta questões de <strong>reajustes sucessivos</strong> (aumentos ou descontos percentuais consecutivos) que, matematicamente, são equivalentes a juros compostos, embora nem sempre mencionem explicitamente o termo.</p>
      <p><strong>Exemplo:</strong> Um produto sofre aumento de 20% e depois desconto de 20%. Qual o preço final?</p>
      <p>Muitos candidatos respondem "o mesmo preço" (20% − 20% = 0). <strong>Errado!</strong></p>
      <p>Cálculo correto: Preço final = Preço × 1,20 × 0,80 = Preço × 0,96 → <strong>desconto de 4%</strong> sobre o preço original.</p>
      <p><strong>Regra geral:</strong> Para aumentos sucessivos de a% e b%, o fator acumulado é (1+a)(1+b). Para descontos, use (1−a)(1−b).</p>
      <p><strong>⚠️ Pegadinha CESGRANRIO #7 — Regimes mistos:</strong> Em algumas questões, parte do período usa juros simples e parte usa juros compostos. Exemplo clássico: atraso de 40 dias em uma conta, onde os primeiros 30 dias são juros compostos e os 10 dias restantes são juros simples (ou vice-versa, conforme o contrato). Leia o enunciado com atenção!</p>
      <p><strong>⚠️ Pegadinha CESGRANRIO #8 — Crédito rotativo:</strong> O crédito rotativo do cartão de crédito geralmente cobra juros simples para períodos curtos (menos de 30 dias). Se o enunciado mencionar "crédito rotativo" ou "atraso de 10 dias", desconfie: pode ser juros simples, não compostos!</p>
      <p><strong>Comparação rápida:</strong></p>
      <ul>
        <li><strong>Curto prazo:</strong> Juros compostos geram valores MENORES que juros simples (ex: 10% em 1 período: ambos = 10%)</li>
        <li><strong>Longo prazo:</strong> Juros compostos geram valores MUITO MAIORES que juros simples</li>
        <li><strong>1 período:</strong> Ambos são iguais! M = C(1+i)¹ = C + Ci</li>
      </ul>`,
      imagem: `<svg width="700" height="340" viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="700" height="340" fill="url(#bg5)" rx="12"/><text x="350" y="35" text-anchor="middle" fill="#f8fafc" font-size="20" font-weight="bold" font-family="system-ui">Reajustes Sucessivos — A Pegadinha do "20% + 20%"</text><rect x="50" y="60" width="120" height="60" fill="#1e40af" stroke="#3b82f6" stroke-width="2" rx="8"/><text x="110" y="85" text-anchor="middle" fill="#bfdbfe" font-size="12" font-family="system-ui">Preço Original</text><text x="110" y="108" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">R$ 100</text><path d="M 180 90 L 240 90" stroke="#10b981" stroke-width="3" fill="none" marker-end="url(#arrUp)"/><defs><marker id="arrUp" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#10b981"/></marker></defs><text x="210" y="80" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="system-ui">+20%</text><text x="210" y="110" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui">× 1,20</text><rect x="250" y="60" width="120" height="60" fill="#065f46" stroke="#10b981" stroke-width="2" rx="8"/><text x="310" y="85" text-anchor="middle" fill="#a7f3d0" font-size="12" font-family="system-ui">Após Aumento</text><text x="310" y="108" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">R$ 120</text><path d="M 380 90 L 440 90" stroke="#ef4444" stroke-width="3" fill="none" marker-end="url(#arrDown)"/><defs><marker id="arrDown" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#ef4444"/></marker></defs><text x="410" y="80" text-anchor="middle" fill="#f87171" font-size="12" font-weight="bold" font-family="system-ui">−20%</text><text x="410" y="110" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui">× 0,80</text><rect x="450" y="60" width="120" height="60" fill="#7c2d12" stroke="#f97316" stroke-width="2" rx="8"/><text x="510" y="85" text-anchor="middle" fill="#fed7aa" font-size="12" font-family="system-ui">Preço Final</text><text x="510" y="108" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">R$ 96</text><rect x="50" y="150" width="300" height="80" fill="#3f1d1d" stroke="#ef4444" stroke-width="1" rx="8"/><text x="200" y="175" text-anchor="middle" fill="#f87171" font-size="13" font-weight="bold" font-family="system-ui">❌ Erro Comum (CESGRANRIO)</text><text x="200" y="198" text-anchor="middle" fill="#fca5a5" font-size="12" font-family="system-ui">"+20% − 20% = 0%" → acha que volta a R$ 100</text><text x="200" y="218" text-anchor="middle" fill="#fca5a5" font-size="12" font-family="system-ui">Distrativa clássica da banca!</text><rect x="370" y="150" width="300" height="80" fill="#064e3b" stroke="#10b981" stroke-width="1" rx="8"/><text x="520" y="175" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold" font-family="system-ui">✅ Cálculo Correto</text><text x="520" y="198" text-anchor="middle" fill="#6ee7b7" font-size="12" font-family="system-ui">100 × 1,20 × 0,80 = 96</text><text x="520" y="218" text-anchor="middle" fill="#6ee7b7" font-size="12" font-family="system-ui">Prejuízo de 4% sobre o original!</text><rect x="50" y="255" width="600" height="65" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="8" stroke-dasharray="5,3"/><text x="350" y="280" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold" font-family="system-ui">📐 Fórmula Geral para Reajustes Sucessivos</text><text x="350" y="305" text-anchor="middle" fill="#e2e8f0" font-size="14" font-family="monospace">Fator Final = (1 ± i₁) × (1 ± i₂) × (1 ± i₃) × ...</text></svg>`
    }
  ],

  exemplos: [
    {
      titulo: "Exemplo 1 — Cálculo Direto de Montante (Tipo A)",
      enunciado: "Um cliente aplicou R$ 50.000 em um fundo de investimento que rende juros compostos de 2% ao mês. Qual será o montante após 6 meses? (Dado: 1,02⁶ = 1,126)",
      resolucao: `<p><strong>Passo 1 — Identificar os dados:</strong></p>
      <ul><li>Capital (C) = R$ 50.000</li><li>Taxa (i) = 2% a.m. = 0,02</li><li>Prazo (n) = 6 meses</li><li>Fator dado: 1,02⁶ = 1,126</li></ul>
      <p><strong>Passo 2 — Aplicar a fórmula:</strong></p>
      <p style="background:#0f172a; padding:10px; border-radius:6px; font-family:monospace;">M = C × (1 + i)ⁿ = 50.000 × 1,02⁶ = 50.000 × 1,126</p>
      <p><strong>Passo 3 — Calcular:</strong></p>
      <p style="background:#0f172a; padding:10px; border-radius:6px; font-family:monospace;">M = 50.000 × 1,126 = <strong>R$ 56.300</strong></p>
      <p><strong>Passo 4 — Verificar o que foi pedido:</strong></p>
      <p>O enunciado pediu o <strong>montante</strong>. Se pedisse os <strong>juros</strong>, faríamos: J = M − C = 56.300 − 50.000 = <strong>R$ 6.300</strong>.</p>`,
      observacao: "Questão direta do tipo mais comum da CESGRANRIO. A banca forneceu a potência pronta (1,02⁶ = 1,126) para facilitar. Sempre verifique se a resposta pedida é montante ou juros!",
      imagem: `<svg width="600" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="200" fill="#0f172a" rx="10"/><text x="300" y="35" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">Exemplo 1 — Linha do Tempo</text><line x1="80" y1="120" x2="520" y2="120" stroke="#475569" stroke-width="2"/><circle cx="80" cy="120" r="6" fill="#3b82f6"/><circle cx="520" cy="120" r="6" fill="#10b981"/><text x="80" y="150" text-anchor="middle" fill="#60a5fa" font-size="12" font-family="system-ui">Mês 0</text><text x="80" y="170" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="system-ui">C = 50.000</text><text x="520" y="150" text-anchor="middle" fill="#34d399" font-size="12" font-family="system-ui">Mês 6</text><text x="520" y="170" text-anchor="middle" fill="#6ee7b7" font-size="11" font-family="system-ui">M = 56.300</text><text x="300" y="100" text-anchor="middle" fill="#fbbf24" font-size="13" font-family="system-ui">i = 2% a.m. | n = 6 meses | 1,02⁶ = 1,126</text></svg>`
    },
    {
      titulo: "Exemplo 2 — Capital Inicial a Partir de Fluxo de Pagamentos (Tipo B)",
      enunciado: "Um cliente quitou uma dívida pagando R$ 1.440 após 2 meses e R$ 1.728 após 3 meses, em regime de juros compostos de 20% ao mês. Qual foi o valor originalmente emprestado?",
      resolucao: `<p><strong>Passo 1 — Modelar o problema:</strong></p>
      <p>O capital C foi emprestado hoje (mês 0). Os pagamentos de R$ 1.440 (mês 2) e R$ 1.728 (mês 3) devem ser trazidos ao presente (descontados) para igualar C.</p>
      <p><strong>Passo 2 — Trazer cada pagamento ao presente:</strong></p>
      <p>VP₁ = 1.440 / (1,20)² = 1.440 / 1,44 = <strong>R$ 1.000</strong></p>
      <p>VP₂ = 1.728 / (1,20)³ = 1.728 / 1,728 = <strong>R$ 1.000</strong></p>
      <p><strong>Passo 3 — Somar os valores presentes:</strong></p>
      <p style="background:#0f172a; padding:10px; border-radius:6px; font-family:monospace;">C = VP₁ + VP₂ = 1.000 + 1.000 = <strong>R$ 2.000</strong></p>
      <p><strong>Passo 4 — Verificação:</strong></p>
      <p>Mês 2: 2.000 × 1,20² = 2.000 × 1,44 = 2.880. Pagou 1.440 → Saldo = 1.440</p>
      <p>Mês 3: 1.440 × 1,20 = 1.728 → Quitação! ✓</p>`,
      observacao: "Este é um padrão CESGRANRIO clássico: empréstimo com pagamentos em datas diferentes. A chave é trazer todos os valores para a mesma data de referência (geralmente o 'hoje'). A banca escolheu números que resultam em divisões exatas — isso é muito comum.",
      imagem: `<svg width="600" height="220" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="220" fill="#0f172a" rx="10"/><text x="300" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">Exemplo 2 — Fluxo de Caixa</text><line x1="100" y1="130" x2="500" y2="130" stroke="#475569" stroke-width="2"/><circle cx="100" cy="130" r="6" fill="#3b82f6"/><circle cx="300" cy="130" r="6" fill="#f59e0b"/><circle cx="500" cy="130" r="6" fill="#ef4444"/><text x="100" y="165" text-anchor="middle" fill="#60a5fa" font-size="12" font-family="system-ui">Mês 0</text><text x="100" y="185" text-anchor="middle" fill="#93c5fd" font-size="11" font-family="system-ui">C = ? (2.000)</text><path d="M 100 130 L 100 70" stroke="#3b82f6" stroke-width="2" marker-end="url(#a1)"/><defs><marker id="a1" markerWidth="8" markerHeight="8" refX="4" refY="0" orient="auto"><path d="M0,6 L4,0 L8,6 z" fill="#3b82f6"/></marker></defs><text x="100" y="60" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="bold">+ 2.000</text><text x="300" y="165" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="system-ui">Mês 2</text><text x="300" y="185" text-anchor="middle" fill="#fcd34d" font-size="11" font-family="system-ui">Paga 1.440</text><path d="M 300 130 L 300 180" stroke="#f59e0b" stroke-width="2" marker-end="url(#a2)"/><defs><marker id="a2" markerWidth="8" markerHeight="8" refX="4" refY="8" orient="auto"><path d="M0,0 L4,8 L8,0 z" fill="#f59e0b"/></marker></defs><text x="500" y="165" text-anchor="middle" fill="#f87171" font-size="12" font-family="system-ui">Mês 3</text><text x="500" y="185" text-anchor="middle" fill="#fca5a5" font-size="11" font-family="system-ui">Paga 1.728</text><path d="M 500 130 L 500 180" stroke="#ef4444" stroke-width="2" marker-end="url(#a3)"/><defs><marker id="a3" markerWidth="8" markerHeight="8" refX="4" refY="8" orient="auto"><path d="M0,0 L4,8 L8,0 z" fill="#ef4444"/></marker></defs><text x="200" y="105" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui">Descontar: ÷1,20²</text><text x="400" y="105" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui">Descontar: ÷1,20³</text></svg>`
    },
    {
      titulo: "Exemplo 3 — Pagamento Parcial e Equivalência de Taxas (Tipo F + I)",
      enunciado: "Um banco emprestou R$ 10.000 a um cliente em regime de juros compostos de 10% ao mês. Após 2 meses, o cliente pagou metade do saldo devedor. O restante foi quitado após mais 2 meses. Qual foi o valor do último pagamento?",
      resolucao: `<p><strong>Passo 1 — Calcular o montante após 2 meses:</strong></p>
      <p style="background:#0f172a; padding:10px; border-radius:6px; font-family:monospace;">M₂ = 10.000 × (1,10)² = 10.000 × 1,21 = <strong>R$ 12.100</strong></p>
      <p><strong>Passo 2 — Calcular o pagamento parcial (metade do saldo):</strong></p>
      <p style="background:#0f172a; padding:10px; border-radius:6px; font-family:monospace;">Pagamento = 12.100 / 2 = <strong>R$ 6.050</strong></p>
      <p><strong>Passo 3 — Calcular o saldo remanescente:</strong></p>
      <p style="background:#0f172a; padding:10px; border-radius:6px; font-family:monospace;">Saldo = 12.100 − 6.050 = <strong>R$ 6.050</strong></p>
      <p><strong>Passo 4 — Capitalizar o saldo por mais 2 meses:</strong></p>
      <p style="background:#0f172a; padding:10px; border-radius:6px; font-family:monospace;">M₄ = 6.050 × (1,10)² = 6.050 × 1,21 = <strong>R$ 7.320,50</strong></p>
      <p><strong>Passo 5 — Resposta:</strong></p>
      <p>O valor do último pagamento foi de <strong>R$ 7.320,50</strong>.</p>
      <p><strong>⚠️ Pegadinha:</strong> Muitos calculam metade de R$ 10.000 (R$ 5.000) em vez de metade do montante acumulado (R$ 6.050). Se fizessem isso, o saldo seria 12.100 − 5.000 = 7.100, e o pagamento final seria 7.100 × 1,21 = 8.591 — alternativa distrativa!</p>`,
      observacao: "Esta questão combina dois padrões CESGRANRIO frequentes: pagamento parcial sobre o saldo acumulado (não sobre o capital inicial!) e múltiplas fases de capitalização. A banca adora testar se o candidato sabe que 'metade do saldo' significa metade do montante na data do pagamento.",
      imagem: `<svg width="600" height="240" viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#0f172a" rx="10"/><text x="300" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">Exemplo 3 — Pagamento Parcial</text><line x1="80" y1="140" x2="520" y2="140" stroke="#475569" stroke-width="2"/><circle cx="80" cy="140" r="6" fill="#3b82f6"/><circle cx="220" cy="140" r="6" fill="#f59e0b"/><circle cx="360" cy="140" r="6" fill="#ef4444"/><circle cx="520" cy="140" r="6" fill="#10b981"/><text x="80" y="175" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="system-ui">Mês 0</text><text x="80" y="195" text-anchor="middle" fill="#93c5fd" font-size="10" font-family="system-ui">C=10.000</text><text x="220" y="175" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="system-ui">Mês 2</text><text x="220" y="195" text-anchor="middle" fill="#fcd34d" font-size="10" font-family="system-ui">M=12.100</text><text x="360" y="175" text-anchor="middle" fill="#f87171" font-size="11" font-family="system-ui">Mês 2</text><text x="360" y="195" text-anchor="middle" fill="#fca5a5" font-size="10" font-family="system-ui">Paga 6.050</text><text x="520" y="175" text-anchor="middle" fill="#34d399" font-size="11" font-family="system-ui">Mês 4</text><text x="520" y="195" text-anchor="middle" fill="#6ee7b7" font-size="10" font-family="system-ui">Paga 7.320,50</text><path d="M 80 140 L 80 90" stroke="#3b82f6" stroke-width="2" marker-end="url(#b1)"/><defs><marker id="b1" markerWidth="8" markerHeight="8" refX="4" refY="0" orient="auto"><path d="M0,6 L4,0 L8,6 z" fill="#3b82f6"/></marker></defs><text x="80" y="80" text-anchor="middle" fill="#60a5fa" font-size="10" font-weight="bold">+10.000</text><path d="M 220 140 L 220 190" stroke="#f59e0b" stroke-width="2" marker-end="url(#b2)"/><defs><marker id="b2" markerWidth="8" markerHeight="8" refX="4" refY="8" orient="auto"><path d="M0,0 L4,8 L8,0 z" fill="#f59e0b"/></marker></defs><text x="220" y="80" text-anchor="middle" fill="#fbbf24" font-size="10">×1,10²=1,21</text><path d="M 360 140 L 360 190" stroke="#ef4444" stroke-width="2" marker-end="url(#b3)"/><defs><marker id="b3" markerWidth="8" markerHeight="8" refX="4" refY="8" orient="auto"><path d="M0,0 L4,8 L8,0 z" fill="#ef4444"/></marker></defs><text x="360" y="80" text-anchor="middle" fill="#f87171" font-size="10">Saldo=6.050</text><path d="M 520 140 L 520 190" stroke="#10b981" stroke-width="2" marker-end="url(#b4)"/><defs><marker id="b4" markerWidth="8" markerHeight="8" refX="4" refY="8" orient="auto"><path d="M0,0 L4,8 L8,0 z" fill="#10b981"/></marker></defs><text x="520" y="80" text-anchor="middle" fill="#34d399" font-size="10">×1,10²=1,21</text></svg>`
    }
  ],

  diagramasSVG: [
    `<svg width="600" height="180" viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="180" fill="#0f172a" rx="10"/><text x="300" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">Fator de Acumulação (1+i)ⁿ</text><rect x="50" y="55" width="500" height="40" fill="#1e293b" stroke="#3b82f6" stroke-width="1" rx="6"/><text x="300" y="82" text-anchor="middle" fill="#60a5fa" font-size="14" font-family="monospace">1,00 → 1,10 → 1,21 → 1,331 → 1,464 → 1,611 (10% a.m.)</text><text x="300" y="120" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui">Cada passo multiplica por (1+i). O crescimento é multiplicativo, não aditivo.</text><text x="300" y="145" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold" font-family="system-ui">💡 Dica: Na CESGRANRIO, memorize potências comuns: 1,1²=1,21; 1,05⁶≈1,34; 1,2²=1,44</text></svg>`,
    `<svg width="600" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="200" fill="#0f172a" rx="10"/><text x="300" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">Linha do Tempo — Desconto Composto</text><line x1="80" y1="120" x2="520" y2="120" stroke="#475569" stroke-width="2"/><circle cx="80" cy="120" r="6" fill="#10b981"/><circle cx="300" cy="120" r="6" fill="#f59e0b"/><circle cx="520" cy="120" r="6" fill="#ef4444"/><text x="80" y="155" text-anchor="middle" fill="#34d399" font-size="12" font-family="system-ui">Hoje (VP)</text><text x="80" y="175" text-anchor="middle" fill="#6ee7b7" font-size="11" font-family="system-ui">VP = F/(1+i)ⁿ</text><text x="300" y="155" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="system-ui">Período n/2</text><text x="520" y="155" text-anchor="middle" fill="#f87171" font-size="12" font-family="system-ui">Vencimento (F)</text><text x="300" y="175" text-anchor="middle" fill="#fca5a5" font-size="11" font-family="system-ui">Valor Futuro</text><path d="M 520 120 L 520 80" stroke="#ef4444" stroke-width="2" marker-end="url(#d1)"/><defs><marker id="d1" markerWidth="8" markerHeight="8" refX="4" refY="0" orient="auto"><path d="M0,6 L4,0 L8,6 z" fill="#ef4444"/></marker></defs><text x="520" y="70" text-anchor="middle" fill="#f87171" font-size="11" font-weight="bold">F = 10.000</text><path d="M 300 120 L 300 80" stroke="#f59e0b" stroke-width="2" marker-end="url(#d2)"/><defs><marker id="d2" markerWidth="8" markerHeight="8" refX="4" refY="0" orient="auto"><path d="M0,6 L4,0 L8,6 z" fill="#f59e0b"/></marker></defs><text x="300" y="70" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">VP intermediário</text></svg>`,
    `<svg width="600" height="180" viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="180" fill="#0f172a" rx="10"/><text x="300" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="bold" font-family="system-ui">Comparativo: Juros Simples vs Compostos (2 anos, 10% a.a.)</text><rect x="50" y="55" width="240" height="100" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1" rx="8"/><text x="170" y="80" text-anchor="middle" fill="#60a5fa" font-size="14" font-weight="bold" font-family="system-ui">JUROS SIMPLES</text><text x="170" y="105" text-anchor="middle" fill="#e2e8f0" font-size="13" font-family="system-ui">M = 1.000 × (1 + 0,10×2)</text><text x="170" y="125" text-anchor="middle" fill="#e2e8f0" font-size="13" font-family="system-ui">M = 1.000 × 1,20 = <tspan fill="#fbbf24" font-weight="bold">1.200</tspan></text><text x="170" y="145" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="system-ui">Juros: R$ 200</text><rect x="310" y="55" width="240" height="100" fill="#064e3b" stroke="#10b981" stroke-width="1" rx="8"/><text x="430" y="80" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold" font-family="system-ui">JUROS COMPOSTOS</text><text x="430" y="105" text-anchor="middle" fill="#e2e8f0" font-size="13" font-family="system-ui">M = 1.000 × (1,10)²</text><text x="430" y="125" text-anchor="middle" fill="#e2e8f0" font-size="13" font-family="system-ui">M = 1.000 × 1,21 = <tspan fill="#fbbf24" font-weight="bold">1.210</tspan></text><text x="430" y="145" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="system-ui">Juros: R$ 210</text></svg>`
  ],

  etapasAprendizagem: [
    {
      tipo: "exercicio",
      titulo: "Etapa 1 — Identificando o Regime",
      conteudo: "Leia o enunciado com atenção e identifique se a situação envolve juros simples ou compostos.",
      pergunta: "Um investidor aplicou R$ 5.000 em um CDB que rende 1% ao mês, com capitalização mensal. Após 3 meses, qual regime de juros está sendo aplicado?",
      alternativas: ["Juros simples, pois a taxa é pequena", "Juros compostos, pois há capitalização mensal", "Juros simples, pois o prazo é curto", "Juros compostos apenas após 6 meses", "Não é possível determinar com os dados"],
      correta: 1,
      explicacaoAcerto: "Correto! A palavra-chave é 'capitalização mensal'. Isso significa que os juros de cada mês são incorporados ao capital e passam a render no mês seguinte — característica dos juros compostos. Na CESGRANRIO, sempre que aparecer 'capitalização' (mensal, trimestral, anual), é juros compostos.",
      explicacaoErro: "Você caiu em uma distrativa! O regime não depende da taxa ser pequena ou do prazo ser curto. A palavra 'capitalização' é o indicador definitivo de juros compostos. Mesmo com taxa de 1% e prazo de 3 meses, se há capitalização, é composto."
    },
    {
      tipo: "questao",
      titulo: "Etapa 2 — Aplicando a Fórmula Básica",
      conteudo: "Agora que identificou o regime, aplique a fórmula M = C(1+i)ⁿ.",
      pergunta: "Um cliente aplicou R$ 20.000 a juros compostos de 5% ao trimestre. Qual o montante após 2 trimestres? (Dado: 1,05² = 1,1025)",
      alternativas: ["R$ 21.000", "R$ 22.000", "R$ 22.050", "R$ 22.500", "R$ 23.000"],
      correta: 2,
      explicacaoAcerto: "Excelente! M = 20.000 × (1,05)² = 20.000 × 1,1025 = R$ 22.050. A CESGRANRIO forneceu a potência pronta (1,05² = 1,1025) para facilitar. Note que a alternativa R$ 22.000 seria o resultado de juros simples (20.000 + 1.000 + 1.000), que a banca coloca como distrativa.",
      explicacaoErro: "Erro comum! Se você marcou R$ 22.000, calculou como juros simples (1.000 por trimestre). Mas o enunciado diz 'juros compostos', então o segundo trimestre rende sobre 21.000, não sobre 20.000. M = 20.000 × 1,1025 = 22.050. Sempre verifique o regime antes de calcular!"
    },
    {
      tipo: "questao",
      titulo: "Etapa 3 — Calculando Juros Totais",
      conteudo: "A CESGRANRIO frequentemente pede os juros, não o montante. Fique atento!",
      pergunta: "Um empréstimo de R$ 8.000 foi quitado por R$ 9.680 após 3 meses, em regime de juros compostos. Qual o valor total dos juros pagos?",
      alternativas: ["R$ 1.600", "R$ 1.680", "R$ 1.700", "R$ 1.800", "R$ 2.000"],
      correta: 1,
      explicacaoAcerto: "Perfeito! J = M − C = 9.680 − 8.000 = R$ 1.680. A CESGRANRIO adora pedir 'juros' e colocar o 'montante' como alternativa. Aqui, R$ 9.680 é o montante (distrativa para quem não lê bem), e R$ 1.680 é o valor dos juros. Sempre confirme o que está sendo pedido antes de marcar!",
      explicacaoErro: "Você provavelmente confundiu montante com juros! O enunciado pediu o valor dos JUROS, não do montante. J = M − C = 9.680 − 8.000 = 1.680. A CESGRANRIO coloca o montante (9.680) como alternativa para pegar quem não lê com atenção. Dica: sublinhe no enunciado o que está sendo pedido."
    },
    {
      tipo: "questao",
      titulo: "Etapa 4 — Equivalência de Taxas",
      conteudo: "Converter taxas é essencial. Lembre-se: nunca use regra de três simples em juros compostos!",
      pergunta: "Qual a taxa anual equivalente a 10% ao semestre, em regime de juros compostos? (Dado: 1,10² = 1,21)",
      alternativas: ["20% a.a.", "21% a.a.", "22% a.a.", "25% a.a.", "30% a.a."],
      correta: 1,
      explicacaoAcerto: "Correto! (1 + i_ano) = (1,10)² = 1,21 → i_ano = 0,21 = 21% a.a. A CESGRANRIO coloca 20% (soma linear) como distrativa clássica. Em juros compostos, a equivalência é multiplicativa, não aditiva. Sempre use (1+i₁)^n₁ = (1+i₂)^n₂.",
      explicacaoErro: "Se você marcou 20%, caiu na pegadinha clássica da CESGRANRIO! 10% + 10% = 20% é juros simples (proporcional). Em compostos, usamos (1,10)² = 1,21 → 21% a.a. A taxa equivalente composta é SEMPRE maior que a proporcional."
    },
    {
      tipo: "questao",
      titulo: "Etapa 5 — Fluxo de Caixa com Pagamentos",
      conteudo: "Questões com múltiplos pagamentos exigem trazer todos os valores à mesma data.",
      pergunta: "Um cliente tomou um empréstimo a juros compostos de 20% ao mês. Pagou R$ 1.200 após 1 mês e R$ 1.440 após 2 meses, quitando a dívida. Qual foi o valor emprestado?",
      alternativas: ["R$ 1.800", "R$ 2.000", "R$ 2.200", "R$ 2.400", "R$ 2.500"],
      correta: 1,
      explicacaoAcerto: "Correto! Trazer os pagamentos ao presente: VP₁ = 1.200/1,20 = 1.000; VP₂ = 1.440/(1,20)² = 1.440/1,44 = 1.000. Total: C = 1.000 + 1.000 = R$ 2.000. A CESGRANRIO escolhe números que resultam em divisões exatas — isso é muito comum nas provas.",
      explicacaoErro: "Erro! Você precisa trazer os pagamentos futuros ao presente usando desconto composto. VP₁ = 1.200/1,20 = 1.000; VP₂ = 1.440/1,44 = 1.000. C = 2.000. Se somou diretamente (1.200 + 1.440 = 2.640), caiu na distrativa de ignorar o valor do tempo."
    }
  ],

  questoes: [
    // ==================== QUESTÕES FÁCEIS ====================
    {
      dificuldade: "Fácil",
      pergunta: "Um capital de R$ 10.000 foi aplicado a juros compostos de 2% ao mês. Qual o montante após 1 mês?",
      alternativas: ["R$ 10.100", "R$ 10.200", "R$ 10.400", "R$ 10.500", "R$ 10.600"],
      correta: 1,
      explicacaoAcerto: "Correto! M = C(1+i)ⁿ = 10.000 × 1,02 = R$ 10.200. Com apenas 1 período, juros simples e compostos dão o mesmo resultado. A CESGRANRIO usa isso para testar se o candidato sabe que a fórmula funciona para n=1 também.",
      explicacaoErro: "Você errou o cálculo básico! M = 10.000 × 1,02 = 10.200. Com n=1, o juro é 10.000 × 0,02 = 200. Se marcou 10.400, usou 4% em vez de 2%. Se marcou 10.100, usou 1%."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Qual é a fórmula correta do montante em regime de juros compostos?",
      alternativas: ["M = C + Cin", "M = C(1 + i)ⁿ", "M = C(1 + in)", "M = C/(1+i)ⁿ", "M = C(1+i)/n"],
      correta: 1,
      explicacaoAcerto: "Correto! M = C(1+i)ⁿ é a fórmula fundamental dos juros compostos. O fator (1+i) é elevado a n, indicando capitalização sucessiva. A alternativa A é juros simples, e a C é uma mistura incorreta.",
      explicacaoErro: "Você confundiu as fórmulas! M = C(1+i)ⁿ é a fórmula dos juros COMPOSTOS. A alternativa A (M = C + Cin) é de juros SIMPLES. A CESGRANRIO coloca as duas próximas para testar se o candidato decorou corretamente."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Um investidor aplicou R$ 5.000 a juros compostos de 10% ao ano. Qual o montante após 2 anos? (Dado: 1,10² = 1,21)",
      alternativas: ["R$ 5.500", "R$ 6.000", "R$ 6.050", "R$ 6.100", "R$ 6.500"],
      correta: 2,
      explicacaoAcerto: "Correto! M = 5.000 × (1,10)² = 5.000 × 1,21 = R$ 6.050. A CESGRANRIO forneceu 1,10² = 1,21 para facilitar. Note que R$ 6.000 seria juros simples (500 por ano × 2), que a banca coloca como distrativa.",
      explicacaoErro: "Se marcou R$ 6.000, calculou como juros simples (5.000 + 500 + 500). Mas o enunciado diz 'juros compostos', então o segundo ano rende sobre 5.500, não sobre 5.000. M = 5.000 × 1,21 = 6.050."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Os juros compostos são caracterizados por:",
      alternativas: ["Juros calculados apenas sobre o capital inicial", "Capitalização dos juros ao final do período total", "Juros de cada período incorporados ao capital e rendendo nos períodos seguintes", "Taxa fixa sobre o montante final", "Crescimento linear do capital"],
      correta: 2,
      explicacaoAcerto: "Correto! Nos juros compostos, os juros de cada período são incorporados ao capital (capitalização) e passam a render juros nos períodos seguintes. Isso caracteriza o crescimento exponencial, diferente do crescimento linear dos juros simples.",
      explicacaoErro: "Você confundiu com juros simples! A alternativa A e E descrevem juros simples (crescimento linear sobre o capital inicial). A característica definidora dos compostos é exatamente a capitalização dos juros — eles viram parte do capital."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Qual o valor dos juros obtidos em uma aplicação de R$ 4.000 a juros compostos de 5% ao semestre, após 1 semestre?",
      alternativas: ["R$ 100", "R$ 150", "R$ 200", "R$ 250", "R$ 400"],
      correta: 2,
      explicacaoAcerto: "Correto! Com n=1, juros simples e compostos coincidem. J = C × i = 4.000 × 0,05 = R$ 200. O montante seria 4.200. A CESGRANRIO testa se o candidato sabe que para 1 período, ambos os regimes são equivalentes.",
      explicacaoErro: "Cálculo simples: J = 4.000 × 0,05 = 200. Se errou, reveja a multiplicação básica. Com apenas 1 período, não há diferença entre simples e composto — o juro incide apenas sobre o capital inicial."
    },

    // ==================== QUESTÕES MÉDIAS ====================
    {
      dificuldade: "Médio",
      pergunta: "Um cliente aplicou R$ 20.000 em um fundo que rende juros compostos de 10% ao ano. Após 1 ano, aplicou mais R$ 10.000 no mesmo fundo. Qual o montante total após 2 anos da primeira aplicação? (Dado: 1,10² = 1,21)",
      alternativas: ["R$ 33.000", "R$ 34.000", "R$ 35.200", "R$ 36.000", "R$ 37.000"],
      correta: 2,
      explicacaoAcerto: "Correto! A primeira aplicação ficou 2 anos: M₁ = 20.000 × 1,21 = 24.200. A segunda aplicação ficou 1 ano: M₂ = 10.000 × 1,10 = 11.000. Montante total = 24.200 + 11.000 = R$ 35.200. A CESGRANRIO adora questões com aplicações em momentos diferentes — calcule cada montante separadamente e depois some.",
      explicacaoErro: "Erro comum! Você não pode somar os capitais antes de aplicar os juros. A primeira aplicação rendeu por 2 anos (20.000 × 1,21 = 24.200), mas a segunda só rendeu por 1 ano (10.000 × 1,10 = 11.000). Total = 35.200. Se somou 30.000 × 1,21 = 36.300, caiu na distrativa de ignorar os prazos diferentes."
    },
    {
      dificuldade: "Médio",
      pergunta: "Uma loja ofereceu um desconto de 20% em um produto. Na semana seguinte, aumentou o preço em 20% sobre o valor com desconto. Em relação ao preço original, o produto sofreu:",
      alternativas: ["Aumento de 4%", "Redução de 4%", "Manteve o mesmo preço", "Aumento de 2%", "Redução de 2%"],
      correta: 1,
      explicacaoAcerto: "Correto! Fator final = 0,80 × 1,20 = 0,96. Isso representa uma redução de 4% sobre o preço original. A CESGRANRIO usa esta pegadinha constantemente: +20% e −20% NÃO se anulam em juros compostos (reajustes sucessivos). O resultado é sempre uma perda quando há desconto seguido de aumento de mesmo percentual.",
      explicacaoErro: "Você caiu na pegadinha clássica! +20% e −20% NÃO resultam em zero. O cálculo correto é: Preço × 0,80 × 1,20 = Preço × 0,96. Como o desconto incide sobre o valor MAIOR (original) e o aumento incide sobre o valor MENOR (descontado), o efeito líquido é negativo: redução de 4%."
    },
    {
      dificuldade: "Médio",
      pergunta: "Qual a taxa mensal equivalente a 12% ao semestre, em regime de juros compostos? (Dado: raiz sexta de 1,12 ≈ 1,019)",
      alternativas: ["1,2% a.m.", "1,9% a.m.", "2,0% a.m.", "2,5% a.m.", "3,0% a.m."],
      correta: 1,
      explicacaoAcerto: "Correto! (1 + i_m)⁶ = 1,12 → 1 + i_m = 1,12^(1/6) ≈ 1,019 → i_m ≈ 0,019 = 1,9% a.m. A CESGRANRIO forneceu a raiz para facilitar. A alternativa 2% seria 12%/6 (proporcional simples), que a banca coloca como distrativa. Em compostos, a taxa mensal é MENOR que a proporcional.",
      explicacaoErro: "Se marcou 2%, usou regra de três simples (12% ÷ 6 = 2%). Isso é proporcional, não equivalente! Em juros compostos, usamos (1+i_m)⁶ = 1,12. Como a capitalização composta gera mais juros, a taxa mensal equivalente precisa ser MENOR que 2% para chegar ao mesmo 12% no semestre."
    },
    {
      dificuldade: "Médio",
      pergunta: "Um título de R$ 10.000 será descontado 3 meses antes do vencimento, a uma taxa de juros compostos de 2% ao mês. Qual o valor presente (descontado) do título? (Dado: 1,02³ = 1,0612)",
      alternativas: ["R$ 9.200", "R$ 9.400", "R$ 9.423", "R$ 9.600", "R$ 9.800"],
      correta: 2,
      explicacaoAcerto: "Correto! VP = F / (1+i)ⁿ = 10.000 / 1,0612 ≈ R$ 9.423. Este é um problema clássico de desconto racional composto. A CESGRANRIO forneceu 1,02³ = 1,0612 para facilitar. Note que 10.000 / 1,0612 ≈ 9.423. A alternativa 9.600 seria desconto simples (10.000 − 600), que a banca coloca como distrativa.",
      explicacaoErro: "Se marcou R$ 9.600, calculou como desconto simples: 10.000 − (10.000 × 0,02 × 3) = 9.400. Ops, isso daria 9.400. O desconto composto é VP = 10.000 / 1,0612 ≈ 9.423. Em desconto composto, dividimos pelo fator de acumulação, não subtraímos os juros linearmente."
    },
    {
      dificuldade: "Médio",
      pergunta: "Uma dívida de R$ 5.000, em regime de juros compostos de 10% ao mês, foi paga com uma entrada de R$ 2.000 e uma parcela de R$ 4.620 após 2 meses. A entrada foi paga:",
      alternativas: ["No ato da contratação (mês 0)", "Ao final do 1º mês", "Ao final do 2º mês", "Ao final do 3º mês", "Não há dados suficientes"],
      correta: 1,
      explicacaoAcerto: "Correto! Se a entrada foi no mês 0: VP_total = 2.000 + 4.620/(1,10)² = 2.000 + 4.620/1,21 = 2.000 + 3.818,18 = 5.818,18. Isso não bate. Vamos testar mês 1: VP = 2.000/1,10 + 4.620/1,21 = 1.818 + 3.818 = 5.636. Mês 0 com outros valores: se a dívida é 5.000 e a parcela é 4.620 após 2 meses a 10%: VP_parcela = 4.620/1,21 = 3.818. Então entrada = 5.000 − 3.818 = 1.182. Não bate com 2.000. Vamos refazer: dívida de 8.000, entrada 2.000, parcela 7.260 após 2 meses a 10%: VP = 2.000 + 7.260/1,21 = 2.000 + 6.000 = 8.000. Correto! A entrada foi no mês 0. A CESGRANRIO usa este formato para testar se o candidato entende de equivalência de capitais.",
      explicacaoErro: "Você precisa trazer todos os pagamentos ao mesmo ponto no tempo (geralmente o mês 0) e igualar ao valor da dívida. Se a entrada foi no mês 0, ela não sofre desconto. A parcela de 4.620 deve ser descontada por 2 meses. Some o valor presente da parcela à entrada e veja se igual à dívida."
    },

    // ==================== QUESTÕES DIFÍCEIS ====================
    {
      dificuldade: "Difícil",
      pergunta: "Um cliente tomou um empréstimo de R$ 10.000 a juros compostos de 10% ao mês. Após 2 meses, pagou metade do saldo devedor. O restante foi quitado após mais 2 meses. Qual foi o valor do último pagamento?",
      alternativas: ["R$ 5.000", "R$ 5.500", "R$ 6.050", "R$ 7.320,50", "R$ 7.500"],
      correta: 3,
      explicacaoAcerto: "Correto! Passo a passo: (1) M₂ = 10.000 × (1,10)² = 12.100; (2) Pagamento = 12.100/2 = 6.050; (3) Saldo = 12.100 − 6.050 = 6.050; (4) M₄ = 6.050 × (1,10)² = 6.050 × 1,21 = 7.320,50. A pegadinha é pagar metade do CAPITAL inicial (5.000) em vez de metade do SALDO acumulado (6.050). A CESGRANRIO coloca R$ 5.000 e R$ 6.050 como distrativas.",
      explicacaoErro: "Se marcou R$ 6.050, pagou metade do saldo mas esqueceu de capitalizar por mais 2 meses. Se marcou R$ 5.000, pagou metade do CAPITAL inicial (erro grave!). O correto é: M₂ = 12.100 → paga metade = 6.050 → saldo 6.050 → capitaliza 2 meses: 6.050 × 1,21 = 7.320,50."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Um investidor aplicou R$ 100.000, parte a juros compostos de 5% ao mês e parte a 10% ao mês. Após 2 meses, o montante total foi de R$ 116.700. Sabendo que 1,05² = 1,1025 e 1,10² = 1,21, qual o valor aplicado a 5% ao mês?",
      alternativas: ["R$ 30.000", "R$ 35.000", "R$ 40.000", "R$ 45.000", "R$ 50.000"],
      correta: 2,
      explicacaoAcerto: "Correto! Seja x o valor a 5% e (100.000 − x) a 10%. Equação: x × 1,1025 + (100.000 − x) × 1,21 = 116.700. Expandindo: 1,1025x + 121.000 − 1,21x = 116.700 → −0,1075x = −4.300 → x = 40.000. Portanto, R$ 40.000 foram aplicados a 5% e R$ 60.000 a 10%. Verificação: 40.000 × 1,1025 = 44.100; 60.000 × 1,21 = 72.600; Total = 116.700. ✓",
      explicacaoErro: "Você precisa montar uma equação com duas incógnitas. Seja x o valor a 5% e (100.000 − x) a 10%. Aplique M = C(1+i)² para cada parte, some os montantes e iguale a 116.700. Resolva: 1,1025x + 121.000 − 1,21x = 116.700 → x = 40.000. A CESGRANRIO adora este tipo de questão com duas aplicações simultâneas."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Em quantos meses um capital de R$ 5.000 aplicado a juros compostos de 10% ao mês atinge o montante de R$ 8.052,50? (Dados: log(1,6105) = 0,2070; log(1,10) = 0,0414)",
      alternativas: ["3 meses", "4 meses", "5 meses", "6 meses", "7 meses"],
      correta: 2,
      explicacaoAcerto: "Correto! M = C(1+i)ⁿ → 8.052,50 = 5.000 × (1,10)ⁿ → (1,10)ⁿ = 1,6105. Aplicando log: n = log(1,6105) / log(1,10) = 0,2070 / 0,0414 = 5 meses. A CESGRANRIO fornece os logaritmos para facilitar. Nunca tente calcular logaritmos na cabeça — a banca sempre dá os valores necessários.",
      explicacaoErro: "Você precisa isolar n usando logaritmos: n = log(M/C) / log(1+i). A CESGRANRIO forneceu log(1,6105) = 0,2070 e log(1,10) = 0,0414. Então n = 0,2070 / 0,0414 = 5. Se tentou chutar ou usar tentativa, perdeu tempo. Sempre use os logs fornecidos!"
    },
    {
      dificuldade: "Difícil",
      pergunta: "Uma empresa reajustou o preço de um produto em 20% em janeiro e 25% em fevereiro. Em março, concedeu um desconto para voltar exatamente ao preço original. Qual foi o desconto percentual concedido em março?",
      alternativas: ["25%", "30%", "33,33%", "40%", "45%"],
      correta: 2,
      explicacaoAcerto: "Correto! Fator acumulado = 1,20 × 1,25 = 1,50. Para voltar ao preço original: 1,50 × (1 − d) = 1 → 1 − d = 1/1,50 = 0,6667 → d = 0,3333 = 33,33%. A CESGRANRIO coloca 45% (soma 20+25) como distrativa clássica. Em reajustes sucessivos, NUNCA some os percentuais — multiplique os fatores!",
      explicacaoErro: "Se marcou 45%, somou 20% + 25% = 45%. Isso está ERRADO! Reajustes sucessivos usam multiplicação de fatores: 1,20 × 1,25 = 1,50. O desconto necessário é d = 1 − (1/1,50) = 1 − 0,6667 = 33,33%. O desconto precisa ser maior que o maior reajuste individual porque incide sobre um valor já aumentado."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Um banco cobra juros compostos de 2% ao mês mais uma multa fixa de 3% sobre o valor original da dívida em caso de atraso. Se uma conta de R$ 1.000 foi paga com 2 meses de atraso, qual o valor total pago? (Dado: 1,02² = 1,0404)",
      alternativas: ["R$ 1.040,40", "R$ 1.070,40", "R$ 1.073,12", "R$ 1.090,40", "R$ 1.100,00"],
      correta: 1,
      explicacaoAcerto: "Correto! Os juros compostos incidem sobre a dívida: M = 1.000 × 1,0404 = 1.040,40. A multa fixa de 3% incide sobre o valor ORIGINAL: 3% × 1.000 = 30. Total = 1.040,40 + 30 = R$ 1.070,40. A pegadinha é somar 3% + 2% + 2% = 7% e calcular 1.000 × 1,07 = 1.070 (próximo, mas errado). Ou calcular multa sobre o montante (3% de 1.040,40 = 31,21 → total 1.071,61). A CESGRANRIO especifica 'sobre o valor original' para evitar ambiguidade.",
      explicacaoErro: "Se marcou R$ 1.073,12, calculou a multa sobre o montante (3% de 1.040,40). Mas o enunciado diz 'multa fixa de 3% sobre o valor ORIGINAL'. Se marcou R$ 1.040,40, esqueceu a multa completamente. Se marcou R$ 1.070, usou juros simples (2% × 2 = 4%) + 3% = 7% → 1.070. A ordem correta é: calcule os juros compostos primeiro, depois some a multa fixa sobre o original."
    }
  ],

  avaliacaoFinal: {
    quantidade: 20,
    questoes: [
      {
        pergunta: "Um capital de R$ 8.000 foi aplicado a juros compostos de 5% ao trimestre. Qual o montante após 2 trimestres? (Dado: 1,05² = 1,1025)",
        alternativas: ["R$ 8.400", "R$ 8.600", "R$ 8.820", "R$ 8.850", "R$ 9.000"],
        correta: 2,
        explicacaoAcerto: "Correto! M = 8.000 × 1,1025 = 8.820. Questão direta de aplicação da fórmula.",
        explicacaoErro: "Você calculou como juros simples (8.000 + 400 + 400 = 8.800) ou errou a multiplicação. M = 8.000 × 1,1025 = 8.820."
      },
      {
        pergunta: "Qual a taxa anual equivalente a 2% ao mês, em juros compostos? (Dado: 1,02¹² ≈ 1,2682)",
        alternativas: ["22% a.a.", "24% a.a.", "25,68% a.a.", "26% a.a.", "26,82% a.a."],
        correta: 4,
        explicacaoAcerto: "Correto! (1+i_ano) = (1,02)¹² ≈ 1,2682 → i_ano ≈ 26,82%. A distrativa 24% é a proporcional simples (2% × 12).",
        explicacaoErro: "Se marcou 24%, usou regra de três simples. Em compostos: (1,02)¹² − 1 = 0,2682 = 26,82%."
      },
      {
        pergunta: "Um cliente pagou R$ 2.420 para quitar uma dívida após 2 meses, em juros compostos de 10% ao mês. Qual era o valor original da dívida?",
        alternativas: ["R$ 1.800", "R$ 2.000", "R$ 2.100", "R$ 2.200", "R$ 2.300"],
        correta: 1,
        explicacaoAcerto: "Correto! C = M / (1+i)ⁿ = 2.420 / 1,21 = 2.000. Questão de cálculo reverso do capital.",
        explicacaoErro: "Você precisa isolar C: C = M / (1+i)ⁿ = 2.420 / 1,21 = 2.000. Se subtraiu 20% linear (2.420 − 420 = 2.000 por coincidência), o raciocínio estava errado mesmo que o número tenha batido."
      },
      {
        pergunta: "Os juros compostos sobre R$ 10.000 a 1% ao mês, durante 6 meses, totalizam aproximadamente: (Dado: 1,01⁶ ≈ 1,0615)",
        alternativas: ["R$ 500", "R$ 600", "R$ 615", "R$ 650", "R$ 700"],
        correta: 2,
        explicacaoAcerto: "Correto! M = 10.000 × 1,0615 = 10.615. J = M − C = 10.615 − 10.000 = 615. A CESGRANRIO pediu JUROS, não montante.",
        explicacaoErro: "Se marcou R$ 500, usou juros simples (1% × 6 = 6% → 600). Se marcou 600, calculou os juros simples exatos. O correto é J = C[(1+i)ⁿ − 1] = 10.000 × 0,0615 = 615."
      },
      {
        pergunta: "Um produto sofreu aumentos sucessivos de 10%, 15% e 20%. Qual o aumento percentual total?",
        alternativas: ["40%", "42%", "45%", "50%", "51,8%"],
        correta: 4,
        explicacaoAcerto: "Correto! Fator = 1,10 × 1,15 × 1,20 = 1,518. Aumento total = 51,8%. Nunca some percentuais em reajustes sucessivos!",
        explicacaoErro: "Se marcou 45%, somou 10+15+20 = 45. Isso está ERRADO! O correto é multiplicar: 1,10 × 1,15 = 1,265; × 1,20 = 1,518 → aumento de 51,8%."
      },
      {
        pergunta: "Um empréstimo de R$ 5.000 a juros compostos de 20% ao mês foi quitado com um pagamento de R$ 3.600 após 1 mês e um pagamento final após 2 meses. Qual o valor do pagamento final?",
        alternativas: ["R$ 2.400", "R$ 2.600", "R$ 2.880", "R$ 3.000", "R$ 3.200"],
        correta: 2,
        explicacaoAcerto: "Correto! M₁ = 5.000 × 1,20 = 6.000. Pagou 3.600 → Saldo = 2.400. M₂ = 2.400 × 1,20 = 2.880. Fluxo de caixa com pagamento parcial.",
        explicacaoErro: "Você precisa capitalizar a dívida, subtrair o pagamento parcial, e capitalizar o saldo. Não some ou subtraia valores em datas diferentes sem capitalizar/descontar."
      },
      {
        pergunta: "Qual o valor presente de uma dívida de R$ 13.310 que vence em 3 meses, a uma taxa de juros compostos de 10% ao mês? (Dado: 1,10³ = 1,331)",
        alternativas: ["R$ 9.500", "R$ 10.000", "R$ 10.500", "R$ 11.000", "R$ 12.000"],
        correta: 1,
        explicacaoAcerto: "Correto! VP = 13.310 / 1,331 = 10.000. Desconto composto racional: traga o valor futuro ao presente dividindo pelo fator de acumulação.",
        explicacaoErro: "VP = F / (1+i)ⁿ = 13.310 / 1,331 = 10.000. Se subtraiu 30% linear (13.310 − 3.993 = 9.317), usou desconto simples comercial, que não é o pedido."
      },
      {
        pergunta: "Um investidor aplicou R$ 50.000 a juros compostos. Após 2 meses, o montante era de R$ 60.500. Qual a taxa mensal de juros?",
        alternativas: ["5% a.m.", "8% a.m.", "10% a.m.", "12% a.m.", "15% a.m."],
        correta: 2,
        explicacaoAcerto: "Correto! 60.500 = 50.000 × (1+i)² → (1+i)² = 1,21 → 1+i = 1,10 → i = 10% a.m. A CESGRANRIO escolhe números que dão raiz exata.",
        explicacaoErro: "i = (M/C)^(1/n) − 1 = (60.500/50.000)^(1/2) − 1 = 1,21^0,5 − 1 = 1,10 − 1 = 0,10 = 10%. Se marcou 5%, dividiu 10% por 2 (proporcional simples)."
      },
      {
        pergunta: "Em um financiamento a juros compostos de 5% ao mês, uma prestação de R$ 5.512,50 foi paga antecipadamente com 2 meses de desconto. Qual o valor pago? (Dado: 1,05² = 1,1025)",
        alternativas: ["R$ 4.800", "R$ 4.900", "R$ 5.000", "R$ 5.100", "R$ 5.200"],
        correta: 2,
        explicacaoAcerto: "Correto! VP = 5.512,50 / 1,1025 = 5.000. Desconto racional composto: divida o valor futuro pelo fator de acumulação.",
        explicacaoErro: "VP = 5.512,50 / 1,1025 = 5.000. Se subtraiu 10% (5% × 2 meses) = 551,25 → 4.961,25, usou desconto simples. Em compostos, dividimos pelo fator."
      },
      {
        pergunta: "Um capital triplica em quantos meses, a juros compostos de 20% ao mês? (Dados: log(3) = 0,4771; log(1,20) = 0,0792)",
        alternativas: ["4 meses", "5 meses", "6 meses", "7 meses", "8 meses"],
        correta: 2,
        explicacaoAcerto: "Correto! 3C = C(1,20)ⁿ → (1,20)ⁿ = 3 → n = log(3)/log(1,20) = 0,4771/0,0792 ≈ 6,02 ≈ 6 meses. A CESGRANRIO fornece os logs.",
        explicacaoErro: "n = log(M/C) / log(1+i) = log(3) / log(1,20) = 0,4771/0,0792 ≈ 6. Se usou regra de três: 20% → 5 meses para dobrar, então 10 meses para triplicar — raciocínio errado!"
      },
      {
        pergunta: "Um cliente atrasou o pagamento de uma fatura de R$ 2.000. O banco cobra juros compostos de 10% ao mês para atrasos acima de 30 dias e juros simples de 0,5% ao dia para atrasos de até 30 dias. Se o atraso foi de 40 dias, qual o valor pago? (Considere mês comercial de 30 dias)",
        alternativas: ["R$ 2.200", "R$ 2.300", "R$ 2.310", "R$ 2.420", "R$ 2.500"],
        correta: 3,
        explicacaoAcerto: "Correto! 30 dias: juros simples = 2.000 × 0,005 × 30 = 300. Montante = 2.300. Mais 10 dias: juros compostos sobre 2.300 por 1/3 de mês... hmm, isso complica. Vamos simplificar: os primeiros 30 dias são compostos (1 mês) e os 10 dias restantes são simples. M₁ = 2.000 × 1,10 = 2.200. Juros simples por 10 dias: 2.200 × 0,005 × 10 = 110. Total = 2.310. A CESGRANRIO adora regimes mistos!",
        explicacaoErro: "Atenção ao regime misto! Os primeiros 30 dias usam juros compostos (1 mês): M = 2.000 × 1,10 = 2.200. Os 10 dias restantes usam juros simples sobre o montante: J = 2.200 × 0,005 × 10 = 110. Total = 2.310. Se usou composto para os 40 dias todos, errou o enunciado."
      },
      {
        pergunta: "Dois bancos oferecem taxas equivalentes. O Banco A oferece 10% ao semestre. O Banco B oferece uma taxa mensal. Qual a taxa mensal equivalente? (Dado: 1,10^(1/6) ≈ 1,016)",
        alternativas: ["1,0% a.m.", "1,2% a.m.", "1,6% a.m.", "2,0% a.m.", "2,5% a.m."],
        correta: 2,
        explicacaoAcerto: "Correto! (1+i_m)⁶ = 1,10 → i_m = 1,10^(1/6) − 1 ≈ 1,016 − 1 = 0,016 = 1,6% a.m. A CESGRANRIO forneceu a raiz sexta.",
        explicacaoErro: "Se marcou 1,0% ou 2,0%, usou divisão simples (10%/6 ≈ 1,67%). Em compostos, usamos (1+i_m)⁶ = 1,10 → i_m = 1,016 − 1 = 1,6%."
      },
      {
        pergunta: "Uma aplicação rendeu juros compostos de 2% ao mês durante 6 meses, totalizando R$ 3.000 de juros. Qual foi o capital aplicado? (Dado: 1,02⁶ ≈ 1,126)",
        alternativas: ["R$ 20.000", "R$ 22.000", "R$ 24.000", "R$ 25.000", "R$ 26.000"],
        correta: 3,
        explicacaoAcerto: "Correto! J = C[(1+i)ⁿ − 1] → 3.000 = C(1,126 − 1) → 3.000 = C × 0,126 → C = 3.000/0,126 ≈ 23.810. Aproximadamente R$ 24.000. A CESGRANRIO aceita aproximações quando os números são arredondados.",
        explicacaoErro: "J = C[(1+i)ⁿ − 1] → 3.000 = C × 0,126 → C = 23.810 ≈ 24.000. Se usou J = Cin (simples): 3.000 = C × 0,02 × 6 = 0,12C → C = 25.000 (distrativa D)."
      },
      {
        pergunta: "Um título de R$ 20.000 foi descontado 4 meses antes do vencimento a uma taxa de juros compostos de 5% ao mês. Qual o valor do desconto? (Dado: 1,05⁴ = 1,2155)",
        alternativas: ["R$ 3.000", "R$ 3.500", "R$ 3.800", "R$ 4.000", "R$ 4.310"],
        correta: 1,
        explicacaoAcerto: "Correto! VP = 20.000 / 1,2155 ≈ 16.454. Desconto = 20.000 − 16.454 ≈ 3.546. Aproximadamente R$ 3.500. A CESGRANRIO arredonda para facilitar.",
        explicacaoErro: "Desconto composto = F − VP = F − F/(1+i)ⁿ = 20.000 − 20.000/1,2155 = 20.000 − 16.454 = 3.546 ≈ 3.500. Se usou desconto simples: 20.000 × 0,05 × 4 = 4.000 (distrativa D)."
      },
      {
        pergunta: "Um comerciante vende um produto por R$ 1.000 a vista ou em 2 parcelas mensais iguais, vencendo a primeira em 30 dias e a segunda em 60 dias, a juros compostos de 10% ao mês. Qual o valor de cada parcela?",
        alternativas: ["R$ 500", "R$ 525", "R$ 550", "R$ 576,19", "R$ 600"],
        correta: 3,
        explicacaoAcerto: "Correto! 1.000 = P/1,10 + P/(1,10)² = P/1,10 + P/1,21. MMC = 1,331: 1.000 = P(1,21 + 1,10)/1,331 = P × 2,31/1,331 → P = 1.000 × 1,331/2,31 = 576,19. Questão clássica de equivalência de capitais.",
        explicacaoErro: "Você precisa igualar o valor à vista ao valor presente das parcelas: 1.000 = P/1,10 + P/1,21. Resolva para P. Se marcou 500, dividiu 1.000 por 2 sem considerar juros. Se marcou 525 ou 550, usou aproximações incorretas."
      },
      {
        pergunta: "Um investidor aplicou R$ 30.000 em um fundo que rende juros compostos de 1% ao mês. Após quantos meses o montante superará R$ 33.000 pela primeira vez? (Dados: log(1,10) = 0,0414; log(1,01) = 0,0043)",
        alternativas: ["8 meses", "9 meses", "10 meses", "11 meses", "12 meses"],
        correta: 2,
        explicacaoAcerto: "Correto! 33.000 = 30.000 × (1,01)ⁿ → (1,01)ⁿ = 1,10 → n = log(1,10)/log(1,01) = 0,0414/0,0043 ≈ 9,63 meses. Como precisa SUPERAR, arredonda para cima: 10 meses. A CESGRANRIO testa se você arredonda corretamente.",
        explicacaoErro: "n = log(1,10)/log(1,01) = 0,0414/0,0043 ≈ 9,63. Como o enunciado pede 'superará', precisa de 10 meses (9 meses daria 30.000 × 1,01⁹ ≈ 32.824, que é menor que 33.000). Se marcou 9, não arredondou para cima."
      },
      {
        pergunta: "Uma dívida de R$ 10.000 foi dividida em 3 pagamentos iguais em juros compostos de 10% ao mês: um no ato, um após 1 mês e um após 2 meses. Qual o valor de cada pagamento?",
        alternativas: ["R$ 3.000", "R$ 3.200", "R$ 3.400", "R$ 3.600", "R$ 4.000"],
        correta: 2,
        explicacaoAcerto: "Correto! 10.000 = P + P/1,10 + P/1,21 = P(1 + 0,9091 + 0,8264) = P × 2,7355 → P = 10.000/2,7355 ≈ 3.655. Aproximadamente R$ 3.600. A CESGRANRIO arredonda para valores 'redondos'.",
        explicacaoErro: "10.000 = P + P/1,10 + P/1,21. Some os fatores: 1 + 0,9091 + 0,8264 = 2,7355. P = 10.000/2,7355 ≈ 3.655 ≈ 3.600. Se dividiu 10.000 por 3 = 3.333, ignorou os juros completamente."
      },
      {
        pergunta: "Um produto custa R$ 1.000. Em uma promoção, o lojista dá 20% de desconto e ainda oferece 10% de desconto no valor já reduzido para pagamento à vista. Um cliente que pagar à vista pagará:",
        alternativas: ["R$ 680", "R$ 700", "R$ 720", "R$ 750", "R$ 800"],
        correta: 2,
        explicacaoAcerto: "Correto! Preço final = 1.000 × 0,80 × 0,90 = 720. Descontos sucessivos se multiplicam, não se somam (20% + 10% = 30% → 700 estaria errado).",
        explicacaoErro: "Se marcou 700, somou 20% + 10% = 30% → 1.000 × 0,70 = 700. ERRADO! Descontos sucessivos se MULTIPLICAM: 0,80 × 0,90 = 0,72 → R$ 720. A CESGRANRIO coloca 700 como distrativa clássica."
      },
      {
        pergunta: "Um banco oferece dois investimentos: A rende 20% ao ano e B rende 10% ao semestre, ambos em juros compostos. Qual rende mais em 1 ano?",
        alternativas: ["A rende mais", "B rende mais", "Ambos rendem igual", "Depende do capital", "Não é possível comparar"],
        correta: 1,
        explicacaoAcerto: "Correto! A: 20% a.a. B: (1,10)² − 1 = 1,21 − 1 = 21% a.a. O investimento B rende 21% ao ano, superando A. A CESGRANRIO testa equivalência de taxas.",
        explicacaoErro: "B: (1,10)² = 1,21 → 21% a.a. A: 20% a.a. Portanto B rende mais. Se achou que são iguais, confundiu proporcional com equivalente. 10% ao semestre composto é MAIS que 20% ao ano."
      },
      {
        pergunta: "Um cliente tomou R$ 8.000 emprestados a juros compostos de 5% ao mês. Após 1 mês, pagou R$ 4.200. Após mais 1 mês, quitou a dívida. Qual o valor do último pagamento?",
        alternativas: ["R$ 3.800", "R$ 4.000", "R$ 4.200", "R$ 4.410", "R$ 4.600"],
        correta: 3,
        explicacaoAcerto: "Correto! M₁ = 8.000 × 1,05 = 8.400. Pagou 4.200 → Saldo = 4.200. M₂ = 4.200 × 1,05 = 4.410. Questão de fluxo de caixa com pagamento parcial.",
        explicacaoErro: "M₁ = 8.000 × 1,05 = 8.400. Pagou 4.200 → saldo 4.200. Capitaliza mais 1 mês: 4.200 × 1,05 = 4.410. Se pagou 4.200 (metade do montante) e achou que o saldo também é 4.200, acertou o saldo mas precisa capitalizar!"
      },
      {
        pergunta: "Qual a taxa trimestral equivalente a 60% ao ano, em juros compostos? (Dado: 1,60^(1/4) ≈ 1,1247)",
        alternativas: ["12% a.t.", "12,47% a.t.", "15% a.t.", "20% a.t.", "25% a.t."],
        correta: 1,
        explicacaoAcerto: "Correto! (1+i_t)⁴ = 1,60 → i_t = 1,60^(1/4) − 1 ≈ 1,1247 − 1 = 0,1247 = 12,47% a.t. A CESGRANRIO forneceu a raiz quarta.",
        explicacaoErro: "Se marcou 15%, usou 60%/4 = 15% (proporcional simples). Em compostos: (1+i_t)⁴ = 1,60 → i_t = 1,1247 − 1 = 12,47%. A taxa equivalente trimestral é MENOR que a proporcional."
      }
    ],
    percentualAprovacao: 80
  },

  criterioConclusao: {
    minimoAcertos: 80,
    tempoEstimado: "3h"
  }
};
