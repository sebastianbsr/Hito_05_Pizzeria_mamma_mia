import React from "react"

export default function Profile() {
    const userEmail = "usuario@mamma-mia.com"
  
    return (
      <section className="container py-5 text-center">
        <h2>Perfil del usuario</h2>
        <p className="lead">Email: <strong>{userEmail}</strong></p>
        <button className="btn btn-danger">Cerrar sesión</button>
      </section>
    )
  }
  