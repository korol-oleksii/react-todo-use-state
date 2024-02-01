import './Todos.css';
import {useState} from "react";
import Todo from "./Todo/Todo";
import TodoField from "./TodoField/TodoField";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState('');

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
                <h1>TODO List</h1>
                <TodoField value={todoValue} valueHandler={todoValueHandler} addHandler={addTodoHandler}/>
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