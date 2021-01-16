import Header from './components/Header/header.component';
import Movies from './components/Movies/Movies.component';
import Nominations from './components/Nominations/Nominations.component';
import { ContentContainer, GlobalStyle } from './index.styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContentContainer>
        <Movies />
        <Nominations />
      </ContentContainer>
    </>
  );
}

export default App;
