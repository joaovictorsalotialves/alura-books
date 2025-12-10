import styled from 'styled-components';
import { books } from "./dataLastestReleases";
import bookImage from '../../images/livro2.png';

import Title from '../Title'
import Card from '../Card';

const LatestReleasesContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`

export default function LatestReleases() {
  return (
    <LatestReleasesContainer>
      <Title textColor='#EB9B00' fontSize='36px'>Ultimos lançamentos</Title>
      <NewBooksContainer>
        { books.map((book) => {
          return <img key={book.id} src={book.src}/>
        })}
      </NewBooksContainer>
      <Card 
        title='Talvez você se interesse por'
        subtitle='Angular 11'
        description='Construindo uma aplicação com a plataforma Google'
        img={bookImage}
      />
    </LatestReleasesContainer>
  )
}
