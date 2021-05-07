import React from 'react';
import { connect } from 'react-redux';
import { Rating, Button, Icon } from 'semantic-ui-react';

import { selectItemById } from '../../redux/items/items.selectors';
import { addItemToCart } from '../../redux/cart/cart.actions';

import ProductSize from '../../components/product-size/product-size.component';
import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.component';
import { ProductContainer, ProductImagesContainer, ProductDetailsContainer, 
  ProductName, ProductRating, ProductPrice, 
  ProductQuantity, ProductQuantityValue, ProductSizes,
  ProductGroupTitle, ProductDescription, ProductImage, ProductContent } from './product-page.styles';

class ProductPage extends React.Component {
  constructor() {
    super();

    this.state = {
      itemData: false,
      quantityValue: 1
    }

    this.handleDecreaseBtnClick = this.handleDecreaseBtnClick.bind(this);
    this.handleIncreaseBtnClick = this.handleIncreaseBtnClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    const { selectItemById, match: { params: { id, section } } } = this.props;

    this.setState({
      itemData: selectItemById(section, id)
    });
  }

  componentDidUpdate() {
    const { history } = this.props;

    if(!this.state.itemData) {
      history.push('/404');
    }
  }

  handleIncreaseBtnClick(e) {
    e.preventDefault();

    this.setState(state => ({
      ...state,
      quantityValue: state.quantityValue + 1
    }))
  }

  handleDecreaseBtnClick(e) {
    e.preventDefault();

    const { quantityValue } = this.state;

    if(quantityValue === 1) return;

    this.setState(state => ({
      ...state,
      quantityValue: state.quantityValue - 1
    }))
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { addItemToCart ,match: { params: { id } } } = this.props;
    const { itemData, quantityValue } = this.state;
    const sizeValue = e.target.size.value;

    const itemToAdd = {
      ...itemData,
      id: id,
      quantity: quantityValue,
      size: sizeValue
    }

    addItemToCart(itemToAdd);
  }

  render() {
    const { quantityValue, isItemInCart, itemData: { name, price, sizes, description, imageUrl } } = this.state;
    const { handleFormSubmit, handleDecreaseBtnClick, handleIncreaseBtnClick} = this;

    return (<ProductContainer>
      <BreadcrumbComponent currentLicationName={name} />
      <ProductContent>
        <ProductImagesContainer>
          <ProductImage src={imageUrl} alt={name} />
        </ProductImagesContainer>
        <ProductDetailsContainer onSubmit={handleFormSubmit}>
          <ProductName>{name}</ProductName>
          <ProductRating>
            <Rating defaultRating={0} maxRating={5} disabled size="large" />
          </ProductRating>
          <ProductPrice>$ {price}</ProductPrice>
          <ProductGroupTitle>
            Quantity:
          </ProductGroupTitle>
          <ProductQuantity>
            <Button icon size='mini' onClick={handleDecreaseBtnClick}>
              <Icon name='chevron down' />
            </Button>
            <ProductQuantityValue value={quantityValue} readOnly />
            <Button icon size='mini' onClick={handleIncreaseBtnClick}>
              <Icon name='chevron up' />
            </Button>
          </ProductQuantity>
          <ProductGroupTitle>
            Size:
          </ProductGroupTitle>
          <ProductSizes>
            {sizes ? sizes.map(value => <ProductSize key={value} value={value} groupName="size" />) : ''}
          </ProductSizes>
          <ProductGroupTitle>
            PRODUCT DESCRIPTION
          </ProductGroupTitle>
          <ProductDescription>
            {description}
          </ProductDescription>
          <Button color='black' fluid type="submit" size="huge">
            <Icon name='shop' /> ADD TO CART
          </Button>
        </ProductDetailsContainer>
      </ProductContent>
    </ProductContainer>);
  }
}

const mapStateToProps = state => ({
  selectItemById: (section, id) => selectItemById(section, id)(state)
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: (item) => dispatch(addItemToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);