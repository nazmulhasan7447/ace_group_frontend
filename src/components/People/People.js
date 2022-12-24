import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../shared/customMethod/scrollToTop';
import GetInTouchBanner from '../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../shared/HeaderContact/HeaderContact';
import PeopleCard from '../shared/PeopleCard/PeopleCard';

const People = () => {
    
    return (
        <div className='people discover'>
           <section className="people-page view view-people-page view-id-people_page view-display-id-block_1 ">
                <div className="form-group">
                    <div className="view view-insights-page-block view-id-insights_page_block view-display-id-block_1">
                        <div className="view-content">
                            <div className="views-row">
                                <div className="views-field views-field-field-billboard-description">
                                    <div className="field-content">
                                        <div className="billboard" style={{ backgroundColor: '#f5f5f5' }}>
                                        <div className="billboard-center">
                                            <h1>CHOU SING HOAN, MIKE</h1>
                                            <h3 style={{fontSize: '24px'}}>GROUP DIRECTOR, GROUP MANAGING DIRECTOR OFFICE</h3>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="views-field views-field-body-1 container">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <p>Mike Chou graduated with a Bachelor’s Degree in Accounting from Systematic College, now known as SEGi University College, in 1999. Mike is also a qualified Chartered Accountant, gaining his qualification in 2001 from Malaysian Institute of Accountants.</p>
                                        <p>He started his career with an audit firm Khoo and Co. as one of the partners of the firm for 12 years. Subsequently he joined Bionas Corporation Berhad as Vice President for three years. Thereafter, he joined AE Multi Holdings Berhad in 2012 as their Financial Controller.</p>
                                        <p>Currently Mike is in charge of business development under ACE Investment Bank Limited with the main task of raising capital for private and public companies in Asia Pacific. He also provides strategic direction to portfolio companies, source for potential deals&nbsp;and focuses on bringing the latest innovation in impact investing to the market.</p>
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
                                <Link to="/discovery" onClick={scrollToTop} className="new-cta emphasize fw-bold"><span>VIEW ALL</span></Link>
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