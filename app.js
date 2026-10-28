/**
 * DR. MATHEUS MACEDO — LÓGICA E INTERATIVIDADE (v4.2)
 * Atendimento exclusivo no Paraguai (Ciudad del Este e Telemedicina)
 * Sem login de paciente e sem suporte de TI.
 */

// ==========================================
// 1. CONFIGURAÇÃO CENTRALIZADA
// ==========================================
const CONFIG = {
  whatsappNumber: '595992135077', // Número oficial Paraguai (+595 992 135 077)
  googleCalendarUrl: 'https://calendar.google.com/', // Link da página de agendamento Google do médico
  
  // Tabela oficial de valores de referência (em Guaraníes - Gs.)
  prices: {
    online: '180.000 Gs.',
    homecare: '260.000 Gs.', // Taxa de deslocamento inclusa em Ciudad del Este
    protocol: '720.000 Gs.', // Procedimento de Emagrecimento
    botox: 'Bajo evaluación clínica' // Sob avaliação
  }
};

// ==========================================
// 1.1 CONFIGURAÇÃO DOS CARDS DE BOTOX (IMAGENS & DADOS)
// ==========================================
const BOTOX_CARDS_DATA = [
  {
    id: 1,
    img: 'assets/botox_forehead.jpg',
    alt: 'Testa e Linhas de Expressão'
  },
  {
    id: 2,
    img: 'assets/botox_glabella.jpg',
    alt: 'Glabela (Região entre as Sobrancelhas)'
  },
  {
    id: 3,
    img: 'assets/botox_crowsfeet.jpg',
    alt: 'Pés de Galinha'
  },
  {
    id: 4,
    img: 'assets/botox_jawline.jpg',
    alt: 'Bruxismo e Contorno Facial'
  },
  {
    id: 5,
    img: 'assets/botox_hyperhidrosis.jpg',
    alt: 'Hiperidrose'
  }
];

