
const TodoList = ({ todos,deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return ( 
        <div className="col-5 text border p-2" key={i}>
          <p>Title : {todo.title}</p>
          <p>Content : {todo.content}</p>
          <button className="btn btn-danger" onClick = {()=> deleteTodo(i)}>Remove</button>
        </div>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left my-5">
      <h5 className="mx-5 text-muted">Todos List</h5>
      <div className="row justify-content-between">
        {todosList}
      </div>
    </div>
  );
};

export default TodoList;
