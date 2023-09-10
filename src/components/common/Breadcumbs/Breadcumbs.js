import React from "react";
import { Link } from "react-router-dom";
import "./Breadcumbs.css";

const Breadcumbs = ({ LinkData }) => {
  return (
    <div className="link_wrapper">
      <ul className="breadcumbs">
        {LinkData &&
          LinkData.map((link,index) => {
            return (
              <li key={index}>
                <Link to={link.url} className={link.active?"active":''}>
                  {link.icon && <i className={link.icon}></i>} {link.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Breadcumbs;
