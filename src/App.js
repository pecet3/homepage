import { List } from './common/List';
import { Portfolio } from './features/Portfolio';
import { Header } from './features/Header';
import { Footer } from './features/Footer';

function App() {
  return (
    <>
      <Header />
      <List
        title="My skillset includes"
        isSkillset="true"
      />
      <List
        title="What I want to learn next"
      />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
