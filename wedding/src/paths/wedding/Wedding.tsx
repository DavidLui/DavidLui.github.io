import * as React from 'react';
import './Wedding.css';
import Rsvp from './Rsvp';
import Faq from './Faq';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideCount = 11;

const getSlides = () => {
    const items = [];
    
    for (let i = 1; i < slideCount; i++) {
        items.push(
            <>
            <div className={`slide${i} slideshow`} key={i}>
            </div>
            </>
        );
    }

    return items;
};

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
    outline: 'none'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

const Wedding = () => {
    return (
        <div className='wedding-container'>
            <div id="0" className='offset' />
            <div className='welcome wedding-section noEvents'>
                <div className='text jd'>jamie</div>
                <div className='text2 jd'>+ david</div>
            </div>
            <div className="slide-container">
                <Slide 
                    slidesToScroll={1} 
                    slidesToShow={1}
                    {...properties}
                >
                    {getSlides()}
                </Slide>
                <span className='slide-notes'>Rebecca Ou Photography</span>
            </div>
            <div className='flex wedding-sec-small noEvents greyBack'>
                <div className='textSection'>
                    <div className='wedText'>WEDDING</div>
                    <div className='subText negMargin'>Friday, November 25, 2022</div>
                    <div className='mapDates'>5:00 PM</div>
                    <br></br>
                    <div className='smallText smallTextFormat'>Black Tie Optional</div>
                </div>
            </div>
            <div id="1" className='offset' />
            <div className='map wedding-section noEvents'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12097.219341367927!2d-74.04572392891446!3d40.7113054157943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250bc02608cff%3A0x6978a5bb8bdaca5c!2sMaritime%20Parc!5e0!3m2!1sen!2sus!4v1650158905537!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
                <div className='textSection mapText'>
                    <div className='marginAuto'>
                        <div className='wedText'>LET'S PARTY</div>
                        <div className='subText'>MARITIME PARC</div>
                        <div className='mapDates'>Liberty State Park, 84 Audrey Zapp Dr</div>
                        <div className='mapDates'>Jersey City, NJ 07305</div>
                    </div>
                </div>
            </div>
            <div id="2" className='offset' />
            <div className='fit-content noEvents greyBack'>
                <div className='textSection'>
                    <div className='wedText noEvents'>WEDDING PARTY</div>
                    <div className='flex spacedEvenly smallText'>
                        <div className='partyPic'>
                            <div>
                                <div className='sam portrait-img' />
                                <div>Sam Wang</div>
                                <div>Best Man</div>
                            </div>
                            <div>
                                <div className='evan portrait-img' />
                                <div>Evan Fischer</div>
                                <div>Groomsman</div>
                            </div>
                            <div>
                                <div className='will portrait-img' />
                                <div>William Santana</div>
                                <div>Groomsman</div>
                            </div>
                            <div>
                                <div className='tianyu portrait-img' />
                                <div>Tianyu Luo</div>
                                <div>Groomsman</div>
                            </div>
                            <div>
                                <div className='ben portrait-img' />
                                <div>Benson Long</div>
                                <div>Groomsman</div>
                            </div>
                            <div>
                                <div className='max portrait-img' />
                                <div>Max Deng</div>
                                <div>Groomsman</div>
                            </div>
                        </div>
                        <div className='partyPic'>
                            <div>
                                <div className='christine portrait-img' />
                                <div>Christine Kang</div>
                                <div>Maid of Honor</div>
                            </div>
                            <div>
                                <div className='justine portrait-img' />
                                <div>Justine Shann</div>
                                <div>Matron of Honor</div>
                            </div>
                            <div>
                                <div className='ada portrait-img' />
                                <div>Ada Chen</div>
                                <div>Bridesmaid</div>
                            </div>
                            <div>
                                <div className='amanda portrait-img' />
                                <div>Amanda Xue</div>
                                <div>Bridesmaid</div>
                            </div>
                            <div>
                                <div className='jen portrait-img' />
                                <div>Jen Tang</div>
                                <div>Bridesmaid</div>
                            </div>
                            <div>
                                <div className='monique portrait-img' />
                                <div>Monique Yen</div>
                                <div>Bridesmaid</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="3" className='offset' />
            <div className='flex wedding-sec-small'>
                <div className='textSection'>
                    <div className='wedText noEvents'>ACCOMODATIONS</div>
                    <p className='smallText smallTextFormat noEvents'>
                        Below are a few hotels nearby that are close to the venue and perfect if you plan on exploring the city during the weekend. <br></br>Feel free to reach out to us if you need any suggestions of of where to stay.
                    </p>
                    <div className='flex wrapCenter'>
                        <a className='linky' rel="noreferrer" target='_blank' href='https://www.marriott.com/en-us/hotels/ewrwj-the-westin-jersey-city-newport/overview/'>
                            <div className='card'>Westin New Port<br></br>479 Washington Blvd<br></br> Jersey City, NJ 07310
                            </div>
                        </a>
                        <a className='linky' rel="noreferrer" target='_blank' href='https://www.hilton.com/en/hotels/ewradpy-canopy-jersey-city-arts-district/'>
                            <div className='card'>Canopy by Hilton<br></br>159 Morgan St<br></br>Jersey City, NJ 07302
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="4" className='flex wedding-sec-small greyBack'>
                <div className='textSection'>
                    <div className='wedText noEvents'>REGISTRY</div>
                    <div className='flex wrapCenter'>
                        <a className='linky' rel="noreferrer" target='_blank' href='https://www.blueprintregistry.com/registry/jamie-so-wedding-registry-5-14-2022'>
                            <div className='card'>Blueprint</div>
                        </a>
                        <a className='linky' rel="noreferrer" target='_blank' href='https://www.amazon.com/wedding/jamie-so-david-lui--november-2022/registry/2LQSKN7C1M1OP'>
                            <div className='card'>Amazon</div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="6" className='rsvp offset'>
                <Rsvp />
            </div>
            <div id="5" className='greyBack offset' >
                <Faq />
            </div>
        </div >
    );
};

export default Wedding;
