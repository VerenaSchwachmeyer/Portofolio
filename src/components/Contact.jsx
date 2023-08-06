import { RiMailSendLine } from "react-icons/ri";
import { useRef, useState, CSSProperties } from "react";
import emailjs from "@emailjs/browser";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CircleLoader from "react-spinners/ClipLoader";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_f97y0mr",
        "template_5jn891l",
        form.current,
        "e51Xaa8_nyoLWg0Wg"
      )
      .then(
        (result) => {
          setLoading(false);
          setOpen(true);
        },
        (error) => {
          setLoading(false);
          alert("An Error occured. Your mail has not been sent.");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    border: "4px solid var(--color-1)",
  };

  return (
    <section id="contact" className="primary">
      <div className="content">
        <h2 className="sectionTitle">Contact</h2>
        <form
          ref={form}
          className="contactForm"
          aria-label="contact form to send an email"
          onSubmit={sendEmail}
        >
          <label htmlFor="user_name" className="primary">
            What's your name? *
          </label>
          <input
            type="text"
            placeholder="name"
            name="user_name"
            id="user_name"
            required
          />
          <label htmlFor="user_email" className="primary">
            Enter your e-mail address *
          </label>
          <input
            type="user_email"
            placeholder="e-mail"
            name="email"
            id="user_email"
            required
          />
          <label htmlFor="subject" className="primary">
            What can I do for you? *
          </label>
          <input
            type="text"
            placeholder="subject"
            name="subject"
            id="subject"
            required
          />
          <label htmlFor="message" className="primary">
            Enter your message *
          </label>
          <textarea
            placeholder="your message"
            name="message"
            id="message"
            required
          />
          <button className="formButton" aria-label="send mail">
            <RiMailSendLine size="1.7em" />
            <p>Send Mail</p>
          </button>
        </form>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        aria-modal="true"
        aria-labelledby="Message-was-sent"
        aria-describedby="modal-description"
        aria-busy="false"
      >
        <h3 id="Message-was-sent">Thank you</h3>

        <div id="modal-description">
          Your message has been successfully sent. Thanks for contacting me, I
          will get back to you soon.
        </div>
      </Modal>
      {loading && (
        <CircleLoader
          className="loadingSpinner"
          loading={loading}
          cssOverride={override}
          size={150}
          aria-busy="true"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </section>
  );
}
