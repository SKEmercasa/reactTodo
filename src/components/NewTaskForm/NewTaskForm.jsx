function NewTaskForm({ is, state }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" onInput={is} value={state} onKeyUp={is} />
    </header>
  );
}

export default NewTaskForm;
