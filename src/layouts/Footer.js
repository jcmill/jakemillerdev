// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
// import Button from "../components/Button";
import useHoverTextAnimation from "../hooks/useHoverTextAnimation";
import iconCodePen from "../images/icons/icon-codepen.svg";
import iconLinkedIn from "../images/icons/icon-linkedin-light.svg";
import iconMedium from "../images/icons/icon-medium.svg";

export default function Footer() {
  useHoverTextAnimation();

  return (
    <footer>
      <div className="c-footer" id="contact">
        <div className="c-footer--wrapper">
          <div className="c-footer__content o-grid">
            <div className="c-footer__talk">
              <h2>
                I'd love to hear your story too. let's create something
                together.
              </h2>
              <Link to="/contact">
                <button className="btn btn-primary">Lets Talk</button>
              </Link>
            </div>
            <div className="c-footer__links">
              <div className="c-footer__links--internal">
                <ul>
                  <li>
                    <Link
                      smooth
                      to="/#hero"
                      className="js-text-element"
                      data-value="Home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      smooth
                      to="/#work"
                      className="js-text-element"
                      data-value="Work">
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      smooth
                      to="/#about"
                      className="js-text-element"
                      data-value="About">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="c-footer__links--socials">
                <a href="https://codepen.io/sc1re" alt="CodePen link">
                  <img
                    className="social"
                    src={iconCodePen}
                    alt="Codepen Link"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jakemillerdev/"
                  alt="LinkedIn link">
                  <img
                    className="social"
                    src={iconLinkedIn}
                    alt="LinkedIn Link"
                  />
                </a>
                <a href="https://medium.com/@jakemdev" alt="LinkedIn link">
                  <img className="social" src={iconMedium} alt="Medium Link" />
                </a>
              </div>
            </div>
            <div className="c-footer__copyright">
              <p>©J∆ke Miller</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
