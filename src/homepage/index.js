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
        {listContent.map(({ content, icon, title }) => (
          <List
            title={title}
            list={content}
            icon={icon}
            key={nanoid()}
          />
        ))}
        <Portfolio as="section" />
        <Footer />
      </HomepageWrapper>
    </>
  );
}

export default Homepage;
