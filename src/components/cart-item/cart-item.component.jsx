import { Table, Button, Icon } from 'semantic-ui-react';

import { CartItemImage, CartItemName, CartItemSizeContainer, CartItemSizeValue, CartItemDeleteBtn, CartItemQuantityValue } from './cart-item.styles';

const CartItem = ({ id, name, imageUrl, size, price, quantity, section, removeItemFromCart, changeItemAmount }) => (
  <Table.Row>
    <Table.Cell width="1">
      <CartItemImage src={imageUrl} alt={name} />
    </Table.Cell>
    <Table.Cell>
      <CartItemName to={`store/${section}/product-${id}`}>{name}</CartItemName>
      <CartItemSizeContainer>Size: <CartItemSizeValue>{size}</CartItemSizeValue></CartItemSizeContainer>
    </Table.Cell>
    <Table.Cell width="2">
      $ {price}
    </Table.Cell>
    <Table.Cell width="3">
      <Button icon size='mini' onClick={() => {changeItemAmount(id, quantity - 1)}}>
        <Icon name='chevron down' />
      </Button>
      <CartItemQuantityValue>{quantity}</CartItemQuantityValue>
      <Button icon size='mini' onClick={() => {changeItemAmount(id, quantity + 1)}}>
        <Icon name='chevron up' />
      </Button>
    </Table.Cell>
    <Table.Cell width="1">
      $ {quantity * price}
    </Table.Cell>
    <Table.Cell width="1">
      <CartItemDeleteBtn name='delete' color="red" size="big" onClick={() => {removeItemFromCart(id)}}/>
    </Table.Cell>
  </Table.Row>
);

export default CartItem;