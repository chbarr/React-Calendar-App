import React from 'react'
import { EventCell } from '../EventCell/EventCell'
import { v4 as uuidv4 } from 'uuid';
import './eventsDisplayer.css';
import { dayHours } from '../../customHooks/useCalendar';
function EventsDisplayer(props) {
    return (
        <section className='events-container'>
            <section className='events-carousel'>
                <hr className='vertical-separator' />
                <section className='events-displayer'>
                    {dayHours.map(
                        hour => (
                            <div className='hour-bar' key={uuidv4()}>
                                <span className='hour-label'> {hour}</span>
                                <hr className='horizontal-separator' />
                            </div>
                        ))
                    }
                </section>
                <hr className='vertical-separator' />
            </section>
        </section>
    )
}

export { EventsDisplayer }
