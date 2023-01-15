function TasksFilter({ li, filter, id }) {
  return (
    <li>
      <button type="button" className={li.buttonClass} onClick={filter} id={id}>
        {li.buttonText}
      </button>
    </li>
  );
}

export default TasksFilter;
