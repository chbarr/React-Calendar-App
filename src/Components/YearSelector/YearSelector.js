import './yearSelector.css'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedYear } from '../../slices/uiSlice';
function YearSelector() {
    const selectedYear = useSelector(state => state.ui.selectedYear);
    const dispatch = useDispatch();
    const onYearSelected = (selectedYear) => {
        console.log(selectedYear);
        dispatch(setSelectedYear({ selectedYear }))
    }
    return (
        <section>
            <div className='arrowButtons-container'>
                <button className='arrow-button left-arrow'></button>
                <button className='arrow-button left-arrow'></button>
            </div>
            <section className='year-selector-container'>
                {[...Array(16)].map((_, i) => (
                    <button key={uuidv4()} onClick={() => onYearSelected(selectedYear - (4 - i))}>
                        {selectedYear - (4 - i)}
                    </button>
                ))}
            </section>
        </section>
    )
}

export { YearSelector }