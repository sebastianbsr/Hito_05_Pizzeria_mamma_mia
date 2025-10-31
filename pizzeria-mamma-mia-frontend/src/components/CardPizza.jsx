import React from 'react'
import { formatCLP } from '../utils/formatCurrency'

export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>

          <div className="mb-2">
            <p className="small text-muted mb-1">Ingredientes:</p>
            <ul className="small text-muted ps-3 mb-0">
              {ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>

          <div className="mt-auto d-flex align-items-center justify-content-between">
            <span className="fw-bold fs-5">${formatCLP(price)}</span>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary">Ver más</button>
              <button className="btn btn-primary">Añadir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
