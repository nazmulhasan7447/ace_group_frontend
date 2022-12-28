import { size } from "lodash";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BASE_URL from "../../../utils/BaseURL";
import GetInTouchBanner from "../../shared/GetInTouchBanner/GetInTouchBanner";
import PeopleCard from "../../shared/PeopleCard/PeopleCard";
// import HTMLReactParser from "html-react-parser";
import parse from "html-react-parser"; // we can use both like "HTMLReactParser" or just "parse"

const settings = {
  className: "",
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
};

const Corporate = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [discoverAceFirstContentSection, setDiscoverAceFirstContentSection] =
    useState("");

  const [responsibilityContent, setResponsibilityContent] = useState("");
  const [leadingExperts, setLeadingExperts] = useState([]);

  const videoHandler = (id) => {
    setCurrentVideo(videos?.filter((item) => item?.id === id)[0]);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/api-corporate-videos/`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setVideos(data);
        }
      });

    fetch(`${BASE_URL}/api-strengthen-content/`)
      .then((response) => response.json())
      .then((data) => {
        setDiscoverAceFirstContentSection(data);
      });

    fetch(`${BASE_URL}/api-responsibility-content/`)
      .then((response) => response.json())
      .then((data) => {
        setResponsibilityContent(data);
      });

    fetch(`${BASE_URL}/api-leading-experts/`)
      .then((response) => response.json())
      .then((data) => {
        setLeadingExperts(data);
      });
  }, []);

  return (
    <>
      <section>
        <div id="top" className="region region-content discover">
          <section
            className="views-element-container block block-views block-views-blockdiscover-block-block-1 clearfix"
            id="exports"
          >
            <div className="form-group">
              <div className="discover-page view view-discover-block view-id-discover_block view-display-id-block_1">
                <div className="view-content">
                  <div className="views-row">
                    <div
                      className="views-field views-field-field-billboard-image-mobile d-lg-none"
                      style={{ display: showVideo ? "none" : "block" }}
                    >
                      <div className="field-content img-fluid">
                        <img
                          src={
                            currentVideo?.thumbnail ||
                            "https://www.acegroup.com.my/sites/default/files/2021-01/Contact2_39.jpg"
                          }
                          width="2045"
                          height="1333"
                          alt=""
                          typeof="foaf:Image"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div
                      className="views-field views-field-field-video-emb video-embed-box"
                      style={{ display: showVideo ? "block" : "none" }}
                    >
                      <div className="field-content">
                        <div className="video-embed-field-provider-youtube video-embed-field-responsive-video form-group">
                          <iframe
                            height="480"
                            frameBorder="0"
                            allowFullScreen="allowfullscreen"
                            src={
                              currentVideo?.videoLink || videos[0]?.videoLink
                            }
                            allow="autoplay"
                            title="title"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="views-field views-field-field-billboard-description"
                      style={{ display: showVideo ? "none" : "block" }}
                    >
                      <div className="field-content">
                        <div
                          className="billboard"
                          style={{
                            backgroundImage: `url(${
                              currentVideo?.thumbnail ||
                              "https://www.acegroup.com.my/sites/default/files/2021-01/Contact_49.jpg"
                            })`,
                          }}
                        >
                          <div className="billboard-center">
                            <h1 className="mob-emphasize">Corporate video</h1>
                            <p> </p>
                            <span
                              id="video-embed-open"
                              onClick={() => setShowVideo(true)}
                            >
                              Play
                            </span>
                            <div id="strength"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* sliders */}
                    <div
                      id="strength"
                      className="views-field views-field-field-videos container bespoke-slider padtop5rem discover-youtube-slider"
                    >
                      <div className="field-content">
                        <div className="paragraph paragraph--type--slick-slider paragraph--view-mode--default">
                          <div className="layout layout--onecol">
                            <div className="layout__region layout__region--content">
                              <Slider {...settings}>
                                {size(videos) &&
                                  videos?.map((item) => {
                                    return (
                                      <div
                                        className="paragraph paragraph--type--video-slide paragraph--view-mode--default cursor-grap"
                                        onClick={() => videoHandler(item?.id)}
                                      >
                                        <div className="layout layout--onecol">
                                          <div className="layout__region layout__region--content">
                                            <div className="field field--name-field-thumbnail field--type-image field--label-hidden field--item">
                                              <img
                                                src={item?.thumbnail}
                                                width="2045"
                                                height="1333"
                                                alt=""
                                                typeof="foaf:Image"
                                                className="img-fluid"
                                              />
                                              <span className="video-embed-open-slider"></span>
                                            </div>
                                            <div className="field field--name-field-title field--type-string field--label-hidden field--item">
                                              {item?.title}
                                            </div>
                                            <div className="field field--name-field-description field--type-string field--label-hidden field--item">
                                              {item?.sub_title}
                                            </div>
                                            <div className="field field--name-field-video-link field--type-string field--label-hidden field--item">
                                              {item?.videoLink}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* company info */}
                    <div className="views-field views-field-body container">
                      <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                        {parse(`${discoverAceFirstContentSection?.content}`)}
                        {/* <h2 className="article title mob-emphasize">
                          <strong className="fw-bold">
                            Strength in diversity is the core of our foundation.
                          </strong>
                        </h2>
                        <p className="article body">
                          Since 1992, ACE Group&nbsp;was&nbsp;founded based on
                          the philosophy of harnessing the power of
                          diversity.&nbsp;
                        </p>
                        <p className="article body">
                          Our presence also extends around the globe, spanning
                          across various high-potential sectors, allowing the
                          diversity of our businesses to obtain insights from
                          related industries and giving us the upper hand in
                          developing our investment portfolio.
                        </p>
                        <p className="article body">
                          From investment banking, capital management,&nbsp;to
                          film and documentary productions&nbsp;– our focus on
                          building long-term relationships, combined with
                          carefully crafted, created and curated products,
                          services and solutions, makes ACE Group living proof
                          that diversity truly is strength.
                          <br />
                          &nbsp;
                        </p>
                        <h4 className="article body fw-bold">
                          <b>OUR VISION: PIONEERING INCLUSIVE WELL-BEING</b>
                        </h4>
                        <p className="article body">
                          We strive to provide the under-serviced global masses
                          with innovative, high quality products and services.
                          We’re about enriching the lives of people at all
                          levels of society by addressing and fulfilling their
                          financial, physical, economic, social and spiritual
                          well-being. Essentially, we serve the needs of the
                          many, with ideas, creations, solutions, strategies and
                          bold new paradigms harnessed from our diversity of
                          people and perspectives.
                          <br />
                          &nbsp;
                        </p>
                        <p className="article body fw-bold">
                          <b>OUR MISSION: EXTRACTING VALUE FROM DIVERSITY</b>
                        </p>
                        <p className="article body">
                          With diversity at our core, we aim to maximise its
                          multi-faceted potential by:
                        </p>
                        <ul>
                          <li>
                            Establishing an effective organisational structure
                            to harness the full capabilities of all assets and
                            resources within the Group and deliver exceptional
                            quality products and services.
                          </li>
                          <li>
                            Researching and integrating the latest technological
                            advances into all our products and services, and
                            consistently delivering enhanced value to our
                            customers and members.
                          </li>
                          <li>
                            Providing unparalleled service to every ACE Group
                            stakeholder.
                          </li>
                        </ul> */}
                      </div>
                    </div>

                    {/* responsibility banner */}
                    <div className="views-field views-field-field-breaker-image-mobile d-lg-none">
                      <div className="field-content img-fluid">
                        <img
                          src={
                            responsibilityContent?.bgImgForSmallDevice ||
                            "https://www.acegroup.com.my/sites/default/files/2021-01/Contact2_34.jpg"
                          }
                          width="2045"
                          height="1333"
                          alt=""
                          typeof="foaf:Image"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="views-field views-field-field-breaker-description-1">
                      <div id="responsibility" className="field-content">
                        <div
                          className="billboard breaker1"
                          style={{
                            backgroundImage: `url(${
                              responsibilityContent?.bgImg ||
                              "https://www.acegroup.com.my/sites/default/files/2021-01/Contact_42.jpg"
                            })`,
                          }}
                        >
                          <div className="billboard-center">
                            <h1 className="text-center mob-emphasize">
                              {responsibilityContent?.title}
                            </h1>
                            <h2 className="mob-emphasize">
                              {responsibilityContent?.sub_title}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="views-field views-field-field-image">
                      <div className="field-content"></div>
                    </div>
                    <div className="views-field views-field-field-body-2 container">
                      <div className="field-content offset-md-1 col-md-10 padbot-md-9rem padtop9rem">
                        {parse(`${responsibilityContent?.content}`)}
                        {/* <h4 className="article body">
                          <b>CORPORATE GOVERNANCE</b>
                        </h4>
                        <p className="article body">
                          We believe our governance responsibilities are
                          integral to our long-term sustainability and part of
                          our identity. Thus, ensuring that we thrive not just
                          by doing well, also by doing good.
                          <br />
                          &nbsp;
                        </p>
                        <h4 className="article body">
                          <b>SOCIAL RESPONSIBILITY</b>
                        </h4>
                        <p className="article body">
                          ACE Group strives to be a socially responsible group,
                          focusing primarily on people, our greatest assets.
                          Whether it’s customers, employees or the community at
                          large, we are committed to communicating effectively
                          in order to create mutually-beneficial relationships.
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* our peoples */}
          <section className="views-element-container block block-views block-views-blockdiscover-leadership-team-block-1 clearfix">
            <div className="form-group">
              <div className="container padtop5rem padbot5rem related-people view view-discover-leadership-team view-id-discover_leadership_team view-display-id-block_1">
                <div className="view-header">
                  <div className="text-center">
                    <h2 className="article title mob-emphasize">OUR PEOPLE</h2>
                  </div>
                </div>
                <PeopleCard leadingExperts={leadingExperts} />
              </div>
            </div>
          </section>

          {/* Get in touch */}
          <GetInTouchBanner />
        </div>
      </section>
    </>
  );
};

export default Corporate;
