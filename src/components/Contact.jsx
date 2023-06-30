import { RiMailSendLine } from "react-icons/ri";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";

Modal.setAppElement("#root");

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

export default function Contact() {
  const form = useRef();
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

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
          setIsOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="overlay"
          contentLabel="Contact Confirmation"
        >
          <h3 ref={(_subtitle) => (subtitle = _subtitle)}>Thank you</h3>

          <div>
            Your message has been successfully sent. Thanks for contacting me, I
            will get back to you soon.
          </div>
          <button
            className="modalButton"
            aria-label="close"
            onClick={closeModal}
          >
            close
          </button>
        </Modal>
      </div>
    </section>
  );
}
