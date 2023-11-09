import Header from "./Header.js";
import Footer from "./Footer.jsx";
import { MdMail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Scroll2Top from "./Scroll2Top";
import { useNavigate } from "react-router-dom";

export default function Impressum() {
  const navigate = useNavigate();

  return (
    <main>
      <Scroll2Top />
      <Header />
      <section id="impressum" className="primary" lang="de">
        <div className="content">
          <h1
            lang="de"
            style={{ fontSize: "3.5em", textAlign: "left", width: "100%" }}
          >
            Impressum
          </h1>
          <div className="impressumContainer">
            <br></br>
            <h2 lang="de" style={{ fontSize: "1.5em" }}>
              Angaben gemäß §5 TMG
            </h2>
            <br></br>
            <p>Verena Schwachmeyer</p>
            <p>Bietzkestr. 3</p>
            <p>10315 Berlin</p>
            <br></br>
            <p>
              <AiFillPhone /> Null Eins Sieben Sechs Drei Null Eins Sieben Zwei
              Fünf Sechs Sechs
            </p>
            <br></br>
            <p>
              <MdMail /> mail(at)schwachmeyer.dev
            </p>

            <br></br>
            <h2 style={{ fontSize: "1.5em" }}>
              Umsatzsteuer-Identifikationsnummer{" "}
            </h2>
            <br></br>
            <p>Steueridentifikationsnummer: DE363017090</p>
            <p> Gemäß §19 UStG im Jahr 2023 umsatzsteuerbefreit.</p>
            {/* <p>Die Umsatzsteuer-Nummer befindet sich in der Beantragung.</p> */}
            {/* <p> gemäß § 27a UStG ...USt-ID-Nr: DE1234567890</p> */}
            <br></br>

            <div classname="disclaimer">
              <br></br>
              <h2 style={{ fontSize: "1.5em" }}>Haftungsausschluss</h2>
              <br></br>
              <h3 style={{ fontSize: "1.1em" }}>Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. <br></br>
                <br></br>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
              <h3 style={{ fontSize: "1.1em" }}>Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. <br></br>
                <br></br>Eine permanente inhaltliche Kontrolle der verlinkten
                Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend
                entfernen.
              </p>
              <h3 style={{ fontSize: "1.1em" }}>Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. <br></br>
                <br></br>Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                erstellt wurden, werden die Urheberrechte Dritter beachtet.
                Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige
                Inhalte umgehend entfernen.
              </p>
              <h6 id="impressumQuelle">Quelle: www.e-recht24.de</h6>
            </div>
          </div>
        </div>
        <button
          className="primary"
          style={{ margin: "20px" }}
          onClick={() => navigate(-1)}
        >
          zurück
        </button>
      </section>
      <Footer />
    </main>
  );
}
