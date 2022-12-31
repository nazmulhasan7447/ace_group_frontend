import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetInTouchBanner from "../shared/GetInTouchBanner/GetInTouchBanner";
import HeaderContact from "../shared/HeaderContact/HeaderContact";
import ServicesBanner from "../shared/ServicesBanner/ServicesBanner";
import BASE_URL from "../../utils/BaseURL";
import parse from "html-react-parser";

const OtherServiceDetails = () => {
  const [otherServiceDetails, setOtherServiceDetails] = useState({});
  const { id } = useParams();
  console.log(id);
  console.log(otherServiceDetails);

  useEffect(() => {
    fetch(`${BASE_URL}/api-service-details/${id}/`)
      .then((response) => response?.json())
      .then((data) => {
        setOtherServiceDetails(data);
      });
  }, [id]);

  return (
    <div className="corporation">
      <section className="views-element-container block block-views block-views-blocksolution-page-lah-block-1 clearfix">
        <div className="region region-content">
          <div className="form-group">
            <div className="view-content">
              <div className="view-row">
                {/* banner for small device */}
                <div className="views-field views-field-field-billboard-image-mobile d-md-none d-sm-block">
                  <div className="field-content img-fluid">
                    <img
                      src={
                        otherServiceDetails?.coverImg
                          ? otherServiceDetails?.coverImg
                          : "https://www.acegroup.com.my/sites/default/files/2021-01/Contact2_33.jpg"
                      }
                      width="2045"
                      height="1333"
                      alt=""
                      typeof="foaf:Image"
                      className="img-fluid"
                    />
                  </div>
                </div>

                {/* banner for large device */}
                <div className="views-field views-field-nothing">
                  <span className="field-content">
                    <div className="billboard"></div>
                    <div className="billboard-center text-center d-lg-block d-none">
                      <h1 className="marbotnone inner-title">
                        {otherServiceDetails?.title}
                      </h1>
                      <p className="promoted-h1">Above Everything.</p>
                    </div>
                  </span>
                </div>

                {/* investment info */}
                <article className="views-field views-field-body container article">
                  <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                    <h1 className="d-lg-none text-center">Quality.</h1>
                    <h2 className="article title">
                      {otherServiceDetails?.sub_title}
                    </h2>
                    {otherServiceDetails?.content ? (
                      parse(`${otherServiceDetails?.content}`)
                    ) : (
                      <h3 className="text-center">
                        Not found anything to show here
                      </h3>
                    )}
                    {/* <p>
                      Any company worth its salt can build a good property, but
                      building for the greater good takes a different sort of
                      drive and commitment. Since 2005, ACE Corporation offers a
                      broad and comprehensive range of professional contracting
                      services encompassing:
                    </p>
                    <ul>
                      <li>
                        Building, Infrastructure and Specialist Construction
                      </li>
                      <li>Residential and Commercial Development</li>
                      <li>Property Management</li>
                    </ul> */}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact info */}
      <HeaderContact />

      {/* service banner */}
      <ServicesBanner />

      {/* get in touch banner */}
      <GetInTouchBanner />
    </div>
  );
};

export default OtherServiceDetails;
