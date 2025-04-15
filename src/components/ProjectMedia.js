import Video from "../utils/WorkVideo";

export default function ProjectFull({ piece, classtype, background }) {
  return (
    <section className={`${classtype} o-grid ${background}`}>
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
  );
}
