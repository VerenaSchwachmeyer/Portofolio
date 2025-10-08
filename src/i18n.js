import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
          skiplink: {
            text: "Skip to main content",
          },
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
            webappsPoint4: `Backend incl. Server & Database`,
            accH3: `ACCESSIBILITY`,
            accH4: `Optimization of Operability`,
            accPoint1: `Screen Reader Usability`,
            accPoint2: `Keyboard Control`,
            accPoint3: `no Cognitive Overload`,
            accPoint4: `WCAG conformity`,
            medH3: `MEDICAL ORIENTATION`,
            medH4: `Balancing the requirements of:`,
            medPoint1: `Database Architecture`,
            medPoint2: `Scientific Standards`,
            medPoint3: `Easy Data Input`,
            p1: `I undertake the development of websites and full-stack applications, encompassing databases and servers. Additionally, I am proficient in creating apps for Android devices.`,
            p2: `A particular emphasis for me is the incorporation of digital accessibility, adhering to the criteria outlined in the Web Content Accessibility Guidelines (WCAG 2.2) and BITV 2.1. Leveraging my scientific background, I can integrate medical expertise into the development of software applications within the healthcare sector. This not only facilitates the implementation of technical aspects but also ensures an optimal user experience aligned with the specific requirements of the healthcare industry.
            `,
            accwebsitesh3: "Accessible websites",
          },
          aboutme: {
            heading: `About me`,
            list1: `10+ years experience with various data base systems and RESTful-API interfaces`,
            list2: `100+ scripts in MATLAB coded`,
            list3: `frontend expertise`,
            text: `I spent 12 years in clinical research as a post-doctoral fellow before I decided to complete my passion with web development. With my background as a scientist and physiotherapist, I'm not only fluent in tech-speak but also in the language of healthcare professionals and patients. Whether your project is medically related or not, feel free to get in touch, and I'll be happy to help with any subject matter.`,
          },
          techstack: {
            heading: `Tech Stack`,
            text: `My technical stack is strategically centered around JavaScript-based technologies, with ReactJS serving as the primary library to drive dynamic and responsive user interfaces. Below, I provide a short overview of the diverse set of languages, tools, frameworks, and libraries that I have incorporated into my projects: `,
          },
          projects: {
            heading: `Projects`,
            text: `Some of my projects and my previous scientific work fall into intellectual property and cannot be published at this point. If you wish for more code samples, please contact me.`,
            downtown1H3: `Video Chat App`,
            downtown1text: `This app provides an accessible, digital meet-up spot for people with Down syndrome.`,
            downtown2H3: `Accessibility`,
            downtown2text: `People with Down Syndrome have a different perception and often poor exe sight. The design needs to be as simple as possible but still provide functionality.`,
            downtown3H3: `Guidance`,
            downtown3text: `Step-by-step instructions guide the users through the app - so that no one is left behind.`,
            downtown4H3: `Video Chatrooms`,
            downtown4text: `The platform provides video chatrooms that can easily be entered and left by a group member at any time.`,

            flowerbauer1H3: `Flower Bauer App`,
            flowerbauer1text: `This app selects plants that are optimal for a specific location in the garden. Website is now launched, the app will come soon!`,
            flowerbauerbutton: `Visit Website`,
            flowerbauer2H3: `For each individual spot`,
            flowerbauer2text: `Each garden spot has its own conditions: sunshine, soil, water, ph value, lime content. The website provides additional and detailed information whereas the app is best to plan garden projects and save them.`,
            flowerbauer3H3: "Search for plants",
            flowerbauer3text:
              "Select the conditions of your garden spot and search for plants that match those conditions.",
            flowerbauer4H3: "Suitable plants",
            flowerbauer4text:
              "Plants that fit the specified conditions are searched in the database and listed. Details can be opened.",

            linovtext: `I created this simple one-pager website for a talented 13-year old musician, singer, and songwriter. Open in Chrome, Opera, MS Edge to see scrolling animations.`,
          },
          samples: {
            heading: `Coding Samples`,
            scrollh3: `Scroll Effects`,
            scrolltext: `Watch the moon set and sun rise. Created with pure HTML and CSS. Supported by Chrome, Opera, Edge, Webview, and SamsungInternet.`,
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
            sitenotice: `Imprint`,
            dataprotection: `Privacy Policy`,
          },
          modal: {
            header: "Thank you",
            text: "Your message has been successfully sent. Thanks for contacting me, I will get back to you soon.",
            button: "Close",
          },
        },
      },
      de: {
        translation: {
          skiplink: {
            text: "Zum Hauptinhalt springen",
          },
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
            webappsPoint4: `inklusive Backend mit Server & Datenbank`,
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
            p1: `Ich übernehme die Entwicklung von Webseiten oder auch Full-Stack
            Anwendungen inklusive Datenbanken und Servern – auch die Erstellung
            von Apps für Android-Endgeräte ist in meinem Repertoire.`,
            accwebsitesh3: "Barrierefreie Webseiten",
            p2: `Besonders wichtig ist mir dabei die Integration digitaler
            Barrierefreiheit gemäß den Kriterien der Web Content Accessibility
            Guidelines (WCAG 2.2) und der BITV 2.1. Dabei kann ich durch meinen
            wissenschaftlichen Hintergrund auch medizinisches Fachwissen in die
            Entwicklung von Softwareanwendungen im Gesundheitsbereich einfließen
            lassen. Dies ermöglicht nicht nur die Umsetzung technischer Aspekte,
            sondern auch eine optimale User Experience im Einklang mit den
            spezifischen Anforderungen des Gesundheitswesens. `,
          },
          aboutme: {
            heading: `Über mich`,
            list1: `Mehr als 10 Jahre Erfahrung mit verschiedenen Datenbanksystemen und API-Schnittstellen`,
            list2: `Mehr als 100 Skripte programmiert`,
            list3: `Frontend Expertise`,
            text: `Als promovierte Wissenschaftlerin habe ich 12 Jahre lang in der klinischen Forschung Skripte zur Datenverarbeitung und -analyse programmiert. Dann verfolgte ich meine Leidenschaft weiter und ergänzte meine Coding-Kenntnisse mit der Web- und Appentwicklung. Aufgrund meines vielfältigen beruflichen Hintergrunds spreche ich verschiedene "Sprachen" und verstehe daher nicht nur die "Techies", sondern auch die Bedürfnisse von medizinischem Personal, Patient*innen, Usern etc. Aber ein medizinischer Kontext des Projekts ist nicht zwingend notwendig, ich bin für alle Themenbereiche offen.`,
          },
          techstack: {
            heading: `Technologien`,
            text: `Meine Hauptdomäne ist die Programmierung in JavaScript-basierten Technologien, wobei mein Fokus besonders auf ReactJS als Library liegt. Ich setzte dabei eine Vielzahl von Werkzeugen, Frameworks und Libraries ein. Diese breite Palette ermöglicht es mir, flexibel auf unterschiedlichste Anforderungen einzugehen und innovative Lösungen in der Welt der Webentwicklung zu gestalten.`,
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
            flowerbauer1text: `Diese App findet Pflanzen, die optimal für einen Gartenbereich ausgesucht sind. Die Webseite ist jetzt online, die App wird bald folgen!`,
            flowerbauerbutton: `zur Webseite`,
            flowerbauer2H3: `für jede individuelle Gartenecke`,
            flowerbauer2text: `Jeder Gartenbereich hat seine eigenen Bedingungen und muss individuell geplant werden. Eine begleitende Webseite wird zusätzliche, detaillierte Informationen liefern.`,
            flowerbauer3H3: `Geeignete Pflanzen suchen`,
            flowerbauer3text: `Wähle die Standortbedingungen und suche nach Pflanzen, welche zum Standort passen.`,
            flowerbauer4H3: "Passende Pflanzauswahl",
            flowerbauer4text:
              "Pflanzen, die zum angegebenen Standort passen, werden von der Datenbank abgerufen und aufgelistet. Details können eingesehen werden.",

            linovtext: `Diese One-Page-Webseite habe ich für einen sehr talentierten, erst 13 Jahre jungen Musiker, Songwriter und Sänger erstellt. In Chrome, Opera oder MS Edge öffnen, um die Scrolling-Effekte zu sehen.`,

            dervj1H3: "der VJ.de",
            derVJ1text:
              "Ein Kunde hatte Probleme mit der SEO und Performance seiner Webseite. Ich entwickelte die Seite komplett neu und löste die Probleme.",
            derVJ2H3: "Schnellere Performance",
            derVJ2text:
              "Die zahlreichen Bilddateien werden erst dann geladen, wenn sie benötigt werden, und dann im Cache gespeichert: Ultra schnelle Ladezeiten und verringerte Belastung der mobilen Daten für Endnutzer.",
            derVJ3H3: "Verbessertes SEO",
            derVJ3text:
              "Durch die Verwendung sinnvoller HTML-Elemente und Einpflegen von Metadaten ist die Auffindbarkeit von Suchmaschinen drastisch gestiegen.",
            derVJ4H3: "Erhöhte Barrierefreiheit",
            derVJ4text:
              "Die korrekte Nutzung von HTML, Nutzung von ALt-Attributen und ARIA-Funktionen sowie die richtige Verwendung von Farkontrasten wurde die Barrierefreiheit verbessert.",
          },
          samples: {
            heading: `Coding Samples`,
            scrollh3: `Scroll Effekte`,
            scrolltext: `Erstellt mit reinem HTML und CSS. Effekte werden unterstützt in Browsern Chrome, Opera, Edge, Webview und SamsungInternet.`,
            memetext: `Kreiere Deine eigenen Memes. Verwendete Technologien und Funktionen: ReactJS, REST-API and upload/save file Funktionen.`,
            todoH3: `to-Do Liste`,
            todotext: `Einfach schnelle Notizen erstellen, was noch zu erledigen ist. Logik geschrieben in Vanilla JavaScript.`,
          },
          contact: {
            heading: `Kontakt`,
            form1: `Dein Name *`,
            form2: `Deine E-Mail-Adresse *`,
            form3: `Gib mir ein Stichwort: Worum geht es? *`,
            form4: `Deine Nachricht an mich. *`,
            button: `Senden`,
          },
          footer: {
            sitenotice: `Impressum`,
            dataprotection: `Datenschutzerklärung`,
          },
          modal: {
            header: "Vielen Dank",
            text: "Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich zeitnah bei Ihnen zurück.",
            button: "Schließen",
          },
        },
      },
    },
  });

export default i18n;
