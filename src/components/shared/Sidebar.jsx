import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: "240px" }}>
      <h4 className="mb-4">Dashboard</h4>

      <ul className="nav flex-column">
        <li className="nav-item"><Link className="nav-link text-white" to="/dashboard">Overview</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/users">Users</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}
