import React from 'react'
import { useState } from 'react'
import { HourInput } from '../HourInput/HourInput';
import './eventCreator.css'

function EventCreator(props) {
    const currentDate = new Date();
    const timePeriod = currentDate.getHours() < 12 ? 'AM' : 'PM';

    const onTitleChange = (event) => {
        setEventTitle(event.target.value);
    };

    const onDescriptionChange = (event) => {
        setEventDescription(event.target.value);
    };

    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [startEventTimePeriod, setStartEventTimePeriod] = useState(timePeriod);
    const [finishEventTimePeriod, setFinishEventTimePeriod] = useState(timePeriod);

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
            />

            <HourInput id='finish-hour' className='finish-hour'
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
