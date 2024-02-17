import './dateSelector.css';
import React, { useState } from 'react'
import { monthsNameES } from '../../customHooks/useCalendar';
import { YearSelector } from '../YearSelector/YearSelector';
import { MonthDropdown } from '../MonthSelector/MonthSelector';
import { useSelector } from 'react-redux';

function DateSelector() {
    const [selectedYear, selectedMonth] = useSelector(state => [state.ui.selectedYear, state.ui.selectedMonth]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [yearBoxOpen, setYearBoxOpen] = useState(false);

    const toggleYearBox = () => {
        setYearBoxOpen(!yearBoxOpen);
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <section className='date-selector-container'>
            <div className='date-legend'>
                <button className='no-border-btn' onClick={toggleDropdown}>
                    {monthsNameES[selectedMonth]}
                </button>
                <span>de</span>
                <button className='no-border-btn' onClick={toggleYearBox}>
                    {selectedYear}
                </button>
            </div>

            {dropdownOpen && <MonthDropdown selectedMonth={selectedMonth}
                setDropdownOpen={setDropdownOpen}
                months={monthsNameES} />}
            {yearBoxOpen && <YearSelector selectedYear={selectedYear}
                setYearBoxOpen={setYearBoxOpen} />}
        </section>
    )
}

export { DateSelector }