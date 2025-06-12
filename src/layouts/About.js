import data from "../data/about";

export default function About() {
  return (
    <section className="c-about o-grid js-bgc--lt" id="about">
      <div className="c-about--header">
        <h2>{data[0].title}</h2>
      </div>
      <div className="c-about--subheader">
        <h2 className="c-deminished">{data[0].altTitle}</h2>
      </div>
      {/* <div className="c-about--profile">
        <img className="js-loaded " src={data[0].image} alt="" loading="lazy" />
      </div> */}
      <div className="c-about__opener">
        <h5>{data[0].subtitle}</h5>
      </div>
      <div className="c-about__copy">
        <p>
          For over 20 years, I’ve grown from maker to leader and turned ideas
          into impact. Leading at the intersection of design, strategy, and
          execution. From brand vision to product roadmaps, delivering work
          that’s not only beautifully crafted but grounded in purpose, insights,
          and results.
        </p>
        <p>
          I believe dreaming is only half the equation. The real magic happens
          in the building, where ideas meet systems, where teams align, and
          where solutions come to life in ways that serve both people and
          business.
        </p>
        <p>
          Whether it’s driving integrated campaigns, mentoring, or shaping
          inclusive, scalable experiences, I stay focused on building what
          truely matters.
        </p>
      </div>
    </section>
  );
}
