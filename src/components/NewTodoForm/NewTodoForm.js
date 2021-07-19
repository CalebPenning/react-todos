import { useState } from "react"
import { v4 as uuid } from 'uuid'

const NewTodoForm = ({ addTodo }) => {
    const INITAL_STATE = {
        task: ""
    }

    const [formData, setFormData] = useState(INITAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(form => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { task } = formData
        addTodo({id: uuid(), task})
        setFormData(INITAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Enter Task To Do</label>
            <input 
                type="text"
                name="task"
                placeholder="Enter your task here"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Add Task</button>
        </form>
    )
}

export default NewTodoForm