import './yearSelector.css'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { setSelectedYear } from '../../slices/uiSlice';
function YearSelector(props) {
    const dispatch = useDispatch();
    const [boxYear, setBoxYear] = useState(props.selectedYear);
    const onYearSelected = (selectedYear) => {
        dispatch(setSelectedYear({ selectedYear }))
    }
    const onArrowClicked = (arrowDirection) => {
        if (arrowDirection === 'LEFT')
            setBoxYear(boxYear - 16);
        else
            setBoxYear(boxYear + 16);

    }
    return (
        <section className='year-selector-container'>
            <div className='arrow-buttons-container'>
                <button className='no-border-btn' onClick={() => onArrowClicked('LEFT')}>&larr;</button>
                <button className='no-border-btn' onClick={() => onArrowClicked('RIGHT')}>&rarr;</button>
            </div>
            <section className='years-box'>
                {[...Array(16)].map((_, i) => (
                    <button key={uuidv4()} onClick={() => onYearSelected(boxYear - (4 - i))}
                        className='no-border-btn'>
                        {boxYear - (4 - i)}
                    </button>
                ))}
            </section>
        </section>
    )
}

export { YearSelector }