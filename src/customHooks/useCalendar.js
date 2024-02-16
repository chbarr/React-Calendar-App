import { useSelector } from "react-redux";

export const weekDaysES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
export const monthsNameES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const getPreviousMonth = (currentYear, currentMonth) => {
    return (currentMonth === 0) ? [currentYear - 1, 0] : [currentYear, currentMonth - 1];
}

const getNextMonth = (currentYear, currentMonth) => {
    return (currentMonth === 11) ? [currentYear + 1, 0] : [currentYear, currentMonth + 1];
};

function useCalendar() {
    const [year, month] = useSelector(state => [state.ui.selectedYear, state.ui.selectedMonth]);
    
    const days = {
        'month': month,
        'year': year,
        'previousMonth': [],
        'currentMonth': [],
        'nextMonth': []
    };
    
    //obtains the next month to build a date object with the current month last day
    const [nextYear, nextMonth] = getNextMonth(year, month);
    const currentMonthLastDay = new Date(nextYear, nextMonth, 0).getDate();

    for (let day = 1; day <= currentMonthLastDay; day++) {
        const currentDate = new Date(year, month, day);
        const weekDay = currentDate.toLocaleDateString('es-ES', { weekday: 'long' });
        days['currentMonth'].push(weekDay);
    }
    if (days['currentMonth'][0].toLowerCase() !== weekDaysES[0].toLowerCase()) {
        const previousMonthLastDay = new Date(year, month, 0).getDate();
        const previousMonthLastDays = weekDaysES.slice(0, weekDaysES.indexOf(days['currentMonth'][0].toLowerCase()));
        previousMonthLastDays.forEach((_, i) => days['previousMonth'].push(previousMonthLastDay - (previousMonthLastDays.length - 1) + i));
    }
    if (days['currentMonth'][currentMonthLastDay - 1].toLowerCase() !== weekDaysES[6].toLowerCase()) {
        days['nextMonth'] = weekDaysES.slice(weekDaysES.indexOf(days.currentMonth[currentMonthLastDay-1]) + 2);
    }
    return days;
}

export { useCalendar }