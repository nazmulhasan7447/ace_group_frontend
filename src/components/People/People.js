import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { scrollToTop } from "../shared/customMethod/scrollToTop";
import GetInTouchBanner from "../shared/GetInTouchBanner/GetInTouchBanner";
import HeaderContact from "../shared/HeaderContact/HeaderContact";
import PeopleCard from "../shared/PeopleCard/PeopleCard";
import BASE_URL from "../../utils/BaseURL";
import parse from "html-react-parser";

const People = () => {
  const peopleId = useParams();
  const [currentPeople, setCurrentPeople] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}/api-leading-experts/${peopleId?.id}/`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentPeople(data);
      });
  }, []);

  return (
    <div className="people discover">
      <section className="people-page view view-people-page view-id-people_page view-display-id-block_1 ">
        <div className="form-group">
          <div className="view view-insights-page-block view-id-insights_page_block view-display-id-block_1">
            <div className="view-content">
              <div className="views-row">
                <div className="views-field views-field-field-billboard-description">
                  <div className="field-content">
                    <div
                      className="billboard"
                      style={{ backgroundColor: "#f5f5f5" }}
                    >
                      <div className="billboard-center">
                        <h1>{currentPeople?.name}</h1>
                        <h3 style={{ fontSize: "24px" }}>
                          {currentPeople?.designation}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="views-field views-field-body-1 container">
                  <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                    {parse(`${currentPeople?.description}`)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact info */}
      <HeaderContact />

      {/* insights */}
      {/* leading experts */}
      <section className="views-element-container block block-views block-views-blockdiscover-leadership-team-block-1 clearfix">
        <div className="form-group">
          <div className="container padtop5rem padbot5rem related-people view view-discover-leadership-team view-id-discover_leadership_team view-display-id-block_1">
            <div className="view-header">
              <h2 className="article title">LEADING EXPERTS</h2>
              <div className="cta-wrapper">
                <Link
                  to="/discovery"
                  onClick={scrollToTop}
                  className="new-cta emphasize fw-bold"
                >
                  <span>VIEW ALL</span>
                </Link>
              </div>
            </div>
            <PeopleCard />
          </div>
        </div>
      </section>

      {/* get in touch banner */}
      <GetInTouchBanner />
    </div>
  );
};

export default People;
