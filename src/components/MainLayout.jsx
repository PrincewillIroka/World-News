import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import NewsItem from './NewsItem'
import { connect } from 'react-redux'

class MainLayout extends Component {
  state = {
    activeNewsSource: [],
    newsSource: 'bbc-sport'
  }

  componentWillMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${this.props.newsSource}&apiKey=277e502592bd4fbba0b5152081152b53`
      )
      .then(res => {
        this.setState({ activeNewsSource: res.data.articles })
      })
  }

  componentDidUpdate() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${this.props.newsSource}&apiKey=277e502592bd4fbba0b5152081152b53`
      )
      .then(res => {
        this.setState({ activeNewsSource: res.data.articles })
      })
  }

  render() {
    return (
      <Wrapper>
        <div className="mainlayoutContainer">
          {this.state.activeNewsSource.length === 0 ? (
            <Spinner />
          ) : (
            <div className="realContainer">
              <ANewsItem activeNewsSource={this.state} />
            </div>
          )}
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    newsSource: state.newsSource
  }
}

export default connect(
  mapStateToProps,
  null
)(MainLayout)

const ANewsItem = state => {
  const { activeNewsSource } = state.activeNewsSource
  return activeNewsSource.map((newsData, index) => (
    <NewsItem key={index} newsData={newsData} />
  ))
}

const Spinner = () => {
  return <div>Spinner</div>
}

const Wrapper = styled.div`
  .mainlayoutContainer {
    height: 100%;
    padding: 40px 10%;
    > .realContainer {
      display: grid;
      grid-template-columns: repeat(1, 100% [col-start]);
      grid-row-gap: 40px;

      > div {
        height: 320px;
        border: 1px solid #eee;
        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05),
          0 2px 7px 0 rgba(72, 22, 66, 0.05);
        &:hover {
          box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1),
            0 2px 7px 0 rgba(72, 22, 66, 0.1);
        }
      }
    }
  }
`