// ==========================================
// 2. DICIONÁRIO DE TRADUÇÃO BILÍNGUE (ES | PT)
// ==========================================
const TRANSLATIONS = {
  es: {
    // Nav
    nav_services: 'Modalidades',
    nav_how: 'Cómo Funciona',
    nav_procedures: 'Procedimientos',
    nav_about: 'El Doctor',
    nav_faq: 'Preguntas',
    btn_schedule: 'Agendar Consulta',
    btn_instagram: 'Sígame en Instagram',
    
    // Hero
    hero_badge: 'Atención exclusiva en Paraguay',
    hero_title: 'Salud, adelgazamiento,<br>rendimiento y<br><em>estética facial</em>.',
    hero_subtitle: 'Cuidado médico personalizado,<br>con acompañamiento humanizado.',
    hero_btn_online: 'Agendar Consulta Online',
    hero_btn_home: 'Hablar por WhatsApp',
    trust_lang: 'Atención en Español y Portugués',
    trust_coverage: '<span class="desktop-only-inline">Atención a Domicilio en Ciudad del Este</span><span class="mobile-only-inline">Atención a Domicilio y Online en Ciudad del Este</span>',
    trust_agenda: 'Agenda Abierta',
    
    // Services
    services_tag: 'Modalidades de Consulta',
    services_title: 'Atención Médica a su Medida',
    services_desc: 'Sin consultorio fijo: la mejor atención médica en la comodidad de su hogar o por videollamada segura.',
    srv_online_title: 'Consulta Online (Telemedicina)',
    srv_online_desc: 'Atención por videollamada para pacientes que se encuentran en Paraguay.',
    srv_home_title: 'Atención a Domicilio (Ciudad del Este)',
    srv_home_desc: 'El médico acude con todo el equipamiento necesario a su residencia en Ciudad del Este.',
    lbl_total_value: 'Valor Total:',
    btn_choose_online: 'Elegir Consulta Online',
    btn_choose_home: 'Elegir Atención a Domicilio',
    
    // Disclaimer Meds
    med_disc_title: 'Transparencia Médica sobre Medicamentos:',
    med_disc_desc: 'La consulta incluye evaluación clínica completa, solicitud de exámenes, plan alimentario y prescripción médica individualizada. Los medicamentos de farmacia NO están incluidos y los adquiere el paciente en la farmacia de su elección.',
    
    // How it works
    how_tag: 'Paso a Paso',
    how_title: '¿Cómo Funciona el Acompañamiento?',
    how_desc: 'Un proceso médico transparente y estructurado para alcanzar su mejor versión con salud y seguridad.',
    step1_title: 'Etapa 01 — Elija su atención',
    step1_desc: 'Seleccione la modalidad ideal para sus necesidades y conozca las opciones disponibles.',
    step2_title: 'Etapa 02 — Complete sus datos de salud',
    step2_desc: 'Complete la información necesaria para que el médico conozca mejor su historial y sus necesidades.',
    step3_title: 'Etapa 03 — Complete su registro',
    step3_desc: 'Ingrese sus datos personales y de contacto para dar continuidad a la atención.',
    step4_title: 'Etapa 04 — Envíe y agende',
    step4_desc: 'Envíe su triaje por WhatsApp y siga las indicaciones del equipo para coordinar su horario.',
    
    // Procedures
    proc_tag: 'Tratamientos Clínicos',
    proc_title: 'Procedimientos Médicos',
    proc_desc: 'Realizados exclusivamente tras evaluación médica rigurosa para garantizar seguridad y armonía.',
    proc1_title: 'Reposición e Inyectables de Vitaminas',
    proc1_desc: 'Aplicación médica individualizada de micronutrientes (como Vitamina B12, hierro y otros compuestos) para optimización de la salud, energía y corrección de carencias nutricionales.',
    proc2_title: 'Sueroterapia Específica',
    proc2_desc: 'Reposición intravenosa de vitaminas, minerales y micronutrientes según carencias identificadas en laboratorio.',
    proc3_title: 'Modulación Hormonal',
    proc3_desc: 'Indicada únicamente ante desbalances clínicos confirmados por analíticas, con monitoreo estricto.',
    
    // About
    about_tag: 'Quién Cuida de Usted',
    about_title: 'Dr. Matheus Macedo',
    about_quote: '"Mi compromiso es ofrecer una medicina que respeta la individualidad, valora la ciencia y pone al paciente en el centro de cada decisión."',
    about_text: 'Médico comprometido con una práctica rigurosa, que une conocimiento científico, escucha atenta y acompañamiento cercano. Cada paciente es recibido en su singularidad, con conductas definidas a partir de sus necesidades y de una evaluación médica responsable.',
    about_c1: 'Evaluación médica rigurosa',
    about_c2: 'Atención humanizada e individualizada',
    about_c3: 'Decisiones fundamentadas en evidencias científicas',
    
    // Testimonials
    nav_testimonials: 'Resultados',
    test_tag: 'Historias Reales',
    test_title: 'Resultados de Quienes Vivieron la Transformación',
    test_desc: 'Relatos espontáneos de pacientes que transformaron su salud, disposición y autoestima con el acompañamiento médico personalizado del Dr. Matheus Macêdo.',
    test_ana_tag: '3 Meses de Protocolo',
    test_ana_text: '“¡Estoy muy feliz con los resultados de estos tres meses de acompañamiento con el Dr. Matheus Macêdo! ❤️ El protocolo personalizado, las dietas y el acompañamiento profesional han marcado la diferencia en mi proceso de adelgazamiento. El uso de la tirzepatida, siempre bajo su orientación, forma parte de esta jornada. ¡Muy feliz con mi evolución y motivada para continuar! 🥰✨”',
    test_verified_ana: 'Paciente Verificada • Tirzepatida',
    test_telma_tag: '4 Meses de Protocolo',
    test_telma_text: '“Mañana se cumplen cuatro meses con el protocolo. ¡Estoy muy feliz con los resultados de estos cuatro meses de acompañamiento con el Dr. Matheus Macêdo! El protocolo que preparó para mí, las dietas y el acompañamiento profesional han marcado la diferencia en mi proceso de adelgazamiento. El uso de la tirzepatida, bajo su orientación, forma parte de esta jornada. ¡Soy muy agradecida al Dr. por el cuidado, respondiendo siempre a mis dudas y por mi evolución y motivada para continuar! Gracias Dr. Matheus.”',
    test_verified_telma: 'Paciente Verificada • Tirzepatida',
    test_mauro_tag: '-13 kg • Talla 52 → 46',
    test_m1: 'Eliminados',
    test_m2: 'Talla',
    test_m3: 'Autoestima',
    test_mauro_text: '<p class="testimonial-lead"><strong>TESTIMONIO DE GRATITUD AL DR. MATHEUS MACÊDO</strong></p><p>Mi nombre es Mauro, y quiero expresar mi gratitud al Dr. Matheus Macêdo por el excelente acompañamiento en mi proceso de adelgazamiento.</p><p>Inicié mi tratamiento en julio de 2026 y, desde el primer momento, recibí una atención marcada por el profesionalismo, la competencia y la atención humana. Con una evaluación cuidadosa, la solicitud de los análisis necesarios y la elaboración de un protocolo y una dieta individualizados, condujo cada etapa con responsabilidad y dedicación.</p><p>Los resultados han sido muy significativos: ya eliminé 13 kg y pasé de la talla 52 a la 46. Sin embargo, la mayor conquista va mucho más allá de los números y la ropa. He experimentado más disposición, mejora en la autoestima, bienestar y, sobre todo, una percepción mucho más positiva de mi calidad de vida.</p><p>Agradezco a Dios por esta experiencia y por la oportunidad de contar con un profesional que une conocimiento, cuidado y humanidad. Mi reconocimiento al Dr. Matheus no se debe solo a los resultados alcanzados, sino también a la forma atenta y comprometida con la que acompaña todo el proceso.</p><p>¡Recomiendo el trabajo del Dr. Matheus Macêdo a todos los que buscan cuidar su salud con responsabilidad, acompañamiento profesional y excelencia! ¡Mi gratitud por ser parte de esta transformación que ha producido resultados tan positivos en mi vida!</p>',
    test_verified_mauro: 'Paciente Verificado • Transformación Metabólica',
    test_cta_title: '¿Listo para iniciar su propia transformación?',
    test_cta_desc: 'Agende su consulta y reciba un plan médico individualizado, con soporte continuo del Dr. Matheus Macêdo.',
    test_cta_btn: 'Agendar Mi Consulta',
    
    // Funnel Side
    funnel_tag: 'Triaje & Agendamiento',
    funnel_title: 'Agende su consulta en 1 minuto',
    funnel_desc: 'Complete este breve cuestionario para que el Dr. Matheus y su equipo conozcan su caso antes de la atención. Sus datos se envían directamente por WhatsApp bajo estricta confidencialidad médica.',
    funnel_b1: 'Sin registros ni contraseñas',
    funnel_b2: 'Cálculo de tarifa inmediata con traslado',
    funnel_b3: 'Mensaje listo para enviar en un toque',
    funnel_privacy_text: 'Datos confidenciales amparados por la Ley 7593/2025 de Paraguay y el secreto profesional médico.',
    
    // Funnel Steps
    pane1_title: '1. Elija la modalidad de atención',
    pane1_desc: '¿Cómo prefiere realizar su consulta?',
    opt_online_lbl: 'Consulta Online',
    opt_online_sub: 'Videollamada por Google Meet',
    opt_home_lbl: 'Atención a Domicilio',
    opt_home_sub: 'En su residencia en Ciudad del Este',
    
    pane2_title: '2. Datos de salud e información básica',
    pane2_desc: 'Esta información ayuda al médico a preparar su protocolo:',
    lbl_age: 'Edad (años)*',
    lbl_weight: 'Peso estimado (kg)*',
    lbl_height: 'Altura (cm)*',
    lbl_conditions: '¿Tiene alguna enfermedad o condición diagnosticada?',
    lbl_meds: 'Medicamentos que utiliza actualmente:',
    lbl_allergies: 'Alergias conocidas:',
    lbl_preg: '¿Embarazo o lactancia materna?*',
    opt_preg_no: 'No / No aplica',
    opt_preg_yes: 'Sí',
    
    pane3_title: '3. Datos de contacto y confirmación',
    pane3_desc: 'Último paso para generar su solicitud de agendamiento:',
    lbl_name: 'Su Nombre Completo*',
    lbl_address: 'Dirección en Ciudad del Este (para domicilio)*',
    chk_consent: 'Autorizo el tratamiento de mis datos de salud con el único fin de mi atención médica y triaje clínico, conforme a la <a href="#" class="open-privacy-modal" style="text-decoration: underline; color: var(--color-secondary);">política de privacidad</a>.*',
    chk_marketing: 'Deseo recibir recordatorios e información de salud vía WhatsApp (opcional).',
    
    btn_prev: 'Volver',
    btn_next: 'Siguiente',
    btn_finish_wpp: 'Enviar Triaje por WhatsApp',
    
    success_title: '¡Información Lista para Enviar!',
    success_desc: 'Su triaje ha sido estructurado. Toque el botón a continuación para abrir WhatsApp y enviar sus datos al Dr. Matheus y su asistente para coordinar su consulta.',
    
    // FAQ
    faq_tag: 'Dudas Frecuentes',
    faq_title: 'Preguntas Frecuentes',
    faq_desc: 'Respuestas claras a las dudas más habituales de nuestros pacientes.',
    
    // Footer
    foot_tag: 'Atención médica personalizada en Paraguay.',
    foot_disclaimer: 'Aviso Ético Legal: Las informaciones de este sitio web tienen carácter informativo y educativo, no sustituyendo el acto médico. En caso de emergencia o síntomas agudos, llame al 911 o acuda de inmediato a un centro hospitalario. Dr. Matheus Macedo © 2026. Todos los derechos reservados.'
  },
  
  pt: {
    // Nav
    nav_services: 'Modalidades',
    nav_how: 'Como Funciona',
    nav_procedures: 'Procedimentos',
    nav_about: 'Sobre o Médico',
    nav_faq: 'Dúvidas',
    btn_schedule: 'Agendar Consulta',
    btn_instagram: 'Me acompanhe no Instagram',
    
    // Hero
    hero_badge: 'Atendimento exclusivo no Paraguai',
    hero_title: 'Saúde, emagrecimento,<br>performance e<br><em>estética facial</em>.',
    hero_subtitle: 'Cuidado médico personalizado,<br>com acompanhamento humanizado.',
    hero_btn_online: 'Agendar Consulta Online',
    hero_btn_home: 'Falar no WhatsApp',
    trust_lang: 'Atendimento em Espanhol e Português',
    trust_coverage: '<span class="desktop-only-inline">Atendimento a Domicílio em Ciudad del Este</span><span class="mobile-only-inline">Atendimento a Domicílio e Online em Ciudad del Este</span>',
    trust_agenda: 'Agenda Aberta',
    
    // Services
    services_tag: 'Modalidades de Consulta',
    services_title: 'Atendimento Médico Personalizado',
    services_desc: 'Sem consultório fixo: o médico vai até você com máxima privacidade ou atende via videochamada segura.',
    srv_online_title: 'Consulta Online (Telemedicina)',
    srv_online_desc: 'Atendimento por videochamada para pacientes que se encontram no Paraguai.',
    srv_home_title: 'Atendimento a Domicílio (Ciudad del Este)',
    srv_home_desc: 'O médico vai com todo o equipamento necessário até sua residência em Ciudad del Este.',
    lbl_total_value: 'Valor Total:',
    btn_choose_online: 'Escolher Consulta Online',
    btn_choose_home: 'Escolher Atendimento a Domicílio',
    
    // Disclaimer Meds
    med_disc_title: 'Transparência Médica sobre Medicamentos:',
    med_disc_desc: 'A consulta inclui avaliação clínica completa, solicitação de exames, plano alimentar e prescrição médica individualizada. Os medicamentos de farmácia NÃO estão inclusos e são adquiridos pelo paciente na farmácia de sua escolha.',
    
    // How it works
    how_tag: 'Passo a Passo',
    how_title: 'Como Funciona o Acompanhamento?',
    how_desc: 'Um processo médico transparente e estruturado para alcançar seu melhor resultado com saúde e consistência.',
    step1_title: 'Etapa 01 — Escolha seu atendimento',
    step1_desc: 'Selecione a modalidade ideal para suas necessidades e conheça as opções disponíveis.',
    step2_title: 'Etapa 02 — Informe seus dados de saúde',
    step2_desc: 'Preencha as informações necessárias para que o médico conheça melhor seu histórico e suas necessidades.',
    step3_title: 'Etapa 03 — Complete seu cadastro',
    step3_desc: 'Informe seus dados pessoais e de contato para dar continuidade ao atendimento.',
    step4_title: 'Etapa 04 — Envie e agende',
    step4_desc: 'Envie sua triagem pelo WhatsApp e siga as orientações da equipe para escolher seu horário.',
    
    // Procedures
    proc_tag: 'Tratamentos Clínicos',
    proc_title: 'Procedimentos Médicos',
    proc_desc: 'Realizados exclusivamente após avaliação médica prévia para garantir naturalidade e segurança.',
    proc1_title: 'Reposição de vitaminas injetáveis',
    proc1_desc: 'Aplicação médica individualizada de micronutrientes (como Vitamina B12, ferro e outros compostos) para otimização da saúde, disposição e correção de carências nutricionais.',
    proc2_title: 'Soroterapia Específica',
    proc2_desc: 'Reposição intravenosa de vitaminas, minerais e hidratação sob medida conforme deficiências laboratoriais.',
    proc3_title: 'Modulação Hormonal',
    proc3_desc: 'Indicada unicamente mediante comprovação clínica laboratorial, com rigoroso acompanhamento periódico.',
    
    // About
    about_tag: 'Quem Cuida de Você',
    about_title: 'Dr. Matheus Macedo',
    about_quote: '“Meu compromisso é oferecer uma medicina que respeita a individualidade, valoriza a ciência e coloca o paciente no centro de cada decisão.”',
    about_text: 'Médico comprometido com uma prática criteriosa, que une conhecimento científico, escuta atenta e acompanhamento próximo. Cada paciente é acolhido em sua singularidade, com condutas definidas a partir de suas necessidades e de uma avaliação médica responsável.',
    about_c1: 'Avaliação médica criteriosa',
    about_c2: 'Atendimento humanizado e individualizado',
    about_c3: 'Decisões fundamentadas em evidências científicas',
    
    // Testimonials
    nav_testimonials: 'Resultados',
    test_tag: 'Histórias Reais',
    test_title: 'Resultados de Quem Viveu a Transformação',
    test_desc: 'Relatos espontâneos de pacientes que transformaram sua saúde, disposição e autoestima com o acompanhamento médico personalizado do Dr. Matheus Macêdo.',
    test_ana_tag: '3 Meses de Protocolo',
    test_ana_text: '“Estou muito feliz com os resultados desses três meses de acompanhamento com o Dr. Matheus Macêdo! ❤️ O protocolo personalizado, as dietas e o acompanhamento profissional têm feito a diferença no meu processo de emagrecimento. O uso da tirzepatida, sempre sob sua orientação, faz parte dessa jornada. Muito feliz com minha evolução e motivada para continuar! 🥰✨”',
    test_verified_ana: 'Paciente Verificada • Tirzepatida',
    test_telma_tag: '4 Meses de Protocolo',
    test_telma_text: '“Amanhã faz quatro meses com o protocolo. Estou muito feliz com os resultados destes quatro meses de acompanhamento com o Dr. Matheus Macêdo! O protocolo que ele fez pra mim, as dietas e o acompanhamento profissional têm feito a diferença no meu processo de emagrecimento. O uso da tirzepatida, sob sua orientação, faz parte dessa jornada. Sou muito grata ao Dr. pelo cuidado, respondendo sempre as minhas dúvidas e pela evolução e motivada para continuar! Obrigada Dr. Matheus.”',
    test_verified_telma: 'Paciente Verificada • Tirzepatida',
    test_mauro_tag: '-13 kg • Manequim 52 → 46',
    test_m1: 'Eliminados',
    test_m2: 'Manequim',
    test_m3: 'Autoestima',
    test_mauro_text: '<p class="testimonial-lead"><strong>DEPOIMENTO DE GRATIDÃO AO DR. MATHEUS MACÊDO</strong></p><p>Meu nome é Mauro, e quero expressar minha gratidão ao Dr. Matheus Macêdo pelo excelente acompanhamento no meu processo de emagrecimento.</p><p>Iniciei meu tratamento em julho de 2026 e, desde o primeiro momento, recebi um atendimento marcado pelo profissionalismo, pela competência e pela atenção humana. Com uma avaliação cuidadosa, a solicitação dos exames necessários e a elaboração de um protocolo e de uma dieta individualizados, ele conduziu cada etapa com responsabilidade e dedicação.</p><p>Os resultados têm sido muito significativos: já eliminei 13 kg e passei do manequim 52 para o 46. Entretanto, a maior conquista vai muito além dos números e das roupas. Tenho experimentado mais disposição, melhora na autoestima, bem-estar e, sobretudo, uma percepção muito mais positiva da minha qualidade de vida.</p><p>Sou grato a Deus por essa experiência e pela oportunidade de contar com um profissional que une conhecimento, cuidado e humanidade. Meu reconhecimento ao Dr. Matheus não se deve apenas aos resultados alcançados, mas também à forma atenciosa e comprometida com que acompanha todo o processo.</p><p>Recomendo o trabalho do Dr. Matheus Macêdo a todos que buscam cuidar da saúde com responsabilidade, acompanhamento profissional e excelência. Minha gratidão por fazer parte dessa transformação que tem produzido resultados tão positivos na minha vida!</p>',
    test_verified_mauro: 'Paciente Verificado • Transformação Metabólica',
    test_cta_title: 'Pronto para iniciar sua própria transformação?',
    test_cta_desc: 'Agende sua consulta e receba um plano médico individualizado, com suporte contínuo do Dr. Matheus Macêdo.',
    test_cta_btn: 'Agendar Minha Consulta',
    
    // Funnel Side
    funnel_tag: 'Triagem & Agendamento',
    funnel_title: 'Agende sua consulta em 1 minuto',
    funnel_desc: 'Responda a este breve formulário para que o Dr. Matheus e sua equipe conheçam seu caso antes da consulta. Suas informações são enviadas diretamente pelo WhatsApp sob estrito sigilo médico.',
    funnel_b1: 'Sem necessidade de cadastro ou senhas',
    funnel_b2: 'Cálculo de taxa imediata com deslocamento',
    funnel_b3: 'Mensagem pronta para enviar em um toque',
    funnel_privacy_text: 'Dados confidenciais amparados pela legislação do Paraguai (Lei 7593/2025) e sigilo profissional médico.',
    
    // Funnel Steps
    pane1_title: '1. Escolha a modalidade de atendimento',
    pane1_desc: 'Como prefere realizar a sua consulta?',
    opt_online_lbl: 'Consulta Online',
    opt_online_sub: 'Videochamada pelo Google Meet',
    opt_home_lbl: 'Atendimento a Domicílio',
    opt_home_sub: 'Na sua casa em Ciudad del Este',
    
    pane2_title: '2. Dados de saúde e informações básicas',
    pane2_desc: 'Esses dados permitem ao médico preparar sua avaliação:',
    lbl_age: 'Idade (anos)*',
    lbl_weight: 'Peso aproximado (kg)*',
    lbl_height: 'Altura (cm)*',
    lbl_conditions: 'Possui alguma doença ou diagnóstico prévio?',
    lbl_meds: 'Medicamentos que utiliza atualmente:',
    lbl_allergies: 'Alergias conhecidas:',
    lbl_preg: 'Gravidez ou amamentação?*',
    opt_preg_no: 'Não / Não se aplica',
    opt_preg_yes: 'Sim',
    
    pane3_title: '3. Dados de contato e consentimento',
    pane3_desc: 'Última etapa para gerar seu agendamento:',
    lbl_name: 'Seu Nome Completo*',
    lbl_address: 'Endereço em Ciudad del Este (para domicílio)*',
    chk_consent: 'Autorizo o tratamento dos meus dados de saúde exclusivamente para triagem e atendimento médico, conforme a <a href="#" class="open-privacy-modal" style="text-decoration: underline; color: var(--color-secondary);">política de privacidade</a>.*',
    chk_marketing: 'Desejo receber avisos e orientações de saúde via WhatsApp (opcional).',
    
    btn_prev: 'Voltar',
    btn_next: 'Próximo',
    btn_finish_wpp: 'Enviar Triagem pelo WhatsApp',
    
    success_title: 'Informações Prontas para Envio!',
    success_desc: 'Sua triagem foi estruturada com sucesso. Toque no botão abaixo para abrir seu WhatsApp e enviar os dados ao Dr. Matheus e à equipe para coordenar sua consulta.',
    
    // FAQ
    faq_tag: 'Dúvidas Frecuentes',
    faq_title: 'Perguntas Frequentes',
    faq_desc: 'Respostas diretas e transparentes para as dúvidas mais comuns dos pacientes.',
    
    // Footer
    foot_tag: 'Atendimento médico personalizado no Paraguai.',
    foot_disclaimer: 'Aviso Ético Legal: As informações deste site têm caráter informativo e não substituem consulta médica. Em caso de emergência ou sintomas agudos, ligue 911 ou procure um pronto-socorro. Dr. Matheus Macedo © 2026. Todos os direitos reservados.'
  }
};

