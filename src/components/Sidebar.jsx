import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { handleNewsSource } from '../store/actions'
import abcnewslogo from '../assets/logos/abcnews_pearl_stacked.png'
import aljazeeralogo from '../assets/logos/aljazeraenglish.jpg'
import associatedpresslogo from '../assets/logos/Associated-Press.jpg'
import bbcnewslogo from '../assets/logos/bbcnews.png'
import bbcsportslogo from '../assets/logos/bbcsports.png'
import bloomberglogo from '../assets/logos/BLOOMBERGcorp-logo.jpg'
import dailymaillogo from '../assets/logos/daily_mail.jpg'
import eweeklylogo from '../assets/logos/e_weekly.jpg'
import espnlogo from '../assets/logos/espn_logo.png'
import financialpostlogo from '../assets/logos/financialpost.png'
import footballitalialogo from '../assets/logos/football_Italia.png'
import fourfourtwologo from '../assets/logos/FourFourTwo.jpg'
import foxchannellogo from '../assets/logos/fox_channel.jpg'

class Sidebar extends Component {
  changeNewsSource = newsSource => {
    this.props.changeNewsSource(newsSource)
  }

  render() {
    return (
      <Wrapper>
        <div className="sidebarContainer">
          <div>
            <div
              className={`${
                this.props.newsSource === 'abc-news' ? 'activeNewsSource' : ''
              }`}
              onClick={e => this.changeNewsSource('abc-news')}
            >
              <img src={abcnewslogo} alt="ABC News" />
              <span>ABC News</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'al-jazeera-english'
                  ? 'activeNewsSource'
                  : ''
              }`}
              onClick={e => this.changeNewsSource('al-jazeera-english')}
            >
              <img src={aljazeeralogo} alt="AlJazeera" />
              <span>AlJazeera English</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'associated-press'
                  ? 'activeNewsSource'
                  : ''
              }`}
              onClick={e => this.changeNewsSource('associated-press')}
            >
              <img src={associatedpresslogo} alt="Associated Press" />
              <span>Associated Press</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'bbc-news' ? 'activeNewsSource' : ''
              }`}
              onClick={e => this.changeNewsSource('bbc-news')}
            >
              <img src={bbcnewslogo} alt="BBC News" />
              <span>BBC News</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'bbc-sport' ? 'activeNewsSource' : ''
              }`}
              onClick={e => this.changeNewsSource('bbc-sport')}
            >
              <img src={bbcsportslogo} alt="BBC Sports" />
              <span>BBC Sports</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'bloomberg' ? 'activeNewsSource' : ''
              }`}
              onClick={e => this.changeNewsSource('bloomberg')}
            >
              <img src={bloomberglogo} alt="Bloomberg" />
              <span>Bloomberg</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'daily-mail' ? 'activeNewsSource' : ''
              }`}
              onClick={e => this.changeNewsSource('daily-mail')}
            >
              <img src={dailymaillogo} alt="Daily Mail" />
              <span>Daily Mail</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'entertainment-weekly'
                  ? 'activeNewsSource'
                  : ''
              }`}
              onClick={e => this.changeNewsSource('entertainment-weekly')}
            >
              <img src={eweeklylogo} alt="E-Weekly" />
              <span>Entertainment Weekly</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'espn' ? 'activeNewsSource' : ''
              }`}
              onClick={e => this.changeNewsSource('espn')}
            >
              <img src={espnlogo} alt="ESPN" />
              <span>ESPN</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'financial-post'
                  ? 'activeNewsSource'
                  : ''
              }`}
              onClick={e => this.changeNewsSource('financial-post')}
            >
              <img src={financialpostlogo} alt="Financial Post" />
              <span>Financial Post</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'football-italia'
                  ? 'activeNewsSource'
                  : ''
              }`}
              onClick={e => this.changeNewsSource('football-italia')}
            >
              <img src={footballitalialogo} alt="Football Italia" />
              <span>Football Italia</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'four-four-two'
                  ? 'activeNewsSource'
                  : ''
              }`}
              onClick={e => this.changeNewsSource('four-four-two')}
            >
              <img src={fourfourtwologo} alt="Four Four Two" />
              <span>Four Four Two</span>
            </div>
            <div
              className={`${
                this.props.newsSource === 'fox-news' ? 'activeNewsSource' : ''
              }`}
              onClick={e => this.changeNewsSource('fox-news')}
            >
              <img src={foxchannellogo} alt="Fox News" />
              <span>Fox News</span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
          </div>
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

const mapDispatchToProps = dispatch => {
  return {
    changeNewsSource: newsSource => {
      dispatch(handleNewsSource(newsSource))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

const Wrapper = styled.div`
  .sidebarContainer {
    height: 100%;
    width: 20%;
    position: fixed;
    background-color: #f4f4f4;
    overflow-y: hidden;

    &:hover {
      overflow-y: scroll;
    }

    > div:nth-child(1) {
      display: grid;
      grid-template-columns: repeat(1, 100% [col-start]);

      > div:nth-child(1) {
        margin-top: 30px;
      }

      > div:last-child {
        margin-bottom: 30px;
      }

      > div {
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        padding: 7px 5px 7px 15px;
        cursor: default;

        > img {
          height: 40px;
          width: 40px;
          max-height: 40px;
          max-width: 40px;
          margin-right: 20px;
        }

        > span {
          font-size: 16px;
          font-family: 'Source Sans Pro', sans-serif;
        }
      }

      > .activeNewsSource {
        border-right: 3px solid #1ebea5;
      }
    }
  }
`
