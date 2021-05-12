import { Page404Container } from './page404.styles';
import { Header, Icon } from 'semantic-ui-react';

const Page404 = () => (
  <Page404Container>
    <Header as='h2' icon>
      <Icon name='settings' />
      Oops 404!
      <Header.Subheader>
        Sorry! The page you're looking for doesn't exist.
      </Header.Subheader>
    </Header>
  </Page404Container>
)

export default Page404;