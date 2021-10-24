import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3 className="text-muted mb-4 my-5">Add a TODO</h3>
      <div className="row justify-content-center align-items-center">
        <div className="col-4">
          <form onSubmit={handleSubmission}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea className="form-control" id="content" rows="3"
              name="content" value={content}
              onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <button className="btn btn-primary py-2" type="submit">Add Todo</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
