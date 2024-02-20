import React from 'react'
import './calendar.css'
import { useCalendar, weekDaysES } from '../../customHooks/useCalendar';
import { useSelector } from 'react-redux';
import DayCell from '../DayCell/DayCell';

function Calendar() {
    const calendar = useCalendar();
    const {
        yearSelectorOpened,
        monthSelectorOpened
    } = useSelector(state => state.ui)
    return (
        <section className={`calendar-container ${(yearSelectorOpened || monthSelectorOpened) && 'calendar-container-blurred'}`}>
            <div className='calendarGridHeader'>
                {weekDaysES.slice(0, weekDaysES.length - 1).map((day, i) => (
                    <div key={i}
                        className="dayCellHeader">
                        {day.slice(0, 3).toUpperCase()}
                    </div>
                ))
                }
            </div>
            <div className='calendarGrid'>
                {
                    calendar['previousMonth'].map(dayNumber => (
                        <DayCell eventsCounter={0} dayNumber={dayNumber} />
                    ))
                }
                {
                    calendar['currentMonth'].map((_, i) => (
                        <DayCell eventsCounter={0} dayNumber={i + 1} />
                    ))
                }
                {
                    calendar['nextMonth'].map((_, i) => (
                        <DayCell eventsCounter={0} dayNumber={i + 1} />
                    ))
                }
            </div>
        </section>
    )
}

export default Calendar