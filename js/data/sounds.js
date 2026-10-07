// Prononciation : ce qui trahit encore un francophone à niveau avancé.
// Chaque mot est lu par une voix native ; le micro vérifie que la prononciation est comprise.
window.SOUNDS = [
  { id: 'th', label: 'TH : think / this', fr: 'Langue entre les dents. Ni « s », ni « z », ni « f ».',
    tip: 'TH sourd (think, three) : souffle seul. TH sonore (this, although) : la voix vibre.',
    words: [{ w: 'think' }, { w: 'three' }, { w: 'thousand' }, { w: 'though' }, { w: 'although' }, { w: 'therefore' }, { w: 'method' }, { w: 'growth' }, { w: 'healthcare' }, { w: 'authentication' }] },
  { id: 'stress', label: 'L’accent tonique', fr: 'En anglais, une syllabe domine. Le placer au mauvais endroit rend le mot incompréhensible.',
    tip: 'Majuscules = syllabe accentuée : deVELop, aNAlysis, ANalyse, deTERmine, COMfortable, techNOLogy, ecoNOMic.',
    words: [{ w: 'develop', ipa: 'deVELop' }, { w: 'analysis', ipa: 'aNAlysis' }, { w: 'analyse', ipa: 'ANalyse' }, { w: 'determine', ipa: 'deTERmine' }, { w: 'comfortable', ipa: 'COMFtable' }, { w: 'technology', ipa: 'techNOLogy' }, { w: 'economic', ipa: 'ecoNOMic' }, { w: 'photograph', ipa: 'PHOtograph' }, { w: 'photography', ipa: 'phoTOGraphy' }, { w: 'algorithm', ipa: 'ALgorithm' }] },
  { id: 'ed', label: 'Terminaisons -ED', fr: 'Trois prononciations : /t/ (worked), /d/ (played), /ɪd/ seulement après t ou d (wanted, needed).',
    words: [{ w: 'worked', ipa: '/t/' }, { w: 'asked', ipa: '/t/' }, { w: 'developed', ipa: '/t/' }, { w: 'played', ipa: '/d/' }, { w: 'trained', ipa: '/d/' }, { w: 'wanted', ipa: '/ɪd/' }, { w: 'needed', ipa: '/ɪd/' }, { w: 'tested', ipa: '/ɪd/' }, { w: 'deployed', ipa: '/d/' }, { w: 'analysed', ipa: '/d/' }] },
  { id: 'vowels', label: 'Voyelles longues et courtes', fr: 'ship ≠ sheep, full ≠ fool, live ≠ leave : la longueur change le sens.',
    words: [{ w: 'ship' }, { w: 'sheep' }, { w: 'live' }, { w: 'leave' }, { w: 'full' }, { w: 'fool' }, { w: 'sit' }, { w: 'seat' }, { w: 'pull' }, { w: 'pool' }] },
  { id: 'h', label: 'Le H aspiré', fr: 'On l’entend : un petit souffle. Et on ne l’ajoute pas là où il n’existe pas.',
    words: [{ w: 'hotel' }, { w: 'hungry' }, { w: 'hedge fund' }, { w: 'happy' }, { w: 'harbour' }, { w: 'hierarchy' }, { w: 'honest', fr: 'H muet !' }, { w: 'hour', fr: 'H muet !' }] },
  { id: 'silent', label: 'Lettres muettes', fr: 'Des lettres écrites mais jamais prononcées.',
    words: [{ w: 'debt', fr: 'b muet' }, { w: 'receipt', fr: 'p muet' }, { w: 'Wednesday', fr: 'd muet' }, { w: 'island', fr: 's muet' }, { w: 'subtle', fr: 'b muet' }, { w: 'mortgage', fr: 't muet' }, { w: 'foreign', fr: 'g muet' }, { w: 'business', fr: 'i muet' }] },
  { id: 'schwa', label: 'Formes faibles et schwa', fr: 'Les petits mots non accentués se réduisent : to = « te », for = « fe », can = « ken ».',
    tip: 'Dis les phrases d’un seul souffle, en appuyant seulement sur les mots importants.',
    words: [{ w: 'I want to go' }, { w: 'a cup of tea' }, { w: 'It’s for you' }, { w: 'I can do it' }, { w: 'What do you think?' }, { w: 'from time to time' }] },
  { id: 'tech', label: 'Mots techniques et financiers', fr: 'Ceux qu’on écorche le plus souvent en réunion.',
    words: [{ w: 'data' }, { w: 'accuracy' }, { w: 'Wednesday' }, { w: 'entrepreneur' }, { w: 'finance' }, { w: 'infrastructure' }, { w: 'cache' }, { w: 'queue' }, { w: 'privacy' }, { w: 'regulatory' }] },
];
