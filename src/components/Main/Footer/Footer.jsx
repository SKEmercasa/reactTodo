import TasksFilter from './TasksFilter/TasksFilter';

function Footer({ state, filter, count, del }) {
  const li = state.map((liData, i) => <TasksFilter li={liData} filter={filter} id={i} key={`btn${i.toString()}`} />);
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <ul className="filters">{li}</ul>
      <button type="button" className="clear-completed" onClick={del}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
