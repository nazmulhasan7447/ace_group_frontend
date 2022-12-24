import { size } from 'lodash';
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AppContext } from '../../../App';
import { scrollToTop } from '../customMethod/scrollToTop';

const Navbar = () => {
    const { contextData } = useContext(AppContext);
    const {pathname} = useLocation();
    const [navbarAnimation, setNavbarAnimation] = useState(false);
    const [activeList, setActiveList] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState({});
    const [showSmallDeviceMenu, setShowSmallDeviceMenu] = useState({});

    const changeBackground = () => {
        if(window.scrollY >= 30) {
            setNavbarAnimation(true);
        }
        else{
            setNavbarAnimation(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const handleMouseOver  = (value) => {
        setShowSubMenu({ [value]: true});
    }
    const handleMouseOut = (value) => {
        setShowSubMenu({[value]: false});
    }
    const handleSmallDeviceMenu = (value) => {
        setShowSmallDeviceMenu({ [value]: true});
    }

    return (
       <header className={`navbar navbar-default ${navbarAnimation ? 'invert' : ''}`} id="navbar">
        <div className="container">
            <div className='navbar-header'>
                <div className='region region-navigation'>
                    <div className="navi-left"> </div>
                    <div className="navi-center">
                        <Link to="/" onClick={scrollToTop} className={`logo navbar-btn ${activeList ? 'overlay' : ''}`}>
                            {(pathname === '/' || pathname.includes('/contact')) && (
                                <img src={contextData?.logos?.logoV1} alt="Home" className='home-icon-white' />
                            )}
                            <img src={contextData?.logos?.logoV2} alt="Home" className={`${(pathname === '/' || pathname.includes('/contact')) && 'home-icon-blue'}`} />
                        </Link>
                    </div>
                    <div className="navi-right">
                        <div className={`navbar-burger ${activeList ? 'overlay' : ''}`} onClick={() => setActiveList(!activeList)}>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </div>
                    </div>
                </div>
                <div className={`navigation-overlay ${activeList ? 'active' : ''}`}>
                    {/* large device */}
                    <div className='d-md-block d-none'>
                        <div className="row">
                            <div className="menu-left">
                                <ul>
                                    <li data-submenu="discover" className={`${activeList && 'fade-in'} ${showSubMenu?.discover ? 'active' : ''}`} onMouseOver={ () => handleMouseOver ('discover')} onMouseOut={ () => handleMouseOut('discover')} style={{transitionDelay: activeList ? '0.5s' : '0.4s'}}>
                                        <Link to="#"><span>Discover</span></Link>
                                    </li>
                                    <li data-submenu="banking" className={`${activeList && 'fade-in'} ${showSubMenu?.banking ? 'active' : ''}`} onMouseOver={ () => handleMouseOver ('banking')} onMouseOut={ () => handleMouseOut('banking')} style={{transitionDelay: activeList ? '0.6s' : '0.3s'}}>
                                        <Link to="#"><span>Banking &amp; Finance</span></Link>
                                    </li>
                                    <li data-submenu="other" className={`${activeList && 'fade-in'} ${showSubMenu?.otherServices ? 'active' : ''}`} onMouseOver={ () => handleMouseOver ('otherServices')} onMouseOut={ () => handleMouseOut('otherServices')} style={{transitionDelay: activeList ? '0.7s' : '0.2s'}}>
                                        <Link to="#"><span>Other Services</span></Link>
                                    </li>
                                    <li className={`${activeList && 'fade-in'}`} style={{transitionDelay: activeList ? '0.8s' : '0.1s'}}>
                                        <HashLink onClick={() => setActiveList(false)} to="/insights"><span>Insights</span></HashLink>
                                    </li>
                                    <li className={`${activeList && 'fade-in'}`} style={{transitionDelay: activeList ? '0.8s' : '0s'}}>
                                        <HashLink onClick={() => setActiveList(false)} to="/contact"><span>Contact</span></HashLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-right">
                                <ul data-parentmenu="discover" className={`${showSubMenu?.discover ? 'show': ""}`} onMouseOver={ () => handleMouseOver ('discover')} onMouseOut={ () => handleMouseOut ('discover')}>
                                    <li>
                                        <Link to="/" className="menu-back">&lt; Back</Link>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/discovery#top">
                                            <span>Corporate Video</span>
                                        </HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/discovery#strength">
                                            <span>Strength</span>
                                        </HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/discovery#responsibility">
                                            <span>Responsibility</span>
                                        </HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/discovery#exports">
                                            <span>Leading Experts</span>
                                        </HashLink>
                                    </li>
                                </ul>
                                <ul data-parentmenu="banking" className={`${showSubMenu?.banking ? 'show': ""}`} onMouseOver={ () => handleMouseOver ('banking')} onMouseOut={ () => handleMouseOut ('banking')}>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/investment-bank"><span>Investment Bank</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/holdings"><span>Holdings</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/money-exchange"><span>Money Exchange</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/leasing"><span>Leasing</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/credit"><span>Credit</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/capital-management"><span>Capital Management</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/private-equity"><span>Private Equity</span></HashLink>
                                    </li>
                                </ul>
                                <ul data-parentmenu="other" className={`${showSubMenu?.otherServices ? 'show': ""}`} onMouseOver={ () => handleMouseOver ('otherServices')} onMouseOut={ () => handleMouseOut ('otherServices')}>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/corporation"><span>Corporation</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/asiacyberx"><span>Asiacyberx</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/accelerator-network"><span>Accelerator Network</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/automobile"><span>EzDrive</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/pictures-entertainment"><span>Pictures Entertainment</span></HashLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* small device */}
                    <div className='d-md-none'>
                        <div className={`row ${size(showSmallDeviceMenu) ? 'showsub' : ''}`}>
                            <div className="menu-left">
                                <ul>
                                    <li data-submenu="discover" className={`${activeList && 'fade-in'} ${showSmallDeviceMenu?.discover ? 'active' : ''}`} onClick={ () => handleSmallDeviceMenu ('discover')} style={{transitionDelay: activeList ? '0.5s' : '0.4s'}}>
                                        <Link to="#"><span>Discover</span></Link>
                                    </li>
                                    <li data-submenu="banking" className={`${activeList && 'fade-in'} ${showSmallDeviceMenu?.banking ? 'active' : ''}`} onClick={ () => handleSmallDeviceMenu ('banking')} style={{transitionDelay: activeList ? '0.6s' : '0.3s'}}>
                                        <Link to="#"><span>Banking &amp; Finance</span></Link>
                                    </li>
                                    <li data-submenu="other" className={`${activeList && 'fade-in'} ${showSmallDeviceMenu?.otherServices ? 'active' : ''}`} onClick={ () => handleSmallDeviceMenu ('otherServices')} style={{transitionDelay: activeList ? '0.7s' : '0.2s'}}>
                                        <Link to="#"><span>Other Services</span></Link>
                                    </li>
                                    <li className={`${activeList && 'fade-in'}`} style={{transitionDelay: activeList ? '0.8s' : '0.1s'}}>
                                        <HashLink onClick={() => setActiveList(false)} to="/insights"><span>Insights</span></HashLink>
                                    </li>
                                    <li className={`${activeList && 'fade-in'}`} style={{transitionDelay: activeList ? '0.8s' : '0s'}}>
                                        <HashLink onClick={() => setActiveList(false)} to="/contact"><span>Contact</span></HashLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-right">
                                <ul data-parentmenu="discover" className={`${showSmallDeviceMenu?.discover ? 'active': ""}`}>
                                    <li>
                                        <Link to="#" className="menu-back" onClick={() => setShowSmallDeviceMenu({})}>&lt; Back</Link>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/discovery#top">
                                            <span>Corporate Video</span>
                                        </HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/discovery#strength">
                                            <span>Strength</span>
                                        </HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/discovery#responsibility">
                                            <span>Responsibility</span>
                                        </HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/discovery#exports">
                                            <span>Leading Experts</span>
                                        </HashLink>
                                    </li>
                                </ul>
                                <ul data-parentmenu="banking" className={`${showSmallDeviceMenu?.banking ? 'active': ""}`}>
                                    <li>
                                        <Link to="#"className="menu-back" onClick={() => setShowSmallDeviceMenu({})}>&lt; Back</Link>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/investment-bank"><span>Investment Bank</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/holdings"><span>Holdings</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/money-exchange"><span>Money Exchange</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/leasing"><span>Leasing</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/credit"><span>Credit</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/capital-management"><span>Capital Management</span></HashLink>
                                    </li>
                                    <li>
                                        <HashLink onClick={() => setActiveList(false)} to="/services/private-equity"><span>Private Equity</span></HashLink>
                                    </li>
                                </ul>
                                <ul data-parentmenu="other" className={`${showSmallDeviceMenu?.otherServices ? 'active': ""}`}>
                                    <li>
                                        <Link to="#" className="menu-back" onClick={() => setShowSmallDeviceMenu({})}>&lt; Back</Link>
                                    </li>
                                    <li>
                                         <HashLink onClick={() => setActiveList(false)} to="/services/corporation"><span>Corporation</span></HashLink>
                                    </li>
                                    <li>
                                         <HashLink onClick={() => setActiveList(false)} to="/services/asiacyberx"><span>Asiacyberx</span></HashLink>
                                    </li>
                                    <li>
                                         <HashLink onClick={() => setActiveList(false)} to="/services/accelerator-network"><span>Accelerator Network</span></HashLink>
                                    </li>
                                    <li>
                                         <HashLink onClick={() => setActiveList(false)} to="/services/automobile"><span>EzDrive</span></HashLink>
                                    </li>
                                    <li>
                                         <HashLink onClick={() => setActiveList(false)} to="/services/pictures-entertainment"><span>Pictures Entertainment</span></HashLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
       </header>
    );
};

export default Navbar;