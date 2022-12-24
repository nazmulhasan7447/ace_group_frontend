import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../shared/customMethod/scrollToTop';
import GetInTouchBanner from '../../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../../shared/HeaderContact/HeaderContact';
import ServicesBanner from '../../shared/ServicesBanner/ServicesBanner';

const PicturesEntertainment = () => {
    return (
        <div className='picturesEntertainment'>
            <section className='views-element-container block block-views block-views-blocksolution-page-lah-block-1 clearfix'>
                <div className='region region-content'>
                    <div className='form-group'>
                        <div className='view-content'>
                            <div className='view-row'>
                                {/* banner for small device */}
                                <div className="views-field views-field-field-billboard-image-mobile d-md-none d-sm-block">
                                    <div className="field-content img-fluid">  
                                        <img src="https://www.acegroup.com.my/sites/default/files/2021-01/Contact2_25.jpg" width="2045" height="1333" alt="" typeof="foaf:Image" className="img-fluid" />
                                    </div>
                                </div>

                                {/* banner for large device */}
                                <div className="views-field views-field-nothing">
                                    <span className="field-content">
                                        <div className="billboard"></div>
                                        <div className="billboard-center text-center d-lg-block d-none">
                                            <h1 className="marbotnone inner-title">Passion.</h1>
                                            <p className="promoted-h1">
                                                Above Everything.
                                            </p>
                                        </div>
                                    </span>
                                </div>

                                {/* pictures and entertainment info */}
                                <article className="views-field views-field-body container article">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <h1 className="d-lg-none text-center">Passion.</h1>
                                        <h2 className="article title">Influencing the film industry on a local and global scale.</h2>
                                        <p>ACE Pictures Entertainment Sdn Bhd is a digital content producer involved in the financing, production, as well as acquisition and distribution of intellectual property rights of films.</p>
                                        <p>While established in Malaysia, ACE Pictures Entertainment’s footprint is not confined to the local market. ACE Pictures Entertainment understands the potential for movies to transcend cultural and language barriers in this information age, and aims to fulfil its global ambitions through ACE Pictures Entertainment Limited and ACE Pictures Entertainment LLC based in California, USA.</p>
                                        <p>ACE Pictures Entertainment’s competitive advantage lies in the strength of its human capital. It is helmed by executives from diverse cultures, with an eye for the elements that elevate filmmaking from entertainment to an art form. In addition, its connection with filmmakers and producers in the regional filmmaking industry affords ACE Pictures the opportunities to finance and participate in the potential success of productions in other regional countries. This also allows ACE Pictures to expand the reach of its intellectual property into the lucrative regional markets.</p>
                                        <p>Through production of entertainment products with potential for broad acceptance across countries and cultures, ACE Pictures aspires to bring the local filmmaking industry to the regional, and eventually the world-stage.</p>
                                        <p>
                                            Visit&nbsp;
                                            <Link to="/" onClick={scrollToTop}>
                                                <strong className='fw-bold'>ACE Pictures Entertainment</strong>
                                            </Link>
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

export default PicturesEntertainment;