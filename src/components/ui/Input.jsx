export default function Input({ label, name, type = "text", ...props }) {
  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}</label>}
      <input
        type={type}
        name={name}
        {...props}
        className="form-control"
      />
    </div>
  );
}
