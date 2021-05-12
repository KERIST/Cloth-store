import styled from 'styled-components';

export const ProductSizeContainer = styled.label`
  margin-right: 1rem;
`;

export const ProductSizeLabel = styled.div`
  border: 1px solid #ccc;
  color: #666;
  cursor: pointer;
  text-align: center;
  font-size: 1.3rem;
  padding: .4rem;
`;

export const ProductSizeInput = styled.input`
  display: none;

  &:checked ~ ${ProductSizeLabel} {
    outline: 3px solid #ccc;
  }
`;