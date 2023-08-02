import React from "react";
import StockGrid from "../stock-grid/StockGrid";
import QtyScreen from "../Qty-screen/QtyScreen";
import "./StockScreen.css";
const StockScreen = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="check_stock">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckCheckedDisabled"
            />
            <label class="form-check-label" for="flexCheckCheckedDisabled">
              All
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label">Even</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label">Odd</label>
          </div>
        </div>
        <div className="stock_wrapper d-flex">
          <div className="col-md-10 col-sm-12">
            <StockGrid />
          </div>
          <div className="col-md-2 col-sm-12">
            <QtyScreen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockScreen;
