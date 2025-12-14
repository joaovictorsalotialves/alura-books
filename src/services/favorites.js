import axios from 'axios'

const favoritesApi = axios.create({
  baseURL: 'http://localhost:8000/favorite',
})

async function getFavorites() {
  const response = await favoritesApi.get('/')
  return response.data
}

async function addFavorite(id) {
  await favoritesApi.post(`/${id}`)
}

async function removeFavorite(id) {
  await favoritesApi.delete(`/${id}`)
}

export {
  getFavorites,
  addFavorite,
  removeFavorite,
}
