import React from "react";
import { useSelector } from "react-redux";
import NewsItem from "../NewsItem";
import "./MainLayout.scss";

const ANewsItem = (obj) => {
  return obj.activeNewsSource.map((newsData, index) => (
    <NewsItem key={index} newsData={newsData} />
  ));
};

const Spinner = () => {
  return (
    <div className="spinner-layout">
      <div className="spinner-square">
        <div className="square-1 square"></div>
        <div className="square-2 square"></div>
        <div className="square-3 square"></div>
      </div>
    </div>
  );
};

function MainLayout() {
  const { isLoading, activeNewsSource } = useSelector((state) => state);

  return (
    <div className="main-layout-container">
      {isLoading ? (
        <Spinner />
      ) : activeNewsSource.length > 0 ? (
        <div className="real-container">
          <ANewsItem activeNewsSource={activeNewsSource} />
        </div>
      ) : (
        <div className="empty-container">
          <span>None Found</span>
        </div>
      )}
    </div>
  );
}

export default MainLayout;
