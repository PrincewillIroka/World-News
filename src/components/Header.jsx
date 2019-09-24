import React, { Component } from 'react'
import styled from 'styled-components'

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <div className="header">
          <span>
            <i className="fas fa-bars"></i>
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
                <a href="http://princewilliroka.co.nf"> Princewill Iroka</a>
              </span>
            </span>
          </span>
        </div>
      </Wrapper>
    )
  }
}

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
        ${'' /* border: 1px solid #fff;
        border-radius: 20px; */}
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
          color: blue;
          font-weight: bold;
        }
      }
    }
    .countriesText {
      cursor: default;
    }
  }
`
