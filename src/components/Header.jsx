import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import db from "../assets/db/data.json";
import {
  handleHamburgerIconState,
  populateTabData,
  changeUrl,
  handleNewsSource,
  handleIsLoading,
  handleActiveNewsSource,
} from "../store/actions";

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
    <Wrapper>
      <div className="header">
        <span className="hamburger-icon">
          <i onClick={handleHamburgerIconClick} className="fas fa-bars"></i>
        </span>
        <span className="app-title">World News</span>
        <div className="first-div">
          <span className="chooseContainer">
            <select onChange={handleSelectChange}>
              <option value="choose-source">Choose Source</option>
              <option value="newsoutlets">Media Outlets</option>
              <option value="countries">Countries</option>
              {/* <option value='categories'>Categories</option> */}
            </select>
          </span>
          <span className="developedBy">
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
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  .header {
    height: 80px;
    background-color: #1ebea5;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    padding-left: 20px;

    > .hamburger-icon {
      font-size: 1.7rem;
      margin-right: 50px;
      cursor: pointer;
    }

    > .app-title {
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      font-size: 1.2rem;
      width: 15%;
    }

    > .first-div {
      display: flex;
      align-items: center;
      padding-right: 20px;

      .chooseContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #fff;
        border-radius: 20px;
        margin: 0 50px 0 30%;
        padding: 0 5px;
        cursor: pointer;

        select {
          padding: 5px 0;
          padding-left: 10px;
          padding-right: 25px;
          background-color: transparent;
          border: none;
          font-size: 16px;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
          background-repeat: no-repeat;
          background-position-x: 100%;
          background-position-y: 2px;
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
        margin-left: auto;
        > .dText {
          font-size: 12px;
        }
        > .dText2 {
          font-size: 12px;
          color: #000;
          font-weight: bold;
          margin-bottom: 7px;
        }

        .credit {
          font-size: 10px;
          color: #000;

          span:nth-child(2) {
            font-weight: bold;
            margin-left: 5px;
          }
        }
      }
    }
    .chooseText {
      cursor: default;
    }
  }

  @media (max-width: 1200px) {
    .header {
      > .app-title {
        width: 20%;
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 962px) {
    .header {
      > .app-title {
        width: 25%;
        font-size: 1rem !important;
      }
    }
  }

  @media (max-width: 818px) {
    .header {
      > .app-title {
        width: 30%;
      }
    }
  }

  @media (max-width: 690px) {
    .developedBy {
      display: none !important;
    }

    select {
      font-size: 14px !important;
    }
  }

  @media (max-width: 619px) {
    .header {
      height: 60px;
      > .app-title {
        width: 35%;
        font-size: 0.9rem !important;
      }
    }
  }

  @media (max-width: 450px) {
    .header {
      height: 60px;
      > .app-title {
        width: 40% !important;
        font-size: 0.75rem !important;
      }
    }

    select {
      font-size: 12px !important;
    }
  }
`;
