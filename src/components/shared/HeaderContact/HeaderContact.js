import React, { useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
import './HeaderContact.css';

const HeaderContact = () => {
    const [contactInfo, setContactInfo] = useState({});

    useEffect(() => {
        fetch(`https://walrus-app-vyzvh.ondigitalocean.app/api-contact-info/`)
        .then(res => res.json())
        .then(result => {
            if(result?.id){
                setContactInfo(result);
            }
        })
        .catch(err => console.error(err));
      }, [])  

    return (
        <section className='block block-block-content block-block-contentbf1ec91c-4096-48a1-b5c9-de5991c7db13 clearfix'>
            <div className="layout layout--onecol">
                <div className="layout__region layout__region--content">
                
                    <div className="field field--name-body field--type-text-with-summary field--label-hidden field--item">
                        <div className="container">
                            <div className="breaker-contact">
                                <ul className="list-inline">
                                    <li>CONTACT INFORMATION:</li>
                                    <li className='contact-email-icon'>
                                        <MdEmail />
                                    </li>
                                    <li><a href={`mailto:${contactInfo?.email}`} target="_blank" rel="noreferrer">EMAIL US</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderContact;