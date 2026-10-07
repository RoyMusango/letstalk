// Points de grammaire (B2-C1) : fiche résumée en français, exercices, sujets d'oral.
// Exercice : { q, a: [réponses acceptées], opts?: [choix], expl? }  ·  gen : exercices générés par le moteur de verbes
(function (global) {
  const T = {};

  T.past_vs_perfect = {
    label: 'Past simple ou present perfect', level: 'B2',
    gen: { tenses: ['past_simple', 'present_perfect'] },
    fiche: `
<p>L’erreur n°1 des francophones : traduire le passé composé par le present perfect.</p>
<table><tr><th>Past simple</th><th>Present perfect</th></tr>
<tr><td>Moment <b>terminé et précis</b> : <i>yesterday, in 2019, last week, two days ago, when I was…</i></td><td>Période <b>pas terminée</b> ou lien avec <b>maintenant</b> : <i>since, for, so far, yet, already, ever, never, this year, recently</i></td></tr>
<tr><td><i>I <b>finished</b> my internship in June.</i></td><td><i>I <b>have finished</b> my internship</i> (je suis libre maintenant).</td></tr>
<tr><td><i>She <b>worked</b> at BNP for two years</i> (elle n’y est plus).</td><td><i>She <b>has worked</b> / <b>has been working</b> at BNP for two years</i> (elle y est toujours).</td></tr></table>
<p><b>Depuis</b> = <i>since</i> + point de départ (<i>since 2022</i>) ou <i>for</i> + durée (<i>for three months</i>), toujours avec un present perfect : <i>I <b>have lived</b> here for a year</i>, jamais <s>I live here since</s>.</p>
<p>Question sur un moment précis → past simple : <i>When <b>did</b> you <b>start</b>?</i> (pas <s>When have you started</s>).</p>`,
    bank: [
      { q: 'I ___ (live) in Brussels since 2021.', a: ['have lived', 'have been living'] },
      { q: 'We ___ (meet) the supervisor last Tuesday.', a: ['met'] },
      { q: '___ you ever worked in a bank?', a: ['have'] },
      { q: 'When ___ you start your internship?', a: ['did'] },
      { q: 'The model ___ (improve) a lot since we added more data.', a: ['has improved'] },
      { q: 'I ___ (not finish) the literature review yet.', a: ['haven’t finished', "haven't finished", 'have not finished'] },
      { q: 'She ___ (join) the risk team two years ago.', a: ['joined'] },
      { q: 'So far, we ___ (test) three different retrieval strategies.', a: ['have tested', 'have been testing'] },
      { q: 'Choisis : « Je travaille ici depuis trois mois. »', a: ['I have been working here for three months'], opts: ['I work here since three months', 'I have been working here for three months', 'I am working here for three months'] },
      { q: 'Choisis : « Il a rendu son mémoire en juin. »', a: ['He submitted his thesis in June'], opts: ['He has submitted his thesis in June', 'He submitted his thesis in June'] },
    ],
    speak: ['Tell me about your internship: what did you do, and what have you learnt since then?', 'What have you achieved so far this year?'],
  };

  T.narrative_tenses = {
    label: 'Raconter : past continuous & past perfect', level: 'B2',
    gen: { tenses: ['past_perfect'] },
    fiche: `
<p>Pour raconter, trois temps travaillent ensemble :</p>
<ul><li><b>Past simple</b> : les événements principaux, dans l’ordre. <i>I <b>arrived</b>, <b>opened</b> the laptop and <b>saw</b> the error.</i></li>
<li><b>Past continuous</b> (was/were + -ing) : le décor, l’action en cours interrompue. <i>I <b>was presenting</b> when the projector <b>died</b>.</i></li>
<li><b>Past perfect</b> (had + participe) : ce qui s’était passé <b>avant</b> un autre moment passé. <i>By the time I <b>arrived</b>, the meeting <b>had</b> already <b>started</b>.</i></li></ul>
<p>Le past perfect n’est obligatoire que si l’ordre n’est pas évident : <i>When I got there, they <b>had left</b></i> (ils étaient partis avant) ≠ <i>When I got there, they <b>left</b></i> (ils sont partis à ce moment-là).</p>`,
    bank: [
      { q: 'I ___ (work) on the code when the server crashed.', a: ['was working'] },
      { q: 'When we arrived, the presentation ___ (already start).', a: ['had already started'] },
      { q: 'She was tired because she ___ (not sleep) the night before.', a: ['hadn’t slept', "hadn't slept", 'had not slept'] },
      { q: 'While they ___ (discuss) the budget, the CEO walked in.', a: ['were discussing'] },
      { q: 'He realised he ___ (send) the wrong file.', a: ['had sent'] },
      { q: 'By the time the regulator called, we ___ (fix) the issue.', a: ['had fixed'] },
      { q: 'Choisis : « Quand je suis arrivé, ils étaient partis. »', a: ['When I arrived, they had left'], opts: ['When I arrived, they left', 'When I arrived, they had left', 'When I arrived, they have left'] },
      { q: 'It ___ (rain) when we left the stadium.', a: ['was raining'] },
    ],
    speak: ['Tell the story of a project that went wrong: what was happening, what had happened before, what did you do?', 'Describe your first day at your internship.'],
  };

  T.future_forms = {
    label: 'Le futur sous toutes ses formes', level: 'B2',
    gen: { tenses: ['future_perfect'] },
    fiche: `
<table><tr><th>Forme</th><th>Emploi</th><th>Exemple</th></tr>
<tr><td><b>will</b></td><td>décision sur le moment, prédiction, promesse</td><td><i>I’ll send it tonight.</i></td></tr>
<tr><td><b>be going to</b></td><td>intention déjà décidée, prédiction avec indice</td><td><i>I’m going to apply to ING.</i></td></tr>
<tr><td><b>present continuous</b></td><td>rendez-vous organisé</td><td><i>I’m meeting my supervisor on Friday.</i></td></tr>
<tr><td><b>future continuous</b> (will be -ing)</td><td>action en cours à un moment futur</td><td><i>This time next year, I’ll be working in Barcelona.</i></td></tr>
<tr><td><b>future perfect</b> (will have + pp)</td><td>action terminée avant un moment futur</td><td><i>By June, I’ll have submitted my thesis.</i></td></tr></table>
<p>Après <i>when, as soon as, before, until, if</i> : <b>présent</b>, jamais will. <i>I’ll call you <b>when</b> I <b>get</b> the results</i> (pas <s>when I will get</s>).</p>`,
    bank: [
      { q: 'I’ll let you know as soon as I ___ (receive) the results.', a: ['receive'] },
      { q: 'This time next month, I ___ (work) in Barcelona.', a: ['will be working', 'll be working'] },
      { q: 'By the end of the year, we ___ (deploy) the system.', a: ['will have deployed', 'll have deployed'] },
      { q: 'I ___ (meet) the head of risk tomorrow at 10. (rendez-vous fixé)', a: ['am meeting', 'm meeting'] },
      { q: 'Look at those clouds: it ___ (rain).', a: ['is going to rain', 's going to rain'] },
      { q: 'The phone is ringing. Don’t worry, I ___ (get) it.', a: ['will get', 'll get'] },
      { q: 'Choisis : « Je t’appellerai quand j’arriverai. »', a: ['I’ll call you when I arrive'], opts: ['I’ll call you when I will arrive', 'I’ll call you when I arrive', 'I call you when I arrive'] },
    ],
    speak: ['Where do you see yourself in five years?', 'What will you have achieved by the end of your Erasmus?'],
  };

  T.conditionals = {
    label: 'Conditionnels (dont mixtes)', level: 'B2-C1',
    gen: { tenses: ['cond3'] },
    fiche: `
<table><tr><th>Type</th><th>Structure</th><th>Exemple</th></tr>
<tr><td>Réel</td><td>If + présent, will</td><td><i>If the model <b>drifts</b>, we<b>’ll retrain</b> it.</i></td></tr>
<tr><td>Hypothèse</td><td>If + prétérit, would</td><td><i>If I <b>had</b> more data, I <b>would get</b> better results.</i></td></tr>
<tr><td>Regret (passé)</td><td>If + had + pp, would have + pp</td><td><i>If we <b>had tested</b> it, we <b>would have spotted</b> the bug.</i></td></tr>
<tr><td>Mixte</td><td>If + had + pp, would + base</td><td><i>If I <b>had studied</b> finance, I <b>would be</b> a trader now.</i></td></tr></table>
<p>Jamais de <i>would</i> après <i>if</i> : <s>If I would have known</s> → <i>If I <b>had known</b></i>. <i>If I were</i> est plus soutenu que <i>if I was</i>.</p>
<p>Variantes C1 : <i><b>Had</b> I known…</i> (inversion), <i><b>Unless</b>, <b>provided that</b>, <b>as long as</b>, <b>otherwise</b></i>.</p>`,
    bank: [
      { q: 'If I ___ (know) about the deadline, I would have started earlier.', a: ['had known'] },
      { q: 'If we had more GPUs, we ___ (train) a bigger model.', a: ['would train', 'could train', 'd train'] },
      { q: 'If the client ___ (default), the bank will seize the collateral.', a: ['defaults'] },
      { q: 'If he had accepted the offer, he ___ (live) in London now.', a: ['would be living', 'would live', 'd be living'] },
      { q: '___ I known, I would have told you. (inversion)', a: ['had'] },
      { q: 'We won’t get funding ___ we show a working prototype.', a: ['unless'] },
      { q: 'If I ___ (be) you, I would ask for an extension.', a: ['were', 'was'] },
      { q: 'Choisis : « Si j’avais su, je serais venu. »', a: ['If I had known, I would have come'], opts: ['If I would have known, I would have come', 'If I had known, I would have come', 'If I knew, I would have come'] },
    ],
    speak: ['If you could change one decision in your studies, what would it be and why?', 'What would you do if your RAG system gave a wrong answer to a client?'],
  };

  T.modals_deduction = {
    label: 'Modaux : déduction, regret, conseil', level: 'B2-C1',
    fiche: `
<table><tr><th>Sens</th><th>Présent</th><th>Passé</th></tr>
<tr><td>Quasi-certitude</td><td><i>It <b>must be</b> a bug.</i></td><td><i>He <b>must have forgotten</b>.</i></td></tr>
<tr><td>Impossibilité</td><td><i>That <b>can’t be</b> right.</i></td><td><i>She <b>can’t have seen</b> it.</i></td></tr>
<tr><td>Possibilité</td><td><i>It <b>might / may / could be</b> the data.</i></td><td><i>They <b>might have changed</b> the API.</i></td></tr>
<tr><td>Reproche, regret</td><td><i>You <b>should check</b>.</i></td><td><i>We <b>should have checked</b> (on ne l’a pas fait).</i></td></tr></table>
<p>Ne pas confondre : <i>needn’t have done</i> (fait pour rien) et <i>didn’t need to do</i> (pas fait car inutile).</p>`,
    bank: [
      { q: 'The light is off. They ___ (leave) already. (déduction quasi certaine)', a: ['must have left'] },
      { q: 'He ___ (see) the email: he was on holiday. (impossible)', a: ['can’t have seen', "can't have seen", 'couldn’t have seen', "couldn't have seen"] },
      { q: 'We ___ (test) the system before the demo. (regret)', a: ['should have tested'] },
      { q: 'I’m not sure why it failed. It ___ (be) a memory issue. (possibilité)', a: ['might be', 'may be', 'could be'] },
      { q: 'That figure ___ (be) right, it’s far too high! (impossible)', a: ['can’t be', "can't be", 'cannot be'] },
      { q: 'You ___ (bring) your laptop, we had spares. (fait pour rien)', a: ['needn’t have brought', "needn't have brought"] },
      { q: 'She’s been working all night. She ___ (be) exhausted.', a: ['must be'] },
    ],
    speak: ['Your model suddenly performs worse in production. Speculate: what might have happened?', 'Tell me about something you should have done differently in a past project.'],
  };

  T.passive = {
    label: 'Passif & causatif', level: 'B2',
    gen: { tenses: ['passive'] },
    fiche: `
<p><b>be</b> (au bon temps) + <b>participe passé</b> : <i>The data <b>is stored</b> on-premise. The model <b>was trained</b> last year. The results <b>have been published</b>. It <b>is being reviewed</b>.</i></p>
<p>Très fréquent en anglais scientifique et bancaire, là où le français dit « on » : <i>On a constaté… → It <b>was found</b> that…</i></p>
<p><b>Passif impersonnel</b> (soutenu) : <i>It <b>is said that</b>… / The bank <b>is said to be</b> in trouble.</i></p>
<p><b>Causatif</b> : faire faire quelque chose par quelqu’un. <i>I <b>had</b> my laptop <b>repaired</b>. We <b>got</b> the system <b>audited</b>.</i></p>`,
    bank: [
      { q: 'The transactions ___ (monitor) in real time. (présent)', a: ['are monitored'] },
      { q: 'The report ___ (publish) next week.', a: ['will be published', 'is going to be published'] },
      { q: 'Three new features ___ (add) since the last release.', a: ['have been added'] },
      { q: 'The system ___ (test) right now, please wait.', a: ['is being tested'] },
      { q: 'It ___ (believe) that the bank will raise rates. (passif impersonnel)', a: ['is believed'] },
      { q: 'I need to have my thesis ___ (proofread) before submitting it.', a: ['proofread'] },
      { q: 'Choisis : « On a découvert une faille. »', a: ['A flaw was discovered'], opts: ['One discovered a flaw', 'A flaw was discovered', 'A flaw has discovered'] },
    ],
    speak: ['Explain how customer data is protected in a sovereign RAG system (use the passive).', 'Describe how a loan application is processed in a bank.'],
  };

  T.reported_speech = {
    label: 'Discours indirect', level: 'B2',
    fiche: `
<p>Après un verbe au passé (<i>said, told, explained, asked</i>), on recule souvent d’un temps :</p>
<table><tr><th>Direct</th><th>Indirect</th></tr>
<tr><td>“I <b>am</b> busy.”</td><td>He said he <b>was</b> busy.</td></tr>
<tr><td>“We <b>have finished</b>.”</td><td>They said they <b>had finished</b>.</td></tr>
<tr><td>“I <b>will</b> call.”</td><td>She said she <b>would</b> call.</td></tr>
<tr><td>“<b>Can</b> you help?”</td><td>He asked if I <b>could</b> help.</td></tr></table>
<p><b>say</b> sans complément de personne, <b>tell</b> + personne : <i>She <b>told me</b> that… / She <b>said</b> that…</i> (pas <s>said me</s>).</p>
<p>Questions indirectes : ordre affirmatif. <i>He asked where the meeting <b>was</b></i> (pas <s>where was the meeting</s>).</p>
<p>Verbes plus précis : <i>suggest (that) / recommend doing / admit / deny / claim / point out / warn</i>.</p>`,
    bank: [
      { q: '“I am working on it.” → She said she ___ on it.', a: ['was working'] },
      { q: '“We have fixed the bug.” → They said they ___ the bug.', a: ['had fixed'] },
      { q: '“I will send the report.” → He said he ___ the report.', a: ['would send'] },
      { q: 'My supervisor ___ me that the chapter was too long.', a: ['told'], opts: ['said', 'told'] },
      { q: 'She ___ that the deadline had moved.', a: ['said'], opts: ['said', 'told'] },
      { q: 'He asked me where the meeting room ___.', a: ['was'] },
      { q: '“Can you join us?” → They asked if I ___ join them.', a: ['could'] },
      { q: 'The auditor suggested ___ (review) the access logs.', a: ['reviewing', 'that we review', 'that we should review'] },
    ],
    speak: ['Report what your supervisor told you in your last meeting.', 'Tell me what the interviewer asked you in a recent interview.'],
  };

  T.relative_clauses = {
    label: 'Propositions relatives', level: 'B2',
    fiche: `
<p><b>who</b> (personnes), <b>which</b> (choses), <b>that</b> (les deux, seulement en relative déterminative), <b>whose</b> (dont, possession), <b>where</b>, <b>when</b>.</p>
<p><b>Déterminative</b> (sans virgules, indispensable au sens) : <i>The model <b>that</b> we deployed is open-source.</i> On peut omettre le relatif s’il est complément : <i>The model we deployed…</i></p>
<p><b>Explicative</b> (entre virgules, information en plus) : <i>The model, <b>which</b> was trained in-house, is open-source.</i> Jamais <i>that</i> ici.</p>
<p><b>Dont</b> = <i>whose</i> (possession) ou une préposition en fin : <i>the bank <b>whose</b> CEO resigned</i> ; <i>the project I told you <b>about</b></i>.</p>
<p><b>Ce qui / ce que</b> = <i>what</i> (en début) ou <i>which</i> (qui reprend toute la phrase) : <i><b>What</b> I need is time. He passed, <b>which</b> surprised everyone.</i></p>`,
    bank: [
      { q: 'The analyst ___ built the dashboard has left.', a: ['who', 'that'] },
      { q: 'The bank, ___ headquarters are in Brussels, is hiring.', a: ['whose'] },
      { q: 'This is the dataset ___ we used for training.', a: ['that', 'which'], opts: ['that', 'which', 'what', 'who'] },
      { q: 'Our RAG system, ___ runs on-premise, never sends data outside.', a: ['which'], opts: ['that', 'which', 'what'] },
      { q: '___ worries me is the latency.', a: ['what'] },
      { q: 'He missed the deadline, ___ annoyed his supervisor.', a: ['which'], opts: ['what', 'which', 'that'] },
      { q: 'That’s the city ___ I’ll do my Erasmus.', a: ['where', 'in which'] },
      { q: 'The paper ___ I told you is now published. (dont = about)', a: ['about'] },
    ],
    speak: ['Describe the tools you used in your internship, using relative clauses.'],
  };

  T.gerund_infinitive = {
    label: 'Gérondif ou infinitif', level: 'B2',
    fiche: `
<p><b>+ -ing</b> : <i>avoid, enjoy, consider, suggest, recommend, keep, mind, finish, risk, involve, can’t help, look forward to, be used to, it’s worth</i>, et après toute <b>préposition</b> : <i>interested in <b>working</b>, before <b>leaving</b></i>.</p>
<p><b>+ to</b> : <i>want, need, decide, plan, hope, manage, fail, refuse, agree, afford, tend, seem, aim</i>.</p>
<p><b>Changement de sens</b> :</p>
<ul><li><i>stop <b>to</b> check</i> (s’arrêter pour vérifier) / <i>stop <b>checking</b></i> (arrêter de vérifier)</li>
<li><i>remember <b>to</b> send</i> (penser à envoyer) / <i>remember <b>sending</b></i> (se souvenir d’avoir envoyé)</li>
<li><i>try <b>to</b> fix</i> (essayer de) / <i>try <b>restarting</b></i> (tester une solution)</li></ul>
<p>Piège : <i>I look forward to <b>hearing</b> from you</i> (<i>to</i> est une préposition ici).</p>`,
    bank: [
      { q: 'I look forward to ___ (hear) from you.', a: ['hearing'] },
      { q: 'We managed ___ (reduce) the latency by 40%.', a: ['to reduce'] },
      { q: 'She suggested ___ (use) an open-source model.', a: ['using'] },
      { q: 'I’m used to ___ (work) late.', a: ['working'] },
      { q: 'It’s worth ___ (check) the logs.', a: ['checking'] },
      { q: 'Remember ___ (back up) the database before the update.', a: ['to back up'] },
      { q: 'He stopped ___ (smoke) two years ago.', a: ['smoking'] },
      { q: 'They can’t afford ___ (lose) this client.', a: ['to lose'] },
      { q: 'I’m interested in ___ (join) your team.', a: ['joining'] },
    ],
    speak: ['What do you enjoy doing in your free time, and what do you want to avoid in your future job?'],
  };

  T.articles = {
    label: 'Articles : a, the ou rien', level: 'B2',
    fiche: `
<p>Erreur typique du francophone : mettre <i>the</i> partout.</p>
<ul><li><b>Pas d’article</b> pour une généralité au pluriel ou indénombrable : <i><b>Banks</b> are investing in AI. <b>Data</b> is valuable. I love <b>football</b>.</i> (≠ « Les banques », « Les données »)</li>
<li><b>the</b> pour quelque chose de précis, connu : <i><b>The</b> banks in this report… <b>The</b> data we collected…</i></li>
<li><b>a/an</b> pour un élément parmi d’autres, les métiers : <i>She is <b>an</b> engineer.</i> (pas <s>She is engineer</s>)</li>
<li>Pas d’article : <i>at university, at work, by train, next week, last year</i>, la plupart des pays et entreprises (<i>Spain, Google</i>).</li></ul>`,
    bank: [
      { q: '___ artificial intelligence is changing finance. (généralité)', a: ['-', 'Ø', 'nothing', 'rien'], opts: ['The', '-'] },
      { q: '___ data we collected last month was incomplete.', a: ['The'], opts: ['The', '-'] },
      { q: 'My brother is ___ accountant.', a: ['an'], opts: ['an', 'the', '-'] },
      { q: 'I’ll go to Barcelona by ___ plane.', a: ['-'], opts: ['the', 'a', '-'] },
      { q: '___ banks are under pressure to cut costs. (en général)', a: ['-'], opts: ['The', '-'] },
      { q: 'She works at ___ European Central Bank.', a: ['the'], opts: ['the', '-'] },
      { q: 'I love ___ football, especially Barça.', a: ['-'], opts: ['the', '-'] },
      { q: 'What ___ amazing goal!', a: ['an'], opts: ['an', 'the', '-'] },
    ],
    speak: ['Explain in general terms how banks use data, then describe the data you used in your internship.'],
  };

  T.countability = {
    label: 'Indénombrables & quantifieurs', level: 'B2',
    fiche: `
<p>Indénombrables en anglais (pas de pluriel, pas de <i>a</i>) alors qu’ils le sont en français : <b>information, advice, research, feedback, equipment, software, evidence, progress, knowledge, news, luggage, work</b>.</p>
<p><s>informations, researches, advices</s> → <i>some information, a piece of advice, a lot of research</i>.</p>
<p><b>much / little</b> + indénombrable, <b>many / few</b> + dénombrable. <i>a little / a few</i> = un peu (positif), <i>little / few</i> = peu (négatif).</p>
<p><i>The news <b>is</b> good. The data <b>is</b> (ou <b>are</b>, plus soutenu) reliable.</i></p>`,
    bank: [
      { q: 'Could you give me some ___ on my draft? (retours)', a: ['feedback'] },
      { q: 'I need ___ information about the programme.', a: ['some', 'more'], opts: ['an', 'some', 'many'] },
      { q: 'We haven’t made ___ progress this week.', a: ['much'], opts: ['many', 'much'] },
      { q: 'She gave me a great piece of ___.', a: ['advice'] },
      { q: 'There were very ___ participants at the workshop.', a: ['few'], opts: ['few', 'little'] },
      { q: 'The news ___ good today.', a: ['is'], opts: ['is', 'are'] },
      { q: 'He has done a lot of ___ on RAG systems. (recherches)', a: ['research'] },
    ],
    speak: ['What advice would you give to a student starting an internship in a bank?'],
  };

  T.prepositions = {
    label: 'Prépositions & verbes prépositionnels', level: 'B2',
    fiche: `
<ul><li><i>depend <b>on</b>, rely <b>on</b>, focus <b>on</b>, insist <b>on</b>, comment <b>on</b></i></li>
<li><i>interested <b>in</b>, involved <b>in</b>, invest <b>in</b>, specialise <b>in</b>, succeed <b>in</b> doing</i></li>
<li><i>responsible <b>for</b>, apply <b>for</b>, pay <b>for</b>, wait <b>for</b>, ask <b>for</b></i></li>
<li><i>in charge <b>of</b>, aware <b>of</b>, consist <b>of</b>, take advantage <b>of</b></i></li>
<li><i>good <b>at</b>, arrive <b>at/in</b>, aim <b>at</b></i> · <i>different <b>from</b>, similar <b>to</b>, married <b>to</b></i></li></ul>
<p>Sans préposition (contrairement au français) : <i>discuss <b>a topic</b>, enter <b>a room</b>, answer <b>a question</b>, attend <b>a meeting</b></i> (pas <s>discuss about</s>).</p>
<p><b>Temps</b> : <i><b>on</b> Monday, <b>in</b> June, <b>at</b> 5 pm, <b>on</b> time</i> (à l’heure) / <i><b>in</b> time</i> (à temps).</p>`,
    bank: [
      { q: 'The final decision depends ___ the board.', a: ['on'] },
      { q: 'I’m responsible ___ the data pipeline.', a: ['for'] },
      { q: 'She is in charge ___ model validation.', a: ['of'] },
      { q: 'We discussed ___ the budget. (rien ou une préposition ?)', a: ['-'], opts: ['about', '-'] },
      { q: 'He is very good ___ explaining complex ideas.', a: ['at'] },
      { q: 'I applied ___ an internship at a bank in Madrid.', a: ['for'] },
      { q: 'The meeting is on Monday ___ 9 am.', a: ['at'] },
      { q: 'Our approach is quite different ___ theirs.', a: ['from', 'to'] },
      { q: 'I’m not aware ___ any issue.', a: ['of'] },
    ],
    speak: ['Explain what you were responsible for during your internship and what you are interested in now.'],
  };

  T.inversion = {
    label: 'Inversion & phrases emphatiques', level: 'C1',
    fiche: `
<p>Pour insister, à l’écrit soutenu ou dans une présentation :</p>
<ul><li><b>Inversion après un adverbe négatif</b> : <i><b>Never have I seen</b> such accurate results. <b>Not only did</b> it reduce costs, <b>but</b> it also improved quality. <b>Rarely do</b> banks share data. <b>Only then did</b> we realise…</i></li>
<li><b>Conditionnel inversé</b> : <i><b>Had</b> we known… <b>Should</b> you need help… <b>Were</b> it not for…</i></li>
<li><b>Phrases clivées</b> (cleft) : <i><b>What</b> we need <b>is</b> more data. <b>It was</b> the latency <b>that</b> caused the problem. <b>The reason why</b>… <b>is that</b>…</i></li></ul>`,
    bank: [
      { q: 'Never ___ I seen such a fast model. (inversion)', a: ['have'] },
      { q: 'Not only ___ the system reduce costs, but it also improved accuracy.', a: ['did'] },
      { q: '___ you need any further information, please contact me. (= If you need)', a: ['should'] },
      { q: '___ we need is a clearer evaluation protocol. (clivée)', a: ['what'] },
      { q: 'It ___ the retrieval step that caused the errors.', a: ['was'] },
      { q: 'Rarely ___ banks share their internal data.', a: ['do'] },
      { q: 'Only after the audit ___ we discover the problem.', a: ['did'] },
      { q: '___ it not for your help, I would have failed. (= If it were not)', a: ['were'] },
    ],
    speak: ['Present the main achievement of your internship in an emphatic way (use one inversion and one cleft sentence).'],
  };

  T.wishes = {
    label: 'Wish, if only, would rather', level: 'C1',
    fiche: `
<table><tr><th>Regret sur…</th><th>Structure</th><th>Exemple</th></tr>
<tr><td>le présent</td><td>wish / if only + prétérit</td><td><i>I wish I <b>spoke</b> Dutch.</i></td></tr>
<tr><td>le passé</td><td>wish + past perfect</td><td><i>I wish I <b>had started</b> earlier.</i></td></tr>
<tr><td>agacement, souhait de changement</td><td>wish + would</td><td><i>I wish the server <b>would stop</b> crashing.</i></td></tr></table>
<p><i>I’d rather <b>stay</b></i> (je préfère) · <i>I’d rather you <b>didn’t</b> tell him</i> (je préférerais que tu…) · <i>It’s (high) time we <b>left</b></i>.</p>`,
    bank: [
      { q: 'I wish I ___ (have) more time to finish the thesis. (présent)', a: ['had'] },
      { q: 'I wish I ___ (choose) a different topic. (regret passé)', a: ['had chosen'] },
      { q: 'If only we ___ (test) it before the demo!', a: ['had tested'] },
      { q: 'I’d rather ___ (work) from the office today.', a: ['work'] },
      { q: 'I’d rather you ___ (not share) the draft yet.', a: ['didn’t share', "didn't share"] },
      { q: 'It’s high time we ___ (make) a decision.', a: ['made'] },
      { q: 'I wish the train ___ (arrive) on time for once. (agacement)', a: ['would arrive'] },
    ],
    speak: ['What do you wish you had known before starting your studies?'],
  };

  T.registro = {
    label: 'Registre professionnel & académique', level: 'C1',
    fiche: `
<p>Monter en registre sans devenir pompeux :</p>
<table><tr><th>Courant</th><th>Professionnel / académique</th></tr>
<tr><td>but</td><td>however, nevertheless</td></tr>
<tr><td>so</td><td>therefore, consequently, hence</td></tr>
<tr><td>also</td><td>furthermore, moreover, in addition</td></tr>
<tr><td>get</td><td>obtain, receive, acquire</td></tr>
<tr><td>show</td><td>demonstrate, indicate, reveal</td></tr>
<tr><td>look at</td><td>examine, investigate, assess</td></tr>
<tr><td>big / a lot of</td><td>substantial, significant, a considerable amount of</td></tr>
<tr><td>I think</td><td>it appears that, arguably, the evidence suggests</td></tr></table>
<p><b>Hedging</b> (nuancer, indispensable en anglais académique) : <i>tends to, appears to, may, is likely to, to some extent</i>.</p>
<p>E-mail : <i>Dear Dr Smith,</i> … <i>I am writing to…</i> … <i>I would be grateful if…</i> … <i>Kind regards</i>. Pas de contractions (<i>I am</i>, pas <i>I’m</i>).</p>`,
    bank: [
      { q: 'Courant : « but » → soutenu : ___', a: ['however', 'nevertheless', 'nonetheless'] },
      { q: 'Courant : « so » (conséquence) → soutenu : ___', a: ['therefore', 'consequently', 'hence', 'thus'] },
      { q: 'The results show → The results ___', a: ['demonstrate', 'indicate', 'reveal', 'suggest'] },
      { q: 'We looked at the data → We ___ the data.', a: ['examined', 'analysed', 'analyzed', 'investigated', 'assessed'] },
      { q: 'We got good results → We ___ good results.', a: ['obtained', 'achieved'] },
      { q: 'A lot of banks → A ___ number of banks', a: ['significant', 'substantial', 'considerable', 'large'] },
      { q: 'Nuancer : « This method is better. » → This method ___ to perform better.', a: ['appears', 'seems', 'tends'] },
      { q: 'E-mail formel : « I ___ be grateful if you could send me the dataset. »', a: ['would'] },
      { q: 'E-mail formel, première phrase : « I am ___ to ask about the internship. »', a: ['writing'] },
    ],
    speak: ['Summarise your thesis topic in a formal, academic register (1 minute).', 'Leave a formal voicemail to a recruiter asking to reschedule an interview.'],
  };

  T.false_friends = {
    label: 'Faux amis', level: 'B2',
    fiche: `
<table><tr><th>Mot anglais</th><th>Sens réel</th><th>Pour dire…</th></tr>
<tr><td>actually</td><td>en fait</td><td>actuellement → <i>currently</i></td></tr>
<tr><td>eventually</td><td>finalement</td><td>éventuellement → <i>possibly</i></td></tr>
<tr><td>to attend</td><td>assister à</td><td>attendre → <i>to wait</i></td></tr>
<tr><td>to assist</td><td>aider</td><td>assister à → <i>to attend</i></td></tr>
<tr><td>sensible</td><td>raisonnable</td><td>sensible → <i>sensitive</i></td></tr>
<tr><td>library</td><td>bibliothèque</td><td>librairie → <i>bookshop</i></td></tr>
<tr><td>to realise</td><td>se rendre compte</td><td>réaliser (un projet) → <i>to carry out</i></td></tr>
<tr><td>delay</td><td>retard</td><td>délai → <i>deadline, time frame</i></td></tr>
<tr><td>formation</td><td>(rare) formation géologique</td><td>formation → <i>training</i></td></tr>
<tr><td>experiment</td><td>expérience scientifique</td><td>expérience vécue → <i>experience</i></td></tr>
<tr><td>to resume</td><td>reprendre</td><td>résumer → <i>to summarise</i></td></tr></table>`,
    bank: [
      { q: '« Je travaille actuellement sur un RAG. » → I am ___ working on a RAG.', a: ['currently'] },
      { q: '« J’ai assisté à la conférence. » → I ___ the conference.', a: ['attended'] },
      { q: '« Ce sont des données sensibles. » → This is ___ data.', a: ['sensitive'] },
      { q: '« Finalement, on a choisi Mistral. » → ___, we chose Mistral.', a: ['eventually', 'in the end', 'finally'] },
      { q: '« J’ai suivi une formation en finance. » → I did a ___ in finance.', a: ['training', 'course', 'training course'] },
      { q: '« Quel est le délai ? » → What’s the ___?', a: ['deadline', 'time frame', 'timeframe'] },
      { q: '« J’ai réalisé que c’était faux. » → I ___ it was wrong.', a: ['realised', 'realized'] },
      { q: '« Peux-tu résumer l’article ? » → Can you ___ the article?', a: ['summarise', 'summarize', 'sum up'] },
    ],
    speak: ['Describe your current projects and the training you have done (watch the false friends).'],
  };

  T.irregular_verbs = {
    label: 'Verbes irréguliers', level: 'B1-B2',
    gen: { tenses: ['irregular'] },
    fiche: `
<p>À connaître sans hésitation, surtout ceux du monde professionnel : <i>lead → led → led, seek → sought, arise → arose → arisen, withdraw → withdrew → withdrawn, undertake → undertook → undertaken, bear → bore → borne</i>.</p>
<p>Britannique et américain : <i>learnt / learned</i>, <i>got / gotten</i> (participe américain). Les deux sont acceptés.</p>
<p>Attention à la prononciation : <i>read</i> au passé se dit « red » ; <i>led</i> (et pas « leaded ») ; <i>caught, taught, bought, brought, thought, fought</i> riment tous.</p>
<p>L’entraînement « Verbs » te les propose à l’oral avec répétition espacée des verbes ratés.</p>`,
    speak: ['Tell me about the last project you led: what did you build, what did you learn, what went wrong?'],
  };

  // Points de grammaire dans l'ordre de présentation ; autres sujets utilisés par l'IA pour classer ses corrections
  const ORDER = ['past_vs_perfect', 'narrative_tenses', 'future_forms', 'conditionals', 'modals_deduction', 'passive', 'reported_speech', 'relative_clauses', 'gerund_infinitive', 'articles', 'countability', 'prepositions', 'false_friends', 'irregular_verbs', 'inversion', 'wishes', 'registro'];
  const EXTRA_TOPICS = { naturalness: 'Naturel, idiomatique', vocabulario: 'Vocabulaire', pronunciacion: 'Prononciation', otro: 'Autre' };

  global.GRAMMAR = { TOPICS: T, ORDER, EXTRA_TOPICS };
})(typeof window !== 'undefined' ? window : globalThis);
