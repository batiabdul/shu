import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Motto from './Motto';
import Naviguation from './Naviguation';
import Accueil from './Accueil';
import Services from './Services';
import Residence from './Residence';
import About from './About';
import Contact from './Contact';
import Error from './Error';

function Header () {
    return (
        <BrowserRouter>
            <Motto />
            <Naviguation />
                <Switch>
                    <Route exact path='/' component={Accueil} />
                    <Route exact path='/accueil' component={Accueil} />
                    <Route exact path='/services' component={Services} />
                    <Route exact path='/residence' component={Residence} />
                    <Route exact path='/about' component={About} />
                    <Route strict path='/contact' component={Contact} />
                    <Route exact component={Error} />
                </Switch>
        </BrowserRouter>
    )
};

export default Header;