import React from 'react'

export default function Header() {
  return (
    <header
      className="py-5 text-white"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1200&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="bg-dark bg-opacity-50 p-4 rounded-4">
          <h1 className="display-5 fw-bold">¡Bienvenido a Pizzería Mamma Mía!</h1>
          <p className="lead mb-0">
            Las mejores pizzas con ingredientes frescos y masa al estilo tradicional.
          </p>
        </div>
      </div>
    </header>
  )
}
