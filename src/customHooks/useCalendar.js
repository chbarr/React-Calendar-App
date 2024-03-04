import { useSelector } from "react-redux";

export const weekDaysES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
export const monthsNameES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const getPreviousMonth = (currentYear, currentMonth) => {
    return (currentMonth === 0) ?
        {
            year: currentYear - 1,
            month: 11
        } :
        {
            year: currentYear,
            month: currentMonth - 1
        };
}

export const getNextMonth = (currentYear, currentMonth) => {
    return (currentMonth === 11) ?
        {
            year: currentYear + 1,
            month: 0
        } :
        {
            year: currentYear,
            month: currentMonth + 1
        }
};

function useCalendar() {
    const [year, month] = useSelector(state => [state.ui.selectedYear, state.ui.selectedMonth]);

    const calendar = {
        'month': month,
        'year': year,
        'previousMonthDays': [],
        'currentMonthDays': [],
        'nextMonthDays': []
    };

    //obtains the next month to build a date object with the current month last day
    const { year: nextMonthYear, month: nextMonth } = getNextMonth(year, month);
    const currentMonthLastDay = new Date(nextMonthYear, nextMonth, 0).getDate();

    for (let day = 1; day <= currentMonthLastDay; day++) {
        const currentDate = new Date(year, month, day);
        const weekDay = currentDate.toLocaleDateString('es-ES', { weekday: 'long' });
        calendar['currentMonthDays'].push(weekDay);
    }
    if (calendar['currentMonthDays'][0].toLowerCase() !== weekDaysES[0].toLowerCase()) {
        const previousMonthLastDay = new Date(year, month, 0).getDate();
        const previousMonthLastDays = weekDaysES.slice(0, weekDaysES.indexOf(calendar['currentMonthDays'][0].toLowerCase()));
        previousMonthLastDays.forEach((_, i) => calendar['previousMonthDays'].push(previousMonthLastDay - (previousMonthLastDays.length - 1) + i));
    }
    if (calendar['currentMonthDays'][currentMonthLastDay - 1].toLowerCase() !== weekDaysES[6].toLowerCase()) {
        calendar['nextMonthDays'] = weekDaysES.slice(weekDaysES.indexOf(calendar.currentMonthDays[currentMonthLastDay - 1]) + 2);
    }
    return calendar;
}

export { useCalendar }