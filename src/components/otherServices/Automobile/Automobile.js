import React from 'react';
import GetInTouchBanner from '../../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../../shared/HeaderContact/HeaderContact';
import ServicesBanner from '../../shared/ServicesBanner/ServicesBanner';

const Automobile = () => {
    return (
        <div className='automobile'>
            <section className='views-element-container block block-views block-views-blocksolution-page-lah-block-1 clearfix'>
                <div className='region region-content'>
                    <div className='form-group'>
                        <div className='view-content'>
                            <div className='view-row'>
                                {/* banner for small device */}
                                <div className="views-field views-field-field-billboard-image-mobile d-md-none d-sm-block">
                                    <div className="field-content img-fluid">  
                                        <img src="https://www.acegroup.com.my/sites/default/files/2020-12/marketing_billboard-%281%29-mobile_0.jpg" width="2045" height="1333" alt="" typeof="foaf:Image" className="img-fluid" />
                                    </div>
                                </div>

                                {/* banner for large device */}
                                <div className="views-field views-field-nothing">
                                    <span className="field-content">
                                        <div className="billboard"></div>
                                        <div className="billboard-center text-center d-lg-block d-none">
                                            <h1 className="marbotnone inner-title">Excellence.</h1>
                                            <p className="promoted-h1">
                                                Above Everything.
                                            </p>
                                        </div>
                                    </span>
                                </div>

                                {/* automobile info */}
                                <article className="views-field views-field-body container article">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <h1 className="d-lg-none text-center">Excellence.</h1>
                                        <h2 className="article title">Catering quality and excellence to automobile enthusiasts.</h2>
                                        <p>Powerful engine, smooth and quiet rides, exquisite interiors, and superior handling are what truly define the best automobiles in the world. At ACE EzDrive, we understand our clients’ goal to own the beauties that capture their hearts and minds, and we are here to help them achieve that goal by expertly navigating them through every option from our wide selection of some of the most sought-after automobile models. We specialise in providing our clients  automobiles that they desire.</p>
                                        <p>ACE EzDrive boasts a dedicated team of professionals equipped with knowledge and professionalism, as well as shared enthusiasm for supremely refined automobiles, to help our clients find exactly what they are looking for and create a thrilling shopping experience beyond their expectations. Through our reliable and quality customer service, we offer realistic advice and the best possible outcome for our clients, assisting them through the entire purchasing process, including financing, as well as after-sales services that include spare parts and maintenance. We also continuously gather feedback and information to ensure quality and excellence in everything we provide. These commitments are what ultimately build and strengthen the relationships with our clients.</p>
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

export default Automobile;