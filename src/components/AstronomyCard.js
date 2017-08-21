import React from "react";

const AstronomyCard = props => {
  const {
    title,
    url,
    hdurl,
    explanation,
    date,
    copyright,
    media_type
  } = props.data;

  const renderMedia = () => {
    switch (media_type) {
      case "video":
        return (
          <iframe
            title={title}
            src={url}
            width="640"
            height="360"
            allowFullScreen
            frameBorder="0"
          />
        );
      case "image":
        return (
          <a className="figure-link" href={hdurl}>
            <img src={url} alt={title} />
          </a>
        );
      default:
        return null;
    }
  };

  const renderCopyright = () =>
    copyright
      ? <figcaption className="caption">
          Copyright: {copyright}
        </figcaption>
      : null;

  return (
    <div>
      <h1 className="title">
        {title}
      </h1>

      <figure className="figure">
        {renderMedia()}
        {renderCopyright()}
      </figure>

      <p>
        {explanation}
      </p>
      {date}
    </div>
  );
};

export default AstronomyCard;