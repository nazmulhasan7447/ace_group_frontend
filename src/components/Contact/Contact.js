import React from 'react';
import { FaEnvelope, FaFax } from "react-icons/fa";
import { GoGlobe } from 'react-icons/go';
import { IoIosPhonePortrait } from "react-icons/io";
import { Link } from 'react-router-dom';
import { scrollToTop } from '../shared/customMethod/scrollToTop';
import GetInTouchBanner from '../shared/GetInTouchBanner/GetInTouchBanner';

const Contact = () => {
    return (
        <section>
            <div className="contact region region-content">
                <div data-drupal-messages-fallback="" className="hidden">
                </div>
                <div className="views-element-container form-group">
                    <div className="contact-page view view-contact-page view-id-contact_page view-display-id-page_1">
                        <div className="view-content">
                            <div className="views-row">
                                {/* mobile view */}
                                <div className="views-field views-field-field-billboard-image-mobile d-md-none">
                                    <div className="field-content img-fluid">  
                                        <img src="https://www.acegroup.com.my/sites/default/files/2021-01/Contact2.jpg" width="2045" height="1333" alt="" typeof="foaf:Image" className="img-fluid"/>
                                    </div>
                                </div>
                                {/* desktop view */}
                                <div className="views-field views-field-field-billboard-description">
                                    <div className="field-content">
                                        <div className="billboard" style={{ backgroundImage: "url('https://www.acegroup.com.my/sites/default/files/2021-01/Contact.jpg')" }}></div>
                                        <div className="container billboard-center text-center">
                                            <h1 style={{fontWeight: 500}}>Contact</h1>
                                            <p> <strong style={{fontWeight: 700}}>DO REACH US IF YOU HAVE ANY ENQUIRIES.</strong> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="views-field views-field-field-billboard-image-1">
                                    <div className="field-content"></div>
                                </div>
                                <div className="views-field views-field-field-contact contact-form">
                                    <div className="field-content container">
                                        <form className="webform-submission-form webform-submission-add-form webform-submission-contact-form webform-submission-contact-add-form webform-submission-contact-node-2-form webform-submission-contact-node-2-add-form js-webform-submit-once">
                                            <div className="webform-elements form-group js-form-wrapper form-wrapper">
                                            <div className="text-center article body form-item js-form-item form-type-webform-markup form-item-form-intro-text form-no-label form-group">
                                                <p><strong style={{fontWeight: 500}}>We will certainly get back to you promptly during business hours.</strong></p>
                                            </div>
                                            <div className="row form-wrapper form-group js-form-wrapper form-wrapper">
                                                <div className="col-sm-6 form-group js-form-wrapper form-wrapper">
                                                    <div className="form-item js-form-item form-type-textfield form-no-label form-group">
                                                        <label htmlFor="edit-name" className="control-label sr-only js-form-required form-required"/>
                                                        <input className="form-text required form-control" type="text" id="edit-name" name="name" defaultValue="" size="60" maxLength="255" placeholder="Your Name" required="required" aria-required="true"/>
                                                    </div>
                                                    <div className="form-item js-form-item form-type-email form-item-email form-no-label form-group">
                                                        <label htmlFor="edit-email" className="control-label form-required"/>
                                                        <input data-drupal-selector="edit-email" className="form-email required form-control" type="email" id="edit-email" name="email" defaultValue="" size="60" maxLength="254" placeholder="Your Email" required="required" aria-required="true"/>
                                                    </div>
                                                    <div className="form-item form-type-textfield form-item-your-company js-form-item-your-company form-no-label form-group">
                                                        <label htmlFor="edit-your-company" className="control-label sr-only js-form-required form-required"/>
                                                        <input className="form-text required form-control" type="text" id="edit-your-company" name="your_company" defaultValue="" size="60" maxLength="255" placeholder="Your Company" required="required" aria-required="true"/>
                                                    </div>
                                                    <div className="form-item js-form-item form-type-select form-item-select-an-ace-group-company form-no-label form-group">
                                                        <label htmlFor="edit-select-an-ace-group-company" className="control-label sr-only form-required"/>
                                                        <div className="select-wrapper">
                                                        <select className="form-select required form-control" name="select_an_ace_group_company" required="required" aria-required="true">
                                                            <option defaultValue="">Select An ACE Group Company</option>
                                                            <option defaultValue="ACE Investment Bank Limited">ACE Investment Bank Limited</option>
                                                            <option defaultValue="ACE Holdings Berhad">ACE Holdings Berhad</option>
                                                            <option defaultValue="ACE Money Exchange Sdn Bhd ">ACE Money Exchange Sdn Bhd </option>
                                                            <option defaultValue="ACE Worldwide Leasing Sdn Bhd">ACE Worldwide Leasing Sdn Bhd</option>
                                                            <option defaultValue="ACE Credit (M) Sdn Bhd">ACE Credit (M) Sdn Bhd</option>
                                                            <option defaultValue="ACE Capital Management Sdn Bhd">ACE Capital Management Sdn Bhd</option>
                                                            <option defaultValue="ACE Private Equity Sdn Bhd">ACE Private Equity Sdn Bhd</option>
                                                            <option defaultValue="ACE Asiacyberx Sdn Bhd ">ACE Asiacyberx Sdn Bhd </option>
                                                            <option defaultValue="ACE Corporation (M) Sdn Bhd">ACE Corporation (M) Sdn Bhd</option>
                                                            <option defaultValue="ACE Accelerator Network Sdn Bhd">ACE Accelerator Network Sdn Bhd</option>
                                                            <option defaultValue="ACE Automobile Sdn Bhd">ACE Automobile Sdn Bhd</option>
                                                            <option defaultValue="ACE Media Network Sdn Bhd">ACE Media Network Sdn Bhd</option>
                                                            <option defaultValue="ACE Pictures Entertainment Sdn Bhd">ACE Pictures Entertainment Sdn Bhd</option>
                                                            <option defaultValue="ACE Worldwide Property Sdn Bhd">ACE Worldwide Property Sdn Bhd</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 form-group form-wrapper">
                                                    <div className="form-item form-type-textfield form-item-subject form-no-label form-group">
                                                        <label htmlFor="edit-subject" className="control-label sr-only js-form-required form-required"/>
                                                        <input className="form-text required form-control" type="text" id="edit-subject" name="subject" defaultValue="" size="60" maxLength="255" placeholder="Write Subject Title" required="required" aria-required="true"/>
                                                    </div>
                                                    <div className="form-item form-type-textarea form-item-message form-no-label">
                                                        <label htmlFor="edit-message" className="control-label sr-only js-form-required form-required"/>
                                                        <div className="form-textarea-wrapper">
                                                        <textarea  className="form-textarea required form-control resize-vertical" id="edit-message" name="message" rows={5} cols={5}placeholder="Write Your Message" required="required" aria-required="true" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 form-group form-wrapper" >
                                                   {/* for google captcha */}
                                                </div>
                                            </div>
                                            <div className="form-actions webform-actions form-group form-wrapper" id="edit-actions"
                                            >
                                                    <button className="webform-button--submit button button--primary js-form-submit form-submit btn-primary btn" type="submit" id="edit-actions-submit" name="op" defaultValue="Send message">Send message
                                                </button>
                                            </div>
                                            </div>
                                            <input autoComplete="chrome-off-82899862" type="hidden" name="form_build_id" defaultValue="form-A12OsrzWE8EYMdiWA96E3yJAjd6QyacZ5RqSkI82B7s" />
                                            <input type="hidden" name="form_id" defaultValue="webform_submission_contact_node_2_add_form" />
                                        </form>
                                    </div>
                                </div>
                                <div className="views-field views-field-body container borderbottom">
                                    <div className="field-content col-md-8 offset-md-2 pad9rem contactinfo">
                                       <div className='row'>
                                            <div className="col-sm-5">
                                                <h2 className="text-left mb-10px">CONTACT INFORMATION:</h2>
                                                <dl className="dl-horizontal card1 description">
                                                <dt>
                                                    <IoIosPhonePortrait />
                                                </dt>
                                                <dd>
                                                    <p>+603 2636 9999</p>
                                                </dd>
                                                <dt>
                                                    <FaFax />
                                                </dt>
                                                <dd>
                                                    <p>+603 2636 3333</p>
                                                </dd>
                                                <dt>
                                                    <FaEnvelope />
                                                </dt>
                                                <dd><a href="mailto:info@test.com">info@test.com</a></dd>
                                                <dt>
                                                    <GoGlobe />
                                                </dt>
                                                <dd><Link to="/" onClick={scrollToTop}>www.test.com</Link></dd>
                                                </dl>
                                            </div>
                                            <div className="col-sm-7 card1 description">
                                                <h2 className="text-left mb-10px">ACE GROUP CORPORATE HEAD OFFICE:</h2>
                                                <p>
                                                    <strong>ACE Tower</strong><br/>
                                                BO2-B, Menara 3,&nbsp;<br/>
                                                No. 3, Jalan Bangsar,&nbsp;KL Eco City,<br/>
                                                59200&nbsp;Kuala Lumpur,&nbsp;Malaysia.<br/>
                                                <br/>
                                                &nbsp;
                                                </p>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* back to top banner */}
                <GetInTouchBanner />
            </div>
        </section>
    );
};

export default Contact;