import Task from './Task/Task';

function TaskList({ state, doIt }) {
  const li = state.map((liData, i) => (
    <Task
      li={liData}
      key={`Task${i.toString()}`}
      doIt={(e) => {
        doIt(e);
      }}
      id={i}
    />
  ));
  return <ul className="todo-list">{li}</ul>;
}

export default TaskList;
