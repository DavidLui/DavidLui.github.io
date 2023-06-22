import * as React from 'react';
import './Faq.css';

const Faq = () => {

    return (
        <>
            <div className='textSection'>
                <div className='wedText noEvents'>FAQ</div>
                <div className='faq-container'>
                    <div className='faq-items'>
                        <p className="smallText smallTextFormat noEvents bold">What is the dress code?</p>
                        <p className="smallText smallTextFormat noEvents">Black tie optional! We'd love for you to show up in your most dapper suit or floor length gown. As a bonus it'll keep you warm during those November nights! </p>

                        <p className="smallText smallTextFormat noEvents bold">Is the ceremony and reception indoors or outdoors? </p>
                        <p className="smallText smallTextFormat noEvents">Indoors! There is a balcony surrounding the reception space in case you need a breather after dancing all night :) </p>

                        <p className="smallText smallTextFormat noEvents bold">Can I bring a date?</p>
                        <p className="smallText smallTextFormat noEvents">Your RSVP will indicate if you've been allotted a guest, please contact Jamie or David if you have any questions.</p>

                        <p className="smallText smallTextFormat noEvents bold">Is there parking available?</p>
                        <p className="smallText smallTextFormat noEvents">Yes - there is ample parking shared between our venue and Liberty House. You'll be able to get your parking ticket validated by the venue so you don't have to pay the parking fee. </p>

                        <p className="smallText smallTextFormat noEvents bold">Can I bring my gift to the wedding?</p>
                        <p className="smallText smallTextFormat noEvents">We ask that if you buy anything from our registry that you ship it directly to us so that you don't have to worry about bringing it to the venue. </p>

                        <p className="smallText smallTextFormat noEvents bold">Are there COVID protocols in place?</p>
                        <p className="smallText smallTextFormat noEvents">Guests are welcome to wear masks and they will be provided for your convenience. We ask all of our guests to covid test themselves at least 2 days prior to the event, as well as ensure that you are vaccinated to keep our guests safe and healthy. </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;
