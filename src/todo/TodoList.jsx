
const TodoList = ({ todos,deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          // <div className="row justify-content-between align-items-center">
          //   <div className="col-6">
             
          //   </div>
          // </div>
           <ul key={i}>
           <li className="border d-flex p-2" key={i}>
             <div className="text">
               <p>Title : {todo.title}</p>
               <p>Content : {todo.content}</p>
               <button className="btn btn-danger" onClick = {deleteTodo}>Remove</button>
             </div>
           </li>
         </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left my-5">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
