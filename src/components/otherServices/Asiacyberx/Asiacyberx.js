import React from 'react';
import GetInTouchBanner from '../../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../../shared/HeaderContact/HeaderContact';
import ServicesBanner from '../../shared/ServicesBanner/ServicesBanner';

const Asiacyberx = () => {
    return (
        <div className='asiacyberx'>
            <section className='views-element-container block block-views block-views-blocksolution-page-lah-block-1 clearfix'>
                <div className='region region-content'>
                    <div className='form-group'>
                        <div className='view-content'>
                            <div className='view-row'>
                                {/* banner for small device */}
                                <div className="views-field views-field-field-billboard-image-mobile d-md-none d-sm-block">
                                    <div className="field-content img-fluid">  
                                        <img src="https://www.acegroup.com.my/sites/default/files/2020-09/1c_5.jpg" width="2045" height="1333" alt="" typeof="foaf:Image" className="img-fluid" />
                                    </div>
                                </div>

                                {/* banner for large device */}
                                <div className="views-field views-field-nothing">
                                    <span className="field-content">
                                        <div className="billboard"></div>
                                        <div className="billboard-center text-center d-lg-block d-none">
                                            <h1 className="marbotnone inner-title">ELEVATION.</h1>
                                            <p className="promoted-h1">
                                                Above Everything.
                                            </p>
                                        </div>
                                    </span>
                                </div>

                                {/* asiacyberx info */}
                                <article className="views-field views-field-body container article">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <h1 className="d-lg-none text-center">ELEVATION.</h1>
                                        <h2 className="article title">Nurturing talents and providing cybersecurity solutions.</h2>
                                        <p>
                                            Asia Cybersecurity Exchange, also known as ASIACYBERX aims to create cybersecurity hubs in the world and to grow all of our talents into world-class players, offering a new level of cybersecurity expertise to organisations worldwide. 
                                            <br /> <br />
                                            We believe that cybersecurity is indeed a global issue and the deficit of cybersecurity talent is a challenge for every industry sector. It is therefore everyone’s responsibility to help close the global skills gap and equip cybersecurity professionals and community with the knowledge and guidance they need.
                                            <br /> &nbsp;
                                        </p>
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

export default Asiacyberx;