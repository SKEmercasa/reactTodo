import Task from './Task/Task';

function TaskList({ state, doIt, edit, record, reStart }) {
  const li = state.map((liData, i) => (
    <Task
      li={liData}
      key={`Task${i.toString()}`}
      doIt={(e) => {
        doIt(e);
      }}
      edit={(e) => {
        edit(e);
      }}
      id={i}
      record={(e) => {
        record(e);
      }}
      reStart={reStart}
    />
  ));
  return <ul className="todo-list">{li}</ul>;
}

export default TaskList;
