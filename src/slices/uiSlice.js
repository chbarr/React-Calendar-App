import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    yearSelected: new Date().getFullYear(),
    monthSelected: new Date().getMonth()
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setYear: (state, action) => {
            state.year = action.year;
        },
        setMonth: (state, action) => {
            state.month = action.month;
        }
    }
});

export const {setYear, setMonth} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;