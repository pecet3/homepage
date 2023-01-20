import { List } from './common/List';
import { Portfolio } from './features/Portfolio';
import { Header } from './features/Header';
import { Footer } from './features/Footer';
import { listContent } from './common/List/content';
import { nanoid } from 'nanoid';
import { HomepageWrapper } from './styled';

function Homepage() {
  return (
    <>
      <HomepageWrapper>
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
      </HomepageWrapper>
    </>
  );
}

export default Homepage;
