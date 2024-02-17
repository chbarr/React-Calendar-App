import './monthSelector.css';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { setSelectedMonth } from '../../slices/uiSlice';

function MonthDropdown(props) {
    const dispatch = useDispatch();

    const handleItemClick = (index) => {
        props.setDropdownOpen(false);
        dispatch(setSelectedMonth({ 'selectedMonth': index }))
    };

    return (
        <section className='month-selector-container'>
            <ul>
                {
                    props.months.map((month, i) =>
                    (
                        <li
                            key={uuidv4()}
                            onClick={() => handleItemClick(i)}
                            className={props.selectedMonth === i ? 'selected' : ''}
                        >
                            {month}
                        </li>
                    )
                    )
                }
            </ul>
        </section>
    )
}

export { MonthDropdown }