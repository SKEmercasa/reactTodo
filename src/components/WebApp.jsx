import NewTaskForm from './NewTaskForm/NewTaskForm';
import Main from './Main/Main';

function WebApp(props) {
    return (
        <section className="todoapp">
            <NewTaskForm />
            <Main state={props.state} do={props.do}/>
        </section>
    );
};

export default WebApp;