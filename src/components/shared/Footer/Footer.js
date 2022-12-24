import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";
import { scrollToTop } from "../customMethod/scrollToTop";
import "./Footer.css";

const Footer = () => {
  const { contextData } = useContext(AppContext);

  return (
    <div className="footer-padding">
      <footer className="footer container" role="contentinfo">
        <div className="region region-footer">
          <section
            id="block-footerlogoblock"
            className="block block-block-content block-block-contentaf9d7c95-ee3d-4db2-8171-7bcbe762e5cc clearfix"
          >
            <div className="layout layout--onecol">
              <div className="layout__region layout__region--content">
                <div className="field field--name-body field--type-text-with-summary field--label-hidden field--item">
                  <p>
                    <Link to="/" onClick={scrollToTop}>
                      <img
                        alt="logo"
                        data-entity-type="file"
                        height="55"
                        src={contextData?.logos?.logoV2}
                        width="225"
                      />
                    </Link>
                  </p>
                  <p>
                    © 2021 ACE Group.
                    <br />
                    All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <nav
            role="navigation"
            aria-labelledby="block-footerbankingfinance-menu"
            id="block-footerbankingfinance"
          >
            <h2 id="block-footerbankingfinance-menu">Banking &amp; Finance</h2>
            <ul className="menu nav">
              <li>
                <Link to="/services/investment-bank" onClick={scrollToTop}>
                  Investment Bank
                </Link>
              </li>
              <li>
                <Link to="/services/holdings" onClick={scrollToTop}>
                  Holdings
                </Link>
              </li>
              <li>
                <Link to="/services/money-exchange" onClick={scrollToTop}>
                  Money Exchange
                </Link>
              </li>
              <li>
                <Link to="/services/leasing" onClick={scrollToTop}>
                  Leasing
                </Link>
              </li>
              <li>
                <Link to="/services/credit" onClick={scrollToTop}>
                  Credit
                </Link>
              </li>
              <li>
                <Link to="/services/capital-management" onClick={scrollToTop}>
                  Capital Management
                </Link>
              </li>
              <li>
                <Link to="/services/private-equity" onClick={scrollToTop}>
                  Private Equity{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <nav
            role="navigation"
            aria-labelledby="block-footerothersolutions-menu"
            id="block-footerothersolutions"
          >
            <h2 id="block-footerothersolutions-menu">Other Services</h2>
            <ul className="menu nav">
              <li>
                <Link to="/services/corporation" onClick={scrollToTop}>
                  Corporation
                </Link>
              </li>
              <li>
                <Link to="/services/asiacyberx" onClick={scrollToTop}>
                  AsiacyberX
                </Link>
              </li>
              <li>
                <Link to="/services/accelerator-network" onClick={scrollToTop}>
                  Accelerator Network
                </Link>
              </li>
              <li>
                <Link to="/services/automobile" onClick={scrollToTop}>
                  EzDrive
                </Link>
              </li>
              <li>
                <Link
                  to="/services/pictures-entertainment"
                  onClick={scrollToTop}
                >
                  Pictures Entertainment
                </Link>
              </li>
              <li>
                <Link to="/services/advisory" onClick={scrollToTop}>
                  Advisory
                </Link>
              </li>
            </ul>
          </nav>
          <nav
            role="navigation"
            aria-labelledby="block-bootstrap-footer-menu"
            id="block-bootstrap-footer"
          >
            <h2 className="visually-hidden" id="block-bootstrap-footer-menu">
              Footer menu
            </h2>
            <ul className="menu nav">
              <li>
                <Link to="/" onClick={scrollToTop} className="is-active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/discovery" onClick={scrollToTop}>
                  Corporate Video
                </Link>
              </li>
              <li>
                <Link to="/discovery" onClick={scrollToTop}>
                  Discover
                </Link>
              </li>
              <li>
                <Link to="/insights" onClick={scrollToTop}>
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
