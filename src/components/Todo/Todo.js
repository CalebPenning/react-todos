const Todo = ({ id, task, removeTodo }) => {

    const handleDelete = () => removeTodo(id)
    return (
        <div>
            <li id={id}>{task} <button onClick={handleDelete}>X</button></li>
        </div>
    )
}

export default Todo