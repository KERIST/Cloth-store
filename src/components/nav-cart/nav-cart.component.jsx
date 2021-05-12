import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { NavCartContainer, NavCartItemsAmount } from './nav-cart.styles';
import { selectCartItemsAmount } from '../../redux/cart/cart.selectors';
 
const NavCart = ({ itemsAmount }) => {
  return (<NavCartContainer>
    <Icon name="shopping cart" />
    {itemsAmount ? <NavCartItemsAmount>{itemsAmount}</NavCartItemsAmount> : null}
  </NavCartContainer>);
};

const mapStateToProps = createStructuredSelector({
  itemsAmount: selectCartItemsAmount
});

export default connect(mapStateToProps)(NavCart);