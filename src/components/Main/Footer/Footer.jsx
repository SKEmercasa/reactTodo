import TasksFilter from "./TasksFilter/TasksFilter";

const Footer = (props) => {
    let li = props.state.map((liData, i) => <TasksFilter key={`filter${i}`} li={liData} filter={props.filter} id={i}/>)
    return (
        <footer className="footer">
            <span className="todo-count">{props.count} items left</span>
            <ul className="filters">
                {li}
            </ul>
            <button className="clear-completed" onClick={props.del}>Clear completed</button>
        </footer>
    )
}

export default Footer;