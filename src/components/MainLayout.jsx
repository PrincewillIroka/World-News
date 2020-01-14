import React, { Component } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import { connect } from "react-redux";

const ANewsItem = obj => {
  return obj.activeNewsSource.map((newsData, index) => (
    <NewsItem key={index} newsData={newsData} />
  ));
};

const Spinner = () => {
  return (
    <div className="spinnerLayout">
      <div className="spinner-square">
        <div className="square-1 square"></div>
        <div className="square-2 square"></div>
        <div className="square-3 square"></div>
      </div>
    </div>
  );
};

class MainLayout extends Component {
  render() {
    return (
      <Wrapper>
        <div className="mainlayoutContainer">
          {this.props.isLoading ? (
            <Spinner />
          ) : this.props.activeNewsSource.length > 0 ? (
            <div className="realContainer">
              <ANewsItem activeNewsSource={this.props.activeNewsSource} />
            </div>
          ) : (
            <div className="emptyContainer">
              <span>None Found</span>
            </div>
          )}
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.newsSourceReducer.isLoading,
    activeNewsSource: state.newsSourceReducer.activeNewsSource
  };
};

export default connect(mapStateToProps, null)(MainLayout);

const Wrapper = styled.div`
  .mainlayoutContainer {
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #fafafa;

    > .realContainer {
      display: grid;
      grid-template-columns: repeat(1, 100% [col-start]);
      grid-row-gap: 40px;
      padding: 40px 0 80px;
      width: 80%;      
      background-color: #fafafa;

      > div {
        height: 320px;
        border: 1px solid #eee;
        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05),
          0 2px 7px 0 rgba(72, 22, 66, 0.05);
        &:hover {
          box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.1),
            0 2px 7px 1px rgba(72, 22, 66, 0.1);
        }
      }
    }
    
    .spinnerLayout {
      height: 480px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .spinner-square {
        display: flex;
        flex-direction: row;
        width: 90px;
        height: 80px;
      }

      .spinner-square > .square {
        width: 17px;
        height: 40px;
        margin: auto auto;
        border-radius: 4px;
      }

      .square-1 {
        animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s
          infinite;
      }

      .square-2 {
        animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95)
          200ms infinite;
      }

      .square-3 {
        animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95)
          400ms infinite;
      }

      @keyframes square-anim {
        0% {
          height: 40px;
          background-color: rgb(111, 163, 240);
        }
        20% {
          height: 40px;
        }
        40% {
          height: 80px;
          background-color: rgb(111, 200, 240);
        }
        80% {
          height: 40px;
        }
        100% {
          height: 40px;
          background-color: rgb(111, 163, 240);
        }
      }
    }

    .emptyContainer{
      height: 480px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      font-weight: bold;
      color: #1ebea5;
    }

  }

  @media (max-width: 960px) {
    .mainlayoutContainer{
      // padding: 20px 10px !important;
    }

  }

  @media(max-width: 690px){
    .realContainer {
      
      > div {
        height: 540px !important;
      }
  }

`;
