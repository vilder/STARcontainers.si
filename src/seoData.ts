export interface CityData {
  slug: string;
  name: string;
  region: string;
  population: string;
  description: string;
  keywords: string[];
}

export interface KeywordData {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  image: string;
  content: string;
  sections: { title: string; body: string }[];
  faq: { q: string; a: string }[];
}

export const cities: CityData[] = [
  {
    slug: 'ljubljana',
    name: 'Ljubljana',
    region: 'Osrednjeslovenska',
    population: '295.000',
    description:
      'Ljubljana je glavno in največje mesto Slovenije, središče gospodarstva, kulture in prometa. Z mestno obvoznico in odlično povezavo z avtocestnim omrežjem omogoča hitro dostavo kontejnerjev v vsak del mesta in okolice.',
    keywords: ['kontejner Ljubljana', 'ladijski kontejner Ljubljana', 'kontejnerji Ljubljana', 'kupi kontejner Ljubljana', 'kontejner za prodajo Ljubljana'],
  },
  {
    slug: 'maribor',
    name: 'Maribor',
    region: 'Podravska',
    population: '96.000',
    description:
      'Maribor je drugo največje mesto Slovenije in gospodarstveno središče Štajerske. Zahvaljujoč bližini avstrijske meje in dobri povezavi z avtocesto je idealna lokacija za dostavo kontejnerjev v severovzhodno Slovenijo.',
    keywords: ['kontejner Maribor', 'ladijski kontejner Maribor', 'kontejnerji Maribor', 'kupi kontejner Maribor', 'kontejner za prodajo Maribor'],
  },
  {
    slug: 'celje',
    name: 'Celje',
    region: 'Savinjska',
    population: '38.000',
    description:
      'Celje je tretje največje mesto v Sloveniji in pomembno gospodarstveno središče Spodnjega Posavja. Leži ob avtocesti A1, ki povezuje Ljubljano in Maribor, kar omogoča učinkovito dostavo kontejnerjev.',
    keywords: ['kontejner Celje', 'ladijski kontejner Celje', 'kontejnerji Celje', 'kupi kontejner Celje', 'kontejner za prodajo Celje'],
  },
  {
    slug: 'kranj',
    name: 'Kranj',
    region: 'Gorenjska',
    population: '37.000',
    description:
      'Kranj je gospodarsko središče Gorenjske in četrto največje mesto v Sloveniji. Njegova strateška lega med Ljubljano in Jesenicami ob avtocesti A2 zagotavlja hitro dostavo kontejnerjev po vsej Gorenjski.',
    keywords: ['kontejner Kranj', 'ladijski kontejner Kranj', 'kontejnerji Kranj', 'kupi kontejner Kranj', 'kontejner za prodajo Kranj'],
  },
  {
    slug: 'koper',
    name: 'Koper',
    region: 'Obalno-kraška',
    population: '26.000',
    description:
      'Koper je največje primorsko mesto in dom edinega slovenskega pristanišča. Kot vhodna točka za ladijski transport kontejnerjev je Koper ključna lokacija z najhitrejšim dostopom do kontejnerjev v Sloveniji.',
    keywords: ['kontejner Koper', 'ladijski kontejner Koper', 'kontejnerji Koper', 'kupi kontejner Koper', 'kontejner za prodajo Koper'],
  },
  {
    slug: 'ptuj',
    name: 'Ptuj',
    region: 'Podravska',
    population: '18.000',
    description:
      'Ptuj je najstarejše mesto v Sloveniji in pomembno središče Podravja. Leži ob avtocesti A4, ki povezuje Maribor s hrvaško mejo, kar omogoča zanesljivo dostavo kontejnerjev v vzhodno Slovenijo.',
    keywords: ['kontejner Ptuj', 'ladijski kontejner Ptuj', 'kontejnerji Ptuj', 'kupi kontejner Ptuj', 'kontejner za prodajo Ptuj'],
  },
  {
    slug: 'nova-gorica',
    name: 'Nova Gorica',
    region: 'Goriška',
    population: '13.000',
    description:
      'Nova Gorica je mlado mesto ob meji z Italijo in gospodarsko središče Goriške regije. Bližina italijanske meje in avtocestne povezave omogočajo učinkovito dostavo kontejnerjev v zahodno Slovenijo.',
    keywords: ['kontejner Nova Gorica', 'ladijski kontejner Nova Gorica', 'kontejnerji Nova Gorica', 'kupi kontejner Nova Gorica', 'kontejner za prodajo Nova Gorica'],
  },
  {
    slug: 'murska-sobota',
    name: 'Murska Sobota',
    region: 'Pomurska',
    population: '11.000',
    description:
      'Murska Sobota je največje mesto Prekmurja in gospodarsko središče severovzhodne Slovenije. Čeprav leži obrobno, zagotavljamo dostavo kontejnerjev tudi v to regijo v roku 48 ur.',
    keywords: ['kontejner Murska Sobota', 'ladijski kontejner Murska Sobota', 'kontejnerji Murska Sobota', 'kupi kontejner Murska Sobota', 'kontejner za prodajo Murska Sobota'],
  },
  {
    slug: 'novo-mesto',
    name: 'Novo Mesto',
    region: 'Jugovzhodna Slovenija',
    population: '23.000',
    description:
      'Novo Mesto je največje mesto Dolenjske in pomembno gospodarsko središče jugovzhodne Slovenije. Avtocestna povezava A2 omogoča dostavo kontejnerjev po vsej regiji.',
    keywords: ['kontejner Novo Mesto', 'ladijski kontejner Novo Mesto', 'kontejnerji Novo Mesto', 'kupi kontejner Novo Mesto', 'kontejner za prodajo Novo Mesto'],
  },
  {
    slug: 'brezice',
    name: 'Brežice',
    region: 'Posavska',
    population: '6.500',
    description:
      'Brežice so pomembno obmejno mesto ob hrvaški meji in središče Posavja. Strateška lega ob avtocesti A2 Zagreb–Ljubljana omogoča hitro dostavo kontejnerjev iz južne smeri.',
    keywords: ['kontejner Brežice', 'ladijski kontejner Brežice', 'kontejnerji Brežice', 'kupi kontejner Brežice', 'kontejner za prodajo Brežice'],
  },
  {
    slug: 'velenje',
    name: 'Velenje',
    region: 'Savinjska',
    population: '33.000',
    description:
      'Velenje je industrijsko središče Zasavja in Savinjske doline. Zaradi močne industrijske tradicije je povpraševanje po kontejnerjih za skladiščenje in transport visoko.',
    keywords: ['kontejner Velenje', 'ladijski kontejner Velenje', 'kontejnerji Velenje', 'kupi kontejner Velenje', 'kontejner za prodajo Velenje'],
  },
  {
    slug: 'trbovlje',
    name: 'Trbovlje',
    region: 'Zasavska',
    population: '14.000',
    description:
      'Trbovlje so središče Zasavja z dolgo industrijsko tradicijo. Kontejnerji so priljubljeni za skladiščenje opreme in materialov v tej industrijski regiji.',
    keywords: ['kontejner Trbovlje', 'ladijski kontejner Trbovlje', 'kontejnerji Trbovlje', 'kupi kontejner Trbovlje', 'kontejner za prodajo Trbovlje'],
  },
  {
    slug: 'izola',
    name: 'Izola',
    region: 'Obalno-kraška',
    population: '16.000',
    description:
      'Izola je obalno mesto z bogato ribiško in ladjedelniško tradicijo. Bližina koprskega pristanišča omogoča direkten dostop do kontejnerjev s kratkim dobavnim rokom.',
    keywords: ['kontejner Izola', 'ladijski kontejner Izola', 'kontejnerji Izola', 'kupi kontejner Izola', 'kontejner za prodajo Izola'],
  },
  {
    slug: 'slovenska-bistrica',
    name: 'Slovenska Bistrica',
    region: 'Podravska',
    population: '8.000',
    description:
      'Slovenska Bistrica leži med Mariborom in Celjem ob avtocesti A1, kar omogoča odlično dostopnost za dostavo kontejnerjev v osrednje Štajersko.',
    keywords: ['kontejner Slovenska Bistrica', 'ladijski kontejner Slovenska Bistrica', 'kontejnerji Slovenska Bistrica', 'kupi kontejner Slovenska Bistrica', 'kontejner za prodajo Slovenska Bistrica'],
  },
  {
    slug: 'domzale',
    name: 'Domžale',
    region: 'Osrednjeslovenska',
    population: '12.000',
    description:
      'Domžale so industrijsko središče ob robu Ljubljane z odlično avtocestno povezavo. Zaradi bližine glavnega mesta je dostava kontejnerjev izjemno hitra.',
    keywords: ['kontejner Domžale', 'ladijski kontejner Domžale', 'kontejnerji Domžale', 'kupi kontejner Domžale', 'kontejner za prodajo Domžale'],
  },
];

