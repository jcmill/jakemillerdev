import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Header from "../components/Header";
import Nav from "../components/NavHamburger";
import Form from "../components/Form";
import Button from "../components/Button";
import useHoverTextAnimation from "../hooks/useHoverTextAnimation";
import iconCodePen from "../images/icons/icon-codepen.svg";
import iconLinkedIn from "../images/icons/icon-linkedin-light.svg";
import iconMedium from "../images/icons/icon-medium.svg";

export default function Contact() {
  const [isFormShowing, setIsFormShowing] = useState(false);
  useHoverTextAnimation();

  function handleFormShowing() {
    setIsFormShowing(!isFormShowing);
  }

  return (
    <>
      <Header />
      <Nav />
      <section className="c-contact js-bgc--dk">
        <div className="c-contact--wrapper">
          <div className="c-contact__content o-grid">
            <div className="c-contact__talk">
              <h2>Let’s turn "what if" into "what’s next".</h2>
              <h4>(Or just say hi.)</h4>
              <Button
                className={!isFormShowing ? "btn-primary" : "btn-secondary"}
                onClick={handleFormShowing}>
                {!isFormShowing ? "Say Hi" : "Close"}
              </Button>
            </div>
            {isFormShowing && <Form />}
            <div className="c-contact__links">
              <div className="c-contact__links--internal">
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
              <div className="c-contact__links--socials">
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
            <div className="c-contact__copyright">
              <p>©J∆ke Miller</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
