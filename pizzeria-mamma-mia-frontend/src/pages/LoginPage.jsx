import React, { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState(null)        // { type: 'success' | 'danger', text: string }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validaciones mínimas
    if (!email || !password) {
      return setMsg({ type: 'danger', text: 'Todos los campos son obligatorios.' })
    }
    if (password.length < 6) {
      return setMsg({ type: 'danger', text: 'La contraseña debe tener al menos 6 caracteres.' })
    }

    // Éxito
    setMsg({ type: 'success', text: '¡Login exitoso! ✅' })
    // (Opcional) limpiar campos
    // setEmail(''); setPassword('');
  }

  return (
    <section className="container py-5" style={{ maxWidth: 520 }}>
      <h2 className="mb-3">Iniciar sesión</h2>
      <p className="text-muted mb-4">Ingresa con tu cuenta para continuar</p>

      {msg && (
        <div className={`alert alert-${msg.type} mb-4`} role="alert">
          {msg.text}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Entrar
        </button>
      </form>
    </section>
  )
}
