import FooterContainer from "./Footer/FooterContainer";
import TaskList from "./TaskList/TaskList";

function Main(props) {
    return (
        <section className="main">
            <TaskList state={props.state} do={props.do}/>
            <FooterContainer/>
        </section>
    );
};

export default Main;