import React from 'react'
import { useState } from 'react'
import './eventCreator.css'
import HourInput from '../HourInput/HourInput';

function EventCreator(props) {
    const onTitleChange = (event) => {
        setEventTitle(event.target.value);
    };

    const onDescriptionChange = (event) => {
        setEventDescription(event.target.value);
    };

    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [startEventTimePeriod, setStartEventTimePeriod] = useState('AM');
    const [finishEventTimePeriod, setFinishEventTimePeriod] = useState('AM');

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

            <HourInput className='start-hour'
                eventTimePeriod={finishEventTimePeriod}
                setEventTimePeriod={setFinishEventTimePeriod}
            />

            <HourInput className='finish-hour'
                eventTimePeriod={startEventTimePeriod}
                setEventTimePeriod={setStartEventTimePeriod}
            />
            <button className='no-border-btn save-event-btn'>
                Guardar
            </button>
        </section>
    )
}

export { EventCreator }
