import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';

import { NavContainer, NavButton } from './nav.styles';
import NavItem from '../nav-item/nav-item.component';
import NavCart from '../nav-cart/nav-cart.component';
import { selectUser } from '../../redux/user/user.selectors';
import { signOut } from '../../redux/user/user.actions';

const Nav = ({ user, signOut }) => {
    const handleSignOutClick = () => {
        signOut();
    }

    return (<NavContainer>
        <NavItem to="/store">Store</NavItem>
        <NavItem to="/contacts">Contacts</NavItem>
        {user ? <NavButton onClick={handleSignOutClick}>Sign Out</NavButton> : <NavItem to="/sign-in">Sign in</NavItem>}
        <NavItem to="/search"><Icon name="search" /></NavItem>
        <NavItem to="/cart"><NavCart /></NavItem>
    </NavContainer>);
};

const mapStateToProps = createStructuredSelector({
    user: selectUser
});

const mapDispatchToProps = dispatch => ({
    signOut: () => {dispatch(signOut());}
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);