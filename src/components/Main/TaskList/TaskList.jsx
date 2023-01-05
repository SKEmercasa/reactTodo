import Task from "./Task/Task";

const TaskList = (props) => {
    let li = props.state.map((liData, i) => <Task li={liData} key={`list${i}`} do={props.do} id={i}/>);
    return (
        <ul className="todo-list">
            {li}
        </ul>
    );
};

export default TaskList;