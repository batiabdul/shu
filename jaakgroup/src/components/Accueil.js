import React from 'react';
import Banners from './accueil/Banners'
import Context from './accueil/Context'
import Companies from './accueil/Companies'

const Accueil = () => {
    return (
            <div>
                <Banners />
                <Context />
                <Companies />
            </div> 
    )
};

export default Accueil;