import NewTaskForm from './NewTaskForm/NewTaskForm';
import Main from './Main/Main';
import { ErrorContainer } from './Error/ErrorContainer';

function WebApp({
  data,
  li,
  activeTaskCount,
  isFormat,
  enterPlace,
  enterMin,
  enterSec,
  doIt,
  is,
  filter,
  del,
  edit,
  record,
  unError,
  reStart,
}) {
  return (
    <main className="todoapp">
      <NewTaskForm is={is} place={enterPlace} min={enterMin} sec={enterSec} />
      {isFormat && <ErrorContainer format={isFormat} unError={unError} />}
      <Main
        stateTask={data}
        stateFilter={li}
        count={activeTaskCount}
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
