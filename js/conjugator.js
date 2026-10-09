// Verbes anglais : irréguliers, temps et aspects, conditionnels, passif.
// Personnes : 0 I, 1 you, 2 he/she/it, 3 we, 4 you (pl.), 5 they
(function (global) {
  const PERSONS = ['I', 'you', 'he / she / it', 'we', 'you (pl.)', 'they'];
  const PERSONS_SHORT = ['I', 'you', 'she', 'we', 'you', 'they'];

  // past / pp : formes acceptées séparées par « | » (la première est affichée)
  // c : complément pour les phrases ; s / ing : formes irrégulières à la 3e personne ou en -ing
  const VERBS = [
    { inf: 'be', past: 'was|were', pp: 'been', fr: 'être', c: 'in Barcelona', s: 'is', ing: 'being' },
    { inf: 'have', past: 'had', pp: 'had', fr: 'avoir', c: 'a meeting with the risk team', s: 'has' },
    { inf: 'do', past: 'did', pp: 'done', fr: 'faire', c: 'the analysis', s: 'does' },
    { inf: 'go', past: 'went', pp: 'gone', fr: 'aller', c: 'to the bank’s headquarters', s: 'goes' },
    { inf: 'make', past: 'made', pp: 'made', fr: 'faire, fabriquer', c: 'a decision', ing: 'making' },
    { inf: 'take', past: 'took', pp: 'taken', fr: 'prendre', c: 'the train to Madrid', ing: 'taking' },
    { inf: 'get', past: 'got', pp: 'got|gotten', fr: 'obtenir', c: 'the results', ing: 'getting' },
    { inf: 'give', past: 'gave', pp: 'given', fr: 'donner', c: 'a presentation', ing: 'giving' },
    { inf: 'see', past: 'saw', pp: 'seen', fr: 'voir', c: 'the new dashboard' },
    { inf: 'know', past: 'knew', pp: 'known', fr: 'savoir, connaître', c: 'the answer' },
    { inf: 'think', past: 'thought', pp: 'thought', fr: 'penser', c: 'about the problem' },
    { inf: 'come', past: 'came', pp: 'come', fr: 'venir', c: 'to the conference', ing: 'coming' },
    { inf: 'find', past: 'found', pp: 'found', fr: 'trouver', c: 'a bug in the pipeline' },
    { inf: 'tell', past: 'told', pp: 'told', fr: 'dire, raconter', c: 'the client the truth' },
    { inf: 'become', past: 'became', pp: 'become', fr: 'devenir', c: 'a data scientist', ing: 'becoming' },
    { inf: 'leave', past: 'left', pp: 'left', fr: 'quitter, partir', c: 'the office', ing: 'leaving' },
    { inf: 'bring', past: 'brought', pp: 'brought', fr: 'apporter', c: 'the documents' },
    { inf: 'buy', past: 'bought', pp: 'bought', fr: 'acheter', c: 'shares in the company' },
    { inf: 'build', past: 'built', pp: 'built', fr: 'construire', c: 'a prototype' },
    { inf: 'choose', past: 'chose', pp: 'chosen', fr: 'choisir', c: 'an open-source model', ing: 'choosing' },
    { inf: 'begin', past: 'began', pp: 'begun', fr: 'commencer', c: 'the internship', ing: 'beginning' },
    { inf: 'write', past: 'wrote', pp: 'written', fr: 'écrire', c: 'the literature review', ing: 'writing' },
    { inf: 'read', past: 'read', pp: 'read', fr: 'lire', c: 'the report' },
    { inf: 'speak', past: 'spoke', pp: 'spoken', fr: 'parler', c: 'to the supervisor' },
    { inf: 'meet', past: 'met', pp: 'met', fr: 'rencontrer', c: 'the head of risk' },
    { inf: 'run', past: 'ran', pp: 'run', fr: 'courir, faire tourner', c: 'the experiment', ing: 'running' },
    { inf: 'lead', past: 'led', pp: 'led', fr: 'mener, diriger', c: 'the project' },
    { inf: 'lose', past: 'lost', pp: 'lost', fr: 'perdre', c: 'a lot of money', ing: 'losing' },
    { inf: 'pay', past: 'paid', pp: 'paid', fr: 'payer', c: 'the invoice' },
    { inf: 'send', past: 'sent', pp: 'sent', fr: 'envoyer', c: 'the draft' },
    { inf: 'spend', past: 'spent', pp: 'spent', fr: 'dépenser, passer (du temps)', c: 'three months on it' },
    { inf: 'understand', past: 'understood', pp: 'understood', fr: 'comprendre', c: 'the requirements' },
    { inf: 'learn', past: 'learnt|learned', pp: 'learnt|learned', fr: 'apprendre', c: 'a lot about credit risk' },
    { inf: 'feel', past: 'felt', pp: 'felt', fr: 'ressentir', c: 'confident about the defence' },
    { inf: 'keep', past: 'kept', pp: 'kept', fr: 'garder', c: 'the data on-premise' },
    { inf: 'hold', past: 'held', pp: 'held', fr: 'tenir', c: 'a workshop' },
    { inf: 'set', past: 'set', pp: 'set', fr: 'fixer, régler', c: 'a deadline', ing: 'setting' },
    { inf: 'put', past: 'put', pp: 'put', fr: 'mettre', c: 'the model into production', ing: 'putting' },
    { inf: 'cut', past: 'cut', pp: 'cut', fr: 'couper, réduire', c: 'costs', ing: 'cutting' },
    { inf: 'win', past: 'won', pp: 'won', fr: 'gagner', c: 'the match', ing: 'winning' },
    { inf: 'drive', past: 'drove', pp: 'driven', fr: 'conduire', c: 'growth', ing: 'driving' },
    { inf: 'rise', past: 'rose', pp: 'risen', fr: 'augmenter, monter', c: 'sharply', ing: 'rising' },
    { inf: 'fall', past: 'fell', pp: 'fallen', fr: 'tomber, baisser', c: 'by two percent' },
    { inf: 'grow', past: 'grew', pp: 'grown', fr: 'grandir, croître', c: 'quickly' },
    { inf: 'show', past: 'showed', pp: 'shown|showed', fr: 'montrer', c: 'promising results' },
    { inf: 'forget', past: 'forgot', pp: 'forgotten', fr: 'oublier', c: 'the password', ing: 'forgetting' },
    { inf: 'catch', past: 'caught', pp: 'caught', fr: 'attraper', c: 'the last train' },
    { inf: 'teach', past: 'taught', pp: 'taught', fr: 'enseigner', c: 'machine learning' },
    { inf: 'fight', past: 'fought', pp: 'fought', fr: 'combattre', c: 'fraud' },
    { inf: 'seek', past: 'sought', pp: 'sought', fr: 'chercher (soutenu)', c: 'funding' },
    { inf: 'withdraw', past: 'withdrew', pp: 'withdrawn', fr: 'retirer', c: 'the offer' },
    { inf: 'undertake', past: 'undertook', pp: 'undertaken', fr: 'entreprendre', c: 'a research project', ing: 'undertaking' },
    { inf: 'arise', past: 'arose', pp: 'arisen', fr: 'survenir', c: 'during testing', ing: 'arising' },
    { inf: 'bear', past: 'bore', pp: 'borne', fr: 'supporter, porter', c: 'the cost' },
    { inf: 'overcome', past: 'overcame', pp: 'overcome', fr: 'surmonter', c: 'the main obstacle', ing: 'overcoming' },
    { inf: 'mislead', past: 'misled', pp: 'misled', fr: 'induire en erreur', c: 'investors' },
    // Verbes réguliers fréquents dans un contexte professionnel
    { inf: 'work', past: 'worked', pp: 'worked', fr: 'travailler', c: 'at the bank' },
    { inf: 'develop', past: 'developed', pp: 'developed', fr: 'développer', c: 'a new scoring model' },
    { inf: 'deploy', past: 'deployed', pp: 'deployed', fr: 'déployer', c: 'the system on-premise' },
    { inf: 'analyse', past: 'analysed|analyzed', pp: 'analysed|analyzed', fr: 'analyser', c: 'the transactions', ing: 'analysing' },
    { inf: 'study', past: 'studied', pp: 'studied', fr: 'étudier', c: 'decision theory', s: 'studies' },
    { inf: 'plan', past: 'planned', pp: 'planned', fr: 'planifier', c: 'the next sprint', ing: 'planning' },
    { inf: 'stop', past: 'stopped', pp: 'stopped', fr: 'arrêter', c: 'the experiment', ing: 'stopping' },
    { inf: 'decide', past: 'decided', pp: 'decided', fr: 'décider', c: 'to change the approach', ing: 'deciding' },
    { inf: 'improve', past: 'improved', pp: 'improved', fr: 'améliorer', c: 'the accuracy', ing: 'improving' },
    { inf: 'apply', past: 'applied', pp: 'applied', fr: 'postuler, appliquer', c: 'for the graduate programme', s: 'applies' },
    { inf: 'rely', past: 'relied', pp: 'relied', fr: 'compter sur', c: 'on open-source tools', s: 'relies' },
    { inf: 'invest', past: 'invested', pp: 'invested', fr: 'investir', c: 'in AI' },
    { inf: 'achieve', past: 'achieved', pp: 'achieved', fr: 'atteindre, réussir', c: 'our targets', ing: 'achieving' },
    { inf: 'submit', past: 'submitted', pp: 'submitted', fr: 'soumettre, rendre', c: 'the thesis', ing: 'submitting' },
    { inf: 'train', past: 'trained', pp: 'trained', fr: 'entraîner', c: 'the model' },
    { inf: 'test', past: 'tested', pp: 'tested', fr: 'tester', c: 'the retrieval pipeline' },
  ];
  const BY_INF = Object.fromEntries(VERBS.map(v => [v.inf, v]));
  // Verbes réguliers (exclus de l'exercice sur les irréguliers) et verbes d'action qui acceptent la forme continue
  const REGULAR = ['work', 'develop', 'deploy', 'analyse', 'study', 'plan', 'stop', 'decide', 'improve', 'apply', 'rely', 'invest', 'achieve', 'submit', 'train', 'test'];
  const DURATIVE = ['work', 'study', 'develop', 'analyse', 'train', 'test', 'write', 'read', 'run', 'learn', 'build', 'lead', 'plan', 'invest', 'improve', 'teach', 'fight', 'drive', 'grow', 'think', 'seek', 'speak', 'spend'];
  const forms = x => x.split('|');
  const past = (v, p) => v.inf === 'be' ? (p === 0 || p === 2 ? 'was' : 'were') : forms(v.past)[0];
  const pastAll = (v, p) => v.inf === 'be' ? [past(v, p)] : forms(v.past);
  const pp = v => forms(v.pp)[0];
  function third(v) {
    if (v.s) return v.s;
    const b = v.inf;
    if (/(s|sh|ch|x|z|o)$/.test(b)) return b + 'es';
    if (/[^aeiou]y$/.test(b)) return b.slice(0, -1) + 'ies';
    return b + 's';
  }
  function ing(v) {
    if (v.ing) return v.ing;
    const b = v.inf;
    if (/ie$/.test(b)) return b.slice(0, -2) + 'ying';
    if (/[^e]e$/.test(b)) return b.slice(0, -1) + 'ing';
    return b + 'ing';
  }
  const has = p => (p === 2 ? 'has' : 'have');
  const presentBe = p => (p === 0 ? 'am' : p === 2 ? 'is' : 'are');

  // Formes par temps (toutes les variantes acceptées)
  function forms_(v, tense, p) {
    const pps = forms(v.pp);
    switch (tense) {
      case 'present': return [v.inf === 'be' ? presentBe(p) : p === 2 ? third(v) : (v.inf === 'have' ? 'have' : v.inf)];
      case 'past_simple': return pastAll(v, p);
      case 'present_perfect': return pps.map(x => `${has(p)} ${x}`).concat(DURATIVE.includes(v.inf) ? [`${has(p)} been ${ing(v)}`] : []);
      case 'past_perfect': return pps.map(x => `had ${x}`);
      case 'future_perfect': return pps.map(x => `will have ${x}`);
      case 'cond3': return pps.map(x => `would have ${x}`);
      case 'future': return [`will ${v.inf}`, `${p === 0 ? 'am' : p === 2 ? 'is' : 'are'} going to ${v.inf}`];
      case 'conditional': return [`would ${v.inf}`];
      case 'past_cont': return [`${p === 0 || p === 2 ? 'was' : 'were'} ${ing(v)}`];
    }
    return [];
  }
  const conjugate = (inf, tense, p) => forms_(BY_INF[inf], tense, p)[0];

  // ---------- Entraîneur (interface commune utilisée par app.js) ----------
  const TRAIN = ['irregular', 'past_simple', 'present_perfect', 'past_perfect', 'future_perfect', 'cond3', 'passive'];
  const NAMES = {
    irregular: 'Verbes irréguliers', past_simple: 'Past simple', present_perfect: 'Present perfect', past_perfect: 'Past perfect',
    future_perfect: 'Future perfect', cond3: 'Third conditional', passive: 'Passive voice', present: 'Present simple',
    future: 'Future', conditional: 'Conditional', past_cont: 'Past continuous',
  };
  const TOPIC = { irregular: 'irregular_verbs', past_simple: 'past_vs_perfect', present_perfect: 'past_vs_perfect', past_perfect: 'narrative_tenses', future_perfect: 'future_forms', cond3: 'conditionals', passive: 'passive' };
  const PRIORITY = ['present_perfect', 'irregular', 'past_perfect', 'cond3', 'passive', 'past_simple', 'future_perfect'];
  const SUBJ = [['I'], ['you'], ['she', 'he', 'my supervisor', 'the bank', 'Laura'], ['we'], ['you'], ['they', 'my colleagues', 'the analysts']];
  const PERSON_WEIGHTS = [0, 0, 1, 1, 2, 2, 2, 3, 3, 5, 5];
  const CONTEXT = {
    past_simple: ['Yesterday', 'Last year', 'In 2019', 'Two weeks ago', 'When I was a student', 'Last Monday'],
    present_perfect: ['Since January', 'So far this year', 'Over the past few months', 'Since the beginning of the internship'],
    past_perfect: ['By the time the meeting started', 'Before the audit began', 'When the regulator called'],
    future_perfect: ['By next June', 'By the end of the year', 'By the time you read this'],
  };
  // Passif : phrases avec un sujet « chose »
  const PASSIVE = [
    { s: 'The model', pl: false, v: 'train', c: 'on two million transactions', t: 'past', m: 'last year' },
    { s: 'The loans', pl: true, v: 'approve', c: 'by a credit committee', t: 'present', m: 'usually' },
    { s: 'The data', pl: false, v: 'store', c: 'on-premise', t: 'present', m: 'always' },
    { s: 'The report', pl: false, v: 'write', c: 'by the risk team', t: 'past', m: 'last month' },
    { s: 'The results', pl: true, v: 'present', c: 'to the board', t: 'past', m: 'yesterday' },
    { s: 'Customer data', pl: false, v: 'encrypt', c: 'at rest and in transit', t: 'present', m: 'always' },
    { s: 'The documents', pl: true, v: 'split', c: 'into small chunks', t: 'present', m: 'first' },
    { s: 'Fraudulent transactions', pl: true, v: 'detect', c: 'in real time', t: 'present', m: 'now' },
    { s: 'The thesis', pl: false, v: 'submit', c: 'in June', t: 'past', m: 'finally' },
    { s: 'The bank', pl: false, v: 'fine', c: 'by the regulator', t: 'past', m: 'in 2021' },
    { s: 'A new policy', pl: false, v: 'introduce', c: 'by management', t: 'past', m: 'recently' },
    { s: 'The answers', pl: true, v: 'ground', c: 'in the bank’s own documents', t: 'present', m: 'always' },
  ];
  const PASSIVE_PP = { train: 'trained', approve: 'approved', store: 'stored', write: 'written', present: 'presented', encrypt: 'encrypted', split: 'split', detect: 'detected', submit: 'submitted', fine: 'fined', introduce: 'introduced', ground: 'grounded' };

  function makeItem(tense, { pick, trouble }) {
    if (tense === 'passive') {
      const x = pick(PASSIVE);
      const aux = x.t === 'past' ? (x.pl ? 'were' : 'was') : (x.pl ? 'are' : 'is');
      const ans = `${aux} ${PASSIVE_PP[x.v]}`;
      const before = x.m === 'always' || x.m === 'usually' || x.m === 'now' || x.m === 'first' || x.m === 'finally' || x.m === 'recently';
      const prompt = before ? `${x.s} ___ ${x.c} (${x.m}).` : `${x.s} ___ ${x.c} ${x.m}.`;
      return { kind: 'bare', tense, verb: x.v, p: x.pl ? 5 : 2, prompt, sub: `Passif de « ${x.v} » (${x.t === 'past' ? 'past simple' : 'present simple'})`, a: [ans], full: prompt.replace('___', ans), placeholder: 'ex. : was trained' };
    }
    const pool = tense === 'irregular' ? VERBS.filter(v => !REGULAR.includes(v.inf)) : VERBS;
    const cand = trouble.filter(inf => BY_INF[inf] && pool.includes(BY_INF[inf]));
    const v = cand.length && Math.random() < 0.4 ? BY_INF[pick(cand)] : pick(pool);
    if (tense === 'irregular') {
      const a = [];
      forms(v.past).forEach(x => forms(v.pp).forEach(y => a.push(`${x} ${y}`)));
      const shown = `${v.inf} → ${forms(v.past)[0]}, ${forms(v.pp)[0]}`;
      return { kind: 'bare', tense, verb: v.inf, p: 0, prompt: v.inf, sub: `${v.fr} · past simple, past participle`, a, full: shown, say: `${v.inf}, ${forms(v.past)[0]}, ${forms(v.pp)[0]}`, placeholder: 'ex. : went, gone' };
    }
    const p = pick(PERSON_WEIGHTS), subj = pick(SUBJ[p]);
    const a = forms_(v, tense, p);
    if (tense === 'cond3') {
      const prompt = `If we had known earlier, ${subj} ___ ${v.c}.`;
      return { kind: 'bare', tense, verb: v.inf, p, prompt, sub: `${v.inf} · third conditional`, a, placeholder: 'ex. : would have done' };
    }
    if (CONTEXT[tense] && Math.random() < 0.6) {
      const ctx = pick(CONTEXT[tense]);
      return { kind: 'context', tense, verb: v.inf, p, prompt: `${ctx}, ${subj} (${v.inf}) ___ ${v.c}.`, sub: v.fr, a, full: `${ctx}, ${subj} ${a[0]} ${v.c}.` };
    }
    return { kind: 'bare', tense, verb: v.inf, p, prompt: `${subj} · ${v.inf}`, sub: NAMES[tense], a };
  }

  // Exercices générés pour les points de grammaire (`gen` : { tenses, markers? })
  function genItem(g, { pick }) {
    const it = makeItem(pick(g.tenses), { pick, trouble: [] });
    return { q: it.prompt.includes('___') ? it.prompt : `${it.prompt} → ___`, hint: it.kind === 'context' ? `${it.verb}, choisis le temps` : it.sub, a: it.a, verb: it.tense === 'passive' ? null : it.verb, tense: it.tense, p: it.p, noSay: it.tense === 'irregular' };
  }

  function wrongTense(item, matches) {
    if (item.kind !== 'context') return null;
    const v = BY_INF[item.verb];
    for (const t of ['past_simple', 'present_perfect', 'past_perfect', 'present', 'future_perfect']) {
      if (t !== item.tense && forms_(v, t, item.p).some(matches)) return t;
    }
    return null;
  }

  function itemTable(it) {
    const v = BY_INF[it.verb]; if (!v) return null;
    return { title: `Formes de « ${v.inf} »`, rows: [['Base', v.inf], ['3e personne', third(v)], ['Past simple', forms(v.past).join(' / '), it.tense === 'past_simple' || it.tense === 'irregular'], ['Past participle', forms(v.pp).join(' / '), it.tense !== 'past_simple'], ['-ing', ing(v)]] };
  }

  function verbView(inf) {
    const v = BY_INF[inf];
    const tbl = (t, title) => ({ title, rows: [0, 1, 2, 3, 5].map(p => [PERSONS_SHORT[p], forms_(v, t, p)[0]]) });
    return {
      extras: [['Past simple', forms(v.past).join(' / ')], ['Past participle', forms(v.pp).join(' / ')], ['-ing', ing(v)], ['Traduction', v.fr]],
      tables: [tbl('present', 'Present simple'), tbl('past_simple', 'Past simple'), tbl('present_perfect', 'Present perfect'), tbl('past_perfect', 'Past perfect'), tbl('future', 'Future (will)'), tbl('cond3', 'Third conditional')],
    };
  }

  global.Conj = { VERBS, BY_INF, PERSONS, PERSONS_SHORT, conjugate, TRAIN, NAMES, TOPIC, PRIORITY, CONTEXT_TOPIC: 'past_vs_perfect', makeItem, genItem, wrongTense, itemTable, verbView };
})(typeof window !== 'undefined' ? window : globalThis);
