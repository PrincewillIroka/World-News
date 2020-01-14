import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
  render() {
    const {
      // author,
      content,
      // description,
      // publishedAt,
      // source,
      title,
      url,
      urlToImage
    } = this.props.newsData

    return (
      <Wrapper>
        <div className="newsItem">
          <div className="fContainer">
            <img src={urlToImage} alt="Story Image" />
          </div>
          <div className="sContainer">
            <div className="sTitle">{title}</div>
            <div className="sContent">
              <div className="text ellipsis">
                <span className="text-concat">
                  {content}
                </span>
              </div>
              <span className="sMore">
                <a rel="noopener noreferrer" target="blank" href={url}>
                  Read More
                </a>
              </span>
            </div>
            <div className="sSocialMedia">
              <span>
              <a href={`https://twitter.com/intent/tweet?text=${title}&url${url}`} data-size="large"><i className="fab fa-twitter"></i></a>
              </span>
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
              <span>
                <i className="fab fa-reddit"></i>
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

NewsItem.propTypes = {
  newsData: PropTypes.object.isRequired
}

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
          text-align:justify;
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

  
`
