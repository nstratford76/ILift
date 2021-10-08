import logo from './logo.svg';
import WorkoutList from './components/WorkoutList/app'
import Checklist from './components/Checklist/app'
import Header  from './components/Header/app';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WorkoutList workouts= {selectedWorkout} />
      <Checklist />
    </div>
  );
}

export default App;
