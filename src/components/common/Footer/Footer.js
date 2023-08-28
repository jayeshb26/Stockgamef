import React from "react";
import "./Footer.css";
import BarcodeDisplay from "./BarcodeDisplay";
import Barcode from "react-barcode";

const Footer = ({ setReset, placeBid }) => {
    const barcodeData = "123456789";
  //   const barcodeStyle = {
  //     width: 2,
  //     height: 100,
  //     format: 'CODE128',
  //     displayValue: true,
  //     fontOptions: '',
  //     font: 'monospace',
  //     textAlign: 'center',
  //     textPosition: 'bottom',
  //     textMargin: 2,
  //     fontSize: 20,
  //     background: '#ffffff',
  //     lineColor: '#000000',
  //     margin: 10,
  //     marginTop: undefined,
  //     marginBottom: undefined,
  //     marginLeft: undefined,
  //     marginRight: undefined,
  //   };
  return (
    <div className="footer_wrapper">
      <div className="container-fluid">
        <div className="top_footer_wrapper">
          <div className="row">
            <div className="left_footer col-md-4">
              <button className="btn success-btn">Print Records</button>
              <button className="btn danger-btn" onClick={() => setReset(true)}>
                Reset
              </button>
            </div>
            <div className="center_screen col-md-4">
              <div className="check_box">
                <button className="btn blue-btn" onClick={placeBid}>
                  Place Order
                </button>
                {/* <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Column
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Row
                                    </label>
                                </div> */}
              </div>
            </div>
            <div className="right_footer col-md-4">
              <form>
                <div
                  style={{
                    border: "1px solid #000",
                    padding: "10px",
                    display: "inline-block",
                  }}
                >
                  {/* <BarcodeDisplay value="123456789" /> */}
                  <Barcode value={barcodeData} width={2} height={30} displayValue={false}/>
                </div>
                {/* <input type="text" className="qty_input" value={0} /> */}
                <input type="text" className="price_input" value={0} />
              </form>
            </div>
          </div>
        </div>
        <div className="bottom_footer o_hide">
          <div className="row">
            <div className="site_links col-md-6 col-sm-12">
              <ul>
                <li>
                  <a href="javascript:void(0);" className="site_links">
                    Stock Skill -1
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="site_links">
                    Stock Skill -2
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="site_links">
                    Stock Skill -3
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_details col-md-6 col-sm-12">
              <span>
                <strong>GST Number :</strong>24DKKPS2852A1ZM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
