import useParalax from "../hooks/useParalax";
import useHoverImage from "../hooks/useHoverImage";

export default function About() {
  useParalax();
  useHoverImage();

  return (
    <section className="c-about o-grid js-bgc--lt" id="about">
      <div className="c-about--header">
        <h2>A little about me</h2>
      </div>
      <div className="c-about--subheader">
        <h2 className="c-deminished">Maybe a little more than needed</h2>
      </div>
      <div className="c-about--profile">
        <div
          className="js-img-blur"
          style={{
            background:
              "url('https://fastly.picsum.photos/id/134/800/800.jpg?hmac=duHP0wppndedUcLOxLLjUV5gzbnNs220XZmN3ndBQWg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <img
            className="js-loaded js-hover-image"
            src="https://fastly.picsum.photos/id/134/800/800.jpg?hmac=duHP0wppndedUcLOxLLjUV5gzbnNs220XZmN3ndBQWg"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div className="c-about__opener js-parallax-about">
        <h5>
          Courage in creativity isn’t just in the birth of an idea; it’s in
          seeing it through.
        </h5>
      </div>
      <div className="c-about__copy">
        <p>
          I've spent the last two decades collecting skills like a character in
          an RPG—leveling up in design, creativity, and problem-solving to bring
          ideas to life. When a great concept crosses my path, I don’t just
          admire it, I roll up my sleeves, grab my metaphorical toolkit, and get
          to work.
        </p>
        <p>
          In a world bursting with ideas, the real magic isn’t just in having
          one; it’s in the adventure of shaping it, refining it, and turning it
          into something real. I love connecting the dots, untangling
          challenges, and crafting solutions that don’t just look good but
          actually work.
        </p>
        <p>
          To me, design and creation are two different beasts. Designing is
          dreaming; creating is making it happen. And <i>the real thrill?</i>
          That moment when an idea leaves the sketchbook and steps into the real
          world, ready to make an impact. That&rsquo;s what keeps me coming back
          for more.
        </p>
      </div>
    </section>
  );
}
