import { List } from './common/List';
import { Portfolio } from './features/Portfolio';
import { Header } from './features/Header';
import { Footer } from './features/Footer';
import { listContent } from './common/List/content';
import { nanoid } from 'nanoid';

function App() {
  return (
    <>
      <Header />
      {listContent.map(({ content, icon, title }) => (
        <List
          title={title}
          list={content}
          icon={icon}
          key={nanoid()}
        />
      ))}
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
