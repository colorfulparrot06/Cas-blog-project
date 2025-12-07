import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">the greats</div>

      <div className="navbar-right">
        <Link to="/">Home</Link>

        <div className="dropdown" onClick={() => setOpen(true)}>
          <div>
            {" "}
            <span className="dropdown-title">Stories ▾</span>
          </div>

          {open && (
            <div
              className="dropdown-content"
              onMouseLeave={() => setOpen(false)}
            >
              <Link to="/story1">Story 1</Link>
              <Link to="/story2">Story 2</Link>
              <Link to="/story3">Story 3</Link>
              <Link to="/story4">Story 4</Link>
              <Link to="/story5">Story 5</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
