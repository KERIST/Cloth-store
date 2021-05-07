import styled from 'styled-components';

export const ProductContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const ProductContent = styled.div`
  display: flex;
`;

export const ProductImagesContainer = styled.div`
`;

export const ProductImage = styled.img`
  height: 475px;
`;

export const ProductDetailsContainer = styled.form`
  padding: 1rem;
`;

export const ProductName = styled.div`
  font-size: 3rem;
  line-height: 3.5rem;
`;

export const ProductRating = styled.div`
  padding: 1rem 0;
`;

export const ProductPrice = styled.div`
  font-size: 1.5rem;
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductQuantityValue = styled.input`
  font-size: 1.6rem;
  padding: 0 1rem;
  width: 5rem;
  border: none;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const ProductSizes = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductGroupTitle = styled.div`
  padding: 1rem 0;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const ProductDescription = styled.p`

`;