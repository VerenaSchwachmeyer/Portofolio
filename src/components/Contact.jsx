import { RiMailSendLine } from "react-icons/ri";
import { useRef, useState, CSSProperties } from "react";
import emailjs from "@emailjs/browser";
import { Modal } from "react-responsive-modal";
import CircleLoader from "react-spinners/ClipLoader";
import { useTranslation } from "react-i18next";
import "react-responsive-modal/styles.css";

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICEID_VP, //service ID
        process.env.REACT_APP_TEMPLATEID_VP, //template ID
        form.current,
        process.env.REACT_APP_PUBLIC_KEY_VP //public key
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
        <h2 className="sectionTitle">{t("contact.heading")}</h2>
        <form
          ref={form}
          className="contactForm"
          aria-label="contact form to send an email"
          onSubmit={sendEmail}
        >
          <label htmlFor="user_name" className="primary">
            {t("contact.form1")}
          </label>
          <input type="text" name="user_name" id="user_name" required />

          <label htmlFor="user_email" className="primary">
            {t("contact.form2")}
          </label>
          <input type="user_email" name="email" id="user_email" required />

          <label htmlFor="subject" className="primary">
            {t("contact.form3")}
          </label>
          <input type="text" name="subject" id="subject" required />

          <label htmlFor="message" className="primary">
            {t("contact.form4")}
          </label>
          <textarea name="message" id="message" required />

          <button className="formButton" aria-label="send mail">
            <RiMailSendLine size="1.7em" />
            <p>{t("contact.button")}</p>
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
