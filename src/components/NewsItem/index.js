import React from "react";
import "./NewsItem.scss";

function NewsItem({ newsData = {} }) {
  const {
    // author,
    content,
    // description,
    // publishedAt,
    // source,
    title,
    url,
    urlToImage,
  } = newsData;

  return (
    <div className="news-item">
      <div className="f-container">
        <img src={urlToImage} alt="Story" />
      </div>
      <div className="s-container">
        <a
          rel="noopener noreferrer"
          target="blank"
          href={url}
          className="s-title"
        >
          {title}
        </a>
        <div className="s-content">
          <div className="text ellipsis">
            <span className="text-concat">{content}</span>
          </div>
          <span className="s-more">
            <a rel="noopener noreferrer" target="blank" href={url}>
              Read More
            </a>
          </span>
        </div>
        <div className="s-social-media">
          <span>
            <a
              href={`https://twitter.com/intent/tweet?text=${url}`}
              data-size="large"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </span>
          <span>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
              <i className="fab fa-facebook-f"></i>
            </a>
          </span>
          <span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite?url=${url}&title=${title}`}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
          <span>
            <a href={`https://reddit.com/submit?url=${url}&title=${title}`}>
              <i className="fab fa-reddit"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
