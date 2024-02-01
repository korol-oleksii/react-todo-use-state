const TodoField = ({value, valueHandler, addHandler}) => {
    return (
        <div className="TodoField todo__form">
            <label className="todo__form--label">
                <input type="text" className="todo__input" value={value} onChange={valueHandler} placeholder="Todo task"/>
                <button className="todo__button" onClick={addHandler}>Add Todo</button>
            </label>
        </div>
    )
}

export default TodoField;