import NavHamburger from "./components/NavHamburger";
import Header from "./components/Header";
import Hero from "./layouts/Hero";
import GridOverlay from "./components/GridOverlay";
import ImageCurser from "./components/ImageCurser";
import Work from "./layouts/Work";
// import Canvas from "./components/Canvas";
import About from "./layouts/About";
import Footer from "./layouts/Footer";
import Ascii from "./hooks/useLog";
import useIconObserver from "./hooks/useIconObserver";
import useLogoScroll from "./hooks/useLogoScroll";

export default function App() {
  useLogoScroll();
  useIconObserver();
  Ascii();
  return (
    <>
      <Header />
      <NavHamburger />
      <main>
        <GridOverlay />
        <ImageCurser />
        <Hero />
        <Work />
        {/* <Canvas /> */}
        <About />
      </main>
      <Footer />
    </>
  );
}
