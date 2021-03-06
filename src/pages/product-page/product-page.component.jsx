import React from 'react';
import { connect } from 'react-redux';
import { Rating, Button, Icon, Message } from 'semantic-ui-react';

import { selectItemById, selectSectionLoadingStatus } from '../../redux/sections/sections.selectors';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { selectUser } from '../../redux/user/user.selectors';

import ProductSize from '../../components/product-size/product-size.component';
import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.component';
import ReviewsContainer from '../../components/reviews-container/reviews-container.component';
import { ProductContainer, ProductImagesContainer, ProductDetailsContainer, 
  ProductName, ProductRating, ProductPrice, 
  ProductQuantity, ProductQuantityValue, ProductSizes,
  ProductGroupTitle, ProductDescription, ProductImage, ProductContent } from './product-page.styles';
import WithLoader from '../../components/withLoader/withLoader.component';

class ProductPage extends React.Component {
  constructor() {
    super();

    this.state = {
      itemData: false,
      quantityValue: 1,
      sizeValue: null,
      showWarningMessage: false
    }

    this.handleDecreaseBtnClick = this.handleDecreaseBtnClick.bind(this);
    this.handleIncreaseBtnClick = this.handleIncreaseBtnClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSizeRadioChange = this.handleSizeRadioChange.bind(this);
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

  handleSizeRadioChange(e) {
    this.setState(state => ({
      ...state, sizeValue: e.target.value, showWarningMessage: false
    }))
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { addItemToCart ,match: { params: { id } } } = this.props;
    const { itemData, quantityValue, sizeValue } = this.state;

    if(!sizeValue) {
      this.setState(state => ({
        ...state, showWarningMessage: true
      }));
      return;
    }

    const itemToAdd = {
      ...itemData,
      id: id,
      quantity: quantityValue,
      size: sizeValue
    }

    addItemToCart(itemToAdd);
  }

  render() {
    const { quantityValue, itemData: { name, price, sizes, description, imageUrl, reviews }, showWarningMessage } = this.state;
    const { user } = this.props;
    const { handleFormSubmit, handleDecreaseBtnClick, handleIncreaseBtnClick, handleSizeRadioChange} = this;

    return (<ProductContainer>
      <BreadcrumbComponent currentLicationName={name} />
      <ProductContent>
        <ProductImagesContainer>
          <ProductImage src={imageUrl} alt={name} />
        </ProductImagesContainer>
        <ProductDetailsContainer onSubmit={handleFormSubmit}>
          <ProductName>{name}</ProductName>
          <ProductRating>
            <Rating defaultRating={0} maxRating={5} disabled={user ? false : true} size="large" />
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
            {sizes ? sizes.map(value => <ProductSize key={value} value={value} groupName="size" changeHandler={handleSizeRadioChange} />) : ''}
          </ProductSizes>
          <ProductGroupTitle>
            PRODUCT DESCRIPTION
          </ProductGroupTitle>
          <ProductDescription>
            {description}
          </ProductDescription>
          {showWarningMessage ? <Message warning header='You must select size to add product!' /> : null}
          <Button color='black' fluid type="submit" size="huge">
            <Icon name='shop' /> ADD TO CART
          </Button>
          <ReviewsContainer reviews={reviews}/>
        </ProductDetailsContainer>
      </ProductContent>
    </ProductContainer>);
  }
}

const mapStateToProps = state => ({
  selectItemById: (section, id) => selectItemById(section, id)(state),
  user: selectUser(state), 
  loading: selectSectionLoadingStatus
})

const mapDispatchToProps = dispatch => ({
  addItemToCart: (item) => dispatch(addItemToCart(item))
});

export default WithLoader(connect(mapStateToProps, mapDispatchToProps)(ProductPage));