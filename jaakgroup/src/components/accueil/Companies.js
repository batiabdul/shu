import React from 'react';
import { Link } from 'react-router-dom';

function Companies () {
    return (
        <section className='bg-dark'>
            <div className='container'>
                    <div className='row'>
                        <div className="col-6">
                            <div className="hov-img-zoom pos-relative">
                                IAMGE
                                <div className="">
                                    <h3 className="l-text1 fs-35-sm">JAAK SERVICES</h3>
                                    <Link className="nav-link" to="/services" className="s-text4 hov2 p-t-20 "> En savoir plus</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="hov-img-zoom pos-relative">
                                IAMGE
                                <div className="">
                                    <h3 className="l-text1 fs-35-sm">JAAK RESIDENCE</h3>
                                    <Link className="nav-link" to="/residence" className="s-text4 hov2 p-t-20 "> En savoir plus</Link>
                                </div>
                            </div>
                        </div>
				    </div>
            </div>
        </section>
    )
};

export default Companies;

