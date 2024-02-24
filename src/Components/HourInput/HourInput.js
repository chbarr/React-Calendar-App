import React, { useState } from 'react'
import './hourInput.css';

function HourInput(props) {
    const onTimePeriodClicked = () => {
        props.setEventTimePeriod((props.eventTimePeriod === 'AM' ? 'PM' : 'AM'));
    }

    const onInputChange = (event, nextInput) => {
        let enteredValue = Number(event.target.value[event.target.selectionStart - 1]);

        if (isNaN(enteredValue)) 
            return;

        switch (event.currentTarget.id) {
            case `firstNumHour-${props.id}`:
                enteredValue = enteredValue < 0 ? 0 : enteredValue;
                enteredValue = enteredValue > 1 ? 1 : enteredValue;
                setFirstNumHour(enteredValue);
                if (Number(enteredValue) === 1 && Number(lastNumHour) > 2)
                    setLastNumHour(0);
                break;
            case `lastNumHour-${props.id}`:
                enteredValue = enteredValue < 0 ? 0 : enteredValue;
                enteredValue = Number(firstNumHour) === 1 && enteredValue > 2 ? 2 : enteredValue;
                setLastNumHour(enteredValue);
                break;
            case `firstNumMin-${props.id}`:
                enteredValue = enteredValue < 0 ? 0 : enteredValue;
                enteredValue = enteredValue > 5 ? 5 : enteredValue;
                setFirstNumMin(enteredValue);
                break;
            case `lastNumMin-${props.id}`:
                enteredValue = enteredValue < 0 ? 0 : enteredValue;
                enteredValue = enteredValue > 9 ? 9 : enteredValue;
                setLastNumMin(enteredValue);
                return;
            default:
                return;
        }
        document.getElementById(nextInput).focus();
    }

    const currentDate = new Date();
    const currentHour = currentDate.getHours() % 12 || 12;
    const currentMinutes = currentDate.getMinutes();

    const [firstNumHour, setFirstNumHour] = useState((currentHour < 10 ? 0 : currentHour.toString()[0]));
    const [lastNumHour, setLastNumHour] = useState((currentHour >= 10 ? currentHour.toString()[1] : currentHour));

    const [firstNumMin, setFirstNumMin] = useState(currentMinutes < 10 ? 0 : currentMinutes.toString()[0]);
    const [lastNumMin, setLastNumMin] = useState(currentMinutes >= 10 ? currentMinutes.toString()[1] : currentMinutes);

    return (
        <div className={`hour-input-container ${props.className}`}>
            <span>Hora de fin</span>
            <div>
                <input type='text' className='hour-cell' id={`firstNumHour-${props.id}`}
                    value={firstNumHour} onInput={(event) => onInputChange(event, `lastNumHour-${props.id}`)} />
                <input type='text' className='hour-cell' id={`lastNumHour-${props.id}`}
                    value={lastNumHour} onInput={(event) => onInputChange(event, `firstNumMin-${props.id}`)} />
                <span>:</span>
                <input type='text' className='hour-cell' id={`firstNumMin-${props.id}`}
                    value={firstNumMin} onInput={(event) => onInputChange(event, `lastNumMin-${props.id}`)} />
                <input type='text' className='hour-cell' id={`lastNumMin-${props.id}`}
                    value={lastNumMin} onInput={(event) => onInputChange(event)} />
                <button className='no-border-btn' onClick={onTimePeriodClicked} >
                    {props.eventTimePeriod}
                </button>
            </div>
        </div>
    )
}

export { HourInput }
