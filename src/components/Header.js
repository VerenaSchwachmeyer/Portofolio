import VSLogo from "./VSLogo";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="headerSmall">
      <VSLogo id="VSlogo-top" />
      <button
        className="primary"
        style={{ margin: "20px" }}
        onClick={() => navigate(-1)}
      >
        zurück
      </button>
    </header>
  );
}

export default Header;
