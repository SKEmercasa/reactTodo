const TaskList = (props) => {
    return (
        <ul className="todo-list">
            {props.li}
        </ul>
    );
};

export default TaskList;