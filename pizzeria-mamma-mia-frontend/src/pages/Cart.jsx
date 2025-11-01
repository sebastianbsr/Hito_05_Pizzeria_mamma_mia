import React, { useState } from 'react'
import { pizzaCart } from '../assets/pizzas'
import { formatCLP } from '../utils/formatCurrency'

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart)

  const increase = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decrease = (id) => {
    setCart(prev => {
      const updated = prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // elimina si llega a 0
      return updated
    })
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <section className="container py-5">
      <h2 className="mb-4">🛒 Carrito</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">Tu carrito está vacío.</div>
      ) : (
        <div className="row g-3">
          <div className="col-12 col-lg-8">
            <ul className="list-group">
              {cart.map(item => (
                <li key={item.id} className="list-group-item d-flex align-items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: 72, height: 72, objectFit: 'cover' }}
                    className="rounded me-3"
                  />
                  <div className="flex-fill">
                    <div className="fw-semibold">{item.name}</div>
                    <div className="text-muted small">Precio: ${formatCLP(item.price)}</div>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => decrease(item.id)}
                    >
                      −
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => increase(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="ms-4 text-end" style={{ width: 120 }}>
                    <div className="small text-muted">Subtotal</div>
                    <div className="fw-semibold">
                      ${formatCLP(item.price * item.quantity)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resumen</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span>Total</span>
                  <strong>${formatCLP(total)}</strong>
                </div>
                <button className="btn btn-success w-100">Pagar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
