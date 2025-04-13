import data from "../data/about";
import Lottie from "react-lottie";
import animationData from "../images/pages/color-curve/graph.json";

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="c-about o-grid js-bgc--lt" id="about">
      <div className="c-about--header">
        <h2>Yeah</h2>
      </div>
      <div className="c-about--subheader">
        <h2 className="c-deminished">{data[0].altTitle}</h2>
      </div>
      <div className="c-about--profile">
        <Lottie options={defaultOptions} height={400} width={400} />
        {/* <img className="js-loaded " src={data[0].image} alt="" loading="lazy" /> */}
      </div>
      <div className="c-about__opener">
        <h5>{data[0].subtitle}</h5>
      </div>
      <div className="c-about__copy">
        {data[0].paragraphs.map((p, i) => {
          return <p key={i}>{p}</p>;
        })}
      </div>
    </section>
  );
}
