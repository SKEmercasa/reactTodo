import Edit from "./Edit/Edit";

function Task(props) {
    return (
        <li className={props.li.liName[2] ? `${props.li.liName[0]} hidden` : props.li.liName[0]}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={props.li.liName[1]} onChange={props.do} id={props.id} />
                <label>
                    <span className="description">{props.li.discriptionText}</span>
                    <span className="created">{props.li.createdText}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={props.do} id={props.id}></button>
            </div>
            {props.li.isTagEdit && (
                <Edit />
            )}
        </li>
    );
};

export default Task;