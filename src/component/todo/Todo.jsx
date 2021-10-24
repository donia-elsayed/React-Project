import TodoForm from '../todo/TodoForm.jsx';
import TodoList from "../todo/TodoList.jsx";
import '../todo/Todo.css';
import { useSelector, useDispatch } from "react-redux";
import {addToDoAction,removeToDoAction} from '../redux/todo'
function Todo() {
  const todoState = useSelector(state => state.todos.todoList);
  const dispatchToDo = useDispatch();
  const addTodo = (item) => {
    dispatchToDo(addToDoAction(item));
  };

  const deleteTodo = (i) => {
    dispatchToDo(removeToDoAction(i));
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todoState} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
