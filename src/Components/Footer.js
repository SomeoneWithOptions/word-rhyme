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

function RemoveLoadAnimation() {
  setTimeout(() => {
  const footer = document.querySelector("footer")[0];
    footer.classList.remove("footerAnimation");
  }, 2000);
}

export default Footer;
