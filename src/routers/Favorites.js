import { useEffect, useState } from 'react';
import styled from 'styled-components'

import livroImg from '../images/livro.png'

import { getFavorites } from '../services/favorites'

const AppContainer = styled.div`
    width: 99vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetchFavorites()
  }, [])

  async function fetchFavorites() {
    const favoritesApi = await getFavorites()
    setFavorites(favoritesApi)
  }

  return (
    <AppContainer>
    <div>
      <Title>Aqui estão seus livros favoritos:</Title>
      <ResultContainer>
        {favorites.map((favorite) => (
          <Result>
            <p>{favorite.title}</p>
            <img src={livroImg} alt={`Livro: ${favorite.title}`}/>
          </Result>
        ))}
      </ResultContainer>
    </div>
    </AppContainer>
  );
}

export default Favorites;