// ==========================================
// 2.1 TRADUÇÕES COMPLEMENTARES (textos que estavam fixos no HTML)
// ==========================================
Object.assign(TRANSLATIONS.es, {
  page_title: 'Dr. Matheus Macedo | Medicina de Alto Rendimiento y Control de Peso en Paraguay',
  page_desc: 'Consulta médica online y atención a domicilio en Ciudad del Este.',
  brand_sub: 'Registro Nº 45486',
  hero_card_sub: 'Medicina y Rendimiento Humano',
  stat_exp_num: '+8 Años',
  srv_online_tag: 'Videollamada Google Meet',
  srv_online_f1: 'Anamnesis completa e historial clínico detallado',
  srv_online_f2: 'Solicitud de análisis de laboratorio completos',
  srv_online_f3: 'Prescripción médica personalizada',
  srv_online_f4: 'Enlace directo sin instalar aplicaciones',
  srv_home_tag: 'Home Care Exclusivo',
  srv_home_f1: 'Evaluación física y seguimiento de la composición corporal',
  srv_home_f2: 'Máxima privacidad, sin salas de espera ni traslados',
  srv_home_f3: 'Prescripción médica y solicitud de análisis en mano',
  srv_home_f4: 'Posibilidad de procedimientos en la misma visita',
  lbl_total_home: 'Valor Total (Consulta + Traslado en CDE):',
  srv_proto_tag: 'Tratamiento Integral VIP',
  srv_proto_title: 'Protocolo de Emagrecimento',
  srv_proto_desc: 'Acompañamiento médico continuo y personalizado para una transformación metabólica real y saludable.',
  srv_proto_f1: 'Acompañamiento médico continuo',
  srv_proto_f2: 'Consultas mensuales de control',
  srv_proto_f3: 'Perfil metabólico completo',
  srv_proto_f4: 'Plan nutricional y dieta personalizada',
  srv_proto_f5: 'Exámenes laboratoriales completos',
  srv_proto_f6: 'Aplicación de tirzepatida o retatrutida',
  srv_proto_f7: 'Aplicación de péptidos bioactivos',
  srv_proto_f8: 'Grupo exclusivo de acompañamiento WhatsApp con desafíos semanales',
  lbl_total_proto: 'Valor del Procedimiento:',
  btn_choose_proto: 'Elegir Protocolo de Emagrecimento',
  proc1_badge: 'Bajo evaluación clínica',
  proc2_badge: 'Indicación médica previa',
  pane1_alert: 'Atención exclusiva para pacientes que se encuentran en Paraguay. En caso de urgencia, llame al 911.',
  opt_home_price: '260.000 Gs.',
  opt_proto_lbl: 'Protocolo de Emagrecimento',
  opt_proto_sub: 'Tratamiento médico integral con medicación y acompañamiento',
  opt_proto_price: '720.000 Gs.',
  lbl_other_goal: 'Describa brevemente su objetivo:',
  ph_other_goal: 'Ej: Chequeo preventivo general...',
  underage_alert: '<strong>Atención:</strong> La atención a menores de 18 años requiere autorización expresa y presencia del responsable legal. Por favor, contáctenos directamente vía WhatsApp para coordinar.',
  severe_alert: '<strong>Aviso de Emergencia:</strong> Si presenta dolor en el pecho, dificultad respiratoria súbita o síntomas severos, acuda de inmediato a un hospital o comuníquese al 911. Este servicio es exclusivamente para consultas electivas y preventivas.',
  chk_severe: 'Tengo síntomas agudos o severos en este momento (dolor en el pecho, falta de aire súbita).',
  ph_age: 'Ej: 32',
  ph_weight: 'Ej: 78',
  ph_height: 'Ej: 175',
  ph_conditions: "Ej: Hipertensión, tiroides... (o 'Ninguna')",
  ph_meds: 'Ej: Nombres de medicamentos o suplementos',
  ph_allergies: 'Ej: Penicilina, látex, etc.',
  ph_name: 'Ingrese su nombre y apellido',
  ph_address: 'Ej: Barrio Boquerón, Edificio o calle de referencia en Ciudad del Este...',
  not_informed: 'No informado',
  faq1_q: '¿El Dr. Matheus atiende online y presencial?',
  faq1_a: 'Sí. La consulta online se realiza por videollamada segura vía Google Meet para pacientes que se encuentran en Paraguay. La consulta presencial es exclusivamente a domicilio en Ciudad del Este.',
  faq2_q: '¿Los medicamentos están incluidos en el valor de la consulta?',
  faq2_a: '<strong>No.</strong> La consulta incluye la evaluación médica, solicitud e interpretación de análisis de laboratorio, plan alimentario y la prescripción individualizada. Si el médico indica alguna medicación o suplemento, el paciente lo adquiere en la farmacia de su preferencia.',
  faq3_q: '¿Qué debo preparar para la consulta a domicilio?',
  faq3_a: 'Un ambiente iluminado, tranquilo y con privacidad en su residencia. El médico lleva el equipo clínico necesario. Tenga a mano sus últimos exámenes si dispone de ellos.',
  faq4_q: '¿Cómo se realiza el pago de la consulta y procedimientos?',
  faq4_a: 'Aceptamos pagos en efectivo en Guaraníes (Gs.), Reales (R$) y Dólares (USD); por transferencia bancaria en Guaraníes y Reales; Pix; y tarjeta de crédito. La tarifa mostrada en el triaje ya incluye la consulta y la tasa de traslado hasta su ciudad. Los valores en otras monedas como el Real y el Dólar están sujetos a la cotización del día.',
  faq5_q: '¿Quién lee mis datos de salud enviados en el formulario?',
  faq5_a: 'Sus datos no se guardan en el sitio web ni en servidores externos. La información se envía únicamente al WhatsApp oficial del Dr. Matheus Macedo, donde la reciben él y su asistente de atención, ambos bajo estricto deber de confidencialidad y secreto médico profesional (Ley 7593/2025 de Paraguay).',
  faq6_q: '¿Cómo funciona el acompañamiento y retorno mensual?',
  faq6_a: 'Cada 30 días se programa una nueva consulta de seguimiento para medir la evolución física, revisar nuevos parámetros de laboratorio y realizar los ajustes necesarios en el protocolo nutricional y terapéutico.',
  foot_cov_title: 'Atención Médica',
  foot_cde: 'Atención a Domicilio en Ciudad del Este',
  foot_tele: 'Consulta Online en todo Paraguay',
  foot_l2: 'Metodología',
  foot_l3: 'Triaje y Agendamiento',
  foot_l4: 'Política de Privacidad y Datos',
  foot_reg: 'Dr. Matheus Macedo | Registro Profesional Ministerio de Salud Pública y Bienestar Social (MSPBS)',
  foot_dev: 'Sitio desarrollado por <a href="https://gdsdesign.site" target="_blank" rel="noopener noreferrer">GDS Design</a>',
  stat_reg_status: 'Habilitado',
  proc3_badge: 'Protocolo individual',
  foot_inst_title: 'Institucional',
  foot_l1: 'Modalidades de Consulta',
  btn_schedule_mob: 'Agendar',
  privacy_title: 'Política de Privacidad y Protección de Datos',
  privacy_body: '<p><strong>Responsable del Tratamiento:</strong> Dr. Matheus Macedo y su asistente de atención.</p><h4>1. Minimización y Confidencialidad</h4><p>Este sitio web NO almacena en bases de datos ni en cookies ninguna información médica. Las respuestas del triaje se compilan solo en el momento del envío voluntario mediante un mensaje privado de WhatsApp, bajo secreto profesional médico.</p><h4>2. Marco Normativo</h4><p>El tratamiento de los datos se rige por la legislación de la República del Paraguay (Ley 7593/2025 de Protección de Datos Personales y normas sanitarias del Ministerio de Salud Pública y Bienestar Social - MSPBS).</p><h4>3. Destinatarios y Acceso</h4><p>Los datos del triaje son leídos únicamente por el Dr. Matheus Macedo y su asistente de atención, con el único propósito de evaluar la consulta, preparar el protocolo médico y coordinar la atención presencial o remota.</p><h4>4. Derechos del Paciente</h4><p>El titular puede solicitar en cualquier momento la rectificación o eliminación de sus mensajes y datos de contacto a través del WhatsApp oficial.</p>',
  cookie_text: 'Utilizamos cookies esenciales y de análisis para garantizar la mejor experiencia de navegación y seguridad en el sitio.',
  cookie_decline: 'Rechazar no esenciales',
  cookie_accept: 'Aceptar',
  wa_mobile_msg: '¡Hola, Dr. Matheus! Quisiera información sobre las consultas médicas.',
  
  // Botox Carrossel
  botox_tag: 'Botox',
  botox_title: 'Toxina Botulínica: expresión natural, sin perder su identidad',
  botox_desc: 'Tratamiento para suavizar líneas de expresión y prevenir el envejecimiento, con técnica personalizada para cada rostro.',
  botox_c1_title: 'Frente y Líneas de Expresión',
  botox_c1_desc: 'Suaviza las líneas horizontales de la frente manteniendo la movilidad natural del rostro.',
  botox_c2_title: 'Entrecejo (Región Glabelar)',
  botox_c2_desc: 'Reduce el "ceño fruncido" y otorga una mirada más descansada y serena.',
  botox_c3_title: 'Patas de Gallo',
  botox_c3_desc: 'Suaviza las líneas alrededor de los ojos, especialmente al sonreír.',
  botox_c4_title: 'Bruxismo y Contorno Facial',
  botox_c4_desc: 'Alivia la tensión de la mandíbula y define el contorno del rostro.',
  botox_c5_title: 'Hiperhidrosis',
  botox_c5_desc: 'Control de la sudoración excesiva en axilas, manos y pies.',
  botox_btn: 'Agendar evaluación',
  botox_disclaimer: 'Los resultados varían de persona a persona. Procedimiento realizado únicamente tras evaluación médica.'
});

