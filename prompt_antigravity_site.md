# Prompt Mestre para o Antigravity (v4)

Cole o bloco abaixo no Antigravity **somente quando os valores e as definições do médico estiverem fechados**. Substitua os campos `[ ... ]` pelas respostas dele.

```markdown
Crie um site one-page médico bilíngue (Espanhol padrão + Português, com seletor ES | PT) para o Dr. Matheus Macedo, médico de emagrecimento e performance, que atende APENAS no Paraguai. O objetivo é converter visitantes em agendamentos, com manutenção mínima e sem suporte técnico.

## 1. IDENTIDADE VISUAL
Aparência médica, sofisticada e acolhedora. A fotografia do médico é o principal ponto de atenção; o design complementa a foto sem competir com ela.

Paleta oficial:
- Primária: #0B2239 (azul-marinho)
- Secundária: #214F70 (azul petróleo)
- Complementar: #94B7CC (azul acinzentado)
- Sofisticação: #C7B39F (champagne)
- Fundo: #F8F7F3 (branco quente)

Distribuição orientativa (não rígida): ~50% fundos claros, ~30% azul-marinho, ~15% azul petróleo e acinzentado, ~5% champagne.

Tipografia: Cormorant Garamond nos títulos; Inter em textos e botões.
Botões: azul petróleo #214F70, texto branco, cantos discretamente arredondados (8px), transição suave no hover.
Ícones e divisórias: traço fino em #94B7CC. Champagne apenas em pequenos detalhes, sem excesso de dourado.

IMPORTANTE: o Hero (primeira dobra) deve ter FUNDO AZUL-MARINHO #0B2239 com a foto do médico integrada, porque as fotos dele são escuras. O restante da página usa o fundo claro #F8F7F3. Use as fotos fornecidas em [pasta/arquivos das fotos]; não use imagens genéricas.

## 2. MODALIDADES E COBERTURA
- Consulta Online (videochamada, somente para pacientes que estejam no Paraguai).
- Atendimento a Domicílio em: Ciudad del Este, Minga Guazú, Hernandarias e Presidente Franco.
- NÃO mencionar Foz do Iguaçu nem atendimento no Brasil. Incluir aviso: "Atendimento exclusivo para pacientes no Paraguai".

## 3. VALORES (em Gs., exibição sucinta)
Mostrar 3 blocos, sem excesso de informação:
1. Consulta Online: [valor]
2. Consulta a Domicílio, com o valor TOTAL por cidade (consulta + deslocamento):
   - Ciudad del Este: [valor] | Presidente Franco: [valor] | Hernandarias: [valor] | Minga Guazú: [valor]
3. Procedimentos / Botox: [a partir de valor | valor após avaliação]

Aviso sempre visível perto dos valores: "A consulta inclui avaliação clínica, solicitação de exames e prescrição individualizada. Os medicamentos não estão inclusos e são adquiridos pelo paciente na farmácia de sua escolha."

Incluir pequeno bloco "Pagamento e cancelamento": formas de pagamento [..], sinal [..], política de cancelamento e remarcação [..].

## 4. TRIAGEM EM FUNIL + AGENDAMENTO (SEM BACKEND)
NÃO use Google Forms. A triagem é um funil em passos DENTRO do site, seção #triagem, no mesmo modelo do briefing de https://gdsdesign.site/#briefing e da cotação de https://www.rotacde.site/: cartão com indicador de etapas (bolinhas e barra de progresso), cartões de opção clicáveis com ícone, botão "Próximo" desativado até o passo ser válido, botão "Voltar", e envio final por mensagem pronta no WhatsApp (wa.me com texto codificado, em ES ou PT conforme o idioma ativo). Reaproveite essa estrutura visual, mas com a identidade deste projeto.

Passos do funil (uma pergunta por tela, alvos de toque de 48px):
1. Modalidade: cartões "Consulta online" / "Atendimento a domicílio" (pré-selecionada se o visitante veio de um cartão). Aviso de emergência visível.
2. Cidade (só domicílio): Ciudad del Este, Presidente Franco, Hernandarias, Minga Guazú. Ao escolher, mostrar o VALOR TOTAL da cidade (como a cotação do rotacde). No online, pular o passo e mostrar o valor da consulta online.
3. Objetivo principal: Emagrecer, Alta performance, Botox, Outro.
4. Sobre você: idade, peso e altura (obrigatórios); doenças, medicamentos em uso e alergias (opção "Prefiro falar na consulta"); gravidez ou amamentação (Sim / Não / Não se aplica).
5. Contato e consentimento: nome; endereço aproximado (só domicílio); caixa de consentimento OBRIGATÓRIA para uso dos dados de saúde, com link para a política de privacidade; caixa opcional de marketing por WhatsApp, DESMARCADA por padrão.
- Caixa "Estou com sintomas graves agora (dor no peito, falta de ar…)": se marcada, bloquear o envio e mostrar "Procure um pronto-socorro imediatamente ou ligue 911".
- Idade mínima [18]: abaixo disso, orientar a falar direto com o médico.
- Não pedir e-mail nem o WhatsApp do paciente (o médico já vê o número de quem envia). Não pedir upload de exames: orientar o envio pelo WhatsApp.
- Tela final com dois botões: "Enviar triagem pelo WhatsApp" (abre wa.me/[número] com o resumo: modalidade, cidade, valor exibido, objetivo, idade/peso/altura, doenças, medicamentos, alergias, gravidez/amamentação, nome, endereço, consentimento) e "Escolher meu horário" (link da página de agendamento do Google Agenda: [link da agenda]). Uma única página de agendamento, só para a consulta de avaliação.
- PRIVACIDADE: NÃO salvar nenhuma resposta em localStorage, cookie, banco de dados ou planilha (diferente do briefing do gdsdesign, que grava o lead no localStorage). As respostas existem apenas na mensagem enviada. Zerar o formulário ao terminar.
- Botão secundário de WhatsApp [número] com mensagem pré-preenchida por modalidade e cidade, apenas para dúvidas.
- Número do WhatsApp, link da agenda, valores e cidades em UM único arquivo de configuração. Sem banco de dados, painel administrativo ou servidor próprio. Não replique o painel de preços em localStorage do rotacde (ele só altera o navegador de quem edita). Site estático, fácil de hospedar e manter.

## 5. ESTRUTURA DA PÁGINA
1. Header fixo: nome do médico, seletor ES | PT, botão "Agendar".
2. Hero azul-marinho: foto do médico, proposta de valor em uma frase, 2 botões (Consulta Online / Atendimento a Domicílio).
3. Credenciais: formação e registro profissional no Paraguai [dados].
4. Como funciona (4 passos): avaliação inicial; protocolo individual; acompanhamento mensal; evolução medida.
5. Modalidades e preços (cartões Online e Domicílio com as 4 cidades).
6. Procedimentos e Botox: texto sucinto, sem promessas de resultado e sem fotos de antes e depois.
7. Depoimentos ou perguntas reais de pacientes [somente com autorização; deixar pronto para preencher].
8. Triagem e agendamento (funil da seção 4), com o título "Agende sua consulta em 1 minuto". Todos os botões "Agendar" rolam até aqui.
9. FAQ curto: medicamentos, pagamento, cancelamento, preparo para a visita a domicílio, cidades atendidas, para onde vão as respostas da triagem (direto ao WhatsApp do médico; o site não guarda).
10. Rodapé: registro profissional, contato, mapa, aviso de emergência, aviso ético (conteúdo informativo, não substitui consulta), política de privacidade e consentimento de dados de saúde.

## 6. SEO, LOCAL E MEDIÇÃO
- Títulos, meta descriptions e uma única H1 por idioma. Textos citando as 4 cidades. Dados estruturados (schema.org Physician/MedicalBusiness) com área de atendimento.
- Eventos de clique rastreados (GA4 / Google Tag Manager) nos botões de agendamento e WhatsApp, e do funil (início, passo concluído, triagem enviada). NUNCA enviar o conteúdo das respostas de saúde para a medição. Banner de cookies com Consent Mode negado por padrão (como no rotacde).
- Mobile-first, carregamento rápido, imagens otimizadas, acessibilidade e contraste adequados.

## 7. CUIDADOS ÉTICOS NO TEXTO
- Sem promessas de resultado, sem antes e depois, sem linguagem sensacionalista.
- Evitar frases como "emagrecimento garantido". Preferir linguagem neutra e responsável sobre acompanhamento médico.
```
