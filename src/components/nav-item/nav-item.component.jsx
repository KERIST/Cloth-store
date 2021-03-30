import { NavItemContainer } from './nav-item.styles';

const NavItem = ({to, children}) => (
    <NavItemContainer to={to}>{children}</NavItemContainer>
)

export default NavItem;