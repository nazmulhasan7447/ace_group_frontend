import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../customMethod/scrollToTop';
import './MainBanner.css';

const MainBanner = ({homeMainBanner}) => {
    return (
        <>
            {/* large view */}
            <div className="billboard d-md-block d-none" style={{ backgroundImage: `url(${homeMainBanner?.bg_img})` }}>
                <div className="billboard-center">
                    <h1 className="title header">{homeMainBanner?.title}</h1>
                    <h2 className="title description">{homeMainBanner?.sub_title}</h2>
                    <div className="cta-wrapper">
                        <Link to="/discovery" onClick={scrollToTop} className="new-cta white shadow"><span>DISCOVER ACE</span></Link>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className="billboard-mobile d-md-none" style={{ backgroundImage: `url(${homeMainBanner?.bg_img})` }}>
                <div className="billboard-center">
                    <h1 className="title header">{homeMainBanner?.title}</h1>
                    <p className="title description">{homeMainBanner?.sub_title}</p>
                    <div className="cta-wrapper shadow">
                        <Link to="/discovery" onClick={scrollToTop} className="new-cta white shadow"><span>DISCOVER ACE</span></Link>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default MainBanner;