import { connect } from 'react-redux';
import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.component';
import { createStructuredSelector } from 'reselect';
import { Table } from 'semantic-ui-react';

import CartItem from '../../components/cart-item/cart-item.component';
import { selectCartItems, selectCartItemsAmount, selectCartItemsTotalPrice } from '../../redux/cart/cart.selectors';
import { removeItemFromCart, changeItemAmount } from '../../redux/cart/cart.actions';
import { CartPageContainer, CartPageContent, CartPageTitle, CartPageTotal, CartPageEmpty } from './cart-page.styles';

const CartPage = ({ cartItems, removeItemFromCart, cartItemsAmount, changeItemAmount, totalPrice }) => {
  return (<CartPageContainer>
    <BreadcrumbComponent />
    <CartPageContent>
      <CartPageTitle>Your Cart ({cartItemsAmount} items)</CartPageTitle>
    </CartPageContent>
    <Table compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Item</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Total</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {!cartItemsAmount ? <Table.Row><Table.Cell colSpan="6"><CartPageEmpty>Cart is empty</CartPageEmpty></Table.Cell></Table.Row> : null}
        {cartItems.map(({id, ...otherProps}) => <CartItem key={id} id={id} {...otherProps} removeItemFromCart={removeItemFromCart} changeItemAmount={changeItemAmount} />)}
      </Table.Body>
    </Table>
    <CartPageTotal>Total: {totalPrice}</CartPageTotal>
  </CartPageContainer>)
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsAmount: selectCartItemsAmount,
  totalPrice: selectCartItemsTotalPrice
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  changeItemAmount: (itemId, newQuantity) => dispatch(changeItemAmount(itemId, newQuantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);