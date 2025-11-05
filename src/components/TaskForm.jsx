import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Nueva tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn btn-success">
        <i className="bi bi-plus-circle"></i> Agregar
      </button>
    </form>
  );
}

export default TaskForm;