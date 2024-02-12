import './App.css';
import { useCalendar } from '../../customHooks/useCalendar';
function App() {
  const days = useCalendar();
  return (
    <div className="App">
      <span> Hola hola hola</span>
      <span>{JSON.stringify(days)}</span>
    </div>
  );
}

export default App;
