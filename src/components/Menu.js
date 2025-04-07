import { Link } from "react-router-dom";
import iconCodepen from "../images/icons/icon-codepen.svg";
import iconLinkedIn from "../images/icons/icon-linkedin-light.svg";

export default function Menu({ handleHamburgerClick }) {
  const handleClickAndScroll = () => {
    handleHamburgerClick();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <menu className="c-menu js-menu hide">
      <div className="c-menu__wrapper js-menu__content">
        <div className="c-menu__content">
          <p>
            <b>Menu</b>
          </p>
          <ul>
            <Link to="/" onClick={handleHamburgerClick}>
              <li
                className="c-burger__menu--home js-text-element"
                data-value="Home">
                Home
              </li>
            </Link>
            <Link to="/test" onClick={handleHamburgerClick}>
              <li
                className="c-burger__menu--work js-text-element"
                data-value="Work">
                Work
              </li>
            </Link>
            <a href="#about" onClick={handleHamburgerClick}>
              <li
                className="c-burger__menu--about js-text-element"
                data-value="About">
                About
              </li>
            </a>
          </ul>
          <a href="#contact" onClick={handleClickAndScroll}>
            <h4 className="js-text-element" data-value="Let's Talk">
              Let's Talk
            </h4>
          </a>
          <div className="c-menu__social">
            <div className="c-menu__social--icons">
              {" "}
              <img className="social" src={iconCodepen} alt="" />
              <img className="social" src={iconLinkedIn} alt="" />
            </div>
            <span className="disclaimer">
              ©Jake Miller — Building since 2008
            </span>
          </div>
        </div>
      </div>
    </menu>
  );
}
