import './dateSelector.css';
import React from 'react'
import { YearSelector } from '../YearSelector/YearSelector';
import { getNextMonth, getPreviousMonth, monthsNameES } from '../../customHooks/useCalendar';
import { MonthSelector } from '../MonthSelector/MonthSelector';
import { useSelector, useDispatch } from 'react-redux';
import { setDateSelectorClicked, setSelectedMonth } from '../../slices/uiSlice';

function DateSelector() {
    const {
        selectedYear,
        selectedMonth,
        yearSelectorOpened,
        monthSelectorOpened
    } = useSelector(state => state.ui)

    const dispatch = useDispatch();

    const onToggleDateSelector = (selectorType) => {
        dispatch(setDateSelectorClicked({ selectorType }))
    }

    const onChangeMonth = (changeType) => {
        const { year, month } = (changeType === 'PREV') ? getPreviousMonth(selectedYear, selectedMonth)
            : (changeType === 'NEXT') ? getNextMonth(selectedYear, selectedMonth)
                : { year: selectedYear, month: selectedMonth };

        dispatch(setSelectedMonth({ selectedMonth: month, selectedYear: year }))
    }

    return (
        <section className='date-selector-container'>
            <button className='no-border-btn' onClick={() => onChangeMonth('PREV')}>&lt;</button>
            <div className='date-legend'>
                <button className='no-border-btn' onClick={() => onToggleDateSelector('MONTH')}>
                    {monthsNameES[selectedMonth]}
                </button>
                <span>de</span>
                <button className='no-border-btn' onClick={() => onToggleDateSelector('YEAR')}>
                    {selectedYear}
                </button>
            </div>
            <button className='no-border-btn' onClick={() => onChangeMonth('NEXT')}>&gt;</button>

            {monthSelectorOpened && <MonthSelector selectedMonth={selectedMonth}
                months={monthsNameES} />}
            {yearSelectorOpened && <YearSelector selectedYear={selectedYear} />}
        </section>
    )
}

export { DateSelector }