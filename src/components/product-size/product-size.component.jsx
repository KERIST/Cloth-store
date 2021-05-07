import styled from 'styled-components';

const ProductSizeContainer = styled.label`
  margin-right: 1rem;
`;

const ProductSizeLabel = styled.div`
  border: 1px solid #ccc;
  color: #666;
  cursor: pointer;
  text-align: center;
  font-size: 1.3rem;
  padding: .4rem;
`;

const ProductSizeInput = styled.input`
  display: none;

  &:checked ~ ${ProductSizeLabel} {
    outline: 3px solid #ccc;
  }
`;

const ProductSize = ({ value, groupName }) => (<ProductSizeContainer>
    <ProductSizeInput type="radio" name={groupName} value={value} required={true} />
    <ProductSizeLabel>{value}</ProductSizeLabel>
  </ProductSizeContainer>)

export default ProductSize;