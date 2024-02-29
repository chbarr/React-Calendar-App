import React, { useEffect, useState } from 'react'
import './calendar.css'
import { getNextMonth, getPreviousMonth, useCalendar, weekDaysES } from '../../customHooks/useCalendar';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import DayCell from '../DayCell/DayCell';
import { getEvents } from '../../customHooks/useLocalStorage';

let events;
function Calendar() {
    const {
        selectedYear,
        selectedMonth,
        yearSelectorOpened,
        monthSelectorOpened,
        eventCreatorOpened
    } = useSelector(state => state.ui)

    const [loadingEvents, setLoadingEvents] = useState(true);

    const calendar = useCalendar();
    const previousMonth = getPreviousMonth(selectedYear, selectedMonth);
    const nextMonth = getNextMonth(selectedYear, selectedMonth);
    useEffect(() => {
        if (!events) {
            getEvents()
                .then((currentEvents) => {
                    setLoadingEvents(false);
                    events = currentEvents;
                })
        }
    }, [events])
    if (loadingEvents) {
        return (
            <div>Obteniendo eventos</div>
        )
    } else {
        return (
            <section className={`calendar-container ${(yearSelectorOpened || monthSelectorOpened
                || eventCreatorOpened) && 'calendar-container-blurred'}`}>
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

                        calendar.previousMonth.map(dayNumber => (
                            <DayCell key={uuidv4()} eventsCounter={events[selectedYear]?.[previousMonth]?.[dayNumber]?.length} dayNumber={dayNumber} />
                        ))
                    }
                    {
                        calendar.currentMonth.map((_, i) => (
                            <DayCell key={uuidv4()} eventsCounter={events[selectedYear]?.[selectedMonth]?.[i + 1]?.length} dayNumber={i + 1} />
                        ))
                    }
                    {
                        calendar.nextMonth.map((_, i) => (
                            <DayCell key={uuidv4()} eventsCounter={events[selectedYear]?.[nextMonth]?.[i + 1]?.length} dayNumber={i + 1} />
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default Calendar