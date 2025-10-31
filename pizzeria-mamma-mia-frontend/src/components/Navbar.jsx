import { Link } from "react-router-dom"
import { formatCLP } from "../utils/formatCurrency"

export default function Navbar() {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">🍕 Pizzería Mamma Mía</Link>

        <div className="ms-auto d-flex gap-2">
          <Link to="/" className="btn btn-outline-light">Home</Link>

          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light">Profile</Link>
              <button className="btn btn-outline-light">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light">Login</Link>
              <Link to="/register" className="btn btn-outline-light">Register</Link>
            </>
          )}

          <Link to="/cart" className="btn btn-success">
            🛒 Total: ${formatCLP(total)}
          </Link>
        </div>
      </div>
    </nav>
  )
}
