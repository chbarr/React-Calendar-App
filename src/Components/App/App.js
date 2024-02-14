import './App.css';
import { useCalendar, weekDaysES, monthsES } from '../../customHooks/useCalendar';
function App() {
  const days = useCalendar();
  return (
    <div className="App">
      <div>
        <h2>{monthsES[days.month]}</h2>
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
            days['previousMonth'].map(dayNumber => (
              <div className="dayCell">{dayNumber}</div>
            ))
          }
          {
            days['currentMonth'].map((_, i) => (
              <div className="dayCell">{i + 1}</div>
            ))
          }
          {
            days['nextMonth'].map((_, i) => (
              <div className="dayCell">{i + 1}</div>
            ))
          }
        </div>
      </div>
    </div >
  );
}

export default App;
