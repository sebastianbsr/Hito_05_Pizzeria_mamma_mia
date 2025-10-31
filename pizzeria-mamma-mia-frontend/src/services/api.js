export const API_BASE_URL = "http://localhost:5000"

export async function getPizzas() {
  const res = await fetch(`${API_BASE_URL}/api/pizzas`)
  if (!res.ok) throw new Error("Error al cargar pizzas")
  return res.json()
}

export async function getPizzaById(id = "p001") {
  const res = await fetch(`${API_BASE_URL}/api/pizzas/${id}`)
  if (!res.ok) throw new Error("Error al cargar la pizza")
  return res.json()
}
