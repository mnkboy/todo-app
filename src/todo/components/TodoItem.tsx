import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"
import { Todo } from "../interfaces/interfaces"

interface props {
    todo: Todo
}

const TodoItem = ({ todo }: props) => {
    // const { toggleTodo } = useContext(TodoContext)
    const {toggleTodo} = useTodos();

    const handleDbClick = () => {        
        toggleTodo(todo.id);
    }
    return (
        <div>
            <li style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : ''
            }} onDoubleClick={handleDbClick}>
                {todo.desc}
            </li>
        </div>
    )
}

export default TodoItem