export const keywords: KeywordData[] = [
  {
    slug: 'kontejner-cena',
    title: 'Kontejner cena – Aktualne cene ladijskih kontejnerjev 2025 | STAR Containers',
    h1: 'Kontejner cena – Pregled cen ladijskih kontejnerjev v Sloveniji',
    description: 'Preverite aktualne cene ladijskih kontejnerjev v Sloveniji. Primerjava cen 10ft, 20ft, 40ft, High Cube in hladilnih kontejnerjev. BREZPLAČNO povpraševanje.',
    keywords: ['kontejner cena', 'cena ladijskega kontejnerja', 'kontejnerji cene', 'koliko stane kontejner', 'cena 20ft kontejnerja', 'cena 40ft kontejnerja', 'kontejner cena Slovenija'],
    image: '/photos/40ft-hc-3.webp',
    content: `Cene ladijskih kontejnerjev se gibljejo od 1.790 € za najmanjše 10ft kontejnerje do 9.900 € za 40ft HC hladilne kontejnerje (vse cene brez DDV). Na ceno vplivajo predvsem velikost kontejnerja, tip (standard, High Cube, hladilni), stanje (novo ali rabljeno) in trenutna razpoložljivost na trgu.

Naše cene so med najkonkurenčnejšimi v Sloveniji, saj nabavljamo kontejnerje direktno iz Hongkonga brez posrednikov. Vsak kontejner je ISO certificiran, pregledan in pripravljen za takojšnjo uporabo – brez skritih stroškov.

Cena dostave je odvisna od razdalje in teže kontejnerja. Za lokacije do 150 km od Ptuja je dostava standardna, za bolj oddaljene lokacije pa nudimo individualne ponudbe.`,
    sections: [
      {
        title: 'Kaj vpliva na ceno kontejnerja?',
        body: 'Cena ladijskega kontejnerja je odvisna od več dejavnikov. Najpomembnejši so velikost (10ft, 20ft, 40ft), tip (standardni, High Cube, hladilni), stanje (novo ali rabljeno) ter trenutne tržne razmere. Novi kontejnerji, proizvedeni v Hongkongu po ISO standardih, so dražji od rabljenih, a nudijo dolgoročno zanesljivost in neokrnjeno strukturno trdnost. Rabljeni kontejnerji so ekonomična alternativa, ki pa vseeno zagotavlja vodotesnost in varnost. Vsak rabljeni kontejner pri STAR Containers je temeljito pregledan pred prodajo.',
      },
      {
        title: 'Primerjava cen po tipih kontejnerjev',
        body: '10ft standardni kontejner je idealen za manjše prostorske potrebe in stane od 1.790 € (brez DDV). 20ft standardni kontejner, ki je najpogosteje naročen, stane od 1.990 €. 40ft standardni kontejner za največje projekte je na voljo od 2.700 €. High Cube različice so za 300–500 € dražje od standardnih, a nudijo 30 cm več notranje višine, kar je izjemno koristno za skladiščenje višjih palet ali adaptacijo v bivalni prostor. Hladilni (reefer) kontejnerji so specializirani produkti z lastno hladilno enoto in stanejo od 6.990 € za 20ft do 9.900 € za 40ft HC.',
      },
      {
        title: 'Ali so v ceni vključeni DDV in dostava?',
        body: 'Vse objavljene cene so brez DDV (22 %). Dostava je kalkulirana posebej glede na lokacijo in tip kontejnerja. Za poizvedbo o točni ceni z dostavo nas kontaktirajte – odgovorimo v 2 urah z individualno ponudbo brez obveznosti. Cene se ne spremenijo po potrditvi naročila.',
      },
    ],
    faq: [
      { q: 'Koliko stane 20ft kontejner v Sloveniji?', a: 'Nov 20ft standardni kontejner stane od 1.990 € (brez DDV). Rabljeni 20ft kontejner je na voljo od 1.490 €. Cena vključuje certifikat ISO in pregled.' },
      { q: 'Ali se cene kontejnerjev pogosto spreminjajo?', a: 'Cene ladijskih kontejnerjev so relativno stabilne, a so odvisne od globalnih tržnih razmer. Svetujemo, da preverite aktualne cene direktno pri nas, saj jih redno posodabljamo.' },
      { q: 'Ali je možna pogodba o plačilu na obroke?', a: 'Za večje naročbe ponujamo možnost dogovora o plačilnih pogojih. Kontaktirajte nas za individualno rešitev.' },
      { q: 'Kdaj dobim račun in certifikat?', a: 'Račun in certifikat ISO prejmete ob dostavi kontejnerja. Dokumentacija je pripravljena v slovenskem in angleškem jeziku.' },
    ],
  },
  {
    slug: 'ladijski-kontejner',
    title: 'Ladijski kontejner za prodajo – Vse vrste in velikosti | STAR Containers',
    h1: 'Ladijski kontejner – Popoln vodnik po vrstah in velikostih',
    description: 'Vse o ladijskih kontejnerjih: standardni, High Cube, hladilni. Velikosti 10ft, 20ft, 40ft. Certificirani ISO kontejnerji za prodajo z dostavo po vsej Sloveniji.',
    keywords: ['ladijski kontejner', 'ladijski kontejnerji', 'vrste ladijskih kontejnerjev', 'velikosti kontejnerjev', 'ISO kontejner', 'kontejner za transport'],
    image: '/photos/40ft-hc-0.webp',
    content: `Ladijski kontejnerji (ISO kontejnerji) so standardizirane kovinske enote, namenjene transportu blaga po morju, cesti in železnici. Izdelani so iz visokokakovostnega jeklarskega jekla, so vodoodporni, protipožarni in opremljeni z varnimi zaklepi. Njihova posebnost je standardizirana velikost, ki omogoča enostavno rokovanje z dvigali in nalaganje na ladje, vlake ali tovornjake.

Ladijski kontejnerji so danes ena najpogostejših rešitev za skladiščenje in zaščito blaga – tako v industriji, gradbeništvu, kmetijstvu kot pri posameznikih. STAR Containers zagotavlja vse tipe ISO kontejnerjev direktno iz Hongkonga, brez posrednikov.

Vsak kontejner je pred dobavo pregledan, opremljen z dokumentacijo in certifikatom ISO. Kontejnerji so na zalogi v Ptuju in so na voljo za takojšnjo dostavo.`,
    sections: [
      {
        title: 'Vrste ladijskih kontejnerjev',
        body: 'Standardni (General Purpose) kontejnerji so najpogostejši tip – z zaprto streho, stenami in tlemi, vodotesnimi vrati na enem koncu. Primerni so za transport in skladiščenje suhega blaga. High Cube (HC) kontejnerji so za 30 cm višji od standardnih, z notranjo višino 2,70 m. Idealni za skladiščenje voluminoznega blaga ali adaptacije v bivalne prostore. Hladilni (Reefer) kontejnerji imajo vgrajeno hladilno enoto in vzdržujejo temperaturo od -25°C do +25°C – primerni za živila, zdravila in farmacijo. Open Top kontejnerji imajo odprt zgornji del za nalaganje s krandom. Flat Rack kontejnerji so brez strehe in stranskih sten za transport izvengabaritnega tovora.',
      },
      {
        title: 'Standardne dimenzije in teže',
        body: '10ft kontejner: dolžina 2,99 m, širina 2,44 m, višina 2,59 m, prostornina 14 m³, masa praznega 1.300 kg. 20ft kontejner: dolžina 5,90 m, širina 2,35 m, višina 2,39 m, prostornina 33 m³, masa praznega 2.230 kg. 40ft kontejner: dolžina 12,03 m, širina 2,35 m, višina 2,39 m, prostornina 67 m³, masa praznega 3.750 kg. 40ft High Cube: enake tlorisne dimenzije, višina 2,70 m, prostornina 76 m³.',
      },
      {
        title: 'Zakaj izbrati ladijski kontejner za skladiščenje?',
        body: 'Ladijski kontejnerji so zasnovani za ekstremne razmere na morju – vzdržijo nevihte, sol, vlago in temperaturne spremembe. To jih naredi izjemno trpežne tudi na kopnem. Kontejner je vodotesen, varen pred vlomi in ne zahteva posebnega vzdrževanja. Za razliko od klasičnih skladiščnih prostorov ga ni treba graditi ali pridobivati gradbenih dovoljenj za začasno rabo. Je mobilna rešitev, ki jo lahko kadar koli prestavimo.',
      },
    ],
    faq: [
      { q: 'Kaj je ladijski kontejner?', a: 'Ladijski kontejner (ISO kontejner) je standardizirana kovinska enota za transport in skladiščenje blaga, narejena iz jekla. Dimenzije so definirane po ISO standardu in so enake po vsem svetu.' },
      { q: 'Ali ladijski kontejner potrebuje temelje?', a: 'Za začasno postavitev kontejner ne potrebuje posebnih temeljev. Priporočamo postavljanje na ravno, čvrsto podlago (beton, asfalt, gramoz). Za trajno postavitev je priporočljivo betonsko ploščo ali podporne stebre.' },
      { q: 'Kako dolgo traja ladijski kontejner?', a: 'Kakovostni novi ladijski kontejner traja 20–25 let ali več ob minimalnem vzdrževanju. Redno pregledovanje in premazovanje z antikorozijskim lakom podaljšata življenjsko dobo.' },
      { q: 'Ali je mogoče kontejner prilagoditi po meri?', a: 'Da, ponujamo predelave kontejnerjev po meri: dodajanje oken in vrat, električne instalacije, izolacijo, prezračevanje, barvo po RAL vzorčniku in druge prilagoditve.' },
    ],
  },
  {
    slug: 'kontejner-za-skladiscenje',
    title: 'Kontejner za skladiščenje – Varno in suho shranjevanje | STAR Containers',
    h1: 'Kontejner za skladiščenje – Varno in suho skladiščenje brez kompromisov',
    description: 'Ladijski kontejnerji kot idealna rešitev za skladiščenje. Vodoodporni, varni, certificirani. Dostava po Sloveniji v 48h. Od 1.790 € (brez DDV).',
    keywords: ['kontejner za skladiščenje', 'skladiščni kontejner', 'kontejner shramba', 'kontejner za shranjevanje', 'skladiščenje v kontejnerju', 'kontejner garaža'],
    image: '/photos/20ft-4.webp',
    content: `Ladijski kontejnerji so ena najboljših rešitev za varno in suho skladiščenje blaga, opreme, orodja in materialov. Njihova jeklena konstrukcija ščiti vsebino pred dežjem, snegom, vlago, mrazom in potencialnimi vlomilci. Za razliko od klasičnih skladiščnih objektov kontejner ne zahteva gradbenega dovoljenja za začasno rabo in ga ni treba graditi – je takoj na voljo in takoj funkcionalen.

Kontejner za skladiščenje je primeren za najrazličnejše namene: od shranjevanja gradbene opreme na gradbišču, kmetijskega orodja in strojev, pa do osebnih predmetov, pohištva, arhivov ali zalog za e-commerce podjetja.

STAR Containers ponuja vse velikosti skladiščnih kontejnerjev – od kompaktnih 10ft za omejene površine do 40ft High Cube kontejnerjev za obsežne potrebe. Vsak kontejner je vodoodporen, protipožaren in ima kakovostne protivlomne zapone.`,
    sections: [
      {
        title: 'Zakaj je kontejner idealen za skladiščenje?',
        body: 'Ladijski kontejner je zasnovan za transport po morju, kjer je izpostavljen ekstremnim vremenskim razmeram – slani vodi, vlagi in temperaturnim nihanjem. Prav ta robustnost ga naredi idealnega za dolgoročno skladiščenje na kopnem. Jeklena konstrukcija ščiti vsebino pred vlago in vlomi. Notranje ploščice tal so narejene iz trdnega lesa ali bambuša, ki vzdržita težka bremena. Standardni kontejner prenese do 25.000 kg koristnega tovora.',
      },
      {
        title: 'Katere predmete je mogoče shraniti v kontejnerju?',
        body: 'V kontejnerju je mogoče varno shraniti praktično vse: gradbeno orodje in stroje, kmetijsko mehanizacijo, pohištvo in opremo za dom, sezonske predmete (blagajniška oprema, božična dekoracija), arhivska gradiva podjetij, blago za e-commerce (zaloge, embalaža), avtomobile ali motorje, športno opremo in rekreacijske pripomočke ter industrijske komponente in rezervne dele.',
      },
      {
        title: 'Katere velikosti so na voljo za skladiščenje?',
        body: '10ft kontejner (14 m³) je primeren za manjša gradbišča ali zasebno rabo. 20ft kontejner (33 m³) je najpogostejša izbira za podjetja in kmetije – sprejme do 11 EUR palet. 40ft kontejner (67 m³) je idealen za velika podjetja ali obsežne projekte. 40ft High Cube (76 m³) ponuja dodatno notranjo višino 2,70 m, kar omogoča shranjevanje višjih predmetov ali dvonivojsko polično postavitev.',
      },
      {
        title: 'Ali je potrebno gradbeno dovoljenje za postavitev kontejnerja?',
        body: 'Za začasno postavitev kontejnerja (do 12 mesecev) praviloma ni treba pridobiti gradbenega dovoljenja. Priporočamo, da preverite lokalne predpise pri pristojni občini. Za trajno postavitev ali predelavo v objekt je gradbenega dovoljenja potrebno pridobiti. STAR Containers vam svetuje pri vseh postopkih.',
      },
    ],
    faq: [
      { q: 'Ali je kontejner za skladiščenje vodotesen?', a: 'Da, vsi naši kontejnerji so vodotesni. Jeklena konstrukcija, tesnila na vratih in vodoodporen premaz zagotavljajo zaščito pred dežjem, snegom in vlago.' },
      { q: 'Koliko časa traja postavitev kontejnerja?', a: 'Dostava in postavitev kontejnerja trajata manj kot eno uro. Kamion s posebno napravo (klikalka) kontejner postavi na željeno lokacijo brez dodatnih strojev.' },
      { q: 'Ali potrebujem elektriko v kontejnerju?', a: 'Za osnovno skladiščenje elektrika ni potrebna. Za osvetlitev, varnostne kamere ali hladilno enoto pa je priporočljiv priklop. Ponujamo tudi električno instalacijo po meri.' },
      { q: 'Ali je kontejner protivlomno zaščiten?', a: 'Da, vsi kontejnerji so opremljeni z zaposrnimi ojačenimi zakoni. Po želji je mogoče namestiti dodatne ključavnice ali varnostne sisteme.' },
    ],
  },
  {
    slug: 'kontejner-za-gradbiscite',
    title: 'Kontejner za gradbišče – Mobilni servisni in skladiščni prostori | STAR Containers',
    h1: 'Kontejner za gradbišče – Zanesljiva mobilna skladišča in servisne enote',
    description: 'Kontejnerji za gradbišča: skladiščenje materialov, orodjarne, servisne enote. Hitra dostava, prilagoditve po meri. Od 1.790 € (brez DDV).',
    keywords: ['kontejner za gradbišče', 'gradbiščni kontejner', 'kontejner gradbeništvo', 'servisni kontejner', 'kontejner za orodje', 'kontejner na gradbišču'],
    image: '/photos/20ft-a1.jpg',
    content: `Kontejnerji na gradbiščih so nepogrešljivi za varno in urejeno delo na vsaki lokaciji. Ladijski kontejner je idealna rešitev za varno hrambo gradbene opreme, materialov in orodja ter za ureditev servisnih prostorov, delavnic ali pisarn neposredno na gradbišču.

Prednost kontejnerja pred klasičnimi gradbiščnimi barako je njegova robustnost, vodotesnost in enostavna premestitev. Ko je delo na eni lokaciji končano, je kontejner v 30 minutah na tovornjaku in pripravljen za prevoz na naslednjo lokacijo.

STAR Containers ponuja kontejnerje za gradbišča v vseh velikostih. Prilagodimo jih vašim specifičnim potrebam – dodamo odprtine za vrata ali okna, električno instalacijo, polico, odebelitev tal in drugo.`,
    sections: [
      {
        title: 'Uporabe kontejnerja na gradbišču',
        body: 'Kontejner na gradbišču se najpogosteje uporablja kot orodjarna za varno shranjevanje ročnega in strojnega orodja, katerega vrednost je pogosto visoka. Prav tako je primeren kot skladišče za gradbeni material (cement, armaturo, okovje), kot garderoba za delavce z možnostjo sanitarij, kot pisarna ali nadzorna kabina za vodje del, ter kot začasno varno zaprto skladišče za dragocene stroje in naprave.',
      },
      {
        title: 'Prednosti pred klasičnimi barako in začasnimi objekti',
        body: 'Ladijski kontejner je cenovno ugodnejši od klasičnih gradbiščnih barakin. Postavitev traja manj kot eno uro brez posebnih gradbenih del. Jeklena konstrukcija zagotavlja višjo varnost pred vlomi in vandalizmi. Kontejner je mobilni – prestavimo ga kadar koli na novo lokacijo. Vzdrževanje je minimalno, saj ne potrebuje posebnega nadzora. Za razliko od lesenih ali plastičnih objektov kontejner ne trohni in ne propada.',
      },
      {
        title: 'Prilagoditve kontejnerja za gradbišče',
        body: 'Za potrebe gradbišča je mogoče kontejner opremiti z: dvojnimi vrati za lažje vstavljanje velikih strojev, mrežastimi okni za prezračevanje, električno instalacijo in osvetlitvijo, notranjimi policami in kavlji za orodje, zunanjim stopniščem ali rampami za dostop, protipožarnim sistemom ter protivlomnimi zaklepi s standardiziranimi ključavnicami. Kontejner je mogoče tudi lakirati v barvo podjetja po RAL vzorčniku.',
      },
    ],
    faq: [
      { q: 'Ali za kontejner na gradbišču potrebujem dovoljenje?', a: 'Za začasno postavitev (do 12 mesecev) kontejner na gradbišču praviloma ne potrebuje posebnega gradbenega dovoljenja, saj se obravnava kot začasni objekt. Priporočamo preveritev pri lokalni občini.' },
      { q: 'Kako hitro lahko kontejner premestimo na novo gradbišče?', a: 'Kontejner je mogoče premestiti v 30–60 minutah z našim kamionom s klikalko. Priporoča se praznitev vsebine ali varno zavarovanje predmetov pred prevozom.' },
      { q: 'Koliko orodja sprejme 20ft kontejner?', a: '20ft kontejner s prostornino 33 m³ zadostuje za vso opremo povprečne gradbiščne ekipe. Za večja gradbišča priporočamo 40ft kontejner ali kombinacijo več enot.' },
      { q: 'Ali ponujate najem kontejnerjev za gradbišče?', a: 'Poleg prodaje se dogovorimo tudi za najem kontejnerja za gradbišče. Kontaktirajte nas za ponudbo naše.' },
    ],
  },
  {
    slug: 'rabljeni-kontejnerji',
    title: 'Rabljeni kontejnerji – Kakovostni rabljeni ladijski kontejnerji | STAR Containers',
    h1: 'Rabljeni kontejnerji – Kakovostne rabljene enote po ugodnih cenah',
    description: 'Rabljeni ladijski kontejnerji v odličnem stanju. Pregledani, certificirani, vodoodporni. Cene od 1.490 €. Dostava po Sloveniji.',
    keywords: ['rabljeni kontejnerji', 'rabljen kontejner', 'kontejnerji rabljeni', 'poceni kontejner', 'rabljeni ladijski kontejner', 'drugi kontejnerji'],
    image: '/photos/rabljen-20ft-main.jpg',
    content: `Rabljeni kontejnerji so odlična ekonomična izbira za tiste, ki iščejo kakovostno rešitev za skladiščenje ali transport po ugodnejši ceni. Pri STAR Containers so vsi rabljeni kontejnerji temeljito pregledani, funkcionalno brezhibni in pripravljeni za takojšnjo uporabo.

Rabljeni kontejnerji izvirajo iz aktivne ladijske flote – so bili večkrat prepeljani po morju in so zato zasnovani za ekstremne razmere. To pomeni, da so kljub starosti strukturno trdni, vodotesni in varni. Naši strokovnjaki vsak rabljeni kontejner pregledajo na vodotesnost, stanje tal, tesnila na vratih in celovitost jeklene konstrukcije.

Prihranki pri nakupu rabljenega kontejnerja v primerjavi z novim so od 30 do 40 %. Hkrati je funkcionalna vrednost praktično enaka – kontejner opravlja svojo nalogo enako dobro.`,
    sections: [
      {
        title: 'Kaj preverimo pri rabljenem kontejnerju?',
        body: 'Vsak rabljeni kontejner pri STAR Containers pred prodajo pregledamo po strogi kontrolni listi: Vodotesnost – preverimo vsa tesnila in strešno ploščo za morebitne razpoke ali rjo. Tla – pregledamo les ali bambus tal na gnitje ali poškodbe. Vrata – preverimo delovanje zaklopov, tesnila in poravnanost vrat. Jeklena konstrukcija – pregledamo varke, robove in vogalnike na korozijo. Zunanji premaz – ocenimo stanje antikorozijskega premaza in po potrebi izvedemo popravila.',
      },
      {
        title: 'Kategorije rabljenosti',
        body: 'Rabljeni kontejnerji so pri nas razvrščeni glede na stanje: Kategorija A (Cargo Worthy) – kontejner je primeren za mednarodni transport. Struktura je brezhibna, vodotesen je in ima veljavni certifikat. Minimalne estetske pomanjkljivosti so dovoljene. Kategorija B (Wind & Water Tight) – kontejner je vodotesen in odporen na veter, primeren za skladiščenje. Manjše vidne poškodbe so možne. Kategorija C (As Is) – rabljeni kontejnerji z bolj vidnimi poškodbami, ki pa ne vplivajo na funkcionalnost. Primerni za adaptacije ali zahtevnejše industrijske namene.',
      },
      {
        title: 'Kdaj je rabljeni kontejner prava izbira?',
        body: 'Rabljeni kontejner je prava izbira, kadar je proračun omejen, a potrebujete zanesljivo rešitev. Je idealen za: začasno skladiščenje na gradbišču, dolgoročno shranjevanje opreme na kmetiji, osebno shranjevanje (orodje, pohištvo, sezonski predmeti), adaptacijo v delavnico, pisarno ali bivalni prostor, ter kot poceni rešitev za manjša podjetja.',
      },
    ],
    faq: [
      { q: 'Ali je rabljeni kontejner vodotesen?', a: 'Da, vsi naši rabljeni kontejnerji so pregledani na vodotesnost pred prodajo. Kategorija A in B sta certificirani kot vodotesni (Wind & Water Tight).' },
      { q: 'Koliko stane rabljeni 20ft kontejner?', a: 'Rabljeni 20ft kontejner je pri nas na voljo od 1.490 € (brez DDV). Cena je odvisna od stanja in starosti kontejnerja.' },
      { q: 'Kako se razlikuje rabljeni od novega kontejnerja?', a: 'Nov kontejner je neizkoriščen, brez sledi rabe in ima polni ISO certifikat. Rabljeni je bil v aktivni ladijski rabi, ima vidne sledi uporabe, a je strukturno in funkcionalno ekvivalenten. Razlika v ceni je 30–40 %.' },
      { q: 'Ali je mogoče rabljeni kontejner prepleskati?', a: 'Da, rabljeni kontejner je mogoče prepleskati v poljubno barvo po RAL vzorčniku. To je ena najpogostejših prilagoditev, ki kontejnerju da povsem svež videz.' },
    ],
  },
  {
    slug: 'kontejner-20ft',
    title: '20ft kontejner – Standardni 20 čeveljski ladijski kontejner | STAR Containers',
    h1: '20ft kontejner – Najbolj priljubljena velikost ladijskega kontejnerja',
    description: '20ft ladijski kontejner: dimenzije 5.90m × 2.35m × 2.39m, prostornina 33m³. Certificiran, vodoodporen. Cena od 1.990 € (brez DDV). Dostava 48h.',
    keywords: ['20ft kontejner', '20 čevljev kontejner', 'kontejner 20ft cena', '20ft ladijski kontejner', 'kontejner 6m', 'standardni 20ft kontejner'],
    image: '/photos/20ft-6.webp',
    content: `20ft kontejner je najpogosteje naročana in najvsestranskejša velikost ladijskega kontejnerja. Z dimenzijami 5,90 m × 2,35 m × 2,39 m in notranjo prostornino 33 m³ ponuja optimalno razmerje med prostorom in ceno. Je dovolj velik za večino potreb, hkrati pa dovolj kompakten, da ga je mogoče postaviti na omejenih površinah.

20ft kontejner je primeren za mednarodni transport blaga, dolgoročno skladiščenje, ureditev začasnih pisarn ali delavnic, shranjevanje kmetijske opreme ter adaptacijo v bivalne ali poslovne prostore. V logistiki se 20ft kontejner meri v enotah TEU (Twenty-foot Equivalent Unit) – 20ft je 1 TEU.

STAR Containers ima 20ft kontejnerje vedno na zalogi v Ptuju. Dostava po vsej Sloveniji je v roku 48 ur. Na voljo so novi in rabljeni 20ft kontejnerji ter High Cube različica z večjo notranjo višino.`,
    sections: [
      {
        title: 'Tehnične specifikacije 20ft kontejnerja',
        body: 'Zunanja dolžina: 6,058 m. Zunanja širina: 2,438 m. Zunanja višina: 2,591 m. Notranja dolžina: 5,900 m. Notranja širina: 2,352 m. Notranja višina: 2,393 m. Odprtina vrat (širina): 2,340 m. Odprtina vrat (višina): 2,280 m. Prostornina: 33,2 m³. Masa praznega kontejnerja: 2.230 kg. Največja skupna masa: 30.480 kg. Največji koristni tovor: 28.250 kg. Tla: bambus ali trdi les (hardwood), odebeljeni na 28 mm. Stene: jeklo z antikorozijskim premazom.',
      },
      {
        title: 'Koliko palet sprejme 20ft kontejner?',
        body: 'V 20ft kontejner je mogoče naložiti: 11 EUR palet (1.200 × 800 mm) v enojni vrsti, ali 9–10 ISO palet (1.200 × 1.000 mm). Nalaganje je mogoče ročno ali z viličarjem. Za nalaganje z viličarjem priporočamo prosto površino na vsaj 3 metre pred vrati kontejnerja. Višina nakladanja je 2,28 m, kar omogoča nalaganje standardnih logističnih enot.',
      },
      {
        title: '20ft Standard vs 20ft High Cube',
        body: '20ft Standard (22G1) ima zunanjo višino 2,59 m in notranjo višino 2,39 m – primeren za večino standardnih logističnih potreb. 20ft High Cube (22G1) ima zunanjo višino 2,90 m in notranjo višino 2,70 m – za 30 cm višji, kar omogoča shranjevanje višjih palet (do 2,00 m), adaptacijo z višjim stropom ter boljšo cirkulacijo zraka. HC kontejner je za cca. 500 € dražji od standardnega, kar je investicija, ki se hitro povrne pri zahtevnejših aplikacijah.',
      },
    ],
    faq: [
      { q: 'Koliko tehta 20ft kontejner?', a: 'Prazen 20ft kontejner tehta approximately 2.230 kg (2,2 tone). Skupna masa z blagom je do 30.480 kg.' },
      { q: 'Ali 20ft kontejner ustreza za bivanje?', a: 'Da, 20ft kontejner je mogoče prilagoditi v bivalni prostor (container home). Potrebna sta izolacija in električna instalacija. Notranja površina je cca. 14 m², kar zadostuje za studio ali počitniški objekt.' },
      { q: 'Koliko časa traja dostava 20ft kontejnerja?', a: 'Kontejner iz naše zaloge v Ptuju dostavimo po vsej Sloveniji v roku 48 ur od potrditve naročila. Za nujne primere je možna dostava v 24 urah.' },
      { q: 'Ali je 20ft kontejner primeren za zimo?', a: 'Da, jekleni 20ft kontejner vzdržuje vreme brez vzdrževanja. Za shranjevanje temperaturno občutljivega blaga je priporočljiva izolacija sten in tal.' },
    ],
  },
  {
    slug: 'kontejner-40ft',
    title: '40ft kontejner – Veliki 40 čeveljski ladijski kontejner | STAR Containers',
    h1: '40ft kontejner – Maksimalen prostor za vaše potrebe',
    description: '40ft ladijski kontejner: dimenzije 12.03m × 2.35m × 2.39m, prostornina 67m³. Certificiran, vodoodporen. Cena od 2.700 € (brez DDV). Dostava 48h.',
    keywords: ['40ft kontejner', '40 čevljev kontejner', 'kontejner 40ft cena', '40ft ladijski kontejner', 'kontejner 12m', 'veliki kontejner'],
    image: '/photos/40ft-hc-0.webp',
    content: `40ft kontejner je največji standardni ladijski kontejner z dimenzijami 12,03 m × 2,35 m × 2,39 m in prostornino 67 m³. Ponuja dvakrat večji prostor kot 20ft kontejner, pri tem pa je cena na kubični meter ugodnejša. Je idealna rešitev za obsežno skladiščenje, velike gradbene projekte in industrijske aplikacije.

40ft kontejner (v logistiki znan kot FEU – Forty-foot Equivalent Unit) je enako pogosten kot 20ft v mednarodnem ladijskem transportu. STAR Containers ima 40ft kontejnerje v zalogi in jih dostavlja po vsej Sloveniji. Na voljo sta standardna višina (2,39 m notranje) in High Cube (2,70 m notranje).

Zaradi dolžine 12 metrov 40ft kontejner zahteva primerno dostopno pot za kamion – priporočamo, da zagotovite vsaj 15 metrov ravne podlage za manipulacijo.`,
    sections: [
      {
        title: 'Tehnične specifikacije 40ft kontejnerja',
        body: 'Zunanja dolžina: 12,192 m. Zunanja širina: 2,438 m. Zunanja višina: 2,591 m (Standard) / 2,896 m (High Cube). Notranja dolžina: 12,032 m. Notranja širina: 2,352 m. Notranja višina: 2,393 m (Standard) / 2,700 m (High Cube). Prostornina: 67,7 m³ (Standard) / 76,4 m³ (High Cube). Masa praznega kontejnerja: 3.750 kg. Največja skupna masa: 32.500 kg. Največji koristni tovor: 28.750 kg. ISO koda: 42G1 (Standard) / 45G1 (High Cube).',
      },
      {
        title: 'Koliko palet sprejme 40ft kontejner?',
        body: 'V 40ft kontejner je mogoče naložiti: 23–25 EUR palet (1.200 × 800 mm) v enojni vrsti, ali 20–21 ISO palet (1.200 × 1.000 mm). Pri dvoetažnem nalaganju s paletnimi stojali je mogoče podvojiti kapaciteto. 40ft kontejner je primeren za nakladanje z viličarjem, dvigalom ali transportnim trakom.',
      },
      {
        title: '40ft Standard vs 40ft High Cube',
        body: '40ft Standard je ekonomična izbira za transport in skladiščenje standardnih logističnih enot. 40ft High Cube je za 30 cm višji (notranja višina 2,70 m) in je danes najpogosteje naročana različica – cena je le za ~300 € višja, prostornina pa za 8,7 m³ večja. HC je idealen za: adaptacijo v pisarno, delavnico ali bivalni prostor, skladiščenje visokih strojev in opreme, ter double-deck nalaganje palet.',
      },
    ],
    faq: [
      { q: 'Koliko tehta 40ft kontejner?', a: 'Prazen 40ft kontejner tehta cca. 3.750 kg (3,75 tone). Maksimalna skupna masa z blagom je 32.500 kg.' },
      { q: 'Kateri je boljši – 40ft Standard ali High Cube?', a: 'Za večino aplikacij priporočamo 40ft High Cube – za minimalno razliko v ceni dobite 9 m³ več prostora in višje strope. Izjema je le, če imate omejitve višine na lokaciji postavitve.' },
      { q: 'Ali 40ft kontejner potrebuje posebne temelje?', a: 'Za začasno rabo kontejner ne potrebuje posebnih temeljev. Priporočamo ravno podlago (beton, asfalt, gramoz) z zadostno nosivostjo. Za trajno instalacijo priporočamo betonske podporne stebre na vogalih.' },
      { q: 'Ali je mogoče dva 20ft kontejnerja nadomestiti z enim 40ft?', a: 'Prostornini sta enaki (2 × 33 = 66 ≈ 67 m³), a en 40ft kontejner je cenejši in enostavnejši za upravljanje. Dve 20ft enoti pa nudita fleksibilnost pri premestitvi na dve lokaciji.' },
    ],
  },
  {
    slug: 'high-cube-kontejner',
    title: 'High Cube kontejner – Višji ladijski kontejnerji HC | STAR Containers',
    h1: 'High Cube kontejner – 30 cm več višine za večji volumen',
    description: 'High Cube kontejnerji z višino 2.70m. 20ft HC in 40ft HC. Večja prostornina, enaka tlorisna površina. Cena od 2.490 € (brez DDV). Dostava po Sloveniji.',
    keywords: ['high cube kontejner', 'HC kontejner', 'visoki kontejner', 'kontejner high cube cena', '40ft high cube', '20ft high cube', 'kontejner 2.70m'],
    image: '/photos/40ft-hc-4.webp',
    content: `High Cube (HC) kontejnerji so posebna kategorija ladijskih kontejnerjev, ki so za 30 cm višji od standardnih. Standardni kontejner ima notranjo višino 2,39 m, medtem ko High Cube ponuja 2,70 m. Ta razlika se zdi majhna, a v praksi pomeni bistveno večjo uporabnost – posebno pri skladiščenju visokih palet, nalaganju stoječih predmetov ali adaptaciji v pisarno ali bivalni prostor.

High Cube kontejnerji so danes enakovredni ali celo pogostejši od standardnih v novih serijah kontejnerjev. STAR Containers ponuja HC kontejnerje v velikostih 20ft HC in 40ft HC – oba v novih in rabljenih različicah.

ISO oznaka High Cube kontejnerja je 45G1 (40ft HC) ali 25G1 (20ft HC). Zunanja višina HC kontejnerja je 2,896 m (9 čevljev 6 palcev), notranja pa 2,700 m.`,
    sections: [
      {
        title: 'Prednosti High Cube kontejnerja',
        body: 'Dodatnih 30 cm višine prinaša naslednje prednosti: Večja prostornina – 40ft HC ima 76 m³ namesto 67 m³ (povečanje za ~12 %). Nalaganje višjih palet – EUR palete z blagom do 2,00 m višine se enostavno skladiščijo. Boljša ventilacija in manj utesnjenosti pri delu v notranjosti. Boljši za adaptacije – višji strop naredi bivalni ali delovni prostor bolj udoben. Primeren za nekatere industrijske stroje, ki ne ustrezajo standardni višini 2,39 m.',
      },
      {
        title: 'Primerjava 20ft HC in 40ft HC',
        body: '20ft HC: notranje dimenzije 5,90 m × 2,35 m × 2,70 m, prostornina 37 m³, cena od 2.490 € (brez DDV). Idealen za manjša podjetja, gradbišča in zasebno rabo. 40ft HC: notranje dimenzije 12,03 m × 2,35 m × 2,70 m, prostornina 76 m³, cena od 2.790 € (brez DDV). Najpogostejša izbira v industriji in logistiki. Oba sta na voljo v novih in rabljenih različicah.',
      },
      {
        title: 'Kje se High Cube kontejnerji najpogosteje uporabljajo?',
        body: 'High Cube kontejnerji so posebno priljubljeni za: skladiščenje visokih palet in blaga, ureditev kontejnerskih pisarn in delavnic z višjimi stropi, adaptacijo v bivalne prostore (container homes), predelavo v pop-up prodajalne ali razstavne prostore, hrambo kmetijskih strojev in vozil ter logistiko posebnih tovorov (pohištvo, stroji, industrijska oprema).',
      },
    ],
    faq: [
      { q: 'Koliko je notranja višina High Cube kontejnerja?', a: 'Notranja višina High Cube kontejnerja je 2,70 m. Standardni kontejner ima notranjo višino 2,39 m – razlika je 31 cm.' },
      { q: 'Ali je High Cube dražji od standardnega?', a: 'Da, High Cube je za 300–500 € dražji od enako velikega standardnega kontejnerja. Glede na povečanje prostornine in funkcionalnosti je to ugodna naložba.' },
      { q: 'Ali High Cube kontejner ustreza za transport na vlaku?', a: 'Nekateri železniški profili imajo omejitve višine, ki preprečujejo transport HC kontejnerja. Na cestnih poteh in ladjah pa ni omejitev. Preverite s prevoznikom pred naročilom.' },
      { q: 'Kateri kontejner je boljši za container home – standard ali HC?', a: 'Za bivalni namen (container home) je High Cube bistveno boljša izbira. Višina 2,70 m je primerljiva z standardnim stropom v stanovanjih, kar naredi prostor bolj udoben za bivanje.' },
    ],
  },
  {
    slug: 'hladilni-kontejner',
    title: 'Hladilni kontejner – Refrigerated Reefer kontejnerji | STAR Containers',
    h1: 'Hladilni kontejner – Kontrolirana temperatura od -25°C do +25°C',
    description: 'Hladilni (reefer) kontejnerji za transport in skladiščenje pri kontrolirani temperaturi. -25°C do +25°C. Cena od 6.990 € (brez DDV). Dostava po Sloveniji.',
    keywords: ['hladilni kontejner', 'reefer kontejner', 'kontejner hlajenje', 'hladilni kontejner cena', 'refrigerated kontejner', 'kontejner za hlajenje', 'kontejner zamrzovalnik'],
    image: '/photos/reefer-3.jpg',
    content: `Hladilni kontejnerji (reefer kontejnerji) so posebna kategorija ladijskih kontejnerjev z integriranim hladilnim agregatom, ki vzdržuje konstantno temperaturo od -25°C do +25°C. Primarno so namenjeni transportu in skladiščenju živil, farmacevtskih izdelkov, kemikalij in vseh temperaturno občutljivih materialov.

Hladilni kontejner je opremljen z digitalnim krmilnikom temperature, notranjimi T-vodili za kroženje zraka in izoliranimi stenami, streho in tlemi. Hladilna enota je nameščena na sprednji strani kontejnerja (nasprotno od vrat) in zahteva zunanji vir električne energije (380V/50Hz).

STAR Containers ponuja 20ft hladilni kontejner (28 m³) in 40ft HC hladilni kontejner (67 m³) v novih in rabljenih različicah. Vsi kontejnerji so pred dostavo testirani na delovanje hladilnega agregata in vodotesnost.`,
    sections: [
      {
        title: 'Tehnične specifikacije hladilnih kontejnerjev',
        body: '20ft Reefer: notranje dimenzije 5,44 m × 2,29 m × 2,27 m, prostornina 28 m³, masa praznega ~3.000 kg, temperaturni razpon -25°C do +25°C, električna priključna moč ~7,5 kW pri 380V/50Hz. 40ft HC Reefer: notranje dimenzije 11,58 m × 2,29 m × 2,55 m, prostornina 67 m³, masa praznega ~4.800 kg, temperaturni razpon -25°C do +25°C, električna priključna moč ~11 kW pri 380V/50Hz. Notranje stene so narejene iz nerjavečega jekla, kar olajša čiščenje in dezinfekcijo.',
      },
      {
        title: 'Za katera blaga je primeren hladilni kontejner?',
        body: 'Hladilni kontejner je primeren za: sveže meso in morsko hrano (temperature 0°C do +4°C), zamrznjene živilske produkte (-18°C do -25°C), sadje in zelenjavo (+4°C do +12°C), mlečne produkte (+2°C do +4°C), farmacevtske produkte in zdravila (+2°C do +8°C), biološke vzorce in medicinski material, kemikalije, ki zahtevajo kontrolirano temperaturo, ter kozmetiko in parfume (+10°C do +20°C).',
      },
      {
        title: 'Električna napajanje in delovanje',
        body: 'Hladilni kontejner zahteva trifazni električni priključek (380V/50Hz) z varovalom 32A. Pri dolgoročnem stacionarnem skladiščenju je priporočljiv stabilen električni priključek. Za transportne namene so na voljo posebni priključki na tovornjakih ali dizelski generatorji. Agregat deluje samodejno in vzdržuje nastavljeno temperaturo brez ročnega posredovanja. Digitalni krmilnik beleži temperaturno zgodovino za namen sledljivosti.',
      },
    ],
    faq: [
      { q: 'Koliko električne energije porabi hladilni kontejner?', a: '20ft hladilni kontejner porabi pri polni obremenitvi cca. 5–8 kW, 40ft pa 8–12 kW. Dejanska poraba je odvisna od nastavljene temperature in zunanje temperature.' },
      { q: 'Ali je mogoče hladilni kontejner uporabiti brez električne energije?', a: 'Ne, brez električne energije hladilna enota ne deluje. Za neodvisno delovanje je na voljo dizelski generator (opcija). Kontaktirajte nas za ponudbo.' },
      { q: 'Koliko časa traja dostava hladilnega kontejnerja?', a: 'Hladilni kontejnerji so na zalogi. Dostava po vsej Sloveniji je v roku 48 ur.' },
      { q: 'Ali rabljeni hladilni kontejner še deluje?', a: 'Da, vsak rabljeni hladilni kontejner pred prodajo testiramo na delovanje agregata in doseganje nastavljenih temperatur. Zagotavljamo funkcionalno brezhibnost.' },
    ],
  },
  {
    slug: 'kontejner-dostava',
    title: 'Dostava kontejnerjev – Hitra dostava po vsej Sloveniji v 48h | STAR Containers',
    h1: 'Dostava kontejnerjev – Po vsej Sloveniji v 48 urah',
    description: 'Dostava ladijskih kontejnerjev po vsej Sloveniji. Rok 48 ur. Dostava s kamionom s klikalko. Brezplačen nasvet za pripravo terena. STAR Containers.',
    keywords: ['kontejner dostava', 'dostava kontejnerja', 'kontejner dostava cena', 'prevoz kontejnerja', 'dostava kontejnerjev Slovenija', 'kamion za kontejner'],
    image: '/photos/dostava-1.jpg',
    content: `STAR Containers zagotavlja dostavo ladijskih kontejnerjev po vsej Sloveniji in sosednjih državah (Avstrija, Hrvaška, Italija) v roku 48 ur od potrditve naročila. Dostavo izvajamo z lastnimi specializiranimi vozili – kamioni s klikalko (hook lift) ali s polpriklopniki s strani odprtim nakladanjem, ki omogočajo natančno postavljanje kontejnerja na željeno lokacijo.

Naš depo se nahaja v Ptuju, kar je strateška lokacija v osrednjem delu Slovenije z odličnimi avtocestnimi povezavami v vse smeri. Od Ptuja do Ljubljane je 130 km, do Maribora 25 km, do Celja 70 km, do Kopra 220 km.

Dostava kontejnerja je enostavna – pokličete nas, dogovorimo termin, kamion pride in kontejner položi na željeno mesto. Za polaganje ne potrebujemo nobene posebne opreme na vaši strani – vse je vključeno v storitev dostave.`,
    sections: [
      {
        title: 'Kako poteka dostava kontejnerja?',
        body: '1. Naročilo in potrditev: Kontaktirajte nas po telefonu ali e-pošti. Dogovorimo velikost, tip in datum dostave. 2. Priprava terena: Preverimo dostopnost lokacije (širina dovoza, ovire) in zagotovite ravno podlago za postavitev. 3. Dostava: Kamion pripelje kontejner na dogovorjeni datum. Dostava traja 30–60 minut. 4. Postavitev: Voznik s klikalko natančno postavi kontejner na željeno mesto. Ni potrebna nobena dodatna oprema. 5. Prevzem: Kontejner prejmete z vso dokumentacijo (certifikat, račun).',
      },
      {
        title: 'Zahteve za dostavo – priprava terena',
        body: 'Za uspešno dostavo kontejnerja je potrebno zagotoviti: Dovozo pot – vsaj 3,5 m širine za kamion in 4,5 m višine (pri mostovih, drevjih). Prostor za manever – kamion potrebuje vsaj 15 m dolžine za 40ft kontejner oziroma 10 m za 20ft. Ravna podlaga – beton, asfalt ali utrjen gramoz za postavitev kontejnerja. Vedno brezplačno svetujemo pred dostavo in po potrebi obiščemo lokacijo za pregled dostopnosti. Kontaktirajte nas z opisom lokacije ali fotografijami.',
      },
      {
        title: 'Dostava po celotni Sloveniji in regiji',
        body: 'Iz depa v Ptuju pokrivamo celotno Slovenijo z dostavo v 24–48 ur. Dostavljamo tudi v Avstrijo (Gradec, Celovec, Dunaj), Hrvaško (Zagreb, Rijeka, Varaždin) in Italijo (Trst, Gorica, Furlanija-Julijska krajina). Za dostave izven Slovenije nas kontaktirajte za individualno ponudbo z navedbo poštne številke ali naslova.',
      },
    ],
    faq: [
      { q: 'Koliko stane dostava kontejnerja?', a: 'Cena dostave je odvisna od razdalje in tipa kontejnerja. V naši regiji (do 50 km od Ptuja) je dostava vključena v ceno kontejnerja ali se obračuna po dogovoru. Za točno ceno nas kontaktirajte.' },
      { q: 'Kako dolgo traja dostava?', a: 'Dostava po večini lokacij v Sloveniji je zagotovljena v roku 48 ur od potrditve naročila. Za nujne primere je možna dostava v 24 urah.' },
      { q: 'Kaj če dostop do moje lokacije ni primeren za velik kamion?', a: 'V primeru omejene dostopnosti se posvetujemo o alternativnih rešitvah – manjši kamion, drugačna smer dostave ali prestavitev kontejnerja z najemodajalcem dvigala. Vedno poiščemo rešitev.' },
      { q: 'Ali kamion ostane med postavitvijo?', a: 'Voznik je prisoten med celotno postavitvijo in zagotovi, da je kontejner pravilno in varno postavljen. Postavitev navadno traja 30–45 minut.' },
    ],
  },
];

