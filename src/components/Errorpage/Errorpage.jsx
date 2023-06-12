import Header from "../Header";
import Footer from "../Footer";
import { useLottie } from "lottie-react";
import lf30_k6fpeaa5 from "./lottie/lf30_k6fpeaa5.json";

export default function Errorpage() {+
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    height: 200,
  };
  const user_uuid = sessionStorage.getItem("uuid");
  const { View } = useLottie(options);
  return (
    <>
      <Header />
      <section id="errorpage"></section>
      <Footer />
    </>
  );
}
