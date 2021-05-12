import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.component';
import { selectItemsBySection } from '../../redux/sections/sections.selectors';
import ProductItem from '../../components/product-item/product-item.component';
import FilterForm from '../../components/filter-form/filter-form.component';
import { SectionPageContainer, SectionPageItemsContainer, SectionPageContent } from './section-page.styles';
import WithLoader from '../../components/withLoader/withLoader.component';

class SectionPage extends React.Component {
  constructor() {
    super();

    this.state = {
      items: false, 
      filter: {
        rating: false,
        size: [],
        minPrice: '',
        maxPrice: '',
        sortBy: ''
      }
    }

    this.handleRatingInputChange = this.handleRatingInputChange.bind(this);
    this.handleSizeCheckboxChange = this.handleSizeCheckboxChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.setFilterPriceValues = this.setFilterPriceValues.bind(this);
  }

  handleRatingInputChange(event) {
    const target = event.target;

    this.setState((state) => ({filter: {
      ...state.filter,
      rating: +target.value
    }}))
  }

  setFilterPriceValues(minPrice, maxPrice) {
    this.setState(state => ({
      ...state, filter: {...state.filter, minPrice, maxPrice }
    }))
  }

  handleSortChange(event, value) {
    this.setState(state => ({
      ...state, filter: {...state.filter, sortBy: value.value}
    }))
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
    const { items, filter: { size, sortBy, minPrice, maxPrice }, } = this.state;
    const { match: { params: section } } = this.props;

    let itemsArray = Object.entries(items).filter(([key, item]) => {
      let isItemInSizes = true;

      size.forEach((value) => {
        if(!item.sizes.includes(value)) {
          isItemInSizes = false;
        }
      })

      return isItemInSizes;
    });

    if(sortBy === 'pl') {
      itemsArray = itemsArray.sort((a,b) => a[1].price - b[1].price);
    } else if(sortBy === 'ph') {
      itemsArray = itemsArray.sort((a,b) => b[1].price - a[1].price);
    } 

    if(minPrice) {
      itemsArray = itemsArray.filter(([key, item]) => item.price > minPrice);
    } else if(maxPrice) {
      itemsArray = itemsArray.filter(([key, item]) => item.price < maxPrice);
    }

    const filterSizesArray = this.getFilterSizesArray();

    return (<SectionPageContainer>
      <BreadcrumbComponent />
      <SectionPageContent>
        <FilterForm 
          sizesArray={filterSizesArray} 
          ratingChangeHandler={this.handleRatingInputChange} 
          sizeChangeHandler={this.handleSizeCheckboxChange} 
          sizeValue={size}
          sortChangeHander={this.handleSortChange}
          setFilterPriceValues={this.setFilterPriceValues}
          />
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

export default WithLoader(withRouter(connect(mapStateToProps)(SectionPage)));