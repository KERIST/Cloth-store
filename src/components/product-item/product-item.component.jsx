import { withRouter } from 'react-router-dom';

import { ProductItemContainer, ProductItemImageContainer, ProductItemImage, 
  ProductItemViewContainer, ProductItemViewBtn, ProductItemDetails, 
  ProductItemName, ProductItemPrice } from './product-item.styles';

const ProductItem = ( {itemData: {name, imageUrl, price}, history, sectionPath, id} ) => {
  const pathToProduct = `/store/${sectionPath}/product-${id}`;

  const handleImageClick = (e) => {
    history.push(pathToProduct);
  }

  return (<ProductItemContainer>
    <ProductItemImageContainer onClick={handleImageClick}>
      <ProductItemImage src={imageUrl} alt={name} />
      <ProductItemViewContainer>
        <ProductItemViewBtn>View Product</ProductItemViewBtn>
      </ProductItemViewContainer>
    </ProductItemImageContainer>
    <ProductItemDetails>
      <ProductItemName to={pathToProduct}>{name}</ProductItemName>
      <ProductItemPrice>{price}$</ProductItemPrice>
    </ProductItemDetails>
  </ProductItemContainer>);
};

export default withRouter(ProductItem);