import './App.css';
import { DateSelector } from '../DateSelector/DateSelector';
import { Calendar } from '../Calendar/Calendar';
import { useSelector } from 'react-redux';
import { EventCreator } from '../EventCreator/EventCreator';
import { EventsDisplayer } from '../EventsDisplayer/EventsDisplayer';
function App() {
  const eventCreatorOpened = useSelector(state => state.ui.eventCreatorOpened);
  return (
    <div className="App">
      <DateSelector />
      <Calendar />
      {eventCreatorOpened && <EventCreator />}
      <EventsDisplayer />
    </div >
  );
}

export default App;
