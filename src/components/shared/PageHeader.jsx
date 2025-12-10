export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-4 border-bottom pb-2">
      <h2>{title}</h2>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </div>
  );
}
