import { HashLink as Link } from "react-router-hash-link";
import Video from "../utils/video";
import video from "../images/logos/hero-logo.mp4";
import NavHamburger from "../components/NavHamburger";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <NavHamburger />
      <section className="c-not-found js-bgc--dk">
        <div className="c-not-found__video">
          <Video src={video} />
        </div>
        <div className="c-not-found__overlay"></div>
        <div className="c-not-found__content">
          <h1>
            The page you’re looking for is probably off on an epic side quest.
          </h1>
          <Link to="/">
            <button className="btn-primary">Let's Go Home</button>
          </Link>
        </div>
      </section>
    </>
  );
}
