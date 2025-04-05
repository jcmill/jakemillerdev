import { useState } from "react";
import Form from "../components/Form";
import Button from "../components/Button";
import useHoverTextAnimation from "../hooks/useHoverTextAnimation";
import iconCodePen from "../images/icons/icon-codepen.svg";
import iconLinkedIn from "../images/icons/icon-linkedin-light.svg";

export default function Footer() {
  const [isFormShowing, setIsFormShowing] = useState(false);
  useHoverTextAnimation();

  function handleFormShowing() {
    setIsFormShowing(!isFormShowing);
  }

  return (
    <footer className="js-bgc--dk" id="contact">
      <section className="c-footer o-grid js-bgc--dk">
        <div className="c-footer__talk">
          <h2>
            I'd love to hear your story too. let's create something together.
          </h2>
          <Button
            Class={!isFormShowing ? "btn-primary" : "btn-secondary"}
            onClick={handleFormShowing}>
            {!isFormShowing ? "Lets Talk" : "Close"}
          </Button>
        </div>
        {isFormShowing && <Form />}
        <div className="c-footer__links">
          <div className="c-footer__links--internal">
            <ul>
              <li>
                <a className="js-text-element" href="#hero" data-value="Home">
                  Home
                </a>
              </li>
              <li>
                <a className="js-text-element" href="#work" data-value="Work">
                  Work
                </a>
              </li>
              <li>
                <a className="js-text-element" href="#about" data-value="About">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="c-footer__links--socials">
            <a href="https://codepen.io/sc1re" alt="CodePen link">
              <img className="social" src={iconCodePen} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/jakemillerdev/"
              alt="LinkedIn link">
              <img className="social" src={iconLinkedIn} alt="" />
            </a>
          </div>
        </div>
        <div className="c-footer__copyright">
          <p>©J∆ke Miller</p>
        </div>
      </section>
    </footer>
  );
}
