import React, { Component } from 'react'
import db from './assets/db/data.json'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainLayout from './components/MainLayout'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { connect } from 'react-redux'
import { populateTabData } from './store/actions'

class App extends Component {

  componentDidMount() {
    this.props.handlePopulateTabData(db.newsoutlets)
  }

  render() {
    return (
      <Wrapper>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <div className="content-layout">
            <div
              className={`sidebar ${ this.props.currentHamburgerIconState ? 'hidden' : '' }
            `} >
              <Sidebar />
            </div>
            <div
              className={`mainlayout ${
                this.props.currentHamburgerIconState ? 'expanded' : ''
                }`}
            >
              <MainLayout />
            </div>
          </div>
          
          
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
    handlePopulateTabData: data => {
      dispatch(populateTabData(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

const Wrapper = styled.div`
  .App {
    display: flex;
    flex-direction: column;
    background-color: #fafafa;

    > div:nth-child(1) {
      width: 100%;
      display: flex;
      position: fixed;
      top: 0;
      height: 80px;
    }

    > .content-layout {
      display: flex;
      margin-top: 80px;

      > .sidebar {
        display: flex;
        width: 21.5%;
        height: calc(100vh - 80px);
        -webkit-animation: conditionalOpen 1s normal forwards ease-in-out;
        -moz-animation: conditionalOpen 1s normal forwards ease-in-out;
        animation: conditionalOpen 1s normal forwards ease-in-out;
        -webkit-transform-origin: 50% 0%;
        -moz-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
      }

      > .mainlayout {
        // width: calc(100% - 21.5%);
        height: calc(100vh - 80px);
      }

      > .hidden {
        display: none;
      }

      > .expanded {
        width: 100%;
      }
    }
    
  }

  @media (max-width: 960px) {
    .sidebar {
      width: 10% !important;
    }
  }

  @media (max-width: 660px) {
    .sidebar {
      width: 12% !important;
    }
  }

  @media (max-width: 560px) {
    .sidebar {
      width: 17% !important;
    }
  }

`
