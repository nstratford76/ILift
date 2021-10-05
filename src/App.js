import logo from './logo.svg';
import Workout from './components/Workout/app'
import Checklist from './components/Checklist/app'
import Header  from './components/Header/app';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Workout />
      <Checklist />
    </div>
  );
}

export default App;
