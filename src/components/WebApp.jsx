import NewTaskForm from './NewTaskForm/NewTaskForm';
import Main from './Main/Main';
import { ErrorContainer } from './Error/ErrorContainer';

function WebApp({ state, doIt, is, filter, del, edit, record, unError, reStart }) {
  const { enterPlace, enterMin, enterSec } = state;
  return (
    <main className="todoapp">
      <NewTaskForm is={is} place={enterPlace} min={enterMin} sec={enterSec} />
      {state.isFormat && <ErrorContainer format={state.isFormat} unError={unError} />}
      <Main
        stateTask={state.data}
        stateFilter={state.li}
        count={state.activeTaskCount}
        doIt={doIt}
        filter={filter}
        del={del}
        edit={edit}
        record={record}
        reStart={reStart}
      />
    </main>
  );
}

export default WebApp;
