import instagramLogo from "../Assets/instagram-logo-white.png";

function Footer() {
  return (
    <footer className="footerAnimation">
      <a
        href="https://www.instagram.com/sanetomore/"
        target="_blank"
        rel="noreferrer"
      >
        <p>Andres Castellanos</p>
        <img src={instagramLogo} alt="Logo" className="logo" />
      </a>
    </footer>
  );
}

export default Footer;
