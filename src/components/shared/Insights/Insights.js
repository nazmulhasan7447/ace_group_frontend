// import parse from 'html-react-parser';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../../../utils/BaseURL";
import { scrollToTop } from "../customMethod/scrollToTop";

const Insights = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api-insights/`)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const data = result?.slice(0, 3);
          setInsights(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section
        className="views-element-container block block-views block-views-blockrelated-insights-block-1 clearfix"
        id="block-views-block-related-insights-block-1"
      >
        <div className="form-group">
          <div className="container padtop5rem padbot5rem related-insights view view-related-insights view-id-related_insights view-display-id-block_1 js-view-dom-id-113d6de8723a28f77356a73aa3e03dcd83c9f798ca2e2c0b507aa6d2af4b6f75">
            <div className="view-header">
              <h2 className="article title">Insights</h2>
              <div className="cta-wrapper">
                <Link
                  to="/insights"
                  className="new-cta emphasize"
                  onClick={scrollToTop}
                >
                  <span>VIEW ALL</span>
                </Link>
              </div>
            </div>
            <div className="view-content">
              <div className="insights-list">
                <ul>
                  {insights?.map((item) => {
                    return (
                      <li key={item?.id}>
                        <div className="views-field views-field-field-insight-category">
                          <div className="field-content">
                            {item?.category?.category_name}
                          </div>
                        </div>
                        <div className="views-field views-field-title">
                          <h3 className="field-content">
                            <Link
                              to={`/insights/${item?.id}`}
                              onClick={scrollToTop}
                            >
                              {item?.title}
                            </Link>
                          </h3>
                        </div>
                        <div className="views-field views-field-body">
                          <div className="field-content">
                            <p>{item?.content_for_list?.slice(0, 130)}...</p>
                          </div>
                        </div>
                        <div className="views-field views-field-view-node">
                          <span className="field-content">
                            <Link
                              to={`/insights/${item?.id}`}
                              onClick={scrollToTop}
                              className="new-cta"
                            >
                              <span>READ MORE</span>
                            </Link>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
