import Edit from "./Edit/Edit";
import PropTypes from 'prop-types'

function Task({ doIt, id, li }) {
    return (
        <li className={li.liName[2] ? `${li.liName[0]} hidden` : li.liName[0]}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={li.liName[1]} onChange={doIt} id={id} />
                <label>
                    <span className="description">{li.discriptionText}</span>
                    <span className="created">{li.createdText}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={doIt} id={id}></button>
            </div>
            {li.isTagEdit && (
                <Edit />
            )}
        </li>
    );
};

Task.defaultProps = {
    doit: () => { },
}

Task.propTypes = {
    doIt: PropTypes.func,
    id: PropTypes.number.isRequired,
    li: PropTypes.shape({
        createTaskDate: PropTypes.instanceOf(Date).isRequired,
        createdText: PropTypes.string.isRequired,
        discriptionText: PropTypes.string.isRequired,
        isTagEdit: PropTypes.bool.isRequired,
        liName: PropTypes.arrayOf(Array)
    })
}

export default Task;