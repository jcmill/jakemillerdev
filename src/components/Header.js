import { Link } from "react-router-dom";
import logo from "../images/logos/logo.svg";
import logoDark from "../images/logos/logo-dk.svg";
import darkIcon from "../images/icons/icon-dk.svg";
import lightIcon from "../images/icons/icon-lt.svg";

export default function Header() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <header>
      <div className="o-logo js-logo">
        <Link to="/" className="o-logo__grid">
          <img
            className="o-logo--dk js-logo--dk"
            src={logoDark}
            alt="Jake logo"
          />
          <img className="o-logo--lt js-logo--lt" src={logo} alt="Jake logo" />
        </Link>
      </div>
      <div className="js-icon o-icon js-icon-rise hide">
        <button className="logo" href="#" onClick={scrollToTop}>
          <img
            className="js-icon--dk o-icon--dk js-logo-invisible"
            src={darkIcon}
            alt="Jake dark icon"
          />
          <img
            className="js-icon--lt o-icon--lt"
            src={lightIcon}
            alt="Jake light icon"
          />
        </button>
      </div>
    </header>
  );
}
