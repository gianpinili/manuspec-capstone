import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">© {new Date().getFullYear()} ManuSpec</p>
    </div>
  );
}

export default Footer;
