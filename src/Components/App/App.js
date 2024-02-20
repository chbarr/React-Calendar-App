import './App.css';
import { DateSelector } from '../DateSelector/DateSelector';
import Calendar from '../Calendar/Calendar';
function App() {
  return (
    <div className="App">
      <div>
        <DateSelector/>
        <Calendar/>
      </div>
    </div >
  );
}

export default App;
