import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { handleHamburgerIconState } from '../store/actions'

class Header extends Component {
  handleHamburgerIconClick() {
    this.props.handleHamburgerIconClick(!this.props.currentHamburgerIconState)
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
          <span>
            <span>
              <span className="countriesText">Countries</span>
              <span>
                <i className="fas fa-caret-down"></i>
              </span>
            </span>
            <span>
              <span>Developed by</span>
              <span>
                <a target="_blank" href="https://princewilliroka.com/">
                  Princewill Iroka
                </a>
              </span>
            </span>
          </span>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentHamburgerIconState:
      state.hamburgerIconReducer.currentHamburgerIconState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleHamburgerIconClick: currentHamburgerIconState => {
      dispatch(handleHamburgerIconState(currentHamburgerIconState))
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
    }

    > span:last-child {
      display: flex;
      margin-left: auto;
      align-items: center;

      > span:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 20px;
        border: 1px solid #fff;
        border-radius: 20px;
        margin-right: 50px;

        > span:nth-child(2) {
          margin-left: 20px;
        }
      }

      span:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        > span:nth-child(1) {
          font-size: 11px;
        }
        > span:nth-child(2) {
          font-size: 14px;
          color: #000;
          font-weight: bold;
        }
      }
    }
    .countriesText {
      cursor: default;
    }
  }
`
