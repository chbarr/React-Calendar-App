import React, { useState } from 'react'
import './hourInput.css';

function HourInput(props) {
    const onTimePeriodClicked = () => {
        props.setEventTimePeriod((props.eventTimePeriod === 'AM' ? 'PM' : 'AM'));
    }

    const onInputChange = (event, nextInput) => {
        const enteredValue = event.target.value.toString().slice(-1);
        switch (event.currentTarget.id) {
            case 'firstNumHour':
                setFirstNumHour(enteredValue);
                break;
            case 'lastNumHour':
                setLasttNumHour(enteredValue);
                break;
            case 'firstNumMin':
                setFirstNumMin(enteredValue);
                break;
            case 'lastNumMin':
                setLastNumMin(enteredValue);
                break;
        }
        document.getElementById(nextInput).focus();
    }

    const currentDate = new Date();
    const currentHour = currentDate.getHours() % 12 || 12;
    const currentMinutes = currentDate.getMinutes();

    const [firstNumHour, setFirstNumHour] = useState((currentHour < 10 ? 0 : currentHour.toString()[0]));
    const [lastNumHour, setLasttNumHour] = useState((currentHour >= 10 ? currentHour.toString()[1] : currentHour));

    const [firstNumMin, setFirstNumMin] = useState(currentMinutes < 10 ? 0 : currentMinutes.toString()[0]);
    const [lastNumMin, setLastNumMin] = useState(currentMinutes >= 10 ? currentMinutes.toString()[1] : currentMinutes);

    return (
        <div className={`hour-input-container ${props.className}`}>
            <span>Hora de fin</span>
            <div>
                <input type='number' className='hour-cell' id='firstNumHour'
                    value={firstNumHour} onChange={(event) => onInputChange(event, 'lastNumHour')} />
                <input type='number' className='hour-cell' id='lastNumHour'
                    value={lastNumHour} onChange={(event) => onInputChange(event, 'firstNumMin')} />
                <span>:</span>
                <input type='number' className='hour-cell' id='firstNumMin'
                    value={firstNumMin} onChange={(event) => onInputChange(event, 'lastNumMin')} />
                <input type='number' className='hour-cell' id='lastNumMin' value={lastNumMin} />
                <button className='no-border-btn' onClick={onTimePeriodClicked} >
                    {props.eventTimePeriod}
                </button>
            </div>
        </div>
    )
}

export { HourInput }
