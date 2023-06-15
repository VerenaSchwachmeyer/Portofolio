import Header from "./Header.js";
import Footer from "./Footer.jsx";
import { MdMail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

export default function Impressum() {
  return (
    <main>
      <Header />
      <section id="impressum">
        <h2>Impressum</h2>
        <div className="impressumContainer">
          <br></br>
          <h3>Angaben gemäß §5 TMG</h3>
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
            <MdMail /> verena.schwachmeyer(at)gmail.com
          </p>

          <br></br>
          {/* <p>USt-ID-Nr: DE1234567890</p> */}
          <br></br>

          <div classname="disclaimer">
            <h3>Disclaimer</h3>
            <h4>Haftung für Inhalte</h4>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. <br></br>
              <br></br>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
            <h4>Haftung für Links</h4>
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
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            <h4>Urheberrecht</h4>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. <br></br>
              <br></br>Soweit die Inhalte auf dieser Seite nicht vom Betreiber
              erstellt wurden, werden die Urheberrechte Dritter beachtet.
              Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
              Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
              umgehend entfernen.
            </p>
            <h6>Quelle: www.e-recht24.de</h6>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
