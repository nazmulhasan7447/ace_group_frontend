/* eslint-disable react-hooks/exhaustive-deps */
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GetInTouchBanner from '../../shared/GetInTouchBanner/GetInTouchBanner';
import HeaderContact from '../../shared/HeaderContact/HeaderContact';
import Insights from '../../shared/Insights/Insights';

const InsightDetails = () => {
    const { id } = useParams();
    const [insightInfo, setInsightInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://walrus-app-vyzvh.ondigitalocean.app/api-insights/${id}`)
        .then(res => res.json())
        .then(result => {
            if(result?.id){
                const date = new Date(result?.added);
                const getDate = `${date?.getDate()} ${date?.toLocaleString('default', { month: 'long' })} ${date?.getFullYear()}`;
                setInsightInfo({...result, added: getDate});
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
        <div className='insightDetails'>
           <section className="views-element-container block block-views block-views-blockinsights-page-block-block-1 clearfix">
                <div className="form-group">
                    <div className="view view-insights-page-block view-id-insights_page_block view-display-id-block_1">
                        <div className="view-content">
                            <div className="views-row">
                                <div className="views-field views-field-title insights-header container">
                                    <div className="field-content offset-md-1 col-md-10">
                                        <span className="insights-info fw-bold">{insightInfo?.category?.category_name}, {insightInfo?.added}</span>
                                        <h1>{insightInfo?.title}</h1>
                                    </div>
                                </div>
                                <article className="views-field views-field-body container article insights-body">
                                    <div className="field-content offset-md-1 col-md-10 padbot9rem padtop9rem">
                                        {insightInfo?.content ? parse(insightInfo?.content) : ''}
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* contact info */}
            <HeaderContact />

            {/* insights */}
            <Insights />

            {/* get in touch banner */}
            <GetInTouchBanner />
        </div>
    );
};

export default InsightDetails;