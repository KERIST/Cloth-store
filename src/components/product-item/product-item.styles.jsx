import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductItemContainer = styled.div`
  width: 250px;
`;

export const ProductItemViewContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  transition: opacity 0.5s;
  background: rgba(0,0,0,.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductItemViewBtn = styled.div`
  border-radius: .28571429rem;
  outline: none;
  border: 1px solid #fff;
  font-size: 1.2rem;
  padding: 1rem;
  color: #fff;
`;

export const ProductItemImageContainer = styled.div`
  width: 250px;
  height: 333px;
  cursor: pointer;
  position: relative;

  &:hover {
    ${ProductItemViewContainer} {
      opacity: 1;
    }
  }
`;

export const ProductItemImage = styled.img`
  width: 250px;
  height: 333px;
`;

export const ProductItemDetails = styled.div`

`;

export const ProductItemName = styled(Link)`

`;

export const ProductItemPrice = styled.div`

`;