import React from 'react'
import './hourInput.css';

function HourInput(props) {
    const onTimePeriodClicked = () => {
        props.setEventTimePeriod((props.eventTimePeriod === 'AM' ? 'PM' : 'AM'));
    }

    return (
        <div className={`hour-input-container ${props.className}`}>
            <span>Hora de fin</span>
            <div>
                <input type='number' className='hour-cell' />
                <input type='number' className='hour-cell' />
                <span>:</span>
                <input type='number' className='hour-cell' />
                <input type='number' className='hour-cell' />
                <button className='no-border-btn' onClick={onTimePeriodClicked} >
                    {props.eventTimePeriod}
                </button>
            </div>
        </div>
    )
}

export default HourInput
