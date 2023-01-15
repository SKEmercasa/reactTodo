import Footer from './Footer/Footer';
import TaskList from './TaskList/TaskList';

function Main({ stateTask, stateFilter, doIt, count, filter, del }) {
  return (
    <section className="main">
      <TaskList state={stateTask} doIt={doIt} />
      <Footer state={stateFilter} count={count} filter={filter} del={del} />
    </section>
  );
}

export default Main;
