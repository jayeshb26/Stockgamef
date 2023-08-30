import React, { useEffect, useState } from "react";
import "./ResultUI.css";
const ResultUI = ({ resultData ,resetResult}) => {
  const [result,setResult] = useState(resultData?.data?.user);

  return (
    <div>
      <div className="wrap">
        <div className="overlay" id="show">
          <div className="modal_result">
            <svg className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 560 280"
              preserveAspectRatio="true"
            >
              <line
                id="svg_3"
                fill="none"
                stroke="#000000"
                stroke-width="1"
                x1="2.0"
                y1="2.0"
                x2="558"
                y2="2.0"
              />

              <line
                id="svg_4"
                fill="none"
                stroke="#000000"
                stroke-width="1"
                x1="558"
                y1="278"
                x2="558"
                y2="2.0"
              />

              <line
                id="svg_2"
                fill="none"
                stroke="#000000"
                stroke-width="1"
                x1="2.0"
                y1="278"
                x2="558"
                y2="278"
              />

              <line
                id="svg_5"
                fill="none"
                stroke="#000000"
                stroke-width="1"
                x1="2.0"
                y1="2.0"
                x2="2.0"
                y2="278"
              />
            </svg>
            <div className="modal-inner">
              <a href="#" className="modal-close" onClick={resetResult} title="Close Modal">
                X
              </a>
              <div className="winner_name">
                <img src="/images/trophy.png" />
              </div>
              <div className="winner_details">
                <h3>Results Details</h3>
                <div className="inner_wrapper">
                  <div className="records row">
                    <div className="col-md-6 text-left">
                      <span>Won Point :</span>
                    </div>
                    <div className="col-md-1">:</div>
                    <div className="col-md-5">
                      <span>{result.wonPoint}</span>
                    </div>
                  </div>

                  <div className="records row">
                    <div className="col-md-6 text-left">
                      <span>Play Point :</span>
                    </div>
                    <div className="col-md-1">:</div>
                    <div className="col-md-5">
                      <span>{result.playPoint}</span>
                    </div>
                  </div>

                  <div className="records row">
                    <div className="col-md-6 text-left">
                      <span>Transaction Point</span>
                    </div>
                    <div className="col-md-1">:</div>
                    <div className="col-md-5">
                      <span>{result.transactionPin}</span>
                    </div>
                  </div>

                  <div className="records row">
                    <div className="col-md-6 text-left">
                      <span>Sharing Point </span>
                    </div>
                    <div className="col-md-1">:</div>
                    <div className="col-md-5">
                      <span>{result.sharingPoint}</span>
                    </div>
                  </div>

                  <div className="records row">
                    <div className="col-md-6 text-left">
                      <span>Sharing Percentage</span>
                    </div>
                    <div className="col-md-1">:</div>
                    <div className="col-md-5">
                      <span>{result.sharingPercentage}</span>
                    </div>
                  </div>

                  <div className="records row">
                    <div className="col-md-6 text-left">
                      <span>Play Point</span>
                    </div>
                    <div className="col-md-1">:</div>
                    <div className="col-md-5">
                      <span>{result.playPoint}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultUI;
