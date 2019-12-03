import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import axios from 'axios'
import db from '../assets/db/data.json'
import {
  handleHamburgerIconState, populateTabData,
  changeUrl, handleNewsSource, handleIsLoading,
  handleActiveNewsSource
} from '../store/actions'

class Header extends Component {
  handleHamburgerIconClick() {
    this.props.handleHamburgerIconClick(!this.props.currentHamburgerIconState)
  }

  handleSelectChange = async event => {
    let selectedSource = event.target.value
    let dUrl = selectedSource === 'newsoutlets' ? 'sources' : 'country'
    await this.props.handleChangeUrl(dUrl)
    await this.props.changeNewsSource(db[selectedSource][0].name)
    await this.props.handlePopulateTabData(db[selectedSource])
    await this.props.changeIsLoading(true)
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?${this.props.url}=${this.props.newsSource}&apiKey=277e502592bd4fbba0b5152081152b53`
      )
      .then(res => {
        this.props.changeIsLoading(false)
        this.props.changeActiveNewsSource(res.data.articles)
      })

  }

  render() {
    return (
      <Wrapper>
        <div className="header">
          <span>
            <i
              onClick={this.handleHamburgerIconClick.bind(this)}
              className="fas fa-bars"
            ></i>
          </span>
          <span>WorldNews App</span>
          <div>
            <span className="chooseContainer">
              <select onChange={this.handleSelectChange}>
                <option value='newsoutlets'>Media Outlets</option>
                <option value='countries'>Countries</option>
                {/* <option value='categories'>Categories</option> */}
              </select>
            </span>
            <span className="developedBy">
              <span>Developed by</span>
              <span>
                <a rel="noopener noreferrer" target="_blank" href="https://princewilliroka.com/">
                  Princewill Iroka
                </a>
              </span>
            </span>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentHamburgerIconState:
      state.hamburgerIconReducer.currentHamburgerIconState,
    newsSource: state.newsSourceReducer.newsSource,
    url: state.newsSourceReducer.url
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleHamburgerIconClick: currentHamburgerIconState => {
      dispatch(handleHamburgerIconState(currentHamburgerIconState))
    },
    handlePopulateTabData: data => {
      dispatch(populateTabData(data))
    },
    handleChangeUrl: dUrl => {
      dispatch(changeUrl(dUrl))
    },
    changeNewsSource: newsSource => {
      dispatch(handleNewsSource(newsSource))
    },
    changeIsLoading: (isLoading) => {
      dispatch(handleIsLoading(isLoading))
    },
    changeActiveNewsSource: (activeNewsSource) => {
      dispatch(handleActiveNewsSource(activeNewsSource))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

const Wrapper = styled.div`
  .header {
    height: 80px;
    background-color: #1ebea5;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 20px 0 20px;

    > span:nth-child(1) {
      font-size: 1.7rem;
    }

    > span:nth-child(2) {
      font-family: 'Open Sans', sans-serif;
      margin-left: 50px;
      font-weight: bold;
      font-size: 20px;
      width: 15%;
    }

    > div:nth-child(3) {
      display: flex;
      align-items: center;

      .chooseContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #fff;
        border-radius: 20px;
        margin: 0 50px 0 30%;
        padding: 0 5px;

        select {
          width: 100%;
          padding: 8px 0;
          padding-left: 10px;
          padding-right: 25px;
          background-color: transparent;
          border:none;
          font-size: 16px;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
          background-repeat: no-repeat;
          background-position-x: 100%;
          background-position-y: 5px;
          color: #fff;
        }

        select:focus {
          outline: none !important;
          box-shadow: none !important;
        }

        select option {
            background-color: #f4f4f4;
            color: #000;
            font-size: 17px;
        }

        select option[value="Choose a News Source"] {
          color: #ccc;
        }

        

      }

      .developedBy {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-left:auto;
        > span:nth-child(1) {
          font-size: 13px;
        }
        > span:nth-child(2) {
          font-size: 15px;
          color: #000;
          font-weight: bold;
        }
      }
    }
    .chooseText {
      cursor: default;
    }
  }
`
