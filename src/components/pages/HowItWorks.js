import React from "react";
import "./HowItWorks.css";
import PageFooter from "./page-footer/PageFooter";
import TopSection from "./TopSection/TopSection";

const HowItWorks = () => {
  const sectionObj = {
    title:'How does it work',
    gotoLink:{
      link:'/',
      text:"Home"
    },
    activeLink:{
      text:'How does it work'
    }
  }
  return (
    <div>
      <TopSection sectionObj={sectionObj}/>
      <main className="mt-5">
        <div class="container">
          <div class="work_wrapper text-center mb-5">
            <h1 class="section_title">How does it work?</h1>
            <p class="section_info">
              It's easier than you think. Follow 3 simple easy steps
            </p>
          </div>
          <div class="row work_row d-flex align-items-center">
            <div class="col-md-6 col-lg-4">
              <div class="inner text-center">
                <div
                  class="content_wrapper d-flex align-items-center justify-content-center"
                  data-aos="zoom-in-up"
                >
                  <div class="content d-flex align-items-center justify-content-center">
                    <img src="/images/deposit.png" alt="Deposit Funds" />
                  </div>
                </div>
                <h4 class="secondary">Deposit Funds</h4>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="inner text-center">
                <div class="content_wrapper arrow_container d-flex align-items-center justify-content-center" data-aos="zoom-in-up">
                  <div class="content d-flex align-items-center justify-content-center">
                    <img src="/images/market.png" alt="Watch the market" />
                  </div>
                </div>
                <h4 class="secondary">Watch the market</h4>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="inner text-center">
                <div class="content_wrapper d-flex align-items-center justify-content-center" data-aos="zoom-in-up">
                  <div class="content d-flex align-items-center justify-content-center">
                    <img src="/images/trade.png" alt="Make a Trade" />
                  </div>
                </div>
                <h4 class="secondary">Make a trade</h4>
              </div>
            </div>
          </div>
          <div className="_details">
            <div className="row">
              <div className="col-md-6" data-aos="zoom-in-up">
                <div class="trading-tools-content">
                  <h2>How it works</h2>
                  <ul class="features-list list-unstyled mb-0">
                    <li class="position-relative">
                      <span class="number">1</span>
                      <h3>Become an affiliate</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut sed consectetur augue vitae pulvinar in. Nisl euismod
                        vitae turpis in.
                      </p>
                    </li>
                    <li class="position-relative">
                      <span class="number">2</span>
                      <h3>Promote Bern</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut sed consectetur augue vitae pulvinar in. Nisl euismod
                        vitae turpis in.
                      </p>
                    </li>
                    <li class="position-relative">
                      <span class="number">3</span>
                      <h3>Earn commissions</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut sed consectetur augue vitae pulvinar in. Nisl euismod
                        vitae turpis in.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6" data-aos="zoom-in-up">
                <div class="trading-tools-image text-center">
                  <img
                    decoding="async"
                    src="/images/overview3.webp"
                    alt="overview3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="footer_wrap mt-5">
        <PageFooter/>
      </div>
    </div>
  );
};

export default HowItWorks;
