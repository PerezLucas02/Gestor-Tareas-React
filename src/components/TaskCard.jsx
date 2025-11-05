export default function TaskCard({ task }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "5px",
      borderRadius: "8px"
    }}>
      <h4>{task.title}</h4>
      <p>{task.completed ? "✅ Completada" : "⏳ Pendiente"}</p>
    </div>
  );
}