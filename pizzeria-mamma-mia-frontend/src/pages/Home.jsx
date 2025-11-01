import React, { useEffect, useState } from "react"
import CardPizza from "../components/CardPizza"
import { getPizzas } from "../services/api"

export default function Home() {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPizzas()
        setPizzas(data)
      } catch (err) {
        setError("No se pudieron cargar las pizzas. Verifica el backend (puerto 5000).")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div className="container py-5">Cargando pizzas…</div>
  if (error) return <div className="container py-5 alert alert-danger">{error}</div>

  return (
    <section className="py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {pizzas.map((pz) => (
            <CardPizza
              key={pz.id}
              name={pz.name}
              price={pz.price}
              ingredients={pz.ingredients}
              img={pz.img}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
