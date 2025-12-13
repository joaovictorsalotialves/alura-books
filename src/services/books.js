import axios from 'axios'

const booksApi = axios.create({
  baseURL: 'https://localhost:8000/book',
})

function getBooks() {
  const response = booksApi.get('/')
  return response.data
}

export {
  getBooks,
}
