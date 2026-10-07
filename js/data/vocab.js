// Corpus de vocabulaire (niveau B2-C1) : "anglais | français | synonymes (séparés par ;)"
(function (global) {
  const RAW = {
    meetings: { label: 'Réunions : clarifier, relancer', prio: 1, words: `
Could you elaborate on that? | Pouvez-vous développer ? | Could you expand on that?; Could you go into more detail?
Let me rephrase that. | Je reformule. | Let me put it another way.; In other words
Just to clarify, … | Juste pour clarifier… | Just to be clear; If I understand correctly
Bear with me. | Patientez une seconde. | Give me a second.; Hang on a moment.
That’s a fair point. | C’est un argument valable. | Point taken.; I take your point.
I see where you’re coming from. | Je comprends ton point de vue. | I get what you mean.
To put it simply, … | Pour faire simple… | In a nutshell; Simply put
Let’s circle back to that. | Revenons-y plus tard. | Let’s come back to that later.
Can we park that for now? | On peut mettre ça de côté pour l’instant ? | Let’s put that on hold.
Moving on to … | Passons à… | Turning to; Let’s now look at
I’d like to follow up on … | J’aimerais revenir sur… | I wanted to check in on
What’s the next step? | Quelle est la prochaine étape ? | Where do we go from here?
I’m not sure I follow. | Je ne suis pas sûr de suivre. | I’m afraid I’ve lost you.
Off the top of my head, … | À brûle-pourpoint… | Without checking; Roughly
I’ll get back to you on that. | Je reviens vers vous là-dessus. | I’ll look into it and let you know.
on the same page | sur la même longueur d’onde | aligned; in agreement
a quick catch-up | un petit point rapide | a quick sync; a brief update
` },
    phrasal: { label: 'Phrasal verbs (travail)', prio: 1, words: `
to carry out | effectuer, mener (une étude) | to conduct; to perform
to come up with | trouver, proposer (une idée) | to devise; to think of
to figure out | comprendre, trouver la solution | to work out; to determine
to point out | souligner, faire remarquer | to highlight; to note
to set up | mettre en place | to establish; to put in place
to roll out | déployer (progressivement) | to deploy; to launch
to follow up | assurer le suivi, relancer | to check in; to pursue
to look into | examiner, se pencher sur | to investigate; to examine
to put forward | avancer, proposer (une idée) | to propose; to suggest
to rule out | écarter, exclure | to exclude; to eliminate
to back up | étayer, sauvegarder | to support; to substantiate
to break down | décomposer, ventiler | to split; to itemise
to bring up | soulever (un sujet) | to raise; to mention
to catch up | rattraper son retard, faire le point | to get up to speed
to deal with | gérer, traiter | to handle; to tackle
to run into (a problem) | se heurter à | to encounter; to come across
to sort out | régler, résoudre | to resolve; to fix
to turn down | refuser | to reject; to decline
to take over | reprendre, prendre le contrôle | to assume control
to phase out | supprimer progressivement | to discontinue gradually
to scale up | passer à l’échelle | to expand; to ramp up
to narrow down | réduire (les options) | to shortlist; to refine
to account for | expliquer, représenter (une part) | to explain; to make up
to draw on | puiser dans, s’appuyer sur | to rely on; to build on
to opt for | opter pour | to choose; to go for
to come across | tomber sur, donner une impression | to encounter; to seem
to keep up with | suivre le rythme de | to stay abreast of
to fall behind | prendre du retard | to lag behind
to wrap up | conclure, terminer | to conclude; to finish off
to step down | démissionner, se retirer | to resign
to lay off | licencier | to make redundant; to dismiss
to sign off on | valider, approuver | to approve; to give the green light
to hand in | remettre, rendre | to submit
to stand out | se démarquer | to be noticeable; to excel
to look forward to (doing) | avoir hâte de | to anticipate
` },
    idioms: { label: 'Expressions idiomatiques', prio: 1, words: `
the bottom line | l’essentiel, le résultat net | the key point; the crux
a ballpark figure | un chiffre approximatif | a rough estimate
to cut corners | bâcler, rogner sur la qualité | to skimp
a steep learning curve | un apprentissage difficile au début | a challenging start
ahead of the curve | en avance sur les autres | cutting-edge; ahead of the game
back to square one | retour à la case départ | back to the drawing board
the elephant in the room | le problème que tout le monde évite | the obvious issue
low-hanging fruit | les gains faciles | quick wins; easy targets
a double-edged sword | une arme à double tranchant | a mixed blessing
to hit the ground running | être opérationnel immédiatement | to start strongly
in a nutshell | en bref | in short; to sum up
the tip of the iceberg | la partie émergée de l’iceberg | just the beginning
a game changer | une révolution, un tournant | a breakthrough
to go the extra mile | en faire plus que demandé | to go above and beyond
to keep an eye on | surveiller | to monitor; to watch
to be on the fence | hésiter | to be undecided
to call it a day | s’arrêter là (pour aujourd’hui) | to wrap up
a win-win situation | une situation gagnant-gagnant | mutually beneficial
to get the hang of | prendre le coup de main | to master
by the book | dans les règles | according to the rules
to play it by ear | improviser selon la situation | to improvise
the devil is in the details | le diable est dans les détails | the details matter
to pull your weight | faire sa part du travail | to do your share
to think on your feet | réagir vite | to improvise quickly
it’s not rocket science | ce n’est pas sorcier | it’s straightforward
a red flag | un signal d’alarme | a warning sign
` },
    collocations: { label: 'Collocations', prio: 1, words: `
to make a decision | prendre une décision | to take a decision (BrE); to reach a decision
to conduct research | mener des recherches | to carry out research; to do research
to raise a concern | exprimer une inquiétude | to voice a concern; to flag an issue
to address an issue | traiter un problème | to tackle an issue; to deal with an issue
to meet a deadline | respecter une échéance | to hit a deadline
to miss a deadline | rater une échéance | to overrun
to draw a conclusion | tirer une conclusion | to conclude
to reach a consensus | parvenir à un consensus | to agree
to pose a risk | représenter un risque | to present a risk
to take into account | prendre en compte | to factor in; to consider
to gain insight into | mieux comprendre | to get a better understanding of
to place emphasis on | mettre l’accent sur | to stress; to emphasise
to bear in mind | garder à l’esprit | to keep in mind
to run a test | lancer un test | to perform a test
to fill a gap | combler une lacune | to bridge a gap
to set a goal | se fixer un objectif | to set a target
to play a key role | jouer un rôle clé | to be instrumental in
to pay attention to | faire attention à | to focus on
heavy traffic | circulation dense | congestion
a strong argument | un argument solide | a compelling argument
a sharp increase | une forte hausse | a steep rise; a surge
a slight decrease | une légère baisse | a small drop; a dip
a high risk | un risque élevé | a significant risk
to make progress | progresser | to move forward
to do business with | faire affaire avec | to trade with
to give a presentation | faire une présentation | to deliver a presentation
` },
    formal: { label: 'Registre soutenu & connecteurs', prio: 1, words: `
nevertheless | néanmoins | nonetheless; even so
furthermore | de plus | moreover; in addition
whereas | alors que (opposition) | while; by contrast
albeit | bien que, quoique | although; though
notwithstanding | nonobstant, malgré | despite; in spite of
hence | d’où, par conséquent | therefore; thus
thereby | de ce fait | in so doing; consequently
in light of | à la lumière de | given; in view of
with regard to | en ce qui concerne | regarding; as regards
as opposed to | par opposition à | rather than; unlike
to some extent | dans une certaine mesure | to a certain degree
arguably | sans doute, on peut soutenir que | possibly; it could be argued
it is worth noting that | il convient de noter que | notably; it should be noted that
insofar as | dans la mesure où | to the extent that
in the long run | à long terme | in the long term; eventually
overall | dans l’ensemble | on the whole; all in all
consequently | en conséquence | as a result; accordingly
subsequently | par la suite | later; afterwards
whereby | par lequel | by which
to ascertain | établir, vérifier | to determine; to find out
to mitigate | atténuer | to reduce; to alleviate
to leverage | tirer parti de | to make the most of; to capitalise on
to streamline | simplifier, rationaliser | to simplify; to optimise
to underpin | sous-tendre, étayer | to support; to underlie
to foster | favoriser | to encourage; to promote
to entail | impliquer, entraîner | to involve; to require
to outline | exposer dans les grandes lignes | to summarise; to sketch out
I would be grateful if you could … | Je vous serais reconnaissant de… | I would appreciate it if you could
Please find attached … | Veuillez trouver ci-joint… | I have attached
I look forward to hearing from you. | Dans l’attente de votre réponse. | I await your reply.
Kind regards | Cordialement | Best regards; Yours sincerely (formel)
` },
    hedging: { label: 'Nuancer, argumenter', prio: 1, words: `
I’d argue that … | Je dirais que… | I’d say that; In my view
It seems to me that … | Il me semble que… | My impression is that
I tend to think that … | J’ai tendance à penser que… | I’m inclined to think
There’s a case to be made for … | On peut défendre… | One could argue for
I’m not entirely convinced. | Je ne suis pas totalement convaincu. | I have my doubts.
That may be true, but … | C’est peut-être vrai, mais… | Granted, but; Admittedly
On the one hand … on the other hand … | D’un côté… de l’autre… | While…, …
It depends on … | Ça dépend de… | It hinges on
The evidence suggests that … | Les données suggèrent que… | The data indicate that
It’s fair to say that … | On peut dire que… | It would be fair to say
I couldn’t agree more. | Je suis tout à fait d’accord. | Absolutely.; Exactly.
I beg to differ. | Je me permets de ne pas être d’accord. | I see it differently.
to play devil’s advocate | se faire l’avocat du diable | to argue the opposite
by and large | globalement | generally; on the whole
` },
    falsefriends: { label: 'Faux amis', prio: 1, words: `
actually | en fait (≠ actuellement) | in fact; as a matter of fact
currently | actuellement | at the moment; at present
eventually | finalement (≠ éventuellement) | in the end; ultimately
possibly | éventuellement | potentially; perhaps
library | bibliothèque (≠ librairie) | public library
bookshop | librairie | bookstore (AmE)
sensible | raisonnable (≠ sensible) | reasonable; wise
sensitive | sensible | delicate; touchy
to attend | assister à (≠ attendre) | to go to; to be present at
to assist | aider (≠ assister) | to help; to support
to realise | se rendre compte (≠ réaliser) | to become aware
to carry out (a project) | réaliser (un projet) | to implement; to complete
training | formation (professionnelle) | course; programme
experiment | expérience scientifique | test; trial
experience | expérience vécue | background; know-how
lecture | cours magistral (≠ lecture) | talk; presentation
reading | lecture |
to resume | reprendre (≠ résumer) | to restart; to continue
to summarise | résumer | to sum up
delay | retard (≠ délai) | hold-up
deadline | délai, date limite | due date; cut-off
to control | contrôler, maîtriser | to manage; to regulate
to check | contrôler, vérifier | to verify; to inspect
` },
    ai_ml: { label: 'IA & machine learning', prio: 1, words: `
overfitting | surapprentissage | the model memorises the training data
underfitting | sous-apprentissage | the model is too simple
ground truth | vérité terrain | labelled reference data
feature engineering | ingénierie des variables | feature design
hyperparameter tuning | réglage des hyperparamètres | hyperparameter optimisation
precision | précision | positive predictive value
recall | rappel | sensitivity; true positive rate
F1 score | score F1 | harmonic mean of precision and recall
training set | jeu d’entraînement | training data
test set | jeu de test | hold-out set
cross-validation | validation croisée | k-fold validation
loss function | fonction de perte | cost function; objective
gradient descent | descente de gradient | optimisation step
inference | inférence | prediction time
latency | latence | response time
throughput | débit | requests per second
fine-tuning | ajustement fin | domain adaptation
embedding | plongement vectoriel | vector representation
large language model (LLM) | grand modèle de langage | foundation model
prompt engineering | ingénierie des prompts | prompt design
hallucination | hallucination | fabricated answer
guardrails | garde-fous | safety filters
explainability | explicabilité | interpretability
bias | biais | skew
data drift | dérive des données | distribution shift
benchmark | banc d’essai, référence | baseline comparison
to deploy a model | déployer un modèle | to put a model into production
open-weight model | modèle à poids ouverts | open-source model
` },
    rag: { label: 'RAG & gouvernance des LLM', prio: 1, words: `
retrieval-augmented generation (RAG) | génération augmentée par récupération | grounded generation
sovereign | souverain | under full control; self-hosted
data residency | localisation des données | data sovereignty
on-premise | sur site, en local | on-prem; self-hosted
air-gapped | isolé du réseau | fully isolated
knowledge base | base de connaissances | document repository
chunking | découpage en fragments | splitting documents
chunk | fragment | passage; snippet
vector database | base de données vectorielle | vector store
semantic search | recherche sémantique | meaning-based search
reranking | reclassement | re-ordering results
retrieval pipeline | chaîne de récupération | retrieval stack
grounding | ancrage dans les sources | source-based answering
to cite sources | citer les sources | to reference sources
access control | contrôle d’accès | permissions; role-based access
audit trail | piste d’audit | log; traceability
faithfulness | fidélité (aux sources) | groundedness
answer relevance | pertinence de la réponse | relevancy
context window | fenêtre de contexte | context length
prompt injection | injection de prompt | malicious instruction
red-teaming | tests adverses | adversarial testing
proof of concept (PoC) | preuve de concept | pilot
use case | cas d’usage | application
vendor lock-in | dépendance à un fournisseur | supplier dependency
` },
    finance: { label: 'Banque & finance', prio: 1, words: `
retail banking | banque de détail | consumer banking
investment banking | banque d’investissement | corporate finance
credit risk | risque de crédit | default risk
non-performing loan (NPL) | prêt non performant | bad loan
capital requirements | exigences de fonds propres | capital adequacy
liquidity | liquidité | cash availability
stress test | test de résistance | stress testing
interest rate | taux d’intérêt | rate
key interest rate | taux directeur | policy rate
yield | rendement | return
spread | écart de taux | margin
portfolio | portefeuille | holdings
asset management | gestion d’actifs | fund management
balance sheet | bilan | statement of financial position
profit and loss (P&L) | compte de résultat | income statement
collateral | garantie, sûreté | security
mortgage | prêt immobilier | home loan
to default | faire défaut | to fail to repay
underwriting | souscription, analyse de crédit | risk assessment
Know Your Customer (KYC) | connaissance du client | customer due diligence
anti-money laundering (AML) | lutte contre le blanchiment | AML compliance
compliance | conformité | regulatory compliance
regulator | régulateur | supervisory authority
fraud detection | détection de fraude | fraud prevention
credit scoring | notation de crédit | credit rating
fintech | fintech | financial technology
shareholder | actionnaire | stockholder
dividend | dividende | payout
hedge | couverture (de risque) | to offset risk
bond | obligation | fixed-income security
equity | capitaux propres, actions | shares; stock
due diligence | vérification préalable | investigation
risk appetite | appétence au risque | risk tolerance
` },
    decision: { label: 'Aide à la décision', prio: 1, words: `
trade-off | compromis, arbitrage | balance; compromise
objective function | fonction objectif | goal to optimise
constraint | contrainte | limitation
optimisation | optimisation | optimization (AmE)
sensitivity analysis | analyse de sensibilité | what-if analysis
multi-criteria decision analysis (MCDA) | analyse multicritère | multi-criteria evaluation
stakeholder | partie prenante | interested party
key performance indicator (KPI) | indicateur clé de performance | metric
dashboard | tableau de bord | reporting tool
scenario analysis | analyse de scénarios | scenario planning
Monte Carlo simulation | simulation de Monte-Carlo | stochastic simulation
decision tree | arbre de décision | decision diagram
expected value | espérance | mean outcome
uncertainty | incertitude | unpredictability
to weigh up | peser (le pour et le contre) | to evaluate; to consider
pros and cons | avantages et inconvénients | advantages and drawbacks
a rule of thumb | une règle empirique | a heuristic
data-driven | fondé sur les données | evidence-based
` },
    academic: { label: 'Thèse & présentation', prio: 2, words: `
thesis | mémoire, thèse | dissertation
supervisor | directeur de mémoire | advisor (AmE); promoter
literature review | revue de la littérature | state of the art
methodology | méthodologie | approach
findings | résultats | results
limitations | limites | shortcomings
further research | travaux futurs | future work
to defend a thesis | soutenir un mémoire | thesis defence; viva (BrE, doctorat)
research question | question de recherche | problem statement
hypothesis | hypothèse | assumption
As you can see on this slide, … | Comme vous le voyez sur cette diapositive… | This slide shows
I’d like to draw your attention to … | J’attire votre attention sur… | Note that
To sum up, … | Pour résumer… | In conclusion; To conclude
That’s a great question. | Excellente question. | Good question.
I haven’t looked into that yet. | Je ne l’ai pas encore étudié. | That’s outside the scope of my work.
peer review | évaluation par les pairs | refereeing
` },
    career: { label: 'Entretien & carrière', prio: 2, words: `
graduate programme | programme jeunes diplômés | graduate scheme
internship | stage | placement; work experience
to apply for a position | postuler à un poste | to apply for a job
cover letter | lettre de motivation | motivation letter
strengths and weaknesses | forces et faiblesses |
I’m a quick learner. | J’apprends vite. | I pick things up quickly.
I thrive under pressure. | Je m’épanouis sous pression. | I work well under pressure.
team player | qui a l’esprit d’équipe | collaborative
salary expectations | prétentions salariales | expected salary
notice period | préavis |
to network | réseauter | to build connections
an elevator pitch | une présentation éclair | a short pitch
` },
    football: { label: 'Football (banter)', prio: 2, words: `
a screamer | une frappe magnifique | a stunning goal; a worldie
a clean sheet | un match sans encaisser de but | a shutout (AmE)
nil | zéro (score) | zero
to park the bus | jouer ultra-défensif | to defend deep
top of the table | en tête du classement | league leaders
relegation | relégation | going down
injury time | arrêts de jeu | stoppage time
a hat-trick | un triplé | three goals
offside | hors-jeu |
a dodgy decision | une décision douteuse | a questionable call
the gaffer | le coach (familier) | the manager
to be gutted | être dégoûté | to be devastated
to be over the moon | être aux anges | to be delighted
a derby | un derby | a local rivalry
` },
    colloquial: { label: 'Anglais courant (britannique)', prio: 2, words: `
knackered | crevé | exhausted; shattered
gutted | dégoûté, très déçu | devastated
chuffed | ravi | delighted; pleased
to fancy (doing) | avoir envie de | to feel like
cheers | merci, santé | thanks
mate | pote | buddy (AmE); pal
Hang on. | Attends. | Hold on.; Wait a sec.
No worries. | Pas de souci. | No problem.
to grab a coffee | prendre un café | to get a coffee
It’s up to you. | C’est toi qui vois. | Your call.
a bit | un peu | slightly; a little
to sort of / kind of | un peu, plus ou moins | somewhat
Fair enough. | D’accord, c’est juste. | Okay, that’s reasonable.
I’m keen on … | J’aime bien… | I’m into
` },
  };

  const THEMES = {};
  const WORDS = [];
  for (const [id, t] of Object.entries(RAW)) {
    THEMES[id] = { id, label: t.label, course: !!t.course, prio: t.prio, count: 0 };
    for (const line of t.words.split('\n')) {
      if (!line.trim()) continue;
      const [tl, fr, syn] = line.split('|').map(s => (s || '').trim());
      WORDS.push({ id: id + ':' + tl, theme: id, tl, fr, syn: syn ? syn.split(';').map(s => s.trim()).filter(Boolean) : [] });
      THEMES[id].count++;
    }
  }
  global.VOCAB = { THEMES, WORDS };
})(typeof window !== 'undefined' ? window : globalThis);
