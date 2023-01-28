import { List } from '../common/List';
import { Portfolio } from './Portfolio';
import { Header } from './Header';
import { Footer } from './Footer';
import { listContent } from '../common/List/content';
import { nanoid } from 'nanoid';
import { HomepageWrapper } from './styled';

function Homepage() {
  return (
    <>
      <HomepageWrapper>
        <Header />
        {listContent.map(({ content, icon, title }) => (
          <List as="li"
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
