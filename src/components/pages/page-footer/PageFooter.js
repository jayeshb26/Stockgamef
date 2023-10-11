import React from "react";
import "./PageFooter.css";
import { Link } from "react-router-dom";

const PageFooter = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row footer_nav d-flex align-items-center">
            <div class="col-lg-7">
              <ul class="nav justify-content-center justify-content-sm-start">
                <li class="nav-item">
                  <Link class="nav-link" to={"/how-it-works"}>
                    How It's Work
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/terms-and-conditions"}>
                    TERMS OF USE
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/faq"}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="row footer_copyright d-flex align-items-center">
            <div class="col-lg-7 text-center text-sm-start">
              <p class="para">
                Copyright © 2023. by &nbsp;
                <a href="javascript:void(0);">Stock Skill</a>
              </p>
            </div>
            <div class="col-lg-5 text-center text-sm-start text-lg-end">
              <p class="para">All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PageFooter;
