import React from "react";
import styled from "styled-components";

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
    <Wrapper>
      <div className="newsItem">
        <div className="fContainer">
          <img src={urlToImage} alt="Story" />
        </div>
        <div className="sContainer">
          <a
            rel="noopener noreferrer"
            target="blank"
            href={url}
            className="sTitle"
          >
            {title}
          </a>
          <div className="sContent">
            <div className="text ellipsis">
              <span className="text-concat">{content}</span>
            </div>
            <span className="sMore">
              <a rel="noopener noreferrer" target="blank" href={url}>
                Read More
              </a>
            </span>
          </div>
          <div className="sSocialMedia">
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
    </Wrapper>
  );
}

export default NewsItem;

const Wrapper = styled.div`
  .newsItem {
    height: 100%;
    display: flex;
    background-color: #fff;

    > .fContainer {
      width: 40%;
      height: 100%;
      padding: 5px;
      > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    > .sContainer {
      width: 60%;
      display: flex;
      flex-direction: column;
      padding: 15px 20px 10px;
      > .sTitle {
        font-weight: bold;
        font-size: 20px;
        height: 30%;
        overflow: hidden;
      }
      > .sContent {
        height: 60%;
        display: flex;
        flex-direction: column;
        padding-top: 10px;

        .text {
          position: relative;
          font-size: 17px;
        }

        .text-concat {
          position: relative;
          display: inline-block;
          word-wrap: break-word;
          overflow: hidden;
          max-height: 5.6em; /* (Number of lines you want visible) * (line-height) */
          line-height: 1.8em;
          text-align: justify;
        }

        .text.ellipsis::after {
          content: "";
          position: absolute;
          right: -12px;
          bottom: 4px;
        }

        > .sMore {
          color: blue;
          margin: 10px 0 0 0;
          cursor: default;
        }
      }
      > .sSocialMedia {
        height: 10%;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media (max-width: 690px) {
    .newsItem {
      flex-direction: column !important;
    }

    .fContainer {
      width: 100% !important;
      height: 40% !important;
    }

    .sContainer {
      width: 100% !important;
      height: 60% !important;
    }
  }

  @media (max-width: 460px) {
  }
`;
