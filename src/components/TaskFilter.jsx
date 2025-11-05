export default function TaskFilter({ value, onChange }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Buscar tarea..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}