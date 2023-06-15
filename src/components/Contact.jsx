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
    <section id="contact">
      <h2 className="sectionTitle">Contact</h2>
      <form ref={form} className="contactForm" onSubmit={sendEmail}>
        <input type="text" placeholder="your name" name="user_name" required />
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
        <button className="modalButton" onClick={closeModal}>
          close
        </button>
      </Modal>
    </section>
  );
}
