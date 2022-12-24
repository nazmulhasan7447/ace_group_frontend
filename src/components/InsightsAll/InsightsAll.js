import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../shared/customMethod/scrollToTop';

const InsightsAll = () => {
    const [insights, setInsights] = useState([]);
    const [visible, setVisible] = useState(6);
    const allInsights = insights?.slice(0, visible);

    useEffect(() => {
        fetch('https://walrus-app-vyzvh.ondigitalocean.app/api-insights/')
        .then(res => res.json())
        .then(result => {
            if(result?.length){
                setInsights(result);
            }
        })
        .catch(err => console.error(err));
      }, [])  

    const ViewNextInsights = () => {
        setVisible(prev => prev + 6);
    };

    const ViewPrevInsights = () => {
        setVisible(prev => prev - 6);
    };
      
    return (
        <>
           <div className='region region-content'>
                <div className='views-element-container form-group'>
                    <div className='insights view view-insights view-id-insights'>
                        {/* header */}
                        <div className="view-header">
                            <div className="billboard">
                            </div>
                            <div className="container billboard-center text-center">
                                <h1>INSIGHTS</h1>
                                <p> </p>
                            </div>
                        </div>

                        {/* content */}
                        <div className="view-content">
                            <div className="container insights-list">
                                <ul>
                                    {allInsights?.map(item => {
                                        
                                        return (
                                            <li key={item?.id} style={{marginBottom: '20px'}}>
                                                <div className="views-field views-field-field-insight-category">
                                                <div className="field-content">{item?.category?.category_name}</div>
                                                </div>
                                                <div className="views-field views-field-title">
                                                <h3 className="field-content"><Link to={`/insights/${item?.id}`} onClick={scrollToTop} hrefLang="en">{item?.title}</Link></h3>
                                                </div>
                                                <div className="views-field views-field-body">
                                                <div className="field-content">
                                                    <p>{item?.content_for_list?.slice(0, 132)}...</p>
                                                </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        {/* pagination */}
                        <nav role="navigation" aria-labelledby="pagination-heading">
                            <ul className="pager js-pager__items">
                                {allInsights?.length > 6 ?
                                    <li className="previous">
                                        <button title="Go to previous page" rel="prev" onClick={ViewPrevInsights}>
                                            <span aria-hidden="true">‹ Previous</span>
                                        </button>
                                    </li>
                                    : ""
                                }
                                {insights?.length && visible === allInsights?.length ? 
                                    <li className="next">
                                        <button title="Go to next page" rel="next" onClick={ViewNextInsights}>
                                            <span aria-hidden="true">Next ›</span>
                                        </button>
                                    </li>
                                    : ""
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
           </div>
        </>
    );
};

export default InsightsAll;