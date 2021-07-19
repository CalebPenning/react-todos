import { useState } from "react"
import {v4 as uuid} from 'uuid'
import NewTodoForm from "../NewTodoForm/NewTodoForm"

const TodoList = () => {
    const [todos, setTodos] = useState([])

    // Some funcs to add and remove todos
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo])
    }

    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

   

    return (
        <ul>
            {todos.map((el, i) => (
                <li id={i}>{el} - <button onClick={() => {removeTodo(i)}}>X</button></li>
            ))}
        </ul>
    )
}

export default TodoList