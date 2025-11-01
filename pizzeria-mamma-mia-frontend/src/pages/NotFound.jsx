import React from "react"

import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="container text-center py-5">
      <h1 className="display-4 fw-bold text-danger">404 - Página no encontrada</h1>
      <p className="lead mb-4">La ruta que buscas no existe 😅</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </section>
  )
}
