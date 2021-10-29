import * as React from 'react';
import Jamie from '../imgs/logos/Jamie.jpg';

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
        </div>
    );
};

export default About;
