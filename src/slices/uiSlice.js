import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth(),
    yearSelectorOpened: false,
    monthSelectorOpened: false,
    eventCreatorOpened: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setSelectedYear: (state, action) => {
            state.selectedYear = action.payload.selectedYear;
            state.yearSelectorOpened = false;
        },
        setSelectedMonth: (state, action) => {
            state.selectedMonth = action.payload.selectedMonth;
            state.monthSelectorOpened = false;
        },
        setDateSelectorClicked: (state, action) => {
            state.yearSelectorOpened = action.payload.selectorType === 'YEAR' && !state.yearSelectorOpened;
            state.monthSelectorOpened = action.payload.selectorType === 'MONTH' && !state.monthSelectorOpened;
        },
        setEventCreatorOpened: (state, action) => {
            state.eventCreatorOpened = action.payload.eventCreatorOpened;
        }
    }
});

export const { setSelectedYear, setSelectedMonth,
    setDateSelectorClicked, setEventCreatorOpened } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;