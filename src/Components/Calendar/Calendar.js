import React, { useEffect, useState } from 'react'
import './calendar.css'
import { getNextMonth, getPreviousMonth, useCalendar, weekDaysES } from '../../customHooks/useCalendar';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { DayCell } from '../DayCell/DayCell';
import { getEvents } from '../../customHooks/useLocalStorage';

let events;
function Calendar() {
    const {
        selectedYear,
        selectedMonth,
        yearSelectorOpened,
        monthSelectorOpened,
        eventCreatorOpened,
        eventSaved
    } = useSelector(state => state.ui)

    const [loadingEvents, setLoadingEvents] = useState(true);

    const calendar = useCalendar();
    const { year: previousMonthYear, month: previousMonth } = getPreviousMonth(selectedYear, selectedMonth);
    const { year: nextMonthYear, month: nextMonth } = getNextMonth(selectedYear, selectedMonth);
    useEffect(() => {
        if (!events || eventSaved) {
            getEvents()
                .then((currentEvents) => {
                    setLoadingEvents(false);
                    events = currentEvents;
                })
        }
    }, [eventSaved])
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
                        calendar.previousMonthDays.map(dayNumber => (
                            <DayCell key={uuidv4()}
                                dayEvents={events[previousMonthYear]?.[previousMonth]?.[dayNumber] || []}
                                yearNumber={previousMonthYear}
                                monthNumber={previousMonth}
                                dayNumber={dayNumber}
                            />
                        ))
                    }
                    {
                        calendar.currentMonthDays.map((_, i) => (
                            <DayCell key={uuidv4()}
                                dayEvents={events[selectedYear]?.[selectedMonth]?.[i + 1] || []}
                                yearNumber={selectedYear}
                                monthNumber={selectedMonth}
                                dayNumber={i + 1}
                            />
                        ))
                    }
                    {
                        calendar.nextMonthDays.map((_, i) => (
                            <DayCell key={uuidv4()}
                                dayEvents={events[nextMonthYear]?.[nextMonth]?.[i + 1] || []}
                                yearNumber={nextMonthYear}
                                monthNumber={nextMonth}
                                dayNumber={i + 1}
                            />
                        ))
                    }
                </div>
            </section>
        )
    }
}

export { Calendar }