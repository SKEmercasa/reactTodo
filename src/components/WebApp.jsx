import NewTaskForm from './NewTaskForm/NewTaskForm';
import Main from './Main/Main';

function WebApp(props) {
    return (
        <section className="todoapp">
            <NewTaskForm is={props.is} state={props.state.enterPlace} />
            <Main
                stateTask={props.state.data}
                stateFilter={props.state.li}
                count={props.state.activeTaskCount}
                do={props.do}
                filter={props.filter}
                del={props.del} />
        </section>
    );
};

export default WebApp;