Object.assign(TRANSLATIONS.pt, {
  page_title: 'Dr. Matheus Macedo | Medicina de Alta Performance e Controle de Peso no Paraguai',
  page_desc: 'Consulta médica online e atendimento a domicílio em Ciudad del Este.',
  brand_sub: 'Registro Nº 45486',
  hero_card_sub: 'Medicina & Performance Humana',
  stat_exp_num: '+8 Anos',
  srv_online_tag: 'Videochamada Google Meet',
  srv_online_f1: 'Anamnese completa e histórico clínico detalhado',
  srv_online_f2: 'Solicitação de exames laboratoriais completos',
  srv_online_f3: 'Prescrição médica personalizada',
  srv_online_f4: 'Link direto, sem instalar aplicativos',
  srv_home_tag: 'Home Care Exclusivo',
  srv_home_f1: 'Avaliação física e acompanhamento da composição corporal',
  srv_home_f2: 'Máxima privacidade, sem sala de espera nem deslocamento',
  srv_home_f3: 'Prescrição médica e pedido de exames em mãos',
  srv_home_f4: 'Possibilidade de procedimentos na mesma visita',
  lbl_total_home: 'Valor Total (Consulta + Deslocamento em CDE):',
  srv_proto_tag: 'Tratamento Integral VIP',
  srv_proto_title: 'Protocolo de Emagrecimento',
  srv_proto_desc: 'Acompanhamento médico contínuo e estruturado para perda de peso sustentável e regulação metabólica.',
  srv_proto_f1: 'Acompanhamento médico',
  srv_proto_f2: 'Consultas mensais',
  srv_proto_f3: 'Perfil metabólico',
  srv_proto_f4: 'Dieta personalizada',
  srv_proto_f5: 'Exames laboratoriais',
  srv_proto_f6: 'Aplicação de tirzepatida ou retatrutida',
  srv_proto_f7: 'Aplicação de peptídeos',
  srv_proto_f8: 'Grupo exclusivo de acompanhamento WhatsApp com desafios semanais',
  lbl_total_proto: 'Valor do Procedimento:',
  btn_choose_proto: 'Escolher Protocolo de Emagrecimento',
  proc1_badge: 'Sob avaliação clínica',
  proc2_badge: 'Indicação médica prévia',
  pane1_alert: 'Atendimento exclusivo para pacientes que estão no Paraguai. Em caso de urgência, ligue 911.',
  opt_home_price: '260.000 Gs.',
  opt_proto_lbl: 'Protocolo de Emagrecimento',
  opt_proto_sub: 'Tratamento médico integral com medicação e acompanhamento',
  opt_proto_price: '720.000 Gs.',
  lbl_other_goal: 'Descreva brevemente seu objetivo:',
  ph_other_goal: 'Ex: Check-up preventivo geral...',
  underage_alert: '<strong>Atenção:</strong> O atendimento a menores de 18 anos exige autorização expressa e a presença do responsável legal. Fale diretamente conosco pelo WhatsApp para combinar.',
  severe_alert: '<strong>Aviso de Emergência:</strong> Se você está com dor no peito, falta de ar súbita ou sintomas graves, procure imediatamente um hospital ou ligue 911. Este serviço é exclusivo para consultas eletivas e preventivas.',
  chk_severe: 'Estou com sintomas agudos ou graves neste momento (dor no peito, falta de ar súbita).',
  ph_age: 'Ex: 32',
  ph_weight: 'Ex: 78',
  ph_height: 'Ex: 175',
  ph_conditions: "Ex: Hipertensão, tireoide... (ou 'Nenhuma')",
  ph_meds: 'Ex: Nomes de medicamentos ou suplementos',
  ph_allergies: 'Ex: Penicilina, látex etc.',
  ph_name: 'Digite seu nome e sobrenome',
  ph_address: 'Ex: Bairro Boquerón, Edifício ou rua de referência em Ciudad del Este...',
  not_informed: 'Não informado',
  faq1_q: 'O Dr. Matheus atende online e presencialmente?',
  faq1_a: 'Sim. A consulta online é feita por videochamada segura pelo Google Meet, para pacientes que estão no Paraguai. A consulta presencial é exclusivamente a domicílio em Ciudad del Este.',
  faq2_q: 'Os medicamentos estão inclusos no valor da consulta?',
  faq2_a: '<strong>Não.</strong> A consulta inclui a avaliação médica, a solicitação e interpretação de exames laboratoriais, o plano alimentar e a prescrição individualizada. Se o médico indicar algum medicamento ou suplemento, o paciente compra na farmácia de sua preferência.',
  faq3_q: 'O que preciso preparar para a consulta a domicílio?',
  faq3_a: 'Um ambiente iluminado, tranquilo e com privacidade na sua casa. O médico leva o equipamento clínico necessário. Tenha em mãos seus últimos exames, se tiver.',
  faq4_q: 'Como é feito o pagamento da consulta e dos procedimentos?',
  faq4_a: 'Aceitamos pagamentos em efetivo ou Guaranis (Gs.), Real (R$), Dólar (USD); por transferência bancária em Guarani e Real; Pix; e cartão de crédito. O valor mostrado na triagem já inclui a consulta e a taxa de deslocamento até a sua cidade. Valores em outras moedas como o Real e Dólar estão sujeitos à cotação do dia.',
  faq5_q: 'Quem lê os dados de saúde que envio no formulário?',
  faq5_a: 'Seus dados não são salvos no site nem em servidores externos. As informações são enviadas somente ao WhatsApp oficial do Dr. Matheus Macedo, onde são lidas por ele e pela assistente de atendimento, ambos sob dever de confidencialidade e sigilo médico (Lei 7593/2025 do Paraguai).',
  faq6_q: 'Como funciona o acompanhamento e o retorno mensal?',
  faq6_a: 'A cada 30 dias é marcada uma nova consulta de acompanhamento para medir a evolução física, revisar novos exames e fazer os ajustes necessários no protocolo alimentar e terapêutico.',
  foot_cov_title: 'Atendimento Médico',
  foot_cde: 'Atendimento a Domicílio em Ciudad del Este',
  foot_tele: 'Consulta Online em todo o Paraguai',
  foot_l2: 'Metodologia',
  foot_l3: 'Triagem e Agendamento',
  foot_l4: 'Política de Privacidade e Dados',
  foot_reg: 'Dr. Matheus Macedo | Registro Profissional no Ministério da Saúde Pública e Bem-Estar Social do Paraguai (MSPBS)',
  foot_dev: 'Site desenvolvido por <a href="https://gdsdesign.site" target="_blank" rel="noopener noreferrer">GDS Design</a>',
  stat_reg_status: 'Habilitado',
  proc3_badge: 'Protocolo individual',
  foot_inst_title: 'Institucional',
  foot_l1: 'Modalidades de Consulta',
  btn_schedule_mob: 'Agendar',
  privacy_title: 'Política de Privacidade e Proteção de Dados',
  privacy_body: '<p><strong>Responsável pelo Tratamento:</strong> Dr. Matheus Macedo e sua assistente de atendimento.</p><h4>1. Minimização e Confidencialidade</h4><p>Este site NÃO armazena em banco de dados nem em cookies nenhuma informação médica. As respostas da triagem são reunidas somente no momento do envio voluntário, por mensagem privada de WhatsApp, sob sigilo profissional médico.</p><h4>2. Marco Legal</h4><p>O tratamento dos dados segue a legislação da República do Paraguai (Lei 7593/2025 de Proteção de Dados Pessoais e normas sanitárias do Ministério da Saúde Pública e Bem-Estar Social - MSPBS).</p><h4>3. Quem Tem Acesso</h4><p>Os dados da triagem são lidos apenas pelo Dr. Matheus Macedo e pela assistente de atendimento, com o único objetivo de avaliar a consulta, preparar o protocolo médico e organizar o atendimento presencial ou online.</p><h4>4. Direitos do Paciente</h4><p>O titular pode pedir a qualquer momento a correção ou exclusão de suas mensagens e dados de contato pelo WhatsApp oficial.</p>',
  cookie_text: 'Usamos cookies essenciais e de análise para garantir a melhor experiência de navegação e segurança no site.',
  cookie_decline: 'Recusar não essenciais',
  cookie_accept: 'Aceitar',
  wa_mobile_msg: 'Olá, Dr. Matheus! Gostaria de informações sobre as consultas médicas.',
  
  // Botox Carrossel
  botox_tag: 'Botox',
  botox_title: 'Toxina Botulínica: expressão natural, sem perder a sua identidade',
  botox_desc: 'Tratamento para suavizar linhas de expressão e prevenir o envelhecimento, com técnica personalizada para cada rosto.',
  botox_c1_title: 'Testa e Linhas de Expressão',
  botox_c1_desc: 'Suaviza as linhas horizontais da testa mantendo a mobilidade natural do rosto.',
  botox_c2_title: 'Glabela (Região entre as Sobrancelhas)',
  botox_c2_desc: 'Reduz o "vinco de bravo" e deixa o olhar mais leve e descansado.',
  botox_c3_title: 'Pés de Galinha',
  botox_c3_desc: 'Suaviza as linhas ao redor dos olhos, principalmente ao sorrir.',
  botox_c4_title: 'Bruxismo e Contorno Facial',
  botox_c4_desc: 'Alivia a tensão da mandíbula e pode afinar o contorno do rosto.',
  botox_c5_title: 'Hiperidrose',
  botox_c5_desc: 'Controle do suor excessivo nas axilas, mãos e pés.',
  botox_btn: 'Agendar avaliação',
  botox_disclaimer: 'Os resultados variam de pessoa para pessoa. Procedimento realizado apenas após avaliação médica.'
});

