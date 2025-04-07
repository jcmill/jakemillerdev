import About from "../layouts/About";
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
      <Canvas />
      <About />
    </>
  );
}
