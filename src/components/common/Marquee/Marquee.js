import React from "react";
import './Marquee.css'

const Marquee = () => {
  return (
    <>
      {/* <div class="track-horizontal flex">
        <div class="marquee-text">This is a horizontal Marquee</div>
        <div class="marquee-text">It just keeps going and going</div>
      </div> */}
      <marquee behavior="slide " direction="">
        <span className="mrq_text">KOTAKBANK 78-41</span>
        <span className="mrq_text">TATA 15-12</span>
        <span className="mrq_text">SBI 22-16</span>
        <span className="mrq_text">IRCTC 12-20</span>
        <span className="mrq_text">UBL 45-20</span>
      </marquee>
    </>
  );
};

export default Marquee;
