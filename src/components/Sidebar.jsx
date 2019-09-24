import React, { Component } from 'react'
import styled from 'styled-components'
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

export default class Sidebar extends Component {
  sideBarItemClicked = () => {
    console.log('object')
  }

  render() {
    return (
      <Wrapper>
        <div className="sidebarContainer">
          <div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={abcnewslogo} alt="ABC News" />
              <span>ABC News</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={aljazeeralogo} alt="AlJazeera" />
              <span>AlJazeera English</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={associatedpresslogo} alt="Associated Press" />
              <span>Associated Press</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={bbcnewslogo} alt="BBC News" />
              <span>BBC News</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={bbcsportslogo} alt="BBC Sports" />
              <span>BBC Sports</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={bloomberglogo} alt="Bloomberg" />
              <span>Bloomberg</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={dailymaillogo} alt="Daily Mail" />
              <span>Daily Mail</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={eweeklylogo} alt="E-Weekly" />
              <span>Entertainment Weekly</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={espnlogo} alt="ESPN" />
              <span>ESPN</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={financialpostlogo} alt="Financial Post" />
              <span>Financial Post</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={footballitalialogo} alt="Football Italia" />
              <span>Football Italia</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
              <img src={fourfourtwologo} alt="Four Four Two" />
              <span>Four Four Two</span>
            </div>
            <div onClick={this.sideBarItemClicked()}>
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
    }
  }
`
