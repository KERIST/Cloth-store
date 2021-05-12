import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const CartItemImage = styled.img`
  height: 100px;
`;

export const CartItemName = styled(Link)`

`;

export const CartItemSizeContainer = styled.div`

`; 

export const CartItemSizeValue = styled.span`

`; 

export const CartItemQuantityValue = styled.span`
  display: inline-block;
  padding: 0 1rem;
`; 

export const CartItemDeleteBtn = styled(Icon)`
  margin-left: 2rem;
  cursor: pointer;
`