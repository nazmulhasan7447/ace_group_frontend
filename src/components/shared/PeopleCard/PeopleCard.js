import { size } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../customMethod/scrollToTop";

const PeopleCard = ({ leadingExperts }) => {
  return (
    <div className="view-content">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row gy-3">
            {size(leadingExperts) &&
              leadingExperts?.map((item) => {
                return (
                  <div className="col-12 col-md-4 mb-2">
                    <div className="card draggable h-100">
                      <div className="views-field views-field-title"></div>
                      <h3 className="card1 title">
                        <Link to={`/people/${item?.id}/`} onClick={scrollToTop}>
                          {item?.name}
                        </Link>
                      </h3>
                      <div className="views-field views-field-field-billboard-description">
                        <p className="card1 subtitle">{item?.designation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default PeopleCard;