// ==========================================
// 3. ESTADO DA APLICAÇÃO & DADOS DO FUNIL
// ==========================================
let currentLang = 'es'; // Espanhol é o padrão oficial
let currentStep = 1;
const totalSteps = 3;

// Dados coletados durante o funil (nenhum dado é salvo em localStorage por privacidade)
const funnelData = {
  modality: 'online', // 'online' ou 'homecare' ou 'protocol'
  cityKey: 'cde',
  cityName: 'Ciudad del Este',
  totalPrice: CONFIG.prices.online,
  age: '',
  weight: '',
  height: '',
  conditions: '',
  medications: '',
  allergies: '',
  isPregnant: 'no', // 'no' | 'yes'
  hasSevereSymptoms: false,
  patientName: '',
  patientAddress: '',
  consentAccepted: false,
  marketingConsent: false
};

// ==========================================
// 4. INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initHomeCitySelector();
  initFunnel();
  initFaqAccordion();
  initBotoxCarousel();
  initModals();
  initCookies();
  initMobileMenu();
  initMobileBottomBarScroll();
});

// ==========================================
// 5. SISTEMA DE IDIOMA (ES | PT)
// ==========================================
function initLanguage() {
  const saved = localStorage.getItem('dr_matheus_lang');
  if (saved && (saved === 'es' || saved === 'pt')) {
    currentLang = saved;
  } else {
    // Detecta idioma do navegador se for português
    const navLang = navigator.language || navigator.userLanguage || '';
    if (navLang.toLowerCase().includes('pt')) {
      currentLang = 'pt';
    } else {
      currentLang = 'es';
    }
  }
  
  applyLanguage(currentLang);
  
  // Event listeners para botões de idioma
  const btnEs = document.getElementById('btnLangEs');
  const btnPt = document.getElementById('btnLangPt');
  
  if (btnEs) {
    btnEs.addEventListener('click', () => switchLanguage('es'));
  }
  if (btnPt) {
    btnPt.addEventListener('click', () => switchLanguage('pt'));
  }
}

