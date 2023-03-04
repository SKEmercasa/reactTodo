function NewTaskForm({ is, place, min, sec }) {
  return (
    <header className="new-todo-form">
      <h1>todos</h1>
      <form onKeyUp={is}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          id="word"
          onInput={is}
          value={place}
          autoFocus
        />
        <input className="new-todo-form__timer" placeholder="Min" value={min} id="min" onInput={is} />
        <input className="new-todo-form__timer" placeholder="Sec" value={sec} id="sec" onInput={is} />
      </form>
    </header>
  );
}

export default NewTaskForm;
