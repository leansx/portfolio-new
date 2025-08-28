import "../styles/RingHighlight.css";

function RingHighlight({ image, title, paragraphOne, paragraphTwo }) {
  return (
    <div className="ring-highlight-container">
      <img src={image} alt={title} />

      <div className="ring-highlight-text-container">
        <span className="site-subtext">{title}</span>
        <div className="ring-highlight-para-container">
          <p className="ring-highlight-paragraph">{paragraphOne}</p>
          <p className="ring-highlight-paragraph">{paragraphTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default RingHighlight;
