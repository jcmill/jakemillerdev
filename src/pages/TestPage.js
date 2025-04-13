// import Hero from "../layouts/HeroTest";
import About from "../layouts/AboutTest";
import Canvas from "../components/Canvas";
import NavHamburger from "../components/NavHamburger";
import Header from "../components/Header";
import useIconObserver from "../hooks/useIconObserver";
import useLogoScroll from "../hooks/useLogoScroll";

export default function App() {
  useLogoScroll();
  useIconObserver();
  return (
    <>
      <Header />
      <NavHamburger />
      {/* <Hero /> */}
      <About />
      <Canvas />
      <About />
    </>
  );
}
