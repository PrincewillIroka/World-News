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
            <img src={urlToImage} alt="" />
          </div>
          <div className="sContainer">
            <div>{title}</div>
            <div>
              <div className="text ellipsis">
                <span className="text-concat">
                  {content}
                </span>
              </div>
              <span>
                <a rel="noopener noreferrer" target="blank" href={url}>
                  Read More
                </a>
              </span>
            </div>
            <div>
              <span>
                <i className="fab fa-twitter"></i>
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
      > div:nth-child(1) {
        font-weight: bold;
        font-size: 20px;
      }
      > div:nth-child(2) {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 20px;

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

        ${'' /* > div:nth-child(1) {
          word-wrap: break-word;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-height: 26px;
          height: 150px;
          max-height: 150px;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          color: red;
        } */}
        > span:nth-child(2) {
          color: blue;
          margin: 10px 0 0 0;
          cursor: default;
        }
      }
      > div:nth-child(3) {
        margin-top: 10px;
        height: 40px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`
