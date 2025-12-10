export default function Alert({ type = "success", message }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
}
