import { getDatabase, ref, set, get } from "firebase/database";
import * as React from 'react';
import { useState } from "react";
import './Rsvp.css';

const db = getDatabase();

interface Guest {
    id: number;
    name: string;
    reception?: boolean;
    ceremony?: boolean;
    notAttending?: boolean;
}

const emptyGuest: Guest = {
    id: 0,
    name: ''
};

const Rsvp = () => {
    const [guests, setGuests] = useState<Guest[]>([emptyGuest]);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [maxGuests, setMaxGuests] = React.useState(0);
    const [suggested, setSuggested] = React.useState([]);
    const [notes, setNotes] = React.useState<string>('');
    const [mainGuestAttending, setMainGuestAttending] = React.useState(false);
    const [existsInDb, setExistsInDb] = React.useState<boolean | undefined>();

    const showAttendingPrompt = guests[0].name.length > 5;
    const disableAddButton = guests.length > maxGuests;
    const showGuestsPrompt = maxGuests > 0 && guests.length - 1 !== maxGuests;

    React.useEffect(() => {
        setIsError(false);
    }, [isSuccess]);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const mainGuest = guests[0].name.toLowerCase();

        guests.forEach((response: any, index) => {
            const lowerName = response.name.toLowerCase();
            const isGuest = mainGuest !== lowerName;

            get(ref(db, 'Invited/' + lowerName)).then((snapshot: any) => {
                const isInvited = snapshot.val() !== null;
                const date = new Date().toUTCString();

                const guid = isGuest ? '|' + date : '';

                set(ref(db, 'Confirmed/' + response.name + guid), {
                    name: lowerName,
                    ceremony: response.ceremony ?? false,
                    reception: response.reception ?? false,
                    isInvited: isInvited,
                    invitedBy: mainGuest,
                    timestamp: date,
                    notes: index === 0 ? notes : '',
                }).then(() => {
                    setIsSuccess(true);
                })
            }).catch((e) => {
                console.log(e);
                setIsError(true);
            });
        });
    };

    const confirmGuest = (event: any) => {
        event.preventDefault();

        const lowerName = /(.+\S)\s*$/.exec(guests[0].name.toLowerCase())?.[1];
        if (!lowerName) { return; }

        get(ref(db, 'Invited/' + lowerName)).then((snapshot: any) => {
            if (snapshot?.val()) {
                const max = snapshot?._node?.children_?.root_?.value?.value_;
                const suggested = snapshot?._node?.children_?.root_?.right?.value?.value_;

                if (max) {
                    setMaxGuests(max)
                }

                if (suggested) {
                    setSuggested(suggested.split(','));
                }
                setExistsInDb(true);
                setIsError(false);
            }
            else {
                setExistsInDb(false);

                set(ref(db, 'Unconfirmed/' + lowerName), {
                    name: lowerName,
                    timestamp: new Date().toUTCString(),
                });
            }
        }).catch(() => {
            setIsError(true);

            set(ref(db, 'Unconfirmed/' + lowerName), {
                name: lowerName,
                timestamp: new Date().toUTCString(),
            });
        });
    }

    const resetForm = () => {
        setIsSuccess(false);
        setGuests([emptyGuest]);
        setMainGuestAttending(false);
        setExistsInDb(undefined);
    };

    const addGuest = (val?: string) => {
        const newGuests: Guest[] = [
            ...guests,
            {
                id: guests.length,
                name: val ?? ''
            }
        ];

        console.log(newGuests)
        if (val) {
            var currentSuggested = suggested.filter(sug => sug !== val);
            setSuggested(currentSuggested);
        }
        setGuests(newGuests);
    };

    const handleNameChange = (id: number, event: any) => {
        const newName = event.target.value;
        guests[id].name = newName;

        setGuests([...guests,]);
    };

    const getMainGuestTextBox = () => {
        return (
            <form>
                <input
                    className='rsvp-input med'
                    type="text"
                    value={guests[0].name}
                    onChange={handleNameChange.bind(this, 0)}
                    placeholder='Guest Full Name'
                />
                <br /> <br />
                <input
                    className='subButton'
                    type="submit"
                    value="Next"
                    disabled={!showAttendingPrompt}
                    onClick={showAttendingPrompt ? confirmGuest : undefined}
                />
                <br />
            </form>
        );
    };

    const updateReception = (guestId: number, event: React.MouseEvent<Element, MouseEvent>) => {
        guests[guestId].reception = (event.target as any).checked;
        setGuests([...guests]);
    };

    const updateCeremony = (guestId: number, event: React.MouseEvent<Element, MouseEvent>) => {
        guests[guestId].ceremony = (event.target as any).checked;
        setGuests([...guests]);
    };

    const updateNotAttending = (guestId: number, event: React.MouseEvent<Element, MouseEvent>) => {
        guests[guestId].notAttending = (event.target as any).checked;
        setGuests([...guests]);
    };

    const updateNotes = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNotes(event.target.value);
    };

    const getCheckboxes = (guest: Guest, hideRequest?: boolean) => {
        return (
            <div className={'checkboxContainer'}>
                <div className={'rightMarginAuto'}>
                    <input type="checkbox" id={`reception-${guest.id}`} value="Reception" className={'margin5'}
                        onClick={updateReception.bind(this, guest.id)} disabled={guest.notAttending}
                    />
                    <label htmlFor={`reception-${guest.id}`}>Reception</label>
                </div>
                <div className={'rightMarginAuto'} >
                    <input type="checkbox" id={`ceremony-${guest.id}`} value="Ceremony" className={'margin5'}
                        onClick={updateCeremony.bind(this, guest.id)} disabled={guest.notAttending}
                    />
                    <label htmlFor={`ceremony-${guest.id}`}>Ceremony</label>
                </div>
                <div className={'rightMarginAuto'} >
                    <input type="checkbox" id={`cancel-${guest.id}`} value="cancel" className={'margin5'}
                        onClick={updateNotAttending.bind(this, guest.id)}
                        disabled={guest.ceremony || guest.reception}
                    />
                    <label htmlFor={`cancel-${guest.id}`}>Won't be attending</label>
                </div>
                {!hideRequest &&
                    <div className={'rightMarginAuto'} >
                        <input
                            type="text"
                            id="notes"
                            placeholder={'song requests'}
                            value={notes}
                            className={'suggestion-box'}
                            onChange={updateNotes.bind(this)}
                        />
                    </div>
                }
                <br></br>
            </div>
        );
    };

    const getMainGuestAttendingPrompt = () => {
        const greeting = mainGuestAttending ? 'You will be attending' : 'Will you be attending';
        const hasGuest = maxGuests > 0;

        return (
            <>
                <label>Hi {guests[0].name}!</label>
                <br />
                {
                    <>
                        <label>{greeting}</label>
                        <br />
                        {getCheckboxes(guests[0])}

                        {showGuestsPrompt && getAdditionalGuestPrompt()}
                        {getAdditionalGuest(guests)}
                        <input
                            className='addlButton'
                            type="button"
                            value="Confirm"
                            onClick={handleSubmit}
                            disabled={hasAnyGuestNotAttending()}
                        />
                    </>
                }
            </>
        );
    };

    const hasAnyGuestNotAttending = () => {
        for (let guest of guests) {
            if (!(guest.ceremony || guest.reception || guest.notAttending)) {
                return true;
            }
        }

        return false;
    };

    const getAdditionalGuestPrompt = () => {
        return (
            <>
                <label>Would you like to add an additional guest?</label>
                <br></br>
                <input
                    className='addlButton'
                    type="button"
                    value="Add Additional Guest"
                    onClick={addGuest.bind(this, '')}
                    disabled={disableAddButton}
                />
                <br />
                <br></br>
                {suggested.length !== 0 &&
                    <>
                        {'Suggested Guest'}
                        <br></br>
                        {Array.from(suggested).map(suggestion => {
                            return (
                                <>
                                    <input
                                        className='addlButton'
                                        type="button"
                                        value={suggestion}
                                        onClick={addGuest.bind(this, suggestion)}
                                        disabled={disableAddButton}
                                    />
                                    <br />
                                </>
                            )
                        })}
                        <br></br>
                    </>
                }
            </>
        );
    };

    const getAdditionalGuest = (guests: Guest[]) => {
        const addlGuests = guests.map((guest, index) => {
            if (guest.id === 0) { return null; }
            return (
                <React.Fragment key={index}>
                    <label>
                        <input className='noEvents rsvp-input med' type="text" value={guest.name}
                            onChange={handleNameChange.bind(this, index)} placeholder='Guest Name' />
                    </label>
                    <br />
                    <div key={'guest' + index}>
                        <label >Will {guest.name} be attending? &nbsp;</label>
                        {getCheckboxes(guests[index], true)}
                    </div>
                </React.Fragment>
            );
        });

        return addlGuests;
    };

    const getForm = () => {
        const isRsvpDisabled =
            !!guests.find(guest => !guest.name) ||
            !!guests.find(guest => !(guest.ceremony || guest.reception || guest.notAttending));

        return (
            <div className='form'>
                {existsInDb === undefined && getMainGuestTextBox()}
                {existsInDb === false &&
                    <div>
                        <div>
                            Hm, looks like you aren't on the list!
                        </div>
                        <div>
                            Reach out to Jamie or David so we can get you sorted out.
                        </div>
                    </div>
                }
                {existsInDb && !mainGuestAttending && getMainGuestAttendingPrompt()}
                <br></br>
                <input
                    className='subButton'
                    type='submit'
                    onClick={!isRsvpDisabled ? handleSubmit : undefined}
                    value="Confirm RSVP"
                    disabled={isRsvpDisabled}
                    hidden={!mainGuestAttending}
                />
                {
                    isError &&
                    <div className='error'>We didn't quite get that. Please try again!</div>
                }
            </div>
        )
    };

    const getThankYou = () => {
        return (
            <div className='form'>
                <label>Thank you for RSVPing!</label>
                {/* <br />
                <a href='#' onClick={resetForm}>Adding more?</a> */}
            </div>
        );
    }

    return (
        <div className='formContainer'>
            <div className='innerForm'>
                <div className='big noEvents alignCenter'>RSVP</div>
                <div className='alignCenter noEvents small'>Please RSVP by 11/1</div>
                <br></br>
                {isSuccess ? getThankYou() : getForm()}

            </div>
        </div>
    );
};

export default Rsvp;
