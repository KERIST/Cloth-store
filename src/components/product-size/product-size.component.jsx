import { ProductSizeContainer, ProductSizeLabel, ProductSizeInput } from './product-size.styles';

const ProductSize = ({ value, groupName, changeHandler }) => (<ProductSizeContainer>
    <ProductSizeInput type="radio" name={groupName} value={value} onChange={changeHandler} />
    <ProductSizeLabel>{value}</ProductSizeLabel>
  </ProductSizeContainer>)

export default ProductSize;