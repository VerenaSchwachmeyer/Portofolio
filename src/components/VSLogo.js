import "../vslogo.css";

export default function VSLogo() {
  return (
    <div className="vsLogo-Container" role="img" aria-label="logo">
      <img id="vsLogo-V" src="/images/VS_Logo_V.avif" alt=""></img>
      <p id="vslogo-Verena" className="vslogo-Name" aria-hidden="true">
        erena
      </p>
      <img id="vsLogo-S" src="/images/VS_Logo_S.avif" alt=""></img>
      <p id="vslogo-Schwachmeyer" className="vslogo-Name" aria-hidden="true">
        chwachmeyer
      </p>
    </div>
  );
}
