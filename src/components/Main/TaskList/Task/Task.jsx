import PropTypes from 'prop-types';

import Edit from './Edit/Edit';

function Task({ doIt, id, li }) {
  return (
    <li className={li.liName[2] ? `${li.liName[0]} hidden` : li.liName[0]}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={li.liName[1]} onChange={doIt} id={id} />
        <label htmlFor={id}>
          <span className="description">{li.discriptionText}</span>
          <span className="created">{li.createdText}</span>
        </label>
        <button type="button" aria-label="edit" className="icon icon-edit" />
        <button type="button" aria-label="des" className="icon icon-destroy" onClick={doIt} id={id} />
      </div>
      {li.isTagEdit && <Edit />}
    </li>
  );
}

Task.propTypes = {
  doIt: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  li: PropTypes.shape(
    {
      createTaskDate: PropTypes.instanceOf(Date).isRequired,
      createdText: PropTypes.string.isRequired,
      discriptionText: PropTypes.string.isRequired,
      isTagEdit: PropTypes.bool.isRequired,
      liName: PropTypes.arrayOf(Array).isRequired,
    }.isRequired
  ),
};

Task.defaultProps = {
  li: null,
};

export default Task;
