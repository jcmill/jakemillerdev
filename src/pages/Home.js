import Hero from "../layouts/Hero";
import GridOverlay from "../components/GridOverlay";
import ImageCurser from "../components/ImageCurser";
import Work from "../layouts/Work";
import About from "../layouts/About";
import NavHamburger from "../components/NavHamburger";
import Header from "../components/Header";
import useIconObserver from "../hooks/useIconObserver";
import useLogoScroll from "../hooks/useLogoScroll";

export default function Home({ handleProjectId }) {
  useLogoScroll();
  useIconObserver();
  return (
    <>
      <Header />
      <NavHamburger />
      <GridOverlay />
      <Hero />
      <ImageCurser />
      <Work handleProjectId={handleProjectId} />
      <About />
    </>
  );
}
