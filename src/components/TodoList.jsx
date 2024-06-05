import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchedFilter = (
                (filter === "COMPLETED" && todo.completed) ||
                (filter === "INCOMPLETED" && !todo.completed) ||
                (filter === "ALL")
            );

            const matchedSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchedFilter && matchedSearch
        })
    })
    console.log('Filtered Todos: ', filteredTodos);

  return (
    <ul>
        <li className="my-2 text-sm italic">
            All Your Notes Here...
        </li>
        {
            filteredTodos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))
        }
    </ul>
  )
}

export default TodoList