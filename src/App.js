import './App.css';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import Main from './components/Main/Main';

function App() {
  return (
    <section className="todoapp">
      <NewTaskForm />
      <Main />
    </section>
  );
};

export default App;
