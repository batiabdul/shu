import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Naviguation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">LOGO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav  ml-auto">
                        <NavLink className="nav-link" aria-current="page" to="/accueil">Accueil</NavLink>
                        <Link className="nav-link" to="/services">JAAK Services</Link>
                        <Link className="nav-link" to="/residence">JAAK Residence</Link>
                        <Link className="nav-link" to="/about">A propos</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        
                    </div>
                    <div>Social Media</div>
                </div>
            </div>
        </nav>
    )
};

export default Naviguation;