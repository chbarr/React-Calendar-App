import React from 'react';
import './dayCell.css';
import { useDispatch, useSelector } from 'react-redux';
import { setEventCreatorOpened } from '../../slices/uiSlice';

// Uses React.memo with selective memoization to avoid unnecessary re-renders
const MemoizedDayCell = React.memo(
    function DayCell(props) {
        const eventCreatorOpened = useSelector(state => state.ui.eventCreatorOpened);
        const dispatch = useDispatch();
        const eventsCounter = props.dayEvents.length;

        const onDayClicked = () => {
            dispatch(setEventCreatorOpened({
                'eventCreatorOpened': false
            }));
            if (eventsCounter <= 0) {
                dispatch(setEventCreatorOpened({
                    'eventCreatorOpened': !eventCreatorOpened,
                    'dayNumber': props.dayNumber,
                    'monthNumber': props.monthNumber,
                    'yearNumber': props.yearNumber
                }));
            } else {
                console.log("Show events detailed");
            }
        };

        return (
            <button className='no-border-btn day-cell' onClick={onDayClicked}>
                <div className={`events-counter ${(eventsCounter <= 0) && 'events-counter-hidden'}`}>
                    <span>{eventsCounter}</span>
                </div>
                <span className='day-number'>{props.dayNumber}</span>
            </button>
        );
    },
    (prevProps, nextProps) => {
        // if dayEvents has not changed, the component will not be re rendered
        return prevProps.dayEvents === nextProps.dayEvents;
    }
);

export { MemoizedDayCell as DayCell };
