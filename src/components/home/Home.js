import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home_main_wrapper">
        <span id="splash-overlay" className="splash" />
        <span id="welcome" className="z-depth-4" />
        <header className="navbar-fixed">
          <nav className="deep-purple darken-3 home box_shadow">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="header_icons">
                    <li>
                      <Link to="/market">
                        <i class="fa-solid fa-chart-simple"></i>
                        <span className="icon-text">Market</span>
                      </Link>
                    </li>
                    <li>
                      <a href="javascritpt:void(0);">
                        <i class="fa-solid fa-chess-queen"></i>
                        <span className="icon-text">Stock skill</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="valign-wrapper">
          <div className="wrapper">
            <span className="container grey-text text-lighten-1 ">
              <p className="flow-text">Welcome to</p>
              <h1 className="title grey-text text-lighten-3">
                Stock skill's game
              </h1>
              <blockquote className="flow-text">
                Stock skill is the ultimate destination for game lovers they can
                bid and won rewards
              </blockquote>
              <p>- for go to market click on right top market button</p>
            </span>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
