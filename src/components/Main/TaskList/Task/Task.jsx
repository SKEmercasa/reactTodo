import Edit from "./Edit/Edit";
function Task(props) {
    return (
        <li className={props.li.liName}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                    <span className="description">{props.li.discriptionText}</span>
                    <span className="created">{props.li.createdText}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            {props.li.isTagEdit && (
                <Edit />
            )}
        </li>
    );
};

export default Task;