import NavHamburger from "../components/NavHamburger";
import Header from "../components/Header";
import useIconObserver from "../hooks/useIconObserver";
import useLogoScroll from "../hooks/useLogoScroll";
import ProjectMedia from "../components/ProjectMedia";
import ProjectMediaAlt from "../components/ProjectMediaAlt";
import portfolio from "../data/portfolio";

export default function IsotonixReskin({ piece }) {
  useLogoScroll();
  useIconObserver();
  const projectIndex = Number(piece.id - 1);
  console.log(projectIndex);

  return (
    <>
      <Header />
      <NavHamburger />
      <section className={`c-project ${portfolio[6].heroImageClass}`}>
        <div className="c-project__image">
          <img
            className="c-project__main-image"
            src={portfolio[6].heroImage}
            alt=""
          />
        </div>
      </section>
      <section className="c-project__details o-grid js-bgc--lt">
        <div className="c-project__details--prime">
          <div className="c-project__details--title">
            <h6 className="c-project__details--brand">{portfolio[6].brand}</h6>
            <h3 className="c-project__details--header">{portfolio[6].title}</h3>
          </div>
          <div className="c-project__details--role">
            <p>
              <b>Roll</b>
            </p>
            <p>{portfolio[6].role}</p>
            <p>
              <b>{portfolio[6].countryTitle}</b>
            </p>
            <p>{portfolio[6].country}</p>
          </div>
          {portfolio[6].hasBtn && (
            <div className="c-project__details--buttons">
              <a href={portfolio[6].btnUrl} target="_blank" rel="noreferrer">
                <button className="btn-outline-lt">
                  {portfolio[6].btnText}
                </button>
              </a>
              {portfolio[6].hasBtn2 && (
                <a href={portfolio[6].btnUrl2} target="_blank" rel="noreferrer">
                  <button className="btn-outline-lt">
                    {portfolio[6].btnText2}
                  </button>
                </a>
              )}
            </div>
          )}
        </div>
        <div className="c-project__details--secondary">
          <p>{portfolio[6].text}</p>
          <p>{portfolio[6].text2}</p>
        </div>
      </section>
      <ProjectMedia
        piece={portfolio[6]}
        classType={"c-project__full-media"}
        background={"js-bgc--dk"}
      />
      {(portfolio[6].hasAltImagesSecond || portfolio.hasAltVideoSecond) && (
        <ProjectMediaAlt
          piece={portfolio[6]}
          classType={"c-project__full-media"}
          background={"js-bgc--lt"}
        />
      )}
    </>
  );
}
