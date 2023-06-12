import { RiMailSendLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f97y0mr",
        "template_5jn891l",
        form.current,
        "e51Xaa8_nyoLWg0Wg"
      )
      .then(
        (result) => {
          alert("Thank you for contacting me. I will reply to you soon.");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      {/* <Header /> */}
      <section id="contact">
        {/* <VSLogo /> */}

        <h2 className="sectionTitle">Contact</h2>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="your name"
            name="user_name"
            required
          />
          <input
            type="user_email"
            placeholder="your e-mail address"
            name="email"
            required
          />
          <input type="text" placeholder="subject" name="subject" required />
          <textarea placeholder="your message" name="message" required />
          <button className="formButton">
            <RiMailSendLine size="1.7em" />
            <p>Send Mail</p>
          </button>
        </form>
      </section>
      {/* <Footer /> */}
    </>
  );
}
