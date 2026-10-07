// Configuration propre à la langue : textes de l'interface, voix, IA, lecture.
// Le reste de l'app (js/app.js, store, sync, speech, ai) est commun aux apps de langues.
window.LANG = {
  id: 'en',
  appName: 'Let’s Talk',
  title: 'Let’s Talk · Anglais',
  langNameFr: 'anglais',
  locale: 'en-GB',
  storageKey: 'english-app-v1',
  syncFile: 'progress-en.json',
  dataRepo: 'RoyMusango/hablemos-data',
  pagesUrl: 'https://roymusango.github.io/letstalk/',
  siblings: [['Espagnol', 'https://roymusango.github.io/hablemos/'], ['Néerlandais', 'https://roymusango.github.io/praten/']],

  defaults: { dailyMinutes: 20, level: 'B2-C1', newPerDay: 10, showTranslation: false },
  levels: ['B1', 'B2', 'B2-C1', 'C1', 'C2'],

  nav: { today: 'Today', speak: 'Speak', words: 'Words', verbs: 'Verbs', sounds: 'Sounds', grammar: 'Grammar', read: 'Read', progress: 'Progress', settings: 'Settings' },
  t: {
    session: 'Your session', priorities: 'Your priorities', wotd: 'Phrase of the day', speakToday: 'Let’s talk today',
    stepWords: 'Words', stepGrammar: 'Verbs & grammar', stepSpeak: 'Speak',
    questions: 'Questions', speakAloud: 'Speak up', wellDone: 'Well done!',
    review: 'Review', synonyms: 'Synonyms', themes: 'Themes', inLang: 'En anglais',
    conjugator: 'Verb forms', verbsEyebrow: 'Verbes',
    verbsLead: 'Verbes irréguliers et choix du temps en contexte. En mode intelligent, l’entraîneur insiste sur tes points faibles (present perfect, past perfect, conditionnels, passif) et te ressert les verbes ratés.',
    soundsLead: 'Les sons et accents toniques qui trahissent un francophone, même à niveau avancé. Écoute une voix native, répète, et le micro vérifie que tu es compris.',
    vocabPrioDefault: n => `${n} thèmes actifs : phrasal verbs, collocations, registre soutenu, finance, IA et RAG.`,
    startConv: '(Start the conversation.)',
    rescue: ['Sorry, could you say that again?', 'What’s the word for … ?', 'It’s a kind of … that you use to …', 'Let me rephrase that.'],
    circumlocution: ['It’s a kind of … that…', 'It’s the thing you use to…', 'It’s the opposite of…', 'It’s similar to…, but…', 'What’s the word for « … »?'],
    lookupPlaceholder: 'ex. : se débrouiller, taux directeur, un pari risqué',
  },
  courseThemesNote: '',
  grammarLinks: 'Pour approfondir : <a class="link" href="https://www.englisch-hilfen.de/en/" target="_blank" rel="noopener">Englisch Hilfen</a>, <a class="link" href="https://dictionary.cambridge.org/grammar/british-grammar/" target="_blank" rel="noopener">Cambridge Grammar</a> et <a class="link" href="https://www.lingolia.com/en/" target="_blank" rel="noopener">Lingolia</a>.',

  normalize: {
    articles: /^(the|a|an|to)\s+/,
    pronouns: /^(i|you|he|she|it|we|they)\s+/,
  },

  voice: {
    accept: /^en([-_]|$)/i, defaultVariant: 'en-GB',
    variants: [['en-GB', 'Britannique (recommandé pour la finance européenne)'], ['en-US', 'Américain']],
    title: 'Voix anglaise native', preferLabel: 'Accent choisi', otherLabel: 'Autres accents anglophones',
    female: /sonia|libby|maisie|abbie|bella|hollie|olivia|aria|jenny|michelle|emma|ava|serena|hazel|susan|zira|female|samantha|karen|moira|tessa|kate|natasha|clara/i,
    male: /ryan|thomas|alfie|elliot|ethan|noah|oliver|guy|davis|tony|jason|christopher|eric|andrew|brian|george|david|mark|male|daniel|arthur|fred|william|liam/i,
    help: 'L’app n’utilise que des voix anglaises natives. Les plus naturelles sont les voix neuronales de <b>Microsoft Edge</b> (Sonia, Ryan pour l’accent britannique ; Aria, Guy pour l’américain), gratuites. Dans Chrome, choisis « Google UK English ».',
    missing: 'Aucune voix anglaise disponible. Ouvre l’app dans Microsoft Edge ou Chrome.',
    onlyOther: 'L’accent choisi n’est pas disponible dans ce navigateur : une autre voix anglaise native est utilisée.',
    robotic: 'Voix anglaise disponible mais synthétique. Edge propose des voix neuronales bien plus naturelles.',
    testF: 'Hi, I’m Laura, your thesis co-supervisor. So, how is the literature review coming along?',
    testM: 'Good morning. Could you walk me through the architecture of your sovereign RAG system?',
  },

  ai: {
    get target() { return (Store.settings.voiceVariant || 'en-GB') === 'en-US' ? 'American English' : 'British English'; },
    levelRules: lv => `He is at level ${lv}: speak naturally, like a native colleague, 2 to 4 sentences per turn. Use idioms, phrasal verbs and precise vocabulary, and from time to time a C1 structure (inversion, cleft sentence, mixed conditional) so he hears them in context. Push him to elaborate, justify and nuance.`,
    extraRules: '- Beyond real errors, flag UNNATURAL phrasing (French calques, wrong collocations, false friends, too basic or vague word choice) with a more idiomatic or more precise C1 alternative, topic "naturalness" or the closest grammar topic.\n- Do not translate unless he asks; keep the conversation flowing.',
    errorTypes: 'tense and aspect, articles, prepositions, collocations, false friends, countability, word choice, word order, register, unnatural phrasing',
    readingLevel: 'at C1 level, in an authentic professional style (quality press, industry report or academic blog)',
    lookupArticle: 'with typical collocations',
    testSystem: 'Answer in one short sentence in English.',
    testUser: 'Greet a Belgian AI student who is writing a thesis on AI in banking and is a big Barça fan.',
  },

  priorityCats: { 'Thesis & career': 2, 'Banking & AI': 2, 'Football': 1 },
  wotdThemes: ['idioms', 'phrasal', 'formal', 'collocations', 'hedging', 'finance', 'ai_ml', 'rag'],
  readTopics: [
    ['finance', 'IA & banque', 'how banks use AI today: credit scoring, fraud detection, customer service, and the risks'],
    ['rag', 'RAG souverain', 'sovereign RAG and LLM governance in regulated industries: data residency, on-premise deployment, auditability'],
    ['decision', 'Aide à la décision', 'decision science in practice: trade-offs, optimisation, uncertainty and communicating results to managers'],
    ['regulation', 'Régulation', 'banking and AI regulation in Europe explained simply: capital requirements, model risk, the EU AI Act (general principles, no invented figures)'],
    ['academic', 'Thèse & carrière', 'writing a master’s thesis abroad, working with supervisors, and landing a first job in finance'],
    ['football', 'Football', 'the business side of football clubs like FC Barcelona: finances, academies, fan culture'],
  ],
  readLengths: [[200, 'Court'], [350, 'Moyen'], [500, 'Long']],
};
