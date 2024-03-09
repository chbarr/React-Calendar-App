import './App.css';
import { DateSelector } from '../DateSelector/DateSelector';
import { Calendar } from '../Calendar/Calendar';
import { useSelector } from 'react-redux';
import { EventCreator } from '../EventCreator/EventCreator';
import { EventsDisplayer } from '../EventsDisplayer/EventsDisplayer';
function App() {
  const { eventCreatorOpened, eventsDisplayerOpened } = useSelector(state => state.ui);
  return (
    <div className="App">
      <DateSelector />
      <Calendar />
      {eventCreatorOpened && <EventCreator />}
      {eventsDisplayerOpened && <EventsDisplayer />}
    </div >
  );
}

export default App;
