import React from "react";
import './Notfound.css'
import { Link } from "react-router-dom";
import { AppConstant } from "../../AppConstant";
const Notfound = () => {
  return (
    <div className="error_wrapper">
      <div className="error_section">
      <h1 className="error">404</h1>
      <div className="page">
        Ooops!!! The page you are looking for is not found
      </div>
      <Link className="back-home" to={AppConstant.MARKET_NEW}>
        Back to Market
      </Link>
    </div>
    </div>
  );
};

export default Notfound;
