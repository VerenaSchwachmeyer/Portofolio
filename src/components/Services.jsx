import { CgWebsite } from "react-icons/cg";
import { AiOutlineDatabase } from "react-icons/ai";
import { MdOutlineAppSettingsAlt } from "react-icons/md";

export default function Services() {
  const handleMouseMove = () => {};

  return (
    <section id="services">
      <h2 className="sectionTitle">Services</h2>
      <div className="serviceContainer">
        <div className="serviceItem" onMouseMove={handleMouseMove}>
          <div className="serviceContent">
            <CgWebsite className="serviceLogo" />
            <h3 className="serviceTitle">Websites</h3>
          </div>
        </div>
        <div className="serviceItem">
          <div className="serviceContent">
            <MdOutlineAppSettingsAlt className="serviceLogo" />
            <h3 className="serviceTitle">Web Applications</h3>
          </div>
        </div>
        <div className="serviceItem">
          <div className="serviceContent">
            <AiOutlineDatabase className="serviceLogo" />
            <h3 className="serviceTitle">Databases</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
