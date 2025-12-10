import styled from 'styled-components';

import Header from './components/Header';
import Search from './components/Search';
import LatestReleases from './components/LatestReleases';

const AppContainer = styled.div`
  width: 99vw;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LatestReleases />
    </AppContainer>
  );
}

export default App;
