import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import {
  handleNewsSource,
  handleIsLoading,
  handleActiveNewsSource,
  searchTabData,
  resetTabData
} from "../store/actions";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?${this.props.url}=${this.props.newsSource}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => {
        this.props.changeIsLoading(false);
        this.props.changeActiveNewsSource(res.data.articles);
      });
  }

  changeNewsSource = async newsSource => {
    await this.props.changeNewsSource(newsSource);
    await this.props.changeIsLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?${this.props.url}=${this.props.newsSource}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => {
        this.props.changeIsLoading(false);
        this.props.changeActiveNewsSource(res.data.articles);
      });
  };

  handleSearch = async event => {
    await this.setState({
      searchText: event.target.value.toLowerCase()
    });
    this.props.searchTabData(this.state.searchText);
  };

  handleClearSearchBar = () => {
    this.setState({
      searchText: ""
    });
    this.props.resetTabData();
  };

  render() {
    return (
      <Wrapper>
        <div className="sidebarContainer">
          <div className="searchContainer">
            <div className="searchContainer2">
              <input
                type="text"
                value={this.state.searchText}
                placeholder="Search"
                onChange={this.handleSearch}
                className="searchField"
              />
              {this.state.searchText.length === 0 ? (
                <i className="fas fa-search searchIcon"></i>
              ) : (
                <i
                  className="fas fa-times-circle searchIcon"
                  onClick={this.handleClearSearchBar}
                ></i>
              )}
            </div>
          </div>
          <div className="tabsParentContainer">
            <div className="tabsContainer">
              {this.props.tabData.map(dt => {
                return (
                  <div
                    key={dt.name}
                    className={`nSource ${
                      this.props.newsSource === dt.name
                        ? "activeNewsSource"
                        : ""
                    }`}
                    onClick={e => this.changeNewsSource(dt.name)}
                  >
                    <img
                      src={require("../assets/logos/" +
                        dt.image +
                        dt.extension)}
                      alt={dt.title}
                    />
                    <span className="d-title">{dt.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    newsSource: state.newsSourceReducer.newsSource,
    tabData: state.newsSourceReducer.tabData,
    url: state.newsSourceReducer.url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeNewsSource: newsSource => {
      dispatch(handleNewsSource(newsSource));
    },
    changeIsLoading: isLoading => {
      dispatch(handleIsLoading(isLoading));
    },
    changeActiveNewsSource: activeNewsSource => {
      dispatch(handleActiveNewsSource(activeNewsSource));
    },
    searchTabData: value => {
      dispatch(searchTabData(value));
    },
    resetTabData: () => {
      dispatch(resetTabData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

const Wrapper = styled.div`
  .sidebarContainer {
    width: auto;
    display: block;
    position: fixed;
    background-color: #f4f4f4;
    box-shadow: 5px 0 5px -5px #bbb;

    > .searchContainer {
      padding: 20px 5%;

      > .searchContainer2 {
        height: 35px;
        background-color: #fff;
        border-radius: 3px;
        display: flex;
        padding: 0 10px;
        box-shadow: 0 7px 17px rgba(0, 0, 0, 0.19),
          0 3px 3px rgba(0, 0, 0, 0.23);

        > .searchField {
          border: none;
          outline: none;
          width: 100%;
          font-size: 16px;
        }

        > .searchIcon {
          align-self: center;
          color: #ccc;
        }
      }
    }

    > .tabsParentContainer {
      height: 100vh;
      overflow-y: hidden;
      padding-bottom: 200px;

      &:hover {
        overflow-y: scroll;
      }

      > .tabsContainer {
        display: grid;
        grid-template-columns: repeat(1, 100% [col-start]);

        > div:nth-child(1) {
          margin-top: 10px;
        }

        > div:last-child {
          margin-bottom: 30px;
        }

        > .nSource {
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
            object-fit: contain;
          }

          > .d-title {
            font-size: 16px;
            font-family: "Source Sans Pro", sans-serif;
          }
        }

        > .activeNewsSource {
          border-right: 5px solid #1ebea5;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .sidebarContainer {
      width: 10% !important;
    }

    .searchContainer {
      display: none !important;
    }

    .d-title {
      display: none !important;
    }
  }

  @media (max-width: 660px) {
    .sidebarContainer {
      width: 12% !important;
    }
  }

  @media (max-width: 560px) {
    .sidebarContainer {
      width: 17% !important;
    }

    .nSource {
      padding: 7px 5px 7px 5px !important;
    }
  }
`;
