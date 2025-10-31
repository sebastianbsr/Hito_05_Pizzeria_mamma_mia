import React, { useEffect, useState } from "react"
import { formatCLP } from "../utils/formatCurrency"
import { getPizzaById } from "../services/api"

export default function Pizza() {
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // En este hito el ID es fijo, p001:
        const data = await getPizzaById("p001")
        setPizza(data)
      } catch (err) {
        setError("No se pudo cargar la pizza p001. Revisa el backend (puerto 5000).")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div className="container py-5">Cargando pizza…</div>
  if (error) return <div className="container py-5 alert alert-danger">{error}</div>
  if (!pizza) return null

  return (
    <section className="container py-5" style={{ maxWidth: 900 }}>
      <div className="card shadow-sm overflow-hidden">
        <img src={pizza.img} alt={pizza.name} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title mb-2">{pizza.name}</h2>
          {/* El backend suele usar 'desc' o 'description'; intenta ambas */}
          <p className="text-muted">{pizza.desc || pizza.description}</p>

          <h5 className="mt-4 mb-2">Ingredientes</h5>
          <ul className="mb-3">
            {pizza.ingredients?.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>

          <div className="d-flex align-items-center justify-content-between">
            <h4 className="m-0">Precio: ${formatCLP(pizza.price)}</h4>
            <button className="btn btn-primary">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </section>
  )
}
