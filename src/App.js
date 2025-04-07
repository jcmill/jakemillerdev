import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Test from "./pages/TestPage";
// import NavHamburger from "./components/NavHamburger";
// import Header from "./components/Header";
import Footer from "./layouts/Footer";
import Ascii from "./hooks/useLog";
import ScrollToTop from "./hooks/useScrollToTop";

function AnimatedRoutes() {
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
                <Home />
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
          <AnimatedRoutes />
        </BrowserRouter>
      )}
    </>
  );
}
