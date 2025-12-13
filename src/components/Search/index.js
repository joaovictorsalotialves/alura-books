import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Input from '../Input';

import { getBooks } from '../../services/books';

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: auto;
  width: 100%;
  margin: auto;
`

const Title = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

const Results = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  width: 80%;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`

export default function Search() {
  const [booksSearched, setBooksSearched] = useState([])
  const [books, setBooks] = useState([])

  useEffect(() => {
   fetchBooks()
  }, [])

  async function fetchBooks() {
    const booksApi = await getBooks()
    setBooks(booksApi)
  }

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input 
        placeholder='Escreva sua próxima leitura' 
        onKeyUp={(event) => {
          setBooksSearched(books.filter((book) => {
            if (event.target.value.trim()) return book.title.includes(event.target.value.trim())
            else return null
          }))
        }}
      />
      <Results>
        { booksSearched.map(book => {
          return(
            <Result>
              <p>{book.title}</p>
              <img src={book.src} alt={`Livro: ${book.title}`} />
            </Result>
          )
        })}
      </Results>
    </SearchContainer>
  )
}
