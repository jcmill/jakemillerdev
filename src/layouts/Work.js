import { useState, useEffect } from "react";
import Project from "../components/HomeProject";
import Canvas from "../components/Canvas";
import portfolio from "../data/portfolio";

export default function Work({ handleProjectId }) {
  const [filterType, setFilterType] = useState(() => {
    return sessionStorage.getItem("filterType") || "dev";
  });
  const [isScaled, setIsScaled] = useState(() => {
    return sessionStorage.getItem("isScaled") === "true";
  });
  const [renderCanvas, setRenderCanvas] = useState(true);
  const [filteredPortfolio, setFilteredPortfolio] = useState(
    portfolio.filter((piece) => piece.options[filterType])
  );

  useEffect(() => {
    const filtered = portfolio.filter((piece) => {
      if (filterType === "all") {
        return piece.options.dev || piece.options["ui/ux"];
      }
      return piece.options[filterType];
    });
    setFilteredPortfolio(filtered);
  }, [filterType]);

  useEffect(() => {
    sessionStorage.setItem("filterType", filterType);
  }, [filterType]);

  useEffect(() => {
    sessionStorage.setItem("isScaled", isScaled);
  }, [isScaled]);

  useEffect(() => {
    window.onbeforeunload = () => {
      sessionStorage.clear();
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  const handleFilterClick = (e) => {
    const type = e.target.value;
    setFilterType(type);

    const filtered = portfolio.filter((piece) => {
      if (type === "all") {
        return piece.options.dev || piece.options["ui/ux"];
      }
      return piece.options[type];
    });

    setFilteredPortfolio(filtered);
    setIsScaled(true);

    if (type === "all") {
      setRenderCanvas(false);
      setTimeout(() => setRenderCanvas(true), 0);
    }
  };

  const handleFilterState = (type) => {
    setFilterType(type);
    setIsScaled(true);
  };

  return (
    <>
      <section className="c-portfolio o-grid js-work js-bgc--lt" id="work">
        <div className="c-portfolio__header">
          <div className="c-portfolio__header--titlez">
            <h2>Each project tells a story.</h2>
          </div>
          <div className="c-portfolio__header--filters">
            <button
              className={`btn-filter ${filterType === "dev" ? "active" : ""}`}
              value="dev"
              onClick={(e) => handleFilterClick(e)}>
              Development
            </button>
            <button
              className={`btn-filter ${filterType === "ui/ux" ? "active" : ""}`}
              value="ui/ux"
              onClick={(e) => handleFilterClick(e)}>
              UI/UX
            </button>
            <button
              className={`btn-filter ${filterType === "all" ? "active" : ""}`}
              value="all"
              onClick={(e) => handleFilterClick(e)}>
              All
            </button>
          </div>
        </div>
        <h2 className="c-deminished">Here are a few chapters from mine.</h2>
        {filteredPortfolio.map((piece, i) => {
          return (
            <Project
              handleScaled={isScaled}
              key={piece.id}
              piece={piece}
              index={i}
              indexNum={i}
              type={filterType}
              handleProjectId={handleProjectId}
              handleFilterState={handleFilterState}
            />
          );
        })}
      </section>
      {renderCanvas && <Canvas />}
    </>
  );
}
