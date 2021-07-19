import { useState } from "react"
import {v4 as uuid} from 'uuid'
import NewTodoForm from "../NewTodoForm/NewTodoForm"
import Todo from "../Todo/Todo"

const TodoList = () => {
    const INITIAL_STATE = [
        {id: uuid(), task: "Finish this app"},
        {id: uuid(), task: "Now go chill"}
    ]

    const [todos, setTodos] = useState(INITIAL_STATE)

    // Some funcs to add and remove todos
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo])
    }

    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }


    return (
        <div>
            <h3>Tasks To Do:</h3>
            <NewTodoForm addTodo={addTodo} />
            <ul>
                {todos.map((el) => <Todo id={el.id} task={el.task} removeTodo={removeTodo} />)}
            </ul>
        </div>
    )
}

export default TodoList