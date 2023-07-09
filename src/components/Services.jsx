import { CgWebsite } from "react-icons/cg";
// import { BiDesktop } from "react-icons/bi";
import { ImAccessibility } from "react-icons/im";
import { FaUserMd } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";

export default function Services() {
  const handleTouchStart = (e) => {
    e.preventDefault();
    e.target.focus();
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    e.target.blur();
  };

  return (
    <section id="services" className="section primary" aria-label="services">
      <div className="content">
        <h2 className="sectionTitle">Services</h2>
        <div className="serviceContainer">
          {/* Websites */}
          <div className="serviceFlipCard">
            <div className="serviceCard" aria-label="frontside of card">
              <div className="serviceContent primary" id="serviceCard-front">
                <CgWebsite className="serviceLogo graphics" />
                <h3 className="serviceTitle graphics">Websites</h3>
              </div>

              <div
                className="serviceContent secondary"
                id="serviceCard-back"
                aria-label="backside of card"
                tabindex="0"
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchEnd={(e) => handleTouchEnd(e)}
              >
                <h4>Frontend Development:</h4>
                <ul>
                  <li>UI/UX Design</li>
                  <li>Responsive Design</li>
                  <li>Single or Multi Page</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Web Applications */}
          <div className="serviceFlipCard">
            <div className="serviceCard">
              <div className="serviceContent primary" id="serviceCard-front">
                <div>
                  <MdOutlineAppSettingsAlt className="serviceLogo graphics" />
                </div>

                <h3 className="serviceTitle graphics">Web Applications</h3>
              </div>

              <div
                className="serviceContent secondary"
                id="serviceCard-back"
                tabindex="0"
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchEnd={(e) => handleTouchEnd(e)}
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
          <div className="serviceFlipCard">
            <div className="serviceCard" aria-label="frontside of card">
              <div className="serviceContent primary" id="serviceCard-front">
                <ImAccessibility className="serviceLogo graphics" />
                <h3 className="serviceTitle graphics">Accessibility</h3>
              </div>

              <div
                className="serviceContent secondary"
                id="serviceCard-back"
                aria-label="backside of card"
                tabindex="0"
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchEnd={(e) => handleTouchEnd(e)}
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
          <div className="serviceFlipCard">
            <div className="serviceCard" aria-label="frontside of card">
              <div className="serviceContent primary" id="serviceCard-front">
                <FaUserMd className="serviceLogo graphics" />
                <h3 className="serviceTitle graphics">Medical Orientation</h3>
              </div>

              <div
                className="serviceContent secondary"
                id="serviceCard-back"
                aria-label="backside of card"
                tabindex="0"
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchEnd={(e) => handleTouchEnd(e)}
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
      </div>
    </section>
  );
}
