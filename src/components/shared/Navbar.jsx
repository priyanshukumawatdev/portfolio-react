import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">MyApp</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
        </ul>
      </div>
    </nav>
  );
}
