import Footer from './Footer/Footer';
import TaskList from './TaskList/TaskList';

function Main({ stateTask, stateFilter, doIt, count, filter, del, edit, record, reStart }) {
  return (
    <section className="main">
      <TaskList state={stateTask} doIt={doIt} edit={edit} record={record} reStart={reStart} />
      <Footer state={stateFilter} count={count} filter={filter} del={del} />
    </section>
  );
}

export default Main;
