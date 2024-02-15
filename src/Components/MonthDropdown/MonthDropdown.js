import './monthDropdown.css';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { monthsNameES } from '../../customHooks/useCalendar';

function MonthDropdown(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleItemClick = (index) => {
        console.log(monthsNameES[index])
        setSelectedMonth(index === selectedMonth ? null : index);
        setDropdownOpen(false);
    };

    return (
        <section className='dropdown-container'>
            <div className='date-picker-container'>
                <button className='date-picker-btn' onClick={toggleDropdown}>
                    {monthsNameES[props.month]}
                </button>
                <span>de</span>
                <button className='date-picker-btn'>
                    {props.year}
                </button>
            </div>
            
            {dropdownOpen && (
                <div className='dropdown-content'>
                    <ul>
                        {
                            props.months.map((month, i) =>
                            (
                                <li
                                    key={uuidv4()}
                                    onClick={() => handleItemClick(i)}
                                    className={selectedMonth === i ? 'selected' : ''}
                                >
                                    {month}
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
            )}
        </section>
    )
}

export { MonthDropdown }