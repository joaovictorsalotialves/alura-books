import styled from 'styled-components';
import { books } from "./dataLastestReleases";

const LatestReleasesContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #FFF;
  color: #EB9B00;
  font-size: 36px;
  text-align: center;
  margin: 0;
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
      <Title>Ultimos lançamentos</Title>
      <NewBooksContainer>
        { books.map((book) => {
          return <img key={book.id} src={book.src}/>
        })}
      </NewBooksContainer>
    </LatestReleasesContainer>
  )
}
