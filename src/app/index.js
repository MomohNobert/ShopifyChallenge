import Header from './components/Header/header.component';
import { ContentContainer, GlobalStyle } from './index.styles';
import Movies from './templates/Movies/Movies.template';
import Nominations from './templates/Nominations/Nominations.template';

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
