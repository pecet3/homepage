import { List } from './common/List';
import { Header } from './features/Header';

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
    </>
  );
}

export default App;
