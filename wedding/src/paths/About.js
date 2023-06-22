import * as React from 'react';
import Jamie from '../imgs/logos/Jamie.jpg';
import Justine from '../imgs/logos/justine2.jpg';
import Jen from '../imgs/logos/jen.jpg';

const About = () => {
    return (
        <div class="row-about">
            <div class="about">
                <div class="column-about left">
                    <img src={Jamie} alt='Jamie' />
                    <div class="credits">Photography // L.C. Allison Photography</div>
                </div>
                <div class="column-about right">
                    <p>
                        <span class='gar'>Hey, I’m Jamie</span> and I’m here to be your bridal (or event!) bestie.
                        Working with me means that not only does your big day proceed as smoothly as possible, but also
                        the days, weeks, and months leading up to it! Need an opinion of which cursive font to use for
                        your menu, or stuck between which shade of ivory to choose for your napkins? I’m your girl.
                        Managing details, schedules, and multiple moving parts of a project are things that I’ve
                        mastered after countless events and clients, and we’re going to make sure your dream event
                        becomes a reality.
                        <br /><br />
                        I’m an avid lover of animals and any kind of food you can eat with chopsticks, and am notorious
                        for asking countless questions during movies (I just want to know who’s the bad guy!). I believe
                        that there is no greater joy than celebrating life’s most important moments with the people you
                        love, and I can’t wait to help you make it happen.
                    </p>
                </div>
            </div>
            <div class="about">
                <div class="column-about left">
                    <img src={Justine} alt='Justine' />
                </div>
                <div class="column-about right">
                    <p>
                        <span class='gar'>Hey, I’m Justine</span> and I’m here for all your floral and decor needs. I fell into wedding flowers a few years ago and have loved all of the weddings I have done since then. Not only do I get to co-create the vision you have for your day, but I am also there to answer questions and get creative. Thinking through tall or short centerpieces? Free-standing arch or tiered display? Don't know what those words mean? I'm here to talk you through your options and ensure we find something that you will love.
                        <br /><br />
                        I am a completely obsessive Friends and Marvel fan and in my free time can be found dragging my husband, Philip to Target just because. There is nothing quite as beautiful as seeing your dream come to life.Thanks for entrusting me to help you make it become a reality.
                    </p>
                </div>
            </div>
            <div class="about">
                <div class="column-about left">
                    <img src={Jen} alt='Jen' />
                </div>
                <div class="column-about right">
                    <p>
                        <span class='gar'>Hey, I’m Jen</span> and I’m here to help execute all the logistics for your special day! My goal is to make sure that all the hard work, time and energy you put into planning your wedding comes to fruition and that you can enjoy your happiest day with all your friends and family, stress free. Got last minute requests or simply need a glass of water (or champagne!) after your first looks? You got it! Put your mind at ease knowing that all the behind the scenes work, whether it’s a floral arch or the reception decorations, will be taken care of and ready to wow you and your guests.
                        <br /><br />
                        I enjoy traveling, outdoor activities such as hiking and camping, and hanging with my friends. I am an expert Ikea furniture assembler and enjoy finding new ways to organize my apartment. So excited to help ensure that your big day is everything you’ve dreamed of!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
