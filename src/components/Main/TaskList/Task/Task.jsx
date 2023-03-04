import PropTypes from 'prop-types';

import Edit from './Edit/Edit';

function Task({ doIt, id, li, edit, record, reStart }) {
  return (
    <li className={li.liName[2] ? `${li.liName[0]} hidden` : li.liName[0]}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={li.liName[1]} onChange={doIt} id={id} />
        <label htmlFor={id}>
          <span className="description" id={id}>
            {li.discriptionText}
            <br />
            <button className={li.isTimer ? 'icon hidden' : 'icon icon-play'} id={'play'} onClick={reStart}></button>
            <button className={li.isTimer ? 'icon icon-pause' : 'icon hidden'} id={'pause'} onClick={reStart}></button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="description">
              {li.discriptionMin}:{li.discriptionSec}
            </span>
          </span>
          <span className="created">{li.createdText}</span>
        </label>
        <button type="button" aria-label="edit" className="icon icon-edit" onClick={edit} />
        <button type="button" aria-label="des" className="icon icon-destroy" onClick={doIt} id={id} />
      </div>
      {li.isTagEdit && <Edit value={li.discriptionText} record={record} />}
    </li>
  );
}

Task.propTypes = {
  doIt: PropTypes.func,
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
