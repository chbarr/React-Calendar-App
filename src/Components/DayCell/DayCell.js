import React from 'react'
import './dayCell.css';
function DayCell(props) {
    return (
        <div className='day-cell'>
            <div className={`events-counter ${(props.eventsCounter <= 0) && 'events-counter-hidden'}`}>
                <span>{props.eventsCounter}</span>
            </div>
            <span className='day-number'>{props.dayNumber}</span>
        </div>
    )
}

export default DayCell
