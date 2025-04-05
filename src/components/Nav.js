import useHoverTextAnimation from "../hooks/useHoverTextAnimation";
import useNavScroll from "../hooks/useNavScroll";
import useNavObserver from "../hooks/useNavObserver";

export default function Nav() {
  useHoverTextAnimation();
  useNavScroll();
  useNavObserver();

  return (
    <nav className="nav-list">
      <ul className="js-nav">
        <a href="#work">
          <li
            className="nav-list__item--lt js-nav-item js-text-element"
            data-value="Work">
            Work
          </li>
        </a>
        <a href="#about">
          <li
            className="nav-list__item--lt js-nav-item js-text-element"
            data-value="About">
            About
          </li>
        </a>
        <a href="#contact">
          <li
            className="nav-list__item--lt js-nav-item js-text-element"
            data-value="Contact">
            Contact
          </li>
        </a>
      </ul>
    </nav>
  );
}
