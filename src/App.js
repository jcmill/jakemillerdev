import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Test from "./pages/TestPage";
import Footer from "./layouts/Footer";
import Project from "./pages/Project";
// import ColorCurve from "./pages/ColorCurve";
// import MotivesEyeliner from "./pages/MotivesEyeliner";
// import GotrimRedesign from "./pages/GotrimRedesign";
// import TheDash from "./pages/TheDash";
// import SinglePageCheckout from "./pages/SinglePageCheckout";
// import ProductDetailPage from "./pages/ProductDetailPage";
// import IsotonixReskin from "./pages/IsotonixReskin";
import NotFound from "./pages/NoFound";
import Ascii from "./hooks/useLog";
import ScrollToTop from "./hooks/useScrollToTop";
import portfolio from "./data/portfolio";

function AnimatedRoutes({ handleProjectId, handleProject }) {
  ScrollToTop();
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <TransitionWrapper>
              <main>
                <Home handleProjectId={handleProjectId} />
              </main>
              <Footer />
            </TransitionWrapper>
          }
        />
        <Route
          path="/test"
          element={
            <TransitionWrapper>
              <main>
                <Test />
              </main>
              <Footer />
            </TransitionWrapper>
          }
        />
        {/* <Route
          path="/project/color-curve"
          element={
            <TransitionWrapper>
              <main>
                <ColorCurve piece={handleProject} />
              </main>
              <Footer />
            </TransitionWrapper>
          }
        />
        <Route
          path="/project/motives-eyeliner"
          element={
            <TransitionWrapper>
              <main>
                <MotivesEyeliner piece={handleProject} />
              </main>
              <Footer />
            </TransitionWrapper>
          }
        />
        <Route
          path="/project/gotrim-redesign"
          element={
            <TransitionWrapper>
              <main>
                <GotrimRedesign piece={handleProject} />
              </main>
              <Footer />
            </TransitionWrapper>
          }
        />
        <Route
          path="/project/the-dash"
          element={
            <TransitionWrapper>
              <main>
                <TheDash piece={handleProject} />
              </main>
              <Footer />
            </TransitionWrapper>
          }
        />
        <Route
          path="/project/single-page-checkout"
          element={
            <TransitionWrapper>
              <main>
                <SinglePageCheckout piece={handleProject} />
              </main>
              <Footer />
            </TransitionWrapper>
          }
        />
        <Route
          path="/project/product-detail-page"
          element={
            <TransitionWrapper>
              <main>
                <ProductDetailPage piece={handleProject} />
              </main>
              <Footer />
            </TransitionWrapper>
          }
        />
        <Route
          path="/project/isotonix-reskin"
          element={
            <TransitionWrapper>
              <main>
                <IsotonixReskin piece={handleProject} />
              </main>
              <Footer />
            </TransitionWrapper>
          }
        /> */}
        <Route
          path="/project/color-curve"
          element={
            <TransitionWrapper>
              <main>
                <Project piece={portfolio[0]} />
              </main>
              <Footer />
            </TransitionWrapper>
          }
        />
        {/* <Route
          path={`/${handleProject.urlRoute}`}
          element={
            <TransitionWrapper>
              <main>
                <Project piece={handleProject} />
              </main>
              <Footer />
            </TransitionWrapper>
          }
        /> */}
        <Route
          path="/contact"
          element={
            <TransitionWrapper>
              <Contact />
            </TransitionWrapper>
          }
        />
        <Route
          path="/*"
          element={
            <TransitionWrapper>
              <main>
                <NotFound />
              </main>
            </TransitionWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function TransitionWrapper({ children }) {
  const anime = (variants, custom) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const expand = {
    initial: {
      top: 0,
    },
    enter: (i) => ({
      top: "100%",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (i) => ({
      height: "100%",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
      },
    }),
  };

  const overlay = {
    initial: {
      opacity: 0.75,
    },
    enter: {
      opacity: 0,
      transition: {
        delay: 0.15,
      },
    },
    exit: {
      opacity: 0.75,
    },
  };

  const nomColumns = 7;

  return (
    <div className="grid">
      <div className="t-container">
        {[...Array(nomColumns)].map((_, i) => {
          return <motion.div {...anime(expand, i)} key={i} />;
        })}
      </div>
      <motion.div {...anime(overlay)} className="t-background" />
      {children}
    </div>
  );
}

export default function App() {
  const [project, setProjectId] = useState({});

  Ascii();
  const [isLoader, setLoader] = useState(true);
  useEffect(() => {
    const loader = document.querySelector(".c-loader");
    if (isLoader) {
      setTimeout(() => {
        if (loader) {
          loader.style.display = "none";
        }
        setLoader(false);
      }, 2000);
    }
  }, [isLoader]);

  return (
    <>
      {isLoader ? null : (
        <BrowserRouter>
          <AnimatedRoutes
            handleProjectId={setProjectId}
            handleProject={project}
          />
        </BrowserRouter>
      )}
    </>
  );
}
