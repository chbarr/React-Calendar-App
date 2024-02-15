export const weekDaysES = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
export const monthsNameES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const getPreviousMonth = (currentMonth) => {
    return (currentMonth === 0 ? 11 : currentMonth - 1);
}

const getNextMonth = (currentMonth) => {
    return (currentMonth === 11 ? 0 : currentMonth + 1);
}

function useCalendar(year = new Date().getFullYear(), month = new Date().getMonth()) {
    const lastMonthDay = new Date(year, getNextMonth(month), 0);

    const days = {
        'month': month,
        'year':year,
        'previousMonth': [],
        'currentMonth': [],
        'nextMonth': []
    };

    let monthDays = lastMonthDay.getDate();

    for (let day = 1; day <= monthDays; day++) {
        const currentDate = new Date(year, month, day);
        const weekDay = currentDate.toLocaleDateString('es-ES', { weekday: 'long' });
        days['currentMonth'].push(weekDay);
    }
    if (days['currentMonth'][0].toLowerCase() !== weekDaysES[0].toLowerCase()) {
        monthDays = new Date(year, getNextMonth(getPreviousMonth(month)), 0);
        const previousMonthLastDays = weekDaysES.slice(0, weekDaysES.indexOf(days['currentMonth'][0].toLowerCase()));
        previousMonthLastDays.forEach((_, i) => days['previousMonth'].push(monthDays.getDate() - (previousMonthLastDays.length - 1) + i));
    }
    if (days['currentMonth'][days['currentMonth'].length - 1].toLowerCase() !== weekDaysES[0].toLowerCase()) {
        days['nextMonth'] = weekDaysES.slice(weekDaysES.indexOf(days['currentMonth'][days['currentMonth'].length - 1].toLowerCase()) + 2);
    }
    return days;
}

export { useCalendar }