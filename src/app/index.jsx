import { ContentContainer, GlobalStyle } from './index.styles';
import Header from './components/Header/Header.component.jsx';
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
