import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../customMethod/scrollToTop';

const PeopleCard = () => {
    return (
        <div className="view-content">
            <div className="row">
                <div className="col-12 col-md-4 mb-2">
                    <div className="card draggable h-100">
                        <div className='views-field views-field-title'></div>
                            <h3 className="card1 title">
                                <Link to="/people/y-bhg-tan-sri-dato-seri-dr-ting-chew-peh" onClick={scrollToTop}>YBHG. TAN SRI DATO' SERI DR TING CHEW PEH</Link>
                            </h3>
                        <div className='views-field views-field-field-billboard-description'>
                            <p className="card1 subtitle">GROUP CHAIRMAN</p>
                        </div> 
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-2">
                    <div className="card draggable h-100">
                        <div className='views-field views-field-title'>
                            <h3 className="card1 title">
                                <Link to="/people/annie-chang" onClick={scrollToTop}>TAN BOON YEE, ALEXIS</Link>
                            </h3>
                        </div>
                        <div className='views-field views-field-field-billboard-description'>
                            <p className="card1 subtitle">GROUP DIRECTOR, OPERATIONS & RISK MANAGEMENT</p>
                        </div>  
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-2">
                    <div className="card draggable h-100">
                        <div className='views-field views-field-title'></div>
                         <h3 className="card1 title">
                            <Link to="/people/y-bhg-tan-sri-dato-seri-dr-ting-chew-peh" onClick={scrollToTop}>YBHG. TAN SRI DATO' SERI DR TING CHEW PEH</Link>
                        </h3>
                        <div className='views-field views-field-field-billboard-description'>
                            <p className="card1 subtitle">GROUP CHAIRMAN</p>
                        </div> 
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-2">
                    <div className="card draggable h-100">
                        <div className='views-field views-field-title'>
                            <h3 className="card1 title">
                                <Link to="/people/annie-chang" onClick={scrollToTop}>TAN BOON YEE, ALEXIS</Link>
                            </h3>
                        </div>
                        <div className='views-field views-field-field-billboard-description'>
                            <p className="card1 subtitle">GROUP DIRECTOR, OPERATIONS & RISK MANAGEMENT</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleCard;