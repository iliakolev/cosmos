import React from "react";
import format from "date-fns/format";
import Spinner from "./Spinner";

const AstronomyCard = props => {
  const {
    loading,
    title,
    url,
    hdurl,
    explanation,
    date,
    copyright,
    media_type
  } = props.data;

  const renderAuthor = () =>
    copyright ? <div className="author">{copyright}</div> : null;

  const renderMeta = () => (
    <div className="meta">
      {renderAuthor()}
      <time className="date">{format(date, "MMM D, YYYY")}</time>
    </div>
  );

  const renderHeader = () => (
    <div className="header">
      <h1 className="title">{title}</h1>
      {renderMeta()}
    </div>
  );

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

  const renderContent = () =>
    loading ? (
      <Spinner />
    ) : (
      <div className="container">
        {renderHeader()}
        <figure className="figure">{renderMedia()}</figure>
        <p>{explanation}</p>
      </div>
    );

  return renderContent();
};

export default AstronomyCard;
