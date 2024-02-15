import './App.css';
import { useCalendar, weekDaysES, monthsNameES } from '../../customHooks/useCalendar';
import { MonthDropdown } from '../MonthDropdown/MonthDropdown';
function App() {
  const calendar = useCalendar();
  return (
    <div className="App">
      <div>
        <MonthDropdown months={monthsNameES} month={calendar.month} year={calendar.year}/>
        <div className='calendarGridHeader'>
          {weekDaysES.slice(0, weekDaysES.length - 1).map((day, i) => (
            <div key={i}
              className="dayCellHeader">
              {day.slice(0, 3).toUpperCase()}
            </div>
          ))
          }
        </div>
        <div className='calendarGrid'>
          {
            calendar['previousMonth'].map(dayNumber => (
              <div className="dayCell">{dayNumber}</div>
            ))
          }
          {
            calendar['currentMonth'].map((_, i) => (
              <div className="dayCell">{i + 1}</div>
            ))
          }
          {
            calendar['nextMonth'].map((_, i) => (
              <div className="dayCell">{i + 1}</div>
            ))
          }
        </div>
      </div>
    </div >
  );
}

export default App;
