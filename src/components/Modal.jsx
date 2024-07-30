import React from "react";
import "../styles/modal.css";

export default function Modal({ header, body, buttontext, setShowModal }) {
  return (
    <>
      <div className="modalBackground">
        <div className="modalBox">
          <h2 className="modalHeading">{header}</h2>

          <p className="modalText">{body}</p>
          <div className="buttonContainer">
            <button
              className="formButton"
              type="button"
              onClick={() => {
                window.location.reload();
                setShowModal(false);
              }}
            >
              {buttontext}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
