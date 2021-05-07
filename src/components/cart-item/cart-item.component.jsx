import styled from 'styled-components';
import { Table, Icon } from 'semantic-ui-react';

const CartItemImage = styled.img`
  height: 100px;
`;

const CartItemName = styled.div`

`;

const CartItemSizeContainer = styled.div`

`; 

const CartItemSizeValue = styled.span`

`; 

const CartItemDeleteBtn = styled(Icon)`
  margin-left: 2rem;
  cursor: pointer;
`


const CartItem = ({ id, name, imageUrl, size, price, quantity, removeItemFromCart }) => (
  <Table.Row>
    <Table.Cell>
      <CartItemImage src={imageUrl} alt={name} />
    </Table.Cell>
    <Table.Cell>
      <CartItemName>{name}</CartItemName>
      <CartItemSizeContainer>Size: <CartItemSizeValue>{size}</CartItemSizeValue></CartItemSizeContainer>
    </Table.Cell>
    <Table.Cell>
      $ {price}
    </Table.Cell>
    <Table.Cell>
      {quantity}
    </Table.Cell>
    <Table.Cell>
      $ {quantity * price}
      <CartItemDeleteBtn name='delete' color="red" size="big" onClick={() => {removeItemFromCart(id)}}/>
    </Table.Cell>
  </Table.Row>
)

  // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi error perferendis minus consequatur. Molestias corporis distinctio ducimus magnam est accusamus, molestiae velit quae blanditiis ea voluptate quo, architecto laudantium!"
  // id: "15"
  // imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png"
  // name: "Black Jean Shearling"
  // price: 50
  // quantity: 3
  // section: "jackets"
  // size: "8"

export default CartItem;