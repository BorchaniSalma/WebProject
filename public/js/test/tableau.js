let options = ["jamais", "parfois", "souvent", "Toujours"]

let questions = [
  {
    number: "1",
    question:
      "Je passe pour une personne solide et suscite assez rapidement le respect quand je m’affirme en société",
    personality: 7,
  },
  {
    number: "2",
    question:
      "Face à des situations de tension, de conflit ou d’agressivité, je garde facilement mon calme et considère ma stabilité émotionnelle comme un atout pour prendre du recul avant de m’exprimer.",
    personality: 9,
  },
  {
    number: "3",
    question:
      "Si je repère des erreurs, je me sens le devoir d’intervenir rapidement pour corriger les choses car tous les détails comptent si on veut améliorer les choses pour progresser.",
    personality: 1,
  },
  {
    number: "4",
    question:
      "Je me sens plutôt bien quand je suis au service des autres, quitte parfois à sacrifier facilement mon temps, mon énergie ou même mon argent, pour les soutenir face à leurs difficultés.",
    personality: 2,
  },
  {
    number: "5",
    question:
      " J’aime mobiliser de l’énergie dans une action particulière, surtout si celle-ci contribue à mon succès et/ou à ma reconnaissance personnelle, sociale ou professionnelle.",
    personality: 3,
  },
  {
    number: "6",
    question:
      "Enfant, je me sentais déjà très différent(e) des autres et j’avais le sentiment de déranger.",
    personality: 4,
  },
  {
    number: "7",
    question:
      "Je tiens particulièrement à préserver ma vie privée et avoir du temps pour moi, pour me retrouver et prendre le recul dont j’ai besoin quand c’est nécessaire.",
    personality: 5,
  },
  {
    number: "8",
    question:
      "Quand j’ai des décisions importantes à prendre, je demande l’avis des autres,",
    personality: 6,
  },
  {
    number: "9",
    question:
      "Afin de préserver un maximum d’opportunités intéressantes, je peux me sentir vite frustré(e) si l’on m’impose des règles qui à mes yeux n’ont pas lieu d’être.",
    personality: 7,
  },
  {
    number: "10",
    question:
      "Même en cas de tension relationnelle, je sais préserver un sentiment d’union et d’harmonie, car j’estime que c’est la meilleure chose qui soit pour apaiser les esprits et préserver le lien.",
    personality: 9,
  },
  {
    number: "11",
    question:
      " J’aime que les choses soient parfaites et je suis dérangé(e) par les imperfections à commencer par ce que les gens peuvent percevoir chez moi.",
    personality: 1,
  },
  {
    number: "12",
    question:
      "Je peux consacrer facilement du temps libre pour soutenir des personnes qui en ont besoin et trouve cela gratifiant de sentir que ma présence est utile pour eux.",
    personality: 2,
  },
  {
    number: "13",
    question:
      " Je suis vigilant(e) au fait de préserver une image plutôt brillante vis-à-vis de ma carrière et de mon style de vie en générale.",
    personality: 3,
  },
  {
    number: "14",
    question:
      "Je peux être enclin à me replonger émotionnellement dans des souvenirs, ce qui peut donner l’impression que je ressasse toujours les mêmes histoires.",
    personality: 4,
  },
  {
    number: "15",
    question:
      " Je fonctionne d’une façon plutôt objective et j’aime réfléchir par moi-même pour résoudre des problèmes avant ou après en avoir discuté avec les autres.",
    personality: 5,
  },
  {
    number: "16",
    question:
      " Pour me sentir bien dans une équipe, j’aime solliciter l’avis de chacun afin de privilégier la cohésion du groupe dans son ensemble.",
    personality: 6,
  },
  {
    number: "17",
    question:
      " Je suis toujours partant(e) quand il s’agit de se faire plaisir et de profiter pleinement de la vie.",
    personality: 7,
  },
  {
    number: "18",
    question:
      "Au besoin, je reprends vite la main sur les décisions à prendre, quitte à imposer parfois mon point de vue, quels que soient les avis ou sensibilités exprimés.",
    personality: 7,
  },
  {
    number: "19",
    question:
      "Je peux être facilement critique avec moi-même, mais aussi avec les autres, par soucis d’exigence et de perfection.",
    personality: 1,
  },
  {
    number: "20",
    question:
      "Je suis de nature affectueuse et parfois même très protecteur(trice), voire possessif(ve) avec les gens que j’aime et que j’affectionne.",
    personality: 2,
  },
  {
    number: "21",
    question:
      "Je tiens à préserver une bonne image concernant ma posture, car je considère que ce que l’on perçoit de moi, conditionne le succès auquel j’aspire et la reconnaissance que je souhaite.",
    personality: 3,
  },
  {
    number: "22",
    question:
      "Ma sensibilité, une aide précieuse pour mobiliser mon imagination et ma créativité, notamment pour résoudre de nombreux problèmes dans ma vie.",
    personality: 4,
  },
  {
    number: "23",
    question:
      "J’aime prendre le temps d’analyser les choses tranquillement avant de me précipiter dans une prise de décision.",
    personality: 5,
  },
  {
    number: "24",
    question:
      "Je peux vite me sentir anxieux(se) ou imprudent(e) si je dois prendre d’importantes décisions sans l’avis des autres.",
    personality: 6,
  },
  {
    number: "25",
    question:
      "Je peux parfois faire abstraction de quelques règles importantes, si cela me permet de vivre des situations plus excitantes.",
    personality: 7,
  },
  {
    number: "26",
    question:
      "J’ai confiance en ma force et en mon courage, lorsqu’arrive le moment de prendre une décision, je ne fais pas de compromis.",
    personality: 7,
  },
  {
    number: "27",
    question:
      "Quitte à prendre sur moi, je suis capable de beaucoup de patience pour éviter les discussions houleuses, les confrontations ou les conflits.",
    personality: 9,
  },
  {
    number: "28",
    question:
      "Je me positionne en négociateur(trice) assez ferme, car je sais imposer mes idées et reprendre le contrôle d’une situation pour en sortir gagnant.",
    personality: 7,
  },
  {
    number: "29",
    question:
      "Je suis perçu(e) par mon entourage comme ambitieux(se) et très mobilisé(e) pour réussir mes objectifs dès que possible.",
    personality: 3,
  },
  {
    number: "30",
    question:
      "J’aime me lancer dans de nouvelles aventures ou projets stimulants, même si les situations en cours ne sont pas encore vraiment terminées.",
    personality: 7,
  },
  {
    number: "31",
    question:
      "J’ai souvent l’impression que personne ne peut me comprendre car il m’est impossible d’expliquer mon fonctionnement et ce sentiment intense d’être différent(e).",
    personality: 4,
  },
  {
    number: "32",
    question:
      "Par soucis de paix d'esprit et de tranquillité, j’ai parfois tendance à me voiler la face, en laissant trainer des situations importantes à régler, pour plus tard.",
    personality: 9,
  },
  {
    number: "33",
    question:
      "Je préfère me tenir à l’écart, voire me retirer discrètement de l’agitation, plutôt que de me retrouver pris dans des conversations plus émotionnelles, voire superficielles.",
    personality: 5,
  },
  {
    number: "34",
    question:
      " J’aime tenir une place de choix dans la vie de mon entourage, savoir qu’ils peuvent compter sur moi en cas de besoin est essentiel pour mon bien-être.",
    personality: 2,
  },
  {
    number: "35",
    question:
      "Afin d’éviter toutes critiques négatives, je peux donner beaucoup de moi-même et obtenir facilement l’admiration des autres pour l’efficacité de mon travail.",
    personality: 1,
  },
  {
    number: "36",
    question:
      "Je suis facilement préoccupé(e) ou inquiet(e) par une chose ou une autre qui, pourrait nuire au bien-être de mes proches, concernant ma famille, mes équipes ou mon organisation.",
    personality: 6,
  },
  {
    number: "37",
    question:
      "Enfant, j’avais le sentiment d’avoir rarement été vu(e) ou entendu(e).",
    personality: 9,
  },
  {
    number: "38",
    question:
      "J’aime vivre les choses avec intensité et passion, que je peux provoquer avec n’importe quel petit déclencheur.",
    personality: 4,
  },
  {
    number: "39",
    question:
      "J’aime apprendre des autres plus que me révéler moi même, sauf si vous me sollicitez sur mon expertise.",
    personality: 5,
  },
  {
    number: "40",
    question:
      "J’appréhende facilement qu’une chose grave pourrait m’arriver ou arriver à mes proches.",
    personality: 6,
  },
  {
    number: "41",
    question:
      "Je suis attentif(ve) au fait d’être bon(ne), fiable, efficace et m’efforce de respecter la parole donnée.",
    personality: 1,
  },
  {
    number: "42",
    question:
      "La solitude déclenche en moi une forte anxiété car j’ai souvent du mal à définir mes propres besoins.",
    personality: 2,
  },
  {
    number: "43",
    question:
      "Si face à l’adversité, mon plan ne fonctionne pas, je ne tarde pas à changer (parfois un peu rapidement), de stratégie pour trouver les moyens de progresser autrement vers l’attente de mes objectifs.",
    personality: 3,
  },
  {
    number: "44",
    question:
      "J’ai une telle tendance à voir le côté positif des choses, que je passe parfois pour une personne irresponsable et coupée de certaines réalités. En faite, je veux juste profiter de cette vie.",
    personality: 7,
  },
  {
    number: "45",
    question:
      " Je suis capable de déployer beaucoup d’énergie pour une personne de mon clan.",
    personality: 7,
  },
  {
    number: "46",
    question:
      "Je sais ce qui est bien de faire, et j’aime quand les autres s’attachent davantage à peaufiner leurs taches pour parvenir à exprimer leur excellence.",
    personality: 1,
  },
  {
    number: "47",
    question:
      "Parfois mon souci des autres, me donne envie de les aider par tous les moyens dont je dispose.",
    personality: 2,
  },
  {
    number: "48",
    question:
      "Enfant, pour éviter le rejet, je me « sur adaptais » à l’autorité de certains leaders pour éviter de me retrouver seul(e).",
    personality: 6,
  },
  {
    number: "49",
    question:
      "Je suis exigent(e) vis à vis de mes attentes et m’affirme d’une manière simple et directe, quitte à bousculer mon entourage si nécessaire.",
    personality: 7,
  },
  {
    number: "50",
    question:
      "Je suis surpris(e) parfois par la faculté des gens à voir le mauvais côté des choses, alors que ce serait tellement plus simple et plus constructif de mettre l’accent sur ce qui est positif.",
    personality: 7,
  },
  {
    number: "51",
    question:
      " Je suis capable de me motiver tout(e) seul(e) et je ne lâche pas facilement lorsque je poursuis un objectif important pour moi.",
    personality: 3,
  },
  {
    number: "52",
    question:
      "Je suis souvent absorbé(e) par ce que je vis intérieurement et je me sens parfois envieux(se) voire malheureux(se) de ce qu’ont les autres et de ce qui manque à ma vie.",
    personality: 4,
  },
  {
    number: "53",
    question:
      "Lorsque je suis interpelé(e) sur mes ressentis personnels, je ne suis parfois pas très à mon aise, je pense que mes sentiments ne regardent que moi et ne sont pas très utiles pour avancer dans la vie.",
    personality: 5,
  },
  {
    number: "54",
    question:
      " Il est facile pour moi de m’abandonner dans les propos des autres afin de privilégier un climat de bonne entente tout en restant relax, quels que soient les opinions de chacun.",
    personality: 9,
  },
  {
    number: "55",
    question:
      "Quand il s’agit de réfléchir sur des projets qui me stimulent, je préfère le faire seul(e), car j’ai l’impression d’avancer plus rapidement dans mon analyse des choses, quitte ensuite à en parler avec d’autres personnes",
    personality: 5,
  },
  {
    number: "56",
    question:
      "Je suis de nature ambitieux(se), j’aime apprendre et je suis capable de mobiliser beaucoup d’énergie pour progresser vers une réussite de plus en plus conséquente, pour moi et pour les autres.",
    personality: 3,
  },
  {
    number: "57",
    question:
      "On peut me reprocher mon manque de compassion à l’égard des autres ou de moi-même car je ne peux m’empêcher de relever les imperfections.",
    personality: 1,
  },
  {
    number: "58",
    question:
      "Mes sentiments et mes goûts raffinés, pour certains détails autour de moi, sont parfois ressentis comme excessifs et/ou hors du commun.",
    personality: 4,
  },
  {
    number: "59",
    question:
      "Je me sens très honoré(e) par l’appartenance que représente pour moi une équipe, une société ou une communauté.",
    personality: 6,
  },
  {
    number: "60",
    question:
      "Je suis capable d’utiliser la force pour obtenir ce que je veux, qui plus est quand il s’agit de me faire respecter.",
    personality: 7,
  },
  {
    number: "61",
    question:
      "Ma spécialité pour attirer l’attention est de me conformer à ce que je ressens ou devine chez les autres, je suis très empathique.",
    personality: 2,
  },
  {
    number: "62",
    question:
      "Je suis parfois complaisant(e) et je donne à croire que j’aime laisser les choses un peu « planer » pour préserver ma paix d’esprit et ma tranquillité.",
    personality: 9,
  },
  {
    number: "63",
    question:
      "J’ai horreur de tout ce qui se rapproche de près ou de loin à de l’enfermement.",
    personality: 7,
  },
  {
    number: "64",
    question:
      "Mes principes de justice sont importants, ils me permettent de récupérer le contrôle d’une situation.",
    personality: 7,
  },
  {
    number: "65",
    question:
      "Je me laisse parfois emporter par ce que je vis en moi, du coup je me replis sur moi-même en remettant tout ce que je vis en question. Cette mélancolie me permet d’être en contact avec mon imaginaire.",
    personality: 4,
  },
  {
    number: "66",
    question:
      "Afin de me sentir bien dans un groupe, je veille à ce que les choses se passent bien et j’envisage très vite les choses à régler pour préserver le bien-être et la sécurité de chacun.",
    personality: 6,
  },
  {
    number: "67",
    question:
      "Je préfère mettre mon énergie sur ce que je veux pour moi, plutôt que de me prendre la tête avec les choses qui me font souffrir, l’important est d’avancer et de profiter de l’avenir.",
    personality: 7,
  },
  {
    number: "68",
    question:
      "J’ai parfois une fâcheuse tendance à privilégier des actions faciles plutôt que de me focaliser sur des tâches importantes à faire maintenant.",
    personality: 9,
  },
  {
    number: "69",
    question:
      "Je suis de nature généreux(se) et j’aime prendre soin des autres, même si ça me demande parfois de gros efforts ou des sacrifices.",
    personality: 2,
  },
  {
    number: "70",
    question:
      "Je me sens davantage porté(e) par le démarrage de nouveaux projets que par le fait de le mener à bien, notamment dans le long terme.",
    personality: 3,
  },
  {
    number: "71",
    question:
      "Je suis une personne intègre, j’ai des principes clairs qui guident précisément mes jugements, ma morale et mes valeurs.",
    personality: 1,
  },
  {
    number: "72",
    question:
      "D’une façon générale, j’ai une tendance naturelle à éviter de m’impliquer émotionnellement dans la vie des gens, sauf si leur histoire me donne l’occasion de comprendre davantage qui ils sont.",
    personality: 5,
  },
  {
    number: "73",
    question:
      "Mes proches me disent parfois que je devrais prendre davantage soin de moi que de me soucier des autres, mais j’ai l’impression de prendre soin de moi en aidant justement les autres.",
    personality: 2,
  },
  {
    number: "74",
    question:
      "’ai besoin de croquer la vie, j’aime mes amis et les sources d’excitations que me procure la vie. Je ne veux pas passer à coté d’expériences que j’ai envie de vivre ou des projets enthousiasmant.",
    personality: 7,
  },
  {
    number: "75",
    question:
      "Mon calme légendaire incite mon entourage à me solliciter pour régler des divergences de point de vue ou atténuer des situations de tension.",
    personality: 9,
  },
  {
    number: "76",
    question:
      "Lorsque j’investis sur un achat, je le fais plutôt à partir d’éléments rationnels analysés que sur un mode plus intuitif ou émotionnel.",
    personality: 5,
  },
  {
    number: "77",
    question:
      "Je me sens très vite agacé(e) par les choses qui ne sont pas faites de la meilleure façon qui soit, d’où mon côté parfois critique.",
    personality: 1,
  },
  {
    number: "78",
    question:
      "Pour avancer vers mes objectifs, je suis capable de beaucoup de flexibilité avec les autres, de façon à ajuster mes stratégies aux résultats que je vise, en fonction des sensibilités et des situations de chacun.",
    personality: 3,
  },
  {
    number: "79",
    question:
      "Ma façon de travailler est parfois non conventionnelle, car j’ai besoin de me sentir libre et porté(e) par l’expression d’une profonde authenticité, afin d’exprimer toute ma sensibilité avec classe, quitte à être très différent(e) des gens.",
    personality: 4,
  },
  {
    number: "80",
    question:
      "J’ai une forte tendance à l’individualisme, j’éprouve un très fort besoin de faire passer sous contrôle tout ce qui ne l’est pas encore.",
    personality: 7,
  },
  {
    number: "81",
    question:
      "Je ressens une certaine timidité pour oser me confronter à l’autorité d’un leader, alors que pour d’autre, cette posture semble naturelle.",
    personality: 6,
  },
  {
    number: "82",
    question:
      "Si un objectif est inatteignable, je peux devenir obsessionnel(le) et produire un travail de fourmi, très méticuleux.",
    personality: 1,
  },
  {
    number: "83",
    question:
      "Je suis parfois envahi(e) par se sentiment que quelque chose manque à ma vie car j’ai souvent l’impression que les autres sont plus heureux et plus épanouis, qu’ils se posent moins de questions.",
    personality: 4,
  },
  {
    number: "84",
    question:
      "Je me soucis peu des dépenses, j’aime dépenser sans compter quand je le désir et me retrouve régulièrement avec des choses qui au finale ne me servent pas vraiment.",
    personality: 7,
  },
  {
    number: "85",
    question:
      "Mon besoin de me calquer sur l’autre peut me conduire à passer trop de temps dans des activités qui pourtant ne me concernent pas.",
    personality: 2,
  },
  {
    number: "86",
    question:
      "La capacité que j’ai à me concentrer sur un projet en restant seul(e) sur plusieurs heures, sans avoir besoin de directives ou d’échanges avec l’extérieur, est un atout pour moi dans la réalisation de mes tâches.",
    personality: 5,
  },
  {
    number: "87",
    question:
      "M, MJe me sens solide et suffisamment « dur(e) à cuire » pour agir avec fermeté, notamment face à des situations d’injustices, subies par des personnes plus faibles que moi.",
    personality: 7,
  },
  {
    number: "88",
    question:
      "J’ai du talent pour initier de nouveaux projets (parfois trop) et je sais motiver facilement les autres à me suivre dans ces mêmes projets.",
    personality: 3,
  },
  {
    number: "89",
    question:
      "Je me sens parfois dans une effervescence de choses à faire pour préparer un travail et ressens de l’anxiété à l’égard des enjeux attendus.",
    personality: 6,
  },
  {
    number: "90",
    question:
      "J’ai une apparence de paresse qui cache souvent en réalité une surcharge mentale.",
    personality: 9,
  },
  {
    number: "91",
    question:
      "Je prends mes responsabilités sociales ou collectives au sérieux et je suis toujours surpris(e) voire choqué(e) de la légèreté qu’ont d’autres à se considérer comme parfois seul au monde.",
    personality: 6,
  },
  {
    number: "92",
    question:
      "Bien que facile à vivre, je suis une personne qui peux générer de l’agacement car je peux rester longtemps indécis(e) quand il s’agit de faire des choix.",
    personality: 9,
  },
  {
    number: "93",
    question:
      "J’ai peu de souvenirs de mon enfance chargée en affectivité. Je remplissais juste très bien mon métier d’enfant, avec ce sentiment que plus je faisais de choses, plus j’obtenais de bons résultats, plus mes parents m’aimaient.",
    personality: 3,
  },
  {
    number: "94",
    question:
      "J’aime creuser en moi pour rejoindre ma pleine authenticité, mon vrai moi en me comparant aux autres, non pour leur ressembler, mais justement pour me démarquer, me différencier.",
    personality: 4,
  },
  {
    number: "95",
    question:
      "Je suis d’humeur très positive et toujours partant(e) pour des tâches ou des activités multiples surtout quand elles sont stimulantes.",
    personality: 7,
  },
  {
    number: "96",
    question:
      "Enfant, j’avais toujours peur de ne pas être suffisamment à la hauteur ou assez exigent(e) pour répondre à ce qui m’était demandé.",
    personality: 1,
  },
  {
    number: "97",
    question:
      "Je suis parfois perçu(e) comme distant(e), ou peu impliqué(e) émotionnellement, voire peu sociable, car je privilégie naturellement la réflexion à l’expression de mes sentiments.",
    personality: 5,
  },
  {
    number: "98",
    question:
      "Je sais dire non facilement, l’autorité ne m’impressionne pas le moins du monde.",
    personality: 7,
  },
  {
    number: "99",
    question:
      "Je me sens parfois trop porté(e) par l’élan de mon coeur et j’éprouve des difficultés à me préserver dans certaine situation vis-à-vis des autres.",
    personality: 2,
  },
  {
    number: "100",
    question:
      "Je suis plutôt efficace avec un idéal élevé concernant la réalisation de mes tâches, quitte à m’y reprendre de nombreuse fois, pour peaufiner les détails.",
    personality: 1,
  },
  {
    number: "101",
    question:
      "Dans mes interactions avec les autres, j’ai tendance à compter que sur moi quitte à passer parfois pour une personne brusque à la tête dure.",
    personality: 7,
  },
  {
    number: "102",
    question:
      "En situation de conflit, j’ai du mal à décider tant que je n’ai pas pris en compte la diversité des points de vue de chacun.",
    personality: 9,
  },
  {
    number: "103",
    question:
      "Parfois je me sens tellement touché(e) par les difficultés des autres que j’ai tendance à m’exposer excessivement sur le plan émotionnellement, alors qu’il serait bon que je prenne un peu de distance.",
    personality: 2,
  },
  {
    number: "104",
    question:
      "Il m’arrive de m’isoler pour approfondir la découverte de mon monde intérieur, en recherchant la solitude. Cette tendance peut m’entraîner dans un certain marasme intérieur, voire un sentiment de déprime.",
    personality: 4,
  },
  {
    number: "105",
    question:
      "Mes ambitions d’accomplissement sont importants et élevés dans ma vie, je suis prêt(e) à faire ce qu’il faut pour mobiliser, en terme de temps, d’énergie et d’argent pour atteindre le succès auquel j’aspire vraiment.",
    personality: 3,
  },
  {
    number: "106",
    question:
      "Je suis peu porté(e) par les implications dans les associations, amicales ou soirées diverses car je préfère me retrouver dans une réflexion tranquille plutôt que dans l’agitation émotionnelle collective.",
    personality: 5,
  },
  {
    number: "107",
    question:
      "J’aime les environnements confortables et avec de l’allure, j’aime m’offrir des bonnes parties de shopping quand l’envie de me faire plaisir me prend.",
    personality: 7,
  },
  {
    number: "108",
    question:
      "Je ressens souvent des sentiments contradictoires vis-à-vis des figures d’autorité, ce qui peut se traduire chez moi, par un retrait en cas d’insécurité, voire une attitude défensive ou provocante.",
    personality: 6,
  },
  {
    number: "109",
    question:
      "Lorsque je vois certains détails qui ne me conviennent pas, je n’hésite pas à reprendre les autres (sans même qu’ils me le demandent), pour leur montrer comment accomplir leurs tâches correctement.",
    personality: 1,
  },
  {
    number: "110",
    question:
      "J’ai souvent l’impression de souffrir plus que les autres et d’être en contact avec de profondes émotions.",
    personality: 4,
  },
  {
    number: "111",
    question:
      "Lorsque quelque chose me plaît vraiment, je me débrouille pour l’obtenir, car je ne vois pas de raison de manquer ou de passer à coté d’une opportunité.",
    personality: 7,
  },
  {
    number: "112",
    question:
      "C’est important pour moi de soutenir les personnes qui en expriment le besoin et j’aime me sentir important(e) en répondant à leurs attentes.",
    personality: 2,
  },
  {
    number: "113",
    question:
      "J’ai une tendance naturelle à garder mes projets pour moi et à ne pas les partager facilement aux personnes qui m’entourent. A moins qu’elles soient concernées par une partie de ce projet.",
    personality: 5,
  },
  {
    number: "114",
    question:
      "Si quelqu’un n’a pas de valeur à mes yeux, il ne peut pas m’en donner.",
    personality: 7,
  },
  {
    number: "115",
    question:
      "Tendre vers l’excellence est suffisamment important pour moi pour que j’y consacre mes pensées, mon temps et mon argent le plus régulièrement possible.",
    personality: 3,
  },
  {
    number: "116",
    question:
      "J’ai tendance à être attentif(ve) voire soupçonneux(se) à l’égard des propositions qui pourraient davantage privilégier les bénéfices individuels que collectifs.",
    personality: 6,
  },
  {
    number: "117",
    question:
      "J’aime ce qui est familier, la routine me convient pour autant qu’elle soit confortable et qu’elle préserve ma stabilité, voire ma tranquillité émotionnelle et mentale.",
    personality: 9,
  },
  {
    number: "118",
    question:
      "Je suis de nature plutôt méfiant(e), je sens très vite si un danger ou une situation menaçante pourrait se présenter en terme de non respect de l’éthique.",
    personality: 6,
  },
  {
    number: "119",
    question:
      "Quand différents points de vue me semblent intéressants, j’ai du mal à me donner des priorités et à m’engager rapidement sur des décisions précises, car justement, tous les points de vue sont intéressants.",
    personality: 9,
  },
  {
    number: "120",
    question:
      "Même si j’ai parfois des baisses d’énergie (remise en cause, déception, pression), je peux montrer facilement aux autres que je reste mobilisé(e) et confiant(e) pour avancer vers l’atteinte de mes ou nos objectifs.",
    personality: 3,
  },
  {
    number: "121",
    question:
      "Je peux facilement avoir tendance à la nostalgie en ravivant des sentiments du passé pour donner plus d’intensité ma vie présente.",
    personality: 4,
  },
  {
    number: "122",
    question:
      "Enfant, je me préoccupais déjà plus de mes propres sources de stimulation que des problèmes des autres.",
    personality: 7,
  },
  {
    number: "123",
    question:
      "Je peux être critique avec les autres s’ils m’apparaissent imprécis, inefficaces ou qu’ils n’avancent pas dans le cadre de la direction attendue.",
    personality: 1,
  },
  {
    number: "124",
    question:
      "J’ai une tendance naturelle à cloisonner un peu ma vie (travail, famille, sports, loisirs,..), les personnes de ces différents domaines ne se connaissent pas entre-elles.",
    personality: 5,
  },
  {
    number: "125",
    question:
      "Le courage et la force sont des atouts que je mobilise facilement, quand il s’agit de reprendre la main sur des situations qui ne me conviennent pas.",
    personality: 7,
  },
  {
    number: "126",
    question:
      "Enfant, il était plus important pour moi de satisfaire les besoins des autres et de leur venir en aide.",
    personality: 2,
  },
  {
    number: "127",
    question:
      " Les autres me reconnaissent facilement comme une personne organisée et précise, parfois même avec un coté un peu rigide voire coincée.",
    personality: 1,
  },
  {
    number: "128",
    question:
      " Je suis suffisamment solide pour prendre une décision malgré le désaccord de mes proches.",
    personality: 7,
  },
  {
    number: "129",
    question:
      "J’ai souvent l’impression d’être à la fois surchargé(e) et impuissant(e) face à la multitude des tâches.",
    personality: 9,
  },
  {
    number: "130",
    question:
      "J’éprouve en général un grand désir d’apporter de l’assistance aux autres quel que soit le retour que j’en obtiens, car je sens qu’ainsi je tiens une place importante dans leur vie.",
    personality: 2,
  },
  {
    number: "131",
    question:
      "J’aime être reconnu(e) comme un être à part, avec toute ma singularité, ma différence quitte même à surprendre mon entourage par mon originalité;",
    personality: 4,
  },
  {
    number: "132",
    question:
      "Je sais très bien comment mettre en avant le meilleur de moi-même pour réussir dans les situations compliquées ou de pression, afin d’éviter de me laisser emporter par des sentiments d’échecs.",
    personality: 3,
  },
  {
    number: "133",
    question:
      "Enfant, j’aimais me retrouver dans mon propre monde en me préservant de l’agitation de mes camarades.",
    personality: 5,
  },
  {
    number: "134",
    question:
      "J’aime dépasser certaines limites et aller au devant de certaines aventures, car je trouve ça plus stimulant et enivrant que de perdre son temps à ne rien faire.",
    personality: 7,
  },
  {
    number: "135",
    question:
      "Je suis souvent félicité(e) ou honoré(e), par mes supérieurs ou ma hiérarchie pour mes capacités d’organisation, d’anticipation et de respect des règles engagées dans mes préparations.",
    personality: 6,
  },
];
