import { List } from './List';
import { Portfolio } from './Portfolio';
import { Header } from './Header';
import { Footer } from './Footer';
import { listContent } from './List/content';
import { nanoid } from 'nanoid';
import { HomepageWrapper } from './styled';

function Homepage() {
  return (
    <>
      <HomepageWrapper>
        <Header />
        <main>
          {listContent.map(({ content, icon, title }) => (
            <List
              title={title}
              list={content}
              icon={icon}
              key={nanoid()}
            />
          ))}
          <Portfolio as="section" />
        </main>
        <Footer />
      </HomepageWrapper>
    </>
  );
}

export default Homepage;
