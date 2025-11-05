import React from "react";
import { useTasks } from "../context/TaskContext";
import { Container, Card, Button } from "react-bootstrap";
import { CheckCircleFill, Circle } from "react-bootstrap-icons";
import "../styles/Dashboard.css"; // 👈 Animaciones

const Dashboard = () => {
  const { tasks, toggleTask } = useTasks();

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-primary fw-bold">Dashboard</h2>

      {tasks.length === 0 ? (
        <p className="text-muted">No hay tareas aún 😴</p>
      ) : (
        tasks.map((task) => (
          <Card
            key={task.id}
            className={`mb-3 shadow-sm border-0 task-card ${
              task.done ? "task-done" : "task-pending"
            }`}
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                {task.done ? (
                  <CheckCircleFill size={22} className="text-success me-2" />
                ) : (
                  <Circle size={22} className="text-secondary me-2" />
                )}
                <span
                  className={`fs-5 ${
                    task.done
                      ? "text-decoration-line-through text-muted"
                      : "fw-semibold"
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <Button
                variant={task.done ? "outline-secondary" : "outline-success"}
                onClick={() => toggleTask(task.id)}
              >
                {task.done ? "Desmarcar" : "Marcar hecha"}
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Dashboard;