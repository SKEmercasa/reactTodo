import FooterContainer from "./Footer/FooterContainer";
import TaskListContainer from "./TaskList/TaskListContainer";

function Main() {
    return (
        <section className="main">
            <TaskListContainer />
            <FooterContainer/>
        </section>
    );
};

export default Main;