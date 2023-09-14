import React, { useEffect, useState } from "react";
import "./Footer.css";
import ResultUI from "./ResultUI";
import { useSocket } from "../../Context/SocketContext";
import { Link } from "react-router-dom";
import BarcodeGenrate from "../../user/Barcode/BarcodeGenrate";

const Footer = ({ setReset, placeBid,modifiedValues,setListScreen }) => {
  const { resultData,startGame,mainData } = useSocket();
  const [result, setResult] = useState(resultData);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [totalPriceValue,setTotalPriceValue] = useState(0);
  const [footerDetails,setFooterDetails] = useState([]);
  
  useEffect(() => {
    if (resultData) {
      setResult(resultData?.data.data);
      setIsResultOpen(true)
    }
    if(startGame){
      setTimeout(()=>{
        closeResult();
      },3000)
    }
  }, [resultData,startGame]);

  const closeResult = () => {
    setIsResultOpen(false);
    setListScreen(false)
  };

  useEffect(()=>{
    setFooterDetails(mainData?.data)
  },[mainData])

  useEffect(()=>{
    var total = 0;
     modifiedValues.filter(async(item) => {
       if(item.price){
        if(item.price == null || undefined) total=0;
        total = total + +item.price;
        setTotalPriceValue(total)
      }else{
        item.price = 0
        total = total + +item.price;
        setTotalPriceValue(total)
      }
    });
  },[totalPriceValue,modifiedValues])
 
  return (
    <>
      <div className="footer_wrapper">
        <div className="container-fluid">
          <div className="top_footer_wrapper">
            <div className="row">
              <div className="left_footer col-md-4">
                <button className="btn success-btn">Print Records</button>
                <button
                  className="btn danger-btn"
                  onClick={() => setReset(true)}
                >
                  Reset
                </button>
                <button
                  className="btn inkcolor-bg"
                  onClick={() => setReset(true)}
                >
                  Claim Rewards
                </button>
              </div>
              <div className="center_screen col-md-4">
                <div className="check_box">
                  <button className="btn blue-btn" onClick={placeBid}>
                    Place Order
                  </button>
                </div>
                <div className="barcode">
                  {resultData && <BarcodeGenrate id="123"/>}
                </div>
              </div>
              <div className="right_footer col-md-4">
                <form>
                  <div>
                  </div>
                  <label htmlFor="Total Bid">Total Amount:</label>
                  <input type="text" className="price_input" value={totalPriceValue} />
                </form>
              </div>
            </div>
          </div>
          <div className="bottom_footer o_hide">
            <div className="row">
              <div className="site_links col-md-3 col-sm-12">
                <ul>
                  <li>
                    <Link to={footerDetails?.button1} target="_blanck" className="site_links">
                      Stock Skill -1
                    </Link>
                  </li>
                  <li>
                    <Link to={footerDetails?.button2} className="site_links">
                      Stock Skill -2
                    </Link>
                  </li>
                  <li>
                    <Link to={footerDetails?.button3} className="site_links">
                      Stock Skill -3
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12">
                <marquee behavior="scroll" className="text_notice" direction="left">
                  {footerDetails?.notice}
                </marquee>
              </div>
              <div className="footer_details col-md-3 col-sm-12">
                <span>
                  <strong>GST Number :</strong>{footerDetails?.gstin}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isResultOpen && <ResultUI resultData={resultData}  resetResult={closeResult}/>}
    </>
  );
};

export default Footer;
