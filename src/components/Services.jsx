import { CgWebsite } from "react-icons/cg";
import { BiDesktop } from "react-icons/bi";
import { MdOutlineAppSettingsAlt } from "react-icons/md";

export default function Services() {
  return (
    <section id="services">
      <h2 className="sectionTitle">Services</h2>
      <div className="serviceContainer">
        <div className="serviceFlipCard">
          <div className="serviceCard">
            <div className="serviceContent" id="serviceCard-front">
              <CgWebsite className="serviceLogo" />
              <h3 className="serviceTitle">Websites</h3>
            </div>

            <div className="serviceContent secondary" id="serviceCard-back">
              <h3>Websites</h3>
              <ul>
                <li>UI/UX Design</li>
                <li>Fully Responsive</li>
                <li>Single or Multi Page</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="serviceFlipCard">
          <div className="serviceCard">
            <div className="serviceContent" id="serviceCard-front">
              <div>
                <MdOutlineAppSettingsAlt className="serviceLogo" />
                {/* <BiDesktop className="serviceLogo" /> */}
                {/* <img
                  src="./images/web-development-icon-color-2.png"
                  height="100px"
                  className="serviceLogo"
                /> */}
              </div>

              <h3 className="serviceTitle">Web Applications</h3>
            </div>

            <div className="serviceContent secondary" id="serviceCard-back">
              <h3>Full Stack</h3>
              <ul>
                <li>Multi-User Access</li>
                <li>Browser-Based</li>
                <li>Frontend</li>
                <li>Backend:</li>
                <p>Server, Database</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
