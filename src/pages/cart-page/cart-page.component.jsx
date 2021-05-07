import { connect } from 'react-redux';
import styled from 'styled-components';
import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.component';
import { createStructuredSelector } from 'reselect';
import { Table } from 'semantic-ui-react';

import CartItem from '../../components/cart-item/cart-item.component';
import { selectCartItems, selectCartItemsAmount } from '../../redux/cart/cart.selectors';
import { removeItemFromCart } from '../../redux/cart/cart.actions';

const CartPageContainer = styled.div`
  max-width: 1480px;
  margin: 0 auto;
`;

const CartPageContent = styled.section`

`

const CartPageTitle = styled.h2`

`

const CartPage = ({ cartItems, removeItemFromCart, cartItemsAmount }) => {

  return (<CartPageContainer>
    <BreadcrumbComponent />
    <CartPageContent>
      <CartPageTitle>Your Cart ({cartItemsAmount} items)</CartPageTitle>
    </CartPageContent>
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Item</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Total</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {cartItems.map((itemProps) => <CartItem {...itemProps} removeItemFromCart={removeItemFromCart} />)}
      </Table.Body>
    </Table>
  </CartPageContainer>)
}

  // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!"
  // id: "15"
  // imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png"
  // name: "Black Jean Shearling"
  // price: 50
  // quantity: 3
  // section: "jackets"
  // size: "8"

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsAmount: selectCartItemsAmount
})

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);