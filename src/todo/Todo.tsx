import Title from "./components/Title"
import TodoList from "./components/TodoList"
import TodoProvider from "./context/TodoProvider"

const Todo = () => {    
    return (
        <div>
            <TodoProvider>
                <Title/>
                <TodoList/>
            </TodoProvider>
        </div>
    )
}

export default Todo