import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import {
  handleNewsSource,
  handleIsLoading,
  handleActiveNewsSource,
  searchTabData,
  resetTabData,
} from "../store/actions";

function Sidebar() {
  const dispatch = useDispatch();
  const { url, proxy_url, api_key, newsSource, tabData } = useSelector(
    (state) => state
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const nUrl = `https://newsapi.org/v2/top-headlines?${url}=${newsSource}&apiKey=${api_key}`;

    axios.post(`${proxy_url}/getNews`, { url: nUrl }).then((res) => {
      dispatch(handleIsLoading(false));
      dispatch(handleActiveNewsSource(res.data.articles));
    });
  }, [dispatch, url, proxy_url, api_key, newsSource]);

  const handleChangeNewsSource = async (newsSource) => {
    await dispatch(handleNewsSource(newsSource));
    await dispatch(handleIsLoading(true));
    const nUrl = `https://newsapi.org/v2/top-headlines?${url}=${newsSource}&apiKey=${api_key}`;
    axios.post(`${proxy_url}/getNews`, { url: nUrl }).then((res) => {
      dispatch(handleIsLoading(false));
      dispatch(handleActiveNewsSource(res.data.articles));
    });
  };

  const handleSearch = async (event) => {
    setSearchText(event.target.value.toLowerCase());
    dispatch(searchTabData(searchText));
  };

  const handleClearSearchBar = () => {
    setSearchText("");
    dispatch(resetTabData());
  };

  return (
    <Wrapper>
      <div className="sidebarContainer">
        <div className="searchContainer">
          <div className="searchContainer2">
            <input
              type="text"
              value={searchText}
              placeholder="Search"
              onChange={handleSearch}
              className="searchField"
            />
            {searchText.length === 0 ? (
              <i className="fas fa-search searchIcon"></i>
            ) : (
              <i
                className="fas fa-times-circle searchIcon"
                onClick={handleClearSearchBar}
              ></i>
            )}
          </div>
        </div>
        <div className="tabsParentContainer">
          <div className="tabsContainer">
            {tabData.map((dt) => {
              return (
                <div
                  key={dt.name}
                  className={`nSource ${
                    newsSource === dt.name ? "activeNewsSource" : ""
                  }`}
                  onClick={(e) => handleChangeNewsSource(dt.name)}
                >
                  <img
                    src={require("../assets/logos/" + dt.image + dt.extension)}
                    alt={dt.title}
                    className="logo-img"
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

export default Sidebar;

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
          cursor: pointer;

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

    .logo-img {
      z-index: -1000;
    }
  }
`;
