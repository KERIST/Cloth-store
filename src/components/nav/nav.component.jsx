import { Icon } from 'semantic-ui-react';

import { NavContainer } from './nav.styles';
import NavItem from '../nav-item/nav-item.component';

const Nav = () => (
    <NavContainer>
        <NavItem to="/store">Store</NavItem>
        <NavItem to="/contacts">Contacts</NavItem>
        <NavItem to="/signin">Sign in</NavItem>
        <NavItem to="/search"><Icon name="search" /></NavItem>
        <NavItem to="/search"><Icon name="shopping cart" /></NavItem>
    </NavContainer>
);

export default Nav;