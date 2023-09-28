import Header from "../Header";
import Footer from "../Footer";
import Lottie from "lottie-react";
import Error404 from "./lotties/Error404.json";
import Scroll2Top from "../Scroll2Top";
import { useNavigate } from "react-router-dom";
import { Trans } from "react-i18next";

export default function Errorpage404() {
  const navigate = useNavigate();

  const styles = {
    height: 200,
  };

  // const { View } = useLottie(options);

  return (
    <main>
      <Scroll2Top />
      <Header />
      <section id="errorpage">
        <h1 id="errorH1">404</h1>
        <h2 style={{ fontSize: "1em" }}>
          Upsie, hier solltest Du gar nicht landen.
        </h2>
        <Lottie animationData={Error404} style={styles} />
        <button
          className="primary"
          style={{ margin: "10px" }}
          onClick={() => navigate(-1)}
        >
          zurück
        </button>
      </section>
      <Footer />
    </main>
  );
}
