import React from 'react';
import GetInTouchBanner from '../../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../../shared/HeaderContact/HeaderContact';
import ServicesBanner from '../../shared/ServicesBanner/ServicesBanner';

const AcceleratorNetwork = () => {
    return (
        <div className='acceleratorNetwork'>
            <section className='views-element-container block block-views block-views-blocksolution-page-lah-block-1 clearfix'>
                <div className='region region-content'>
                    <div className='form-group'>
                        <div className='view-content'>
                            <div className='view-row'>
                                {/* banner for small device */}
                                <div className="views-field views-field-field-billboard-image-mobile d-md-none d-sm-block">
                                    <div className="field-content img-fluid">  
                                        <img src="https://www.acegroup.com.my/sites/default/files/2021-01/Contact2_27.jpg" width="2045" height="1333" alt="" typeof="foaf:Image" className="img-fluid" />
                                    </div>
                                </div>

                                {/* banner for large device */}
                                <div className="views-field views-field-nothing">
                                    <span className="field-content">
                                        <div className="billboard"></div>
                                        <div className="billboard-center text-center d-lg-block d-none">
                                            <h1 className="marbotnone inner-title">Protection.</h1>
                                            <p className="promoted-h1">
                                                Above Everything.
                                            </p>
                                        </div>
                                    </span>
                                </div>

                                {/* acceleratorNetwork info */}
                                <article className="views-field views-field-body container article">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <h1 className="d-lg-none text-center">Protection.</h1>
                                        <h2 className="article title">Empowering the future with innovative technology.</h2>
                                        <p>ACE Accelerator Network Sdn Bhd focuses on matters relating to cybersecurity. Cybersecurity is indeed a global issue and the deficit of cybersecurity talent is a challenge for every industry sector. It is therefore everyone’s responsibility to help close the global skills gap and equip cybersecurity professionals with the knowledge and guidance they need. The lack of specialized education and training has made the entire cybersecurity suffer. By increasing the diversity of the cybersecurity workforce we believe we will be able to create a broader pool of cybersecurity talent and to muster the right talent to develop rich responses to the increasing threat of cybersecurity attacks. </p>
                                        <p> <br /></p>
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

export default AcceleratorNetwork;