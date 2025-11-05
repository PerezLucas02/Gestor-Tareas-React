import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Container, Card, Button, Form } from "react-bootstrap";

const TaskManager = () => {
  const { tasks, addTask, deleteTask, editTask } = useTasks();
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return; // evita agregar vacías
    addTask({ text: newTask }); // 👈 asegurate que se llame “text”
    setNewTask("");
  };


  const handleEdit = (id) => {
    editTask(id, editingText);
    setEditingId(null);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Gestor de Tareas</h2>
      <Form onSubmit={handleAdd} className="d-flex mb-4 justify-content-center">
        <Form.Control
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ width: "60%" }}
        />
        <Button type="submit" variant="primary" className="ms-2">
          Agregar
        </Button>
      </Form>

      {tasks.map(task => (
        <Card key={task.id} className="mb-2 shadow-sm">
          <Card.Body className="d-flex justify-content-between align-items-center">
            {editingId === task.id ? (
              <>
                <Form.Control
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <Button className="ms-2" variant="success" onClick={() => handleEdit(task.id)}>Guardar</Button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <div>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => {
                      setEditingId(task.id);
                      setEditingText(task.text);
                    }}
                  >
                    Editar
                  </Button>
                  <Button variant="danger" onClick={() => deleteTask(task.id)}>Eliminar</Button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default TaskManager;