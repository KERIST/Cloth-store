import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.component';
import { selectItemsBySection } from '../../redux/items/items.selectors';
import ProductItem from '../../components/product-item/product-item.component';
import FilterForm from '../../components/filter-form/filter-form.component';

const SectionPageContainer = styled.section`
  max-width: 1480px;
  margin: 0 auto;
`;

const SectionPageItemsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 250px);
  @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
  }
`;

const SectionPageContent = styled.div`
  display: flex;
`;

class SectionPage extends React.Component {
  constructor() {
    super();

    this.state = {
      items: false, 
      filter: {
        rating: false,
        size: [],
        minPrize: false,
        maxPrize: false
      }
    }

    this.handleRatingInputChange = this.handleRatingInputChange.bind(this);
    this.handleSizeCheckboxChange = this.handleSizeCheckboxChange.bind(this);
    this.handleMinPriceChange = this.handleMinPriceChange.bind(this);
  }

  handleRatingInputChange(event) {
    const target = event.target;

    this.setState((state) => ({filter: {
      ...state.filter,
      rating: +target.value
    }}))
  }

  handleMinPriceChange(event) {
    console.log(event);
  }

  handleSizeCheckboxChange(event, value) {
    const isCheckBoxChecked = value.checked;
    const checkboxValue = value.label;

    if(isCheckBoxChecked) {

      this.setState((state) => {
        let sizesArray = state.filter.size.slice(0);

        if(!sizesArray.includes(checkboxValue)) {
          sizesArray.push(checkboxValue);

          return {filter: {
            ...state.filter,
            size: sizesArray
          }}
        }
      });

    } else {

      this.setState((state) => {
        let sizesArray = state.filter.size.slice(0);

        if(sizesArray.includes(checkboxValue)) {
          sizesArray.splice(sizesArray.indexOf(checkboxValue), 1);

          return {filter: {
            ...state.filter,
            size: sizesArray
          }}
        }
      });

    }
  }

  getFilterSizesArray() {
    if(this.state.items) {
      let combinedSizes = [];

      Object.values(this.state.items).forEach(item => {
        combinedSizes = combinedSizes.concat(item.sizes);
      });

      return Array.from(new Set(combinedSizes));
    }
    return [];
  }

  componentDidMount() {
    const { match: { params }, selectItemsBySection } = this.props;
    const { section } = params;

    let sectionItems = selectItemsBySection(section);

    this.setState({items: sectionItems});
  }

  componentDidUpdate() {
    const { history } = this.props;

    if(!this.state.items) {
      history.push('/404');
    }
  }

  render() {
    const { items, filter: { rating, size } } = this.state;
    const { match: { params: section } } = this.props;
    console.log(section);
    const itemsArray = Object.entries(items).filter(([key, item]) => {
      let isItemInSizes = true;

      size.forEach((value) => {
        if(!item.sizes.includes(value)) {
          isItemInSizes = false;
        }
      })

      return isItemInSizes;
    });
    const filterSizesArray = this.getFilterSizesArray();

    return (<SectionPageContainer>
      <BreadcrumbComponent />
      <SectionPageContent>
        <FilterForm sizesArray={filterSizesArray} minPriceChangeHandler={this.handleMinPriceChange} ratingChangeHandler={this.handleRatingInputChange} sizeChangeHandler={this.handleSizeCheckboxChange} />
        <SectionPageItemsContainer>
          { itemsArray.map(([key, itemData]) => <ProductItem key={key} id={key} sectionPath={section.section} itemData={itemData} />) }
        </SectionPageItemsContainer>
      </SectionPageContent>
    </SectionPageContainer>);
  }
};

const mapStateToProps = state => ({
  selectItemsBySection: (section) => selectItemsBySection(section)(state)
});

export default withRouter(connect(mapStateToProps)(SectionPage));