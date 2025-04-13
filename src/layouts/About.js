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
          I've spent the last two decades collecting skills like a RPG
          character—leveling up in design, creativity, and problem-solving to
          bring ideas to life. When a great concept crosses my path, I don’t
          just admire it. I roll up my sleeves, grab my metaphorical toolkit,
          and get to work.
        </p>
        <p>
          The real magic isn’t just having an idea; it’s the adventure of
          shaping, refining, and turning it into something real. Connecting the
          dots, untangling challenges, and crafting solutions that don’t just
          look good, but actually work is very rewarding.
        </p>
        <p>
          To me, design and creation are two different beasts. Designing is
          dreaming; creating is making it happen. The <i>real thrill</i> is that
          moment when an idea leaves the sketchbook and steps into the real
          world, ready to make an impact. That’s what keeps me coming back for
          more of this development world.
        </p>
      </div>
    </section>
  );
}
