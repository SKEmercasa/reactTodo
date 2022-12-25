const Footer = (props) => {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <ul className="filters">
                {props.li}
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer;