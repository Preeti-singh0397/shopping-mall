import React from "react";
import "./menu-item.style.scss";
import {withRouter} from "react-router-dom"
const MenuItems = ({ title, imageUrl,history, size,link,match }) => {
  return (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${link}`)}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItems);