function switchLanguage(lang) {
  if (lang !== 'es' && lang !== 'pt') return;
  currentLang = lang;
  localStorage.setItem('dr_matheus_lang', lang);
  applyLanguage(lang);
  updateFunnelPriceDisplay();
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;
  
  // Atualiza classes ativas dos botões
  const btnEs = document.getElementById('btnLangEs');
  const btnPt = document.getElementById('btnLangPt');
  if (btnEs && btnPt) {
    btnEs.classList.toggle('active', lang === 'es');
    btnPt.classList.toggle('active', lang === 'pt');
  }
  
  // Elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
  
  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
  
  document.documentElement.lang = (lang === 'pt' ? 'pt-BR' : 'es-PY');

  // Título da aba e descrição no idioma ativo
  if (dict.page_title) document.title = dict.page_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.page_desc) metaDesc.setAttribute('content', dict.page_desc);

  // Mensagem do botão WhatsApp da barra inferior e botão flutuante no idioma ativo
  const waMsg = (lang === 'pt')
    ? 'Olá, Dr. Matheus! Gostaria de mais informações sobre o atendimento médico no Paraguai.'
    : 'Hola, Dr. Matheus! Quisiera más información sobre la atención médica en Paraguay.';

  const mobileWa = document.getElementById('mobileWaLink');
  if (mobileWa) {
    mobileWa.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
  }

  const floatingWa = document.getElementById('floatingWaBtn');
  if (floatingWa) {
    floatingWa.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
  }

  const heroWa = document.getElementById('heroWaBtn');
  if (heroWa) {
    heroWa.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
  }

  const botoxCta = document.getElementById('botoxCtaBtn');
  if (botoxCta) {
    const botoxMsg = (lang === 'pt')
      ? 'Olá, Dr. Matheus! Gostaria de agendar uma avaliação para aplicação de Toxina Botulínica (Botox).'
      : 'Hola, Dr. Matheus! Quisiera agendar una consulta de evaluación para Toxina Botulínica (Botox).';
    botoxCta.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(botoxMsg)}`;
  }
}

// ==========================================
// 6. SELETOR DE CIDADE NA HOME
// ==========================================
function initHomeCitySelector() {
  // Atendimento a domicílio exclusivo em Ciudad del Este
}

// Inicia o funil vindo de um botão específico
window.selectServiceAndScroll = function(modality) {
  funnelData.modality = modality;
  if (modality === 'online') {
    funnelData.totalPrice = CONFIG.prices.online;
  } else if (modality === 'protocol') {
    funnelData.totalPrice = CONFIG.prices.protocol;
  } else {
    funnelData.totalPrice = CONFIG.prices.homecare;
  }
  
  updateModalitySelectionUI();
  
  // Rola até o funil (no mobile rola direto ao card interativo para enquadrar 100% no viewport)
  const funnelTarget = (window.innerWidth <= 768)
    ? (document.querySelector('.funnel-card') || document.getElementById('triagem'))
    : document.getElementById('triagem');
  if (funnelTarget) {
    funnelTarget.scrollIntoView({ behavior: 'smooth' });
  }
  
  currentStep = 1;
  showStep(currentStep);
};

// ==========================================
// 7. FUNIL DE TRIAGEM INTERATIVO
// ==========================================
function initFunnel() {
  // Step 1: Opções de modalidade
  const optOnline = document.getElementById('optModOnline');
  const optHome = document.getElementById('optModHome');
  const optProto = document.getElementById('optModProtocol');
  
  if (optOnline && optHome) {
    optOnline.addEventListener('click', () => {
      funnelData.modality = 'online';
      funnelData.totalPrice = CONFIG.prices.online;
      updateModalitySelectionUI();
      validateCurrentStep();
    });
    
    optHome.addEventListener('click', () => {
      funnelData.modality = 'homecare';
      funnelData.totalPrice = CONFIG.prices.homecare;
      updateModalitySelectionUI();
      validateCurrentStep();
    });
  }

  if (optProto) {
    optProto.addEventListener('click', () => {
      funnelData.modality = 'protocol';
      funnelData.totalPrice = CONFIG.prices.protocol;
      updateModalitySelectionUI();
      validateCurrentStep();
    });
  }
  
  // Step 2: Inputs de saúde e idade
  const inputAge = document.getElementById('inputAge');
  const inputWeight = document.getElementById('inputWeight');
  const inputHeight = document.getElementById('inputHeight');
  const chkSevere = document.getElementById('chkSevereSymptoms');
  
  if (inputAge) inputAge.addEventListener('input', validateAgeField);
  if (inputWeight) inputWeight.addEventListener('input', validateCurrentStep);
  if (inputHeight) inputHeight.addEventListener('input', validateCurrentStep);
  if (chkSevere) {
    chkSevere.addEventListener('change', (e) => {
      funnelData.hasSevereSymptoms = e.target.checked;
      handleSevereSymptomsAlert(e.target.checked);
      validateCurrentStep();
    });
  }
  
  // Step 3: Contato e consentimento
  const inputName = document.getElementById('inputPatientName');
  const inputAddress = document.getElementById('inputPatientAddress');
  const chkConsent = document.getElementById('chkHealthConsent');
  const chkMarketing = document.getElementById('chkMarketingConsent');
  
  if (inputName) inputName.addEventListener('input', validateCurrentStep);
  if (inputAddress) inputAddress.addEventListener('input', validateCurrentStep);
  if (chkConsent) chkConsent.addEventListener('change', validateCurrentStep);
  if (chkMarketing) {
    chkMarketing.addEventListener('change', (e) => {
      funnelData.marketingConsent = e.target.checked;
    });
  }
  
  // Botões de navegação
  const btnNext = document.getElementById('btnFunnelNext');
  const btnPrev = document.getElementById('btnFunnelPrev');
  
  if (btnNext) btnNext.addEventListener('click', handleNextStep);
  if (btnPrev) btnPrev.addEventListener('click', handlePrevStep);
  
  // Botão final do WhatsApp
  const btnFinish = document.getElementById('btnSendWhatsappFunnel');
  if (btnFinish) {
    btnFinish.addEventListener('click', sendFunnelToWhatsApp);
  }
  
  // Exibição inicial
  updateModalitySelectionUI();
  showStep(1);
}

function updateModalitySelectionUI() {
  const optOnline = document.getElementById('optModOnline');
  const optHome = document.getElementById('optModHome');
  const optProto = document.getElementById('optModProtocol');
  
  if (optOnline) optOnline.classList.toggle('selected', funnelData.modality === 'online');
  if (optHome) optHome.classList.toggle('selected', funnelData.modality === 'homecare');
  if (optProto) optProto.classList.toggle('selected', funnelData.modality === 'protocol');
}

function updateFunnelPriceDisplay() {
  if (funnelData.modality === 'online') {
    funnelData.totalPrice = CONFIG.prices.online;
  } else if (funnelData.modality === 'protocol') {
    funnelData.totalPrice = CONFIG.prices.protocol;
  } else {
    funnelData.totalPrice = CONFIG.prices.homecare;
  }
}

function showStep(step) {
  currentStep = step;
  
  // Alterna painéis
  for (let i = 1; i <= totalSteps; i++) {
    const pane = document.getElementById(`funnelPane${i}`);
    if (pane) {
      pane.style.display = ''; // limpa o estado da tela de sucesso
      pane.classList.toggle('active', i === step);
    }
    
    const node = document.getElementById(`stepNode${i}`);
    if (node) {
      node.classList.toggle('active', i === step);
      node.classList.toggle('completed', i < step);
    }
  }
  
  // Reexibe controles caso o funil seja reaberto depois da tela de sucesso
  const navBar = document.querySelector('.funnel-nav');
  if (navBar) navBar.style.display = '';
  const stepsBar = document.querySelector('.steps-indicator');
  if (stepsBar) stepsBar.style.display = '';

  // Painel de sucesso (oculto por padrão até o submit)
  const successPane = document.getElementById('funnelSuccessPane');
  if (successPane) successPane.style.display = 'none';
  
  // Atualiza barra de progresso
  const progressBar = document.getElementById('funnelProgressBar');
  if (progressBar) {
    const progressPercent = ((step - 1) / (totalSteps - 1)) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }
  
  // Botão Voltar
  const btnPrev = document.getElementById('btnFunnelPrev');
  if (btnPrev) {
    btnPrev.style.visibility = (step === 1) ? 'hidden' : 'visible';
  }
  
  // Adaptação de campos no Step 3
  const addressGroup = document.getElementById('addressFormGroup');
  if (addressGroup) {
    addressGroup.style.display = (funnelData.modality === 'homecare' && step === 3) ? 'block' : 'none';
  }
  
  validateCurrentStep();
}

function handleNextStep() {
  // Se estiver no Step 2, coleta os dados de saúde
  if (currentStep === 2) {
    funnelData.age = document.getElementById('inputAge').value.trim();
    funnelData.weight = document.getElementById('inputWeight').value.trim();
    funnelData.height = document.getElementById('inputHeight').value.trim();
    funnelData.conditions = document.getElementById('inputConditions').value.trim();
    funnelData.medications = document.getElementById('inputMeds').value.trim();
    funnelData.allergies = document.getElementById('inputAllergies').value.trim();
    
    const pregSelect = document.getElementById('selectPregnancy');
    funnelData.isPregnant = pregSelect ? pregSelect.value : 'no';
  }
  
  // Se estiver no último passo (3), finaliza
  if (currentStep === totalSteps) {
    funnelData.patientName = document.getElementById('inputPatientName').value.trim();
    const addrInput = document.getElementById('inputPatientAddress');
    funnelData.patientAddress = addrInput ? addrInput.value.trim() : '';
    
    showSuccessScreen();
    return;
  }
  
  if (currentStep < totalSteps) {
    showStep(currentStep + 1);
  }
}

function handlePrevStep() {
  if (currentStep > 1) {
    showStep(currentStep - 1);
  }
}

// Validação da Idade (Regra: mínimo 18 anos)
function validateAgeField() {
  const inputAge = document.getElementById('inputAge');
  const underAgeAlert = document.getElementById('underAgeAlert');
  if (!inputAge) return;
  
  const val = parseInt(inputAge.value.trim(), 10);
  if (!isNaN(val) && val > 0 && val < 18) {
    if (underAgeAlert) underAgeAlert.style.display = 'flex';
  } else {
    if (underAgeAlert) underAgeAlert.style.display = 'none';
  }
  validateCurrentStep();
}

// Alerta de Sintomas Graves / Emergência 911
function handleSevereSymptomsAlert(isSevere) {
  const alertEmergency = document.getElementById('severeSymptomsAlert');
  if (alertEmergency) {
    alertEmergency.style.display = isSevere ? 'flex' : 'none';
  }
}

// Valida se o passo atual permite avançar
function validateCurrentStep() {
  const btnNext = document.getElementById('btnFunnelNext');
  if (!btnNext) return;
  
  let isValid = true;
  
  if (currentStep === 1) {
    isValid = (funnelData.modality === 'online' || funnelData.modality === 'homecare' || funnelData.modality === 'protocol');
  } else if (currentStep === 2) {
    const ageVal = parseInt(document.getElementById('inputAge').value.trim(), 10);
    const weightVal = document.getElementById('inputWeight').value.trim();
    const heightVal = document.getElementById('inputHeight').value.trim();
    
    const isUnderAge = (!isNaN(ageVal) && ageVal < 18);
    const hasSevere = funnelData.hasSevereSymptoms;
    
    isValid = !isNaN(ageVal) && ageVal >= 18 && weightVal !== "" && heightVal !== "" && !hasSevere;
  } else if (currentStep === 3) {
    const nameVal = document.getElementById('inputPatientName').value.trim();
    const consentChecked = document.getElementById('chkHealthConsent').checked;
    
    if (funnelData.modality === 'homecare') {
      const addrVal = document.getElementById('inputPatientAddress').value.trim();
      isValid = nameVal !== "" && addrVal !== "" && consentChecked;
    } else {
      isValid = nameVal !== "" && consentChecked;
    }
  }
  
  btnNext.disabled = !isValid;
  btnNext.style.opacity = isValid ? '1' : '0.45';
}

function showSuccessScreen() {
  // Esconde todos os painéis e controles do funil
  for (let i = 1; i <= totalSteps; i++) {
    const pane = document.getElementById(`funnelPane${i}`);
    if (pane) pane.style.display = 'none';
  }
  
  const nav = document.querySelector('.funnel-nav');
  if (nav) nav.style.display = 'none';
  
  const indicator = document.querySelector('.steps-indicator');
  if (indicator) indicator.style.display = 'none';
  
  const successPane = document.getElementById('funnelSuccessPane');
  if (successPane) {
    successPane.style.display = 'block';
    successPane.scrollIntoView({ behavior: 'smooth' });
  }
}

// Gera e envia a mensagem estruturada para o WhatsApp sem armazenar dados no site
function sendFunnelToWhatsApp() {
  // Todos os rótulos da mensagem saem no idioma ativo
  const dict = TRANSLATIONS[currentLang];
  const pregLabel = (funnelData.isPregnant === 'yes') ? dict.opt_preg_yes : dict.opt_preg_no;
  const conditionsText = funnelData.conditions || dict.not_informed;
  const medsText = funnelData.medications || dict.not_informed;
  const allergiesText = funnelData.allergies || dict.not_informed;
  
  let modalityLabel = '';
  if (funnelData.modality === 'online') {
    modalityLabel = 'Consulta Online (Meet)';
  } else if (funnelData.modality === 'protocol') {
    modalityLabel = (currentLang === 'pt' ? 'Protocolo de Emagrecimento (Tratamento VIP)' : 'Protocolo de Emagrecimento (Tratamiento VIP)');
  } else {
    modalityLabel = (currentLang === 'pt' ? 'Atendimento a Domicílio em Ciudad del Este' : 'Atención a Domicilio en Ciudad del Este');
  }
    
  let msg = "";
  
  if (currentLang === 'pt') {
    msg = `Olá, Dr. Matheus! Gostaria de agendar uma consulta médica. Seguem minhas informações de triagem:

