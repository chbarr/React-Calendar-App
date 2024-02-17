import './App.css';
import { useCalendar, weekDaysES } from '../../customHooks/useCalendar';
import { DateSelector } from '../DateSelector/DateSelector';
function App() {
  const calendar = useCalendar();
  return (
    <div className="App">
      <div>
        <DateSelector />
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
