import './Todos.css';
import {useState} from "react";
import Todo from "./Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState('');
    const [todoCompleted, setTodoCompleted] = useState(true);

    let todoValueHandler = (e) => {
        setTodoValue(e.target.value);
    }
    let addTodoHandler = () => {
        if (todoValue.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    todoValue,
                    date: new Date().toLocaleString(),
                    completed: false,
                }
            ])
            setTodoValue('');
        }
    }
    
    const toggleTodoCompleted = (todoId) => {
        setTodos(todos.map(todo => {
            if (todo.id !== todoId) return todo;

            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }

    const removeTodoHandler = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    return (
        <div className="Todos todo">
            <div className="todo__container">
                <div className="todo__form">
                    <label className="todo__form--label">
                        <input type="text" className="todo__input" value={todoValue} onChange={todoValueHandler} placeholder="Todo task"/>
                        <button className="todo__button" onClick={addTodoHandler}>Add</button>
                    </label>
                </div>
                <div className="todo__list">
                    {
                        todos.length ? todos.map(todo => <Todo todo={todo} completed={toggleTodoCompleted} removeTodo={removeTodoHandler} key={todo.id}/>) : <div className="todo__no-task">No todo tasks</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todos;