import NewTaskForm from './NewTaskForm/NewTaskForm';
import Main from './Main/Main';

function WebApp({ is, state, doIt, filter, del }) {
  return (
    <section className="todoapp">
      <NewTaskForm is={is} state={state.enterPlace} />
      <Main
        stateTask={state.data}
        stateFilter={state.li}
        count={state.activeTaskCount}
        doIt={doIt}
        filter={filter}
        del={del}
      />
    </section>
  );
}

export default WebApp;
