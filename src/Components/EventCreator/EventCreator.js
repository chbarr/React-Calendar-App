import React from 'react'
import { useState } from 'react'
import { HourInput } from '../HourInput/HourInput';
import { saveEvent } from '../../customHooks/useLocalStorage';
import './eventCreator.css'
import { useDispatch, useSelector } from 'react-redux';
import { setEventSaved } from '../../slices/uiSlice';

function EventCreator(props) {
    const currentDate = new Date();
    const timePeriod = currentDate.getHours() < 12 ? 'AM' : 'PM';

    const onTitleChange = (event) => {
        setEventTitle(event.target.value);
    };

    const onDescriptionChange = (event) => {
        setEventDescription(event.target.value);
    };

    const onSaveEvent = () => {
        setSaveButtonClicked(true);
        saveEvent({
            year: eventYear,
            month: eventMonth,
            day: eventDay,
            startHour: eventStartHour,
            finishHour: eventFinishHour,
            title: eventTitle,
            description: eventDescription
        }).then(() => {
            dispatch(setEventSaved({ eventSaved: true }))
            setSaveButtonClicked(false);
        });
    }

    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [startEventTimePeriod, setStartEventTimePeriod] = useState(timePeriod);
    const [finishEventTimePeriod, setFinishEventTimePeriod] = useState(timePeriod);
    const [eventStartHour, setEventStartHour] = useState(null);
    const [eventFinishHour, setEventFinishHour] = useState(null);
    const [saveButtonClicked, setSaveButtonClicked] = useState(false);

    const { eventYear, eventMonth, eventDay } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    return (
        <section className='event-creator-container'>
            <input className='event-title' type='text'
                value={eventTitle}
                placeholder='Título'
                onChange={onTitleChange}
            />

            <textarea className='event-description'
                value={eventDescription}
                placeholder='Descripción del evento'
                onChange={onDescriptionChange}
            />

            <HourInput id='start-hour' className='start-hour'
                eventTimePeriod={finishEventTimePeriod}
                setEventTimePeriod={setFinishEventTimePeriod}
                setEventHour={setEventStartHour}
            />

            <HourInput id='finish-hour' className='finish-hour'
                eventTimePeriod={startEventTimePeriod}
                setEventTimePeriod={setStartEventTimePeriod}
                setEventHour={setEventFinishHour}
            />
            <button
                className={`no-border-btn save-event-btn ${saveButtonClicked ? 'save-event-btn-disabled' : ''}`}
                onClick={onSaveEvent}
                disabled={saveButtonClicked}
            >
                Guardar
            </button>
        </section>
    )
}

export { EventCreator }
