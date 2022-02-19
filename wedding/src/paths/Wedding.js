import { getDatabase, ref, set, get } from "firebase/database";
import * as React from 'react';
import { useState } from "react";
import Engagement from './../imgs/logos/engagement.jpg';
import Success from './../imgs/logos/success.jpg';
import './Wedding.css';

const db = getDatabase();

const Wedding = () => {
    const [name, setName] = useState('');
    const [guestNum, setGuestNum] = React.useState(undefined);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    React.useEffect(() => {
        setIsError(false);
    }, [isSuccess]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const lowerName = name.toLowerCase();
        get(ref(db, 'Invited/' + lowerName)).then((snapshot) => {
            if (snapshot.val() !== null) {
                set(ref(db, 'Confirmed/' + lowerName), {
                    Name: lowerName,
                    guestNum: guestNum ?? 1
                }).then(() => {
                    setIsSuccess(true);
                });
            }
            else {
                set(ref(db, 'Unconfirmed/' + lowerName), {
                    Name: lowerName,
                    guestNum: guestNum ?? 1
                }).then(() => {
                    setIsSuccess(true);
                });
            }
        }).catch((e) => {
            setIsError(true);
        });
    }

    const handleNameChange = (name) => {
        setName(name.target.value);
    };

    const handleGuestChange = (guest) => {
        setGuestNum(guest.target.value);
    };

    const resetForm = () => {
        setIsSuccess(false);
        setGuestNum(undefined);
        setName('');
    };

    const getForm = () => {
        const disableButton = name.length <= 3 || !(guestNum > 0 && guestNum < 6);

        return (
            <form className='form' onSubmit={handleSubmit} >
                <label>
                    <input type="text" value={name} onChange={handleNameChange} placeholder='First and Last Name' />
                </label>
                <br />
                <label>
                    <input type="number" value={guestNum} onChange={handleGuestChange} placeholder='Number of Guests' min={1} />
                </label>
                <br />
                <input type="submit" value="RSVP" disabled={disableButton} />
                {
                    isError &&
                    <div className='error'>We didn't quite get that. Please try again!</div>
                }
            </form>
        )
    };

    const getThankYou = () => {
        return (
            <div className='form'>
                <label>Thank you for RSVPing!</label>
                <br />
                <a href='#' onClick={resetForm}>Adding more?</a>
            </div>
        );
    }

    const imgSrc = isSuccess ? Success : Engagement;

    return (
        <div className='formContainer'>
            <img className='engagement' src={imgSrc} />
            {isSuccess ? getThankYou() : getForm()}
        </div>
    );
};

export default Wedding;
