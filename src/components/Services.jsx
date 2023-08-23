import { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { ImAccessibility } from "react-icons/im";
import { FaUserMd } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";

export default function Services() {
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);
  const [flipped4, setFlipped4] = useState(false);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setFlipped(!flipped);
  // };

  // const handleTouchEnd = (e) => {
  //   e.preventDefault();
  //   setFlipped(false);
  //   // e.target.blur();
  // };

  return (
    <section id="services" className="section primary" aria-label="services">
      <div className="content">
        <h2 className="sectionTitle">Services</h2>
        <div className="serviceContainer">
          {/* Websites */}
          <div
            tabIndex="0"
            className={flipped1 ? "serviceFlipCard flip" : "serviceFlipCard"}
            onClick={() => {
              setFlipped1(!flipped1);
            }}
          >
            <div className="serviceCard" aria-label="frontside of card">
              <div
                className="serviceContent serviceCard-front primary"
                // id="serviceCard-front"
              >
                <CgWebsite className="serviceLogo graphics" />
                <h3 className="serviceTitle graphics">WEBSITES</h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                // id="serviceCard-back"
                aria-label="backside of card about my website services"
                tabIndex="0"
              >
                <h4>Frontend Development:</h4>
                <ul>
                  <li>User Interface (UI)</li>
                  <li>High quality user experience (UX)</li>
                  <li>Responsive Design</li>
                  <li>Single or Multi Page</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Web Applications */}
          <div
            tabIndex="0"
            className={flipped2 ? "serviceFlipCard flip" : "serviceFlipCard"}
            onClick={() => {
              setFlipped2(!flipped2);
            }}
          >
            <div className="serviceCard">
              <div className="serviceContent serviceCard-front primary">
                <div>
                  <MdOutlineAppSettingsAlt className="serviceLogo graphics" />
                </div>

                <h3 className="serviceTitle graphics">WEB APPLICATIONS</h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                tabIndex="0"
              >
                <h4>Full Stack Development:</h4>
                <ul>
                  <li>Browser-Based</li>
                  <li>including Functionality</li>
                  <li>Frontend</li>
                  <li>
                    Backend including <br></br>Server & Database
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accessibility */}
          <div
            tabIndex="0"
            className={flipped3 ? "serviceFlipCard flip" : "serviceFlipCard"}
            onClick={() => {
              setFlipped3(!flipped3);
            }}
          >
            <div className="serviceCard" aria-label="frontside of card">
              <div className="serviceContent serviceCard-front primary">
                <ImAccessibility className="serviceLogo graphics" />
                <h3 className="serviceTitle graphics">ACCESSIBILITY</h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                aria-label="backside of card"
                tabIndex="0"
              >
                <h4>Optimization of Operability:</h4>
                <ul>
                  <li>Visual Optimization</li>
                  <li>Screen Reader Usability</li>
                  <li>Motor Control</li>
                  <li>No Cognitive Overload</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Medical Content */}
          <div
            tabIndex="0"
            className={flipped4 ? "serviceFlipCard flip" : "serviceFlipCard"}
            onClick={() => {
              setFlipped4(!flipped4);
            }}
            // onTouchEnd={(e) => handleTouchEnd(e)}
          >
            <div className="serviceCard" aria-label="frontside of card">
              <div className="serviceContent serviceCard-front primary">
                <FaUserMd className="serviceLogo graphics" />
                <h3 className="serviceTitle graphics">MEDICAL ORIENTATION</h3>
              </div>

              <div
                className="serviceContent serviceCard-back secondary"
                aria-label="backside of card"
                tabIndex="0"
              >
                <h4>Balancing the requirements of:</h4>
                <ul>
                  <li>Database Architecture</li>
                  <li>Scientific Standards</li>
                  <li>Easy Data Input</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <p className="aboutmeText">
            I develop websites with a fully responsive frontend. full-stack web
            apps that include a database and server communication via API. Your
            website can be checked and improved for optimal accessibility. I can
            provide a deep understanding and best consulting service for apps
            with a medical aim.
          </p> */}
        </div>
      </div>
    </section>
  );
}
