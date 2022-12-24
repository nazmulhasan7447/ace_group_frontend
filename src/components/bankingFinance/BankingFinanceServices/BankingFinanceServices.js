/* eslint-disable react-hooks/exhaustive-deps */
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GetInTouchBanner from '../../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../../shared/HeaderContact/HeaderContact';
import ServicesBanner from '../../shared/ServicesBanner/ServicesBanner';

const BankingFinanceServices = () => {
    const { id } = useParams();
    const [bankingFinanceServiceInfo, setBankingFinanceServiceInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://walrus-app-vyzvh.ondigitalocean.app/api-service-details/${id}`)
        .then(res => res.json())
        .then(result => {
            if(result?.id){
                setBankingFinanceServiceInfo(result);
            } else{
                navigate('*');
            }
        })
        .catch(err => {
            if(err){
                navigate('*');
            }
        });
      }, [id])  

    return (
        <div className='bankingFinance'>
            <section className='views-element-container block block-views block-views-blocksolution-page-lah-block-1 clearfix'>
                <div className='region region-content'>
                    <div className='form-group'>
                        <div className='view-content'>
                            <div className='view-row'>
                                {/* banner for small device */}
                                <div className="views-field views-field-field-billboard-image-mobile d-md-none d-sm-block">
                                    <div className="field-content img-fluid">  
                                        <img src={bankingFinanceServiceInfo?.coverImg} width="2045" height="1333" alt="" typeof="foaf:Image" className="img-fluid" />
                                    </div>
                                </div>

                                {/* banner for large device */}
                                <div className="views-field views-field-nothing">
                                    <span className="field-content">
                                        <div className="billboard" style={{backgroundImage: `url(${bankingFinanceServiceInfo?.coverImg})`}}></div>
                                        <div className="billboard-center text-center d-lg-block d-none">
                                            <h2 className="inner-title">{bankingFinanceServiceInfo?.name}</h2>
                                            <p className="promoted-h1">
                                                {bankingFinanceServiceInfo?.title}<br/>Above Everything.
                                            </p>
                                        </div>
                                    </span>
                                </div>

                                {/* MoneyExchange info */}
                                <article className="views-field views-field-body container article">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        <h2 className="d-lg-none text-center">{bankingFinanceServiceInfo?.name}</h2>
                                        <h1 className="d-lg-none text-center">
                                            {bankingFinanceServiceInfo?.title}<br/>Above Everything.
                                        </h1>
                                        <h2 className="article title">{bankingFinanceServiceInfo?.sub_title}</h2>
                                        {bankingFinanceServiceInfo?.content? parse(bankingFinanceServiceInfo?.content) : ''}
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

export default BankingFinanceServices;