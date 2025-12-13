import styled from 'styled-components';

import Search from '../components/Search';

const AppContainer = styled.div`
  width: 99vw;
  height: 100vh;
`

function Favorites() {
  return (
    <AppContainer>
      <Search />
    </AppContainer>
  );
}

export default Favorites;
