export default function FeatureBox({ icon, title, text }) {
  return (
    <div className="card p-3 shadow-sm mb-3">
      <div className="d-flex align-items-center">
        <div className="fs-1 me-3">{icon}</div>
        <div>
          <h5 className="mb-1">{title}</h5>
          <p className="mb-0 text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
}
