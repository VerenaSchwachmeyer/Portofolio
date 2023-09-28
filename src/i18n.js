import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { Trans } from "react-i18next";

i18n
  .use(initReactI18next) // this is mandatory so that is it accessible in all components!!
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "en",
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          softwaredeveloper: {
            text: `Web & App Developer`,
          },
          Buttons: {
            contactme: `Contact me`,
            moreinfo: `More info`,
            visitWebsite: `Visit Website`,
            viewsampleapp: `View Sample App`,
            go2repo: `Go To Repo`,
            backButton: `back`,
          },
          header: {
            menu: `Menu`,
          },
          services: {
            heading: `Services`,
            websitesH3: `WEBSITES`,
            websitesH4: `Frontend Development`,
            websitesPoint1: `User Interface (UI)`,
            websitesPoint2: `High Quality User Experience (UX)`,
            websitesPoint3: `Responsive Design`,
            websitesPoint4: `Single or Multi Page`,
            webappsH3: `WEBAPPLICATIONS`,
            webappsH4: `Fullstack Development`,
            webappsPoint1: `Browser-Based`,
            webappsPoint2: `Including Functionalities`,
            webappsPoint3: `Frontend`,
            webappsPoint4: `Backend including <br></br> Server & Database`,
            accH3: `ACCESSIBILITY`,
            accH4: `Optimiziation of Operability`,
            accPoint1: `Screen Reader Usability`,
            accPoint2: `Keyboard Control`,
            accPoint3: `no Cognitive Overload`,
            accPoint4: `WCAG conformity`,
            medH3: `MEDICAL ORIENTATION`,
            medH4: `Balancing the requirements of:`,
            medPoint1: `Database Architecture`,
            medPoint2: `Scientific Standards`,
            medPoint3: `Easy Data Input`,
          },
          aboutme: {
            heading: `About me`,
            text: `I have worked in clinical research as a post-doctoral fellow for 12 years before I decided to pursue my passion for coding as a web-developer. With my previous experience as a scientist and physiotherapist, I speak not only the language of techies but also physicians, therapists, nurses, and patients. But a medical topic of your project is not necessary - contact me for any subject matter.`,
          },
          techstack: {
            heading: `Tech Stack`,
            text: `My tech stack is focused on JavaScript-based technologies with ReactJS used as a main library. See the list below for an overview of the languages, tools, frameworks and libraries that I utilized. `,
          },
          projects: {
            heading: `Projects`,
            text: `Some of my projects and my previous scientific work fall into intellectual property and cannot be published at this point. If you wish for more code sample, please contact me.`,
            downtown1H3: `Video Chat App`,
            downtown1text: `This app provides an accessible, digital meet-up spot for people with Down syndrome.`,
            downtown2H3: `Accessibility`,
            downtown2text: `People with Down Syndrome have a different perception and often poor exe sight. The design needs to be as simple as possible but still provide functionality.`,
            downtown3H3: `Guidance`,
            downtown3text: `Step-by-step instructions guide the users through the app - so that no one is left behind.`,
            downtown4H3: `Video Chatrooms`,
            downtown4text: `The platform provides video chatrooms that can easily be entered and left by a group member at any time.`,

            flowerbauer1H3: `Flower Bauer App`,
            flowerbauer1text: `This app selects plants that are optimal for a specific location in the garden. The project is still work in progress and written in React Native.`,
            flowerbauer2H3: `For each individual spot`,
            flowerbauer2text: `Each garden spot has its own conditions: sunshine, soil, water, ph value, lime content. Create a project for each garden area. `,
            flowerbauer3H3: "Search for plants",
            flowerbauer3text:
              "Select the conditions of your garden spot and search for plants that match those conditions.",
            flowerbauer4H3: "Suitable plants",
            flowerbauer4text:
              "Plants that fit the specified conditions are searched in the database and listed. Details can be opened.",

            linovtext: `I created this one-pager website for a talented 13-year old musician, singer, and songwriter.`,
          },
          samples: {
            heading: `Coding Samples`,
            memetext: `Create your own memes. Used tech stack: ReactJS, REST-API and upload/save file functions.`,
            todoH3: `to-Do List`,
            todotext: `Make notes on the fly, no biggie. Logic written in Vanilla JavaScript.`,
          },
          contact: {
            heading: `Contact`,
            form1: `Enter your name *`,
            form2: `Enter your email address *`,
            form3: `Give me a topic: What can I do for you? *`,
            form4: `Your message *`,
            button: `Send Mail`,
          },
          footer: {
            sitenotice: `Site Notice`,
            dataprotection: `Data Protection`,
          },
        },
      },
      de: {
        translation: {
          softwaredeveloper: {
            text: `Webentwicklerin`,
          },
          header: {
            menu: `Menü`,
          },
          Buttons: {
            contactme: `Kontakt`,
            moreinfo: `mehr Infos`,
            visitWebsite: `Zur Webseite`,
            viewsampleapp: `Zur App`,
            go2repo: `Zum Repository`,
            backButton: `zurück`,
          },
          services: {
            heading: `Leistungen`,
            websitesH3: `WEBSEITEN`,
            websitesH4: `Frontend Entwicklung`,
            websitesPoint1: `User Interface (UI)`,
            websitesPoint2: `gute User Experience (UX)`,
            websitesPoint3: `Responsives Design`,
            websitesPoint4: `Single oder Multi Page Architektur`,
            webappsH3: `WEBANWENDUNGEN`,
            webappsH4: `Fullstack Entwicklung`,
            webappsPoint1: `Browser-Basiert`,
            webappsPoint2: `inklusive diverser Funktionen`,
            webappsPoint3: `inklusive Frontend`,
            webappsPoint4: `inklusive Backend mit <br></br> Server & Datenbank`,
            accH3: `BARRIEREFREIHEIT`,
            accH4: `Optimierung der Bedienbarkeit:`,
            accPoint1: `Screen Reader Nutzung`,
            accPoint2: `Keyboard-Steuerung`,
            accPoint3: `keine kognitive Überforderung`,
            accPoint4: `WCAG konform`,
            medH3: `MEDIZIN`,
            medH4: `Anforderungen erfüllen zwischen:`,
            medPoint1: `Datenbankarchitektur`,
            medPoint2: `Wissenschaftlichen Standards`,
            medPoint3: `Leichter Dateneingabe`,
          },
          aboutme: {
            heading: `Über mich`,
            text: `Als promovierte Wissenschaftlerin habe ich 12 Jahre lang in der klinischen Forschung Skripte zur Datenverarbeitung und -analyse programmiert. Dann verfolgte ich meine Leidenschaft weiter und ergänzte meine Coding-Kenntnisse mit der Web- und Appentwicklung. Aufgrund meines vielfältigen beruflichen Hintergrunds spreche ich verschiedene "Sprachen" und verstehe daher nicht nur die "Techies", sondern auch die Bedürfnisse von medizinischem Personal, Patient*innen, Usern etc. Aber ein medizinischer Kontext des Projekts ist nicht zwingend notwendig, ich bin für alle Themenbereiche offen.`,
          },
          techstack: {
            heading: `Technologien`,
            text: `Ich programmiere hauptsächlich in JavaScript-basierten Technologien mit Fokus auf ReactJS als Library. Die Liste gibt einen Überblick über meine verschiedenen Sprachen, Werkzeuge, Frameworks und Libraries.`,
          },
          projects: {
            heading: `Projekte`,
            text: `Einige meiner Projekte sowie meine frühere wissenschaftliche Arbeit fällt unter geistiges Eigentum und kann zu diesem Zeitpunkt nicht ohne Weiteres veröffentlicht werden. Kontaktieren Sie mich bitte, wenn Sie Codebeispiele wünschen.`,
            downtown1H3: `Video Chat App`,
            downtown1text: `Diese App bietet einen barrierefreien, digitalen Treffpunkt für Menschen mit Down Syndrom.`,
            downtown2H3: `Barrierefrei`,
            downtown2text: `Menschen mit Down Syndrom haben eine unterschiedliche Wahrnehmung und oft Sehschwächen. Das Design muss daher so einfach wie möglich gehalten werden und gleichzeitig funktional sein.`,
            downtown3H3: `Anleitung`,
            downtown3text: `Schritt-für-Schritt Anweisungen leiten die Nutzer*innen durch die App - so dass niemand außen vor bleibt.`,
            downtown4H3: `Video Chatrooms`,
            downtown4text: `Die Plattform besitzt feste Video Chatrooms, welche leicht und zu jeder Zeit betreten und wieder verlassen werden können.`,

            flowerbauer1H3: `Flower Bauer App`,
            flowerbauer1text: `Diese App findet Pflanzen, die optimal für einen Gartenbereich ausgesucht sind. Sie ist noch im Entwicklugnsmodus, geschrieben in React Native.`,
            flowerbauer2H3: `für jede individuelle Gartenecke`,
            flowerbauer2text: `Jeder Gartenbereich hat seine eigenen Bedingungen und muss individuell geplant werden. `,
            flowerbauer3H3: `Geeignete Pflanzen suchen`,
            flowerbauer3text: `Wähle die Standortbedingungen und suche nach Pflanzen, welche zum Standort passen.`,
            flowerbauer4H3: "Passende Pflanzauswahl",
            flowerbauer4text:
              "Pflanzen, die zum angegebenen Standort passen, werden von der Datenbank abgerufen und aufgelistet. Details können eingesehen werden.",

            linovtext: `Diese One-Page-Webseite habe ich erstellt für einen sehr talentierten, erst 13 Jahre jungen Musiker, Songwriter und Sänger.`,
          },
          samples: {
            heading: `Code Beispiele`,
            memetext: `Erstelle Deine eigenen Memes. Verwendete Elemente: ReactJS, REST-API und upload/save file functions.`,
            todoH3: `to-Do-Liste`,
            todotext: `Erstelle auf die Schnelle eine to-Do-Liste. Logik geschrieben in Vanilla JavaScript.`,
          },
          contact: {
            heading: `Kontakt`,
            form1: `Dein Name *`,
            form2: `Deine E-Mail-Adresse *`,
            form3: `Gib mir ein Stichwort: Worum geht es? *`,
            form4: `Deine Nachricht an mich. *`,
            button: `Mail absenden`,
          },
          footer: {
            sitenotice: `Impressum`,
            dataprotection: `Datenschutzerklärung`,
          },
        },
      },
    },
  });

export default i18n;
