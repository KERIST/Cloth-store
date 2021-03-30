import { HeaderContainer, HeaderWrapper } from './header.styles';
import { Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Nav from '../nav/nav.component';

const HeaderComponent = () => (
    <HeaderContainer>
        <HeaderWrapper>
            <Link to="/">
                <Header as='h2' inverted>
                    <Icon name='compass outline' />
                    <Header.Content>Cloth Store</Header.Content>
                </Header>
            </Link>

            <Nav />
        </HeaderWrapper>
    </HeaderContainer>
)

export default HeaderComponent;