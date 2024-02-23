import './App.css';
import { DateSelector } from '../DateSelector/DateSelector';
import Calendar from '../Calendar/Calendar';
import { useSelector } from 'react-redux';
import { EventCreator } from '../EventCreator/EventCreator';
function App() {
  const eventCreatorOpened = useSelector(state => state.ui.eventCreatorOpened);
  return (
    <div className="App">
      <div>
        <DateSelector/>
        <Calendar/>
        { eventCreatorOpened && <EventCreator/>}
      </div>
    </div >
  );
}

export default App;
