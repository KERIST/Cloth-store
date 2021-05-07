import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsAmount } from '../../redux/cart/cart.selectors';
 
const NavCartContainer = styled.span`
  position: relative;
`;

const NavCartItemsAmount = styled.div`
  position: absolute;
  top: 4px;
  font-size: 1rem;
  border-radius: 50%;
  color: #fff;
  display: flex;
  width: 1.6rem;
  height: 1.6rem;
  left: 26px;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
`;

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