const Todo = ({todo, removeTodo, completed}) => {

    return (
        <div className="Todo todo__item">
            <div className="todo__row">
                <label className="todo__label">
                    <input type="checkbox" checked={todo.completed} onChange={() => completed(todo.id)}/>
                    <span className="todo__task">{todo.todoValue}</span>
                </label>
                {
                    todo.completed ? <span className="todo__completed">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM13 5.5L11.5 4L6.5 9L4.5 7L3 8.5L6.5 12L13 5.5Z"
                                fill="#009020"/>
                        </svg>
                    </span> : ''
                }
                <span className="todo__icon-remove" onClick={() => removeTodo(todo.id)}>&times;</span>
            </div>
            <div className="todo__row">
                <div className="todo__date">added at: {todo.date}</div>
            </div>
        </div>
    )
}

export default Todo;