import NavHamburger from "../components/NavHamburger";
import Header from "../components/Header";
import useIconObserver from "../hooks/useIconObserver";
import useLogoScroll from "../hooks/useLogoScroll";
import Video from "../utils/video";

export default function Project({ piece }) {
  useLogoScroll();
  useIconObserver();
  return (
    <>
      <Header />
      <NavHamburger />
      <section className={`c-project ${piece.heroImageClass}`}>
        <div className="c-project__image">
          <img className="c-project__main-image" src={piece.heroImage} alt="" />
        </div>
      </section>
      <section className="c-project__details o-grid js-bgc--lt">
        <div className="c-project__details--prime">
          <div className="c-project__details--title">
            <h6 className="c-project__details--brand">{piece.brand}</h6>
            <h3 className="c-project__details--header">{piece.title}</h3>
          </div>
          <div className="c-project__details--role">
            <p>
              <b>Roll</b>
            </p>
            <p>{piece.role}</p>
            <p>
              <b>{piece.countryTitle}</b>
            </p>
            <p>{piece.country}</p>
          </div>
          {piece.hasBtn && (
            <div className="c-project__details--buttons">
              <a href={piece.btnUrl} target="_blank" rel="noreferrer">
                <button className="btn-outline-lt">{piece.btnText}</button>
              </a>
              {piece.hasBtn2 && (
                <a href={piece.btnUrl2} target="_blank" rel="noreferrer">
                  <button className="btn-outline-lt">{piece.btnText2}</button>
                </a>
              )}
            </div>
          )}
        </div>
        <div className="c-project__details--secondary">
          <p>{piece.text}</p>
          <p>{piece.text2}</p>
        </div>
      </section>
      <section className="c-project__full-image o-grid js-bgc--dk">
        <div className="c-project__image-wrapper">
          {piece.hasAltVideos
            ? piece.altVideos.map((p) => (
                <div key={p.url}>
                  <Video src={p.url} />
                </div>
              ))
            : piece.altImages.map((p) => (
                <div key={p.url}>
                  <img src={p.url} alt={p.altText} />
                </div>
              ))}
        </div>
      </section>
      {(piece.hasAltImagesSecond || piece.hasAltVideoSecond) && (
        <section className="c-project__full-image o-grid js-bgc--lt">
          <div className="c-project__image-wrapper">
            {piece.videoDisplay
              ? piece.altVideosSecond.map((p) => (
                  <div key={p.url}>
                    <Video src={p.url} />
                  </div>
                ))
              : piece.altImagesSecond.map((p) => (
                  <div key={p.url}>
                    <img src={p.url} alt={p.altText} />
                  </div>
                ))}
          </div>
        </section>
      )}
    </>
  );
}
