import React from 'react'
import { EventCell } from '../EventCell/EventCell'
import { v4 as uuidv4 } from 'uuid';
import './eventsDisplayer.css';
import { dayHours } from '../../customHooks/useCalendar';
import { EventsRow } from '../EventsRow/EventsRow';
function EventsDisplayer(props) {
    return (
        <section className='events-container'>
            <section className='events-carousel'>
                <hr className='vertical-separator' />
                <section className='events-displayer'>
                    {dayHours.map(
                        hour => (
                            <EventsRow key={uuidv4()} hour={hour} />
                        ))
                    }
                </section>
                <hr className='vertical-separator' />
            </section>
        </section>
    )
}

export { EventsDisplayer }
