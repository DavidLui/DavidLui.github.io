import * as React from 'react';
import Planning from './../imgs/homepage/planning.jpg';
import Design from './../imgs/homepage/design.jpg';
import Florals from './../imgs/homepage/florals.jpg';

const Home = () => {
    return (
        <div className="grid-container">
            <div className="column">
                <figure className="effect-sarah">
                    <img src={Planning} />
                    <figcaption>
                        <div>
                            <h2><span>PLANNING</span></h2>
                            <p>Venue & Vendor Coordination</p>
                            <p>Planning & Scheduling</p>
                            <p>Day Of Coordination</p>
                            <div className="credits">Priscilla Choi Photography</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div className="column">
                <figure className="effect-sarah">
                    <img src={Design} />
                    <figcaption>
                        <div>
                            <h2><span>DESIGN</span></h2>
                            <p>Event Design & Styling</p>
                            <p>Research</p>
                            <p>Purchasing</p>
                            <p>Decorations</p>
                            <p>Decor Setup</p>
                            <div className="credits">L.C. Allison Photography</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div className="column">
                <figure className="effect-sarah">
                    <img src={Florals} />
                    <figcaption>
                        <div>
                            <h2><span>FLORALS</span></h2>
                            <p>Bouquets</p>
                            <p>Boutonnieres</p>
                            <p>Parent Bouquets</p>
                            <p>Altar Installations</p>
                            <p>Ceremony Decor</p>
                            <p>Reception Decor</p>
                            <p>Centerpieces</p>
                            <div className="credits">Brittany Jean Photography</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Home;
