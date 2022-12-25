const TasksFilter = (props) => {
    return (
        <li>
            <button className={props.li.buttonClass}>{props.li.buttonText}</button>
        </li>
    )
}

export default TasksFilter;