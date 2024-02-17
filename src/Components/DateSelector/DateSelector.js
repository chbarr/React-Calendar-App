import './dateSelector.css';
import React from 'react'
import { YearSelector } from '../YearSelector/YearSelector';
import { monthsNameES } from '../../customHooks/useCalendar';
import { MonthSelector } from '../MonthSelector/MonthSelector';
import { useSelector, useDispatch } from 'react-redux';
import { setDateSelectorClicked } from '../../slices/uiSlice';

function DateSelector() {
    const {
        selectedYear,
        selectedMonth,
        yearSelectorOpened,
        monthSelectorOpened
    } = useSelector(state => state.ui)

    const dispatch = useDispatch();

    const toggleDateSelector = (selectorType) => {
        dispatch(setDateSelectorClicked({ selectorType }))
    }

    return (
        <section className='date-selector-container'>
            <div className='date-legend'>
                <button className='no-border-btn' onClick={() => toggleDateSelector('MONTH')}>
                    {monthsNameES[selectedMonth]}
                </button>
                <span>de</span>
                <button className='no-border-btn' onClick={() => toggleDateSelector('YEAR')}>
                    {selectedYear}
                </button>
            </div>

            {monthSelectorOpened && <MonthSelector selectedMonth={selectedMonth}
                months={monthsNameES} />}
            {yearSelectorOpened && <YearSelector selectedYear={selectedYear} />}
        </section>
    )
}

export { DateSelector }