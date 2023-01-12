const TasksFilter = (props) => {
    return (
        <li>
            <button className={props.li.buttonClass} onClick={props.filter} id={props.id}>{props.li.buttonText}</button>
        </li>
    )
}

export default TasksFilter;