import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import db from "../../assets/db/data.json";
import {
  handleHamburgerIconState,
  populateTabData,
  changeUrl,
  handleNewsSource,
  handleIsLoading,
  handleActiveNewsSource,
} from "../../store/actions";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { url, proxy_url, api_key, newsSource } = state;

  function handleHamburgerIconClick() {
    dispatch(handleHamburgerIconState(!state.currentHamburgerIconState));
  }

  const handleSelectChange = async (event) => {
    let selectedSource = event.target.value;
    let dUrl = selectedSource === "newsoutlets" ? "sources" : "country";
    await dispatch(changeUrl(dUrl));
    await dispatch(handleNewsSource(db[selectedSource][0].name));
    await dispatch(populateTabData(db[selectedSource]));
    await dispatch(handleIsLoading(true));
    const nUrl = `https://newsapi.org/v2/top-headlines?${url}=${newsSource}&apiKey=${api_key}`;

    axios.post(`${proxy_url}/getNews`, { url: nUrl }).then((res) => {
      dispatch(handleIsLoading(false));
      dispatch(handleActiveNewsSource(res.data.articles));
    });
  };

  return (
    <div className="header">
      <span className="hamburger-icon">
        <i onClick={handleHamburgerIconClick} className="fas fa-bars"></i>
      </span>
      <span className="app-title">World News</span>
      <div className="row-centered">
        <span className="choose-source-container">
          <select onChange={handleSelectChange}>
            <option value="choose-source">Choose Source</option>
            <option value="newsoutlets">Media Outlets</option>
            <option value="countries">Countries</option>
            {/* <option value='categories'>Categories</option> */}
          </select>
        </span>
        {/* <span className="developed-by">
          <span className="dText">Developed by</span>
          <span className="dText2">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://princewilliroka.com/"
            >
              Princewill Iroka
            </a>
          </span>
          <span className="credit">
            <span>Credit:</span>
            <span>
              <a href="https://newsapi.org/">NewsAPI.org</a>
            </span>
          </span>
        </span> */}
      </div>
    </div>
  );
}

export default Header;
