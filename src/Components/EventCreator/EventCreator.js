import React from 'react'
import { useState } from 'react'
import './eventCreator.css'

function EventCreator(props) {
    const onTitleChange = (event) => {
        setEventTitle(event.target.value);
    };

    const onDescriptionChange = (event) => {
        setEventDescription(event.target.value);
    };
    const onTimePeriodClicked = (eventTime) => {
        if (eventTime === 'START_EVENT')
            setStartEventTimePeriod((startEventTimePeriod === 'AM' ? 'PM' : 'AM'));
        else
            setFinishEventTimePeriod((finishEventTimePeriod === 'AM' ? 'PM' : 'AM'));
    }

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
            <div className='hour-selector start-hour'>
                <span>Hora de inicio</span>
                <div>
                    <input type='number' className='hour-cell' />
                    <input type='number' className='hour-cell' />
                    <span>:</span>
                    <input type='number' className='hour-cell' />
                    <input type='number' className='hour-cell' />
                    <button className='no-border-btn' onClick={() => onTimePeriodClicked('START_EVENT')}>
                        {startEventTimePeriod}
                    </button>
                </div>
            </div>

            <div className='hour-selector finish-hour'>
                <span>Hora de fin</span>
                <div>
                    <input type='number' className='hour-cell' />
                    <input type='number' className='hour-cell' />
                    <span>:</span>
                    <input type='number' className='hour-cell' />
                    <input type='number' className='hour-cell' />
                    <button className='no-border-btn' onClick={() => onTimePeriodClicked('FINISH_EVENT')} >
                        {finishEventTimePeriod}
                    </button>
                </div>
            </div>

            <button className='no-border-btn save-event-btn'>
                Guardar
            </button>
        </section>
    )
}

export { EventCreator }