export const containerTypes = [
  { name: '10ft Standard', slug: '10ft-standard', price: '1.790', capacity: '14 m³', dims: '2.99m × 2.44m × 2.59m' },
  { name: '20ft Standard', slug: '20ft-standard', price: '1.990', capacity: '33 m³', dims: '5.90m × 2.35m × 2.39m' },
  { name: '40ft Standard', slug: '40ft-standard', price: '2.700', capacity: '67 m³', dims: '12.03m × 2.35m × 2.39m' },
  { name: '20ft High Cube', slug: '20ft-high-cube', price: '2.490', capacity: '37 m³', dims: '5.90m × 2.35m × 2.70m' },
  { name: '40ft High Cube', slug: '40ft-high-cube', price: '2.790', capacity: '76 m³', dims: '12.03m × 2.35m × 2.70m' },
  { name: '20ft Hladilni', slug: '20ft-hladilni', price: '6.990', capacity: '28 m³', dims: '5.44m × 2.29m × 2.27m' },
  { name: '40ft HC Hladilni', slug: '40ft-hc-hladilni', price: '9.900', capacity: '67 m³', dims: '11.58m × 2.29m × 2.55m' },
  { name: '20ft Rabljeni', slug: '20ft-rabljeni', price: '1.490', capacity: '33 m³', dims: '5.90m × 2.35m × 2.39m' },
  { name: '40ft HC Rabljeni', slug: '40ft-hc-rabljeni', price: '2.190', capacity: '76 m³', dims: '12.03m × 2.35m × 2.70m' },
];
