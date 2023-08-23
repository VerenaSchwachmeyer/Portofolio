import Header from "../Header";
import Footer from "../Footer";
import Lottie from "lottie-react";
import Error404 from "./lotties/Error404.json";
import Scroll2Top from "../Scroll2Top";

export default function Errorpage404() {
  const styles = {
    height: 200,
  };

  const user_uuid = sessionStorage.getItem("uuid");
  // const { View } = useLottie(options);

  return (
    <main>
      <Scroll2Top />
      <Header />
      <section id="errorpage">
        <h1 id="errorH1">404</h1>
        <h3>Oops! Something went wrong.</h3>
        <Lottie animationData={Error404} style={styles} />
      </section>
      <Footer />
    </main>
  );
}