📋 *ATENDIMENTO:*
• Modalidade: ${modalityLabel}
• Valor de Referência: ${funnelData.totalPrice}

🩺 *DADOS DE SAÚDE:*
• Idade: ${funnelData.age} anos | Peso: ${funnelData.weight} kg | Altura: ${funnelData.height} cm
• Condições prévias: ${conditionsText}
• Medicamentos em uso: ${medsText}
• Alergias: ${allergiesText}
• Gravidez / Amamentação: ${pregLabel}

👤 *DADOS DO PACIENTE:*
• Nome: ${funnelData.patientName}
${funnelData.modality === 'homecare' ? `• Endereço em Ciudad del Este: ${funnelData.patientAddress}` : ''}

✅ *Consentimento:* Autorizo o uso destas informações para fins de triagem e agendamento da consulta médica sob sigilo profissional.`;
  } else {
    msg = `¡Hola, Dr. Matheus! Me gustaría agendar una consulta médica. Aquí están mis datos de triaje:

📋 *MODALIDAD:*
• Tipo de atención: ${modalityLabel}
• Tarifa de Referencia: ${funnelData.totalPrice}

🩺 *DATOS DE SALUD:*
• Edad: ${funnelData.age} años | Peso: ${funnelData.weight} kg | Altura: ${funnelData.height} cm
• Condiciones previas: ${conditionsText}
• Medicamentos en uso: ${medsText}
• Alergias: ${allergiesText}
• Embarazo / Lactancia: ${pregLabel}

