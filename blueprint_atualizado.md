# Blueprint Estratégico do Site — Dr. Matheus Macedo (v4.0)

**Atualizado em 20/10/2026** · Mercado: apenas Paraguai (Atendimento presencial a domicílio exclusivo em Ciudad del Este e Consulta Online para todo o Paraguai)

> Documento de planejamento. O site ainda não será criado. Reúne o blueprint v3.0 e o que foi aproveitado do blueprint de 30 páginas, já adaptado às regras do projeto.
>
> **Mudança da v4.0 (desta revisão):** a triagem **não usa Google Forms**. Ela é um funil em passos dentro do próprio site, no mesmo modelo do briefing de [gdsdesign.site/#briefing](https://gdsdesign.site/#briefing) e do formulário de cotação de [rotacde.site](https://www.rotacde.site/). Ver seção 3.

---

## 1. Decisões já fechadas

* **Atendimento:** consulta online (videochamada) e consulta a domicílio. Não existe consultório.
* **Onde:** apenas Paraguai. Foz do Iguaçu e o Brasil ficam fora do escopo e o site não promete atendimento ali.
* **Agenda:** somente Google Agenda gratuito.
* **Triagem:** funil em passos dentro do site, que termina em mensagem pronta no WhatsApp (sem Google Forms).
* Sem login do paciente e sem suporte de TI.
* **Idiomas:** espanhol (principal) e português. Confirmar com o médico.
* **Moeda:** guaraníes (Gs.) como moeda base, aceitando também Real (R$) e Dólar (USD).
* **WhatsApp:** +595 992 135 077 (link `wa.me/595992135077`) atualizado para o número oficial do Paraguai.
* **Quem lê as mensagens:** o Dr. Matheus Macedo e o(a) assistente de atendimento da clínica, ambos sob rigoroso sigilo médico e confidencialidade.
* **Idade mínima da triagem:** 18 anos. Menores de 18 anos são orientados a falar diretamente via WhatsApp acompanhados por responsável legal.
* **Proteção de dados:** em conformidade com a legislação aplicável no Paraguai (Lei 7593/2025) e normas de sigilo da prática médica. Os dados não são gravados no site, apenas enviados na mensagem consentida pelo paciente.
* **Função do site:** levar o paciente do Google ou do Instagram ao agendamento em menos de 90 segundos, sem depender de suporte.

### Proposta de valor
* **ES:** "Medicina de alto rendimiento y control de peso con seguimiento individual. Consulta online o atención en su domicilio."
* **PT:** "Medicina de alta performance e controle de peso com acompanhamento individual. Consulta online ou atendimento na sua casa."

---

## 2. Design system

| Papel | Cor | Uso |
|---|---|---|
| Fundo (~50%) | `#F8F7F3` | Fundo geral (linho claro) |
| Primária (~30%) | `#0B2239` | Hero, rodapé, títulos, blocos de autoridade |
| Secundária (~15%) | `#214F70` | Botões e ações |
| Complementar | `#94B7CC` | Ícones, divisórias de 1px |
| Sofisticação (~5%) | `#C7B39F` | Detalhes de acabamento |

As proporções são orientação estética, não regra rígida.

* **Tipografia:** Cormorant Garamond nos títulos; Inter em textos, menus e botões (17 a 18 px no celular, entrelinha 1,6).
* **Botão primário:** `#214F70`, texto branco, cantos de 8 px, transição suave no hover. Secundário: contorno fino em `#214F70`.
* **Hero em azul-marinho:** as fotos do médico são escuras, então o Hero usa `#0B2239` com a foto integrada e o resto da página segue no linho.
* **Fotos:** manter a luz de estúdio dos dois retratos (terno no Hero, jaleco com estetoscópio em "Quem cuida de você"). Sem banco de imagens genérico.
* **Celular primeiro:** barra inferior fixa com "Agendar" e "WhatsApp"; botões com no mínimo 48 px de altura; contraste de texto acima de 4,5:1.
* **Idioma lembrado:** quem escolhe um idioma uma vez volta nele; o idioma do navegador sugere a primeira visita, sem redirecionamento forçado.

---

## 3. Agendamento e triagem (Google Agenda gratuito + funil no site)

### 3.1 O limite da conta gratuita
Pelas fontes consultadas, uma conta pessoal do Google cria uma única página de agendamento, e recursos como lembretes automáticos por e-mail e disponibilidade personalizável exigem Workspace ou Google One. Confirmar na conta do Dr. Matheus. Por isso o plano de "uma agenda por cidade" do v3.0 foi substituído pelo desenho abaixo.

### 3.2 Desenho adotado

1. O site mostra os cartões de atendimento com o valor total já fechado: Online, e Domicílio com as 4 cidades.
2. O paciente toca em "Agendar" e o site rola até a seção **Triagem** (`#triagem`), com a modalidade já pré-selecionada se ele veio de um cartão.
3. Ele responde ao **funil em passos** (seção 3.4). Nenhum dado é guardado no site ou no navegador.
4. No último passo, o botão **"Enviar triagem pelo WhatsApp"** abre o WhatsApp do médico com um **resumo pronto** (modelo do briefing do gdsdesign). O paciente só toca em enviar.
5. A mesma tela de sucesso mostra o botão **"Escolher meu horário"**, que abre a página de agendamento do Google. Ela serve só para a consulta de avaliação.
6. O médico (ou assistente) responde pelo WhatsApp com o link do horário (caso o paciente não tenha agendado ainda) e confirma: no online, envia o link do Google Meet; no domicílio, pede endereço completo, referência e contato do dia.
7. Procedimentos (Botox, soroterapia, aplicações) não são agendados pelo site. Entram depois da avaliação médica, marcados pelo médico direto na agenda.

**Por que a triagem vem antes do horário:** o paciente já chega ao médico com objetivo, saúde e cidade informados. Isso economiza tempo na consulta e filtra casos que não são para ele.

**Risco a tratar:** o paciente pode enviar o WhatsApp e não voltar à tela para escolher o horário. Por isso o link da agenda também vai na primeira resposta do médico (mensagem rápida na seção 3.6).

**Alternativa:** se o médico aceitar pagar um plano Workspace, volta a ser possível uma página por modalidade e por cidade.

### 3.3 Regras de agenda
* Intervalo antes e depois das consultas, para deslocamento a domicílio. Ponto de partida: 30 a 45 min. Como a página é única, o intervalo vale para todas; o médico pode bloquear horários direto na agenda quando houver visita.
* Antecedência mínima e limite diário de consultas.
* Dias e horários bloqueados (viagens, folgas) feitos na própria agenda; o site não precisa mudar.
* **Urgência:** o site não agenda urgência. Aviso fixo: "Em emergência, ligue 911 ou procure um pronto-socorro."
* **Cancelamento e remarcação:** política em 3 linhas, visível antes de confirmar. O paciente reagenda pelo link do e-mail de confirmação do Google.

### 3.4 Triagem em funil (modelo gdsdesign / rotacde)

**O que se aproveita dos dois sites de referência**

| Elemento | Origem | Uso aqui |
|---|---|---|
| Cartão do funil com indicador de etapas (bolinhas e barra de progresso) | gdsdesign | Passos 1 a 5 |
| Cartões de opção clicáveis com ícone e rótulo | gdsdesign | Modalidade, cidade, objetivo |
| Botão "Próximo" desativado até o passo ser válido; botão "Voltar" | gdsdesign | Mesmo comportamento |
| Valor total aparece ao escolher as opções, antes de continuar | rotacde (cotação rápida) | Valor da consulta aparece ao escolher a cidade |
| Botão final que abre o WhatsApp com mensagem pronta, em PT ou ES | os dois | Envio da triagem |
| Selo de privacidade ao lado do funil | gdsdesign | "Seus dados são confidenciais" |
| Número do WhatsApp e textos em uma única configuração | os dois | Facilita a troca do número |
| Banner de cookies e Google Consent Mode | rotacde | Para a medição opcional |

**Passos do funil** (cada tela tem uma pergunta, no máximo 2 ou 3 campos, alvos de toque de 48 px)

| # | Passo | Campos | Regra |
|---|---|---|---|
| 1 | Modalidade | Cartões: **Consulta online** (350.000 Gs.) / **Atendimento a domicílio em Ciudad del Este** (450.000 Gs.) | Obrigatório. Aviso de emergência visível ("Em emergência, ligue 911"). Se veio de um cartão, já vem selecionado. |
| 2 | Objetivo principal | Cartões: Emagrecer, Alta performance, Botox, Outro | Obrigatório. Se "Outro", um campo curto aparece. |
| 3 | Sobre você | Idade, peso, altura; doenças que já tem; medicamentos em uso; alergias; gravidez ou amamentação (Sim / Não / Não se aplica) | Idade, peso e altura obrigatórios. Doenças, medicamentos e alergias com a opção "Prefiro falar na consulta". Pedir só o necessário. |
| 4 | Contato e consentimento | Nome; endereço em Ciudad del Este (só domicílio); caixa de consentimento; caixa opcional de marketing | **Consentimento obrigatório** para o envio. Consentimento de marketing separado e **desmarcado por padrão**. |

**Passo extra de segurança (no passo 4 ou 5):** caixa "Estou com sintomas graves agora (dor no peito, falta de ar…)". Se marcada, o botão de enviar é trocado por: "Procure um pronto-socorro imediatamente ou ligue 911". O funil não segue.

**Regras do funil**
* **Sem e-mail e sem pedir o WhatsApp do paciente:** o médico já vê o número de quem envia a mensagem. Menos campos, menos atrito.
* **Idade:** definir com o médico a idade mínima (sugestão: 18 anos). Abaixo disso o funil orienta a falar direto com ele.
* **Exames anteriores:** não há upload. A mensagem final orienta enviar fotos ou PDFs pelo WhatsApp.
* **Sem armazenamento no site:** diferente do briefing do gdsdesign, que grava o lead no `localStorage`, aqui **nenhuma resposta de saúde é salva** no navegador, no site ou em banco de dados. Em celulares compartilhados isso exporia dados de saúde, e o médico nem veria esses dados. As respostas existem só na mensagem enviada.
* **Limpeza:** ao terminar, o formulário é zerado e o histórico de passos é descartado.
* **Medição:** os eventos de medição registram só o avanço de passo e o envio, nunca o conteúdo das respostas.
* **Idioma:** o texto do funil e a mensagem do WhatsApp seguem o idioma escolhido (ES ou PT).

**Modelo da mensagem enviada ao WhatsApp (PT)**

```
Olá, Dr. Matheus! Gostaria de agendar uma consulta. Seguem minhas informações:

📋 *Atendimento*
• Modalidade: [Online / A domicílio]
• Cidade: [cidade]
• Valor exibido: [valor total]

🎯 *Objetivo:* [emagrecer / performance / Botox / outro]

🩺 *Saúde*
• Idade / Peso / Altura: [..] / [..] / [..]
• Doenças: [..]
• Medicamentos em uso: [..]
• Alergias: [..]
• Gravidez ou amamentação: [Sim / Não / Não se aplica]

👤 *Contato*
• Nome: [nome]
• Endereço aproximado: [bairro / referência]

✅ Autorizo o uso destes dados para o meu atendimento.
```

A versão em espanhol tem a mesma estrutura ("¡Hola, Dr. Matheus! Me gustaría agendar una consulta…").

### 3.5 WhatsApp
* **Triagem:** a mensagem do funil é o canal principal de contato.
* **Botão de dúvidas:** botão separado, com mensagem pré-preenchida por modalidade e cidade, em ES e em PT. Serve para quem não quer responder ao funil. Exemplo: "Hola, Dr. Matheus. Quisiera información sobre la atención a domicilio en [ciudad]."
* Usar o **WhatsApp Business (grátis)** com respostas rápidas para as mensagens padrão abaixo.

### 3.6 Mensagens padrão (respostas rápidas)
Levam só nome, data e hora. Nunca citam o serviço quando ele revelar condição de saúde, e nunca o diagnóstico.

| Momento | Português | Español |
|---|---|---|
| Triagem recebida | Olá, [nome]! Recebi suas informações. Escolha seu horário aqui: [link da agenda Google]. | ¡Hola, [nombre]! Recibí tu información. Elige tu horario aquí: [enlace de la agenda Google]. |
| Confirmação online | Olá, [nome]! Sua consulta com o Dr. Matheus Macedo está confirmada para [dia], às [hora]. Seu link de acesso: [link do Meet]. Para remarcar: [link]. | ¡Hola, [nombre]! Tu consulta con el Dr. Matheus Macedo está confirmada para el [día], a las [hora]. Tu enlace de acceso: [enlace de Meet]. Para reagendar: [enlace]. |
| Confirmação a domicílio | Olá, [nome]! Sua consulta está confirmada para [dia], às [hora]. Para a visita, me envie o endereço completo, uma referência e um contato para o dia. | ¡Hola, [nombre]! Tu consulta está confirmada para el [día], a las [hora]. Para la visita, envíame la dirección completa, una referencia y un contacto para ese día. |
| Véspera | Lembrete: sua consulta é amanhã, às [hora]. Precisa remarcar? [link] | Recordatorio: tu consulta es mañana, a las [hora]. ¿Necesitas reagendar? [enlace] |
| Pós-consulta | Obrigado pela confiança. Seu retorno está marcado para [dia], às [hora]. | Gracias por tu confianza. Tu control está agendado para el [día], a las [hora]. |
| Avaliação (2 dias depois) | Se quiser, conte como foi sua experiência: [link do Google]. | Si quieres, cuéntanos cómo fue tu experiencia: [enlace de Google]. |

Como o plano gratuito pode não enviar lembretes automáticos, a véspera é enviada pelo médico ou por um assistente, por WhatsApp.

---

## 4. Valores, pagamento e medicamentos

### Serviços exibidos (3 blocos)
1. **Consulta Online:** valor fechado e único.
2. **Consulta a Domicílio:** valor total por cidade (consulta + deslocamento), sem cálculo para o paciente.
3. **Procedimentos e Botox:** "a partir de" ou "valor definido após avaliação médica", porque a quantidade de unidades varia por paciente.

### Aviso sobre medicamentos (logo abaixo dos valores)
* **PT:** "A consulta inclui avaliação clínica completa, solicitação de exames, plano alimentar e prescrição médica individualizada. Os medicamentos não estão inclusos e são adquiridos pelo paciente na farmácia de sua escolha."
* **ES:** "La consulta incluye evaluación clínica completa, solicitud de exámenes, plan alimentario y prescripción médica individualizada. Los medicamentos no están incluidos y los adquiere el paciente en la farmacia de su elección."

### Pagamento e cancelamento (a definir com o médico)
* **Formas de pagamento:** dinheiro, transferência, Tigo Money, cartão.
* **Moeda:** Gs. como principal; US$ e R$ só se ele aceitar. Preços em outras moedas seriam fixos, sem atualização automática.
* **Sem sinal de reserva online nesta versão** (exigiria sistema de pagamento).
* **Cancelamento e remarcação:** prazo e se há taxa de deslocamento em caso de falta.
* **Texto no site:** 3 linhas, uma para cada ponto.

---

## 5. Homepage (one-page ES | PT)

O site é uma página única. Cada bloco termina em "Agendar" ou "WhatsApp".

| # | Bloco | Pergunta que responde |
|---|---|---|
| 1 | Barra fixa | Como falo com ele? |
| 2 | Hero | O que ele faz por mim? |
| 3 | Faixa de autoridade | Posso confiar? |
| 4 | Atendimento e valores | Como é e quanto custa? |
| 5 | Protocolos e procedimentos | Qual serviço é o meu? |
| 6 | Como funciona | O que acontece depois que marco? |
| 7 | Quem cuida de você | Quem é ele? |
| 8 | Depoimentos (quando houver) | Funciona com gente como eu? |
| 9 | **Triagem e agendamento (funil)** | Como marco? |
| 10 | Perguntas frequentes | E se...? |
| 11 | Rodapé | Registro, contato, aviso ético |

> O bloco 9 (funil) fica antes das perguntas frequentes. Todos os botões "Agendar" do site rolam até ele.

### Bloco 1 · Barra fixa
Menu ES: Protocolos · Procedimientos · El doctor · Agendar · Contacto. Menu PT: Protocolos · Procedimentos · Sobre · Agendar · Contato. Botão "Agendar consulta" ao lado do ícone do WhatsApp e do seletor ES | PT. No celular, barra inferior fixa com Agendar e WhatsApp.

### Bloco 2 · Hero (azul-marinho)
* **ES, título:** Medicina de alto rendimiento y control de peso, con acompañamiento médico real.
* **ES, subtítulo:** Exámenes, protocolo individual y control mensual con el Dr. Matheus Macedo. Online o en su domicilio.
* **ES, botões:** Agendar consulta online · Atención a domicilio
* **PT, título:** Medicina de alta performance e controle de peso, com acompanhamento médico de verdade.
* **PT, subtítulo:** Exames, protocolo individual e retorno mensal com o Dr. Matheus Macedo. Online ou na sua casa.
* **PT, botões:** Agendar consulta online · Atendimento a domicílio
* **Linha de confiança:** Atención en español y portugués · Online y a domicilio · Agenda abierta / Atendimento em espanhol e português · Online e a domicílio · Agenda aberta

### Bloco 3 · Faixa de autoridade
Quatro indicadores verificáveis; publicar só o que for real.
* [nº] anos de prática médica · [nº] años de práctica médica
* [nº] pacientes acompanhados · [nº] pacientes acompañados
* Registro profissional: [número e órgão] · Registro profesional: [número y órgano]
* Online e a domicílio · Online y a domicilio

### Bloco 4 · Atendimento e valores
Dois cartões com a mesma estrutura: nome, uma frase, valor total e botão.
* **Online:** Consulta por videochamada (Google Meet), para pacientes que estão no Paraguai. Valor: [a definir].
* **A domicílio:** O médico vai até você. Seletor das 4 cidades; ao escolher, aparece o valor total daquela cidade. Valor: [a definir por cidade].
* Aviso sobre medicamentos logo abaixo (seção 4).
* Aviso: "Atendimento disponível apenas para pacientes que estão no Paraguai." / "Atención disponible solo para pacientes que se encuentran en Paraguay."

### Bloco 5 · Protocolos e procedimentos
Ver seção 6. Os cartões se expandem na própria página, sem criar páginas separadas.

### Bloco 6 · Como funciona (4 passos)
1. **Avaliação inicial / Evaluación inicial.** Consulta, histórico e exames para entender o seu ponto de partida. / Consulta, historial y exámenes para entender tu punto de partida.
2. **Protocolo individual / Protocolo individual.** Dieta, treino e condutas definidos para o seu objetivo. / Dieta, entrenamiento y conductas definidos para tu objetivo.
3. **Acompanhamento mensal / Control mensual.** Retorno todo mês para medir, revisar e ajustar. / Control cada mes para medir, revisar y ajustar.
4. **Evolução medida / Evolución medida.** Avaliação física e exames mostram o que mudou. / La evaluación física y los exámenes muestran lo que cambió.

### Bloco 7 · Quem cuida de você
* **PT:** O Dr. Matheus Macedo é médico [formação, instituição, ano] e [especialização, se houver]. Seu trabalho une saúde, equilíbrio e alta performance, com acompanhamento próximo e decisões baseadas em exames.
* **ES:** El Dr. Matheus Macedo es médico [formación, institución, año] y [especialización, si la hay]. Su trabajo une salud, equilibrio y alto rendimiento, con seguimiento cercano y decisiones basadas en exámenes.
* **Citação (do material do médico), PT:** "Dedico-me a conduzir cada paciente rumo à sua melhor versão, unindo saúde, equilíbrio e alta performance."
* **ES:** "Me dedico a guiar a cada paciente hacia su mejor versión, uniendo salud, equilibrio y alto rendimiento."
* **Foto:** retrato de jaleco com estetoscópio.

### Bloco 8 · Depoimentos
Três depoimentos autorizados por escrito, com iniciais, cidade e tempo de acompanhamento. Sem antes e depois e sem promessa de resultado. Enquanto não houver depoimentos, usar a nota do Google (quando existir) e uma frase sobre o método: "acompanhamento mensal medido por exames e avaliação física".

### Bloco 9 · Triagem e agendamento (funil)
* **Título ES:** Agenda tu consulta en 1 minuto. **PT:** Agende sua consulta em 1 minuto.
* **Texto ao lado do funil:** "Responda a algumas perguntas para o Dr. Matheus conhecer seu caso antes da consulta. Suas informações são confidenciais." / "Responde algunas preguntas para que el Dr. Matheus conozca tu caso antes de la consulta. Tu información es confidencial."
* Cartão do funil com indicador de etapas e os 5 passos da seção 3.4.
* **Tela final:** botões "Enviar triagem pelo WhatsApp" e "Escolher meu horário" (agenda Google).
* **Aviso fixo:** "Em emergência, ligue 911 ou procure um pronto-socorro." / "En emergencia, llame al 911 o acuda a urgencias."

### Bloco 11 · Rodapé
Nome do médico, WhatsApp, Instagram @dr.matheusmacedo_, áreas atendidas, registro profissional, links de privacidade e termos, seletor ES | PT. Texto legal: "As informações deste site não substituem consulta médica. Em emergência, ligue 911." / "La información de este sitio no sustituye la consulta médica. En emergencia, llame al 911."

---

## 6. Protocolos e procedimentos (copy)

Tom de consultório sério: explica, orienta e nunca promete resultado. "Varia de pessoa para pessoa."

### Alta performance
* **PT:** Saúde, treino e metabolismo acompanhados de perto, com exames e retorno mensal. **ES:** Salud, entrenamiento y metabolismo acompañados de cerca, con exámenes y control mensual.
* **Para quem é:** quem treina e quer evoluir com segurança; quem sente queda de energia, disposição ou recuperação e quer investigar a causa; quem prefere decisões baseadas em exames.
* **O que inclui:** acompanhamento mensal; informações sobre treinos; dieta nutricional; avaliação física; exames laboratoriais; reposição hormonal quando houver indicação médica.

### Emagrecimento
* **PT:** Emagrecimento com acompanhamento médico. Consulta mensal, gestão de hábitos, dieta e treino. Quando indicado, tratamento supervisionado pelo médico. **ES:** Adelgazamiento con acompañamiento médico. Consulta mensual, gestión de hábitos, dieta y entrenamiento. Cuando esté indicado, tratamiento supervisado por el médico.
* **O que inclui:** consulta mensal; gestão de hábitos; dieta nutricional; informações sobre treino; avaliação física; exames laboratoriais; tratamento medicamentoso somente com indicação após avaliação.
* Sem vitrine de medicamento, sem preço de dose e sem promessa de quilos perdidos.

### Procedimentos
Sempre após avaliação médica.
* **Soroterapia:** aplicação intravenosa de vitaminas, minerais e hidratação, indicada e supervisionada pelo médico após avaliação. / Aplicación intravenosa de vitaminas, minerales e hidratación, indicada y supervisada por el médico tras evaluación.
* **Peptídeos:** aplicação indicada e acompanhada pelo médico, dentro de um protocolo individual. Nenhum peptídeo é nomeado até o médico confirmar o que é autorizado no Paraguai.
* **Reposição hormonal:** indicada após consulta e exames laboratoriais, com acompanhamento periódico. / Indicada tras consulta y exámenes de laboratorio, con control periódico.
* **Botox:** aplicação médica de toxina botulínica, com avaliação do rosto e resultado natural. / Aplicación médica de toxina botulínica, con evaluación del rostro y resultado natural. O médico confirma quais indicações realiza e a duração; a página só lista o que ele de fato faz.

### "Não sei por onde começar"
Um cartão opcional: "Escreva para o Dr. Matheus e ele indica o caminho" com botão de WhatsApp. É a versão simples do quiz do blueprint de 30 páginas. (O funil de triagem já cobre boa parte dessa função.)

---

## 7. Perguntas frequentes

* **Atende online?** Sim, por videochamada, para pacientes que estão no Paraguai. / Sí, por videollamada, para pacientes que se encuentran en Paraguay.
* **Onde atende a domicílio?** Exclusivamente em Ciudad del Este. Para as demais regiões do Paraguai, o atendimento é realizado via Consulta Médica Online (Telemedicina). O valor total (450.000 Gs.) já inclui a taxa de deslocamento em Ciudad del Este.
* **O que preciso preparar para a visita a domicílio?** Um local tranquilo, boa iluminação e exames anteriores à mão.
* **O que preciso para a consulta online?** Internet estável, câmera e microfone. O link do Meet chega por WhatsApp.
* **Preciso fazer exames antes?** Os exames fazem parte do acompanhamento. Na primeira consulta o médico define quais pedir conforme o seu objetivo. Exames anteriores podem ser enviados por WhatsApp.
* **Os medicamentos estão inclusos?** Não. A consulta prescreve; você compra na farmácia de sua escolha.
* **Todo paciente usa medicação?** Não. Qualquer medicamento ou aplicação só é indicado após avaliação médica, exames e conversa sobre riscos e benefícios. Muitos protocolos começam por hábitos, dieta e treino.
* **Como funciona o retorno mensal?** Todo mês há uma consulta para revisar resultados e ajustar dieta, treino e protocolo. O próximo horário é combinado ao final de cada consulta.
* **Quanto custa e como pago?** O valor aparece antes de você confirmar. [Preencher: formas de pagamento.]
* **E se eu precisar cancelar?** [Preencher: prazo e regra de remarcação.]
* **Para onde vão as informações que eu respondo na triagem?** Elas seguem direto para o WhatsApp do Dr. Matheus, na mensagem que você mesmo envia. O site não guarda suas respostas.

---

## 8. Presença local e medição (sem TI)

* **Google Meu Negócio:** perfil com área de atendimento (as 4 cidades) e sem endereço residencial público. Como não há local fixo, o Google pode exigir verificação mais trabalhosa, como por vídeo.
* Categoria "Médico", nome igual ao do site, WhatsApp e link do agendamento. 10 a 15 fotos reais (retratos, material de trabalho; nada de banco de imagens).
* **Avaliações:** pedir ao fim de toda consulta, por mensagem com o link, sem prêmio nem desconto. Responder a cada avaliação sem citar dado clínico.
* Mesmo nome e telefone em todo lugar: site, Instagram, Google.
* **Instagram:** o link da bio aponta para o próprio site, com UTM nos links de posts para saber qual conteúdo gera consulta.
* **SEO local:** títulos em ES e PT citando as cidades. Exemplos: "Dr. Matheus Macedo | Médico en Ciudad del Este"; "Adelgazamiento con médico a domicilio | Dr. Matheus Macedo". Palavras de partida: médico a domicilio Ciudad del Este, adelgazamiento con médico, medicina del rendimiento, sueroterapia, botox, reposición hormonal.
* **Dados estruturados:** Physician e FAQPage (uma vez, sem manutenção). Sem MedicalClinic, pois não há consultório.
* **Medição básica (opcional):** Google Analytics 4 com eventos de clique no WhatsApp, clique em "Agendar", início do funil, passo concluído e "triagem enviada". Registrar só a contagem, **nunca o conteúdo das respostas de saúde**. Exige configuração única e banner de cookies com Consent Mode negado por padrão (como no rotacde).
* **Desempenho:** conteúdo principal em até 2,5 s no 4G; imagens em formato moderno.

---

## 9. Conformidade e ética

Orientação de projeto, não parecer jurídico. A validação final é de um advogado de direito sanitário e de dados no Paraguai.

| Elemento | Regra adotada |
|---|---|
| Retatrutida | Não publicar. Medicamento experimental segundo a fonte do anexo 2; não verificado no Paraguai. Rever o mesmo ponto no Instagram. |
| Tirzepatida e outros medicamentos de prescrição | Sem vitrine: nada de foto de caneta ou ampola, dose, preço ou promessa de quilos perdidos. |
| Recursos ergogênicos | Fora do site público. Qualquer detalhe fica para a consulta. |
| Peptídeos | Não nomear nenhum até confirmar o que é autorizado no Paraguai. |
| Antes e depois | Não publicar no lançamento. |
| Depoimentos | Sóbrios, com autorização por escrito, sem promessa de resultado. |
| Garantia de resultado | Proibida; usar "varia de pessoa para pessoa". |
| Marcas e fabricantes | Não citar. |
| Títulos | "Especialista" só com registro. |
| Registro profissional | Número e órgão visíveis no rodapé e em "Quem cuida de você". |
| Aviso padrão | "As informações deste site não substituem consulta médica"; emergência: 911. |
| Pacientes fora do Paraguai | O site informa que o atendimento é só para quem está no Paraguai. |

**Sobre a base das regras:** o blueprint de 30 páginas adota as regras brasileiras (CFM 2.336/2023) como padrão conservador. Como o mercado agora é só Paraguai, manter esse padrão por prudência e confirmar com o Ministerio de Salud Pública e a associação médica quais regras de publicidade se aplicam.

**Dados de saúde (triagem):** o blueprint de 30 páginas cita a Lei 7593/2025 do Paraguai (vigência plena no fim de novembro de 2027). Não verificado aqui; o advogado confirma. Tratar os dados de saúde como sensíveis desde o primeiro dia:

* **O site não armazena nada.** Sem banco de dados, sem `localStorage` de respostas e sem planilha. Os dados existem apenas na mensagem que o paciente envia ao WhatsApp do médico.
* Coletar só o necessário; histórico detalhado fica para a consulta. As perguntas sensíveis têm a opção "Prefiro falar na consulta".
* **Consentimento separado** para o cuidado (necessário para enviar) e para marketing por WhatsApp (opcional, desmarcado por padrão).
* **Política de privacidade e termos em ES e PT** que informem: o que é coletado, que as respostas seguem pelo WhatsApp (serviço de terceiros), quem as lê (só o médico e, se houver, o assistente) e por quanto tempo ficam na conversa.
* **WhatsApp Business** do médico com verificação em duas etapas e acesso restrito. Se um assistente ler as mensagens, ele também é autorizado a tratar dados de saúde.
* Banner de cookies.
* **Canal para o paciente** pedir acesso, correção ou exclusão dos dados (pelo próprio WhatsApp).
* **Telemedicina:** confirmar se o registro dele permite e quais exigências existem; a validade da receita emitida no Paraguai.

---

## 10. Operação sem suporte de TI

* **Domínio** no nome do médico, em conta e pagamento dele.
* **Renovação automática** do domínio e da hospedagem, com aviso por e-mail ao médico ou a um assistente. Definir quem recebe o aviso.
* **Quem altera preços:** os valores ficam nos cartões do site e no funil. Quando mudarem, é preciso editar o site. Como não haverá suporte, definir **uma única fonte de preços** e uma pessoa responsável. Opções:
  1. **Arquivo de configuração único** (valores, cidades, número do WhatsApp, link da agenda): quem tiver o projeto altera em um só lugar. Mais simples e barato, mas depende de alguém com acesso ao projeto.
  2. **Painel simples com banco de dados** (o rotacde usa o Supabase para parceiros): o médico altera os valores sozinho. Exige configuração e manutenção.
  * **Cuidado:** no código local do rotacde, a edição de preços do painel é gravada no `localStorage` do navegador de quem edita. Isso muda os valores só naquele navegador, e **não** para os pacientes. Não copiar esse modelo para o site do médico.
* **Quem responde o WhatsApp e envia os lembretes de véspera.**
* **Conta Google do médico** com verificação em duas etapas.

---

## 11. O que fica de fora desta versão

* Área do paciente, login, painel do médico, prontuário integrado e pagamentos online (exigem sistema próprio ou suporte).
* **Armazenamento das respostas da triagem** (banco de dados, CRM ou relatório de leads). As respostas vivem só no WhatsApp.
* Upload de exames pelo site (exames são enviados por WhatsApp).
* Mensagens automáticas por WhatsApp API e lembretes automáticos sem plano pago do Google.
* Journal (blog), testes A/B e relatório de leads.
* Foz do Iguaçu, "Como chegar", mapa e endereço de consultório.
* Preço atualizado automaticamente em várias moedas.

---

## 12. Decisões e materiais pendentes do médico

### Decisões
1. Confirmar o WhatsApp correto (+55 45 99157-9616) e se há número paraguaio (+595).
2. Confirmar a conta Google (gratuita ou Workspace) e o que a página de agendamento oferece.
3. Valores: consulta online, consulta a domicílio e taxa de cada cidade, Botox "a partir de" ou "sob avaliação".
4. Formas de pagamento, moeda e política de cancelamento.
5. Retirar da comunicação pública retatrutida e recursos ergogênicos (recomendado) e confirmar o que é permitido sobre peptídeos.
6. Aceitar a redação do aviso de medicamentos.
7. Confirmar o idioma principal (espanhol ou português).
8. Contratar advogado para a revisão final.
9. **Idade mínima** para usar a triagem (sugestão: 18 anos).
10. **Quem lê o WhatsApp** (só o médico ou também um assistente) e quem envia o link do horário na primeira resposta.
11. **Como os preços serão alterados** (arquivo único ou painel com banco de dados).
12. Aprovar o modelo do funil (5 passos, resumo pelo WhatsApp, sem armazenamento no site).

### Materiais
* Logotipo e arquivos originais dos posts.
* Os dois retratos em alta resolução.
* Biografia: formação, registro profissional, órgão emissor e especializações.
* Lista final de serviços e indicações de Botox.
* Horários de atendimento e duração por tipo de consulta.
* Depoimentos autorizados por escrito, quando houver.
* Domínio desejado e acesso ao Instagram e ao Google.
