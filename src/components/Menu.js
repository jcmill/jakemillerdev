import { HashLink as Link } from "react-router-hash-link";
import iconCodepen from "../images/icons/icon-codepen.svg";
import iconLinkedIn from "../images/icons/icon-linkedin-light.svg";
import iconMedium from "../images/icons/icon-medium.svg";

export default function Menu({ handleHamburgerClick }) {
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
            <Link smooth to="/#work" onClick={handleHamburgerClick}>
              <li
                className="c-burger__menu--work js-text-element"
                data-value="Work">
                Work
              </li>
            </Link>
            <Link smooth to="/#about" onClick={handleHamburgerClick}>
              <li
                className="c-burger__menu--about js-text-element"
                data-value="About">
                About
              </li>
            </Link>
            <Link to="/contact" onClick={handleHamburgerClick}>
              <li
                className="c-burger__menu--work js-text-element"
                data-value="Contact">
                Contact
              </li>
            </Link>
          </ul>
          <div className="c-menu__social">
            <div className="c-menu__social--icons">
              <a href="https://codepen.io/sc1re" alt="CodePen link">
                <img src={iconCodepen} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/jakemillerdev/"
                alt="LinkedIn link">
                <img src={iconLinkedIn} alt="" />
              </a>
              <a href="https://medium.com/@jakemdev" alt="Mediun link">
                <img src={iconMedium} alt="" />
              </a>
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
