import Header from "../Header";
import Footer from "../Footer";
import Lottie from "lottie-react";
import Error404 from "./lotties/Error404.json";

export default function Errorpage() {
  const styles = {
    height: 200,
  };

  const user_uuid = sessionStorage.getItem("uuid");
  // const { View } = useLottie(options);

  return (
    <main>
      <Header />
      <section id="errorpage">
        <h3>Oops! Something went wrong.</h3>
        <Lottie animationData={Error404} style={styles} />
      </section>
      <Footer />
    </main>
  );
}
