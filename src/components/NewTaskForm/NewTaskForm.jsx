function NewTaskForm(props) {
    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" onInput={props.is} value={props.state} onKeyUp={props.is} autoFocus />
        </header>
    );
};

export default NewTaskForm;
