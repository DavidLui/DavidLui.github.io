import * as React from 'react';
import Planning from './../imgs/homepage/planning.jpg';
import Design from './../imgs/homepage/design.jpg';
import Florals from './../imgs/homepage/florals.jpg';
import Gallery from './Gallery.tsx';
import About from './About';
import Contact from './Contact';

const Home = () => {
    const getHome = () => {
        return (
            <>
                <a className="anchor" id="home"></a>
                <div className="grid-container">
                    <div className="column">
                        <figure className="effect-sarah hover">
                            <img alt="planning" src={Planning} />
                            <figcaption>
                                <div>
                                    <h2><span>PLANNING</span></h2>
                                    <p>Venue & Vendor Coordination</p>
                                    <p>Planning & Scheduling</p>
                                    <p>Day Of Coordination</p>
                                    <div className="credits">Priscilla Choi Photography</div>
                                </div>
                            </figcaption>

                            {/* <figcaption2><button>Planning</button></figcaption2> */}
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="effect-sarah">
                            <img alt="design" src={Design} />
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
                            <img alt="florals" src={Florals} />
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
            </>
        );
    };

    const getGallery = () => {
        return (
            <>
                <a className="anchor" id="gallery"></a>
                <div className='home_header gallery'>
                    <h2 className='home_title'></h2>
                </div>
                <Gallery />
            </>
        );
    };

    const getAbout = () => {
        return (
            <>
                <a className="anchor" id="about"></a>
                <div id='about' className='home_header about'>
                    <h2 className='home_title'></h2>
                </div>
                <About />
            </>
        );
    };

    const getContact = () => {
        return (
            <>
                <a className="anchor" id="contact"></a>
                <div id='contact' className='home_header contact'>
                    <h2 className='home_title'></h2>
                </div>
                <Contact />
            </>
        );
    };

    return (
        <>
            {getHome()}
            {getAbout()}

            {/* {getGallery()} */}
            {getContact()}
        </>
    );
};

export default Home;
