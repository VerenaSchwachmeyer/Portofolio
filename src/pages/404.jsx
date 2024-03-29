import Header from "../components/Header";
import Footer from "../components/Footer";
import Lottie from "lottie-react";
import Error404 from "../utils/lotties/Error404.json";
import Scroll2Top from "../components/Scroll2Top";
import { useNavigate } from "react-router-dom";

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
      <section id="errorpage" style={{ minHeight: "62vh" }}>
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
