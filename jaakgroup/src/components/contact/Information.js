import React from 'react';

function Information () {
    return (
            <section className='container infos'>
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li>Du Lundi au Vendredi de 9h00 – 19h / Samedi à 9h00 – 17h00</li>
                            <li>06 BP 2213 Carrefour Bidossessi, Abomey Calavi – BENIN</li>
                            <li>+229 95 53 77 77</li>
                            <li>+229 95 53 77 77</li>
                            <li>contact@jaakgroup.com</li>
                        </ul>
                        <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.904174705858!2d2.350803!3d6.4292302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c409ff4948ac304!2sJAAK%20Services%20SARL!5e0!3m2!1sen!2sbj!4v1598270776781!5m2!1sen!2sbj" 
                            width="550"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"/>
                        </div>
                    </div>

                    <div className='col-6'>
                        <ul>
                            <li>Ouvert 7 jours / 7 jours | 07h - 23h30</li>
                            <li>06 BP 2213 Fidjrosse Akogbato, Cotonou – BENIN</li>
                            <li>+229 97 69 33 33</li>
                            <li>+229 97 69 33 33</li>
                            <li>reservation@jaakgroup.com</li>
                        </ul>
                        <div className='mapConpany'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.876102913684!2d2.3707576698375963!3d6.365694426297669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023551bcbffeddd%3A0xefc7eb00e0f4ed2!2sJAAK%20RESIDENCE!5e0!3m2!1sen!2sbj!4v1598271190537!5m2!1sen!2sbj"
                            width="550"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"/>
                        </div>
                    </div>
                </div>
            </section>
        
    )
};

export default Information;