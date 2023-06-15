import VSLogo from "./VSLogo";

function Header() {
  return (
    <header className="header">
      <VSLogo id="VSlogo-top" />
      {/* <img
        className="headerLogo"
        src="/images/VS_Logo_w_code.png"
        height="40px"
        alt="Verenas Logo"
      ></img> */}
      {/* <Menu right>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="aboutme" className="menu-item" href="/aboutme">
          About Me
        </a>
        <a id="aboutme" className="menu-item" href="/aboutme">
          Tech Stack
        </a>
        <a id="link2projects" className="menu-item" href="/home">
          My Work
        </a>
        <a id="link2contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu> */}
    </header>
  );
}

export default Header;
