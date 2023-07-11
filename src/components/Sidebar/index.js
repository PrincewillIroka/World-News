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
} from "../../store/actions";
import "./Sidebar.scss";

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
    <div className="sidebar-container">
      <div className="search-container">
        <div className="search-container2">
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
      <div className="tabsParent-container">
        <div className="tabs-container">
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
                  src={require("../../assets/logos/" + dt.image + dt.extension)}
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
  );
}

export default Sidebar;
