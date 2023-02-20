const getQuestionData = () => [
  {
    id: 1,
    surveyId: 0,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Dimensiot',
      sv: 'Dimensiot',
      en: 'Dimensiot',
    },
    text: {
      fi: 'Mitä oppimisen dimensioita haluat painottaa kurssillasi? Klikkaa alla olevia tekstejä valitaksesi dimensioita',
      sv: 'Mitä oppimisen dimensioita haluat painottaa kurssillasi? Klikkaa alla olevia tekstejä valitaksesi dimensioita',
      en: 'Mitä oppimisen dimensioita haluat painottaa kurssillasi? Klikkaa alla olevia tekstejä valitaksesi dimensioita',
    },
    optionData: {
      type: 'dimensions',
      options: [
        {
          id: 'investication',
          label: {
            fi: 'Tiedon omaksuminen',
            sv: 'Tiedon omaksuminen',
            en: 'Investication',
          },
          data: [
            'zoom',
            'unitube',
            'thinglink',
            'moodle',
            'screen-cast-o-matic',
          ],
        },
        {
          id: 'production',
          label: {
            fi: 'Tuottaminen',
            sv: 'Tuottaminen',
            en: 'Production',
          },
          data: ['flinga', 'presemo', 'thinglink', 'moodle'],
        },
        {
          id: 'collaboration',
          label: {
            fi: 'Yhteistyö',
            sv: 'Yhteistyö',
            en: 'Collaboration',
          },
          data: ['zoom', 'flinga', 'thinglink', 'eportfolio', 'moodle'],
        },
        {
          id: 'discussion',
          label: {
            fi: 'Keskustelu',
            sv: 'Keskustelu',
            en: 'Discussion',
          },
          data: ['zoom', 'presemo', 'eportfolio', 'moodle', 'H5P'],
        },
        {
          id: 'acquisition',
          label: {
            fi: 'Tutkimusperustainen oppiminen',
            sv: 'Tutkimusperustainen oppiminen',
            en: 'Acquisition',
          },
          data: ['flinga'],
        },
        {
          id: 'practice',
          label: {
            fi: 'Harjoittelu',
            sv: 'Harjoittelu',
            en: 'Practice',
          },
          data: ['thinglink', 'eportfolio', 'moodle', 'H5P'],
        },
      ],
    },
    visibility: {},
  },
  {
    id: 2,
    surveyId: 0,
    parentId: null,
    priority: 2,
    title: {
      fi: 'Kurssin koko',
      sv: 'Kurssin koko',
      en: 'Kurssin koko',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseSizeSmall',
          label: {
            fi: '< 50',
            sv: '< 50',
            en: '< 50',
          },
        },
        {
          id: 'courseSizeBig',
          label: {
            fi: '>= 50',
            sv: '>= 50',
            en: '>= 50',
          },
        },
        {
          id: 'courseSizeUnlimited',
          label: {
            fi: 'rajoittamaton',
            sv: 'rajoittamaton',
            en: 'rajoittamaton',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 3,
    surveyId: 0,
    parentId: null,
    priority: 3,
    title: {
      fi: 'Osallistuminen',
      sv: 'Osallistuminen',
      en: 'Osallistuminen',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseAttendancePresent',
          label: {
            fi: 'Läsnä',
            sv: 'Läsnä',
            en: 'Läsnä',
          },
        },
        {
          id: 'courseAttendanceHybrid',
          label: {
            fi: 'Hybridi',
            sv: 'Hybridi',
            en: 'Hybridi',
          },
        },
        {
          id: 'courseAttendanceRemote',
          label: {
            fi: 'Etä',
            sv: 'Etä',
            en: 'Etä',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 4,
    surveyId: 0,
    parentId: null,
    priority: 4,
    title: {
      fi: 'Suoritusmuoto',
      sv: 'Suoritusmuoto',
      en: 'Suoritusmuoto',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'multipleChoice',
      options: [
        {
          id: 'courseCompletionMethodExam',
          label: {
            fi: 'Tentti',
            sv: 'Tentti',
            en: 'Tentti',
          },
          data: {
            fi: 'Tentin voi järjestää joko tiettynä päivänä tai pidemmän tenttiperiodin aikana, yliopiston sähköisen tenttimisen tiloissa, etä- tai salitenttinä. Tentti on yksi tapa arvioida opiskelijan osaamista ja miten kurssin oppimistavoitteet on saavutettu. Välitentit ja -testit ovat myös hyvä keino tukea opiskelijan oppimista kurssin aikana.',
            sv: 'Tentin voi järjestää joko tiettynä päivänä tai pidemmän tenttiperiodin aikana, yliopiston sähköisen tenttimisen tiloissa, etä- tai salitenttinä. Tentti on yksi tapa arvioida opiskelijan osaamista ja miten kurssin oppimistavoitteet on saavutettu. Välitentit ja -testit ovat myös hyvä keino tukea opiskelijan oppimista kurssin aikana.',
            en: 'Tentin voi järjestää joko tiettynä päivänä tai pidemmän tenttiperiodin aikana, yliopiston sähköisen tenttimisen tiloissa, etä- tai salitenttinä. Tentti on yksi tapa arvioida opiskelijan osaamista ja miten kurssin oppimistavoitteet on saavutettu. Välitentit ja -testit ovat myös hyvä keino tukea opiskelijan oppimista kurssin aikana.',
          },
        },
        {
          id: 'courseCompletionMethodSmallGroup',
          label: {
            fi: 'Pienryhmätyöskentely',
            sv: 'Pienryhmätyöskentely',
            en: 'Pienryhmätyöskentely',
          },
          data: {
            fi: 'Ryhmätyöt perustuvat yhdessä tekemiseen ja keskusteluun. Ryhmätyöt edistävät opiskelijoiden välistä vuorovaikutusta ja opettavat yhteistyötaitoja. Opiskelijoiden väliset keskustelut ja tehtävien tekeminen yhdessä syventävät aiheen ymmärrystä.',
            sv: 'Ryhmätyöt perustuvat yhdessä tekemiseen ja keskusteluun. Ryhmätyöt edistävät opiskelijoiden välistä vuorovaikutusta ja opettavat yhteistyötaitoja. Opiskelijoiden väliset keskustelut ja tehtävien tekeminen yhdessä syventävät aiheen ymmärrystä.',
            en: 'Ryhmätyöt perustuvat yhdessä tekemiseen ja keskusteluun. Ryhmätyöt edistävät opiskelijoiden välistä vuorovaikutusta ja opettavat yhteistyötaitoja. Opiskelijoiden väliset keskustelut ja tehtävien tekeminen yhdessä syventävät aiheen ymmärrystä.',
          },
        },
        {
          id: 'courseCompletionMethodDiary',
          label: {
            fi: 'Välitehtävät',
            sv: 'Välitehtävät',
            en: 'Välitehtävät',
          },
          data: {
            fi: 'Kurssin aikana suoritettavat pienet oppimistehtävät edistävät ja tukevat oppimista ja kurssille asetettujen oppimistavoitteiden saavuttamista. Tällaisia ovat esim. itsearviointitestit, laskuharjoitukset, keskustelutehtävät, vertaispalautetehtävät.',
            sv: 'Kurssin aikana suoritettavat pienet oppimistehtävät edistävät ja tukevat oppimista ja kurssille asetettujen oppimistavoitteiden saavuttamista. Tällaisia ovat esim. itsearviointitestit, laskuharjoitukset, keskustelutehtävät, vertaispalautetehtävät.',
            en: 'Kurssin aikana suoritettavat pienet oppimistehtävät edistävät ja tukevat oppimista ja kurssille asetettujen oppimistavoitteiden saavuttamista. Tällaisia ovat esim. itsearviointitestit, laskuharjoitukset, keskustelutehtävät, vertaispalautetehtävät.',
          },
        },
        {
          id: 'courseCompletionMethodLaboratory',
          label: {
            fi: 'Laboratoriotyöt ja simulaatioharjoitukset',
            sv: 'Laboratoriotyöt ja simulaatioharjoitukset',
            en: 'Laboratoriotyöt ja simulaatioharjoitukset',
          },
          data: {
            fi: 'Laboratoriotyöt ja simulaatioharjoitukset tukevat autenttista oppimista, opettavat käytännön taitoja ja edistävät konkreettisia asiantuntija- ja ongelmaratkaisutaitojen kehittymistä.',
            sv: 'Laboratoriotyöt ja simulaatioharjoitukset tukevat autenttista oppimista, opettavat käytännön taitoja ja edistävät konkreettisia asiantuntija- ja ongelmaratkaisutaitojen kehittymistä.',
            en: 'Laboratoriotyöt ja simulaatioharjoitukset tukevat autenttista oppimista, opettavat käytännön taitoja ja edistävät konkreettisia asiantuntija- ja ongelmaratkaisutaitojen kehittymistä.',
          },
        },
        {
          id: 'courseCompletionMethodAssignment',
          label: {
            fi: 'Kirjallinen tehtävä',
            sv: 'Kirjallinen tehtävä',
            en: 'Kirjallinen tehtävä',
          },
          data: {
            fi: 'Kaikki oppimisen eri vaiheessa (ennen, aikana tai lopuksi) laadittavat kirjalliset tehtävät, kuten esseet, oppimispäiväkirjat, ja erilaiset raportit edistävät tiedon soveltamista, analysointia ja uuden tiedon luomista ja tukevat täten oppimistavoitteiden saavuttamista.',
            sv: 'Kaikki oppimisen eri vaiheessa (ennen, aikana tai lopuksi) laadittavat kirjalliset tehtävät, kuten esseet, oppimispäiväkirjat, ja erilaiset raportit edistävät tiedon soveltamista, analysointia ja uuden tiedon luomista ja tukevat täten oppimistavoitteiden saavuttamista.',
            en: 'Kaikki oppimisen eri vaiheessa (ennen, aikana tai lopuksi) laadittavat kirjalliset tehtävät, kuten esseet, oppimispäiväkirjat, ja erilaiset raportit edistävät tiedon soveltamista, analysointia ja uuden tiedon luomista ja tukevat täten oppimistavoitteiden saavuttamista.',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 5,
    surveyId: 0,
    parentId: 3,
    priority: 0,
    title: {
      fi: 'Tallennus',
      sv: 'Tallennus',
      en: 'Tallennus',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsRecorded',
          label: {
            fi: 'Kyllä',
            sv: 'Kyllä',
            en: 'Kyllä',
          },
        },
        {
          id: 'courseIsNotRecorded',
          label: {
            fi: 'Ei',
            sv: 'Ei',
            en: 'Ei',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 6,
    surveyId: 0,
    parentId: 4,
    priority: 0,
    title: {
      fi: 'Arviointi',
      sv: 'Arviointi',
      en: 'Arviointi',
    },
    text: {
      fi: 'Oppimisen arviointi voi olla formatiivista eli kurssin aikana tapahtuvaa ja oppimisen tukemiseen tähtäävää (esim. palaute kurssin aikana) tai summatiivista eli opintojakson päätteeksi tapahtuvaa (esim. lopputentti). Laadukkaassa opetuksessa on hyvä käyttää erilaisia formatiivisen arvioinnin muotoja, sillä silloin voidaan parhaiten ohjata ja suunnata opiskelijoiden oppimista.Myös diagnostinen arviointi eli ennakkotietojen arviointi ennen kurssia tai kurssin alussa on tärkeää, koska opiskelijoiden ennakko-osaaminen vaikuttavaa paljon siihen, miten opiskelijat oppivat. Diagnostista arviointia voidaan käyttää opetuksen suunnittelun lähtökohtana, sillä sen avulla opettaja voi tunnistaa mahdollisia puutteita tai virhekäsityksiä opiskelijoiden tiedoissa.',
      sv: 'Oppimisen arviointi voi olla formatiivista eli kurssin aikana tapahtuvaa ja oppimisen tukemiseen tähtäävää (esim. palaute kurssin aikana) tai summatiivista eli opintojakson päätteeksi tapahtuvaa (esim. lopputentti). Laadukkaassa opetuksessa on hyvä käyttää erilaisia formatiivisen arvioinnin muotoja, sillä silloin voidaan parhaiten ohjata ja suunnata opiskelijoiden oppimista.Myös diagnostinen arviointi eli ennakkotietojen arviointi ennen kurssia tai kurssin alussa on tärkeää, koska opiskelijoiden ennakko-osaaminen vaikuttavaa paljon siihen, miten opiskelijat oppivat. Diagnostista arviointia voidaan käyttää opetuksen suunnittelun lähtökohtana, sillä sen avulla opettaja voi tunnistaa mahdollisia puutteita tai virhekäsityksiä opiskelijoiden tiedoissa.',
      en: 'Oppimisen arviointi voi olla formatiivista eli kurssin aikana tapahtuvaa ja oppimisen tukemiseen tähtäävää (esim. palaute kurssin aikana) tai summatiivista eli opintojakson päätteeksi tapahtuvaa (esim. lopputentti). Laadukkaassa opetuksessa on hyvä käyttää erilaisia formatiivisen arvioinnin muotoja, sillä silloin voidaan parhaiten ohjata ja suunnata opiskelijoiden oppimista.Myös diagnostinen arviointi eli ennakkotietojen arviointi ennen kurssia tai kurssin alussa on tärkeää, koska opiskelijoiden ennakko-osaaminen vaikuttavaa paljon siihen, miten opiskelijat oppivat. Diagnostista arviointia voidaan käyttää opetuksen suunnittelun lähtökohtana, sillä sen avulla opettaja voi tunnistaa mahdollisia puutteita tai virhekäsityksiä opiskelijoiden tiedoissa.',
    },
    optionData: {
      type: 'info',
      options: [],
    },
    visibility: {},
  },
  {
    id: 8,
    surveyId: 0,
    parentId: 4,
    priority: 0,
    title: {
      fi: 'This question is not in use as of 16.2.2023',
      sv: 'This question is not in use as of 16.2.2023',
      en: 'This question is not in use as of 16.2.2023',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'info',
      options: [],
    },
    visibility: {
      options: ['out-of-use'],
    },
  },
  {
    id: 9,
    surveyId: 0,
    parentId: 4,
    priority: 0,
    title: {
      fi: 'This question is not in use as of 16.2.2023',
      sv: 'This question is not in use as of 16.2.2023',
      en: 'This question is not in use as of 16.2.2023',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'info',
      options: [],
    },
    visibility: {
      options: ['out-of-use'],
    },
  },
  {
    id: 7,
    surveyId: 0,
    parentId: 2,
    priority: 0,
    title: {
      fi: 'Haluatko pitää kurssi MOOCina?',
      sv: 'Haluatko pitää kurssi MOOCina?',
      en: 'Haluatko pitää kurssi MOOCina?',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsMooc',
          label: {
            fi: 'Kyllä',
            sv: 'Kyllä',
            en: 'Kyllä',
          },
        },
        {
          id: 'courseIsNotMooc',
          label: {
            fi: 'Ei',
            sv: 'Ei',
            en: 'Ei',
          },
        },
      ],
    },
    visibility: {
      options: ['courseSizeBig'],
    },
  },
  {
    id: 10,
    surveyId: 0,
    parentId: null,
    priority: 1,
    title: {
      fi: 'Onko opetus avointa?',
      sv: 'Onko opetus avointa?',
      en: 'Onko opetus avointa?',
    },
    text: {
      fi: 'Yleinen teksti liittyen tähän valintaan',
      sv: 'Yleinen teksti liittyen tähän valintaan',
      en: 'Yleinen teksti liittyen tähän valintaan',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'courseIsOpenUniversity',
          label: {
            fi: 'Kyllä',
            sv: 'Kyllä',
            en: 'Kyllä',
          },
        },
        {
          id: 'courseIsNotOpenUniversity',
          label: {
            fi: 'Ei',
            sv: 'Ei',
            en: 'Ei',
          },
        },
      ],
    },
    visibility: {},
  },
]

export default getQuestionData
