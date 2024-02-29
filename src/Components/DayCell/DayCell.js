import React from 'react'
import './dayCell.css';
import { useDispatch, useSelector } from 'react-redux';
import { setEventCreatorOpened } from '../../slices/uiSlice';
function DayCell(props) {
    const eventCreatorOpened = useSelector(state => state.ui.eventCreatorOpened);
    const dispatch = useDispatch();

    const onDayClicked = () => {
        dispatch(setEventCreatorOpened({
            'eventCreatorOpened': !eventCreatorOpened,
            'dayNumber': props.dayNumber
        }))
    }
    return (
        <button className='no-border-btn day-cell'
            onClick={onDayClicked}>
            <div className={`events-counter ${(!props.eventsCounter || props.eventsCounter <= 0) && 'events-counter-hidden'}`}>
                <span>{props.eventsCounter}</span>
            </div>
            <span className='day-number'>{props.dayNumber}</span>
        </button>
    )
}

export default DayCell
