import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



function Naviguation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid header">
                <Link className="navbar-brand" to="/">LOGO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav  mx-auto">
                        <NavLink className="nav-link" aria-current="page" to="/accueil">ACCUEIL</NavLink>
                        <NavLink className="nav-link" to="/services">JAAK SERVICES</NavLink>
                        <NavLink className="nav-link" to="/residence">JAAK RÉSIDENCE</NavLink>
                        <NavLink className="nav-link" to="/about">À PROPOS</NavLink>
                        <NavLink className="nav-link" to="/contact">CONTACT</NavLink> 
                    </div>
                </div>
                <div>
                  <Link  style={{color: "white"}} to='' ><FaFacebook /></Link> | <Link  style={{color: "white"}} to='' ><FaInstagram /></Link>
                </div>
            </div>
        </nav>
    )
};

export default Naviguation;