import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth()
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setSelectedYear: (state, action) => {
            state.selectedYear = action.payload.selectedYear;
        },
        setSelectedMonth: (state, action) => {
            state.selectedMonth = action.payload.selectedMonth;
        }
    }
});

export const {setSelectedYear, setSelectedMonth} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;