import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BASE_URL from "../../../utils/BaseURL";

const GetInTouchBanner = () => {
  const { pathname } = useLocation();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [topFooterBanner, setTopFooterBanner] = useState({});
  console.log("topFooterBanner: ", topFooterBanner);

  useEffect(() => {
    fetch(`${BASE_URL}/api-top-footer-banner/`)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.banner) {
          setTopFooterBanner({ banner: data?.banner });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section
        id="block-breakergetintouch"
        className="block block-block-content block-block-contentbc2b72d4-577f-4cbc-ac5f-7508b1896e76 clearfix"
      >
        <div className="layout layout--onecol">
          <div className="layout__region layout__region--content">
            <div className="field field--name-body field--type-text-with-summary field--label-hidden field--item">
              {console.log(topFooterBanner?.banner)}
              <div
                className="getintouch"
                style={{
                  backgroundImage:
                    "url(" + topFooterBanner?.banner ||
                    "https://www.acegroup.com.my/sites/default/files/2018-04/contat-landscape-mobile.jpg" +
                      ")",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  backgroundPosition: "center",
                }}
              >
                <img
                  className="d-md-none img-fluid"
                  src="https://www.acegroup.com.my/sites/default/files/2018-04/contat-landscape-mobile.jpg"
                  alt=""
                />
                <div className="cta-wrapper">
                  {(() => {
                    if (pathname !== "/contact") {
                      return (
                        <Link
                          className="new-cta white"
                          to="/contact"
                          onClick={scrollToTop}
                        >
                          <span>GET IN TOUCH</span>
                        </Link>
                      );
                    }
                    return false;
                  })()}
                  {pathname.includes("contact") && (
                    <Link
                      className="new-cta white"
                      to="#"
                      onClick={scrollToTop}
                    >
                      <span>BACK TO TOP</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouchBanner;