👤 *DATOS DEL PACIENTE:*
• Nombre: ${funnelData.patientName}
${funnelData.modality === 'homecare' ? `• Dirección en Ciudad del Este: ${funnelData.patientAddress}` : ''}

✅ *Consentimiento:* Autorizo el uso de estos datos de salud para fines de triaje y atención médica bajo secreto profesional.`;
  }
  
  const encoded = encodeURIComponent(msg);
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// 8. FAQ ACCORDION INTERATIVO (SEM LAYOUT THRASHING)
// ==========================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (question && answer) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // FASE 1: LEITURA (Mede scrollHeight antes de qualquer mutação no DOM)
        const targetHeight = !isActive ? answer.scrollHeight : 0;
        
        // FASE 2: ESCRITA (Agrupa mutações de classes e estilos via requestAnimationFrame)
        window.requestAnimationFrame(() => {
          faqItems.forEach(other => {
            if (other !== item && other.classList.contains('active')) {
              other.classList.remove('active');
              const otherAns = other.querySelector('.faq-answer');
              if (otherAns) otherAns.style.maxHeight = null;
            }
          });
          
          if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = `${targetHeight}px`;
          } else {
            item.classList.remove('active');
            answer.style.maxHeight = null;
          }
        });
      });
    }
  });
}

// ==========================================
// 9. MODAL DE PRIVACIDADE E DADOS (LEI 7593/2025)
// ==========================================
function initModals() {
  const modal = document.getElementById('privacyModal');
  const openBtns = document.querySelectorAll('.open-privacy-modal');
  const closeBtn = document.getElementById('closePrivacyModal');
  
  if (modal) {
    // Delegação: o link da política é recriado ao trocar de idioma, então o clique é tratado no documento
    document.addEventListener('click', (e) => {
      if (e.target.closest('.open-privacy-modal')) {
        e.preventDefault();
        modal.classList.add('active');
      }
    });
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}

// ==========================================
// 10. BANNER DE COOKIES (CONSENT MODE V2)
// ==========================================
function initCookies() {
  const banner = document.getElementById('cookieBanner');
  const btnAccept = document.getElementById('cookieAccept');
  const btnDecline = document.getElementById('cookieDecline');
  
  if (!banner) return;
  
  const consent = localStorage.getItem('dr_matheus_cookie_consent');
  if (!consent) {
    banner.style.display = 'block';
  }
  
  if (btnAccept) {
    btnAccept.addEventListener('click', () => {
      localStorage.setItem('dr_matheus_cookie_consent', 'granted');
      banner.style.display = 'none';
    });
  }
  
  if (btnDecline) {
    btnDecline.addEventListener('click', () => {
      localStorage.setItem('dr_matheus_cookie_consent', 'denied');
      banner.style.display = 'none';
    });
  }
}

// ==========================================
// 11. MENU MOBILE
// ==========================================
function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('navMenu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('mobile-open');
    });
    
    // Fecha ao clicar em um link
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('mobile-open');
      });
    });
  }
}

// ==========================================
// 12. CARROSSEL DE BOTOX (DESKTOP & MOBILE SWIPE - SEM LAYOUT THRASHING)
// ==========================================
function initBotoxCarousel() {
  const carousel = document.getElementById('botoxCarousel');
  const prevBtn = document.getElementById('botoxPrevBtn');
  const nextBtn = document.getElementById('botoxNextBtn');
  const dotsContainer = document.getElementById('botoxDots');
  if (!carousel) return;

  const cards = carousel.querySelectorAll('.botox-card');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.botox-dot') : [];

  // FASE 1: LEITURA ISOLADA (Cache da medição geométrica para evitar reflow durante rolagem)
  let cachedStep = cards.length > 0 ? (cards[0].offsetWidth + 24) : 300;

  // Atualiza medição apenas em resize com leitura isolada
  window.addEventListener('resize', () => {
    if (cards.length > 0) {
      cachedStep = cards[0].offsetWidth + 24;
    }
  }, { passive: true });

  // Setas Desktop
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -cachedStep, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: cachedStep, behavior: 'smooth' });
    });
  }

  // Clique nos dots indicadores
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    });
  });

  // Atualização em tempo real do dot ativo via requestAnimationFrame (desacopla leitura de escrita)
  let scrollTicking = false;
  carousel.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        // LEITURA
        const scrollPos = carousel.scrollLeft;
        const activeIdx = Math.round(scrollPos / cachedStep);
        const clampedIdx = Math.min(Math.max(activeIdx, 0), cards.length - 1);

        // ESCRITA (Mutações de classe em batch)
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === clampedIdx);
        });
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });
}

// ==========================================
// 13. BARRA INFERIOR MOBILE FIXA (THROTTLED COM rAF)
// ==========================================
function initMobileBottomBarScroll() {
  const bottomBar = document.querySelector('.mobile-bottom-bar');
  if (!bottomBar) return;

  const SCROLL_THRESHOLD = 160; // Pixels de rolagem para acionar a barra
  let isBarVisible = false;
  let ticking = false;

  function updateBar() {
    // LEITURA
    const shouldShow = window.scrollY > SCROLL_THRESHOLD;
    if (shouldShow !== isBarVisible) {
      // ESCRITA apenas quando houver alteração de estado
      isBarVisible = shouldShow;
      bottomBar.classList.toggle('is-visible', isBarVisible);
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateBar);
      ticking = true;
    }
  }, { passive: true });

  // Estado inicial
  updateBar();
}


