import React from 'react';
import './dayCell.css';
import { useDispatch, useSelector } from 'react-redux';
import { setEventCreatorOpened } from '../../slices/uiSlice';

// Uses React.memo with selective memoization to avoid unnecessary re-renders
const MemoizedDayCell = React.memo(
    function DayCell(props) {
        const eventCreatorOpened = useSelector(state => state.ui.eventCreatorOpened);
        const dispatch = useDispatch();

        const onDayClicked = () => {
            dispatch(setEventCreatorOpened({
                'eventCreatorOpened': !eventCreatorOpened,
                'dayNumber': props.dayNumber,
                'monthNumber': props.monthNumber,
                'yearNumber': props.yearNumber
            }));
        };

        return (
            <button className='no-border-btn day-cell' onClick={onDayClicked}>
                <div className={`events-counter ${(!props.eventsCounter || props.eventsCounter <= 0) && 'events-counter-hidden'}`}>
                    <span>{props.eventsCounter}</span>
                </div>
                <span className='day-number'>{props.dayNumber}</span>
            </button>
        );
    },
    (prevProps, nextProps) => {
        // if eventsCounter has not changed, the component will not be re rendered
        return prevProps.eventsCounter === nextProps.eventsCounter;
    }
);

export { MemoizedDayCell as DayCell };
