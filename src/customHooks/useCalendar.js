function useCalendar(year = new Date().getFullYear(), month = new Date().getMonth()){
    const lastMonthDay = new Date(year, month + 1, 0);

    const monthDays = lastMonthDay.getDate();

    const days = [];
    for (let day = 1; day <= monthDays; day++){
        const currentDate  = new Date(year, month, day);
        const weekDay = currentDate.toLocaleDateString('es-ES', { weekday: 'long' });
        days.push(day, weekDay);
    }
    return days;
}

export {useCalendar}