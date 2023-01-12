import Footer from './Footer/Footer';
import TaskList from "./TaskList/TaskList";

function Main(props) {
    return (
        <section className="main">
            <TaskList state={props.stateTask} do={props.do} />
            <Footer state={props.stateFilter} count={props.count} filter={props.filter} del={props.del}/>
        </section>
    );
};

export default Main;