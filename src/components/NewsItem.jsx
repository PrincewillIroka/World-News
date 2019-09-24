import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
  render() {
    const {
      author,
      content,
      description,
      publishedAt,
      source,
      title,
      url,
      urlToImage
    } = this.props.newsData
    return (
      <Wrapper>
        <div className="newsItem">
          <div>
            <img src={urlToImage} alt="" />
          </div>
          <div>
            <div>{title}</div>
            <div>
              <span>{content}</span>
              <span>Read More</span>
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

    > div:nth-child(1) {
      width: 40%;
      height: 100%;
      padding: 5px;
      > img {
        height: 100%;
        width: 100%;
      }
    }
    > div:nth-child(2) {
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
        > span:nth-child(1) {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-height: 26px;
          max-height: 150px;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
        > span:nth-child(2) {
          color: blue;
          margin-top: 5px;
          cursor: default;
        }
      }
      > div:nth-child(3) {
        margin-top: 10px;
        height: 40px;
        display: flex;
        justify-content: space-around;
      }
    }
  }
`
