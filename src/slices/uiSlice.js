import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth(),
    eventYear: -1,
    eventMonth: -1,
    eventDay: -1,
    yearSelectorOpened: false,
    monthSelectorOpened: false,
    eventCreatorOpened: false,
    eventSaved: false,
    eventsDisplayerOpened: false,
    dayEvents: []
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
            state.selectedYear = action.payload.selectedYear || state.selectedYear;
            state.selectedMonth = action.payload.selectedMonth;
            state.monthSelectorOpened = false;
        },
        setDateSelectorClicked: (state, action) => {
            state.yearSelectorOpened = action.payload.selectorType === 'YEAR' && !state.yearSelectorOpened;
            state.monthSelectorOpened = action.payload.selectorType === 'MONTH' && !state.monthSelectorOpened;
            state.eventCreatorOpened = false;
        },
        setEventCreatorOpened: (state, action) => {
            state.eventYear = action.payload.yearNumber;
            state.eventMonth = action.payload.monthNumber;
            state.eventDay = action.payload.dayNumber;
            state.eventCreatorOpened = action.payload.eventCreatorOpened;
            state.yearSelectorOpened = false;
            state.monthSelectorOpened = false;
            state.eventSaved = false;
        },
        setEventSaved: (state, action) => {
            state.eventSaved = action.payload.eventSaved;
            state.eventCreatorOpened = false;
            state.yearSelectorOpened = false;
            state.monthSelectorOpened = false;
        },
        setEventDisplayerOpener: (state, action) => {
            state.eventsDisplayerOpened = true;
            state.dayEvents = action.payload.dayEvents;
        }
    }
});

export const { setSelectedYear, setSelectedMonth,
    setDateSelectorClicked, setEventCreatorOpened,
    setEventSaved } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;