import './monthDropdown.css';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { monthsNameES } from '../../customHooks/useCalendar';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMonth } from '../../slices/uiSlice';

function MonthDropdown(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const selectedMonth = useSelector(state => state.ui.selectedMonth);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleItemClick = (index) => {
        console.log(monthsNameES[index])
        setDropdownOpen(false);
        dispatch(setSelectedMonth({ 'selectedMonth': index }))
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