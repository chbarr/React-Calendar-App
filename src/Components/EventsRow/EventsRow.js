import React from 'react'
import './eventsRow.css';

function EventsRow(props) {
    return (
        <section className='hour-bar'>
            <div className='hour-separator'>
                <span className='hour-label'> {props.hour}</span>
                <hr className='horizontal-separator' />
            </div>
            <section className='events-row'>

            </section>
        </section>
    )
}

export { EventsRow }
