import { useState } from 'react';

import { Checkbox, Select } from 'semantic-ui-react';
import FilterFormRating from '../filter-form-rating/filter-form-rating.component';
import FilterFormTitle from '../filter-form-title/filter-form-title.component';

import { FilterFormContaier, FilterFormGroup, FilterFormInput, FilterFormContent, 
  FilterFormSizesContainer, FilterFormPrice, FilterFormPriceBtn } from './filter-form.styles';

const FilterForm = ({ sizesArray, ratingChangeHandler, sizeChangeHandler, minPriceChangeHandler, sortChangeHander, setFilterPriceValues }) => {

  const [minPriceValue, setMinPriceValue] = useState('');
  const [maxPriceValue, setMaxPriceValue] = useState('');

  const handleMinPriceChange = (e) => {
    setMinPriceValue(+e.target.value);
  }

  const handleMaxPriceChange = (e) => {
    setMaxPriceValue(+e.target.value);
  }

  const handleClearPriceBtnClick = () => {
    setMinPriceValue('');
    setMaxPriceValue('');
    setFilterPriceValues('', '');
  }

  const handleApplyPriceClick = () => {
    setFilterPriceValues(minPriceValue, maxPriceValue)
  }

  const sortOptions = [
    { key: 'default', value: 'default', text: 'Default' },
    { key: 'pl', value: 'pl', text: 'Price: Low to High' },
    { key: 'ph', value: 'ph', text: 'Price: High to Low' },
  ];

  return (<FilterFormContaier>
    <FilterFormGroup>
      <FilterFormTitle text="Sort by" isHidden={true}/>
      <FilterFormContent>
        <Select placeholder='Sort by' options={sortOptions} onChange={sortChangeHander}/>
      </FilterFormContent>
    </FilterFormGroup>
    <FilterFormGroup>
      <FilterFormTitle text="Size" isHidden={true} />
      <FilterFormSizesContainer>
        {sizesArray.map(value => <Checkbox key={value} label={value} onChange={sizeChangeHandler} />)}
      </FilterFormSizesContainer>
    </FilterFormGroup>
    <FilterFormGroup>
      <FilterFormTitle text="Rating" isHidden={true} />
      <FilterFormContent>
        <FilterFormRating ratingChangeHandler={ratingChangeHandler} inputValue={1} inputName="rating" ratingValue={1} ratingMax={5} />
        <FilterFormRating ratingChangeHandler={ratingChangeHandler} inputValue={2} inputName="rating" ratingValue={2} ratingMax={5} />
        <FilterFormRating ratingChangeHandler={ratingChangeHandler} inputValue={3} inputName="rating" ratingValue={3} ratingMax={5} />
        <FilterFormRating ratingChangeHandler={ratingChangeHandler} inputValue={4} inputName="rating" ratingValue={4} ratingMax={5} />
      </FilterFormContent>
    </FilterFormGroup>
    <FilterFormGroup>
      <FilterFormTitle text="Price" isHidden={minPriceValue || maxPriceValue ? false : true} btnClickHandler={handleClearPriceBtnClick} />
      <FilterFormContent>
        <FilterFormPrice>
          <FilterFormInput placeholder='Min.' type="number" min="0" value={minPriceValue} onChange={handleMinPriceChange} />
          <FilterFormInput placeholder='Max.' type="number" min="0" value={maxPriceValue} onChange={handleMaxPriceChange}/>
        </FilterFormPrice>
        <FilterFormPriceBtn color="blue" onClick={handleApplyPriceClick} >Update</FilterFormPriceBtn>
      </FilterFormContent>
    </FilterFormGroup>
    </FilterFormContaier>);
}

export default FilterForm;