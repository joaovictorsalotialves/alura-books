import styled from 'styled-components';

import Search from '../components/Search';
import LatestReleases from '../components/LatestReleases';

const AppContainer = styled.div`
  width: 99vw;
  height: 100vh;
`

function Home() {
  return (
    <AppContainer>
      <Search />
      <LatestReleases />
    </AppContainer>
  );
}

export default Home;
