import React, { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [msg, setMsg] = useState(null)        // { type: 'success' | 'danger', text: string }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validaciones mínimas
    if (!email || !password || !confirm) {
      return setMsg({ type: 'danger', text: 'Todos los campos son obligatorios.' })
    }
    if (password.length < 6) {
      return setMsg({ type: 'danger', text: 'La contraseña debe tener al menos 6 caracteres.' })
    }
    if (password !== confirm) {
      return setMsg({ type: 'danger', text: 'Las contraseñas no coinciden.' })
    }

    // Éxito
    setMsg({ type: 'success', text: '¡Registro exitoso! 🎉' })
    // (Opcional) limpiar campos
    // setEmail(''); setPassword(''); setConfirm('');
  }

  return (
    <section className="container py-5" style={{ maxWidth: 520 }}>
      <h2 className="mb-3">Crear cuenta</h2>
      <p className="text-muted mb-4">Regístrate para comenzar a disfrutar nuestras pizzas 🍕</p>

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

        <div className="mb-3">
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

        <div className="mb-4">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Repite la contraseña"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Crear cuenta
        </button>
      </form>
    </section>
  )
}
